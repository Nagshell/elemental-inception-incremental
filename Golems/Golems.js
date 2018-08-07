// Loop timer

var elem = ["Earth","Water","Air","Fire"];

var timeToAutoSave = 1*60*1000;
var lastTimestamp;
function loop(timestamp) {
	if(!lastTimestamp) {
		lastTimestamp = timestamp;
	}
	if(dynamicData.popupActive) {
		tempData.canvasTicks += 1;
		draw();
	} else if(cutsceneActive) {
		cutsceneActive.advanceCutscene(timestamp - lastTimestamp);
	} else {
		timeToAutoSave-= timestamp - lastTimestamp;
		if(timeToAutoSave < 0) {
			timeToAutoSave = 1*60*1000;
			saveData();
		}
		dynamicData.accumulatedTime += timestamp - lastTimestamp;
		var rounds = 0;
		while(dynamicData.accumulatedTime > 16 && rounds++<2) {
			dynamicData.accumulatedTime-=16*rounds*rounds;
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
	for(var i=0;i<3;i++) {
		var oCMachine = dynamicData.utilityMachines[i];
		if(oCMachine.unlocked) {
			staticData.utilityMachines[i].effect();
			for(var j=0;j<oCMachine.tanks.length;j++) {
				oCMachine.tanks[j].prevAmount = oCMachine.tanks[j].amount;
			}
		}
	}
	for(var i=0;i<4;i++) {
		var tObject = dynamicData.conversionMachines[i];
		var tIng = tObject.ingredient;
		var tRea = tObject.reagent;
		var tAmount = Math.min(tIng.amount/tIng.drain,tRea.amount/tRea.drain);
		tAmount *= Math.min(1,0.01*dynamicData.stats.machineBonusSpeed*dynamicData.stats.machineGolemSpeed);
		tIng.used = tIng.drain * tAmount;
		tIng.amount -= tIng.used;
		tRea.used = tRea.drain * tAmount;
		tRea.amount -= tRea.used;
		dynamicData.elementalTanks[tObject.product.type].gained += tObject.product.rate * tAmount *(1+dynamicData.utilityMachines[0].boost);
	}
	
	for(var i=0;i<4;i++) {
		var nAmount = dynamicData.elementalTanks[elem[i]].amount;
		var aRecord = dynamicData.elementalTanks[elem[i]].record;
		aRecord.push(nAmount);
		if(aRecord.length > 121) {
			aRecord.shift();
		}
		dynamicData.elementalTanks[elem[i]].change = (aRecord[aRecord.length-1]-aRecord[0])/aRecord.length*60;
		
		
		
		var totalDrain = 0;
		for(var j=0;j<4;j++) {
			var oCMachine = dynamicData.conversionMachines[j];
			if(oCMachine.ingredient.valve && oCMachine.ingredient.type === elem[i]) {
				totalDrain += oCMachine.ingredient.drain;
			}
			if(oCMachine.reagent.valve && oCMachine.reagent.type === elem[i]) {
				totalDrain += oCMachine.reagent.drain;
			}
		}
		for(var j=0;j<3;j++) {
			var oCMachine = dynamicData.utilityMachines[j];
			if(oCMachine.unlocked) {
				for(var k=0;k<oCMachine.tanks.length;k++) {
					var oMachineTank = oCMachine.tanks[k];
					if(oMachineTank.valve && oMachineTank.type === elem[i]) {
						totalDrain += oMachineTank.drain;
					}
				}
			}
		}

		if(totalDrain === 0)
			continue;
		
		nAmount *= 0.001 * Math.pow(dynamicData.stats.pipes.level,1.5);
		nAmount = Math.min(dynamicData.elementalTanks[elem[i]].amount,nAmount);
		dynamicData.elementalTanks[elem[i]].amount -= nAmount;
		
		for(var j=0;j<4;j++) {
			var oCMachine = dynamicData.conversionMachines[j];
			
			if(oCMachine.ingredient.valve && oCMachine.ingredient.type === elem[i]) {
				oCMachine.ingredient.amount += nAmount*oCMachine.ingredient.drain/totalDrain;
			}
			if(oCMachine.reagent.valve && oCMachine.reagent.type === elem[i]) {
				oCMachine.reagent.amount += nAmount*oCMachine.reagent.drain/totalDrain;
			}
		}
		for(var j=0;j<3;j++) {
			var oCMachine = dynamicData.utilityMachines[j];
			if(oCMachine.unlocked) {
				for(var k=0;k<oCMachine.tanks.length;k++) {
					var oMachineTank = oCMachine.tanks[k];
					if(oMachineTank.valve && oMachineTank.type === elem[i]) {
						if(j==0) {
							var transferAmount = Math.min(1+oMachineTank.amount/4,nAmount*oMachineTank.drain/totalDrain);
							dynamicData.elementalTanks[elem[i]].amount += nAmount*oMachineTank.drain/totalDrain - transferAmount;
							oMachineTank.amount += transferAmount;
						} else {
							oMachineTank.amount += nAmount*oMachineTank.drain/totalDrain;
						}
						
					}
				}
			}
		}
	}
	if(dynamicData.stats.machineOverflowRegulator) {
		for(var j=0;j<4;j++) {
			var oCMachine = dynamicData.conversionMachines[j];
			
			var rA1 = oCMachine.ingredient.amount/oCMachine.ingredient.drain;
			var rA2 = oCMachine.reagent.amount/oCMachine.reagent.drain;
			if(rA1 > rA2*3+1) {
				rA1 = (rA2*3+1)*oCMachine.ingredient.drain;
				dynamicData.elementalTanks[oCMachine.ingredient.type].amount += oCMachine.ingredient.amount - rA1;
				oCMachine.ingredient.amount = rA1;
			} else if(rA2 > rA1*3+1) {
				rA2 = (rA1*3+1)*oCMachine.reagent.drain;
				dynamicData.elementalTanks[oCMachine.reagent.type].amount += oCMachine.reagent.amount - rA2;
				oCMachine.reagent.amount = rA2;
			}
		}
	}
	for(var j=0;j<3;j++) {
		var oCMachine = dynamicData.utilityMachines[j];
		if(oCMachine.unlocked) {
			for(var k=0;k<oCMachine.tanks.length;k++) {
				var oMachineTank = oCMachine.tanks[k];
				var tempCapacity = Math.min(oMachineTank.capacity,oMachineTank.prevAmount*(1+Math.log10(oMachineTank.capacity)/3)+1);
				if(oMachineTank.amount > tempCapacity) {
					dynamicData.elementalTanks[oMachineTank.type].amount += oMachineTank.amount - tempCapacity;
					oMachineTank.amount = tempCapacity;
				}
			}
		}
	}
	if(++dynamicData.rifts.delay >= dynamicData.rifts.maxDelay) {
		dynamicData.rifts.delay = 0;
		for(var j=0;j<dynamicData.rifts.unlocked;j++) {
			dynamicData.elementalTanks[elem[j]].gained += dynamicData.rifts.power;
		}
	}
	
	
	for(var i=0;i<4;i++) {
		dynamicData.golemEffects.production[elem[i]] = 0;
	}
	for(var i=0;i<dynamicData.golems.length;i++) {
		staticData.golems[dynamicData.golems[i]].effect();
	}
	for(var i=0;i<4;i++) {
		dynamicData.elementalTanks[elem[i]].gained += dynamicData.golemEffects.production[elem[i]];
	}
	var maxedCounter = 0;
	for(var j=0;j<4;j++) {
		dynamicData.elementalTanks[elem[j]].amount += dynamicData.elementalTanks[elem[j]].gained;
		
		if(dynamicData.elementalTanks[elem[j]].amount > 1e300) {
			dynamicData.elementalTanks[elem[j]].amount = 1e300;
			maxedCounter++;
		}
		dynamicData.elementalTanks[elem[j]].gained = 0;
	}
	if(maxedCounter === 4) {
		achievementsData.achievementList.tanks.unlocked = true;
	}
}


function boughtUpgrade(oC,upgradeId) {
	var oUpgrade = staticData.upgrades[upgradeId];
	var bAffordable = true;
	for(var i=0;i<oUpgrade.costs.length;i++) {
		if(oUpgrade.costs[i].amount > dynamicData.elementalTanks[oUpgrade.costs[i].type].amount) {
			bAffordable = false;
		}
	}
	if(bAffordable) {
		for(var i=0;i<oUpgrade.costs.length;i++) {
			var elementCleared = oUpgrade.costs[i].type;
			dynamicData.elementalTanks[elementCleared].record = [];
			if(dynamicData.utilityMachines[2].unlocked) {
				dynamicData.elementalTanks[elementCleared].amount = Math.pow(dynamicData.utilityMachines[2].tanks[elementalTranlator[elementCleared]].amount, 1/dynamicData.utilityMachines[2].divider);
			} else {
				dynamicData.elementalTanks[elementCleared].amount = 0;
			}
			
			for(var j=0;j<4;j++) {
				var oCMachine = dynamicData.conversionMachines[j];
				if(oCMachine.ingredient.type === elementCleared)
					oCMachine.ingredient.amount = 0;
				if(oCMachine.reagent.type === elementCleared)
					oCMachine.reagent.amount = 0;
			}
		}
		dynamicData.stats.upgradeCounter++;
		if(dynamicData.stats.upgradeCounter === 32) {
			achievementsData.achievementList.upgrades.unlocked = true;
		}
		dynamicData.upgradesBought[upgradeId] = true;
		oUpgrade.effect();
		redraw[0] = true;
		if(oUpgrade.chained) {
			for(var i=0;i<dynamicData.visibleUpgrades.length;i++) {
				if(dynamicData.visibleUpgrades[i] === upgradeId)
					dynamicData.visibleUpgrades[i] = oUpgrade.chained;
			}
			oC.arg1 = oUpgrade.chained;
		} else {
			oC.clicked = false;
		}
	}
}
function addUpgrade(sUpgrade) {
	dynamicData.visibleUpgrades.push(sUpgrade);
	dynamicData.clickableElements[0].push({
		"x1" : 2,
		"x2" : 111,
		"y1" : 89+dynamicData.stats.upgradesNum*35,
		"y2" : 121+dynamicData.stats.upgradesNum*35,
		"arg1" : sUpgrade,
		"clicked" : "upgradeBought",
		"hovered" : "tooltipHoverUpgrade",
		"unhovered" : "tooltipUnhover"
	});
	dynamicData.stats.upgradesNum++;
	redraw[0]=true;
}

function addConversionMachineValves() {
	var temp = dynamicData.stats.valvesAdded;
	dynamicData.clickableElements[0].push({
		"x1" : 692,
		"x2" : 722,
		"y1" : 135+temp*63,
		"y2" : 165+temp*63,
		"arg1" : temp,
		"arg2" : "ingredient",
		"clicked" : "valveSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 744,
		"x2" : 774,
		"y1" : 135+temp*63,
		"y2" : 165+temp*63,
		"arg1" : temp,
		"arg2" : "reagent",
		"clicked" : "valveSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 689,
		"x2" : 797,
		"y1" : 110+temp*63,
		"y2" : 168+temp*63,
		"arg1" : temp,
		"hovered" : "tooltipHoverConversionMachine",
		"unhovered" : "tooltipUnhover"
	});
	dynamicData.stats.valvesAdded++;
}
function addReactionCatalyst() {
	var oMachine = dynamicData.utilityMachines[0];
	oMachine.unlocked = true;
	dynamicData.clickableElements[0].push({
		"x1" : 692,
		"x2" : 722,
		"y1" : 135+dynamicData.stats.valvesAdded*63,
		"y2" : 165+dynamicData.stats.valvesAdded*63,
		"arg1" : 0,
		"arg2" : 0,
		"clicked" : "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 744,
		"x2" : 774,
		"y1" : 135+dynamicData.stats.valvesAdded*63,
		"y2" : 165+dynamicData.stats.valvesAdded*63,
		"arg1" : 0,
		"arg2" : 1,
		"clicked" : "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 689,
		"x2" : 797,
		"y1" : 110+dynamicData.stats.valvesAdded*63,
		"y2" : 168+dynamicData.stats.valvesAdded*63,
		"arg1" : 0,
		"hovered" : "tooltipHoverUtilityMachine",
		"unhovered" : "tooltipUnhover"
	});
	dynamicData.stats.valvesAdded++;
}
function addOrbInfuser() {
	var oMachine = dynamicData.utilityMachines[1];
	oMachine.unlocked = true;
	dynamicData.clickableElements[0].push({
		"x1" : 692,
		"x2" : 722,
		"y1" : 135+dynamicData.stats.valvesAdded*63,
		"y2" : 165+dynamicData.stats.valvesAdded*63,
		"arg1" : 1,
		"arg2" : 3,
		"clicked" : "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 744,
		"x2" : 774,
		"y1" : 135+dynamicData.stats.valvesAdded*63,
		"y2" : 165+dynamicData.stats.valvesAdded*63,
		"arg1" : 1,
		"arg2" : 0,
		"clicked" : "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 692,
		"x2" : 722,
		"y1" : 135+dynamicData.stats.valvesAdded*63+32,
		"y2" : 165+dynamicData.stats.valvesAdded*63+32,
		"arg1" : 1,
		"arg2" : 2,
		"clicked" : "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 744,
		"x2" : 774,
		"y1" : 135+dynamicData.stats.valvesAdded*63+32,
		"y2" : 165+dynamicData.stats.valvesAdded*63+32,
		"arg1" : 1,
		"arg2" : 1,
		"clicked" : "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 689,
		"x2" : 797,
		"y1" : 110+dynamicData.stats.valvesAdded*63,
		"y2" : 168+dynamicData.stats.valvesAdded*63+32,
		"arg1" : 1,
		"hovered" : "tooltipHoverUtilityMachine",
		"unhovered" : "tooltipUnhover"
	});
}
function addStash() {
	var oMachine = dynamicData.utilityMachines[2];
	oMachine.unlocked = true;
	dynamicData.clickableElements[0].push({
		"x1" : 692,
		"x2" : 722,
		"y1" : 135+dynamicData.stats.valvesAdded*63+95,
		"y2" : 165+dynamicData.stats.valvesAdded*63+95,
		"arg1" : 2,
		"arg2" : 3,
		"clicked" : "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 744,
		"x2" : 774,
		"y1" : 135+dynamicData.stats.valvesAdded*63+95,
		"y2" : 165+dynamicData.stats.valvesAdded*63+95,
		"arg1" : 2,
		"arg2" : 0,
		"clicked" : "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 692,
		"x2" : 722,
		"y1" : 135+dynamicData.stats.valvesAdded*63+32+95,
		"y2" : 165+dynamicData.stats.valvesAdded*63+32+95,
		"arg1" : 2,
		"arg2" : 2,
		"clicked" : "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 744,
		"x2" : 774,
		"y1" : 135+dynamicData.stats.valvesAdded*63+32+95,
		"y2" : 165+dynamicData.stats.valvesAdded*63+32+95,
		"arg1" : 2,
		"arg2" : 1,
		"clicked" : "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 689,
		"x2" : 797,
		"y1" : 110+dynamicData.stats.valvesAdded*63+95,
		"y2" : 168+dynamicData.stats.valvesAdded*63+32+95,
		"arg1" : 2,
		"hovered" : "tooltipHoverUtilityMachine",
		"unhovered" : "tooltipUnhover"
	});
}
function addMergeButton() {
	dynamicData.mergingButton = {
		"x1" : 350,
		"x2" : 450,
		"y1" : 130,
		"y2" : 160,
		"clicked" : "combineGolems",
		"hovered" : "tooltipHoverMergeButton",
		"unhovered" : "tooltipUnhover"
	};
	dynamicData.clickableElements[1].push(dynamicData.mergingButton);
	redraw[1]=true;
}
function setup() {
	for(var i=0;i<4;i++)
		addConversionMachineValves();
	for(var sUpgrade in staticData.upgrades) {
		if(staticData.upgrades[sUpgrade].starting) {
			addUpgrade(sUpgrade);
		}
	}
	
	for(var i=0;i<6;i++) {
		for(var j=0;j<5;j++) {
			if(i!==j) {
				dynamicData.clickableElements[i].push({
					"x1" : 100+120*j,
					"x2" : 210+120*j,
					"y1" : 0,
					"y2" : 30,
					"arg1" : j,
					"clicked" : "tabSwitch",
					"disableHighlight" : "checkDisabledTab"
				});
			}
		}
	}
		
	dynamicData.clickableElements[4].push({
		"x1" : 330,
		"x2" : 470,
		"y1" : 120,
		"y2" : 160,
		"clicked" : "saveData"
	});
	
	dynamicData.clickableElements[4].push({
		"x1" : 330,
		"x2" : 470,
		"y1" : 180,
		"y2" : 220,
		"clicked" : "loadData"
	});
	
	dynamicData.clickableElements[4].push({
		"x1" : 330,
		"x2" : 470,
		"y1" : 240,
		"y2" : 280,
		"clicked" : "resetData"
	});
	
	
	dynamicData.clickableElements[2].push({
		"x1" : 230,
		"x2" : 370,
		"y1" : 60,
		"y2" : 100,
		"clicked" : "scrollLoreTop"
	});
	
	dynamicData.clickableElements[2].push({
		"x1" : 430,
		"x2" : 570,
		"y1" : 60,
		"y2" : 100,
		"clicked" : "scrollLoreBot"
	});
	
	dynamicData.clickableElements[2].push({
		"x1" : 100,
		"x2" : 700,
		"y1" : 170,
		"y2" : 200,
		"hovered" : "scrollLoreUp",
		"unhovered" : "scrollLoreStop"
	});
	dynamicData.clickableElements[2].push({
		"x1" : 100,
		"x2" : 700,
		"y1" : 140,
		"y2" : 170,
		"hovered" : "scrollLoreUpFast",
		"unhovered" : "scrollLoreStop"
	});
	
	dynamicData.clickableElements[2].push({
		"x1" : 100,
		"x2" : 700,
		"y1" : 680,
		"y2" : 710,
		"hovered" : "scrollLoreDown",
		"unhovered" : "scrollLoreStop"
	});
	
	dynamicData.clickableElements[2].push({
		"x1" : 100,
		"x2" : 700,
		"y1" : 710,
		"y2" : 740,
		"hovered" : "scrollLoreDownFast",
		"unhovered" : "scrollLoreStop"
	});
	
	
	
	
	dynamicData.clickableElements[0].push({
		"x1" : 10,
		"x2" : 110,
		"y1" : 700,
		"y2" : 730,
		"hovered" : "showFAQ",
		"unhovered" : "hideFAQ"
	});
	dynamicData.clickableElements[0].push({
		"x1" : 10,
		"x2" : 110,
		"y1" : 750,
		"y2" : 780,
		"arg1" : 5,
		"clicked" : "tabSwitch",
		"disableHighlight" : "checkDisabledTab"
	});
	dynamicData.clickableElements[4].push({
		"x1" : 100,
		"x2" : 300,
		"y1" : 300,
		"y2" : 340,
		"clicked" : "toggleColorblind"
	});
	dynamicData.clickableElements[4].push({
		"x1" : 500,
		"x2" : 700,
		"y1" : 300,
		"y2" : 340,
		"clicked" : "mainHub"
	});
	dynamicData.clickableElements[4].push({
		"x1" : 220,
		"x2" : 380,
		"y1" : 400,
		"y2" : 440,
		"clicked" : "importData"
	});
	dynamicData.clickableElements[4].push({
		"x1" : 420,
		"x2" : 580,
		"y1" : 400,
		"y2" : 440,
		"clicked" : "exportData"
	});
	dynamicData.clickableElements[5].push({
		"x1" : 330,
		"x2" : 470,
		"y1" : 450,
		"y2" : 490,
		"arg1" : 0,
		"clicked" : "tabSwitch",
		"disableHighlight" : "checkDisabledTab"
	});
	dynamicData.clickableElements[5].push({
		"x1" : 230,
		"x2" : 370,
		"y1" : 350,
		"y2" : 390,
		"arg1" : 0,
		"clicked" : "patreonLink"
	});
	dynamicData.clickableElements[5].push({
		"x1" : 430,
		"x2" : 570,
		"y1" : 350,
		"y2" : 390,
		"arg1" : 0,
		"clicked" : "paypalLink"
	});
	
	requestAnimationFrame(loop);
	lore.addLore("start0");
	loadData();
}

function createGolem(type) {
	for(var i=0;i<4;i++) {
		dynamicData.elementalTanks[elem[i]].record = [];
		var cObject = dynamicData.conversionMachines[i];
		if(dynamicData.utilityMachines[2].unlocked) {
			dynamicData.elementalTanks[elem[i]].amount = Math.pow(dynamicData.utilityMachines[2].tanks[i].amount, 1/dynamicData.utilityMachines[2].divider);
		} else {
			dynamicData.elementalTanks[elem[i]].amount = 0;
		}
		cObject.ingredient.amount = 0;
		cObject.reagent.amount = 0;
	}
	for(var i=0;i<dynamicData.golems.length;i++) {
		if(dynamicData.golems[i]===type) {
			cutscenes["eat"].golemType = type;
			startCutscene("eat");
			if(dynamicData.golemEatPopup) {
				dynamicData.golemEatPopup=false;
				lore.activatePopup("eat0");
				lore.addLore("eat0");
			}
			return;
		}
	}
	switch(dynamicData.stats.golemCounter) {
		case 0:
			addUpgrade("stash0");
			addUpgrade("machineSpeed0");
			dynamicData.tabStatus[1].disabled = false;
			break;
		case 1:
			addMergeButton();
			dynamicData.tabStatus[1].highlight = true;
			
			tempData.mergingGolems.push(dynamicData.golems[0]);
			tempData.mergingGolems.push(type);
			dynamicData.golems.push(type);
			lore.activatePopup("merge0");
			lore.addLore("merge0");
			combineGolems();
			dynamicData.stats.golemCounter++;
			return;
			break;
		case 15:
			achievementsData.achievementList.golems.unlocked = true;
			break;
	}
	dynamicData.stats.golemCounter++;
	dynamicData.golems.push(type);
}

function combineGolems() {
	if(tempData.mergingGolems.length === 2) {
		var newGolem = staticData.golems[tempData.mergingGolems[0]].combine[tempData.mergingGolems[1]];
		var addable = true;
		for(var i=0;i<dynamicData.golems.length;i++) {
			if(newGolem === dynamicData.golems[i]) {
				addable = false;
				break;
			}
		}
		if(addable) {
			for(var i=0;i<dynamicData.golems.length;i++) {
				if(tempData.mergingGolems[0] === dynamicData.golems[i]) {
					dynamicData.golems.splice(i--,1);
				} else if(tempData.mergingGolems[1] === dynamicData.golems[i]) {
					dynamicData.golems.splice(i--,1);
				} 
			}
			startCutscene("combine");
			tempData.mergingGolems = [];
			dynamicData.golems.push(newGolem);
			
			if(newGolem === "Infernal") {
				lore.addLore("infernal0");
			}
		}
	}
}

function saveData() {
	if(achievementsData.achievementList.speed.time < 1000 || isNaN(achievementsData.achievementList.speed.time)) {
		achievementsData.achievementList.speed.unlocked = false;
		achievementsData.achievementList.speed.time = 23*60*60*1000;
		dynamicData.startTime = new Date();
		dynamicData.startTime.setHours(dynamicData.startTime.getHours() - 2);
	}
	if(achievementsData.achievementList.speed.time < (90*60)*1000) {
		achievementsData.achievementList.speed.unlocked = true;
	}
	
	localStorage.setItem("dynamicData",JSON.stringify(dynamicData));
	localStorage.setItem("achievementsData",JSON.stringify(achievementsData));
}


var achievementsVersion;
function loadData(data) {
	var temporaryLoadedData;
	if(data) {
		var object = JSON.parse(atob(data));
		temporaryLoadedData = object.dynamic;
	} else {
		temporaryLoadedData = JSON.parse(localStorage.getItem("dynamicData"));
		if(!temporaryLoadedData) {
			return;
		}
	}
	if(!temporaryLoadedData.version || temporaryLoadedData.version !== dynamicData.version) {
		while(versionFixer(temporaryLoadedData)) {}
		return;
	}
	if(data) {
		var object = JSON.parse(atob(data));
		achievementsData = object.achievements;
	} else {
		achievementsData = JSON.parse(localStorage.getItem("achievementsData"));
	}
	while(achievementsVersion) {
		chievoFixer();
	}
	if(temporaryLoadedData.hardResetActivated) {
		saveData();
		return;
	}
	dynamicData = temporaryLoadedData;
	dynamicData.startTime = new Date(dynamicData.startTime);
	for(var i=0;i<5;i++)
		redraw[i]=true;
	tempData.activeTab = 0;
	mergingGolems = [];
	canvasTooltip = null;
	currentlyHovered = null;
	highlight.active = false;
}

function saveDataToCode() {
	return btoa(JSON.stringify({"dynamic": dynamicData, "achievements": achievementsData}));
}

function resetData() {
	if(confirm("Are you sure? It'll wipe everything except earned achievements.")) {
		dynamicData.hardResetActivated = true;
		saveData();
		location.reload();
	}
}
function versionFixer(data) {
	switch(data.version) {
		case 2.21:
			return false;
			break;
		case 2.2:
			achievementsVersion = 2.2;
			data.version = 2.21;
			break;
		case 2.1:
			data.clickableElements[0].push({
				"x1" : 10,
				"x2" : 110,
				"y1" : 700,
				"y2" : 730,
				"hovered" : "showFAQ",
				"unhovered" : "hideFAQ"
			});
			data.clickableElements[0].push({
				"x1" : 10,
				"x2" : 110,
				"y1" : 750,
				"y2" : 780,
				"arg1" : 5,
				"clicked" : "tabSwitch",
				"disableHighlight" : "checkDisabledTab"
			});
			data.clickableElements[4].push({
				"x1" : 100,
				"x2" : 300,
				"y1" : 300,
				"y2" : 340,
				"clicked" : "toggleColorblind"
			});
			data.clickableElements[4].push({
				"x1" : 500,
				"x2" : 700,
				"y1" : 300,
				"y2" : 340,
				"clicked" : "mainHub"
			});
			data.clickableElements[4].push({
				"x1" : 220,
				"x2" : 380,
				"y1" : 400,
				"y2" : 440,
				"clicked" : "importData"
			});
			data.clickableElements[4].push({
				"x1" : 420,
				"x2" : 580,
				"y1" : 400,
				"y2" : 440,
				"clicked" : "exportData"
			});
			data.clickableElements[5].push({
				"x1" : 330,
				"x2" : 470,
				"y1" : 450,
				"y2" : 490,
				"arg1" : 0,
				"clicked" : "tabSwitch",
				"disableHighlight" : "checkDisabledTab"
			});
			data.clickableElements[5].push({
				"x1" : 230,
				"x2" : 370,
				"y1" : 350,
				"y2" : 390,
				"arg1" : 0,
				"clicked" : "patreonLink"
			});
			data.clickableElements[5].push({
				"x1" : 430,
				"x2" : 570,
				"y1" : 350,
				"y2" : 390,
				"arg1" : 0,
				"clicked" : "paypalLink"
			});
			
			data.colorblindMode = false;
			data.tabStatus.push({
				"highlight" : false
				});
				
			for(var j=0;j<5;j++) {
				if(5!==j) {
					dynamicData.clickableElements[5].push({
						"x1" : 100+120*j,
						"x2" : 210+120*j,
						"y1" : 0,
						"y2" : 30,
						"arg1" : j,
						"clicked" : "tabSwitch",
						"disableHighlight" : "checkDisabledTab"
					});
				}
			}
			data.version = 2.2;
			break;
		default:
			alert("Sorry, due to recent patch I need to make a hard reset on older saves. Game is not very long so I hope it's okay. I promise once playthroughs will start to get longer I'll make it not necessary.");
			dynamicData.hardResetActivated = true;
			saveData();
			location.reload();
			break;
	}
	return true;
}

function chievoFixer() {
	switch(achievementsVersion) {
		case 2.2:
			achievementsData.achievementList.speed = {
				"unlocked" : false,
				"name" : "How fast can you go?",
				"description" : "",
				"time" : 23*60*60*1000
			};
			achievementsVersion = null;
			break;
	}
}
setup();
