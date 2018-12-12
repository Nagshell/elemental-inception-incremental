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
				"airCatalyst4": ["airCatalyst3"],
				"airUpgradeCost1": ["airGolemCost3"],
				"airUpgradeCost2": ["airUpgradeCost1"],
				"airUpgradeCost3": ["airUpgradeCost2"],
				"airTransferRate1": ["airMachineSpeed4"],
				"airTransferRate2": ["airTransferRate1"],
				"airTransferRate3": ["airTransferRate2"],
				"airCapacity1": ["airGolemCost4"],
				"airCapacity2": ["airCapacity1"],
				"airCapacity3": ["airCapacity2"],
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
				"fireTransferRate1": ["attuneFire"],
				"fireTransferRate2": ["fireTransferRate1"],
				"fireTransferRate3": ["fireTransferRate2"],
				"fireUpgradeCost1": ["fireTransferRate3", "fireCatalyst4", "fireGains1"],
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
			"stat": "golemCost",
			"power": 1,
		},
		"attuneWater": {
			"x": 100,
			"y": 0,
			"stat": "transferRate",
			"power": 1,
		},
		"attuneAir": {
			"x": 0,
			"y": -100,
			"stat": "machineSpeed",
			"power": 1,
		},
		"attuneFire": {
			"x": -100,
			"y": 0,
			"stat": "catalystMin",
			"power": 5,
		},

		"fireCatalyst1": {
			"x": -180,
			"y": -50,
			"stat": "catalystMin",
			"power": 5,
		},
		"fireCatalyst2": {
			"x": -270,
			"y": -70,
			"stat": "catalystMin",
			"power": 5,
		},
		"fireCatalyst3": {
			"x": -370,
			"y": -40,
			"stat": "catalystMin",
			"power": 5,
		},
		"fireCatalyst4": {
			"x": -450,
			"y": 0,
			"stat": "catalystMin",
			"power": 5,
		},
		"fireCatalyst5": {
			"x": -530,
			"y": 70,
			"stat": "catalystMax",
			"power": 1,
		},
		"fireMachineSpeed1": {
			"x": -180,
			"y": 50,
			"stat": "machineSpeed",
			"power": 1,
		},
		"fireMachineSpeed2": {
			"x": -270,
			"y": 70,
			"stat": "machineSpeed",
			"power": 2,
		},
		"fireMachineSpeed3": {
			"x": -370,
			"y": 40,
			"stat": "machineSpeed",
			"power": 4,
		},
		"fireCapacity1": {
			"x": -140,
			"y": 120,
			"stat": "stashCapacity",
			"power": 1,
		},
		"fireCapacity2": {
			"x": -330,
			"y": 160,
			"stat": "stashCapacity",
			"power": 2,
		},
		"fireCapacity3": {
			"x": -450,
			"y": 140,
			"stat": "stashCapacity",
			"power": 3,
		},
		"fireTransferRate1": {
			"x": -140,
			"y": -120,
			"stat": "transferRate",
			"power": 1,
		},
		"fireTransferRate2": {
			"x": -330,
			"y": -160,
			"stat": "transferRate",
			"power": 3,
		},
		"fireTransferRate3": {
			"x": -450,
			"y": -140,
			"stat": "transferRate",
			"power": 7,
		},
		"fireUpgradeCost1": {
			"x": -530,
			"y": -70,
			"stat": "tbi",
			"power": 1,
		},
		"fireUpgradeCost2": {
			"x": -600,
			"y": -150,
			"stat": "tbi",
			"power": 1,
		},
		"fireUpgradeCost3": {
			"x": -680,
			"y": -190,
			"stat": "tbi",
			"power": 1,
		},
		"fireGains1": {
			"x": -620,
			"y": 50,
			"stat": "gainFire",
			"power": 4,
		},
		"fireGains2": {
			"x": -680,
			"y": 160,
			"stat": "gainFire",
			"power": 8,
		},
		"fireGains3": {
			"x": -720,
			"y": 260,
			"stat": "gainFire",
			"power": 12,
		},
		"fireGains4": {
			"x": -780,
			"y": 310,
			"stat": "gainFire",
			"power": 16,
		},
		"fireGains5": {
			"x": -850,
			"y": 270,
			"stat": "gainFire",
			"power": 20,
		},
		"fireGolemCost1": {
			"x": -700,
			"y": 10,
			"stat": "golemCost",
			"power": 1,
		},
		"fireGolemCost2": {
			"x": -760,
			"y": -60,
			"stat": "golemCost",
			"power": 1,
		},
		"fireGolemCost3": {
			"x": -780,
			"y": -150,
			"stat": "golemCost",
			"power": 1,
		},
		"fireGolemCost4": {
			"x": -740,
			"y": -250,
			"stat": "golemCost",
			"power": 1,
		},
		"fireGolemCost5": {
			"x": -640,
			"y": -270,
			"stat": "golemCost",
			"power": 1,
		},

		"earthGolemCost1": {
			"x": 40,
			"y": 200,
			"stat": "golemCost",
			"power": 1,
			"challenge": {
				golemCount: 2,
				golemCost: 1e10,
				effects: {},
			},
		},
		"earthGolemCost2": {
			"x": 40,
			"y": 280,
			"stat": "golemCost",
			"power": 1,
			"challenge": {
				golemCount: 2,
				golemCost: 1e20,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthGolemCost3": {
			"x": 20,
			"y": 400,
			"stat": "golemCost",
			"power": 2,
			"challenge": {
				golemCount: 2,
				golemCost: 1e30,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthGolemCost4": {
			"x": 0,
			"y": 520,
			"stat": "golemCost",
			"power": 2,
			"challenge": {
				golemCount: 3,
				golemCost: 1e40,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthGolemCost5": {
			"x": -20,
			"y": 600,
			"stat": "golemCost",
			"power": 2,
			"challenge": {
				golemCount: 4,
				golemCost: 1e50,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthCapacity1": {
			"x": -30,
			"y": 300,
			"stat": "stashCapacity",
			"power": 1,
			"challenge": {
				golemCount: 3,
				golemCost: 1e20,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthCapacity2": {
			"x": -120,
			"y": 350,
			"stat": "stashCapacity",
			"power": 2,
			"challenge": {
				golemCount: 4,
				golemCost: 1e18,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthCapacity3": {
			"x": -220,
			"y": 350,
			"stat": "stashCapacity",
			"power": 3,
			"challenge": {
				golemCount: 5,
				golemCost: 1e16,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthCapacity4": {
			"x": -250,
			"y": 280,
			"stat": "stashCapacity",
			"power": 4,
			"challenge": {
				golemCount: 6,
				golemCost: 1e14,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthCapacity5": {
			"x": -180,
			"y": 250,
			"stat": "stashCapacity",
			"power": 15,
			"challenge": {
				golemCount: 10,
				golemCost: 1e12,
				effects: {},
			},
		},
		"earthUpgradeCost1": {
			"x": 100,
			"y": 350,
			"stat": "tbi",
			"power": 1,
			"challenge": {
				golemCount: 2,
				golemCost: 1e5,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthUpgradeCost2": {
			"x": 170,
			"y": 360,
			"stat": "tbi",
			"power": 1,
			"challenge": {
				golemCount: 2,
				golemCost: 1e5,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthUpgradeCost3": {
			"x": 240,
			"y": 400,
			"stat": "tbi",
			"power": 1,
			"challenge": {
				golemCount: 2,
				golemCost: 1e5,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthUpgradeCost4": {
			"x": 120,
			"y": 420,
			"stat": "tbi",
			"power": 1,
			"challenge": {
				golemCount: 2,
				golemCost: 1e5,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthUpgradeCost5": {
			"x": 190,
			"y": 470,
			"stat": "tbi",
			"power": 1,
			"challenge": {
				golemCount: 2,
				golemCost: 1e5,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthTransferRate1": {
			"x": -70,
			"y": 480,
			"stat": "transferRate",
			"power": 1,
			"challenge": {
				golemCount: 2,
				golemCost: 1e50,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthTransferRate2": {
			"x": -170,
			"y": 520,
			"stat": "transferRate",
			"power": 3,
			"challenge": {
				golemCount: 3,
				golemCost: 1e75,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthTransferRate3": {
			"x": -230,
			"y": 470,
			"stat": "transferRate",
			"power": 7,
			"challenge": {
				golemCount: 5,
				golemCost: 1e100,
				effects: {
					//"longHaul": true,
					//"cruiser": true,
					//"outburst": true,
					//"pipage": true,
				},
			},
		},
		"earthGains1": {
			"x": 70,
			"y": 570,
			"stat": "gainEarth",
			"power": 5,
		},
		"earthGains2": {
			"x": 90,
			"y": 640,
			"stat": "gainEarth",
			"power": 20,
		},
		"earthGains3": {
			"x": 170,
			"y": 680,
			"stat": "gainEarth",
			"power": 35,
		},
		"earthCatalyst1": {
			"x": 140,
			"y": 560,
			"stat": "catalystMin",
			"power": 5,
		},
		"earthCatalyst2": {
			"x": 210,
			"y": 590,
			"stat": "catalystMin",
			"power": 5,
		},
		"earthCatalyst3": {
			"x": 250,
			"y": 660,
			"stat": "catalystMin",
			"power": 5,
		},
		"earthMachineSpeed1": {
			"x": -80,
			"y": 650,
			"stat": "machineSpeed",
			"power": 2,
		},
		"earthMachineSpeed2": {
			"x": -150,
			"y": 650,
			"stat": "machineSpeed",
			"power": 2,
		},
		"earthMachineSpeed3": {
			"x": -115,
			"y": 710,
			"stat": "machineSpeed",
			"power": 3,
		},

		"airMachineSpeed1": {
			"x": 0,
			"y": -300,
			"stat": "machineSpeed",
			"power": 5,
		},
		"airMachineSpeed2": {
			"x": 70,
			"y": -230,
			"stat": "machineSpeed",
			"power": 10,
		},
		"airMachineSpeed3": {
			"x": 150,
			"y": -350,
			"stat": "machineSpeed",
			"power": 20,
		},
		"airMachineSpeed4": {
			"x": 100,
			"y": -400,
			"stat": "machineSpeed",
			"power": 25,
		},
		"airMachineSpeed5": {
			"x": 170,
			"y": -470,
			"stat": "machineSpeed",
			"power": 100,
		},
		"airGolemCost1": {
			"x": -50,
			"y": -250,
			"stat": "golemCost",
			"power": 1,
		},
		"airGolemCost2": {
			"x": -170,
			"y": -330,
			"stat": "golemCost",
			"power": 1,
		},
		"airGolemCost3": {
			"x": -100,
			"y": -400,
			"stat": "golemCost",
			"power": 1,
		},
		"airGolemCost4": {
			"x": -150,
			"y": -450,
			"stat": "golemCost",
			"power": 1,
		},
		"airGolemCost5": {
			"x": -70,
			"y": -570,
			"stat": "golemCost",
			"power": 1,
		},
		"airGains1": {
			"x": 0,
			"y": -500,
			"stat": "gainAir",
			"power": 20,
		},
		"airGains2": {
			"x": -10,
			"y": -630,
			"stat": "gainAir",
			"power": 5,
		},
		"airGains3": {
			"x": 20,
			"y": -740,
			"stat": "gainAir",
			"power": 10,
		},
		"airGains4": {
			"x": -60,
			"y": -820,
			"stat": "gainAir",
			"power": 25,
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
		"airCatalyst4": {
			"x": 260,
			"y": -620,
		},
		"airUpgradeCost1": {
			"x": -230,
			"y": -390,
			"stat": "tbi",
			"power": 1,
		},
		"airUpgradeCost2": {
			"x": -340,
			"y": -420,
			"stat": "tbi",
			"power": 1,
		},
		"airUpgradeCost3": {
			"x": -410,
			"y": -340,
			"stat": "tbi",
			"power": 1,
		},
		"airTransferRate1": {
			"x": 230,
			"y": -410,
			"stat": "transferRate",
			"power": 1,
		},
		"airTransferRate2": {
			"x": 340,
			"y": -380,
			"stat": "transferRate",
			"power": 3,
		},
		"airTransferRate3": {
			"x": 410,
			"y": -460,
			"stat": "transferRate",
			"power": 7,
		},
		"airCapacity1": {
			"x": -240,
			"y": -500,
			"stat": "stashCapacity",
			"power": 1,
		},
		"airCapacity2": {
			"x": -260,
			"y": -580,
			"stat": "stashCapacity",
			"power": 2,
		},
		"airCapacity3": {
			"x": -200,
			"y": -660,
			"stat": "stashCapacity",
			"power": 3,
		},

		"waterTransferRate1": {
			"x": 180,
			"y": -40,
			"stat": "transferRate",
			"power": 3,
		},
		"waterTransferRate2": {
			"x": 260,
			"y": 0,
			"stat": "transferRate",
			"power": 5,
		},
		"waterTransferRate3": {
			"x": 340,
			"y": 20,
			"stat": "transferRate",
			"power": 8,
		},
		"waterTransferRate4": {
			"x": 420,
			"y": 0,
			"stat": "transferRate",
			"power": 10,
		},
		"waterTransferRate5": {
			"x": 500,
			"y": -40,
			"stat": "transferRateMultiplier",
			"power": 1.125,
		},
		"waterUpgradeCost1": {
			"x": 570,
			"y": -10,
			"stat": "tbi",
			"power": 1,
		},
		"waterUpgradeCost2": {
			"x": 600,
			"y": 50,
			"stat": "tbi",
			"power": 1,
		},
		"waterUpgradeCost3": {
			"x": 600,
			"y": 150,
			"stat": "tbi",
			"power": 1,
		},
		"waterUpgradeCost4": {
			"x": 500,
			"y": 200,
			"stat": "tbi",
			"power": 1,
		},
		"waterUpgradeCost5": {
			"x": 400,
			"y": 190,
			"stat": "tbi",
			"power": 1,
		},
		"waterMachineSpeed1": {
			"x": 530,
			"y": 120,
			"stat": "machineSpeed",
			"power": 1,
		},
		"waterMachineSpeed2": {
			"x": 520,
			"y": 50,
			"stat": "machineSpeed",
			"power": 4,
		},
		"waterCapacity1": {
			"x": 460,
			"y": 140,
			"stat": "stashCapacity",
			"power": 1,
		},
		"waterCapacity2": {
			"x": 440,
			"y": 70,
			"stat": "stashCapacity",
			"power": 3,
		},
		"waterGains1": {
			"x": 620,
			"y": -60,
			"stat": "gainWater",
			"power": 18,
		},
		"waterGains2": {
			"x": 720,
			"y": -50,
			"stat": "gainWater",
			"power": 15,
		},
		"waterGains3": {
			"x": 830,
			"y": -10,
			"stat": "gainWater",
			"power": 12,
		},
		"waterGains4": {
			"x": 870,
			"y": 110,
			"stat": "gainWater",
			"power": 9,
		},
		"waterGains5": {
			"x": 850,
			"y": 240,
			"stat": "gainWater",
			"power": 6,
		},
		"waterGains6": {
			"x": 750,
			"y": 300,
			"stat": "gainAll",
			"power": 2,
		},
		"waterGains7": {
			"x": 650,
			"y": 270,
			"stat": "gainAll",
			"power": 8,
		},
		"waterGolemCost1": {
			"x": 780,
			"y": 230,
			"stat": "golemCost",
			"power": 1,
		},
		"waterGolemCost2": {
			"x": 800,
			"y": 160,
			"stat": "golemCost",
			"power": 1,
		},
		"waterGolemCost3": {
			"x": 770,
			"y": 60,
			"stat": "golemCost",
			"power": 1,
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

		preprocessSkillTree();
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
				skillTree.countNodeCost(nodeID);
			}
		}
		for (var branchID in skillTree.branches) {
			for (var nodeID in skillTree.branches[branchID].nodes) {
				var node = dynamicData.skillTree.nodes[nodeID];
				node.showColor = false;
				if (nodeID == dynamicData.skillTree.currentChallengeNode) {
					node.showColor = "#180018";
				}
				else
				if (node.active) {
					if (dynamicData.skillTree.currentChallengeNode) {

						node.showColor = "#181800";
					}
					else {
						node.showColor = "#232300";
					}
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
							if (dynamicData.skillTree.currentChallengeNode) {
								if (available) {
									node.showColor = "#001000";
								}
								else if (visible) {
									node.showColor = "#100000";
								}
							}
							else {
								if (available) {
									node.showColor = "#002300";
								}
								else if (visible) {
									node.showColor = "#230000";
								}
							}
						}
					}
					else {
						if (permanentSaveData.skillTree.unlocked[nodeID]) {
							if ((!dynamicData.skillTree.currentBranch || dynamicData.skillTree.currentBranch == node.branchID) && dynamicData.skillTree.spAvail >= node.cost) {
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
		dynamicData.skillTree.treeStats[node.data.stat] -= node.data.power * 2;
		dynamicData.skillTree.activeNodes[nodeID] = false;
		dynamicData.skillTree.missing[node.branchID] ^= node.hexID;
	},
	"activateNode": function (nodeID) {
		if (nodeID == "attuneAir") {
			//clearData();
			//return;
		}
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
		dynamicData.skillTree.treeStats[node.data.stat] += node.data.power * 2;
		dynamicData.skillTree.activeNodes[nodeID] = true;
		dynamicData.skillTree.missing[node.branchID] ^= node.hexID;
	},
	"preCountNodeCost": function (nodeID) {
		var node = dynamicData.skillTree.nodes[nodeID];
		if (node.required) {
			return;
		}
		if (!permanentSaveData.skillTree.unlocked[nodeID]) {
			node.required = -1;
			return;
		}
		var nodeLinks = node.branch.nodes[nodeID];
		node.required = node.hexID;
		for (var i = 0; i < nodeLinks.length; i++) {
			skillTree.preCountNodeCost(nodeLinks[i]);
			var linkedNode = dynamicData.skillTree.nodes[nodeLinks[i]];
			if (linkedNode.required < 0) {
				node.required = -1;
				return;
			}
			node.required |= linkedNode.required;
		}
	},
	"countNodeCost": function (nodeID) {
		var node = dynamicData.skillTree.nodes[nodeID];
		if (node.required < 0) {
			node.cost = 1e6;
			return;
		}
		node.cost = bitCount(node.required & dynamicData.skillTree.missing[node.branchID]);
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
				if (dynamicData.skillTree.spAvail == dynamicData.skillTree.spMax) {
					dynamicData.skillTree.currentBranch = false;
				}
				skillTree.processNodes();
				return;
			}
			if ((!dynamicData.skillTree.currentBranch || dynamicData.skillTree.currentBranch == node.branchID) && dynamicData.skillTree.spAvail >= node.cost) {
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
		if (confirm("Start a challenge? If challenge is not specified it'll autocomplete.")) {
			dynamicData.skillTree.currentChallengeNode = nodeID;
			redraw[1] = true;

			saveData();
			dynamicData = JSON.parse(backupDynamicData);
			dynamicSaveData = JSON.parse(backupDynamicSaveData);
			setup();
			tempData.activeTab = 5;
			//skillTree.endChallenge();
		}
	},
	"testChallenge": function () {
		if (!dynamicData.skillTree.currentChallengeNode) {
			return;
		}
		var node = dynamicData.skillTree.nodes[dynamicData.skillTree.currentChallengeNode];
		if (!dynamicData.skillTree.currentChallenge) {
			skillTree.endChallenge();
		}
		else if (dynamicData.golems[node.branchID] >= dynamicData.skillTree.currentChallenge.golemCount) {
			skillTree.endChallenge();
		}
	},
	"endChallenge": function () {
		tempData.activeTab = 5;
		redraw[1] = true;

		permanentSaveData.skillTree.unlocked[dynamicData.skillTree.currentChallengeNode] = true;
		dynamicData.skillTree.currentChallengeNode = null;
		dynamicData.skillTree.locked = false;
		dynamicData.skillTree.currentBranch = false;

		for (var nodeID in skillTree.nodes) {
			dynamicData.skillTree.nodes[nodeID].required = null;
			skillTree.deactivateNode(nodeID);
		}
		for (var golemID in dynamicData.golems) {
			if (staticData.golems[golemID].combine) {
				dynamicData.golems[golemID] = Math.min(dynamicData.golems[golemID], 1);
			}
		}
		dynamicData.skillTree.missing = null;
		saveData();
		dynamicData = JSON.parse(backupDynamicData);
		dynamicSaveData = JSON.parse(backupDynamicSaveData);
		setup();
		lore.activatePopup("challengeComplete0");
	}
};

function preprocessSkillTree() {
	if (!dynamicData.skillTree.treeStats) {
		dynamicData.skillTree.treeStats = {};
		for (var nodeID in skillTree.nodes) {
			var node = skillTree.nodes[nodeID];
			if (!node.stat) continue;
			if (!dynamicData.skillTree.treeStats[node.stat]) {
				dynamicData.skillTree.treeStats[node.stat] = 0;
			}
			if (permanentSaveData.skillTree.unlocked[nodeID]) {
				dynamicData.skillTree.treeStats[node.stat] += node.power;
			}
		}
	}
	if (!dynamicData.skillTree.nodes) {
		dynamicData.skillTree.nodes = {};
		for (var branchID in skillTree.branches) {
			var nodeHex = 1;
			for (var nodeID in skillTree.branches[branchID].nodes) {
				dynamicData.skillTree.nodes[nodeID] = {};
				var node = dynamicData.skillTree.nodes[nodeID];
				node.data = skillTree.nodes[nodeID];
				node.branchID = branchID;
				node.branch = skillTree.branches[branchID];
				node.nextLinks = [];
				node.hexID = nodeHex;
				nodeHex <<= 1;
			}
		}
		for (var branchID in skillTree.branches) {
			for (var nodeID in skillTree.branches[branchID].nodes) {
				var nodeLinks = skillTree.branches[branchID].nodes[nodeID];
				for (var i = 0; i < nodeLinks.length; i++) {
					dynamicData.skillTree.nodes[nodeLinks[i]].nextLinks.push(nodeID);
				}
			}
			for (var nodeID in skillTree.branches[branchID].nodes) {
				skillTree.preCountNodeCost(nodeID);
			}
		}
	}
	if (!dynamicData.skillTree.missing) {
		dynamicData.skillTree.missing = {};
		for (var branchID in skillTree.branches) {
			dynamicData.skillTree.missing[branchID] = 0;
			for (var nodeID in skillTree.branches[branchID].nodes) {
				dynamicData.skillTree.missing[branchID] |= dynamicData.skillTree.nodes[nodeID].hexID;
			}
		}
	}
}
