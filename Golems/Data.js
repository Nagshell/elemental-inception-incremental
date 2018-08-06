var achievementsData = {
	"achievementsUnlocked" : false,
	"mergeWatched" : false,
	"achievementList" : {
		"upgrades" : {
			"unlocked" : false,
			"name" : "Gold is the only color I see.",
			"description" : "Get all upgrades."
		},
		"golems" : {
			"unlocked" : false,
			"name" : "But I wanted more of them...",
			"description" : "Get all Golems."
		},
		"tanks" : {
			"unlocked" : false,
			"name" : "They were supposed to be infinite.",
			"description" : "Get 1e300 of an Element"
		},
		"stash" : {
			"unlocked" : false,
			"name" : "Doing things the long way.",
			"description" : "Do not unlock Stash"
		},
		"infernal" : {
			"unlocked" : false,
			"name" : "The ending makes no damn sense this way.",
			"description" : "Complete the stage while you have only 1 Golem."
		},
		"flow" : {
			"unlocked" : false,
			"name" : "Are you a RTS veteran?",
			"description" : "Do not buy Flow System upgrade"
		},
		"speed" : {
			"unlocked" : false,
			"name" : "How fast can you go?",
			"description" : "",
			"time" : 23*60*60*1000
		}
	}
};

var dynamicData = {
	"version" : 2.21,
	"colorblindMode" : false,
	"startTime" : new Date(),
	"popupActive" : null,
	"accumulatedTime" : 0,
	"elementalTanks" : {
		"Earth" : {
			"amount" : 0,
			"gained" : 0,
			"record" : [],
			"change" : 0
		},
		"Water" : {
			"amount" : 0,
			"gained" : 0,
			"record" : [],
			"change" : 0
		},
		"Air" : {
			"amount" : 0,
			"gained" : 0,
			"record" : [],
			"change" : 0
		},
		"Fire" : {
			"amount" : 0,
			"gained" : 0,
			"record" : [],
			"change" : 0
		}
	},
	"rifts" : {
		"unlocked" : 0,
		"delay" : 0,
		"maxDelay" : 240,
		"power" : 4
	},
	"golems" : [],
	"conversionMachines" : [
		{
			"name" : "Liquefier",
			"ingredient" : {
				"type" : "Earth",
				"amount" : 0,
				"drain" : 1,
				"used" : 0,
				"valve" : false
			},
			"reagent" : {
				"type" : "Water",
				"amount" : 0,
				"drain" : 1,
				"used" : 0,
				"valve" : false
			},
			"product" : {
				"type" : "Water",
				"rate" : 2
			}
		},
		{
			"name" : "Boiler",
			"ingredient" : {
				"type" : "Water",
				"amount" : 0,
				"drain" : 1,
				"used" : 0,
				"valve" : false
			},
			"reagent" : {
				"type" : "Fire",
				"amount" : 0,
				"drain" : 3,
				"used" : 0,
				"valve" : false
			},
			"product" : {
				"type" : "Air",
				"rate" : 4
			}
		},
		{
			"name" : "Combustor",
			"ingredient" : {
				"type" : "Air",
				"amount" : 0,
				"drain" : 4,
				"used" : 0,
				"valve" : false
			},
			"reagent" : {
				"type" : "Fire",
				"amount" : 0,
				"drain" : 4,
				"used" : 0,
				"valve" : false
			},
			"product" : {
				"type" : "Fire",
				"rate" : 8
			}
		},
		{
			"name" : "Volcano",
			"ingredient" : {
				"type" : "Earth",
				"amount" : 0,
				"drain" : 1,
				"used" : 0,
				"valve" : false
			},
			"reagent" : {
				"type" : "Fire",
				"amount" : 0,
				"drain" : 1,
				"used" : 0,
				"valve" : false
			},
			"product" : {
				"type" : "Earth",
				"rate" : 2	
			}
		}
	],
	"utilityMachines" : [
		{
			"name" : "Catalyst",
			"tanks" : [
				{
					"type" : "Air",
					"amount" : 0,
					"capacity" : 1,
					"drain" : 11,
					"valve" : false
				},{
					"type" : "Fire",
					"amount" : 0,
					"capacity" : 1,
					"drain" : 11,
					"valve" : false
				}
			],
			"maxSpeed" : 1,
			"speed" : 0.5,
			"baseSpeed" : 0.5,
			"maxBoost" : 0,
			"boost" : 0,
			"active" : false,
			"cooldown" : 0,
			"maxCooldown" : 1
		},
		{
			"name" : "Orb Infuser",
			"tanks" : [
				{
					"type" : "Earth",
					"amount" : 0,
					"capacity" : 1e6,
					"drain" : 0.1,
					"valve" : false
				},{
					"type" : "Water",
					"amount" : 0,
					"capacity" : 1e6,
					"drain" : 0.1,
					"valve" : false
				},{
					"type" : "Air",
					"amount" : 0,
					"capacity" : 1e6,
					"drain" : 0.1,
					"valve" : false
				},{
					"type" : "Fire",
					"amount" : 0,
					"capacity" : 1e6,
					"drain" : 0.1,
					"valve" : false
				}
			],
			"incrementStep" : 10
		},
		{
			"name" : "Stash",
			"tanks" : [
				{
					"type" : "Earth",
					"amount" : 0,
					"capacity" : 1e5,
					"divider" : 1,
					"drain" : 0.1,
					"valve" : false
				},{
					"type" : "Water",
					"amount" : 0,
					"capacity" : 1e5,
					"divider" : 1,
					"drain" : 0.1,
					"valve" : false
				},{
					"type" : "Air",
					"amount" : 0,
					"capacity" : 1e5,
					"divider" : 1,
					"drain" : 0.1,
					"valve" : false
				},{
					"type" : "Fire",
					"amount" : 0,
					"capacity" : 1e5,
					"divider" : 1,
					"drain" : 0.1,
					"valve" : false
				}
			],
			"divider" : 4
		}
	],
	"stats" : {
		"upgradesNum" : 0,
		"machineBonusSpeed" : 1,
		"machineGolemSpeed" : 1,
		"pipes" : {
			"level" : 1
		},
		"valvesAdded" : 0,
		"golemCounter" : 0,
		"upgradeCounter" : 0
	},
	"golemEffects" : {
		"production" : {
			"Earth" : 0,
			"Water" : 0,
			"Air" : 0,
			"Fire" : 0
		},
		"Magma" : {
			"appliedEffect" : false
		},
		"Steam" : {
			"appliedEffect" : false
		},
		"Infernal" : {
			"appliedEffect" : false
		}
	},
	"upgradesBought" : {
		
	},
	"visibleUpgrades" : [],
	"clickableElements" : [[],[],[],[],[],[]],
	"tabStatus" : [
		{
			"highlight" : false
		},{
			"highlight" : false,
			"disabled" : true
		},{
			"highlight" : false
		},{
			"highlight" : false
		},{
			"highlight" : false
		},{
			"highlight" : false
		}
	],
	"lore" : {
		"messages" : ["","","",""],
		"lengths" : [],
		"maxScroll" : -320
	},
	"mergingButton" : null,
	"punCounter" : 0,
	"golemEatPopup" : true,
	"golemInfernalPopup" : true,
	"nextStagePreview" : false,
};
var tempData = {
	"activeTab" : 0,
	"canvasTicks" : 0,
	"catalystRota" : 0,
	"machineRota" : 0,
	"mergingGolems" : [],
	"currentBanner" : null,
	"ticksWithoutBanner" : 0,
	"currentBannerPosition" : 780,
	"bannerSpeed" : 1,
	"nextBanners" : [],
	"loreScroll" : 0,
	"loreScrollSpeed" : 0,
};
var staticData = {
	"elementalColor" : [
		["#88CC88","#559955","#335533","#182518"],
		["#8888CC","#555599","#333355","#181825"],
		["#CCCC88","#999955","#555533","#252518"],
		["#CC8888","#995555","#553333","#251818"]
	],
	"textColor" : "#CCCCCC",
	"borderColor" : "#999999",
	"tabNames" : ["Main","Golems","Lore","Achievements","Options"],
	"mergeButtonTooltip" : {
		"topRow" : function() {
			return "Merge Golems";
		},
		"middleRow" : function() {
			return "Merge two base Golems together.";
		},
		"bottomRow" : function() {
			return "Choose them and hover over Merge to see potential result";
		}
	},
	"golems" : {
		"Earth" : {
			"effect" : function() {
				dynamicData.golemEffects.production["Earth"] += dynamicData.elementalTanks["Earth"].gained * 0.1;
			},
			"combine" : {
				"Water" : "Mud",
				"Air" : "Sand",
				"Fire" : "Magma"
			},
			"x" : 200,
			"y" : -160,
			"colors" : ["#144505","#296616","rgba(255,255,255,0.2)"],
			"rotatingSpeed" : 2,
			"tooltip" : {
				"topRow" : function() {
					return "Earth Golem";
				},
				"middleRow" : function() {
					return "Increases Earth gained each second by 10%";
				},
				"bottomRow" : function() {
					return "";
				}
			}
		},
		"Water" : {
			"effect" : function() {
				dynamicData.golemEffects.production["Water"] += dynamicData.elementalTanks["Water"].gained * 0.1;
			},
			"combine" : {
				"Earth" : "Mud",
				"Air" : "Ice",
				"Fire" : "Steam"
			},
			"x" : 200,
			"y" : 160,
			"colors" : ["#062334","#14384D","rgba(255,255,255,0.2)"],
			"rotatingSpeed" : 2,
			"tooltip" : {
				"topRow" : function() {
					return "Water Golem";
				},
				"middleRow" : function() {
					return "Increases Water gained each second by 10%";
				},
				"bottomRow" : function() {
					return "";
				}
			}
		},
		"Air" : {
			"effect" : function() {
				dynamicData.golemEffects.production["Air"] += dynamicData.elementalTanks["Air"].gained * 0.1;
			},
			"combine" : {
				"Earth" : "Sand",
				"Water" : "Ice",
				"Fire" : "Infernal"
			},
			"x" : -200,
			"y" : 160,
			"colors" : ["#8F8F32","#AEAE51","rgba(255,255,255,0.2)"],
			"rotatingSpeed" : 2,
			"tooltip" : {
				"topRow" : function() {
					return "Air Golem";
				},
				"middleRow" : function() {
					return "Increases Air gained each second by 10%";
				},
				"bottomRow" : function() {
					return "";
				}
			}
		},
		"Fire" : {
			"effect" : function() {
				dynamicData.golemEffects.production["Fire"] += dynamicData.elementalTanks["Fire"].gained * 0.1;
			},
			"combine" : {
				"Earth" : "Magma",
				"Water" : "Steam",
				"Air" : "Infernal"
			},
			"x" : -200,
			"y" : -160,
			"colors" : ["#6A2429","#7B3E42","rgba(255,255,255,0.2)"],
			"rotatingSpeed" : 2,
			"tooltip" : {
				"topRow" : function() {
					return "Fire Golem";
				},
				"middleRow" : function() {
					return "Increases Fire gained each second by 10%";
				},
				"bottomRow" : function() {
					return "";
				}
			}
		},
		"Mud" : {
			"effect" : function() {
				dynamicData.conversionMachines[0].reagent.drain = 0.01;
				dynamicData.golemEffects.production["Water"] += dynamicData.elementalTanks["Water"].gained * Math.pow(Math.log10(1+dynamicData.elementalTanks["Earth"].amount)/150,0.5);
			},
			"x" : 100,
			"y" : -100,
			"colors" : ["#522705","#906c3f","rgba(255,255,255,0.2)"],
			"rotatingSpeed" : 0.2,
			"tooltip" : {
				"topRow" : function() {
					return "Mud Golem <- Earth + Water";
				},
				"middleRow" : function() {
					var bonus = Math.pow(Math.log10(1+dynamicData.elementalTanks["Earth"].amount)/150,0.5)*100;
					return "Water gains get better the more Earth you have (currently: "+bonus.toFixed(1)+"%)";
				},
				"bottomRow" : function() {
					return "Liquefier also runs with miniscule amounts of Water.";
				}
			}
		},
		"Sand" : {
			"effect" : function() {
				dynamicData.golemEffects.production["Air"] += dynamicData.elementalTanks["Earth"].amount/60;
			},
			"x" : -100,
			"y" : 100,
			"colors" : ["#5F5D1F","#747236","rgba(255,255,255,0.2)"],
			"rotatingSpeed" : -2,
			"tooltip" : {
				"topRow" : function() {
					return "Sand Golem < Earth + Air";
				},
				"middleRow" : function() {
					return "Passively produces Air based on your current Earth (10%/s)";
				},
				"bottomRow" : function() {
					return "";
				}
			}
		},
		"Magma" : {
			"effect" : function() {
				if(!dynamicData.golemEffects["Magma"].appliedEffect) {
					for(var i=0;i<4;i++) {
						dynamicData.conversionMachines[i].reagent.drain/=4;
					}
					dynamicData.golemEffects["Magma"].appliedEffect = true;
				}
			},
			"x" : -100,
			"y" : -100,
			"colors" : ["#6A2429","#747236","rgba(0,0,0,0.6)"],
			"rotatingSpeed" : 1.5,
			"tooltip" : {
				"topRow" : function() {
					return "Magma Golem < Earth + Fire";
				},
				"middleRow" : function() {
					return "Reagents are 4 times as effective.";
				},
				"bottomRow" : function() {
					return "You can use only a quarter of them without decreasing production.";
				}
			}
		},
		"Ice" : {
			"effect" : function() {
				dynamicData.golemEffects.production["Earth"] += dynamicData.conversionMachines[0].ingredient.used * 1.7;
			},
			"x" : 0,
			"y" : 180,
			"colors" : ["#4D726F","#9FA5A5","rgba(255,255,255,0.2)"],
			"rotatingSpeed" : 1,
			"tooltip" : {
				"topRow" : function() {
					return "Ice Golem < Water + Air";
				},
				"middleRow" : function() {
					return "Liquefier instead of using up Earth produces small amounts of it.";
				},
				"bottomRow" : function() {
					return "100% usage > -10% usage";
				}
			}
		},
		"Steam" : {
			"effect" : function() {
				if(!dynamicData.golemEffects["Steam"].appliedEffect) {
					dynamicData.stats.pipes.level += 2;
					dynamicData.golemEffects["Steam"].appliedEffect = true;
					redraw[0] = true;
				}
				dynamicData.stats.machineGolemSpeed = 1 + Math.pow(Math.log10(1+dynamicData.elementalTanks["Air"].amount)/150,0.50); 
			},
			"x" : 100,
			"y" : 100,
			"colors" : ["#86908F","#9FA5A5","rgba(0,0,255,0.10)"],
			"rotatingSpeed" : -30,
			"tooltip" : {
				"topRow" : function() {
					return "Steam Golem < Water + Fire";
				},
				"middleRow" : function() {
					return "Conversion machine speed is increased according to current Air (currently: "+(100*dynamicData.stats.machineGolemSpeed-100).toFixed(1)+"%)";
				},
				"bottomRow" : function() {
					return "Golem also did upgrade pipes two additional times";
				}
			}
		},
		"Infernal" : {
			"effect" : function() {
				var counter = 0;
				var tempChange = 0;
				for(var tank in dynamicData.elementalTanks) {
					tempChange = Math.log10(1+dynamicData.elementalTanks[tank].amount);
					if(tempChange > 90) {
						dynamicData.tabStatus[1].highlight = true;
						tempChange = (90-tempChange)/2000;
						if(dynamicData.golemInfernalPopup) {
							dynamicData.golemInfernalPopup = false;
							lore.addLore("infernal1");
						}
					} else {
						tempChange = (90-tempChange)/90;
						tempChange = Math.pow(tempChange,3)/100;
					}
					dynamicData.golemEffects.production[tank] += dynamicData.elementalTanks[tank].amount*tempChange;
					if(dynamicData.elementalTanks[tank].amount > 1e120) {
						counter++;
					}
				}
				if(counter === 4) {
					if(!dynamicData.golemEffects["Infernal"].appliedEffect) {
						lore.addLore("ending0");
						dynamicData.nextStagePreview = true;
						dynamicData.tabStatus[1].disabled = true;
						dynamicData.golemEffects["Infernal"].appliedEffect = true;
						
						achievementsData.achievementsUnlocked = true;
						if(dynamicData.golems.length === 1) {
							achievementsData.achievementList.infernal.unlocked = true;
						}
						if(!dynamicData.upgradesBought.stash0) {
							achievementsData.achievementList.stash.unlocked = true;
						}
						if(!dynamicData.upgradesBought.machineOverflow) {
							achievementsData.achievementList.flow.unlocked = true;
						}
						
						if(dynamicData.startTime) {
							achievementsData.achievementList.speed.time = Math.min(achievementsData.achievementList.speed.time,(new Date() - dynamicData.startTime));
							if(achievementsData.achievementList.speed.time < (90*60)*1000) {
								achievementsData.achievementList.speed.unlocked = true;
							}
							
						}
					}
				}
			},
			"x" : 0,
			"y" : 0,
			"colors" : ["#000000","#7B3E42","rgba(200,50,50,0.4)"],
			"rotatingSpeed" : 3,
			"tooltip" : {
				"topRow" : function() {
					return "Infernal Golem < Air + Fire";
				},
				"middleRow" : function() {
					return "Produces decreasing amounts of Elements based on their current volume.";
				},
				"bottomRow" : function() {
					return "It'll drain Elements above 1e90... I wonder what will happen if I let him drain enough of all Elements?";
				}
			}
		}
	},
	"conversionMachines" : [
		{
			"tooltip" : {
				"topRow" : function() {
					return "Liquefier";
				},
				"middleRow" : function() {
					var oCM = dynamicData.conversionMachines[0];
					return "Conversion formula : "+oCM.ingredient.drain + " " + oCM.ingredient.type + " + " +
						oCM.reagent.drain + " " + oCM.reagent.type + " = " + (oCM.product.rate*(1+dynamicData.utilityMachines[0].boost)).toFixed(2) + " " + oCM.product.type + ".";
				},
				"bottomRow" : function() {
					return "";
				},
				"additions" : [
					{
						"special" : "conversionMachineDisplay"
					}
				]
			}
		},{
			"tooltip" : {
				"topRow" : function() {
					return "Boiler";
				},
				"middleRow" : function() {
					var oCM = dynamicData.conversionMachines[1];
					return "Conversion formula : "+oCM.ingredient.drain + " " + oCM.ingredient.type + " + " +
						oCM.reagent.drain + " " + oCM.reagent.type + " = " + (oCM.product.rate*(1+dynamicData.utilityMachines[0].boost)).toFixed(2) + " " + oCM.product.type + ".";
				},
				"bottomRow" : function() {
					return "";
				},
				"additions" : [
					{
						"special" : "conversionMachineDisplay"
					}
				]
			}
		},{
			"tooltip" : {
				"topRow" : function() {
					return "Combustor";
				},
				"middleRow" : function() {
					var oCM = dynamicData.conversionMachines[2];
					return "Conversion formula : "+oCM.ingredient.drain + " " + oCM.ingredient.type + " + " +
						oCM.reagent.drain + " " + oCM.reagent.type + " = " + (oCM.product.rate*(1+dynamicData.utilityMachines[0].boost)).toFixed(2) + " " + oCM.product.type + ".";
				},
				"bottomRow" : function() {
					return "";
				},
				"additions" : [
					{
						"special" : "conversionMachineDisplay"
					}
				]
			}
		},{
			"tooltip" : {
				"topRow" : function() {
					return "Volcano";
				},
				"middleRow" : function() {
					var oCM = dynamicData.conversionMachines[3];
					return "Conversion formula : "+oCM.ingredient.drain + " " + oCM.ingredient.type + " + " +
						oCM.reagent.drain + " " + oCM.reagent.type + " = " + (oCM.product.rate*(1+dynamicData.utilityMachines[0].boost)).toFixed(2) + " " + oCM.product.type + ".";
				},
				"bottomRow" : function() {
					return "";
				},
				"additions" : [
					{
						"special" : "conversionMachineDisplay"
					}
				]
			}
		}
	],
	"utilityMachines" : [
		{
			"effect" : function() {
				var oMyself = dynamicData.utilityMachines[0];
				if(oMyself.tanks[0].amount > 1e300) {
					oMyself.tanks[0].amount = 1e300;
				}
				if(oMyself.tanks[1].amount > 1e300) {
					oMyself.tanks[1].amount = 1e300;
				}
				if(oMyself.maxBoost === 0) {
					return;
				}
				if(oMyself.tanks[0].amount === oMyself.tanks[0].capacity) {
					oMyself.maxSpeed += 0.04;
					oMyself.baseSpeed += 0.01;
					oMyself.tanks[0].capacity *= 1e5;
				}
				if(oMyself.tanks[1].amount === oMyself.tanks[1].capacity) {
					oMyself.maxBoost += 0.01;
					oMyself.tanks[1].capacity *= 1e3;
				}
				
				if(oMyself.active) {
					oMyself.speed += oMyself.baseSpeed/500;
					oMyself.maxCooldown += 0.01;
				} else {
					oMyself.speed = oMyself.baseSpeed;
					oMyself.cooldown-=0.02;
					if(oMyself.cooldown < 0) {
						oMyself.maxCooldown = 0.2;
						oMyself.cooldown = 0;
					}
				}
				
				if(oMyself.speed < oMyself.maxSpeed) {
					oMyself.boost = oMyself.maxBoost * oMyself.speed;
				} else {
					oMyself.boost = oMyself.maxBoost * Math.max(0,2*oMyself.maxSpeed-oMyself.speed);
				}
			},
			"tooltip" : {
				"topRow" : function() {
					return "Catalyst Ring";
				},
				"middleRow" : function() {
					var oCM = dynamicData.utilityMachines[0];
					return "Current boost: " +(100*oCM.boost).toFixed(2)+ "%";
				},
				"bottomRow" : function() {
					return "Rotates around conversion machines to give them more efficiency. Fill it with Air and Fire to improve it.";
				},
				"additions" : [
					{
						"special" : "utilityTankDisplay"
					}
				]
			},
			"tooltipButton" : {
				"topRow" : function() {
					return "Catalyst Ring";
				},
				"middleRow" : function() {
					var oCM = dynamicData.utilityMachines[0];
					return "Current boost: " +(100*oCM.boost).toFixed(2)+ "%";
				},
				"bottomRow" : function() {
					return "Click it toggle safety deceleration mechanism. ";
				},
				"additions" : [
					{
						"special" : "utilityTankDisplay"
					}
				]
			}
		},
		{
			"effect" : function() {
				for(var i=0;i<4;i++) {
					var oTank =  dynamicData.utilityMachines[1].tanks[i];
					if(oTank.amount == oTank.capacity) {
						for(var j=0;j<4;j++) {
							dynamicData.utilityMachines[1].tanks[j].valve = false;
						}
						oTank.amount = 0;
						createGolem(oTank.type);
					}
					oTank.capacity = 1e10 * Math.pow(10,dynamicData.golems.length*(dynamicData.golems.length+1));
				}
			},
			"tooltip" : {
				"topRow" : function() {
					return "Orb Infuser";
				},
				"middleRow" : function() {
					var oCM = dynamicData.utilityMachines[0];
					return "Creates Golems.";
				},
				"bottomRow" : function() {
					return "";
				},
				"additions" : [
					{
						"special" : "utilityTankDisplay"
					}
				]
			}
		},
		{
			"effect" : function() {
				for(var i=0;i<4;i++) {
					var oTank = dynamicData.utilityMachines[2].tanks[i];
					oTank.capacity = Math.max(oTank.capacity,dynamicData.elementalTanks[oTank.type].amount*2);
				}
			},
			"tooltip" : {
				"topRow" : function() {
					return "Elemental Stash";
				},
				"middleRow" : function() {
					var oCM = dynamicData.utilityMachines[0];
					return "Returns root of stored Elements after buying an upgrade / creating Golem.";
				},
				"bottomRow" : function() {
					return "";
				},
				"additions" : [
					{
						"special" : "utilityTankDisplay"
					}
				]
			}
		}
	],
	
	"upgradeNumber" : 32,
	"upgrades" : {
		"rift0" : {
			"name" : "Open Earth Rift",
			"costs" : [],
			"starting" : true,
			"chained" : "rift1",
			"effect" : function() {
				dynamicData.rifts.unlocked++;
				addUpgrade("riftPower0");
				lore.addBannerMessage("upgradeCost0");
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Open rift to elemental plane inside Earth's tank.";
				},
				"bottomRow" : function() {
					return "Rift will constantly produce respective element.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"rift1" : {
			"name" : "Open Water Rift",
			"costs" : [
				{
						"type" : "Earth",
						"amount" : 10
				}
			],
			"chained" : "rift2",
			"effect" : function() {
				dynamicData.rifts.unlocked++;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Open rift to elemental plane inside Water's tank.";
				},
				"bottomRow" : function() {
					return "Rift will constantly produce respective element.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"rift2" : {
			"name" : "Open Air Rift",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 100
				}
			],
			"chained" : "rift3",
			"effect" : function() {
				dynamicData.rifts.unlocked++;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Open rift to elemental plane inside Air's tank.";
				},
				"bottomRow" : function() {
					return "Rift will constantly produce respective element.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"rift3" : {
			"name" : "Open Fire Rift",
			"boughtName" : "All Rifts Open",
			"costs" : [
				{
						"type" : "Air",
						"amount" : 100
				}
			],
			"effect" : function() {
				dynamicData.rifts.unlocked++;
				addUpgrade("machine0");
				lore.addLore("rifts0");
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Open rift to elemental plane inside Fire's tank.";
				},
				"bottomRow" : function() {
					return "Rift will constantly produce respective element.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			},
			"tooltipBought" : {
				"topRow" : function() {
					return "All rifts opened";
				},
				"middleRow" : function() {
					return "";
				},
				"bottomRow" : function() {
					return "All rifts constantly produce respective element.";
				}
			}
		},
		"riftPower0" : {
			"name" : "Rift Power I",
			"costs" : [
				{
						"type" : "Earth",
						"amount" : 5
				}
			],
			"chained" : "riftPower1",
			"effect" : function() {
				dynamicData.rifts.power*=2;
				addUpgrade("riftSpeed0");
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Widen space available for rifts.";
				},
				"bottomRow" : function() {
					return "Rift will produce 2x more elements.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"riftPower1" : {
			"name" : "Rift Power II",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 20
				}
			],
			"chained" : "riftPower2",
			"effect" : function() {
				dynamicData.rifts.power*=2;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Widen space available for rifts.";
				},
				"bottomRow" : function() {
					return "Rift will produce 2x more elements.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"riftPower2" : {
			"name" : "Rift Power III",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 20
				},{
						"type" : "Air",
						"amount" : 20
				}
			],
			"chained" : "riftPower3",
			"effect" : function() {
				dynamicData.rifts.power*=2;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Widen space available for rifts.";
				},
				"bottomRow" : function() {
					return "Rift will produce 2x more elements.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"riftPower3" : {
			"name" : "Rift Power IV",
			"costs" : [
				{
						"type" : "Earth",
						"amount" : 100
				},{
						"type" : "Water",
						"amount" : 100
				}
			],
			"chained" : "riftPower4",
			"effect" : function() {
				dynamicData.rifts.power*=2;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Widen space available for rifts.";
				},
				"bottomRow" : function() {
					return "Rift will produce 2x more elements.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"riftPower4" : {
			"name" : "Rift Power V",
			"boughtName" : "Rift Power Max",
			"costs" : [
				{
						"type" : "Earth",
						"amount" : 1000
				},{
						"type" : "Fire",
						"amount" : 1000
				}
			],
			"effect" : function() {
				dynamicData.rifts.power*=2;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Widen space available for rifts.";
				},
				"bottomRow" : function() {
					return "Rift will produce 2x more elements.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			},
			"tooltipBought" : {
				"topRow" : function() {
					return "Rifts reached maximum radius.";
				},
				"middleRow" : function() {
					return "";
				},
				"bottomRow" : function() {
					return "";
				}
			}
		},
		"riftSpeed0" : {
			"name" : "Rift Speed I",
			"boughtName" : "",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 15
				}
			],
			"chained" : "riftSpeed1",
			"effect" : function() {
				dynamicData.rifts.maxDelay-=24;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of crystals with rifts.";
				},
				"bottomRow" : function() {
					return "Rift will produce elements a bit faster.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"riftSpeed1" : {
			"name" : "Rift Speed II",
			"boughtName" : "",
			"costs" : [
				{
						"type" : "Air",
						"amount" : 30
				}
			],
			"chained" : "riftSpeed2",
			"effect" : function() {
				dynamicData.rifts.maxDelay-=24;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of crystals with rifts.";
				},
				"bottomRow" : function() {
					return "Rift will produce elements a bit faster.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"riftSpeed2" : {
			"name" : "Rift Speed III",
			"boughtName" : "",
			"costs" : [
				{
						"type" : "Fire",
						"amount" : 150
				}
			],
			"chained" : "riftSpeed3",
			"effect" : function() {
				dynamicData.rifts.maxDelay-=24;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of crystals with rifts.";
				},
				"bottomRow" : function() {
					return "Rift will produce elements a bit faster.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"riftSpeed3" : {
			"name" : "Rift Speed IV",
			"boughtName" : "",
			"costs" : [
				{
						"type" : "Air",
						"amount" : 800
				},{
						"type" : "Fire",
						"amount" : 800
				}
			],
			"chained" : "riftSpeed4",
			"effect" : function() {
				dynamicData.rifts.maxDelay-=24;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of crystals with rifts.";
				},
				"bottomRow" : function() {
					return "Rift will produce elements a bit faster.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"riftSpeed4" : {
			"name" : "Rift Speed V",
			"boughtName" : "Rift Speed Max",
			"costs" : [
				{
						"type" : "Air",
						"amount" : 2500
				},{
						"type" : "Water",
						"amount" : 2500
				}
			],
			"effect" : function() {
				dynamicData.rifts.maxDelay-=24;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of crystals with rifts.";
				},
				"bottomRow" : function() {
					return "Rift will produce elements a bit faster.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			},
			"tooltipBought" : {
				"topRow" : function() {
					return "Rifts reached maximum angular speed.";
				},
				"middleRow" : function() {
					return "";
				},
				"bottomRow" : function() {
					return "";
				}
			}
		},
		"pipes0" : {
			"name" : "Pipes I",
			"costs" : [
				{
						"type" : "Earth",
						"amount" : 2e4
				},{
						"type" : "Water",
						"amount" : 100
				},
			],
			"effect" : function() {
				dynamicData.stats.pipes.level++;
				addUpgrade("machineOverflow");
			},
			
			"chained" : "pipes1",
			
			"tooltip" : {
				"topRow" : function() {
					return "First input pipes upgrade.";
				},
				"middleRow" : function() {
					return "Increases number of input pipes leading into the system.";
				},
				"bottomRow" : function() {
					return "Elements will be able to get out of Tanks faster. (Current rate is: "+(Math.pow(dynamicData.stats.pipes.level,1.5)*0.1).toFixed(1)+"%/tick)";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
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
		"pipes1" : {
			"name" : "Pipes II",
			"costs" : [
				{
						"type" : "Earth",
						"amount" : 2e6
				},{
						"type" : "Water",
						"amount" : 1e6
				},
			],
			"effect" : function() {
				dynamicData.stats.pipes.level+=1;
			},
			
			"chained" : "pipes2",
			"tooltip" : {
				"topRow" : function() {
					return "Second input pipes upgrade.";
				},
				"middleRow" : function() {
					return "Increases number of input pipes leading into the system.";
				},
				"bottomRow" : function() {
					return "Elements will be able to get out of Tanks faster. (Current rate is: "+(Math.pow(dynamicData.stats.pipes.level,1.5)*0.1).toFixed(1)+"%/tick)";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"pipes2" : {
			"name" : "Pipes III",
			"boughtName" : "Pipes Maxed",
			"costs" : [
				{
						"type" : "Earth",
						"amount" : 2e8
				},{
						"type" : "Water",
						"amount" : 1e10
				},
			],
			"effect" : function() {
				dynamicData.stats.pipes.level+=1;
			},
			"tooltip" : {
				"topRow" : function() {
					return "Third input pipes upgrade.";
				},
				"middleRow" : function() {
					return "Increases number of input pipes leading into the system.";
				},
				"bottomRow" : function() {
					return "Elements will be able to get out of Tanks faster. (Current rate is: "+(Math.pow(dynamicData.stats.pipes.level,1.5)*0.1).toFixed(1)+"%/tick)";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			},
			"tooltipBought" : {
				"topRow" : function() {
					return "Maximum amount of pipes you can fit was reached.";
				},
				"middleRow" : function() {
					return "Increases number of input pipes leading into the system.";
				},
				"bottomRow" : function() {
					return "Elements will be able to get out of Tanks faster. (Current rate is: "+(Math.pow(dynamicData.stats.pipes.level,1.5)*0.1).toFixed(1)+"%/tick)";
				},
			}
		},
		"machine0" : {
			"name" : "Install Catalyst",
			"costs" : [
				{
						"type" : "Fire",
						"amount" : 1e4
				},{
						"type" : "Air",
						"amount" : 1e4
				}
			],
			"effect" : function() {
				addReactionCatalyst();
				lore.addLore("catalyst0");
				lore.activatePopup("catalyst0");
				addUpgrade("pipes0");
			},
			
			"chained" : "machine0+",
			"tooltip" : {
				"topRow" : function() {
					return "Install Reaction Catalyst into the central spot.";
				},
				"middleRow" : function() {
					return "I tried to copy main component of my grandma's setup.";
				},
				"bottomRow" : function() {
					return "With Catalyst I should be able to initiate positive conversion loop. I also devised a way to use Air with it.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"machine0+" : {
			"name" : "Modify Catalyst",
			"boughtName" : "Catalyst online",
			"costs" : [
				{
						"type" : "Fire",
						"amount" : 2e4
				},{
						"type" : "Air",
						"amount" : 2e4
				}
			],
			"effect" : function() {
				lore.addLore("catalyst1");
				dynamicData.utilityMachines[0].maxBoost = 0.5;
				dynamicData.clickableElements[0].push({
					"x1" : 600,
					"x2" : 677,
					"y1" : 460,
					"y2" : 518,
					"clicked" : "catalystSwitch",
					"arg1" : 0,
					"hovered" : "tooltipHoverCatalystButton",
					"unhovered" : "tooltipUnhover"
				});
				addUpgrade("machine1");
			},
			"tooltip" : {
				"topRow" : function() {
					return "Curse tried to stop me again.";
				},
				"middleRow" : function() {
					return "I need to change how Catalyst is constructed to stop this from happening again.";
				},
				"bottomRow" : function() {
					return "Changing Catalyst into rotating ring will make it weaker, but it's my only option to proceed.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			},
			"tooltipBought" : {
				"topRow" : function() {
					return "Reaction Catalyst ring";
				},
				"middleRow" : function() {
					return "Catalyst ring boosts production of conversion machines.";
				},
				"bottomRow" : function() {
					return "";
				}
			}
		},
		"machine1" : {
			"name" : "Install Orb Infuser",
			"boughtName" : "Infuser online",
			"costs" : [
				{
						"type" : "Air",
						"amount" : 1e6
				}
			],
			"effect" : function() {
				addOrbInfuser();
			},
			"tooltip" : {
				"topRow" : function() {
					return "Build Orb Infuser";
				},
				"middleRow" : function() {
					return "I designed machine that will help with creation of golems I discovered in attic.";
				},
				"bottomRow" : function() {
					return "Filling it's tank to brim will create enough density of elements to convert Orbs I gathered into Golems.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			},
			"tooltipBought" : {
				"topRow" : function() {
					return "Orb Infuser unlocked.";
				},
				"middleRow" : function() {
					return "Once one of its tanks fills up Golem will be created.";
				},
				"bottomRow" : function() {
					return "";
				}
			}
		},
		"stash0" : {
			"name" : "Install Stash",
			"costs" : [
				{
						"type" : "Earth",
						"amount" : 5e7
				},{
						"type" : "Air",
						"amount" : 5e7
				}
			],
			"effect" : function() {
				lore.addLore("stash0");
				addStash();
			},
			"chained" : "stash1",
			"tooltip" : {
				"topRow" : function() {
					return "Create isolated machine for storing elements.";
				},
				"middleRow" : function() {
					return "Stash lets you get root of stored elements back after creating golem or buying upgrade.";
				},
				"bottomRow" : function() {
					return "";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"stash1" : {
			"name" : "Improved Stash I",
			"costs" : [
				{
						"type" : "Earth",
						"amount" : 5e16
				},{
						"type" : "Air",
						"amount" : 5e16
				}
			],
			"effect" : function() {
				dynamicData.utilityMachines[2].divider--;
			},
			"chained" : "stash2",
			"tooltip" : {
				"topRow" : function() {
					return "Make Stash much better!";
				},
				"middleRow" : function() {
					return "Stash lets you get root of stored elements back after creating golem or buying upgrade.";
				},
				"bottomRow" : function() {
					return "Improve design of valves attached to Stash.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"stash2" : {
			"name" : "Improved Stash II",
			"boughtName" : "Stash Maxed",
			"costs" : [
				{
						"type" : "Earth",
						"amount" : 5e26
				},{
						"type" : "Air",
						"amount" : 5e26
				}
			],
			"effect" : function() {
				dynamicData.utilityMachines[2].divider--;
			},
			"tooltip" : {
				"topRow" : function() {
					return "Make Stash great again!";
				},
				"middleRow" : function() {
					return "Stash lets you get root of stored elements back after creating golem or buying upgrade.";
				},
				"bottomRow" : function() {
					return "Isolate vital parts of pipes leading in and out of stash.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			},
			"tooltipBought" : {
				"topRow" : function() {
					return "Perfected Stash.";
				},
				"middleRow" : function() {
					return "Stash lets you get some elements back after creating golem.";
				},
				"bottomRow" : function() {
					return "It's not possible to improve it further.";
				}
			}
		},
		"machineOverflow" : {
			"name" : "Flow System",
			"boughtName" : "Flow System",
			"costs" : [
				{
						"type" : "Air",
						"amount" : 7e4
				}
			],
			"effect" : function() {
				dynamicData.stats.machineOverflowRegulator = true;
				lore.addBannerMessage("overflow0");
			},
			"tooltip" : {
				"topRow" : function() {
					return "Conversion machine overflow system.";
				},
				"middleRow" : function() {
					return "Reverses flow of element with amount ratio over 3 times higher than the other.";
				},
				"bottomRow" : function() {
					return "With this upgrade you will be able to turn on all valves without severe machine fill issues.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			},
			"tooltipBought" : {
				"topRow" : function() {
					return "Conversion machine reverse flow system.";
				},
				"middleRow" : function() {
					return "Reverses flow of element with amount ratio over 3 times higher than the other.";
				},
				"bottomRow" : function() {
					return "Ratio is based on amount needed in conversion formula.";
				}
			}
		},
		"machineSpeed0" : {
			"name" : "Rot. Speed I",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 15
				},
				{
						"type" : "Fire",
						"amount" : 1
				}
			],
			"chained" : "machineSpeed1",
			"effect" : function() {
				dynamicData.stats.machineBonusSpeed += 0.2;
				lore.addBannerMessage("machineSpeed0");
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of machines.";
				},
				"bottomRow" : function() {
					return "It should noticeably help with reaction speed.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"machineSpeed1" : {
			"name" : "Rot. Speed II",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 15e12
				},
				{
						"type" : "Fire",
						"amount" : 1
				}
			],
			"chained" : "machineSpeed2",
			"effect" : function() {
				dynamicData.stats.machineBonusSpeed += 0.2;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of machines.";
				},
				"bottomRow" : function() {
					return "It should noticeably help with reaction speed.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"machineSpeed2" : {
			"name" : "Rot. Speed III",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 15e24
				},
				{
						"type" : "Fire",
						"amount" : 1
				}
			],
			"chained" : "machineSpeed3",
			"effect" : function() {
				dynamicData.stats.machineBonusSpeed += 0.4;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of machines.";
				},
				"bottomRow" : function() {
					return "It should noticeably help with reaction speed.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"machineSpeed3" : {
			"name" : "Rot. Speed IV",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 15e36
				},
				{
						"type" : "Fire",
						"amount" : 1
				}
			],
			"chained" : "machineSpeed4",
			"effect" : function() {
				dynamicData.stats.machineBonusSpeed += 0.4;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of machines.";
				},
				"bottomRow" : function() {
					return "It should noticeably help with reaction speed.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"machineSpeed4" : {
			"name" : "Rot. Speed V",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 15e48
				},
				{
						"type" : "Fire",
						"amount" : 1
				}
			],
			"chained" : "machineSpeed5",
			"effect" : function() {
				dynamicData.stats.machineBonusSpeed += 0.6;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of machines.";
				},
				"bottomRow" : function() {
					return "It should noticeably help with reaction speed.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"machineSpeed5" : {
			"name" : "Rot. Speed VI",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 15e60
				},
				{
						"type" : "Fire",
						"amount" : 1
				}
			],
			"chained" : "machineSpeed6",
			"effect" : function() {
				dynamicData.stats.machineBonusSpeed += 0.6;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of machines.";
				},
				"bottomRow" : function() {
					return "It should noticeably help with reaction speed.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"machineSpeed6" : {
			"name" : "Rot. Speed VII",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 15e74
				},
				{
						"type" : "Fire",
						"amount" : 1
				}
			],
			"chained" : "machineSpeed7",
			"effect" : function() {
				dynamicData.stats.machineBonusSpeed += 0.8;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of machines.";
				},
				"bottomRow" : function() {
					return "It should noticeably help with reaction speed.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		},
		"machineSpeed7" : {
			"name" : "Rot. Speed VIII",
			"boughtName" : "Rot. Speed Max",
			"costs" : [
				{
						"type" : "Water",
						"amount" : 15e88
				},
				{
						"type" : "Fire",
						"amount" : 1
				}
			],
			"effect" : function() {
				dynamicData.stats.machineBonusSpeed += 0.8;
			},
			"tooltip" : {
				"topRow" : function() {
					return "";
				},
				"middleRow" : function() {
					return "Increase rotation speed of machines.";
				},
				"bottomRow" : function() {
					return "It should noticeably help with reaction speed.";
				},
				"additions" : [
					{
						"special" : "upgradeCosts"
					}
				]
			}
		}
	}
};
var functionData = {
	"loadData" : function(){
		loadData();
		highlight.active = false;
	},
	"saveData" : function(){saveData();},
	"resetData" : function(){resetData();},
	"combineGolems" : function(){combineGolems();},
	"tabSwitch" : function(oC,arg1){
		if(dynamicData.tabStatus[arg1].disabled) {
			return;
		}
		tempData.activeTab = arg1;
		highlight.active = false;
	},
	"upgradeBought" : function(oC,arg1) {boughtUpgrade(oC,arg1);},
	"valveSwitch" : function(oC,arg1,arg2){
		dynamicData.conversionMachines[arg1][arg2].valve = !dynamicData.conversionMachines[arg1][arg2].valve;
	},
	"utilityMachineTankSwitch" : function(oC,arg1,arg2) {
		dynamicData.utilityMachines[arg1].tanks[arg2].valve = !dynamicData.utilityMachines[arg1].tanks[arg2].valve;
	},
	"catalystSwitch" : function(){
		if(dynamicData.utilityMachines[0].active) {
			dynamicData.utilityMachines[0].active = false;
			dynamicData.utilityMachines[0].cooldown = dynamicData.utilityMachines[0].maxCooldown;
		} else {
			if(dynamicData.utilityMachines[0].cooldown === 0)
			dynamicData.utilityMachines[0].active = true;
		}
	},
	"tooltipUnhover" : function(){canvasTooltip=null;},
	"tooltipHoverUpgrade" : function(oC,arg1){
		if(dynamicData.upgradesBought[arg1]) {
			canvasTooltip = staticData.upgrades[arg1].tooltipBought;
		} else {
			canvasTooltip = staticData.upgrades[arg1].tooltip;
		}
		if(canvasTooltip)
			canvasTooltip.arg1 = arg1;
	},
	"tooltipHoverConversionMachine" : function(oC,arg1){
		canvasTooltip = staticData.conversionMachines[arg1].tooltip;
		if(canvasTooltip)
			canvasTooltip.arg1 = arg1;
	},
	"tooltipHoverUtilityMachine" : function(oC,arg1){
		canvasTooltip = staticData.utilityMachines[arg1].tooltip;
		if(canvasTooltip)
			canvasTooltip.arg1 = arg1;
	},
	"tooltipHoverCatalystButton" : function(oC,arg1){
		canvasTooltip = staticData.utilityMachines[0].tooltipButton;
		if(canvasTooltip)
			canvasTooltip.arg1 = arg1;
	},
	"tooltipHoverMergeButton" : function(oC,arg1){
		if(tempData.mergingGolems.length === 2) {
			canvasTooltip = staticData.golems[staticData.golems[tempData.mergingGolems[0]].combine[tempData.mergingGolems[1]]].tooltip;
		} else {
			canvasTooltip = staticData.mergeButtonTooltip;
		}
		if(canvasTooltip)
			canvasTooltip.arg1 = arg1;
	},
	"scrollLoreTop" : function(oC,arg1) {
		tempData.loreScroll = 0;
	},
	"scrollLoreBot" : function(oC,arg1) {
		tempData.loreScroll = Math.max(0,dynamicData.lore.maxScroll);
		console.log(dynamicData.lore.maxScroll);
	},
	"scrollLoreUp" : function(oC,arg1) {
		tempData.loreScrollSpeed = -1;
	},
	"scrollLoreUpFast" : function(oC,arg1) {
		tempData.loreScrollSpeed = -8;
	},
	"scrollLoreDown" : function(oC,arg1) {
		tempData.loreScrollSpeed = 1;
	},
	"scrollLoreDownFast" : function(oC,arg1) {
		tempData.loreScrollSpeed = 8;
	},
	"scrollLoreStop" : function(oC,arg1) {
		tempData.loreScrollSpeed = 0;
	},
	"checkDisabledTab" : function (oC,arg1) {
		return dynamicData.tabStatus[arg1].disabled;
	},
	"showFAQ" : function(oC,arg1) {
		FAQvisible = true;
	},
	"hideFAQ" : function(oC,arg1) {
		FAQvisible = false;
	},
	"toggleColorblind" : function(oC,arg1) {
		dynamicData.colorblindMode = !dynamicData.colorblindMode;
	},
	"mainHub" : function(oC,arg1) {
		saveData();
		window.location.href = "https://nagshell.github.io/elemental-inception-incremental";
	},
	"patreonLink" : function(oC,arg1) {
		window.open('https://www.patreon.com/user?u=12559765', '_blank');
	},
	"paypalLink" : function(oC,arg1) {
		window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TNTLB3ZN7BVUQ', '_blank');
	},
	"exportData" : function(oC,arg1) {
		functionData.rejectedImport();
		if(confirm("Once you accept save data will be copied to your clipboard.")) {
			var tempElem = document.getElementById("clipbordElement");
			tempElem.style.display = '';
			tempElem.value = saveDataToCode();
			tempElem.focus();
			tempElem.select();
			document.execCommand('copy');
			tempElem.style.display = 'none';
		}
	},
	"importData" : function(oC,arg1) {
		var tempElem = document.getElementById("clipbordElement");
		tempElem.style.display = '';
		tempElem.value='';
		alert("Copy your data into text-box below game window and press accept after that.");
		document.getElementById("clipboardAccept").style.display = '';
		document.getElementById("clipboardCancel").style.display = '';
	},
	"confirmedImport" : function(oC,arg1) {
		var tempElem = document.getElementById("clipbordElement");
		loadData(tempElem.value);
		tempElem.style.display = 'none';
		document.getElementById("clipboardAccept").style.display = 'none';
		document.getElementById("clipboardCancel").style.display = 'none';
	},
	"rejectedImport" : function(oC,arg1) {
		document.getElementById("clipbordElement").style.display = 'none';
		document.getElementById("clipboardAccept").style.display = 'none';
		document.getElementById("clipboardCancel").style.display = 'none';
	},
}
