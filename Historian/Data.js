var permanentSaveData = {
	"achievementList": {
		"upgrades": {
			"unlocked": false
		},
		"tanks": {
			"unlocked": false
		},
	},
	"lore": {
		"obtained": []
	},
	"skillTree": {
		"unlocked": {
			"attuneEarth": true,
			"attuneWater": true,
			"attuneAir": true,
			"attuneFire": true,
		}
	},
};
var dynamicSaveData = {
	"version": 2.90,
	"options": {
		"colorblindMode": false,
		"relativeChange": true,
	},
	"accumulatedTime": 0,
	"elementalTanks": {
		"Earth": {
			"amount": 0
		},
		"Water": {
			"amount": 0
		},
		"Air": {
			"amount": 0
		},
		"Fire": {
			"amount": 0
		}
	},
	"golems": {},
	"conversionMachines": [{
			"ingredient": {
				"amount": 0,
				"valve": false
			},
			"reagent": {
				"amount": 0,
				"valve": false
			}
		},
		{
			"ingredient": {
				"amount": 0,
				"valve": false
			},
			"reagent": {
				"amount": 0,
				"valve": false
			}
		}, {
			"ingredient": {
				"amount": 0,
				"valve": false
			},
			"reagent": {
				"amount": 0,
				"valve": false
			}
		}, {
			"ingredient": {
				"amount": 0,
				"valve": false
			},
			"reagent": {
				"amount": 0,
				"valve": false
			}
		}
	],
	"utilityMachines": [{
			"tanks": [{
				"amount": 0,
				"upgradeCount": 0,
				"valve": false
			}, {
				"amount": 0,
				"upgradeCount": 0,
				"valve": false
			}],
		},
		{
			"tanks": [{
				"amount": 0,
				"valve": false
			}, {
				"amount": 0,
				"valve": false
			}, {
				"amount": 0,
				"valve": false
			}, {
				"amount": 0,
				"valve": false
			}],
		},
		{
			"tanks": [{
				"amount": 0,
				"valve": false
			}, {
				"amount": 0,
				"valve": false
			}, {
				"amount": 0,
				"valve": false
			}, {
				"amount": 0,
				"valve": false
			}],
		}
	],
	"upgradesBought": {},
	"skillTree": {},
	"visibleUpgrades": [],
};
var dynamicData = {
	"popupActive": null,
	"elementalTanks": {
		"Earth": {
			"amount": 0,
			"gained": 0,
			"record": [],
			"recordPos": 0,
			"change": 0
		},
		"Water": {
			"amount": 0,
			"gained": 0,
			"record": [],
			"recordPos": 0,
			"change": 0
		},
		"Air": {
			"amount": 0,
			"gained": 0,
			"record": [],
			"recordPos": 0,
			"change": 0
		},
		"Fire": {
			"amount": 0,
			"gained": 0,
			"record": [],
			"recordPos": 0,
			"change": 0
		}
	},
	"rifts": {
		"power": 1,
	},
	"golems": {},
	"conversionMachines": [{
			"name": "Liquefier",
			"ingredient": {
				"type": "Earth",
				"amount": 0,
				"drain": 1,
				"used": 0,
				"valve": false
			},
			"reagent": {
				"type": "Water",
				"amount": 0,
				"drain": 1,
				"used": 0,
				"valve": false
			},
			"product": {
				"type": "Water",
				"rate": 2
			}
		},
		{
			"name": "Boiler",
			"ingredient": {
				"type": "Water",
				"amount": 0,
				"drain": 1,
				"used": 0,
				"valve": false
			},
			"reagent": {
				"type": "Fire",
				"amount": 0,
				"drain": 3,
				"used": 0,
				"valve": false
			},
			"product": {
				"type": "Air",
				"rate": 4
			}
		}, {
			"name": "Combustor",
			"ingredient": {
				"type": "Air",
				"amount": 0,
				"drain": 4,
				"used": 0,
				"valve": false
			},
			"reagent": {
				"type": "Fire",
				"amount": 0,
				"drain": 4,
				"used": 0,
				"valve": false
			},
			"product": {
				"type": "Fire",
				"rate": 8
			}
		}, {
			"name": "Volcano",
			"ingredient": {
				"type": "Earth",
				"amount": 0,
				"drain": 1,
				"used": 0,
				"valve": false
			},
			"reagent": {
				"type": "Fire",
				"amount": 0,
				"drain": 1,
				"used": 0,
				"valve": false
			},
			"product": {
				"type": "Earth",
				"rate": 2
			}
		}
	],
	"utilityMachines": [{
			"name": "Catalyst",
			"tanks": [{
				"type": "Air",
				"amount": 0,
				"upgradeCount": 0,
				"capacity": 1,
				"drain": 11,
				"valve": false
			}, {
				"type": "Fire",
				"amount": 0,
				"upgradeCount": 0,
				"capacity": 1,
				"drain": 11,
				"valve": false
			}],
			"maxSpeed": 1,
			"speed": 0.5,
			"baseSpeed": 0.5,
			"maxBoost": 0.5,
			"boost": 0,
			"active": false,
			"cooldown": 0,
			"maxCooldown": 1
		},
		{
			"name": "Orb Infuser",
			"tanks": [{
					"type": "Earth",
					"amount": 0,
					"capacity": 1e6,
					"drain": 0.1,
					"valve": false
				},
				{
					"type": "Water",
					"amount": 0,
					"capacity": 1e6,
					"drain": 0.1,
					"valve": false
				}, {
					"type": "Air",
					"amount": 0,
					"capacity": 1e6,
					"drain": 0.1,
					"valve": false
				}, {
					"type": "Fire",
					"amount": 0,
					"capacity": 1e6,
					"drain": 0.1,
					"valve": false
				}
			],
			"incrementStep": 10
		},
		{
			"name": "Stash",
			"tanks": [{
				"type": "Earth",
				"amount": 0,
				"capacity": 1e5,
				"divider": 1,
				"drain": 0.1,
				"valve": false
			}, {
				"type": "Water",
				"amount": 0,
				"capacity": 1e5,
				"divider": 1,
				"drain": 0.1,
				"valve": false
			}, {
				"type": "Air",
				"amount": 0,
				"capacity": 1e5,
				"divider": 1,
				"drain": 0.1,
				"valve": false
			}, {
				"type": "Fire",
				"amount": 0,
				"capacity": 1e5,
				"divider": 1,
				"drain": 0.1,
				"valve": false
			}],
			"divider": 4
		}
	],
	"stats": {
		"upgradesNum": 0,
		"machineBonusSpeed": 1,
		"machineGolemSpeed": 1,
		"pipes": {
			"level": 1
		},
		"golemCost": 1e6,
		"upgradeCounter": 0
	},
	"golemEffects": {
		"production": {
			"Earth": 0,
			"Water": 0,
			"Air": 0,
			"Fire": 0
		},
		"Magma": {
			"appliedEffect": false
		},
		"Steam": {
			"appliedEffect": false
		},
	},
	"upgradesBought": {},
	"visibleUpgrades": [],
	"clickableElements": [
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[]
	],
	"tabStatus": [{
			"highlight": false
		},
		{
			"highlight": false
		},
		{
			"highlight": false
		},
		{
			"highlight": false
		},
		{
			"highlight": false
		},
		{
			"highlight": false
		},
		{
			"highlight": false
		},
		{
			"highlight": false
		},
		{
			"highlight": false
		},
	],
	"lore": {
		"messages": ["", "", "", ""],
		"lengths": [],
		"maxScroll": -320,
		"obtained": []
	},
	"skillTree": {
		"hoveredNode": null,
		"spAvail": 3,
		"spMax": 3,
		"currentBranch": null,
		"locked": false,
		"currentChallengeNode": null,
		"activeNodes": {}
	},
	"punCounter": 0,
};
var tempData = {
	"activeTab": 5,
	"canvasTicks": 0,
	"catalystRota": 0,
	"machineRota": 0,
	"mergingGolems": [],
	"currentBanner": null,
	"ticksWithoutBanner": 0,
	"currentBannerPosition": 780,
	"bannerSpeed": 1,
	"nextBanners": [],
	"loreScroll": 0,
	"loreScrollSpeed": 0,
	"skillTreeScrollX": 0,
	"skillTreeScrollY": 0,
	"skillTreeZoom": 0.55,
	"skillTreeScrollSpeedX": 0,
	"skillTreeScrollSpeedY": 0,
	"skillTreeZoomSpeed": 1,
	"skillTreeZoomActive": true,
	"keyflags": {
		"count": 0,
	},
};
var staticData = {
	"achievementList": {
		"upgrades": {
			"name": "Gold is the only color I see.",
			"description": "Get all upgrades."
		},
		"tanks": {
			"name": "They were supposed to be infinite.",
			"description": "Get 1e300 of an Element"
		},
	},
	"skillTreeMaxScrollRadius": 100,
	"elementalColor": [
		["#88CC88", "#559955", "#335533", "#182518"],
		["#8888CC", "#555599", "#333355", "#181825"],
		["#CCCC88", "#999955", "#555533", "#252518"],
		["#CC8888", "#995555", "#553333", "#251818"]
	],
	"textColor": "#CCCCCC",
	"borderColor": "#999999",
	"tabNames": ["Machines", "Golems", "Lore", "Achievements", "Options", "Tree"],
	"mergeButtonTooltip": {
		"topRow": function () {
			return "Merge Golems";
		},
		"middleRow": function () {
			return "Merge two base Golems together.";
		},
		"bottomRow": function () {
			return "Choose them and hover over Merge to see potential result";
		}
	},
	"golems": {
		"Earth": {
			"effect": function () {
				dynamicData.golemEffects.production["Earth"] += dynamicData.elementalTanks["Earth"].gained * 0.1;
			},
			"combine": {
				"Water": "Mud",
				"Air": "Sand",
				"Fire": "Magma"
			},
			"x": 200,
			"y": -160,
			"colors": ["#144505", "#296616", "rgba(255,255,255,0.2)"],
			"rotatingSpeed": 2,
			"tooltip": {
				"topRow": function () {
					return "Earth Golem";
				},
				"middleRow": function () {
					return "Increases Earth gained each second by 10%";
				},
				"bottomRow": function () {
					return "";
				}
			}
		},
		"Water": {
			"effect": function () {
				dynamicData.golemEffects.production["Water"] += dynamicData.elementalTanks["Water"].gained * 0.1;
			},
			"combine": {
				"Earth": "Mud",
				"Air": "Ice",
				"Fire": "Steam"
			},
			"x": 200,
			"y": 160,
			"colors": ["#062334", "#14384D", "rgba(255,255,255,0.2)"],
			"rotatingSpeed": 2,
			"tooltip": {
				"topRow": function () {
					return "Water Golem";
				},
				"middleRow": function () {
					return "Increases Water gained each second by 10%";
				},
				"bottomRow": function () {
					return "";
				}
			}
		},
		"Air": {
			"effect": function () {
				dynamicData.golemEffects.production["Air"] += dynamicData.elementalTanks["Air"].gained * 0.1;
			},
			"combine": {
				"Earth": "Sand",
				"Water": "Ice",
			},
			"x": -200,
			"y": 160,
			"colors": ["#8F8F32", "#AEAE51", "rgba(255,255,255,0.2)"],
			"rotatingSpeed": 2,
			"tooltip": {
				"topRow": function () {
					return "Air Golem";
				},
				"middleRow": function () {
					return "Increases Air gained each second by 10%";
				},
				"bottomRow": function () {
					return "";
				}
			}
		},
		"Fire": {
			"effect": function () {
				dynamicData.golemEffects.production["Fire"] += dynamicData.elementalTanks["Fire"].gained * 0.1;
			},
			"combine": {
				"Earth": "Magma",
				"Water": "Steam",
			},
			"x": -200,
			"y": -160,
			"colors": ["#6A2429", "#7B3E42", "rgba(255,255,255,0.2)"],
			"rotatingSpeed": 2,
			"tooltip": {
				"topRow": function () {
					return "Fire Golem";
				},
				"middleRow": function () {
					return "Increases Fire gained each second by 10%";
				},
				"bottomRow": function () {
					return "";
				}
			}
		},
		"Mud": {
			"effect": function () {
				dynamicData.conversionMachines[0].reagent.drain = 0.01;
				dynamicData.golemEffects.production["Water"] += dynamicData.elementalTanks["Water"].gained * Math.pow(Math.log10(1 + dynamicData.elementalTanks["Earth"].amount) / 150, 0.5);
			},
			"x": 100,
			"y": -100,
			"colors": ["#522705", "#906c3f", "rgba(255,255,255,0.2)"],
			"rotatingSpeed": 0.2,
			"tooltip": {
				"topRow": function () {
					return "Mud Golem <- Earth + Water";
				},
				"middleRow": function () {
					var bonus = Math.pow(Math.log10(1 + dynamicData.elementalTanks["Earth"].amount) / 150, 0.5) * 100;
					return "Water gains get better the more Earth you have (currently: " + bonus.toFixed(1) + "%)";
				},
				"bottomRow": function () {
					return "Liquefier also runs with miniscule amounts of Water.";
				}
			}
		},
		"Sand": {
			"effect": function () {
				dynamicData.golemEffects.production["Air"] += dynamicData.elementalTanks["Earth"].amount / 60;
			},
			"x": -100,
			"y": 100,
			"colors": ["#5F5D1F", "#747236", "rgba(255,255,255,0.2)"],
			"rotatingSpeed": -2,
			"tooltip": {
				"topRow": function () {
					return "Sand Golem < Earth + Air";
				},
				"middleRow": function () {
					return "Passively produces Air based on your current Earth (10%/s)";
				},
				"bottomRow": function () {
					return "";
				}
			}
		},
		"Magma": {
			"effect": function () {
				if (!dynamicData.golemEffects["Magma"].appliedEffect) {
					for (var i = 0; i < 4; i++) {
						dynamicData.conversionMachines[i].reagent.drain /= 4;
					}
					dynamicData.golemEffects["Magma"].appliedEffect = true;
				}
			},
			"x": -100,
			"y": -100,
			"colors": ["#6A2429", "#747236", "rgba(0,0,0,0.6)"],
			"rotatingSpeed": 1.5,
			"tooltip": {
				"topRow": function () {
					return "Magma Golem < Earth + Fire";
				},
				"middleRow": function () {
					return "Reagents are 4 times as effective.";
				},
				"bottomRow": function () {
					return "You can use only a quarter of them without decreasing production.";
				}
			}
		},
		"Ice": {
			"effect": function () {
				dynamicData.golemEffects.production["Earth"] += dynamicData.conversionMachines[0].ingredient.used * 1.7;
			},
			"x": 0,
			"y": 180,
			"colors": ["#4D726F", "#9FA5A5", "rgba(255,255,255,0.2)"],
			"rotatingSpeed": 1,
			"tooltip": {
				"topRow": function () {
					return "Ice Golem < Water + Air";
				},
				"middleRow": function () {
					return "Liquefier instead of using up Earth produces small amounts of it.";
				},
				"bottomRow": function () {
					return "100% usage > -10% usage";
				}
			}
		},
		"Steam": {
			"effect": function () {
				if (!dynamicData.golemEffects["Steam"].appliedEffect) {
					dynamicData.stats.pipes.level += 2;
					dynamicData.golemEffects["Steam"].appliedEffect = true;
					redraw[0] = true;
				}
				dynamicData.stats.machineGolemSpeed = 1 + Math.pow(Math.log10(1 + dynamicData.elementalTanks["Air"].amount) / 150, 0.50);
			},
			"x": 100,
			"y": 100,
			"colors": ["#86908F", "#9FA5A5", "rgba(0,0,255,0.10)"],
			"rotatingSpeed": -30,
			"tooltip": {
				"topRow": function () {
					return "Steam Golem < Water + Fire";
				},
				"middleRow": function () {
					return "Conversion machine speed is increased according to current Air (currently: " + (100 * dynamicData.stats.machineGolemSpeed - 100).toFixed(1) + "%)";
				},
				"bottomRow": function () {
					return "Golem also did upgrade pipes two additional times";
				}
			}
		},
	},
	"conversionMachines": [{
			"tooltip": {
				"topRow": function () {
					return "Liquefier";
				},
				"middleRow": function () {
					var oCM = dynamicData.conversionMachines[0];
					return "Conversion formula : " + oCM.ingredient.drain + " " + oCM.ingredient.type + " + " + oCM.reagent.drain + " " + oCM.reagent.type + " = " + (oCM.product.rate * (1 + dynamicData.utilityMachines[0].boost)).toFixed(2) + " " + oCM.product.type + ".";
				},
				"bottomRow": function () {
					return "";
				},
				"additions": [{
					"special": "conversionMachineDisplay"
				}]
			}
		},
		{
			"tooltip": {
				"topRow": function () {
					return "Boiler";
				},
				"middleRow": function () {
					var oCM = dynamicData.conversionMachines[1];
					return "Conversion formula : " + oCM.ingredient.drain + " " + oCM.ingredient.type + " + " + oCM.reagent.drain + " " + oCM.reagent.type + " = " + (oCM.product.rate * (1 + dynamicData.utilityMachines[0].boost)).toFixed(2) + " " + oCM.product.type + ".";
				},
				"bottomRow": function () {
					return "";
				},
				"additions": [{
					"special": "conversionMachineDisplay"
				}]
			}
		}, {
			"tooltip": {
				"topRow": function () {
					return "Combustor";
				},
				"middleRow": function () {
					var oCM = dynamicData.conversionMachines[2];
					return "Conversion formula : " + oCM.ingredient.drain + " " + oCM.ingredient.type + " + " + oCM.reagent.drain + " " + oCM.reagent.type + " = " + (oCM.product.rate * (1 + dynamicData.utilityMachines[0].boost)).toFixed(2) + " " + oCM.product.type + ".";
				},
				"bottomRow": function () {
					return "";
				},
				"additions": [{
					"special": "conversionMachineDisplay"
				}]
			}
		}, {
			"tooltip": {
				"topRow": function () {
					return "Volcano";
				},
				"middleRow": function () {
					var oCM = dynamicData.conversionMachines[3];
					return "Conversion formula : " + oCM.ingredient.drain + " " + oCM.ingredient.type + " + " + oCM.reagent.drain + " " + oCM.reagent.type + " = " + (oCM.product.rate * (1 + dynamicData.utilityMachines[0].boost)).toFixed(2) + " " + oCM.product.type + ".";
				},
				"bottomRow": function () {
					return "";
				},
				"additions": [{
					"special": "conversionMachineDisplay"
				}]
			}
		}
	],
	"utilityMachines": [{
			"effect": function () {
				var oMyself = dynamicData.utilityMachines[0];
				if (oMyself.tanks[0].amount > 1e300) {
					oMyself.tanks[0].amount = 1e300;
				}
				if (oMyself.tanks[1].amount > 1e300) {
					oMyself.tanks[1].amount = 1e300;
				}
				if (oMyself.maxBoost === 0) {
					return;
				}
				if (oMyself.tanks[0].amount === oMyself.tanks[0].capacity) {
					oMyself.maxSpeed += 0.04;
					oMyself.baseSpeed += 0.01;
					oMyself.tanks[0].capacity *= 1e5;
				}
				if (oMyself.tanks[1].amount === oMyself.tanks[1].capacity) {
					oMyself.maxBoost += 0.01;
					oMyself.tanks[1].capacity *= 1e3;
				}
				var minSpeed = oMyself.baseSpeed * (1 + dynamicData.skillTree.treeStats["catalystMax"] / 100);
				if (oMyself.active) {
					var randomModifier = 1;
					if (dynamicData.skillTree.treeStats["catalystMax"] > 3) {
						dynamicData.skillTree.treeStats["catalystMax"] *= 0.999;
					}
					else if (dynamicData.skillTree.treeStats["catalystMax"] > 2) {
						dynamicData.skillTree.treeStats["catalystMax"] = 3 + Math.random();
					}
					if (dynamicData.skillTree.treeStats["catalystMax"] > 3) {
						randomModifier = 50 * (dynamicData.skillTree.treeStats["catalystMax"] - 3);
					}
					oMyself.speed += minSpeed / 500 * randomModifier;
					oMyself.maxCooldown += 0.01;
				}
				else {
					oMyself.speed = minSpeed;
					oMyself.cooldown -= 0.02;
					if (oMyself.cooldown < 0) {
						oMyself.maxCooldown = 0.2;
						oMyself.cooldown = 0;
					}
				}
				if (dynamicData.skillTree.treeStats["catalystMax"] > 2 && oMyself.speed > 1.3 * oMyself.maxSpeed) {
					oMyself.speed = minSpeed;
					oMyself.maxCooldown = 0.2;
				}

				if (oMyself.speed < oMyself.maxSpeed) {
					oMyself.boost = oMyself.maxBoost * oMyself.speed;
				}
				else {
					oMyself.boost = oMyself.maxBoost * Math.max(0, 2 * oMyself.maxSpeed - oMyself.speed);
					if (dynamicData.skillTree.treeStats["catalystMax"] > 3) {
						oMyself.boost *= 10 * (dynamicData.skillTree.treeStats["catalystMax"] - 3);
					}
				}
			},
			"tooltip": {
				"topRow": function () {
					return "Catalyst Ring";
				},
				"middleRow": function () {
					var oCM = dynamicData.utilityMachines[0];
					return "Current boost: " + (100 * oCM.boost).toFixed(2) + "%";
				},
				"bottomRow": function () {
					return "Rotates around conversion machines to give them more efficiency. Fill it with Air and Fire to improve it.";
				},
				"additions": [{
					"special": "utilityTankDisplay"
				}]
			},
			"tooltipButton": {
				"topRow": function () {
					return "Catalyst Ring";
				},
				"middleRow": function () {
					var oCM = dynamicData.utilityMachines[0];
					return "Current boost: " + (100 * oCM.boost).toFixed(2) + "%";
				},
				"bottomRow": function () {
					return "Click it toggle safety deceleration mechanism. ";
				},
				"additions": [{
					"special": "utilityTankDisplay"
				}]
			}
		},
		{
			"effect": function () {
				for (var i = 0; i < 4; i++) {
					var oTank = dynamicData.utilityMachines[1].tanks[i];
					if (oTank.amount == oTank.capacity) {
						for (var j = 0; j < 4; j++) {
							dynamicData.utilityMachines[1].tanks[j].valve = false;
						}
						oTank.amount = 0;
						createGolem(oTank.type);
					}
					oTank.capacity = Math.pow(dynamicData.stats.golemCost, 1 - dynamicData.skillTree.treeStats["golemCost"] / 100);
				}
			},
			"tooltip": {
				"topRow": function () {
					return "Orb Infuser";
				},
				"middleRow": function () {
					var oCM = dynamicData.utilityMachines[0];
					return "Creates Golems.";
				},
				"bottomRow": function () {
					return "";
				},
				"additions": [{
					"special": "utilityTankDisplay"
				}]
			}
		},
		{
			"effect": function () {
				for (var i = 0; i < 4; i++) {
					var oTank = dynamicData.utilityMachines[2].tanks[i];
					if (dynamicData.skillTree.currentChallenge && dynamicData.skillTree.currentChallenge.effects.longHaul) {
						oTank.capacity = 1;
					}
					else {
						oTank.capacity = Math.pow(dynamicData.stats.golemCost, 0.5 + dynamicData.skillTree.treeStats["stashCapacity"] / 200);
					}

				}
			},
			"tooltip": {
				"topRow": function () {
					return "Elemental Stash";
				},
				"middleRow": function () {
					var oCM = dynamicData.utilityMachines[0];
					return "Returns root of stored Elements";
				},
				"bottomRow": function () {
					return "after buying an upgrade / creating Golem.";
				},
				"additions": [{
					"special": "utilityTankDisplay"
				}]
			}
		}
	],
	"upgradeNumber": 32,
	"upgrades": {
		"riftPower0": {
			"name": "Rift Power I",
			"starting": true,
			"costs": [{
				"type": "Earth",
				"amount": 5
			}],
			"chained": "riftPower1",
			"effect": function () {
				dynamicData.rifts.power *= 2;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Widen space available for rifts.";
				},
				"bottomRow": function () {
					return "Rift will produce 2x more elements.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"riftPower1": {
			"name": "Rift Power II",
			"costs": [{
				"type": "Water",
				"amount": 20
			}],
			"chained": "riftPower2",
			"effect": function () {
				dynamicData.rifts.power *= 2;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Widen space available for rifts.";
				},
				"bottomRow": function () {
					return "Rift will produce 2x more elements.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"riftPower2": {
			"name": "Rift Power III",
			"costs": [{
				"type": "Water",
				"amount": 20
			}, {
				"type": "Air",
				"amount": 20
			}],
			"chained": "riftPower3",
			"effect": function () {
				dynamicData.rifts.power *= 2;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Widen space available for rifts.";
				},
				"bottomRow": function () {
					return "Rift will produce 2x more elements.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"riftPower3": {
			"name": "Rift Power IV",
			"costs": [{
				"type": "Earth",
				"amount": 100
			}, {
				"type": "Water",
				"amount": 100
			}],
			"chained": "riftPower4",
			"effect": function () {
				dynamicData.rifts.power *= 2;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Widen space available for rifts.";
				},
				"bottomRow": function () {
					return "Rift will produce 2x more elements.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"riftPower4": {
			"name": "Rift Power V",
			"boughtName": "Rift Power Max",
			"costs": [{
				"type": "Earth",
				"amount": 1000
			}, {
				"type": "Fire",
				"amount": 1000
			}],
			"effect": function () {
				dynamicData.rifts.power *= 2;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Widen space available for rifts.";
				},
				"bottomRow": function () {
					return "Rift will produce 2x more elements.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			},
			"tooltipBought": {
				"topRow": function () {
					return "Rifts reached maximum radius.";
				},
				"middleRow": function () {
					return "";
				},
				"bottomRow": function () {
					return "";
				}
			}
		},
		"pipes0": {
			"name": "Pipes I",
			"starting": true,
			"costs": [{
				"type": "Earth",
				"amount": 2e4
			}, {
				"type": "Water",
				"amount": 100
			}, ],
			"effect": function (loadOverride) {
				dynamicData.stats.pipes.level++;
				if (!loadOverride) {
					addUpgrade("machineOverflow");
				}
			},
			"chained": "pipes1",
			"tooltip": {
				"topRow": function () {
					return "First input pipes upgrade.";
				},
				"middleRow": function () {
					return "Increases number of input pipes leading into the system.";
				},
				"bottomRow": function () {
					return "Elements will be able to get out of Tanks faster. (Current rate is: " + (Math.pow(dynamicData.stats.pipes.level, 1.5) * 0.1).toFixed(1) + "%/tick)";
				},
				"additions": [{
						"special": "upgradeCosts"
					}
					/*{
						"x" : 0,
						"y" : 0,
						"w" : 0,
						"h" : 0,

						"backgroundColor" : "black",
						"borderColor" : "yellow",
						"textColor" : "white",
						"text" : function() {
							return "";
						}
					}*/
				]
			}
		},
		"pipes1": {
			"name": "Pipes II",
			"costs": [{
				"type": "Earth",
				"amount": 2e6
			}, {
				"type": "Water",
				"amount": 1e6
			}, ],
			"effect": function () {
				dynamicData.stats.pipes.level += 1;
			},
			"chained": "pipes2",
			"tooltip": {
				"topRow": function () {
					return "Second input pipes upgrade.";
				},
				"middleRow": function () {
					return "Increases number of input pipes leading into the system.";
				},
				"bottomRow": function () {
					return "Elements will be able to get out of Tanks faster. (Current rate is: " + (Math.pow(dynamicData.stats.pipes.level, 1.5) * 0.1).toFixed(1) + "%/tick)";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"pipes2": {
			"name": "Pipes III",
			"boughtName": "Pipes Maxed",
			"costs": [{
				"type": "Earth",
				"amount": 2e8
			}, {
				"type": "Water",
				"amount": 1e10
			}, ],
			"effect": function () {
				dynamicData.stats.pipes.level += 1;
			},
			"tooltip": {
				"topRow": function () {
					return "Third input pipes upgrade.";
				},
				"middleRow": function () {
					return "Increases number of input pipes leading into the system.";
				},
				"bottomRow": function () {
					return "Elements will be able to get out of Tanks faster. (Current rate is: " + (Math.pow(dynamicData.stats.pipes.level, 1.5) * 0.1).toFixed(1) + "%/tick)";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			},
			"tooltipBought": {
				"topRow": function () {
					return "Maximum amount of pipes you can fit was reached.";
				},
				"middleRow": function () {
					return "Increases number of input pipes leading into the system.";
				},
				"bottomRow": function () {
					return "Elements will be able to get out of Tanks faster. (Current rate is: " + (Math.pow(dynamicData.stats.pipes.level, 1.5) * 0.1).toFixed(1) + "%/tick)";
				},
			}
		},
		"stash1": {
			"name": "Improved Stash I",
			"starting": true,
			"costs": [{
				"type": "Earth",
				"amount": 5e16
			}, {
				"type": "Air",
				"amount": 5e16
			}],
			"effect": function () {
				dynamicData.utilityMachines[2].divider--;
			},
			"chained": "stash2",
			"tooltip": {
				"topRow": function () {
					return "Make Stash much better!";
				},
				"middleRow": function () {
					return "Stash lets you get root of stored elements back after creating golem or buying upgrade.";
				},
				"bottomRow": function () {
					return "Improve design of valves attached to Stash.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"stash2": {
			"name": "Improved Stash II",
			"boughtName": "Stash Maxed",
			"costs": [{
				"type": "Earth",
				"amount": 5e26
			}, {
				"type": "Air",
				"amount": 5e26
			}],
			"effect": function () {
				dynamicData.utilityMachines[2].divider--;
			},
			"tooltip": {
				"topRow": function () {
					return "Make Stash great again!";
				},
				"middleRow": function () {
					return "Stash lets you get root of stored elements back after creating golem or buying upgrade.";
				},
				"bottomRow": function () {
					return "Isolate vital parts of pipes leading in and out of stash.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			},
			"tooltipBought": {
				"topRow": function () {
					return "Perfected Stash.";
				},
				"middleRow": function () {
					return "Stash lets you get some elements back after creating golem.";
				},
				"bottomRow": function () {
					return "It's not possible to improve it further.";
				}
			}
		},
		"machineOverflow": {
			"name": "Flow System",
			"boughtName": "Flow System",
			"costs": [{
				"type": "Air",
				"amount": 7e4
			}],
			"effect": function (loadOverride) {
				dynamicData.stats.machineOverflowRegulator = true;
				if (!loadOverride) {
					lore.addBannerMessage("overflow0");
				}
			},
			"tooltip": {
				"topRow": function () {
					return "Conversion machine overflow system.";
				},
				"middleRow": function () {
					return "Reverses flow of element with amount ratio over 3 times higher than the other.";
				},
				"bottomRow": function () {
					return "With this upgrade you will be able to turn on all valves without severe machine fill issues.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			},
			"tooltipBought": {
				"topRow": function () {
					return "Conversion machine reverse flow system.";
				},
				"middleRow": function () {
					return "Reverses flow of element with amount ratio over 3 times higher than the other.";
				},
				"bottomRow": function () {
					return "Ratio is based on amount needed in conversion formula.";
				}
			}
		},
		"machineSpeed0": {
			"name": "Rot. Speed I",
			"costs": [{
				"type": "Water",
				"amount": 15
			}, {
				"type": "Fire",
				"amount": 1
			}],
			"chained": "machineSpeed1",
			"effect": function (loadOverride) {
				dynamicData.stats.machineBonusSpeed += 0.2;
				if (!loadOverride) {
					lore.addBannerMessage("machineSpeed0");
				}
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Increase rotation speed of machines.";
				},
				"bottomRow": function () {
					return "It should noticeably help with reaction speed.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"machineSpeed1": {
			"name": "Rot. Speed II",
			"costs": [{
				"type": "Water",
				"amount": 15e12
			}, {
				"type": "Fire",
				"amount": 1
			}],
			"chained": "machineSpeed2",
			"effect": function () {
				dynamicData.stats.machineBonusSpeed += 0.2;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Increase rotation speed of machines.";
				},
				"bottomRow": function () {
					return "It should noticeably help with reaction speed.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"machineSpeed2": {
			"name": "Rot. Speed III",
			"costs": [{
				"type": "Water",
				"amount": 15e24
			}, {
				"type": "Fire",
				"amount": 1
			}],
			"chained": "machineSpeed3",
			"effect": function () {
				dynamicData.stats.machineBonusSpeed += 0.4;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Increase rotation speed of machines.";
				},
				"bottomRow": function () {
					return "It should noticeably help with reaction speed.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"machineSpeed3": {
			"name": "Rot. Speed IV",
			"costs": [{
				"type": "Water",
				"amount": 15e36
			}, {
				"type": "Fire",
				"amount": 1
			}],
			"chained": "machineSpeed4",
			"effect": function () {
				dynamicData.stats.machineBonusSpeed += 0.4;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Increase rotation speed of machines.";
				},
				"bottomRow": function () {
					return "It should noticeably help with reaction speed.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"machineSpeed4": {
			"name": "Rot. Speed V",
			"costs": [{
				"type": "Water",
				"amount": 15e48
			}, {
				"type": "Fire",
				"amount": 1
			}],
			"chained": "machineSpeed5",
			"effect": function () {
				dynamicData.stats.machineBonusSpeed += 0.6;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Increase rotation speed of machines.";
				},
				"bottomRow": function () {
					return "It should noticeably help with reaction speed.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"machineSpeed5": {
			"name": "Rot. Speed VI",
			"costs": [{
				"type": "Water",
				"amount": 15e60
			}, {
				"type": "Fire",
				"amount": 1
			}],
			"chained": "machineSpeed6",
			"effect": function () {
				dynamicData.stats.machineBonusSpeed += 0.6;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Increase rotation speed of machines.";
				},
				"bottomRow": function () {
					return "It should noticeably help with reaction speed.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"machineSpeed6": {
			"name": "Rot. Speed VII",
			"costs": [{
				"type": "Water",
				"amount": 15e74
			}, {
				"type": "Fire",
				"amount": 1
			}],
			"chained": "machineSpeed7",
			"effect": function () {
				dynamicData.stats.machineBonusSpeed += 0.8;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Increase rotation speed of machines.";
				},
				"bottomRow": function () {
					return "It should noticeably help with reaction speed.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		},
		"machineSpeed7": {
			"name": "Rot. Speed VIII",
			"boughtName": "Rot. Speed Max",
			"costs": [{
				"type": "Water",
				"amount": 15e88
			}, {
				"type": "Fire",
				"amount": 1
			}],
			"effect": function () {
				dynamicData.stats.machineBonusSpeed += 0.8;
			},
			"tooltip": {
				"topRow": function () {
					return "";
				},
				"middleRow": function () {
					return "Increase rotation speed of machines.";
				},
				"bottomRow": function () {
					return "It should noticeably help with reaction speed.";
				},
				"additions": [{
					"special": "upgradeCosts"
				}]
			}
		}
	}
};
var functionData = {
	"loadData": function () {
		location.reload();
	},
	"saveData": function () {
		saveData();
	},
	"resetData": function () {
		resetData();
	},
	"clearData": function () {
		clearData();
	},
	"combineGolems": function () {
		combineGolems();
	},
	"tabSwitch": function () {
		if (dynamicData.tabStatus[this.arg1].disabled) {
			return;
		}
		tempData.activeTab = this.arg1;
		currentlyHovered = null;
	},
	"upgradeBought": function () {
		boughtUpgrade(this, this.arg1);
	},
	"valveSwitch": function () {
		dynamicData.conversionMachines[this.arg1][this.arg2].valve = !dynamicData.conversionMachines[this.arg1][this.arg2].valve;
	},
	"utilityMachineTankSwitch": function () {
		dynamicData.utilityMachines[this.arg1].tanks[this.arg2].valve = !dynamicData.utilityMachines[this.arg1].tanks[this.arg2].valve;
	},
	"catalystDisable": function () {
		if (dynamicData.skillTree.currentChallenge && dynamicData.skillTree.currentChallenge.effects.cruiser) {
			return true;
		}
		return false;
	},
	"catalystSwitch": function () {
		if (dynamicData.skillTree.currentChallenge && dynamicData.skillTree.currentChallenge.effects.cruiser) {
			return true;
		}

		if (dynamicData.utilityMachines[0].active) {
			dynamicData.utilityMachines[0].active = false;
			dynamicData.utilityMachines[0].cooldown = dynamicData.utilityMachines[0].maxCooldown;
		}
		else {
			if (dynamicData.utilityMachines[0].cooldown === 0) dynamicData.utilityMachines[0].active = true;
		}
		return false;
	},
	"tooltipUnhover": function () {
		canvasTooltip = null;
	},
	"tooltipHoverUpgrade": function () {
		if (dynamicData.upgradesBought[this.arg1]) {
			canvasTooltip = staticData.upgrades[this.arg1].tooltipBought;
		}
		else {
			canvasTooltip = staticData.upgrades[this.arg1].tooltip;
		}
		if (canvasTooltip) canvasTooltip.arg1 = this.arg1;
	},
	"tooltipHoverConversionMachine": function () {
		canvasTooltip = staticData.conversionMachines[this.arg1].tooltip;
		if (canvasTooltip) canvasTooltip.arg1 = this.arg1;
	},
	"tooltipHoverUtilityMachine": function () {
		canvasTooltip = staticData.utilityMachines[this.arg1].tooltip;
		if (canvasTooltip) canvasTooltip.arg1 = this.arg1;
	},
	"tooltipHoverCatalystButton": function () {
		if (!dynamicData.skillTree.currentChallenge || !dynamicData.skillTree.currentChallenge.effects.cruiser) {
			canvasTooltip = staticData.utilityMachines[0].tooltipButton;
			if (canvasTooltip) canvasTooltip.arg1 = this.arg1;
		}
	},
	"tooltipHoverMergeButton": function () {
		if (tempData.mergingGolems.length === 2) {
			if (staticData.golems[tempData.mergingGolems[0]].combine[tempData.mergingGolems[1]]) {
				canvasTooltip = staticData.golems[staticData.golems[tempData.mergingGolems[0]].combine[tempData.mergingGolems[1]]].tooltip;
			}
			else {
				canvasTooltip = null;
			}
		}
		else {
			canvasTooltip = staticData.mergeButtonTooltip;
		}
	},
	"tooltipHoverGolem": function () {
		if (!dynamicData.skillTree.currentChallengeNode && dynamicData.golems[this.arg1] !== 0) {
			canvasTooltip = staticData.golems[this.arg1].tooltip;
		}
	},
	"checkGolem": function () {
		return (dynamicData.skillTree.currentChallengeNode || dynamicData.golems[this.arg1] === 0);
	},
	"clickedGolem": function () {
		if (!dynamicData.skillTree.currentChallengeNode && dynamicData.golems[this.arg1] !== 0) {

			if (staticData.golems[this.arg1].combine) {

				if (tempData.mergingGolems[0] === this.arg1) {
					tempData.mergingGolems = tempData.mergingGolems.splice(1);
				}
				else if (tempData.mergingGolems[1] === this.arg1) {
					tempData.mergingGolems.splice(1);
				}
				else if (tempData.mergingGolems.length < 2) {
					tempData.mergingGolems.push(this.arg1);
				}
			}
			else {

			}
		}
	},
	"scrollLoreTop": function () {
		tempData.loreScroll = 0;
	},
	"scrollLoreBot": function () {
		tempData.loreScroll = Math.max(0, dynamicData.lore.maxScroll);
	},
	"scrollLoreUp": function () {
		tempData.loreScrollSpeed = -1;
	},
	"scrollLoreUpFast": function () {
		tempData.loreScrollSpeed = -8;
	},
	"scrollLoreDown": function () {
		tempData.loreScrollSpeed = 1;
	},
	"scrollLoreDownFast": function () {
		tempData.loreScrollSpeed = 8;
	},
	"scrollLoreStop": function () {
		tempData.loreScrollSpeed = 0;
	},
	"checkTab": function () {
		return dynamicData.tabStatus[this.arg1].disabled || this.arg1 == tempData.activeTab;
	},
	"showOverlayChallenge": function () {
		if (dynamicData.skillTree.currentChallenge) {
			visibleOverlay = 'Challenge';
		}
	},
	"showOverlayFAQ": function () {
		visibleOverlay = 'FAQ';
	},
	"hideOverlay": function () {
		visibleOverlay = null;
	},
	"toggleColorblind": function () {
		dynamicSaveData.options.colorblindMode = !dynamicSaveData.options.colorblindMode;
	},
	"mainHub": function () {
		saveData();
		window.location.href = "https://nagshell.github.io/elemental-inception-incremental";
	},
	"patreonLink": function () {
		window.open('https://www.patreon.com/user?u=12559765', '_blank');
	},
	"paypalLink": function () {
		window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TNTLB3ZN7BVUQ', '_blank');
	},
	"exportData": function () {
		functionData.rejectedImport();
		if (confirm("Once you accept save data will be copied to your clipboard.")) {
			var tempElem = document.getElementById("clipbordElement");
			tempElem.style.display = '';
			tempElem.value = saveDataToCode();
			tempElem.focus();
			tempElem.select();
			document.execCommand('copy');
			tempElem.style.display = 'none';
		}
	},
	"importData": function () {
		var tempElem = document.getElementById("clipbordElement");
		tempElem.style.display = '';
		tempElem.value = '';
		alert("Copy your data into text-box below game window and press accept after that.");
		document.getElementById("clipboardAccept").style.display = '';
		document.getElementById("clipboardCancel").style.display = '';
	},
	"confirmedImport": function () {
		var tempElem = document.getElementById("clipbordElement");
		loadData(tempElem.value);
		tempElem.style.display = 'none';
		document.getElementById("clipboardAccept").style.display = 'none';
		document.getElementById("clipboardCancel").style.display = 'none';
	},
	"rejectedImport": function () {
		document.getElementById("clipbordElement").style.display = 'none';
		document.getElementById("clipboardAccept").style.display = 'none';
		document.getElementById("clipboardCancel").style.display = 'none';
	},
	"challengeActive": function () {
		return dynamicData.skillTree.currentChallengeNode;
	}
};

function preprocessData() {
	for (var golemID1 in staticData.golems) {
		var golem1 = staticData.golems[golemID1];
		if (golem1.combine) {
			for (var golemID2 in golem1.combine) {
				staticData.golems[golem1.combine[golemID2]].from = {
					golemID1: "true",
					golemID2: "true"
				}
			}
		}
	}
}
preprocessData();
