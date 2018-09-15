// Loop timer
var elem = ["Earth", "Water", "Air", "Fire"];

var defaultAutosaveTimer = 1000;
var timeToAutoSave = defaultAutosaveTimer;
var lastTimestamp;

function loop(timestamp) {
	if (!lastTimestamp) {
		lastTimestamp = timestamp;
	}
	if (dynamicData.popupActive) {
		tempData.canvasTicks += 1;
		draw();
	}
	else if (cutsceneActive) {
		cutsceneActive.advanceCutscene(timestamp - lastTimestamp);
	}
	else {
		timeToAutoSave -= timestamp - lastTimestamp;
		if (timeToAutoSave < 0) {
			timeToAutoSave = defaultAutosaveTimer;
			saveData();
		}
		dynamicSaveData.accumulatedTime += timestamp - lastTimestamp;
		var rounds = 0;
		while (dynamicSaveData.accumulatedTime > 16 && rounds++ < 2) {
			dynamicSaveData.accumulatedTime -= 16 * rounds * rounds;
			tempData.canvasTicks += 1;
			tick();
		}
		draw();
	}
	lastTimestamp = timestamp;
	requestAnimationFrame(loop);
}

function tick() {
	//logic
	var tempNumber;
	//Utility machines onTick
	for (var i = 0; i < dynamicData.utilityMachines.length; i++) {
		var oCMachine = dynamicData.utilityMachines[i];
		staticData.utilityMachines[i].effect();
		for (var j = 0; j < oCMachine.tanks.length; j++) {
			oCMachine.tanks[j].prevAmount = oCMachine.tanks[j].amount;
		}
	}
	//Convesion machines production
	for (var i = 0; i < dynamicData.conversionMachines.length; i++) {
		var tObject = dynamicData.conversionMachines[i];
		var tIng = tObject.ingredient;
		var tRea = tObject.reagent;
		var tAmount = Math.min(tIng.amount / tIng.drain, tRea.amount / tRea.drain);
		tAmount *= Math.min(1, 0.01 * dynamicData.stats.machineBonusSpeed * dynamicData.stats.machineGolemSpeed);
		tIng.used = tIng.drain * tAmount;
		tIng.amount -= tIng.used;
		tRea.used = tRea.drain * tAmount;
		tRea.amount -= tRea.used;
		dynamicData.elementalTanks[tObject.product.type].gained += tObject.product.rate * tAmount * (1 + dynamicData.utilityMachines[0].boost);
	}
	// Main tanks flow
	for (var tankElement in dynamicData.elementalTanks) {
		var oTank = dynamicData.elementalTanks[tankElement];
		var nAmount = oTank.amount;
		var aRecord = oTank.record;
		if (aRecord.length < 120) {
			aRecord.push(nAmount);
			oTank.recordPos = aRecord.length;
		}
		else {
			if (oTank.recordPos == aRecord.length) {
				oTank.recordPos = 0;
			}
			aRecord[oTank.recordPos++] = nAmount;
		}
		if (oTank.recordPos == aRecord.length) {
			oTank.change = (aRecord[oTank.recordPos - 1] - aRecord[0]) / aRecord.length * 60
		}
		else {
			oTank.change = (aRecord[oTank.recordPos - 1] - aRecord[oTank.recordPos]) / aRecord.length * 60;
		}
		if (dynamicSaveData.options.relativeChange) {
			oTank.change /= oTank.amount;
			oTank.change *= 100;
		}
		var totalDrain = 0;
		for (var j = 0; j < dynamicData.conversionMachines.length; j++) {
			var oCMachine = dynamicData.conversionMachines[j];
			if (oCMachine.ingredient.valve && oCMachine.ingredient.type === tankElement) {
				totalDrain += oCMachine.ingredient.drain;
			}
			if (oCMachine.reagent.valve && oCMachine.reagent.type === tankElement) {
				totalDrain += oCMachine.reagent.drain;
			}
		}
		for (var j = 0; j < dynamicData.utilityMachines.length; j++) {
			var oCMachine = dynamicData.utilityMachines[j];
			for (var k = 0; k < oCMachine.tanks.length; k++) {
				var oMachineTank = oCMachine.tanks[k];
				if (oMachineTank.valve && oMachineTank.type === tankElement) {
					totalDrain += oMachineTank.drain;
				}
			}
		}
		if (totalDrain === 0) {
			continue;
		}
		nAmount *= 0.001 * Math.pow(dynamicData.stats.pipes.level, 1.5);
		nAmount = Math.min(oTank.amount, nAmount);
		oTank.amount -= nAmount;
		for (var j = 0; j < dynamicData.conversionMachines.length; j++) {
			var oCMachine = dynamicData.conversionMachines[j];
			if (oCMachine.ingredient.valve && oCMachine.ingredient.type === tankElement) {
				oCMachine.ingredient.amount += nAmount * oCMachine.ingredient.drain / totalDrain;
			}
			if (oCMachine.reagent.valve && oCMachine.reagent.type === tankElement) {
				oCMachine.reagent.amount += nAmount * oCMachine.reagent.drain / totalDrain;
			}
		}
		for (var j = 0; j < dynamicData.utilityMachines.length; j++) {
			var oCMachine = dynamicData.utilityMachines[j];
			for (var k = 0; k < oCMachine.tanks.length; k++) {
				var oMachineTank = oCMachine.tanks[k];
				if (oMachineTank.valve && oMachineTank.type === tankElement) {
					if (j == 0) {
						var transferAmount = Math.min(1 + oMachineTank.amount / 4, nAmount * oMachineTank.drain / totalDrain);
						oTank.amount += nAmount * oMachineTank.drain / totalDrain - transferAmount;
						oMachineTank.amount += transferAmount;
					}
					else {
						oMachineTank.amount += nAmount * oMachineTank.drain / totalDrain;
					}
				}
			}
		}
	}
	// Conversion machines overflow
	if (dynamicData.stats.machineOverflowRegulator) {
		for (var j = 0; j < dynamicData.conversionMachines.length; j++) {
			var oCMachine = dynamicData.conversionMachines[j];
			var rA1 = oCMachine.ingredient.amount / oCMachine.ingredient.drain;
			var rA2 = oCMachine.reagent.amount / oCMachine.reagent.drain;
			if (rA1 > rA2 * 3 + 1) {
				rA1 = (rA2 * 3 + 1) * oCMachine.ingredient.drain;
				dynamicData.elementalTanks[oCMachine.ingredient.type].amount += oCMachine.ingredient.amount - rA1;
				oCMachine.ingredient.amount = rA1;
			}
			else if (rA2 > rA1 * 3 + 1) {
				rA2 = (rA1 * 3 + 1) * oCMachine.reagent.drain;
				dynamicData.elementalTanks[oCMachine.reagent.type].amount += oCMachine.reagent.amount - rA2;
				oCMachine.reagent.amount = rA2;
			}
		}
	}
	// Utility machines flow limiter
	for (var j = 0; j < dynamicData.utilityMachines.length; j++) {
		var oCMachine = dynamicData.utilityMachines[j];
		for (var k = 0; k < oCMachine.tanks.length; k++) {
			var oMachineTank = oCMachine.tanks[k];
			var tempCapacity = Math.min(oMachineTank.capacity, oMachineTank.prevAmount * (1 + Math.log10(oMachineTank.capacity) / 3) + 1);
			if (oMachineTank.amount > tempCapacity) {
				dynamicData.elementalTanks[oMachineTank.type].amount += oMachineTank.amount - tempCapacity;
				oMachineTank.amount = tempCapacity;
			}
		}
	}
	// Rifts
	for (var tankElement in dynamicData.elementalTanks) {
		dynamicData.elementalTanks[tankElement].gained += dynamicData.rifts.power;
	}
	// Golems init
	for (var tankElement in dynamicData.elementalTanks) {
		dynamicData.golemEffects.production[tankElement] = 0;
	}
	// Golem effects
	for (var golem in dynamicData.golems) {
		if (dynamicData.golems[golem] > 0) {
			staticData.golems[golem].effect();
		}
	}
	// Applying golem production
	for (var tankElement in dynamicData.elementalTanks) {
		dynamicData.elementalTanks[tankElement].gained += dynamicData.golemEffects.production[tankElement];
	}
	// Applying tank gains
	for (var tankElement in dynamicData.elementalTanks) {
		dynamicData.elementalTanks[tankElement].amount += dynamicData.elementalTanks[tankElement].gained;
		if (dynamicData.elementalTanks[tankElement].amount > 1e300) {
			dynamicData.elementalTanks[tankElement].amount = 1e300;
		}
		dynamicData.elementalTanks[tankElement].gained = 0;
	}
}

function boughtUpgrade(oC, upgradeId, loadOverride) {
	var oUpgrade = staticData.upgrades[upgradeId];
	if (loadOverride) {
		dynamicData.upgradesBought[upgradeId] = true;
		oUpgrade.effect(loadOverride);
		return;
	}
	var bAffordable = true;
	for (var i = 0; i < oUpgrade.costs.length; i++) {
		if (oUpgrade.costs[i].amount > dynamicData.elementalTanks[oUpgrade.costs[i].type].amount) {
			bAffordable = false;
		}
	}
	if (bAffordable) {
		for (var i = 0; i < oUpgrade.costs.length; i++) {
			var elementCleared = oUpgrade.costs[i].type;
			dynamicData.elementalTanks[elementCleared].record = [];
			dynamicData.elementalTanks[elementCleared].amount = Math.pow(dynamicData.utilityMachines[2].tanks[elementalTranlator[elementCleared]].amount, 1 / dynamicData.utilityMachines[2].divider);
			for (var j = 0; j < 4; j++) {
				var oCMachine = dynamicData.conversionMachines[j];
				if (oCMachine.ingredient.type === elementCleared) oCMachine.ingredient.amount = 0;
				if (oCMachine.reagent.type === elementCleared) oCMachine.reagent.amount = 0;
			}
		}
		dynamicData.upgradesBought[upgradeId] = true;
		oUpgrade.effect();
		redraw[0] = true;
		if (oUpgrade.chained) {
			for (var i = 0; i < dynamicData.visibleUpgrades.length; i++) {
				if (dynamicData.visibleUpgrades[i] === upgradeId) {
					dynamicData.visibleUpgrades[i] = oUpgrade.chained;
					break;
				}
			}
			oC.arg1 = oUpgrade.chained;
		}
		else {
			oC.clicked = false;
		}
	}
}

function addUpgrade(sUpgrade) {
	dynamicData.visibleUpgrades.push(sUpgrade);
	clicker.addClicker({
		path: (function (ctx) {
			ctx.rect(2, 89 + this * 35, 109, 32);
		}).bind(dynamicData.stats.upgradesNum),
		bounds: {
			x: 1,
			y: 88 + dynamicData.stats.upgradesNum * 35,
			w: 111,
			h: 34
		},
		clicked: (dynamicData.upgradesBought[sUpgrade]) ? false : functionData.upgradeBought,
		hovered: functionData.tooltipHoverUpgrade,
		unhovered: functionData.tooltipUnhover,
		arg1: sUpgrade
	}, 0);
	dynamicData.stats.upgradesNum++;
	redraw[0] = true;
}

function createGolem(type) {
	for (var tankElement in dynamicData.elementalTanks) {
		dynamicData.elementalTanks[tankElement].record = [];
		dynamicData.elementalTanks[tankElement].amount = Math.pow(dynamicData.utilityMachines[2].tanks[elementalTranlator[tankElement]].amount, 1 / dynamicData.utilityMachines[2].divider);
	}
	for (var i = 0; i < dynamicData.conversionMachines.length; i++) {
		var cObject = dynamicData.conversionMachines[i];
		cObject.ingredient.amount = 0;
		cObject.reagent.amount = 0;
	}
	for (var i = 0; i < dynamicData.golems.length; i++) {
		if (dynamicData.golems[i] === type) {
			cutscenes["eat"].golemType = type;
			startCutscene("eat");
			if (dynamicData.golemEatPopup) {
				dynamicData.golemEatPopup = false;
				lore.activatePopup("eat0");
				lore.addLore("eat0");
			}
			return;
		}
	}
	dynamicData.golems[type] = 1;
}

function combineGolems() {
	if (tempData.mergingGolems.length === 2) {
		var newGolem = staticData.golems[tempData.mergingGolems[0]].combine[tempData.mergingGolems[1]];
		if (!newGolem) {
			return;
		}
		var addable = true;
		if (dynamicData.golems[newGolem] > 0) {
			addable = false;
		}
		if (addable) {
			dynamicData.golems[tempData.mergingGolems[0]] = 0;
			dynamicData.golems[tempData.mergingGolems[1]] = 0;

			startCutscene("combine");
			tempData.mergingGolems = [];
			dynamicData.golems[newGolem] = 1;
		}
	}
}
