var chartColors = {
	null: "#080808",
	working: "#686868",
	full: "#A8A8A8",
	empty: "#282828",
};
var machineData = {
	"EarthProducer":
	{
		"x": 500,
		"y": 400,
		"recipes": [
		{
			"title": "Earth Trickle",
			"enabled": false,
			"inputs": [],
			"outputs": [
			{
				"type": "Earth",
				"ratio": 0.01,
				"max": 2
			}],
			"productionRate": 1,
			"efficiency": 0.25,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Earth",
				"amount": 0
			}],
			"upgradeTo": "Earth Slide",
			"upgradeCosts": [
			{
				"type": "Air",
				"amount": 0.01
			}]
		},
		{
			"title": "T1 Earth Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Earth",
				"ratio": 1,
				"min": 0.9,
				"slider": 1,
				"sliderBase": 0.9,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Earth",
						"amount": 9
					}]
				}]
			},
			{
				"type": "Fire",
				"ratio": 1,
				"min": 0.9,
				"slider": 1,
				"sliderBase": 0.9,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Fire",
						"amount": 9
					}]
				}]
			}],
			"outputs": [
			{
				"type": "Earth",
				"ratio": 2,
				"max": 11,
				"slider": 1,
				"sliderBase": 11,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Earth",
						"amount": 10
					}]
				}]
			}],
			"productionRate": 1,
			"efficiency": 1.01,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Fire",
				"amount": 1
			}]
		}],
		"hiddenRecipes":
		{
			"Earth Slide":
			{
				"title": "Earth Slide",
				"enabled": false,
				"inputs": [],
				"outputs": [
				{
					"type": "Earth",
					"ratio": 0.02,
					"max": 2
				}],
				"productionRate": 1,
				"efficiency": 0.5,
				"unlocked": false,
				"unlockCosts": [
				{
					"type": "Earth",
					"amount": 0
				}],
				"upgradeTo": "Earth Avalanche",
				"upgradeCosts": [
				{
					"type": "Fire",
					"amount": 0.01
				}]
			},
			"Earth Avalanche":
			{
				"title": "Earth Avalanche",
				"enabled": false,
				"inputs": [],
				"outputs": [
				{
					"type": "Earth",
					"ratio": 0.04,
					"max": 2
				}],
				"productionRate": 1,
				"efficiency": 0.75,
				"unlocked": false,
				"unlockCosts": [
				{
					"type": "Earth",
					"amount": 0
				}],
				"upgradeTo": "Weak Earth Rift",
				"upgradeCosts": [
				{
					"type": "Earth",
					"amount": 8
				}]
			},
			"Weak Earth Rift":
			{
				"title": "Weak Earth Rift",
				"enabled": false,
				"inputs": [],
				"outputs": [
				{
					"type": "Earth",
					"ratio": 0.1,
					"max": 9,
					"slider": 1,
					"sliderBase": 9,
					"sliderStep": 10,
					"upped": 0,
					"upgrades": [
					{
						"costs": [
						{
							"type": "Earth",
							"amount": 90
						}]
					}]
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Strong Earth Rift",
				"upgradeCosts": [
				{
					"type": "Earth",
					"amount": 1e+50
				}]
			},
			"Strong Earth Rift":
			{
				"title": "Strong Earth Rift",
				"enabled": false,
				"inputs": [],
				"outputs": [
				{
					"type": "Earth",
					"ratio": 100,
					"max": 1e+300
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true
			}
		},
		"displayElement": "Earth",
		"displayStep": 8
	},
	"WaterProducer":
	{
		"x": 300,
		"y": 400,
		"recipes": [
		{
			"title": "T0 Water Force",
			"enabled": false,
			"inputs": [
			{
				"type": "Earth",
				"ratio": 1,
				"min": 0.1
			}],
			"outputs": [
			{
				"type": "Water",
				"ratio": 1,
				"max": 2
			}],
			"productionRate": 1,
			"efficiency": 0.25,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Earth",
				"amount": 2
			}],
			"upgradeTo": "Weak Water Rift",
			"upgradeCosts": [
			{
				"type": "Water",
				"amount": 8
			}]
		},
		{
			"title": "T1 Water Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Earth",
				"ratio": 1,
				"min": 0.9,
				"slider": 1,
				"sliderBase": 0.9,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Earth",
						"amount": 9
					}]
				}]
			},
			{
				"type": "Water",
				"ratio": 1,
				"min": 0.9,
				"slider": 1,
				"sliderBase": 0.9,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Water",
						"amount": 9
					}]
				}]
			}],
			"outputs": [
			{
				"type": "Water",
				"ratio": 2,
				"max": 11,
				"slider": 1,
				"sliderBase": 11,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Water",
						"amount": 10
					}]
				}]
			}],
			"productionRate": 1,
			"efficiency": 1.01,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Water",
				"amount": 1
			}]
		}],
		"hiddenRecipes":
		{
			"Weak Water Rift":
			{
				"title": "Weak Water Rift",
				"enabled": false,
				"inputs": [],
				"outputs": [
				{
					"type": "Water",
					"ratio": 0.1,
					"max": 9,
					"slider": 1,
					"sliderBase": 9,
					"sliderStep": 10,
					"upped": 0,
					"upgrades": [
					{
						"costs": [
						{
							"type": "Water",
							"amount": 90
						}]
					}]
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Strong Water Rift",
				"upgradeCosts": [
				{
					"type": "Water",
					"amount": 1e+50
				}]
			},
			"Strong Water Rift":
			{
				"title": "Strong Water Rift",
				"enabled": false,
				"inputs": [],
				"outputs": [
				{
					"type": "Water",
					"ratio": 100,
					"max": 1e+300
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true
			}
		},
		"displayElement": "Water",
		"displayStep": 8
	},
	"AirProducer":
	{
		"x": 300,
		"y": 200,
		"recipes": [
		{
			"title": "T0 Air Force",
			"enabled": false,
			"inputs": [
			{
				"type": "Water",
				"ratio": 1,
				"min": 0.1
			}],
			"outputs": [
			{
				"type": "Air",
				"ratio": 1,
				"max": 2
			}],
			"productionRate": 1,
			"efficiency": 0.25,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Water",
				"amount": 2
			}],
			"upgradeTo": "Weak Air Rift",
			"upgradeCosts": [
			{
				"type": "Air",
				"amount": 8
			}]
		},
		{
			"title": "T1 Air Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Water",
				"ratio": 1,
				"min": 0.9,
				"slider": 1,
				"sliderBase": 0.9,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Water",
						"amount": 9
					}]
				}]
			},
			{
				"type": "Fire",
				"ratio": 1,
				"min": 0.9,
				"slider": 1,
				"sliderBase": 0.9,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Fire",
						"amount": 9
					}]
				}]
			}],
			"outputs": [
			{
				"type": "Air",
				"ratio": 2,
				"max": 11,
				"slider": 1,
				"sliderBase": 11,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Air",
						"amount": 10
					}]
				}]
			}],
			"productionRate": 1,
			"efficiency": 1.01,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Fire",
				"amount": 1
			}]
		}],
		"hiddenRecipes":
		{
			"Weak Air Rift":
			{
				"title": "Weak Air Rift",
				"enabled": false,
				"inputs": [],
				"outputs": [
				{
					"type": "Air",
					"ratio": 0.1,
					"max": 9,
					"slider": 1,
					"sliderBase": 9,
					"sliderStep": 10,
					"upped": 0,
					"upgrades": [
					{
						"costs": [
						{
							"type": "Air",
							"amount": 90
						}]
					}]
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Strong Air Rift",
				"upgradeCosts": [
				{
					"type": "Air",
					"amount": 1e+50
				}]
			},
			"Strong Air Rift":
			{
				"title": "Strong Air Rift",
				"enabled": false,
				"inputs": [],
				"outputs": [
				{
					"type": "Air",
					"ratio": 100,
					"max": 1e+300
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true
			}
		},
		"displayElement": "Air",
		"displayStep": 8
	},
	"FireProducer":
	{
		"x": 500,
		"y": 200,
		"recipes": [
		{
			"title": "T0 Fire Force",
			"enabled": false,
			"inputs": [
			{
				"type": "Air",
				"ratio": 1,
				"min": 0.1
			}],
			"outputs": [
			{
				"type": "Fire",
				"ratio": 1,
				"max": 2
			}],
			"productionRate": 1,
			"efficiency": 0.25,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Air",
				"amount": 1
			}],
			"upgradeTo": "Weak Fire Rift",
			"upgradeCosts": [
			{
				"type": "Fire",
				"amount": 8
			}]
		},
		{
			"title": "T1 Fire Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Air",
				"ratio": 1,
				"min": 0.9,
				"slider": 1,
				"sliderBase": 0.9,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Air",
						"amount": 9
					}]
				}]
			},
			{
				"type": "Fire",
				"ratio": 1,
				"min": 0.9,
				"slider": 1,
				"sliderBase": 0.9,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Fire",
						"amount": 9
					}]
				}]
			}],
			"outputs": [
			{
				"type": "Fire",
				"ratio": 2,
				"max": 11,
				"slider": 1,
				"sliderBase": 11,
				"sliderStep": 10,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Fire",
						"amount": 10
					}]
				}]
			}],
			"productionRate": 2,
			"efficiency": 1.01,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Fire",
				"amount": 1
			}]
		}],
		"hiddenRecipes":
		{
			"Weak Fire Rift":
			{
				"title": "Weak Fire Rift",
				"enabled": false,
				"inputs": [],
				"outputs": [
				{
					"type": "Fire",
					"ratio": 0.1,
					"max": 9,
					"slider": 1,
					"sliderBase": 9,
					"sliderStep": 10,
					"upped": 0,
					"upgrades": [
					{
						"costs": [
						{
							"type": "Fire",
							"amount": 90
						}]
					}]
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Strong Fire Rift",
				"upgradeCosts": [
				{
					"type": "Fire",
					"amount": 1e+50
				}]
			},
			"Strong Fire Rift":
			{
				"title": "Strong Fire Rift",
				"enabled": false,
				"inputs": [],
				"outputs": [
				{
					"type": "Fire",
					"ratio": 100,
					"max": 1e+300
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true
			}
		},
		"displayElement": "Fire",
		"displayStep": 8
	}
};
var machineDisplayElements = {};

function preprocessMachinesData()
{
	for (var title in machineData)
	{
		initMachine(title);
		if (machineData[title].displayElement)
		{
			machineDisplayElements[machineData[title].displayElement] = title;
		}
	}
}
preprocessMachinesData();
