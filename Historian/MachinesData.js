var chartColors = {
	null: "#080808",
	working: "#686868",
	full: "#A8A8A8",
	empty: "#282828",
};
var machineData = {
	"Crystallizer":
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
				"amount": 0.1
			}]
		},
		{
			"title": "Simple Earth Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Earth",
				"ratio": 1,
				"min": 1.1
			},
			{
				"type": "Fire",
				"ratio": 1,
				"min": 1.1
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
			"efficiency": 1.02,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Fire",
				"amount": 1
			}],
			"upgradeTo": "Improved Earth Conversion",
			"upgradeCosts": [
			{
				"type": "GolemEarth",
				"amount": 1
			}]
		},
		{
			"title": "Catalized Earth Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Earth",
				"ratio": 1,
				"min": 100000000000000000000
			},
			{
				"type": "Fire",
				"ratio": 1,
				"min": 100000000000000000000
			},
			{
				"type": "Mud",
				"ratio": 0,
				"min": 2
			},
			{
				"type": "Magma",
				"ratio": 0,
				"min": 2
			},
			{
				"type": "Sand",
				"ratio": 0,
				"min": 2
			}],
			"outputs": [
			{
				"type": "Earth",
				"ratio": 2,
				"max": 1.1e+51,
				"slider": 1,
				"sliderBase": 1.1e+51,
				"sliderStep": 1e+49,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Void",
						"amount": 100
					}]
				}]
			}],
			"productionRate": 1,
			"efficiency": 2,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Mud",
				"amount": 2
			},
			{
				"type": "Magma",
				"amount": 2
			},
			{
				"type": "Sand",
				"amount": 2
			}],
			"upgradeTo": "Stable Earth Rift",
			"upgradeCosts": [
			{
				"type": "GolemEarth",
				"amount": 8
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
				"unlocked": true,
				"upgradeTo": "Earth Avalanche",
				"upgradeCosts": [
				{
					"type": "Fire",
					"amount": 0.1
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
					"ratio": 0.03,
					"max": 2
				}],
				"productionRate": 1,
				"efficiency": 0.75,
				"unlocked": true,
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
					"max": 30
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Pure Earth Rift",
				"upgradeCosts": [
				{
					"type": "Earth",
					"amount": 1e+50
				}]
			},
			"Pure Earth Rift":
			{
				"title": "Pure Earth Rift",
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
			},
			"Improved Earth Conversion":
			{
				"title": "Improved Earth Conversion",
				"enabled": false,
				"inputs": [
				{
					"type": "Earth",
					"ratio": 1,
					"min": 0.1
				},
				{
					"type": "Fire",
					"ratio": 1,
					"min": 0.1
				}],
				"outputs": [
				{
					"type": "Earth",
					"ratio": 2,
					"max": 110000000000,
					"slider": 1,
					"sliderBase": 110000000000,
					"sliderStep": 1000000000,
					"upped": 0,
					"upgrades": [
					{
						"costs": [
						{
							"type": "Earth",
							"amount": 100000000000
						}]
					}]
				}],
				"productionRate": 1,
				"efficiency": 1.3,
				"scaling": true,
				"unlocked": true,
				"upgradeTo": "True Earth Rift",
				"upgradeCosts": [
				{
					"type": "GolemEarth",
					"amount": 3
				}]
			},
			"True Earth Rift":
			{
				"title": "True Earth Rift",
				"enabled": false,
				"inputs": [
				{
					"type": "Earth",
					"ratio": 1,
					"min": 1
				}],
				"outputs": [
				{
					"type": "Earth",
					"ratio": 1,
					"max": 1e+200
				}],
				"productionRate": 1,
				"efficiency": 1.8,
				"scaling": true,
				"unlocked": true
			},
			"Stable Earth Rift":
			{
				"title": "Stable Earth Rift",
				"enabled": false,
				"inputs": [
				{
					"type": "Earth",
					"ratio": 1,
					"min": 100000000000000000000
				},
				{
					"type": "Alkahest",
					"ratio": 0,
					"min": 1
				}],
				"outputs": [
				{
					"type": "Earth",
					"ratio": 1,
					"max": 1e+300
				}],
				"productionRate": 1,
				"efficiency": 3,
				"scaling": true,
				"unlocked": true
			}
		},
		"displayElement": "Earth",
		"displayStep": 4
	},
	"Aqueous Extractor":
	{
		"x": 300,
		"y": 400,
		"recipes": [
		{
			"title": "Forcefull Water Conversion",
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
			"title": "Simple Water Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Earth",
				"ratio": 1,
				"min": 1.1
			},
			{
				"type": "Water",
				"ratio": 1,
				"min": 1.1
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
			"efficiency": 1.02,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Water",
				"amount": 1
			}],
			"upgradeTo": "Improved Water Conversion",
			"upgradeCosts": [
			{
				"type": "GolemWater",
				"amount": 1
			}]
		},
		{
			"title": "Catalized Earth Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Earth",
				"ratio": 1,
				"min": 100000000000000000000
			},
			{
				"type": "Water",
				"ratio": 1,
				"min": 100000000000000000000
			},
			{
				"type": "Mud",
				"ratio": 0,
				"min": 2
			},
			{
				"type": "Ice",
				"ratio": 0,
				"min": 2
			},
			{
				"type": "Steam",
				"ratio": 0,
				"min": 2
			}],
			"outputs": [
			{
				"type": "Water",
				"ratio": 2,
				"max": 1.1e+51,
				"slider": 1,
				"sliderBase": 1.1e+51,
				"sliderStep": 1e+49,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Void",
						"amount": 100
					}]
				}]
			}],
			"productionRate": 1,
			"efficiency": 2,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Mud",
				"amount": 2
			},
			{
				"type": "Ice",
				"amount": 2
			},
			{
				"type": "Steam",
				"amount": 2
			}],
			"upgradeTo": "Stable Water Rift",
			"upgradeCosts": [
			{
				"type": "GolemWater",
				"amount": 8
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
					"max": 30
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Pure Water Rift",
				"upgradeCosts": [
				{
					"type": "Water",
					"amount": 1e+50
				}]
			},
			"Pure Water Rift":
			{
				"title": "Pure Water Rift",
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
			},
			"Improved Water Conversion":
			{
				"title": "Improved Water Conversion",
				"enabled": false,
				"inputs": [
				{
					"type": "Earth",
					"ratio": 1,
					"min": 0.1
				},
				{
					"type": "Water",
					"ratio": 1,
					"min": 0.1
				}],
				"outputs": [
				{
					"type": "Water",
					"ratio": 2,
					"max": 110000000000,
					"slider": 1,
					"sliderBase": 110000000000,
					"sliderStep": 1000000000,
					"upped": 0,
					"upgrades": [
					{
						"costs": [
						{
							"type": "Water",
							"amount": 100000000000
						}]
					}]
				}],
				"productionRate": 1,
				"efficiency": 1.3,
				"scaling": true,
				"unlocked": true,
				"upgradeTo": "True Water Rift",
				"upgradeCosts": [
				{
					"type": "GolemWater",
					"amount": 3
				}]
			},
			"True Water Rift":
			{
				"title": "True Water Rift",
				"enabled": false,
				"inputs": [
				{
					"type": "Water",
					"ratio": 1,
					"min": 1
				}],
				"outputs": [
				{
					"type": "Water",
					"ratio": 1,
					"max": 1e+300
				}],
				"productionRate": 1,
				"efficiency": 1.8,
				"scaling": true,
				"unlocked": true
			},
			"Stable Water Rift":
			{
				"title": "Stable Water Rift",
				"enabled": false,
				"inputs": [
				{
					"type": "Water",
					"ratio": 1,
					"min": 100000000000000000000
				},
				{
					"type": "Alkahest",
					"ratio": 0,
					"min": 1
				}],
				"outputs": [
				{
					"type": "Water",
					"ratio": 1,
					"max": 1e+300
				}],
				"productionRate": 1,
				"efficiency": 3,
				"scaling": true,
				"unlocked": true
			}
		},
		"displayElement": "Water",
		"displayStep": 8
	},
	"Pressure Chamber":
	{
		"x": 300,
		"y": 200,
		"recipes": [
		{
			"title": "Forcefull Air Conversion",
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
				"amount": 4
			}],
			"upgradeTo": "Weak Air Rift",
			"upgradeCosts": [
			{
				"type": "Air",
				"amount": 8
			}]
		},
		{
			"title": "Simple Air Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Water",
				"ratio": 1,
				"min": 1.1
			},
			{
				"type": "Fire",
				"ratio": 1,
				"min": 1.1
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
			"efficiency": 1.02,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Fire",
				"amount": 1
			}],
			"upgradeTo": "Improved Air Conversion",
			"upgradeCosts": [
			{
				"type": "GolemAir",
				"amount": 1
			}]
		},
		{
			"title": "Catalized Air Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Water",
				"ratio": 1,
				"min": 100000000000000000000
			},
			{
				"type": "Fire",
				"ratio": 1,
				"min": 100000000000000000000
			},
			{
				"type": "Ice",
				"ratio": 0,
				"min": 2
			},
			{
				"type": "Sand",
				"ratio": 0,
				"min": 2
			},
			{
				"type": "Void",
				"ratio": 0,
				"min": 2
			}],
			"outputs": [
			{
				"type": "Air",
				"ratio": 2,
				"max": 1.1e+51,
				"slider": 1,
				"sliderBase": 1.1e+51,
				"sliderStep": 1e+49,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Void",
						"amount": 100
					}]
				}]
			}],
			"productionRate": 1,
			"efficiency": 2,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Ice",
				"amount": 2
			},
			{
				"type": "Sand",
				"amount": 2
			},
			{
				"type": "Void",
				"amount": 2
			}],
			"upgradeTo": "Stable Air Rift",
			"upgradeCosts": [
			{
				"type": "GolemAir",
				"amount": 8
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
					"max": 30
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Pure Air Rift",
				"upgradeCosts": [
				{
					"type": "Air",
					"amount": 1e+50
				}]
			},
			"Pure Air Rift":
			{
				"title": "Pure Air Rift",
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
			},
			"Improved Air Conversion":
			{
				"title": "Improved Air Conversion",
				"enabled": false,
				"inputs": [
				{
					"type": "Water",
					"ratio": 1,
					"min": 0.1
				},
				{
					"type": "Fire",
					"ratio": 1,
					"min": 0.1
				}],
				"outputs": [
				{
					"type": "Air",
					"ratio": 2,
					"max": 110000000000,
					"slider": 1,
					"sliderBase": 110000000000,
					"sliderStep": 1000000000,
					"upped": 0,
					"upgrades": [
					{
						"costs": [
						{
							"type": "Air",
							"amount": 100000000000
						}]
					}]
				}],
				"productionRate": 1,
				"efficiency": 1.3,
				"scaling": true,
				"unlocked": true,
				"upgradeTo": "True Air Rift",
				"upgradeCosts": [
				{
					"type": "GolemAir",
					"amount": 3
				}]
			},
			"True Air Rift":
			{
				"title": "True Air Rift",
				"enabled": false,
				"inputs": [
				{
					"type": "Air",
					"ratio": 1,
					"min": 1
				}],
				"outputs": [
				{
					"type": "Air",
					"ratio": 1,
					"max": 1e+300
				}],
				"productionRate": 1,
				"efficiency": 1.8,
				"scaling": true,
				"unlocked": true
			},
			"Stable Air Rift":
			{
				"title": "Stable Air Rift",
				"enabled": false,
				"inputs": [
				{
					"type": "Air",
					"ratio": 1,
					"min": 100000000000000000000
				},
				{
					"type": "Alkahest",
					"ratio": 0,
					"min": 1
				}],
				"outputs": [
				{
					"type": "Air",
					"ratio": 1,
					"max": 1e+300
				}],
				"productionRate": 1,
				"efficiency": 3,
				"scaling": true,
				"unlocked": true
			}
		},
		"displayElement": "Air",
		"displayStep": 8
	},
	"Incinerator":
	{
		"x": 500,
		"y": 200,
		"recipes": [
		{
			"title": "Forcefull Fire Conversion",
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
			"title": "Simple Fire Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Air",
				"ratio": 1,
				"min": 1.1
			},
			{
				"type": "Fire",
				"ratio": 1,
				"min": 1.1
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
			"efficiency": 1.02,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Fire",
				"amount": 1
			}],
			"upgradeTo": "Improved Fire Conversion",
			"upgradeCosts": [
			{
				"type": "GolemFire",
				"amount": 1
			}]
		},
		{
			"title": "Catalized Fire Conversion",
			"enabled": false,
			"inputs": [
			{
				"type": "Air",
				"ratio": 1,
				"min": 100000000000000000000
			},
			{
				"type": "Fire",
				"ratio": 1,
				"min": 100000000000000000000
			},
			{
				"type": "Magma",
				"ratio": 0,
				"min": 2
			},
			{
				"type": "Steam",
				"ratio": 0,
				"min": 2
			},
			{
				"type": "Void",
				"ratio": 0,
				"min": 2
			}],
			"outputs": [
			{
				"type": "Fire",
				"ratio": 2,
				"max": 1.1e+51,
				"slider": 1,
				"sliderBase": 1.1e+51,
				"sliderStep": 1e+49,
				"upped": 0,
				"upgrades": [
				{
					"costs": [
					{
						"type": "Void",
						"amount": 100
					}]
				}]
			}],
			"productionRate": 1,
			"efficiency": 2,
			"scaling": true,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Magma",
				"amount": 2
			},
			{
				"type": "Steam",
				"amount": 2
			},
			{
				"type": "Void",
				"amount": 2
			}],
			"upgradeTo": "Stable Fire Rift",
			"upgradeCosts": [
			{
				"type": "GolemFire",
				"amount": 8
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
					"max": 30
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Pure Fire Rift",
				"upgradeCosts": [
				{
					"type": "Fire",
					"amount": 1e+50
				}]
			},
			"Pure Fire Rift":
			{
				"title": "Pure Fire Rift",
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
			},
			"Improved Fire Conversion":
			{
				"title": "Improved Fire Conversion",
				"enabled": false,
				"inputs": [
				{
					"type": "Air",
					"ratio": 1,
					"min": 0.1
				},
				{
					"type": "Fire",
					"ratio": 1,
					"min": 0.1
				}],
				"outputs": [
				{
					"type": "Fire",
					"ratio": 2,
					"max": 110000000000,
					"slider": 1,
					"sliderBase": 110000000000,
					"sliderStep": 1000000000,
					"upped": 0,
					"upgrades": [
					{
						"costs": [
						{
							"type": "Fire",
							"amount": 100000000000
						}]
					}]
				}],
				"productionRate": 2,
				"efficiency": 1.3,
				"scaling": true,
				"unlocked": true,
				"upgradeTo": "True Fire Rift",
				"upgradeCosts": [
				{
					"type": "GolemFire",
					"amount": 3
				}]
			},
			"True Fire Rift":
			{
				"title": "True Fire Rift",
				"enabled": false,
				"inputs": [
				{
					"type": "Fire",
					"ratio": 1,
					"min": 1
				}],
				"outputs": [
				{
					"type": "Fire",
					"ratio": 1,
					"max": 1e+300
				}],
				"productionRate": 1,
				"efficiency": 1.8,
				"scaling": true,
				"unlocked": true
			},
			"Stable Fire Rift":
			{
				"title": "Stable Fire Rift",
				"enabled": false,
				"inputs": [
				{
					"type": "Fire",
					"ratio": 1,
					"min": 100000000000000000000
				},
				{
					"type": "Alkahest",
					"ratio": 0,
					"min": 1
				}],
				"outputs": [
				{
					"type": "Fire",
					"ratio": 1,
					"max": 1e+300
				}],
				"productionRate": 1,
				"efficiency": 3,
				"scaling": true,
				"unlocked": true
			}
		},
		"displayElement": "Fire",
		"displayStep": 8
	},
	"Golem Infuser":
	{
		"x": 200,
		"y": 600,
		"recipes": [
		{
			"title": "Earth Orb Infusion",
			"enabled": false,
			"inputs": [
			{
				"type": "Earth",
				"ratio": 100,
				"min": 100
			}],
			"outputs": [
			{
				"type": "GolemEarth",
				"ratio": 1,
				"max": 1
			}],
			"productionRate": 1,
			"efficiency": 1,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Earth",
				"amount": 110
			},
			{
				"type": "Water",
				"amount": 110
			},
			{
				"type": "Air",
				"amount": 110
			},
			{
				"type": "Fire",
				"amount": 110
			}],
			"upgradeTo": "Earth Golem Infusion",
			"upgradeCosts": [
			{
				"type": "Earth",
				"amount": 10000000000
			}]
		},
		{
			"title": "Water Orb Infusion",
			"enabled": false,
			"inputs": [
			{
				"type": "Water",
				"ratio": 100,
				"min": 100
			}],
			"outputs": [
			{
				"type": "GolemWater",
				"ratio": 1,
				"max": 1
			}],
			"productionRate": 1,
			"efficiency": 1,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Earth",
				"amount": 110
			},
			{
				"type": "Water",
				"amount": 110
			},
			{
				"type": "Air",
				"amount": 110
			},
			{
				"type": "Fire",
				"amount": 110
			}],
			"upgradeTo": "Water Golem Infusion",
			"upgradeCosts": [
			{
				"type": "Water",
				"amount": 10000000000
			}]
		},
		{
			"title": "Air Orb Infusion",
			"enabled": false,
			"inputs": [
			{
				"type": "Air",
				"ratio": 100,
				"min": 100
			}],
			"outputs": [
			{
				"type": "GolemAir",
				"ratio": 1,
				"max": 1
			}],
			"productionRate": 1,
			"efficiency": 1,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Earth",
				"amount": 110
			},
			{
				"type": "Water",
				"amount": 110
			},
			{
				"type": "Air",
				"amount": 110
			},
			{
				"type": "Fire",
				"amount": 110
			}],
			"upgradeTo": "Air Golem Infusion",
			"upgradeCosts": [
			{
				"type": "Air",
				"amount": 10000000000
			}]
		},
		{
			"title": "Fire Orb Infusion",
			"enabled": false,
			"inputs": [
			{
				"type": "Fire",
				"ratio": 100,
				"min": 100
			}],
			"outputs": [
			{
				"type": "GolemFire",
				"ratio": 1,
				"max": 1
			}],
			"productionRate": 1,
			"efficiency": 1,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "Earth",
				"amount": 110
			},
			{
				"type": "Water",
				"amount": 110
			},
			{
				"type": "Air",
				"amount": 110
			},
			{
				"type": "Fire",
				"amount": 110
			}],
			"upgradeTo": "Fire Golem Infusion",
			"upgradeCosts": [
			{
				"type": "Fire",
				"amount": 10000000000
			}]
		}],
		"hiddenRecipes":
		{
			"Earth Golem Infusion":
			{
				"title": "Earth Golem Infusion",
				"enabled": false,
				"inputs": [
				{
					"type": "Earth",
					"ratio": 90000000000000000000,
					"min": 110000000000000000000
				}],
				"outputs": [
				{
					"type": "GolemEarth",
					"ratio": 1,
					"max": 2
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Earth Golem Creation",
				"upgradeCosts": [
				{
					"type": "Earth",
					"amount": 1e+60
				}]
			},
			"Earth Golem Creation":
			{
				"title": "Earth Golem Creation",
				"enabled": false,
				"inputs": [
				{
					"type": "Earth",
					"ratio": 9e+99,
					"min": 1.1e+100
				}],
				"outputs": [
				{
					"type": "GolemEarth",
					"ratio": 2,
					"max": 8
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true
			},
			"Water Golem Infusion":
			{
				"title": "Water Golem Infusion",
				"enabled": false,
				"inputs": [
				{
					"type": "Water",
					"ratio": 90000000000000000000,
					"min": 110000000000000000000
				}],
				"outputs": [
				{
					"type": "GolemWater",
					"ratio": 1,
					"max": 2
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Water Golem Creation",
				"upgradeCosts": [
				{
					"type": "Water",
					"amount": 1e+60
				}]
			},
			"Water Golem Creation":
			{
				"title": "Water Golem Creation",
				"enabled": false,
				"inputs": [
				{
					"type": "Water",
					"ratio": 9e+99,
					"min": 1.1e+100
				}],
				"outputs": [
				{
					"type": "GolemWater",
					"ratio": 2,
					"max": 8
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true
			},
			"Air Golem Infusion":
			{
				"title": "Air Golem Infusion",
				"enabled": false,
				"inputs": [
				{
					"type": "Air",
					"ratio": 90000000000000000000,
					"min": 110000000000000000000
				}],
				"outputs": [
				{
					"type": "GolemAir",
					"ratio": 1,
					"max": 2
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Air Golem Creation",
				"upgradeCosts": [
				{
					"type": "Air",
					"amount": 1e+60
				}]
			},
			"Air Golem Creation":
			{
				"title": "Air Golem Creation",
				"enabled": false,
				"inputs": [
				{
					"type": "Air",
					"ratio": 9e+99,
					"min": 1.1e+100
				}],
				"outputs": [
				{
					"type": "GolemAir",
					"ratio": 2,
					"max": 8
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true
			},
			"Fire Golem Infusion":
			{
				"title": "Fire Golem Infusion",
				"enabled": false,
				"inputs": [
				{
					"type": "Fire",
					"ratio": 90000000000000000000,
					"min": 110000000000000000000
				}],
				"outputs": [
				{
					"type": "GolemFire",
					"ratio": 1,
					"max": 2
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true,
				"upgradeTo": "Fire Golem Creation",
				"upgradeCosts": [
				{
					"type": "Fire",
					"amount": 1e+60
				}]
			},
			"Fire Golem Creation":
			{
				"title": "Fire Golem Creation",
				"enabled": false,
				"inputs": [
				{
					"type": "Fire",
					"ratio": 9e+99,
					"min": 1.1e+100
				}],
				"outputs": [
				{
					"type": "GolemFire",
					"ratio": 2,
					"max": 8
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true
			}
		}
	},
	"Golem Merger":
	{
		"x": 600,
		"y": 600,
		"recipes": [
		{
			"title": "Simple Mud Merging",
			"enabled": false,
			"inputs": [
			{
				"type": "GolemEarth",
				"ratio": 1,
				"min": 1
			},
			{
				"type": "GolemWater",
				"ratio": 1,
				"min": 1
			},
			{
				"type": "Earth",
				"ratio": 10000000000,
				"min": 10000000000
			},
			{
				"type": "Water",
				"ratio": 10000000000,
				"min": 10000000000
			}],
			"outputs": [
			{
				"type": "Mud",
				"ratio": 0.4,
				"max": 1.5
			}],
			"productionRate": 1,
			"efficiency": 1,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "GolemEarth",
				"amount": 2
			},
			{
				"type": "GolemWater",
				"amount": 2
			},
			{
				"type": "Mud",
				"amount": 0.5
			}],
			"upgradeTo": "Intermediete Mud Merging",
			"upgradeCosts": [
			{
				"type": "Mud",
				"amount": 2
			}]
		},
		{
			"title": "Golem Merging : Mud",
			"enabled": false,
			"inputs": [
			{
				"type": "GolemEarth",
				"ratio": 1,
				"min": 1
			},
			{
				"type": "GolemWater",
				"ratio": 1,
				"min": 1
			}],
			"outputs": [
			{
				"type": "Mud",
				"ratio": 0.1,
				"max": 1
			}],
			"productionRate": 1,
			"efficiency": 1,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "GolemEarth",
				"amount": 2
			},
			{
				"type": "GolemWater",
				"amount": 2
			}]
		},
		{
			"title": "Golem Merging : Ice",
			"enabled": false,
			"inputs": [
			{
				"type": "GolemWater",
				"ratio": 1,
				"min": 1
			},
			{
				"type": "GolemAir",
				"ratio": 1,
				"min": 1
			}],
			"outputs": [
			{
				"type": "Ice",
				"ratio": 0.08,
				"max": 1
			}],
			"productionRate": 1,
			"efficiency": 1,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "GolemWater",
				"amount": 2
			},
			{
				"type": "GolemAir",
				"amount": 2
			},
			{
				"type": "Mud",
				"amount": 0.3
			}]
		},
		{
			"title": "Golem Merging : Steam",
			"enabled": false,
			"inputs": [
			{
				"type": "GolemWater",
				"ratio": 1,
				"min": 1
			},
			{
				"type": "GolemFire",
				"ratio": 1,
				"min": 1
			}],
			"outputs": [
			{
				"type": "Steam",
				"ratio": 0.06,
				"max": 1
			}],
			"productionRate": 1,
			"efficiency": 1,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "GolemWater",
				"amount": 2
			},
			{
				"type": "GolemFire",
				"amount": 2
			},
			{
				"type": "Ice",
				"amount": 0.3
			}]
		},
		{
			"title": "Golem Merging : Magma",
			"enabled": false,
			"inputs": [
			{
				"type": "GolemEarth",
				"ratio": 1,
				"min": 1
			},
			{
				"type": "GolemFire",
				"ratio": 1,
				"min": 1
			}],
			"outputs": [
			{
				"type": "Magma",
				"ratio": 0.04,
				"max": 1
			}],
			"productionRate": 1,
			"efficiency": 1,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "GolemEarth",
				"amount": 2
			},
			{
				"type": "GolemFire",
				"amount": 2
			},
			{
				"type": "Steam",
				"amount": 0.3
			}]
		},
		{
			"title": "Golem Merging : Sand",
			"enabled": false,
			"inputs": [
			{
				"type": "GolemEarth",
				"ratio": 1,
				"min": 1
			},
			{
				"type": "GolemAir",
				"ratio": 1,
				"min": 1
			}],
			"outputs": [
			{
				"type": "Sand",
				"ratio": 0.02,
				"max": 1
			}],
			"productionRate": 1,
			"efficiency": 1,
			"unlocked": false,
			"unlockCosts": [
			{
				"type": "GolemEarth",
				"amount": 2
			},
			{
				"type": "GolemAir",
				"amount": 2
			},
			{
				"type": "Magma",
				"amount": 0.3
			}]
		}],
		"hiddenRecipes":
		{
			"Intermediete Mud Merging":
			{
				"title": "Intermediete Mud Merging",
				"enabled": false,
				"inputs": [
				{
					"type": "GolemEarth",
					"ratio": 2,
					"min": 2
				},
				{
					"type": "GolemWater",
					"ratio": 2,
					"min": 2
				},
				{
					"type": "Earth",
					"ratio": 100000000000000000000,
					"min": 100000000000000000000
				},
				{
					"type": "Water",
					"ratio": 100000000000000000000,
					"min": 100000000000000000000
				}],
				"outputs": [
				{
					"type": "Mud",
					"ratio": 1.2,
					"max": 3
				}],
				"productionRate": 1,
				"efficiency": 1,
				"unlocked": true
			}
		}
	}
};
var machineDisplayElements = {};

function preprocessMachinesData()
{
	var infuser = machineData["Golem Infuser"];
	infuser.displayRegionSwapCD = 128;
	infuser.displayRegionCurrentGolem = -1;
	infuser.displayRegionNextGolem = -1;
	infuser.displayRegionGolemList = ["GolemEarth", "GolemWater", "GolemAir", "GolemFire"];
	infuser.displayRegionCustomDraw = function (ctx)
	{
		ctx.save();
		ctx.translate(-32, -32);
		if (infuser.displayRegionCurrentGolem >= 0)
		{
			ctx.drawImage(images["icon" + infuser.displayRegionGolemList[infuser.displayRegionCurrentGolem]], 0, 0);
			ctx.fillStyle = ctx.strokeStyle;
			drawNumber(ctx, data.oElements[infuser.displayRegionGolemList[infuser.displayRegionCurrentGolem]].amount, 50, 24, "", "center");
		}
		if (infuser.displayRegionNextGolem >= 0 && infuser.displayRegionNextGolem !== infuser.displayRegionCurrentGolem)
		{
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(128 - infuser.displayRegionSwapCD, 0);
			ctx.lineTo(0, 128 - infuser.displayRegionSwapCD);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			ctx.clip();
			ctx.drawImage(images["icon" + infuser.displayRegionGolemList[infuser.displayRegionNextGolem]], 0, 0);
			ctx.fillStyle = ctx.strokeStyle;
			drawNumber(ctx, data.oElements[infuser.displayRegionGolemList[infuser.displayRegionNextGolem]].amount, 50, 24, "", "center");
		}
		ctx.restore();
		if (infuser.displayRegionSwapCD-- == 0)
		{
			infuser.displayRegionSwapCD = 128;
			if (infuser.displayRegionNextGolem >= 0)
			{
				infuser.displayRegionCurrentGolem = infuser.displayRegionNextGolem;
				infuser.displayRegionNextGolem = -1;
				for (var i = 1; i <= 4; i++)
				{
					if (data.oElements[infuser.displayRegionGolemList[(infuser.displayRegionCurrentGolem + i) % 4]].amount > 0)
					{
						infuser.displayRegionNextGolem = (infuser.displayRegionCurrentGolem + i) % 4;
						break;
					}
				}
			}
			else
			{
				infuser.displayRegionCurrentGolem = -1;
				for (var i = 0; i < 4; i++)
				{
					if (data.oElements[infuser.displayRegionGolemList[i]].amount > 0)
					{
						infuser.displayRegionNextGolem = i;
						break;
					}
				}
			}
		}
		else if (infuser.displayRegionNextGolem === null)
		{
			for (var i = 0; i < 4; i++)
			{
				if (data.oElements[infuser.displayRegionGolemList[i]].amount > 0)
				{
					infuser.displayRegionNextGolem = i;
					infuser.displayRegionSwapCD = 128;
					break;
				}
			}
		}
	}
	var merger = machineData["Golem Merger"];
	merger.displayRegionCustomDraw = function (ctx)
	{
		ctx.save();
		ctx.translate(-32, -32);
		ctx.drawImage(images.iconMergerDisplay, 0, 0);
		ctx.restore();
	}

	for (var title in machineData)
	{
		initMachine(title);
		if (machineData[title].displayElement)
		{
			machineDisplayElements[machineData[title].displayElement] = title;
		}
	}

	infuser.pane.regularDraw = infuser.pane.customDraw;
	infuser.pane.customDraw = function (ctx)
	{
		if (this.boundaryPathMax)
		{
			ctx.save();
			ctx.translate(132, 49);
			ctx.beginPath();
			ctx.arc(0, 0, 30, 0, Math.PI * 2);
			ctx.stroke();
			ctx.fill();
			ctx.clip();

			this.machine.region.customDraw(ctx);
			ctx.restore();
			this.regularDraw(ctx);
		}
	}
}
preprocessMachinesData();
