var skillTree = {
	"branches": {
		"Earth": {
			"nodes": {
				"attuneEarth": [],
				"earthGolemCost1": ["attuneEarth"],
				"earthGolemCost2": ["earthGolemCost1"],
				"earthGolemCost3": ["earthGolemCost2"],
				"earthGolemCost4": ["earthGolemCost3"],
				"earthGolemCost5": ["earthGolemCost4"],
				"earthCapacity1": ["earthGolemCost1"],
				"earthCapacity2": ["earthCapacity1"],
				"earthCapacity3": ["earthCapacity2"],
				"earthCapacity4": ["earthCapacity3"],
				"earthCapacity5": ["earthCapacity4"],
				"earthUpgradeCost1": ["earthGolemCost2"],
				"earthUpgradeCost2": ["earthUpgradeCost1"],
				"earthUpgradeCost3": ["earthUpgradeCost2"],
				"earthUpgradeCost4": ["earthUpgradeCost1"],
				"earthUpgradeCost5": ["earthUpgradeCost4"],
				"earthTransferRate1": ["earthGolemCost3"],
				"earthTransferRate2": ["earthTransferRate1"],
				"earthTransferRate3": ["earthTransferRate2"],
				"earthGains1": ["earthGolemCost4"],
				"earthGains2": ["earthGains1"],
				"earthGains3": ["earthGains2"],
				"earthCatalyst1": ["earthGains1"],
				"earthCatalyst2": ["earthCatalyst1"],
				"earthCatalyst3": ["earthCatalyst2", "earthGains3"],
				"earthMachineSpeed1": ["earthGolemCost5"],
				"earthMachineSpeed2": ["earthMachineSpeed1"],
				"earthMachineSpeed3": ["earthMachineSpeed1"],
			}
		},
		"Water": {
			"nodes": {
				"attuneWater": [],
				"waterTransferRate1": ["attuneWater"],
				"waterTransferRate2": ["waterTransferRate1"],
				"waterTransferRate3": ["waterTransferRate2"],
				"waterTransferRate4": ["waterTransferRate3"],
				"waterTransferRate5": ["waterTransferRate4"],
				"waterUpgradeCost1": ["waterTransferRate5"],
				"waterUpgradeCost2": ["waterUpgradeCost1"],
				"waterUpgradeCost3": ["waterUpgradeCost2"],
				"waterUpgradeCost4": ["waterUpgradeCost3"],
				"waterUpgradeCost5": ["waterUpgradeCost4"],
				"waterMachineSpeed1": ["waterUpgradeCost4"],
				"waterMachineSpeed2": ["waterMachineSpeed1"],
				"waterCapacity1": ["waterUpgradeCost5"],
				"waterCapacity2": ["waterCapacity1"],
				"waterGains1": ["waterTransferRate5"],
				"waterGains2": ["waterGains1"],
				"waterGains3": ["waterGains2"],
				"waterGains4": ["waterGains3"],
				"waterGains5": ["waterGains4"],
				"waterGains6": ["waterGains5"],
				"waterGains7": ["waterGains6"],
				"waterGolemCost1": ["waterGains6"],
				"waterGolemCost2": ["waterGolemCost1"],
				"waterGolemCost3": ["waterGolemCost2"],
				"waterCatalyst1": ["waterGains7"],
				"waterCatalyst2": ["waterCatalyst1"],
				"waterCatalyst3": ["waterCatalyst2"],
			}
		},
		"Air": {
			"nodes": {
				"attuneAir": [],
				"airMachineSpeed1": ["attuneAir"],
				"airMachineSpeed2": ["airMachineSpeed1"],
				"airMachineSpeed3": ["airMachineSpeed2"],
				"airMachineSpeed4": ["airMachineSpeed3"],
				"airMachineSpeed5": ["airMachineSpeed4"],
				"airGolemCost1": ["airMachineSpeed1"],
				"airGolemCost2": ["airGolemCost1"],
				"airGolemCost3": ["airGolemCost2"],
				"airGolemCost4": ["airGolemCost3"],
				"airGolemCost5": ["airGolemCost4"],
				"airGains1": ["airGolemCost5"],
				"airGains2": ["airGains1"],
				"airGains3": ["airGains2"],
				"airGains4": ["airGains3"],
				"airCatalyst1": ["airGains1", "airMachineSpeed5"],
				"airCatalyst2": ["airCatalyst1"],
				"airCatalyst3": ["airCatalyst2"],
				"airUpgradeCost1": ["airGolemCost3"],
				"airUpgradeCost2": ["airUpgradeCost1"],
				"airUpgradeCost3": ["airUpgradeCost2"],
				"airTransferRate1": ["airMachineSpeed4"],
				"airTransferRate2": ["airTransferRate1"],
				"airTransferRate3": ["airTransferRate2"],
				"airCapacity1": ["airGolemCost4"],
				"airCapacity2": ["airCapacity1"],
			}
		},
		"Fire": {
			"nodes": {
				"attuneFire": [],
				"fireCatalyst1": ["attuneFire"],
				"fireCatalyst2": ["fireCatalyst1"],
				"fireCatalyst3": ["fireCatalyst2"],
				"fireCatalyst4": ["fireCatalyst3"],
				"fireCatalyst5": ["fireCatalyst4"],
				"fireMachineSpeed1": ["attuneFire"],
				"fireMachineSpeed2": ["fireMachineSpeed1"],
				"fireMachineSpeed3": ["fireMachineSpeed2", "fireCatalyst4"],
				"fireCapacity1": ["attuneFire"],
				"fireCapacity2": ["fireCapacity1"],
				"fireCapacity3": ["fireCapacity2", "fireCatalyst5"],
				"fireTransferSpeed1": ["attuneFire"],
				"fireTransferSpeed2": ["fireTransferSpeed1"],
				"fireTransferSpeed3": ["fireTransferSpeed2"],
				"fireUpgradeCost1": ["fireTransferSpeed3", "fireCatalyst4", "fireGains1"],
				"fireUpgradeCost2": ["fireUpgradeCost1"],
				"fireUpgradeCost3": ["fireUpgradeCost2"],
				"fireGains1": ["fireCatalyst5"],
				"fireGains2": ["fireGains1"],
				"fireGains3": ["fireGains2"],
				"fireGains4": ["fireGains3"],
				"fireGains5": ["fireGains4"],
				"fireGolemCost1": ["fireGains1"],
				"fireGolemCost2": ["fireGolemCost1"],
				"fireGolemCost3": ["fireGolemCost2"],
				"fireGolemCost4": ["fireGolemCost3"],
				"fireGolemCost5": ["fireGolemCost4"],
			}
		},
	},
	"nodes": {
		"attuneEarth": {
			"x": 0,
			"y": 100,
		},
		"attuneWater": {
			"x": 100,
			"y": 0,
		},
		"attuneAir": {
			"x": 0,
			"y": -100,
		},
		"attuneFire": {
			"x": -100,
			"y": 0,
		},
		"fireCatalyst1": {
			"x": -180,
			"y": -50,
		},
		"fireCatalyst2": {
			"x": -270,
			"y": -70,
		},
		"fireCatalyst3": {
			"x": -370,
			"y": -40,
		},
		"fireCatalyst4": {
			"x": -450,
			"y": 0,
		},
		"fireCatalyst5": {
			"x": -530,
			"y": 70,
		},
		"fireMachineSpeed1": {
			"x": -180,
			"y": 50,
		},
		"fireMachineSpeed2": {
			"x": -270,
			"y": 70,
		},
		"fireMachineSpeed3": {
			"x": -370,
			"y": 40,
		},
		"fireCapacity1": {
			"x": -140,
			"y": 120,
		},
		"fireCapacity2": {
			"x": -330,
			"y": 160,
		},
		"fireCapacity3": {
			"x": -450,
			"y": 140,
		},
		"fireTransferSpeed1": {
			"x": -140,
			"y": -120,
		},
		"fireTransferSpeed2": {
			"x": -330,
			"y": -160,
		},
		"fireTransferSpeed3": {
			"x": -450,
			"y": -140,
		},
		"fireUpgradeCost1": {
			"x": -530,
			"y": -70,
		},
		"fireUpgradeCost2": {
			"x": -600,
			"y": -150,
		},
		"fireUpgradeCost3": {
			"x": -680,
			"y": -190,
		},
		"fireGains1": {
			"x": -620,
			"y": 50,
		},
		"fireGains2": {
			"x": -680,
			"y": 160,
		},
		"fireGains3": {
			"x": -720,
			"y": 260,
		},
		"fireGains4": {
			"x": -780,
			"y": 310,
		},
		"fireGains5": {
			"x": -850,
			"y": 270,
		},
		"fireGolemCost1": {
			"x": -700,
			"y": 10,
		},
		"fireGolemCost2": {
			"x": -760,
			"y": -60,
		},
		"fireGolemCost3": {
			"x": -780,
			"y": -150,
		},
		"fireGolemCost4": {
			"x": -740,
			"y": -250,
		},
		"fireGolemCost5": {
			"x": -640,
			"y": -270,
		},
		"earthGolemCost1": {
			"x": 40,
			"y": 200,
		},
		"earthGolemCost2": {
			"x": 40,
			"y": 280,
		},
		"earthGolemCost3": {
			"x": 20,
			"y": 400,
		},
		"earthGolemCost4": {
			"x": 0,
			"y": 520,
		},
		"earthGolemCost5": {
			"x": -20,
			"y": 600,
		},
		"earthCapacity1": {
			"x": -30,
			"y": 300,
		},
		"earthCapacity2": {
			"x": -120,
			"y": 350,
		},
		"earthCapacity3": {
			"x": -220,
			"y": 350,
		},
		"earthCapacity4": {
			"x": -250,
			"y": 280,
		},
		"earthCapacity5": {
			"x": -180,
			"y": 250,
		},
		"earthUpgradeCost1": {
			"x": 100,
			"y": 350,
		},
		"earthUpgradeCost2": {
			"x": 170,
			"y": 360,
		},
		"earthUpgradeCost3": {
			"x": 240,
			"y": 400,
		},
		"earthUpgradeCost4": {
			"x": 120,
			"y": 420,
		},
		"earthUpgradeCost5": {
			"x": 190,
			"y": 470,
		},
		"earthTransferRate1": {
			"x": -70,
			"y": 480,
		},
		"earthTransferRate2": {
			"x": -170,
			"y": 520,
		},
		"earthTransferRate3": {
			"x": -230,
			"y": 470,
		},
		"earthGains1": {
			"x": 70,
			"y": 570,
		},
		"earthGains2": {
			"x": 90,
			"y": 640,
		},
		"earthGains3": {
			"x": 170,
			"y": 680,
		},
		"earthCatalyst1": {
			"x": 140,
			"y": 560,
		},
		"earthCatalyst2": {
			"x": 210,
			"y": 590,
		},
		"earthCatalyst3": {
			"x": 250,
			"y": 660,
		},
		"earthMachineSpeed1": {
			"x": -80,
			"y": 650,
		},
		"earthMachineSpeed2": {
			"x": -150,
			"y": 650,
		},
		"earthMachineSpeed3": {
			"x": -115,
			"y": 710,
		},
		"airMachineSpeed1": {
			"x": 0,
			"y": -300,
		},
		"airMachineSpeed2": {
			"x": 70,
			"y": -230,
		},
		"airMachineSpeed3": {
			"x": 150,
			"y": -350,
		},
		"airMachineSpeed4": {
			"x": 100,
			"y": -400,
		},
		"airMachineSpeed5": {
			"x": 170,
			"y": -470,
		},
		"airGolemCost1": {
			"x": -50,
			"y": -250,
		},
		"airGolemCost2": {
			"x": -170,
			"y": -330,
		},
		"airGolemCost3": {
			"x": -100,
			"y": -400,
		},
		"airGolemCost4": {
			"x": -150,
			"y": -450,
		},
		"airGolemCost5": {
			"x": -70,
			"y": -570,
		},
		"airGains1": {
			"x": 0,
			"y": -500,
		},
		"airGains2": {
			"x": -10,
			"y": -630,
		},
		"airGains3": {
			"x": 20,
			"y": -740,
		},
		"airGains4": {
			"x": -60,
			"y": -820,
		},
		"airCatalyst1": {
			"x": 50,
			"y": -550,
		},
		"airCatalyst2": {
			"x": 100,
			"y": -660,
		},
		"airCatalyst3": {
			"x": 180,
			"y": -680,
		},
		"airUpgradeCost1": {
			"x": -230,
			"y": -390,
		},
		"airUpgradeCost2": {
			"x": -340,
			"y": -420,
		},
		"airUpgradeCost3": {
			"x": -410,
			"y": -340,
		},
		"airTransferRate1": {
			"x": 230,
			"y": -410,
		},
		"airTransferRate2": {
			"x": 340,
			"y": -380,
		},
		"airTransferRate3": {
			"x": 410,
			"y": -460,
		},
		"airCapacity1": {
			"x": -240,
			"y": -500,
		},
		"airCapacity2": {
			"x": -260,
			"y": -580,
		},
		"waterTransferRate1": {
			"x": 180,
			"y": -40,
		},
		"waterTransferRate2": {
			"x": 260,
			"y": 0,
		},
		"waterTransferRate3": {
			"x": 340,
			"y": 20,
		},
		"waterTransferRate4": {
			"x": 420,
			"y": 0,
		},
		"waterTransferRate5": {
			"x": 500,
			"y": -40,
		},
		"waterUpgradeCost1": {
			"x": 570,
			"y": -10,
		},
		"waterUpgradeCost2": {
			"x": 600,
			"y": 50,
		},
		"waterUpgradeCost3": {
			"x": 600,
			"y": 150,
		},
		"waterUpgradeCost4": {
			"x": 500,
			"y": 200,
		},
		"waterUpgradeCost5": {
			"x": 400,
			"y": 190,
		},
		"waterMachineSpeed1": {
			"x": 530,
			"y": 120,
		},
		"waterMachineSpeed2": {
			"x": 520,
			"y": 50,
		},
		"waterCapacity1": {
			"x": 460,
			"y": 140,
		},
		"waterCapacity2": {
			"x": 440,
			"y": 70,
		},
		"waterGains1": {
			"x": 620,
			"y": -60,
		},
		"waterGains2": {
			"x": 720,
			"y": -50,
		},
		"waterGains3": {
			"x": 830,
			"y": -10,
		},
		"waterGains4": {
			"x": 870,
			"y": 110,
		},
		"waterGains5": {
			"x": 850,
			"y": 240,
		},
		"waterGains6": {
			"x": 750,
			"y": 300,
		},
		"waterGains7": {
			"x": 650,
			"y": 270,
		},
		"waterGolemCost1": {
			"x": 780,
			"y": 230,
		},
		"waterGolemCost2": {
			"x": 800,
			"y": 160,
		},
		"waterGolemCost3": {
			"x": 770,
			"y": 60,
		},
		"waterCatalyst1": {
			"x": 690,
			"y": 200,
		},
		"waterCatalyst2": {
			"x": 700,
			"y": 130,
		},
		"waterCatalyst3": {
			"x": 680,
			"y": 40,
		},
	},
	"processNodes": function () {
		redraw[5] = true;
		if (!dynamicData.skillTree.nodes) {
			dynamicData.skillTree.nodes = {};
			for (var branchID in skillTree.branches) {
				for (var nodeID in skillTree.branches[branchID].nodes) {
					dynamicData.skillTree.nodes[nodeID] = {};
					var node = dynamicData.skillTree.nodes[nodeID];
					node.data = skillTree.nodes[nodeID];
					node.branchID = branchID;
					node.branch = skillTree.branches[branchID];
					node.nextLinks = [];
				}
			}
			for (var branchID in skillTree.branches) {
				for (var nodeID in skillTree.branches[branchID].nodes) {
					var nodeLinks = skillTree.branches[branchID].nodes[nodeID];
					for (var i = 0; i < nodeLinks.length; i++) {
						dynamicData.skillTree.nodes[nodeLinks[i]].nextLinks.push(nodeID);
					}
				}
			}
		}
		if (!dynamicData.skillTree.currentBranch) {
			for (var branchID in skillTree.branches) {
				for (var nodeID in skillTree.branches[branchID].nodes) {
					if (dynamicData.skillTree.nodes[nodeID].active) {
						dynamicData.skillTree.currentBranch = branchID;
					}
				}
			}
		}
		if (!dynamicData.skillTree.locked) {
			for (var nodeID in skillTree.nodes) {
				dynamicData.skillTree.nodes[nodeID].cost = false;
				dynamicData.skillTree.nodes[nodeID].costNodes = {};
			}
			for (var nodeID in skillTree.nodes) {
				skillTree.countNodeCost(nodeID);
			}
			for (var nodeID in skillTree.nodes) {
				dynamicData.skillTree.nodes[nodeID].costNodes = null;
			}
		}
		for (var branchID in skillTree.branches) {
			for (var nodeID in skillTree.branches[branchID].nodes) {
				var node = dynamicData.skillTree.nodes[nodeID];
				node.showColor = false;
				if (node.active) {
					node.showColor = "#232300";
				}
				else {
					if (dynamicData.skillTree.locked) {
						if (permanentSaveData.skillTree.unlocked[nodeID]) {
							node.showColor = "#232323";
						}
						else if (dynamicData.skillTree.currentBranch && dynamicData.skillTree.currentBranch == branchID) {
							var nodeLinks = skillTree.branches[branchID].nodes[nodeID];
							var visible = false;
							var available = true;

							for (var i = 0; i < nodeLinks.length; i++) {
								if (permanentSaveData.skillTree.unlocked[nodeLinks[i]]) {
									visible = true;
								}
								else {
									available = false;
								}
							}
							if (available) {
								node.showColor = "#002300";
							}
							else if (visible) {
								node.showColor = "#230000";
							}
						}
					}
					else {
						if (permanentSaveData.skillTree.unlocked[nodeID]) {
							if (dynamicData.skillTree.spAvail >= node.cost) {
								node.showColor = "#002300";
							}
							else {
								node.showColor = "#232323";
							}
						}
						else {
							var nodeLinks = skillTree.branches[branchID].nodes[nodeID];
							for (var i = 0; i < nodeLinks.length; i++) {
								if (permanentSaveData.skillTree.unlocked[nodeLinks[i]]) {
									node.showColor = "#121212";
								}
							}
						}
					}
				}
			}
		}
	},
	"deactivateNode": function (nodeID) {
		var node = dynamicData.skillTree.nodes[nodeID];
		if (!node.active) {
			return;
		}
		for (var i = 0; i < node.nextLinks.length; i++) {
			skillTree.deactivateNode(node.nextLinks[i]);
		}
		dynamicData.skillTree.spAvail++;
		node.active = false;
	},
	"activateNode": function (nodeID) {
		var node = dynamicData.skillTree.nodes[nodeID];
		if (node.active) {
			return;
		}
		var nodeLinks = node.branch.nodes[nodeID];
		for (var i = 0; i < nodeLinks.length; i++) {
			skillTree.activateNode(nodeLinks[i]);
		}
		dynamicData.skillTree.spAvail--;
		node.active = true;
	},
	"countNodeCost": function (nodeID) {

		var node = dynamicData.skillTree.nodes[nodeID];

		if (node.cost) {
			return;
		}

		if (node.active) {
			node.cost = 0;
			return;
		}

		if (!permanentSaveData.skillTree.unlocked[nodeID]) {
			node.cost = 1000;
			return;
		}

		if (dynamicData.skillTree.currentBranch && dynamicData.skillTree.currentBranch !== node.branchID) {
			node.cost = 1000000;
			return;
		}

		var nodeLinks = node.branch.nodes[nodeID];
		var nodeCost = node.costNodes;
		for (var i = 0; i < nodeLinks.length; i++) {
			skillTree.countNodeCost(nodeLinks[i]);
			var nodeLink = dynamicData.skillTree.nodes[nodeLinks[i]];
			if (nodeLink.cost > 999999) {
				node.cost = 1000000;
				return;
			}
			if (nodeLink.cost > 999) {
				node.cost = 1000;
				return;
			}
			if (nodeLink.cost > 0) {
				for (var requiredNodeID in nodeLink.costNodes) {
					nodeCost[requiredNodeID] = true;
				}
				nodeCost[nodeLinks[i]] = true;
			}
		}

		node.cost = Object.keys(nodeCost).length + 1;
	},
	"clickNode": function (nodeID) {
		var node = dynamicData.skillTree.nodes[nodeID];
		var nodeLinks = node.branch.nodes[nodeID];
		if (!dynamicData.skillTree.locked) {
			if (!permanentSaveData.skillTree.unlocked[nodeID]) {
				return;
			}
			if (node.active) {
				skillTree.deactivateNode(nodeID);
				dynamicData.skillTree.currentBranch = false;
				skillTree.processNodes();
				return;
			}
			if (dynamicData.skillTree.spAvail >= node.cost) {
				skillTree.activateNode(nodeID);
				skillTree.processNodes();
			}
		}
		else {
			if (permanentSaveData.skillTree.unlocked[nodeID]) {
				return;
			}
			var passed = true;
			for (var i = 0; i < nodeLinks.length; i++) {
				if (!permanentSaveData.skillTree.unlocked[nodeLinks[i]]) {
					passed = false;
					break;
				}
			}
			if (!passed) {
				return;
			}
			skillTree.startChallenge(nodeID);
			//
			skillTree.processNodes();
		}
	},
	"startChallenge": function (nodeID) {
		if (confirm("Start a challenge? In this alpha is autocompletes.")) {
			dynamicData.skillTree.currentChallengeNode = nodeID;
			skillTree.endChallenge();
		}
	},
	"endChallenge": function () {
		permanentSaveData.skillTree.unlocked[dynamicData.skillTree.currentChallengeNode] = true;
		dynamicData.skillTree.currentChallengeNode = null;
	}
};
