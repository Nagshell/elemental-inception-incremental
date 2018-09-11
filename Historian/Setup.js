var softResetEnabled = false;

var backupTempData = JSON.stringify(tempData);
var backupDynamicData = JSON.stringify(dynamicData);
var backupDynamicSaveData = JSON.stringify(dynamicSaveData);
var backupPermamentSaveData = JSON.stringify(permanentSaveData);

function addConversionMachineValves(machinesAdded) {
	dynamicData.clickableElements[0].push({
		"x1": 692,
		"x2": 722,
		"y1": 135 + machinesAdded * 63,
		"y2": 165 + machinesAdded * 63,
		"arg1": machinesAdded,
		"arg2": "ingredient",
		"clicked": "valveSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 744,
		"x2": 774,
		"y1": 135 + machinesAdded * 63,
		"y2": 165 + machinesAdded * 63,
		"arg1": machinesAdded,
		"arg2": "reagent",
		"clicked": "valveSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 689,
		"x2": 797,
		"y1": 110 + machinesAdded * 63,
		"y2": 168 + machinesAdded * 63,
		"arg1": machinesAdded,
		"hovered": "tooltipHoverConversionMachine",
		"unhovered": "tooltipUnhover"
	});
}

function addReactionCatalyst() {
	dynamicData.clickableElements[0].push({
		"x1": 692,
		"x2": 722,
		"y1": 135 + 4 * 63,
		"y2": 165 + 4 * 63,
		"arg1": 0,
		"arg2": 0,
		"clicked": "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 744,
		"x2": 774,
		"y1": 135 + 4 * 63,
		"y2": 165 + 4 * 63,
		"arg1": 0,
		"arg2": 1,
		"clicked": "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 689,
		"x2": 797,
		"y1": 110 + 4 * 63,
		"y2": 168 + 4 * 63,
		"arg1": 0,
		"hovered": "tooltipHoverUtilityMachine",
		"unhovered": "tooltipUnhover"
	});
	dynamicData.clickableElements[0].push({
		"x1": 600,
		"x2": 677,
		"y1": 460,
		"y2": 518,
		"clicked": "catalystSwitch",
		"arg1": 0,
		"hovered": "tooltipHoverCatalystButton",
		"unhovered": "tooltipUnhover"
	});
}

function addOrbInfuser() {
	dynamicData.clickableElements[0].push({
		"x1": 692,
		"x2": 722,
		"y1": 135 + 5 * 63,
		"y2": 165 + 5 * 63,
		"arg1": 1,
		"arg2": 3,
		"clicked": "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 744,
		"x2": 774,
		"y1": 135 + 5 * 63,
		"y2": 165 + 5 * 63,
		"arg1": 1,
		"arg2": 0,
		"clicked": "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 692,
		"x2": 722,
		"y1": 135 + 5 * 63 + 32,
		"y2": 165 + 5 * 63 + 32,
		"arg1": 1,
		"arg2": 2,
		"clicked": "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 744,
		"x2": 774,
		"y1": 135 + 5 * 63 + 32,
		"y2": 165 + 5 * 63 + 32,
		"arg1": 1,
		"arg2": 1,
		"clicked": "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 689,
		"x2": 797,
		"y1": 110 + 5 * 63,
		"y2": 168 + 5 * 63 + 32,
		"arg1": 1,
		"hovered": "tooltipHoverUtilityMachine",
		"unhovered": "tooltipUnhover"
	});
}

function addStash() {
	dynamicData.clickableElements[0].push({
		"x1": 692,
		"x2": 722,
		"y1": 135 + 5 * 63 + 95,
		"y2": 165 + 5 * 63 + 95,
		"arg1": 2,
		"arg2": 3,
		"clicked": "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 744,
		"x2": 774,
		"y1": 135 + 5 * 63 + 95,
		"y2": 165 + 5 * 63 + 95,
		"arg1": 2,
		"arg2": 0,
		"clicked": "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 692,
		"x2": 722,
		"y1": 135 + 5 * 63 + 32 + 95,
		"y2": 165 + 5 * 63 + 32 + 95,
		"arg1": 2,
		"arg2": 2,
		"clicked": "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 744,
		"x2": 774,
		"y1": 135 + 5 * 63 + 32 + 95,
		"y2": 165 + 5 * 63 + 32 + 95,
		"arg1": 2,
		"arg2": 1,
		"clicked": "utilityMachineTankSwitch"
	});
	dynamicData.clickableElements[0].push({
		"x1": 689,
		"x2": 797,
		"y1": 110 + 5 * 63 + 95,
		"y2": 168 + 5 * 63 + 32 + 95,
		"arg1": 2,
		"hovered": "tooltipHoverUtilityMachine",
		"unhovered": "tooltipUnhover"
	});
}

function addMergeButton() {
	dynamicData.clickableElements[1].push({
		"x1": 350,
		"x2": 450,
		"y1": 130,
		"y2": 160,
		"clicked": "combineGolems",
		"hovered": "tooltipHoverMergeButton",
		"unhovered": "tooltipUnhover"
	});
}

function setup() {

	var tabSwitch = [];
	for (var j = 0; j < 6; j++) {
		tabSwitch.push({
			"x1": 50 + 120 * j,
			"x2": 160 + 120 * j,
			"y1": 0,
			"y2": 30,
			"arg1": j,
			"clicked": "tabSwitch",
			"disableHighlight": "checkTab"
		});
	}
	for (var i = 0; i < 7; i++) {
		dynamicData.clickableElements[i] = tabSwitch.slice();
	}
	for (var i = 0; i < setupButtons.length; i++) {
		dynamicData.clickableElements[i] = dynamicData.clickableElements[i].concat(setupButtons[i]);
	}
	for (var i = 0; i < dynamicData.conversionMachines.length; i++) {
		addConversionMachineValves(i);
	}
	addReactionCatalyst();
	addOrbInfuser();
	addStash();
	addMergeButton();

	loadData();

	if (softResetEnabled) {
		for (var sUpgrade in staticData.upgrades) {
			if (staticData.upgrades[sUpgrade].starting) {
				addUpgrade(sUpgrade);
			}
		}
		for (var golem in staticData.golems) {
			dynamicData.golems[golem] = 0;
		}
	}

	skillTree.processNodes();
}

var setupButtons = [
	//Main
	[{
			"x1": 10,
			"x2": 110,
			"y1": 700,
			"y2": 730,
			"hovered": "showFAQ",
			"unhovered": "hideFAQ"
		},
		{
			"x1": 10,
			"x2": 110,
			"y1": 750,
			"y2": 780,
			"arg1": 5,
			"clicked": "tabSwitch",
			"disableHighlight": "checkTab"
		},
	],
	//Golems
	[],
	//Lore
	[{
			"x1": 230,
			"x2": 370,
			"y1": 60,
			"y2": 100,
			"clicked": "scrollLoreTop"
		},
		{
			"x1": 430,
			"x2": 570,
			"y1": 60,
			"y2": 100,
			"clicked": "scrollLoreBot"
		},
		{
			"x1": 100,
			"x2": 700,
			"y1": 170,
			"y2": 200,
			"hovered": "scrollLoreUp",
			"unhovered": "scrollLoreStop"
		},
		{
			"x1": 100,
			"x2": 700,
			"y1": 140,
			"y2": 170,
			"hovered": "scrollLoreUpFast",
			"unhovered": "scrollLoreStop"
		},
		{
			"x1": 100,
			"x2": 700,
			"y1": 680,
			"y2": 710,
			"hovered": "scrollLoreDown",
			"unhovered": "scrollLoreStop"
		},
		{
			"x1": 100,
			"x2": 700,
			"y1": 710,
			"y2": 740,
			"hovered": "scrollLoreDownFast",
			"unhovered": "scrollLoreStop"
		},
	],
	//Chievos
	[],
	//Options
	[{
			"x1": 330,
			"x2": 470,
			"y1": 120,
			"y2": 160,
			"clicked": "saveData"
		},
		{
			"x1": 330,
			"x2": 470,
			"y1": 180,
			"y2": 220,
			"clicked": "loadData"
		},
		{
			"x1": 330,
			"x2": 470,
			"y1": 240,
			"y2": 280,
			"clicked": "resetData"
		},
		{
			"x1": 100,
			"x2": 300,
			"y1": 300,
			"y2": 340,
			"clicked": "toggleColorblind"
		},
		{
			"x1": 500,
			"x2": 700,
			"y1": 300,
			"y2": 340,
			"clicked": "mainHub"
		},
		{
			"x1": 220,
			"x2": 380,
			"y1": 400,
			"y2": 440,
			"clicked": "importData"
		},
		{
			"x1": 420,
			"x2": 580,
			"y1": 400,
			"y2": 440,
			"clicked": "exportData"
		}
	],
	//Tree
	[],
	//Donate
	[{
			"x1": 330,
			"x2": 470,
			"y1": 450,
			"y2": 490,
			"arg1": 0,
			"clicked": "tabSwitch",
			"disableHighlight": "checkTab"
		},
		{
			"x1": 230,
			"x2": 370,
			"y1": 350,
			"y2": 390,
			"arg1": 0,
			"clicked": "patreonLink"
		}, {
			"x1": 430,
			"x2": 570,
			"y1": 350,
			"y2": 390,
			"arg1": 0,
			"clicked": "paypalLink"
		},
	],
	[],
	[],
	[],
	[],
	[],
	[],
	[]
];

function saveData() {
	for (var tankElement in dynamicSaveData.elementalTanks) {
		dynamicSaveData.elementalTanks[tankElement].amount = dynamicData.elementalTanks[tankElement].amount;
	}
	for (var i = 0; i < dynamicSaveData.conversionMachines.length; i++) {
		for (var machineTank in dynamicSaveData.conversionMachines[i]) {
			for (var property in dynamicSaveData.conversionMachines[i][machineTank]) {
				dynamicSaveData.conversionMachines[i][machineTank][property] = dynamicData.conversionMachines[i][machineTank][property];
			}
		}
	}
	for (var i = 0; i < dynamicSaveData.utilityMachines.length; i++) {
		for (var j = 0; j < dynamicSaveData.utilityMachines[i].tanks.length; j++) {
			for (var property in dynamicSaveData.utilityMachines[i].tanks[j]) {
				dynamicSaveData.utilityMachines[i].tanks[j][property] = dynamicData.utilityMachines[i].tanks[j][property];
			}
		}
	}
	dynamicSaveData.golems = dynamicData.golems;
	dynamicSaveData.upgradesBought = dynamicData.upgradesBought;
	dynamicSaveData.visibleUpgrades = dynamicData.visibleUpgrades;

	permanentSaveData.lore.obtained = dynamicData.lore.obtained;

	dynamicSaveData.softResetEnabled = dynamicData.softResetEnabled;

	localStorage.setItem("dynamicSaveData", JSON.stringify(dynamicSaveData));
	localStorage.setItem("permanentSaveData", JSON.stringify(permanentSaveData));
}
var achievementsVersion;

function loadData(data) {
	if (!localStorage.getItem("dynamicSaveData")) {
		lore.addLore("start0");
		softResetEnabled = true;
		return;
	}
	dynamicSaveData = JSON.parse(localStorage.getItem("dynamicSaveData"));
	permanentSaveData = JSON.parse(localStorage.getItem("permanentSaveData"));

	if (dynamicSaveData.softResetEnabled) {
		dynamicSaveData.softResetEnabled = false;
		softResetEnabled = true;
		return;
	}
	for (var i = 0; i < permanentSaveData.lore.obtained.length; i++) {
		lore.addLore(permanentSaveData.lore.obtained[i]);
	}
	for (var upgradeID in dynamicSaveData.upgradesBought) {
		boughtUpgrade(null, upgradeID, true);
	}
	for (var i = 0; i < dynamicSaveData.visibleUpgrades.length; i++) {
		addUpgrade(dynamicSaveData.visibleUpgrades[i]);
	}
	dynamicData.golems = dynamicSaveData.golems;

	for (var tankElement in dynamicSaveData.elementalTanks) {
		dynamicData.elementalTanks[tankElement].amount = dynamicSaveData.elementalTanks[tankElement].amount;
	}
	for (var i = 0; i < dynamicSaveData.conversionMachines.length; i++) {
		for (var machineTank in dynamicSaveData.conversionMachines[i]) {
			for (var property in dynamicSaveData.conversionMachines[i][machineTank]) {
				dynamicData.conversionMachines[i][machineTank][property] = dynamicSaveData.conversionMachines[i][machineTank][property];
			}
		}
	}
	for (var i = 0; i < dynamicSaveData.utilityMachines.length; i++) {
		for (var j = 0; j < dynamicSaveData.utilityMachines[i].tanks.length; j++) {
			for (var property in dynamicSaveData.utilityMachines[i].tanks[j]) {
				dynamicData.utilityMachines[i].tanks[j][property] = dynamicSaveData.utilityMachines[i].tanks[j][property];
			}
		}
	}
}

function saveDataToCode() {
	return btoa(JSON.stringify({
		"permanent": permanentSaveData,
		"dynamic": dynamicSaveData
	}));
}

function resetData() {
	if (confirm("Are you sure? It'll wipe everything in the current run.")) {
		tempData = JSON.parse(backupTempData);
		dynamicData = JSON.parse(backupDynamicData);
		dynamicSaveData = JSON.parse(backupDynamicSaveData);
		setup();
	}
}

function clearData() {
	tempData = JSON.parse(backupTempData);
	dynamicData = JSON.parse(backupDynamicData);
	dynamicSaveData = JSON.parse(backupDynamicSaveData);
	permanentSaveData = JSON.parse(backupPermamentSaveData);
	localStorage.setItem("dynamicSaveData", "");
	localStorage.setItem("permanentSaveData", "");
	setup();
}

function versionFixer(data) {
	switch (data.version) {
		case 2.90:
			return false;
			break;
	}
	return true;
}

if (localStorage.getItem("dynamicSaveData")) {
	//clearData();
}
setup();
requestAnimationFrame(loop);
