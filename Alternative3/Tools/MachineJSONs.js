var simplifiedMachineData = {};
var baseCircle = {
	elements: ["Stamina", "Currency", "Mana", "Resolve", "Body", "Mind", "Soul"],
	machines:
	{
		'Stamina':
		{
			baseStats: [-400, -300, "Stamina"],
			recipes:
			{
				"Rest":
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["Stamina", 0.01, 1000],
					],
					lock: [],
					alwayson: true,
				},
			}
		},
		'Mana':
		{
			baseStats: [400, -300, "Mana"],
			recipes:
			{
				"Recover":
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["Mana", 0.001, 1000],
					],
					lock: ["Home", 0.5],
					alwayson: true,
				},
			}
		},
		'Currency':
		{
			baseStats: [-400, 0, "Currency"],
			recipes:
			{}
		},
		'Resolve':
		{
			baseStats: [0, -400, "Resolve"],
			recipes:
			{}
		},
		'Body':
		{
			baseStats: [-400, -500, "Body"],
			recipes:
			{
				"Train Body":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Resolve", 0.001, 0.1],
					],
					out: [
						["Body", 0.01, 1e4]
					],
					lock: ["Resolve", 0.1],
				},
			}
		},
		'Mind':
		{
			baseStats: [0, -500, "Mind"],
			recipes:
			{
				"Train Mind":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Resolve", 0.001, 0.1],
					],
					out: [
						["Mind", 0.01, 1e4]
					],
					lock: ["Resolve", 0.1],
				},
			}
		},
		'Soul':
		{
			baseStats: [400, -500, "Soul"],
			recipes:
			{
				"Train Soul":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Resolve", 0.001, 0.1],
					],
					out: [
						["Soul", 0.01, 1e4]
					],
					lock: ["Resolve", 0.1],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	decay: function ()
	{	
		var scaledMax = 1e4;
		if(data.oElements.Body.amount > scaledMax) data.oElements.Body.amount = scaledMax;
		if(data.oElements.Mind.amount > scaledMax) data.oElements.Mind.amount = scaledMax;
		if(data.oElements.Soul.amount > scaledMax) data.oElements.Soul.amount = scaledMax;
		machineData["Body"].recipes[0].efficiency = 1-data.oElements.Body.amount/scaledMax;
		machineData["Mind"].recipes[0].efficiency = 1-data.oElements.Mind.amount/scaledMax;
		machineData["Soul"].recipes[0].efficiency = 1-data.oElements.Soul.amount/scaledMax;
	}
};

var materialCircle = {
	elements: ["Earth", "Water", "Air", "Fire", "Mud", "Magma", "Ice", "Steam", "Sand", "Void", "Impure Mud", "Clay", "Brick", "Wood", "Ash", "Muddy Water", "Wet Sand"],
	machines:
	{
		'Air':
		{
			baseStats: [150, 0, "Air"],
			recipes:
			{
				"Conjure":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Mana", 0.001, 1],
					],
					out: [
						["Air", 0.001, 1e3]
					],
					lock: ["Mana", 1],
				},
				"Transmute":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Mana", 0.001, 0.1],
						["Earth", 0.01, 0.2],
						["Air", 0.01, 0.1],
					],
					out: [
						["Air", 0.02, 20]
					],
					lock: ["Air", 1],
				},}
		},
		'Earth':
		{
			baseStats: [50, 0, "Earth"],
			recipes:
			{
				"Conjure":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Mana", 0.001, 1],
					],
					out: [
						["Earth", 0.001, 1e3]
					],
					lock: ["Mana", 2],
				},
				"Transmute":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Mana", 0.002, 0.1],
						["Water", 0.02, 0.2],
						["Earth", 0.01, 0.1],
					],
					out: [
						["Earth", 0.03, 20]
					],
					lock: ["Earth", 1],
				},
			}
		},
		'Water':
		{
			baseStats: [-50, 0, "Water"],
			recipes:
			{
				"Conjure":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Mana", 0.001, 1],
					],
					out: [
						["Water", 0.001, 1e3]
					],
					lock: ["Mana", 3],
				},
				"Transmute":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Mana", 0.003, 0.1],
						["Fire", 0.03, 0.2],
						["Water", 0.01, 0.1],
					],
					out: [
						["Water", 0.04, 20]
					],
					lock: ["Water", 1],
				},
			}
		},	
		'Fire':
		{
			baseStats: [-150, -0, "Fire"],
			recipes:
			{
				"Conjure":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Mana", 0.001, 1],
					],
					out: [
						["Fire", 0.001, 1e3]
					],
					lock: ["Mana", 4],
				},
			}
		},
		'Mud':
		{
			baseStats: [0, 85, "Mud"],
			recipes:
			{}
		},
		'Sand':
		{
			baseStats: [100, 85, "Sand"],
			recipes:
			{}
		},
		'Steam':
		{
			baseStats: [-100, 85, "Steam"],
			recipes:
			{}
		},
		'Magma':
		{
			baseStats: [-50, 170, "Magma"],
			recipes:
			{}
		},
		'Ice':
		{
			baseStats: [50, 170, "Ice"],
			recipes:
			{}
		},
		'Void':
		{
			baseStats: [0, 255, "Void"],
			recipes:
			{}
		},
		
		'Impure Mud':
		{
			baseStats: [-500, 0, "Impure Mud"],
			recipes:
			{}
		},
		'Wood':
		{
			baseStats: [-600, 0, "Wood"],
			recipes:
			{}
		},
		'Ash':
		{
			baseStats: [-600, 100, "Ash"],
			recipes:
			{}
		},
		'Clay':
		{
			baseStats: [-700, 0, "Clay"],
			recipes:
			{}
		},
		'Brick':
		{
			baseStats: [-700, 100, "Brick"],
			recipes:
			{}
		},
		'Muddy Water':
		{
			baseStats: [-800, 0, "Muddy Water"],
			recipes:
			{}
		},
		'Wet Sand':
		{
			baseStats: [-900, 0, "Wet Sand"],
			recipes:
			{}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
};

var basicWorkplaces = {
	elements: [],
	machines:
	{
		'Mundane Work':
		{
			baseStats: [-400, -100],
			recipes:
			{
				"Work":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Stamina", 0.1, 20]
					],
					out: [
						["Currency", 0.001, 20]
					],
					lock: ["Stamina", 10],
				},
				"Influential Work":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Influence", 0, 100],
						["Stamina", 0.1, 20]
					],
					out: [
						["Currency", 0.002, 20],
						["Repute", 0.001, 100]
					],
					lock: ["Influence", 10],
				},
			}
		},
		'River - Mud Spot':
		{
			baseStats: [-500, -100],
			recipes:
			{
				'Gather Mud':
				{
					baseStats: [1, 1, true, false],
					in: [
						["Stamina", 0.1, 20],
					],
					out: [
						["Impure Mud", 0.1, 200],
					],
					lock: ["Home Progress", 0.1, "Currency", 0.1],
				},
				'Pour Mud':
				{
					baseStats: [1, 1, true, true],
					in: [
						["Earth", 1e4, 1e4],
					],
					out: [
						["Mud", 1, 1e3],
					],
					lock: ["Earth", 3e4],
				},
			}
		},
		'Forest - Wood Spot':
		{
			baseStats: [-600, -100],
			recipes:
			{
				'Gather Wood':
				{
					baseStats: [1, 1, true, false],
					in: [
						["Stamina", 0.1, 20],
					],
					out: [
						["Wood", 0.1, 1000],
					],
					lock: ["Home", 0.01],
				},
				'Collect Wood':
				{
					baseStats: [1, 1, true, true],
					in: [
						["Stamina", 0.1, 20],
						["Earth", 0.1, 3],
					],
					out: [
						["Wood", 0.4, 1000],
					],
					lock: ["Wood", 0.01, "Earth", 5],
				},
			}
		},
		'River - Clay Spot':
		{
			baseStats: [-700, -100],
			recipes:
			{
				'Gather Clay':
				{
					baseStats: [1, 1, true, false],
					in: [
						["Stamina", 0.1, 20],
					],
					out: [
						["Clay", 0.02, 50],
					],
					lock: ["Wood", 5],
				},
			}
		},
		'River - Water Spot':
		{
			baseStats: [-800, -100],
			recipes:
			{
				'Gather Water':
				{
					baseStats: [1, 1, true, false],
					in: [
						["Stamina", 0.1, 20],
					],
					out: [
						["Muddy Water", 0.01, 200],
					],
					lock: ["Home", 0.01, "Brick", 1],
				},
				'Collect Water':
				{
					baseStats: [1, 1, true, true],
					in: [
						["Stamina", 0.1, 20],
						["Water", 0.1, 3],
					],
					out: [
						["Muddy Water", 0.4, 200],
					],
					lock: ["Muddy Water", 0.01, "Water", 5],
				},
			}
		},
		'River - Sand Spot':
		{
			baseStats: [-900, -100],
			recipes:
			{
				'Gather Sand':
				{
					baseStats: [1, 1, true, false],
					in: [
						["Stamina", 0.1, 20],
					],
					out: [
						["Wet Sand", 0.02, 50],
					],
					lock: ["Knowledge", 5],
				},
				'Sweep Sand':
				{
					baseStats: [1, 1, true, true],
					in: [
						["Air", 1e4, 1e4],
					],
					out: [
						["Sand", 1, 1e3],
					],
					lock: ["Air", 3e4],
				},
			}
		},
		'Hotspring - Steam Spot':
		{
			baseStats: [-1000, -100],
			recipes:
			{
				'Siphon Steam':
				{
					baseStats: [1, 1, true, false],
					in: [
					],
					out: [
						["Steam", 0.002, 1e2],
					],
					lock: ["Knowledge", 50],
					upgrade: ["Funnel Steam", "FKnowledge", 50],
					alwayson: true,
				},
				'Funnel Steam':
				{
					baseStats: [1, 1, false, false],
					in: [
					],
					out: [
						["Steam", 0.004, 1e2],
					],
					alwayson: true,
				},
				'Charge Steam':
				{
					baseStats: [1, 1, true, true],
					in: [
						["Water", 1e4, 1e4],
					],
					out: [
						["Steam", 1, 1e3],
					],
					lock: ["Water", 3e4],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
};

var basicHouses = {
	elements: ["Home", "Home Progress","PlaceOfPower","TerraProgress"],
	machines:
	{
		'Construct Home':
		{
			baseStats: [-100, -200, "Home Progress"],
			recipes:
			{
				"Find Suitable Plot":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Stamina", 0.3, 10]
					],
					out: [
						["Home Progress", 0.01, 1]
					],
					lock: ["Stamina", 2],
					upgrade: ["Procure Permit", "Home Progress", 1],
				},
				"Procure Permit":
				{
					baseStats: [1, 1, false, false],
					in: [
						["Currency", 0.01, 0.1]
					],
					out: [
						["Home Progress", 0.05, 2]
					],
					upgrade: ["Dig up Mud Hut", "Impure Mud", 5, "Home Progress", 2],
				},
				"Dig up Mud Hut":
				{
					baseStats: [1, 1, false, true],
					in: [
						["Impure Mud", 1, 5]
					],
					out: [
						["Home", 0.01, 1]
					],
					upgrade: ["Lay out wooden floor", "Wood", 10, "Home", 0.5],
				},
				"Lay out wooden floor":
				{
					baseStats: [1, 1, false, false],
					in: [
						["Wood", 1, 5]
					],
					out: [
						["Home", 0.02, 3],
						["Home Progress", 0.03, 3]
					],
					upgrade: ["Lay brick walls", "Home Progress", 3],
				},
				"Lay brick walls":
				{
					baseStats: [1, 1, false, false],
					in: [
						["Brick", 1, 2]
					],
					out: [
						["Home", 0.05, 3],
					],
					//upgrade: ["knowledgeProduction3", "Home Progress", 3],
				}
			}
		},
		'Home':
		{
			baseStats: [-100, -300, "Home"],
			recipes:
			{
				"Restless Sleep":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Home", 1, 0.1]
					],
					out: [
						["Home", 1, 1e3],
						["Stamina", 1, -1000]
					],
					lock: ["Home", 0.001],
					upgrade : ["Refreshing Sleep", "Home", 2, "Earth", 18, "Water", 18, "Air", 18, "Fire", 18],
				},
				"Refreshing Sleep":
				{
					baseStats: [1, 1, false, true],
					in: [
						["Home", 1, 0.1]
					],
					out: [
						["Home", 1, 1e3],
						["Stamina", 1.5, -1000],
						["Mana", 0.15, -1000],
						["Resolve", 0.05, -300]
					],
				},
			}
		},
		'Transform Ground':
		{
			baseStats: [100,-200,"TerraProgress"],
			recipes:
			{
				"Expand land property":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Currency", 0.1, 5],
					],
					out: [
						["TerraProgress", 0.01, 1],
					],
					lock: ["Mind", 1],
					upgrade:["Terraform land", "TerraProgress", 1]
				},
				"Terraform land":
				{
					baseStats: [1, 1, false, true],
					in: [
						["Ritual", 1, 5],
					],
					out: [
						["TerraProgress", 0.001, 1],
						["PlaceOfPower", 0.001, 1],
					],
				},
			}
		},
		'Place of Power':
		{
			baseStats: [100,-300, "PlaceOfPower"],
			recipes:
			{
				"Absorb":
				{
					baseStats: [1, 1, true, true],
					in: [
						["PlaceOfPower", 1, 0.01],
					],
					out: [
						["PlaceOfPower", 1, 10],
						["Mana Charge", 1, 1e5],
					],
					lock: ["PlaceOfPower", 0.001],
				},
			}
		},
	
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
}

var constructedWorkplaces = {
	elements: ["Campfire", "Boiling Water"],
	machines:
	{
		'Campfire':
		{
			baseStats: [-600, 200, "Campfire"],
			recipes:
			{
				"Ignite":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Wood", 10, 20]
					],
					out: [
						["Campfire", 1, 1]
					],
					lock: ["Fire", 2, "Wood", 1, "Impure Mud", 4],
				},
				"Burn":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Campfire", 1, 0.5],
						["Wood", 1, 5]
					],
					out: [
						["Campfire", 1.1, 100],
						["Fire", 1, 2000]
					],
					lock: ["Campfire", 0.001],
				},
				"Extinguish":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Campfire", 100, 100]
					],
					out: [
						["Ash", 100, -1000]
					],
					lock: ["Campfire", 100],
				}
			}
		},
		'Kiln':
		{
			baseStats: [-700, 200],
			recipes:
			{
				"Fire Brick":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Clay", 1, 1],
						["Fire", 5, 10]
					],
					out: [
						["Brick", 1, 10]
					],
					lock: ["Clay", 5, "Fire", 10],
				},
			}
		},
		'Pot':
		{
			baseStats: [-800, 200, "Boiling Water"],
			recipes:
			{
				"Boil Water":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Muddy Water", 0.1, 1],
						["Fire", 0.1, 20]
					],
					out: [
						["Boiling Water", 0.05, 10]
					],
					lock: ["Muddy Water", 10],
				},
				"Prepare relaxing powder":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Boiling Water", 0.05, 1],
						["Fire", 0.05, 30]
					],
					out: [
						["Mana", 0.10, 50]
					],
					lock: ["Boiling Water", 1],
				},
				"Prepare infusing mixture":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Boiling Water", 0.05, 0.5],
						["Ash", 0.2, 50]
					],
					out: [
						["Mana", 0.20, 50],
						["Currency", 0.01, -6]
					],
					lock: ["Ash", 1, "Boiling Water", 1],
				},
			}
		},
		'Purifier':
		{
			baseStats: [-500, 200],
			recipes:
			{
				"Purify Mud":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Impure Mud", 100, 1],
						["Mana", 10, 20],
					],
					out: [
						["Mud", 1, 1e2],
					],
					lock: ["Knowledge", 1],
				},
				"Purify Sand":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Wet Sand", 1, 1],
						["Mana", 100, 20],
					],
					out: [
						["Sand", 1, 1e2],
					],
					lock: ["Wet Sand", 1],
				},
			}
		},
		'Arcane Station':
		{
			baseStats: [-500, 300],
			recipes:
			{
				'Discharge Stone':
				{
					baseStats: [1, 1, true, false],
					in: [
						["Mana Crystal", 1, 1],
					],
					out: [
						["Empty Crystal", 1, 5],
						["Mana Charge", 100, 1e5],
					],
					lock: ["Mana Crystal", 1],
				},
				'Create Rice Cooker':
				{
					baseStats: [1, 1, true, false],
					in: [
						["Empty Crystal", 1, 1],
						["Steam", 5, 80],
						["Wood", 1, 5],
					],
					out: [
						["Rice Cooker", 1, 10],
					],
					lock: ["Empty Crystal", 1, "Steam", 1],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
};

var ritualCircle = {
	elements: ["Cycle", "Ritual","RitualA","RitualB","RitualEarth","RitualWater","RitualAir","RitualFire","RitualMud","RitualSand","RitualSteam","RitualMagma","RitualIce","RitualVoid"],
	machines:
	{
		'Cycle':
		{
			baseStats: [600,175],
			recipes:
			{
				"Continue Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Cycle",1,1]
					],
					out: [],
					lock: ["Cycle", 1],
				},
			}
		},
		'Ritual':
		{
			baseStats: [600,-50, "Ritual"],
			recipes:
			{
				"Ritual Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
					],
					out: [
						["Cycle",0.003,1]
					],
					lock: ["Soul", 1],
					alwayson: true,
				},
				"Common Ritual":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Soul", 0, 200],
					],
					out: [
						["Ritual", 1, -1],
					],
					lock: ["Cycle", 0.1],
					upgrade: ["Advanced Ritual", "Ritual", 100, "Mana Charge", 100],
				},
				"Advanced Ritual":
				{
					baseStats: [1, 1, false, false],
					in: [
						["Soul", 0, 400],
					],
					out: [
						["Ritual", 1, -1],
						["RitualA", 1, -1],
					],
					upgrade: ["Boundary Ritual", "FKnowledge", 1],
				},
				"Boundary Ritual":
				{
					baseStats: [1, 1, false, false],
					in: [
						["Soul", 0, 600],
					],
					out: [
						["Ritual", 1, -1],
						["RitualA", 1, -1],
						["RitualB", 1, -1],
					],
				},
				"Ritual of Gate":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Ritual", 0, 200],
					],
					out: [
						["Shattered Glass", 0.001, 200],
					],
					lock: ["Ritual", 200],
					alwayson: true,
				},
			}
		},
		'RitualA':
		{
			baseStats: [600,-150, "RitualA"],
			recipes:
			{
				"Ritual of Knowledge":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualA", 0, 10],
					],
					out: [
						["Revelation", 1, -1],
						["Madness1", 1, 1],
					],
					lock: ["RitualA", 10],
					alwayson: true,
				},
			}
		},
		'RitualB':
		{
			baseStats: [600,-250, "RitualB"],
			recipes:
			{
				"Ritual of Blood":
				{
					baseStats: [1, 1, true, true],
					in: [
						["RitualB", 0, 200],
						["Soul", 1, 1],
					],
					out: [
						["Body", 1, 5e3],
					],
					lock: ["RitualB", 10],
					alwayson: true,
				}
			}
		},
		'RitualEarth':
		{
			baseStats: [450,350, "RitualEarth"],
			recipes:
			{
				"Ritual":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Ritual", 0, 1],
						["RitualEarth", 0, 1],
						["Earth", 0.03, 10],
					],
					out: [
						["Ritual", 0.01, 1e5],
						["Cycle", 0, 0.8],
					],
					lock: ["Cycle", 0.1],
					alwayson : true
				},
				"Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualEarth", 1, 1],
						["Cycle", 0.15, 1]
					],
					out: [
						["RitualWater", 1, 1],
						["RitualAir", 1, 1],
						["RitualFire", 1, 1],
					],
					lock: ["Cycle", 0.1],
					alwayson : true
				},
				"Spark":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Ritual", 0, 1],
					],
					out: [
						["RitualEarth", 1, 1],
						["RitualWater", 0, 1],
						["RitualAir", 0, 1],
						["RitualFire", 0, 1],
					],
					lock: ["Cycle", 0.1],
					alwayson: true,
				},
			}
		},
		'RitualWater':
		{
			baseStats: [750,350, "RitualWater"],
			recipes:
			{
				"Ritual":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Ritual", 0, 1],
						["RitualWater", 0, 1],
						["Water", 0.03, 10],
					],
					out: [
						["Ritual", 0.01, 1e5],
						["Cycle", 0, 0.8],
					],
					lock: ["Cycle", 0.1],
					alwayson : true
				},
				"Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualWater", 1, 1],
						["Cycle", 0.15, 1]
					],
					out: [
						["RitualEarth", 1, 1],
						["RitualAir", 1, 1],
						["RitualFire", 1, 1],
					],
					lock: ["Cycle", 0.1],
					alwayson : true
				},
			}
		},
		'RitualAir':
		{
			baseStats: [400,100, "RitualAir"],
			recipes:
			{
				"Ritual":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Ritual", 0, 1],
						["RitualAir", 0, 1],
						["Air", 0.03, 10],
					],
					out: [
						["Ritual", 0.01, 1e5],
						["Cycle", 0, 0.8],
					],
					lock: ["Cycle", 0.1],
					alwayson : true
				},
				"Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualAir", 1, 1],
						["Cycle", 0.15, 1]
					],
					out: [
						["RitualEarth", 1, 1],
						["RitualWater", 1, 1],
						["RitualFire", 1, 1],
					],
					lock: ["Cycle", 0.1],
					alwayson : true
				},
			}
		},
		'RitualFire':
		{
			baseStats: [800,100, "RitualFire"],
			recipes:
			{
				"Ritual":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Ritual", 0, 1],
						["RitualFire", 0, 1],
						["Fire", 0.03, 10],
					],
					out: [
						["Ritual", 0.01, 1e5],
						["Cycle", 0, 0.8],
					],
					lock: ["Cycle", 0.1],
					alwayson : true
				},
				"Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualFire", 1, 1],
						["Cycle", 0.15, 1]
					],
					out: [
						["RitualEarth", 1, 1],
						["RitualWater", 1, 1],
						["RitualAir", 1, 1],
					],
					lock: ["Cycle", 0.1],
					alwayson : true
				},
			}
		},
		'RitualMud':
		{
			baseStats: [750,450, "RitualMud"],
			recipes:
			{
				"Ritual":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualA", 0, 1],
						["RitualMud", 0, 1],
						["Mud", 0.002, 10],
					],
					out: [
						["RitualA", 0.001, 1e5],
						["Cycle", 0, 0.8]
					],
					lock: ["Mana Charge", 1],
					alwayson: true,
				},
				"Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualMud", 1, 1],
						["Cycle", 0, 1]
					],
					out: [
						["RitualSand", 1, 1],
						["RitualSteam", 1, 1],
					],
					lock: ["Mana Charge", 1],
					alwayson: true,
				},
				"Spark":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualA", 0, 1],
					],
					out: [
						["RitualMud", 1, 1],
						["RitualSand", 0, 1],
						["RitualSteam", 0, 1],
					],
					lock: ["Mana Charge", 1],
					alwayson: true,
				},
			}
		},
		'RitualSand':
		{
			baseStats: [350,350, "RitualSand"],
			recipes:
			{
				"Ritual":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualA", 0, 1],
						["RitualSand", 0, 1],
						["Sand", 0.002, 10],
					],
					out: [
						["RitualA", 0.001, 1e5],
						["Cycle", 0, 0.8]
					],
					lock: ["Mana Charge", 1],
					alwayson: true,
				},
				"Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualSand", 1, 1],
						["Cycle", 0, 1]
					],
					out: [
						["RitualMud", 1, 1],
						["RitualSteam", 1, 1],
					],
					lock: ["Mana Charge", 1],
					alwayson: true,
				},
			}
		},
		'RitualSteam':
		{
			baseStats: [900,100, "RitualSteam"],
			recipes:
			{
				"Ritual":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualA", 0, 1],
						["RitualSteam", 0, 1],
						["Steam", 0.002, 10],
					],
					out: [
						["RitualA", 0.001, 1e5],
						["Cycle", 0, 0.8]
					],
					lock: ["Mana Charge", 1],
					alwayson: true,
				},
				"Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualSteam", 1, 1],
						["Cycle", 0, 1]
					],
					out: [
						["RitualSand", 1, 1],
						["RitualMud", 1, 1],
					],
					lock: ["Mana Charge", 1],
					alwayson: true,
				},
			}
		},
		'RitualMagma':
		{
			baseStats: [450,450, "RitualMagma"],
			recipes:
			{
				"Ritual":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualB", 0, 1],
						["RitualMagma", 0, 1],
						["Magma", 0.03, 10],
					],
					out: [
						["RitualB", 0.01, 1e5],
						["Cycle", 0, 0.8]
					],
					lock: ["FKnowledge", 1],
					alwayson: true,
				},
				"Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualMagma", 1, 1],
						["Cycle", 0, 1]
					],
					out: [
						["RitualIce", 1, 1],
						["RitualVoid", 1, 1],
					],
					lock: ["FKnowledge", 1],
					alwayson: true,
				},
				"Spark":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualB", 0, 1],
					],
					out: [
						["RitualMagma", 1, 1],
						["RitualIce", 0, 1],
						["RitualVoid", 0, 1],
					],
					lock: ["FKnowledge", 1],
					alwayson: true,
				},
			}
		},
		'RitualIce':
		{
			baseStats: [850,350, "RitualIce"],
			recipes:
			{
				"Ritual":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualB", 0, 1],
						["RitualIce", 0, 1],
						["Ice", 0.03, 10],
					],
					out: [
						["RitualB", 0.01, 1e5],
						["Cycle", 0, 0.8]
					],
					lock: ["FKnowledge", 1],
					alwayson: true,
				},
				"Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualIce", 1, 1],
						["Cycle", 0, 1]
					],
					out: [
						["RitualMagma", 1, 1],
						["RitualVoid", 1, 1],
					],
					lock: ["FKnowledge", 1],
					alwayson: true,
				},
			}
		},
		'RitualVoid':
		{
			baseStats: [300,100, "RitualVoid"],
			recipes:
			{
				"Ritual":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualB", 0, 1],
						["RitualVoid", 0, 1],
						["Void", 0.03, 10],
					],
					out: [
						["RitualB", 0.01, 1e5],
						["Cycle", 0, 0.8]
					],
					lock: ["FKnowledge", 1],
					alwayson: true,
				},
				"Cycle":
				{
					baseStats: [1, 1, true, false],
					in: [
						["RitualVoid", 1, 1],
						["Cycle", 0, 1]
					],
					out: [
						["RitualIce", 1, 1],
						["RitualMagma", 1, 1],
					],
					lock: ["FKnowledge", 1],
					alwayson: true,
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	cooldown : 0,
	rituals: ['RitualEarth','RitualWater','RitualAir','RitualFire','RitualVoid','RitualMud','RitualSteam','RitualSand','RitualIce','RitualMagma'],
	postprocess: function ()
	{
		// for(var j=0;j<this.rituals.length;j++)
			// machineData[this.rituals[j]].region.customDraw = machines.displayRegionStumpedDraw;
	},
	decay: function ()
	{
		if(ritualCircle.cooldown-->0) return;
		ritualCircle.cooldown = 60;
		
		for(var j=0;j<this.rituals.length;j++)
		{
			var temp = machineData[this.rituals[j]].recipes[1].outputs;
			for (var i = 0; i < temp.length; i++)
			{
				temp[i].ratio = 0;
			}
			var r = Math.trunc(Math.random() * temp.length);
			temp[r].ratio = 1;
		}
	},
};

var commerceCircle = {
	elements: ["Mana Crystal","Empty Crystal","Rice Cooker"],
	machines:
	{
		'Magic Crystal Shop':
		{
			baseStats: [-300, 200,["Mana Crystal","Empty Crystal"]],
			recipes:
			{
				'Buy Stone':
				{
					baseStats: [1, 1, true, false],
					in: [
						["Currency", 1, 5],
					],
					out: [
						["Mana Crystal", 1, 5],
						["Empty Crystal", 0, 5],
					],
					lock: ["Knowledge", 100],
				},
				'Sell Charged Stone':
				{
					baseStats: [1, 1, true, false],
					in: [
						["Mana Crystal", 1, 5],
					],
					out: [
						["Currency", 0.9, 50],
					],
					lock: ["Mana Charge", 0.001],
				},
				'Sell Discharged Stone':
				{
					baseStats: [1, 1, true, false],
					in: [
						["Empty Crystal", 1, 5],
					],
					out: [
						["Currency", 0.4, 50],
					],
					lock: ["Mana Charge", 0.001],
				},
			}
		},
		'Elemental Apparatus Shop':
		{
			baseStats: [-300, 300,["Rice Cooker"]],
			recipes:
			{
				'Sell Rice Cooker':
				{
					baseStats: [1, 1, true, false],
					in: [
						["Rice Cooker", 1, 1],
					],
					out: [
						["Currency", 0.95, 200],
					],
					lock: ["Rice Cooker", 1],
				},
			}
		},
		
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	postprocess: function ()
	{
		machineData['Magic Crystal Shop'].recipes[1].activated = true;
		machineData['Magic Crystal Shop'].recipes[2].activated = true;
	},
}

var researchCircle = {
	elements: ["Knowledge","FKnowledge","Power", "Mana Charge"],
	machines:
	{
		'Vigor':
		{
			baseStats: [-400,-400],
			recipes:
			{
				"Invigorate":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Body", 1, 1],
					],
					out: [
						["Body", 1, 1e4],
						["Stamina", 0.005, 1e3],
					],
					lock: ["Body", 1],
					alwayson: true,
				},
			}
		},
		'Research':
		{
			baseStats: [-100,-600, "Knowledge"],
			recipes:
			{
				"Research":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Mind", 1, 1],
					],
					out: [
						["Mind", 1, 1e4],
						["Knowledge", 0.001, 1],
					],
					lock: ["Mind", 1],
				},
			}
		},
		'Forbidden Research':
		{
			baseStats: [100,-600, "FKnowledge"],
			recipes:
			{
				"Forbidden Research":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Revelation", 0, 0.001],
						["Mind", 100, 1],
					],
					out: [
						["Mind", 100, 1e4],
						["FKnowledge", 0.001, 1],
					],
					lock: ["Revelation", 0.001],
				},
			}
		},
		'Soul Power':
		{
			baseStats: [400,-400, "Power"],
			recipes:
			{
				"Focus":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Soul", 10, 1],
					],
					out: [
						["Soul", 10, 1e4],
						["Power", 0.001, 2e3],
					],
					lock: ["Soul", 1],
				},
			}
		},
		
		'Mana Charge Storage':
		{
			baseStats: [400, -200, "Mana Charge"],
			recipes:
			{
				'Absorb Charge':
				{
					baseStats: [1, 1, true, true],
					in: [
						["Mana Charge", 1, 0.1],
					],
					out: [
						["Mana", 1, 200],
					],
					lock: ["Mana Charge", 0.001],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	cooldown : 0,
	decay: function ()
	{
		machineData['Research'].recipes[0].outputs[1].max = 1 + 4 * data.oElements.Knowledge.amount;
		machineData['Forbidden Research'].recipes[0].outputs[1].max = 1 + 4 * data.oElements.FKnowledge.amount;
	},
}

var madnessCircle = {
	stepsOfMadness: 5,
	elements: ["Revelation", "Corruption", "Doom", "Madness1", "Madness2", "Madness3", "Madness4", "Madness5"],
	machines:
	{
		'Revelation':
		{
			baseStats: [0, -700, "Revelation"],
			recipes:
			{
				
			}
		},
		'Corruption':
		{
			baseStats: [0, 500, "Corruption"],
			recipes:
			{
				"Corruption Burns":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Corruption", 1, 100],
						["Mana", 0, -100],
					],
					out: [
						["Corruption", 1, -1e4],
						["Mana", -0.01, 1e3],
					],
					lock: ["Corruption",1e99],
					alwayson: true,
				},
				"Cleanse Corruption":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Power", 2, 100],
						["Corruption", 3, 0.001],
					],
					out: [
					],
					lock: ["Corruption",1000],
				},
			}
		},
		'Doom':
		{
			baseStats: [0, 600, "Doom"],
			recipes:
			{
				"Doom Breaks":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Doom", 1, 1],
						["Home", 0, 0.2],
					],
					out: [
						["Doom", 1, -1e4],
						["Home", -0.021, 1e3],
					],
					lock: ["Doom",1e99],
					alwayson: true,
				},
			}
		},
		'Madness: Step 1' : {
			baseStats: [-100, 300, "Madness1"],
			recipes:
			{
				"Madness Looms":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness1", 1, 0.001],
					],
					out: [
						["Madness1", 1.1, 2000],
					],
					lock: ["Madness1",1e99],
					alwayson: true,
				},
				"Madness Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness1", 1999, 2000],
					],
					out: [
						["Madness2", 1, 0.9],
					],
					lock: ["Madness1",1e99],
					alwayson: true,
				},
				"Madness Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness1", 99, 100],
						["Madness2", 0, 1],
					],
					out: [
						["Corruption", 1, 1e4],
					],
					lock: ["Madness1",1e99],
					alwayson: true,
				},
			}
		},
		'Madness: Step 2' : {
			baseStats: [-150, 400, "Madness2"],
			recipes:
			{
				"Madness Looms":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness2", 1, 0.001],
					],
					out: [
						["Madness2", 1.05, 2000],
					],
					lock: ["Madness2",1e99],
					alwayson: true,
				},
				"Madness Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness2", 1999, 2000],
					],
					out: [
						["Madness3", 1, 0.9],
					],
					lock: ["Madness2",1e99],
					alwayson: true,
				},
				"Madness Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness2", 99, 100],
						["Madness3", 0, 1],
					],
					out: [
						["Corruption", 3, 1e4],
					],
					lock: ["Madness2",1e99],
					alwayson: true,
				},
			}
		},
		'Madness: Step 3' : {
			baseStats: [-100, 500, "Madness3"],
			recipes:
			{
				"Madness Looms":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness3", 1, 0.001],
					],
					out: [
						["Madness3", 1.025, 2000],
					],
					lock: ["Madness3",1e99],
					alwayson: true,
				},
				"Madness Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness3", 1999, 2000],
					],
					out: [
						["Madness4", 1, 0.9],
					],
					lock: ["Madness3",1e99],
					alwayson: true,
				},
				"Madness Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness3", 99, 100],
						["Madness4", 0, 1],
					],
					out: [
						["Corruption", 8, 1e4],
					],
					lock: ["Madness3",1e99],
					alwayson: true,
				},
			}
		},
		'Madness: Step 4' : {
			baseStats: [-150, 600, "Madness4"],
			recipes:
			{
				"Madness Looms":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness4", 1, 0.001],
					],
					out: [
						["Madness4", 1.0125, 2000],
					],
					lock: ["Madness4",1e99],
					alwayson: true,
				},
				"Madness Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness4", 1999, 2000],
					],
					out: [
						["Madness5", 1, 0.9],
					],
					lock: ["Madness4",1e99],
					alwayson: true,
				},
				"Madness Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness4", 99, 100],
						["Madness5", 0, 1],
					],
					out: [
						["Corruption", 24, 1e4],
					],
					lock: ["Madness4",1e99],
					alwayson: true,
				},
			}
		},
		'Madness: Step 5' : {
			baseStats: [-100, 700, "Madness5"],
			recipes:
			{
				"Madness Looms":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness5", 1, 0.001],
					],
					out: [
						["Madness5", 1.0004, 100],
					],
					lock: ["Madness5",1e99],
					alwayson: true,
				},
				"Madness Enlightens":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Madness5", 99, 100],
					],
					out: [
						["Revelation", 1, -5],
						["Doom", 0.5, -5],
					],
					lock: ["Madness5",1e99],
					alwayson: true,
				},
			}
		},
	},
	preprocess: function ()
	{		
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	postprocess: function ()
	{
		for (var i=1;i<=this.stepsOfMadness;i++)
		{
			machineData["Madness: Step "+i].recipes[0].inputs[0].effectReference.maxR*=3;
		}
	},
	cooldown : 5,
	decay: function ()
	{	
		if(this.cooldown-->0) return;
		this.cooldown = 60;
		for (var i=1;i<=this.stepsOfMadness;i++)
		{
			var recs = machineData["Madness: Step "+i].recipes;
			if(!recs[0].unlocked)
			{
				if(data.oElements["Madness"+i].amount < 0.1) continue;
				for (var recIndex in recs)
				{
					recs[recIndex].region.paymentSuccess();
				}
			}
		}
		var rec = machineData['Corruption'].recipes[0];
		if(!rec.unlocked)
		{
			if(data.oElements["Corruption"].amount > 0.1)
				rec.region.paymentSuccess();
		}
		var rec = machineData['Doom'].recipes[0];
		if(!rec.unlocked)
		{
			if(data.oElements["Doom"].amount > 0.1)
				rec.region.paymentSuccess();
		}
	}
};

var spireCircle = {
	spireLevels: 5,
	elements: ["Spire Foundation","Shattered Glass","Portal Frame","Influence","Portal","PortalEarth","PortalAir","PortalWater","PortalFire","Spirits","Repute"],
	machines:
	{
		'Shattered Glass' : {
			baseStats: [0, 1000, "Shattered Glass"],
			recipes:
			{
				
			}
		},
		'Spire Foundation' : {
			baseStats: [0, 1200, "Spire Foundation"],
			recipes:
			{
				"Lay down foundation":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Shattered Glass", 1, 1],
					],
					out: [
						["Spire Foundation", 0.1, 100],
					],
					lock: ["FKnowledge",0.01],
				},
			}
		},
		'Portal Frame' : {
			baseStats: [200, 1200, "Portal Frame"],
			recipes:
			{
				"Build Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Spire Foundation", 0, 10],
						["Shattered Glass", 0.1, 1],
						["Brick", 3, 8],
						["Wood", 35, 50],
						["Body", 1, 1],
					],
					out: [
						["Portal Frame", 0.001, 1],
					],
					lock: ["Spire Foundation",0.01],
				},
			}
		},
		'Influence' : {
			baseStats: [100, 1000, "Influence"],
			recipes:
			{
				"Gather Influence":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Portal", 0, 1],
						["Power", 1, 10],
					],
					out: [
						["Influence", 0.01, 1e4],
					],
					lock: ["Portal Frame",0.001],
				},
			}
		},
		'Portal' : {
			baseStats: [200, 1300, "Portal"],
			recipes:
			{
			}
		},
		'PortalEarth' : {
			baseStats: [50, 1400, "PortalEarth"],
			recipes:
			{
				"Open Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal Frame", 0, 1],
						["Power", 50, 80],
					],
					out: [
						["Portal", 1, 1],
						["PortalEarth", 1, 1],
					],
					lock: ["Portal Frame",0.001],
				},
				"Close Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal", 1, 1],
						["PortalEarth", 1, 1],
						["Earth", 2e4, 2e4],
					],
					out: [
					],
					lock: ["Earth",1e4],
				},
				"Absorb Element":
				{
					baseStats: [1, 1, true, true],
					in: [
						["PortalEarth", 1, 0.1],
					],
					out: [
						["PortalEarth", 1, -5],
						["Earth", 2e3, 4e4],
					],
					lock: ["Influence",1],
					alwayson: true
				},
			}
		},
		'PortalWater' : {
			baseStats: [-50, 1400, "PortalWater"],
			recipes:
			{
				"Open Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal Frame", 0, 1],
						["Power", 50, 80],
					],
					out: [
						["Portal", 1, 1],
						["PortalWater", 1, 1],
					],
					lock: ["Portal Frame",0.001],
				},
				"Close Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal", 1, 1],
						["PortalWater", 1, 1],
						["Water", 2e4, 2e4],
					],
					out: [
					],
					lock: ["Water",1e4],
				},
				"Absorb Element":
				{
					baseStats: [1, 1, true, true],
					in: [
						["PortalWater", 1, 0.1],
					],
					out: [
						["PortalWater", 1, -5],
						["Water", 2e3, 4e4],
					],
					lock: ["Influence",1],
					alwayson: true
				},
			}
		},
		'PortalAir' : {
			baseStats: [150, 1400, "PortalAir"],
			recipes:
			{
				"Open Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal Frame", 0, 1],
						["Power", 50, 80],
					],
					out: [
						["Portal", 1, 1],
						["PortalAir", 1, 1],
					],
					lock: ["Portal Frame",0.001],
				},
				"Close Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal", 1, 1],
						["PortalAir", 1, 1],
						["Air", 2e4, 2e4],
					],
					out: [
					],
					lock: ["Air",1e4],
				},
				"Absorb Element":
				{
					baseStats: [1, 1, true, true],
					in: [
						["PortalAir", 1, 0.1],
					],
					out: [
						["PortalAir", 1, -5],
						["Air", 2e3, 4e4],
					],
					lock: ["Influence",1],
					alwayson: true
				},
			}
		},
		'PortalFire' : {
			baseStats: [-150, 1400, "PortalFire"],
			recipes:
			{
				"Open Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal Frame", 0, 1],
						["Power", 50, 80],
					],
					out: [
						["Portal", 1, 1],
						["PortalFire", 1, 1],
					],
					lock: ["Portal Frame",0.001],
				},
				"Close Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal", 1, 1],
						["PortalFire", 1, 1],
						["Fire", 2e4, 2e4],
					],
					out: [
					],
					lock: ["Fire",1e4],
				},
				"Absorb Element":
				{
					baseStats: [1, 1, true, true],
					in: [
						["PortalFire", 1, 0.1],
					],
					out: [
						["PortalFire", 1, -5],
						["Fire", 2e3, 4e4],
					],
					lock: ["Influence",1],
					alwayson: true
				},
			}
		},
		'Spirits' : {
			baseStats: [-100, 1000, "Spirits"],
			recipes:
			{
				"Bind Spirit":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Influence", 10, 20],
					],
					out: [
						["Spirits", 1, 1e3],
					],
					lock: ["Influence",1],
				},
				"Spiritual Influence":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spirits", 1, 1],
					],
					out: [
						["Spirits", 1, -1e4],
						["Influence", 0.1, 1e100],
					],
					lock: ["Spirits",1],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	postprocess: function ()
	{
		machineData.PortalEarth.recipes[1].activated = true;
		machineData.PortalWater.recipes[1].activated = true;
		machineData.PortalAir.recipes[1].activated = true;
		machineData.PortalFire.recipes[1].activated = true;
		
		machineData.PortalEarth.recipes[0].region.mouseHandler = this.exclusivePortalRecipeMouseHandler;
		machineData.PortalEarth.recipes[1].region.mouseHandler = this.exclusivePortalRecipeMouseHandler;
		machineData.PortalWater.recipes[0].region.mouseHandler = this.exclusivePortalRecipeMouseHandler;
		machineData.PortalWater.recipes[1].region.mouseHandler = this.exclusivePortalRecipeMouseHandler;
		machineData.PortalAir.recipes[0].region.mouseHandler = this.exclusivePortalRecipeMouseHandler;
		machineData.PortalAir.recipes[1].region.mouseHandler = this.exclusivePortalRecipeMouseHandler;
		machineData.PortalFire.recipes[0].region.mouseHandler = this.exclusivePortalRecipeMouseHandler;
		machineData.PortalFire.recipes[1].region.mouseHandler = this.exclusivePortalRecipeMouseHandler;
		
	},
	exclusivePortalRecipeMouseHandler: function (pane, x, y, type)
	{
		if (type == "mousemove")
		{
			if (x < optionData.iconSize + 1)
			{
				tooltipPane.showText("Enabling this recipe will disable all other portal recipes.");
			}
		}
		else if (type == "mouseup")
		{
			if (this.recipe.unlocked)
			{
				if (x < optionData.iconSize + 1)
				{
					var state = this.recipe.enabled;
					machineData.PortalEarth.recipes[0].enabled = false;
					machineData.PortalEarth.recipes[1].enabled = false;
					machineData.PortalWater.recipes[0].enabled = false;
					machineData.PortalWater.recipes[1].enabled = false;
					machineData.PortalAir.recipes[0].enabled = false;
					machineData.PortalAir.recipes[1].enabled = false;
					machineData.PortalFire.recipes[0].enabled = false;
					machineData.PortalFire.recipes[1].enabled = false;
					this.recipe.enabled = !state;
				}
				else if (x < optionData.iconSize * 2 + 2)
				{
					if (this.pane.boundaryPath)
					{
						regionData.hideRegion.action(this.pane);
					}
					else
					{
						regionData.showRegion.action(this.pane);
					}
				}
				else if (x < optionData.iconSize * 3 + 3)
				{
					if (this.recipe.upgradeTo)
					{
						panes.lastClickedPane = this;
						paymentPane.preparePayment(this.recipe.upgradeCosts, x, y, pane, this);
					}
				}
			}
			else
			{
				if (this.recipe.unlockCosts && this.recipe.unlockCosts.length > 0)
				{
					panes.lastClickedPane = this;
					paymentPane.preparePayment(this.recipe.unlockCosts, x, y, pane, this);
				}
				else
				{
					this.paymentSuccess();
				}
			}
		}
	},
	decay: function ()
	{
		var amount = 1+data.oElements.Spirits.amount;
		var input = machineData["Spirits"].recipes[0].inputs[0];
		input.ratio = 4 + amount * amount;
		input.min = -4 + 2*input.ratio;
	},
};


var preprocessed = false;
var postprocessed = false;
var colorDummy = ["#454545", "#454545", "#454545", "#454545"];

function addCircleElements(array) {
	for (var i = 0; i < array.length; i++)
	{
		initialData.elements.push(array[i]);
		if (!elementalColors[array[i]])
		{
			elementalColors[array[i]] = colorDummy;
		}
		if (!images["icon" + array[i]])
		{
			images["icon" + array[i]] = images.iconMissing;
		}
		elementalDisplayType[array[i]] = "exp";
	}
}
function preprocessAdditionalCircles() {
	if (preprocessed)
	{
		return;
	}
	reachCircle.preprocess();
	baseCircle.preprocess();
	materialCircle.preprocess();
	basicWorkplaces.preprocess();
	basicHouses.preprocess();
	constructedWorkplaces.preprocess();
	ritualCircle.preprocess();
	commerceCircle.preprocess();
	researchCircle.preprocess();
	madnessCircle.preprocess();
	spireCircle.preprocess();
	
	// var tempX =0;
	// for(var mach in simplifiedMachineData) {
	 // simplifiedMachineData[mach].baseStats[0] = ++tempX*100;
	 // simplifiedMachineData[mach].baseStats[1] = 0;
	// }
	preprocessed = true;
}
function postprocessAdditionalCircles() {
	if (postprocessed)
	{
		return;
	}
	reachCircle.postprocess();
	ritualCircle.postprocess();
	madnessCircle.postprocess();
	commerceCircle.postprocess();
	spireCircle.postprocess();
	postprocessed = true;
}
function decayAdditionalCircles() {
	baseCircle.decay();
	ritualCircle.decay();
	researchCircle.decay();
	madnessCircle.decay();
	spireCircle.decay();
}



var drain = 16.667;
var reachCircle = {
	elements: ["Game Ticks", "Game Hours", "Game Minutes", "Game Seconds", "Time", "NormalLimit", "TurboLimit"],
	machines:
	{
		machineTime:
		{
			baseStats: [0, -100, ["Game Ticks", "Time", "NormalLimit", "TurboLimit"]],
			recipes:
			{
				timeSlow1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Time", 500, 0.01],
					],
					out: [],
					lock: [],
				},
				timeFast1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Time", 1, 0.01],
					],
					out: [],
					lock: [],
				},
				"Processing Ticks":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Time", drain, 100]
					],
					out: [
						["Game Ticks", 1, 1e100]
					],
					lock: [],
					alwayson: true,
				},
				"Processing Seconds":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Game Ticks", 60, 60]
					],
					out: [
						["Game Seconds", 1, 1e100]
					],
					lock: [],
					alwayson: true,
				},
				"Processing Minutes":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Game Seconds", 60, 60]
					],
					out: [
						["Game Minutes", 1, 1e100]
					],
					lock: [],
					alwayson: true,
				},
				"Processing Hours":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Game Minutes", 60, 60]
					],
					out: [
						["Game Hours", 1, 1e100]
					],
					lock: [],
					alwayson: true,
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		elementalDisplayType["Time"] = "";
		elementalDisplayType["NormalLimit"] = "fixed";
		elementalDisplayType["TurboLimit"] = "fixed";
		elementalDisplayType["Game Ticks"] = "";
		elementalDisplayType["Game Seconds"] = "";
		elementalDisplayType["Game Minutes"] = "";
		elementalDisplayType["Game Hours"] = "";
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	postprocess: function ()
	{
		machineData.machineTime.region.customDraw = machines.displayRegionStumpedDraw;
		for(var i in machineData["machineTime"].recipes) {
			var dec1 = machineData["machineTime"].recipes[i];
			if (!dec1.unlocked)
			{
				dec1.region.paymentSuccess();
			}
			dec1.activated = true;
		}
		machineData["machineTime"].recipes[2].activated = false;
	}
};

var backupBetaMachineData = {
	"machineEarth":
	{
		baseStats: [100, 100, "Earth"],
		recipes:
		{
			earthRift2:
			{
				baseStats: [1, 1.4, true, false],
				in: [],
				out: [
					["Earth", 1, 12000],
				],
				lock: ["Earth", 0],
			},
			earthRift3:
			{
				baseStats: [1, 1.4, true, true],
				in: [
					["Earth", 1, 1]
				],
				out: [
					["Earth", 1, 12000 * 4],
				],
				lock: ["Earth", 0],
				upgrade: ["earthRift4", "PureEarth", 1],
			},
			earthRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Earth", 1, 1]
				],
				out: [
					["Earth", 1, 120000],
				],
			},
			earthCRift1:
			{
				baseStats: [1, 2, true, true],
				in: [
					["Fire", 1, 500],
				],
				out: [
					["Earth", 1, 52000],
				],
				lock: ["Earth", 0],
				upgrade: ["earthCRift2", "Fire", 100000],
			},
			earthCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Fire", 1, 500],
				],
				out: [
					["Earth", 1, 52e7],
				],
			},
		}
	},
	"machineWater":
	{
		baseStats: [-100, 100, "Water"],
		recipes:
		{
			waterRift2:
			{
				baseStats: [1, 1.4, true, false],
				in: [],
				out: [
					["Water", 1, 12000],
				],
				lock: ["Earth", 0],
			},
			waterRift3:
			{
				baseStats: [1, 1.4, true, true],
				in: [
					["Water", 1, 1]
				],
				out: [
					["Water", 1, 12000 * 4],
				],
				lock: ["Earth", 0],
				upgrade: ["waterRift4", "PureWater", 1],
			},
			waterRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Water", 1, 1]
				],
				out: [
					["Water", 1, 120000],
				],
			},
			waterCRift1:
			{
				baseStats: [1, 2, true, true],
				in: [
					["Earth", 1, 500],
				],
				out: [
					["Water", 1, 52000],
				],
				lock: ["Earth", 0],
				upgrade: ["waterCRift2", "Earth", 100000],
			},
			waterCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Earth", 1, 500],
				],
				out: [
					["Water", 1, 52e7],
				],
			},
		}
	},
	"machineAir":
	{
		baseStats: [-100, -100, "Air"],
		recipes:
		{
			airRift2:
			{
				baseStats: [1, 1.4, true, false],
				in: [],
				out: [
					["Air", 1, 12000],
				],
				lock: ["Earth", 0],
			},
			airRift3:
			{
				baseStats: [1, 1.4, true, true],
				in: [
					["Air", 1, 1]
				],
				out: [
					["Air", 1, 12000 * 4],
				],
				lock: ["Earth", 0],
				upgrade: ["airRift4", "PureAir", 1],
			},
			airRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Air", 1, 1]
				],
				out: [
					["Air", 1, 120000],
				],
			},
			airCRift1:
			{
				baseStats: [1, 2, true, true],
				in: [
					["Water", 1, 500],
				],
				out: [
					["Air", 1, 52000],
				],
				lock: ["Earth", 0],
				upgrade: ["airCRift2", "Water", 100000],
			},
			airCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Water", 1, 500],
				],
				out: [
					["Air", 1, 52e7],
				],
			},
		}
	},
	"machineFire":
	{
		baseStats: [100, -100, "Fire"],
		recipes:
		{
			fireRift2:
			{
				baseStats: [1, 1.4, true, false],
				in: [],
				out: [
					["Fire", 1, 12000],
				],
				lock: ["Earth", 0],
			},
			fireRift3:
			{
				baseStats: [1, 1.4, true, true],
				in: [
					["Fire", 1, 1]
				],
				out: [
					["Fire", 1, 12000 * 4],
				],
				lock: ["Earth", 0],
				upgrade: ["fireRift4", "PureFire", 1],
			},
			fireRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Fire", 1, 1]
				],
				out: [
					["Fire", 1, 120000],
				],
			},
			fireCRift1:
			{
				baseStats: [1, 2, true, true],
				in: [
					["Air", 1, 500],
				],
				out: [
					["Fire", 1, 52000],
				],
				lock: ["Earth", 0],
				upgrade: ["fireCRift2", "Air", 100000],
			},
			fireCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Air", 1, 500],
				],
				out: [
					["Fire", 1, 52e7],
				],
			},
		}
	},
	"golemInfuser":
	{
		baseStats: [-195, 195, ["GolemEarth", "GolemWater", "GolemAir", "GolemFire"]],
		recipes:
		{
			golemEarth3:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Earth", 8000, 9000],
				],
				out: [
					["GolemEarth", 5, 14],
				],
				lock: ["Earth", 0],
			},
			golemWater3:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Water", 8000, 9000],
				],
				out: [
					["GolemWater", 5, 14],
				],
				lock: ["Earth", 0],
			},
			golemAir3:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Air", 8000, 9000],
				],
				out: [
					["GolemAir", 5, 14],
				],
				lock: ["Earth", 0],
			},
			golemFire3:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Fire", 8000, 9000],
				],
				out: [
					["GolemFire", 5, 14],
				],
				lock: ["Earth", 0],
			},
		}
	},
	"golemMerger":
	{
		baseStats: [195, 195],
		recipes:
		{
			mergeMud3:
			{
				baseStats: [1, 4, true, false],
				in: [
					["GolemEarth", 1, 5],
					["GolemWater", 1, 5],
					["Earth", 7000, 40000],
					["Water", 7000, 40000],
				],
				out: [
					["Mud", 1, 102],
				],
				lock: ["Earth", 0],
			},
			mergeIce3:
			{
				baseStats: [1, 4, true, false],
				in: [
					["GolemAir", 1, 5],
					["GolemWater", 1, 5],
					["Air", 7000, 40000],
					["Water", 7000, 40000],
				],
				out: [
					["Ice", 1, 102],
				],
				lock: ["Earth", 0],
			},
			mergeSteam3:
			{
				baseStats: [1, 4, true, false],
				in: [
					["GolemFire", 1, 5],
					["GolemWater", 1, 5],
					["Fire", 7000, 40000],
					["Water", 7000, 40000],
				],
				out: [
					["Steam", 1, 102],
				],
				lock: ["Earth", 0],
			},
			mergeMagma3:
			{
				baseStats: [1, 4, true, false],
				in: [
					["GolemFire", 1, 5],
					["GolemEarth", 1, 5],
					["Fire", 7000, 40000],
					["Earth", 7000, 40000],
				],
				out: [
					["Magma", 1, 102],
				],
				lock: ["Earth", 0],
			},
			mergeSand1:
			{
				baseStats: [1, 0.006, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemAir", 1, 1],
				],
				out: [
					["Sand", 1, 0.1],
				],
				lock: ["Earth", 0],
			},
		}
	},
	"machineMud":
	{
		baseStats: [0, 275, "Mud"],
		recipes:
		{
			mudConversion2:
			{
				baseStats: [2, 1.44, true, true],
				in: [
					["Magma", 1, 1.8],
					["Earth", 0, 10000],
					["Water", 0, 10000],
					["Fire", 0, 10000],
				],
				out: [
					["Mud", 1, 208, 4, ["Glass", 0.8]],
				],
				lock: ["Earth", 0],
				upgrade: ["mudConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			mudConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Sand", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Mud", 1, 2560],
				],
			},
			mudRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Mud", 1, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineIce":
	{
		baseStats: [-275, 0, "Ice"],
		recipes:
		{
			iceConversion2:
			{
				baseStats: [3, 1, true, true],
				in: [
					["Mud", 1, 1.8],
					["Earth", 0, 10000],
					["Water", 0, 10000],
					["Air", 0, 10000],
				],
				out: [
					["Ice", 1, 208, 4, ["Glass", 0.8]],
				],
				lock: ["Earth", 0],
				upgrade: ["iceConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			iceConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Void", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Ice", 1, 2560],
				],
			},
			mudRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Ice", 1, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineSteam":
	{
		baseStats: [-195, -195, "Steam"],
		recipes:
		{
			steamConversion2:
			{
				baseStats: [2, 1, true, true],
				in: [
					["Ice", 1, 1.8],
					["Water", 0, 10000],
					["Air", 0, 10000],
					["Fire", 0, 10000],
				],
				out: [
					["Steam", 1, 208, 4, ["Glass", 0.8]],
				],
				lock: ["Earth", 0],
				upgrade: ["steamConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			steamConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Mud", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Steam", 1, 2560],
				],
			},
			mudRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Steam", 1, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineMagma":
	{
		baseStats: [275, 0, "Magma"],
		recipes:
		{
			magmaConversion2:
			{
				baseStats: [1, 1, true, true],
				in: [
					["Steam", 1, 1.8],
					["Earth", 0, 10000],
					["Water", 0, 10000],
					["Fire", 0, 10000],
				],
				out: [
					["Magma", 1, 208, 4, ["Glass", 0.8]],
				],
				lock: ["Earth", 0],
				upgrade: ["magmaConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			magmaConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Steam", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Magma", 1, 2560],
				],
			},
			mudRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Magma", 1, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineSand":
	{
		baseStats: [195, -195, "Sand"],
		recipes:
		{
			sandConversion2:
			{
				baseStats: [1, 0.15, true, true],
				in: [
					["Magma", 1, 1.8],
					["Air", 400, 10],
					["Fire", 400, 10],
				],
				out: [
					["Sand", 1, 208, 4, ["Soil", 1.6]],
				],
				lock: ["Earth", 0],
				upgrade: ["sandConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			sandConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Ice", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Sand", 1, 2560],
				],
			},
			mudRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Sand", 0.5, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineVoid":
	{
		baseStats: [0, -275, "Void"],
		recipes:
		{
			voidClash3:
			{
				baseStats: [1, 1, true, true],
				in: [
					["Sand", 10, 150],
					["Steam", 10, 150],
				],
				out: [
					["Void", 1, 102, 8, ["Glass", 0.8]],
					["Mud", 19, -150],
				],
				lock: ["Earth", 0],
			},
			voidConversion3:
			{
				baseStats: [2, 1.44, true, true],
				in: [
					["Magma", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Void", 1, 2560],
				],
				lock: ["Silicon", 1, "Plastic", 1, "Steel", 1],
			},
		},
	},
	"machineNexus":
	{
		baseStats: [0, 0, "Alkahest"],
		recipes:
		{
			alkahest1traces:
			{
				baseStats: [1, 0.1, true, true],
				in: [
					["Void", 1, 1],
					["Earth", 100000, 45000],
					["Water", 100000, 45000],
					["Air", 100000, 45000],
					["Fire", 100000, 45000],
				],
				out: [
					["Alkahest", 1, 0.1],
				],
				lock: ["Void", 0.001]

			},
			alkahest1merge:
			{
				baseStats: [1, 1, true, true],
				in: [
					["Void", 0.25, 1],
					["Earth", 25000, 50000],
					["Water", 25000, 50000],
					["Air", 25000, 50000],
					["Fire", 25000, 50000],
					["Alkahest", 1, 0.05],
				],
				out: [
					["Alkahest", 1.25, 42],
				],
				lock: ["Alkahest", 0.1, "Earth", 50000, "Water", 50000, "Air", 50000, "Fire", 50000],
			},
		}
	},
};
var midCircle = {
	elements: [
		"Revelation", "Knowledge",
		"Essence", "Soil", "Obsidian", "Lava", "Oil", "Force", "Space", "Glass", "Gold", "Snow", "Cryogen",
		"Solution", "DistilledEarth", "DistilledWater", "DistilledAir", "DistilledFire",
		"Pressure", "CompressedEarth", "CompressedWater", "CompressedAir", "CompressedFire",
	],
	machines:
	{
		machineKnowledge:
		{
			baseStats: [0, -450, ["Revelation", "Knowledge"]],
			recipes:
			{
				knowledgeProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Revelation", 1, 0.01],
					],
					out: [
						["Revelation", 1, -1],
						["Knowledge", 0.03, 7],
					],
					lock: ["Revelation", 0.1],
					upgrade: ["knowledgeProduction2", "Gold", 1],
				},
				knowledgeProduction2:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Revelation", 1, 0.01],
					],
					out: [
						["Revelation", 1, -5],
						["Knowledge", 0.05, 9, 1.3, ["DistilledEarth", 0.1, "DistilledWater", 0.1, "DistilledAir", 0.1, "DistilledFire", 0.1]],
					],
					upgrade: ["knowledgeProduction3", "Knowledge", 25],
				},
				knowledgeProduction3:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Revelation", 1, 0.01],
					],
					out: [
						["Revelation", 1, -5],
						["Knowledge", 0.8, 79],
					],
				},
				revelationGain1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Gold", 1, 0.3],
					],
					out: [
						["Revelation", 1, 1.2, 4, ["Knowledge", 8]],
					],
					lock: ["Gold", 0.1],
					upgrade: ["revelationGain2", "Knowledge", 75],
				},
				revelationGain2:
				{
					baseStats: [1, 0.01, false, true],
					in: [
						["Knowledge", 1, 0.3],
					],
					out: [
						["Revelation", 1, 4.8],
					],
				},
			}
		},
		machineEssence:
		{
			baseStats: [-100, 650, "Essence"],
			recipes:
			{
				essenceMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Mud", 1, 37],
						["Water", 200, 7900],
					],
					out: [
						["Essence", 1, 1.2, 2, ["Glass", 1.1]],
					],
					lock: ["Knowledge", 0.5, "Space", 1],
				},
			}
		},
		machineSoil:
		{
			baseStats: [100, 650, "Soil"],
			recipes:
			{
				soilMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Mud", 1, 37],
						["Earth", 200, 7900],
					],
					out: [
						["Soil", 1, 1.2, 2, ["Force", 0.2]],
					],
					lock: ["Knowledge", 0.1],
					upgrade: ["soilMerge2", "Knowledge", 36],
				},
				soilMerge2:
				{
					baseStats: [1, 0.01, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Mud", 1, 37],
						["Earth", 200, 7900],
					],
					out: [
						["Soil", 1, 12],
					],
				},
				soilAdvMerge1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Mud", 0.01, 37],
						["Earth", 4000, 79000],
						["Water", 2000, 79000],
					],
					out: [
						["Soil", 1, 24],
					],
					lock: ["Acid", 1],
				},
			}
		},
		machineObsidian:
		{
			baseStats: [650, 100, "Obsidian"],
			recipes:
			{
				obsidianMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Magma", 1, 37],
						["Earth", 200, 7900],
					],
					out: [
						["Obsidian", 1, 1.2],
					],
					lock: ["Knowledge", 0.2],
				},
				obsidianCooling1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Lava", 0.1, 0.6],
						["Gale", 0, 3.4],
					],
					out: [
						["Obsidian", 0.1, 2.4],
					],
					lock: ["Stone", 1],
				},
			}
		},
		machineLava:
		{
			baseStats: [650, -100, "Lava"],
			recipes:
			{
				lavaMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Magma", 1, 37],
						["Fire", 200, 7900],
					],
					out: [
						["Lava", 1, 1.2],
					],
					lock: ["Knowledge", 2, "Obsidian", 1, "Force", 1],
				},
			}
		},
		machineSpace:
		{
			baseStats: [0, -650, "Space"],
			recipes:
			{
				spaceMerge1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Void", 1, 100],
						["Air", 10000, 27900],
						["Fire", 10000, 27900],
					],
					out: [
						["Space", 1, 3.2],
					],
					lock: ["Knowledge", 1.5],
				},
			}
		},
		machineSnow:
		{
			baseStats: [-650, -100, "Snow"],
			recipes:
			{
				snowMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Ice", 1, 37],
						["Air", 200, 7900],
					],
					out: [
						["Snow", 1, 1.2, 4, ["Cryospire", 0.1, "Vortex", 0.1]],
					],
					lock: ["Knowledge", 0.3],
				},
			}
		},
		machineCryogen:
		{
			baseStats: [-650, 100, "Cryogen"],
			recipes:
			{
				cryogenMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Ice", 1, 37],
						["Water", 200, 7900],
					],
					out: [
						["Cryogen", 1, 1.2],
					],
					lock: ["Knowledge", 7, "Essence", 1.5, "Ice", 600],
				},
			}
		},
		machineGlass:
		{
			baseStats: [-400, -500, "Glass"],
			recipes:
			{
				glassMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Fire", 2000, 7900],
						["Lava", 0, 1.1],
					],
					out: [
						["Glass", 1, 1.2, 2, ["Knowledge", 36]],
					],
					lock: ["Knowledge", 3.3, "Sand", 300],
				},
			}
		},
		machineGold:
		{
			baseStats: [-500, -400, "Gold"],
			recipes:
			{
				goldMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Force", 0.01, 0.3],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					lock: ["Knowledge", 7, "Cryogen", 0.4, "Force", 1.1, "Sand", 700],
					upgrade: ["goldMerge2", "Iron", 0.01],
				},
				goldMerge2:
				{
					baseStats: [1, 0.001, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge3", "Silver", 1.01],
				},
				goldMerge3:
				{
					baseStats: [1, 0.002, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge4", "Bronze", 1.01],
				},
				goldMerge4:
				{
					baseStats: [1, 0.004, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge5", "Copper", 1.01],
				},
				goldMerge5:
				{
					baseStats: [1, 0.006, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge6", "Tin", 1.01],
				},
				goldMerge6:
				{
					baseStats: [1, 0.008, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge7", "Aluminum", 1.01],
				},
				goldMerge7:
				{
					baseStats: [1, 0.01, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge8", "Iron", 1.01],
				},
				goldMerge8:
				{
					baseStats: [1, 0.01, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 4.8],
					],
				},
			}
		},
		machineForce:
		{
			baseStats: [400, -500, "Force"],
			recipes:
			{
				forceMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Steam", 1, 37],
						["Air", 200, 7900],
					],
					out: [
						["Force", 1, 1.2],
					],
					lock: ["Knowledge", 0.8, "Space", 1],
					upgrade: ["forceMerge2", "Steel", 1, "Space", 1e8],
				},
				forceMerge2:
				{
					baseStats: [1, 0.01, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Steam", 0.1, 37],
						["Air", 200, 7900],
						["Water", 1, 7900],
						["Fire", 200, 7900],
					],
					out: [
						["Force", 1, 102],
					],
				},
			}
		},
		machineOil:
		{
			baseStats: [500, -400, "Oil"],
			recipes:
			{
				oilMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Steam", 1, 37],
						["Earth", 200, 7900],
					],
					out: [
						["Oil", 1, 1.2],
					],
					lock: ["Knowledge", 0.4],
				},
				oilPump1:
				{
					baseStats: [1, 0.02, true, true],
					in: [
						["Energy", 0.001, 0.2],
						["Earth", 200, 7900],
						["Water", 200, 7900],
					],
					out: [
						["Oil", 1, 3.6],
					],
					lock: ["Silver", 0.4],
				},
				oilAdvPump2:
				{
					baseStats: [1, 0.12, true, true],
					in: [
						["Power", 0.001, 0.2],
						["Earth", 200, 7900],
						["Water", 200, 7900],
						["Air", 200, 7900],
					],
					out: [
						["Oil", 1, 64],
					],
					lock: ["Steel", 1],
				},
			}
		},
		machineSolution:
		{
			baseStats: [-500, 400, "Solution"],
			recipes:
			{
				solutionMix1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Alkahest", 1, 42],
						["Earth", 10000, 51000],
						["Water", 10000, 51000],
						["Air", 10000, 51000],
						["Fire", 10000, 51000],
					],
					out: [
						["Solution", 10, 120],
					],
					lock: ["Knowledge", 8],
					upgrade: ["solutionMix2", "PureEssenceEarth", 1],
				},
				solutionMix2:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Alkahest", 0.75, 42],
						["Earth", 5000, 51000],
						["Water", 10000, 51000],
						["Air", 10000, 51000],
						["Fire", 10000, 51000],
					],
					out: [
						["Solution", 10, 120],
					],
					upgrade: ["solutionMix3", "PureEssenceAir", 1],
				},
				solutionMix3:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Alkahest", 0.50, 42],
						["Earth", 5000, 51000],
						["Water", 10000, 51000],
						["Air", 5000, 51000],
						["Fire", 10000, 51000],
					],
					out: [
						["Solution", 10, 120],
					],
					upgrade: ["solutionMix4", "PureEssenceWater", 1],
				},
				solutionMix4:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Alkahest", 0.25, 42],
						["Earth", 5000, 51000],
						["Water", 5000, 51000],
						["Air", 5000, 51000],
						["Fire", 10000, 51000],
					],
					out: [
						["Solution", 10, 120],
					],
					upgrade: ["solutionMix5", "PureEssenceFire", 1],
				},
				solutionMix5:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Alkahest", 0, 42],
						["Earth", 5000, 51000],
						["Water", 5000, 51000],
						["Air", 5000, 51000],
						["Fire", 5000, 51000],
					],
					out: [
						["Solution", 10, 120],
					],
					upgrade: ["solutionMix6", "Tin", 1e3],
				},
				solutionMix6:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Alkahest", 0, 8.3],
						["Earth", 5000, 51000],
						["Water", 5000, 51000],
						["Air", 5000, 51000],
						["Fire", 5000, 51000],
					],
					out: [
						["Solution", 1, 120],
					],
				},
			}
		},
		machineDistill:
		{
			baseStats: [-400, 500, ["DistilledEarth", "DistilledWater", "DistilledAir", "DistilledFire"]],
			recipes:
			{
				distillEarth1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Solution", 10, 0.1],
						["Cryogen", 1, 0.1],
						["Lava", 1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledEarth", 1, 0.8],
					],
					lock: ["Solution", 1],
					upgrade: ["distillEarth2", "Knowledge", 36],
				},
				distillEarth2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Solution", 8, 0.1],
						["Cryogen", 0.1, 0.1],
						["Lava", 0.1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledEarth", 1, 8],
					],
					upgrade: ["distillEarth3", "Vortex", 0.01],
				},
				distillEarth3:
				{
					baseStats: [1, 0.2, false, true],
					in: [
						["Solution", 8, 0.1],
						["Gale", 0, 1],
						["Blaze", 0, 1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledEarth", 1, 18],
					],
				},
				distillWater1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Solution", 10, 0.1],
						["Cryogen", 1, 0.1],
						["Lava", 1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledWater", 1, 0.8],
					],
					lock: ["Solution", 1],
					upgrade: ["distillWater2", "Knowledge", 36],
				},
				distillWater2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Solution", 8, 0.1],
						["Cryogen", 0.1, 0.1],
						["Lava", 0.1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledWater", 1, 8],
					],
					upgrade: ["distillWater3", "Vortex", 0.01],
				},
				distillWater3:
				{
					baseStats: [1, 0.2, false, true],
					in: [
						["Solution", 8, 0.1],
						["Gale", 0, 1],
						["Blaze", 0, 1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledWater", 1, 18],
					],
				},
				distillAir1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Solution", 10, 0.1],
						["Cryogen", 1, 0.1],
						["Lava", 1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledAir", 1, 0.8],
					],
					lock: ["Solution", 1],
					upgrade: ["distillAir2", "Knowledge", 36],
				},
				distillAir2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Solution", 8, 0.1],
						["Cryogen", 0.1, 0.1],
						["Lava", 0.1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledAir", 1, 8],
					],
					upgrade: ["distillAir3", "Vortex", 0.01],
				},
				distillAir3:
				{
					baseStats: [1, 0.2, false, true],
					in: [
						["Solution", 8, 0.1],
						["Gale", 0, 1],
						["Blaze", 0, 1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledAir", 1, 18],
					],
				},
				distillFire1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Solution", 10, 0.1],
						["Cryogen", 1, 0.1],
						["Lava", 1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledFire", 1, 0.8],
					],
					lock: ["Solution", 1],
					upgrade: ["distillFire2", "Knowledge", 36],
				},
				distillFire2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Solution", 8, 0.1],
						["Cryogen", 0.1, 0.1],
						["Lava", 0.1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledFire", 1, 8],
					],
					upgrade: ["distillFire3", "Vortex", 0.01],
				},
				distillFire3:
				{
					baseStats: [1, 0.2, false, true],
					in: [
						["Solution", 8, 0.1],
						["Gale", 0, 1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledFire", 1, 18],
					],
				},
			}
		},
		machinePressure:
		{
			baseStats: [500, 400, "Pressure"],
			recipes:
			{
				pressureMerge1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Steam", 100, 100],
						["Force", 0.1, 0.1],
						["Space", 1, 10.5]
					],
					out: [
						["Pressure", 5, 12],
					],
					lock: ["Knowledge", 8, "Pebbles", 0.02, "Space", 2],
				},
			}
		},
		machineCompress:
		{
			baseStats: [400, 500, ["CompressedEarth", "CompressedWater", "CompressedAir", "CompressedFire"]],
			recipes:
			{
				compressEarth1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Pressure", 1, 0.1],
						["Earth", 1e7, 120],
					],
					out: [
						["CompressedEarth", 5, 0.8],
					],
					lock: ["Pressure", 0.1],
					upgrade: ["compressEarth2", "Knowledge", 36],
				},
				compressEarth2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Pressure", 1, 0.1],
						["Earth", 1e6, 120],
					],
					out: [
						["CompressedEarth", 5, 8],
					],
				},
				compressWater1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Pressure", 1, 0.1],
						["Water", 1e7, 120],
					],
					out: [
						["CompressedWater", 5, 0.8],
					],
					lock: ["Pressure", 0.1],
					upgrade: ["compressWater2", "Knowledge", 36],
				},
				compressWater2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Pressure", 1, 0.1],
						["Water", 1e6, 120],
					],
					out: [
						["CompressedWater", 5, 8],
					],
				},
				compressAir1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Pressure", 1, 0.1],
						["Air", 1e7, 120],
					],
					out: [
						["CompressedAir", 5, 0.8],
					],
					lock: ["Pressure", 0.1],
					upgrade: ["compressAir2", "Knowledge", 36],
				},
				compressAir2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Pressure", 1, 0.1],
						["Air", 1e6, 120],
					],
					out: [
						["CompressedAir", 5, 8],
					],
				},
				compressFire1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Pressure", 1, 0.1],
						["Fire", 1e7, 120],
					],
					out: [
						["CompressedFire", 5, 0.8],
					],
					lock: ["Pressure", 0.1],
					upgrade: ["compressFire2", "Knowledge", 36],
				},
				compressFire2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Pressure", 1, 0.1],
						["Fire", 1e6, 120],
					],
					out: [
						["CompressedFire", 5, 8],
					],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
}
var lifeCircle = {
	elements: [],
	baseElements: ["Earth", "Water", "Air", "Fire"],
	prefixElements: ["Essence", "Soil", "Seed", "Plant", "PureEssence"],
	machines:
	{
		machineEssenceElements:
		{
			baseStats: [-250, 750, 1],
			reciconv:
			{
				essenceElement:
				{
					baseStats: [1, 0.5, true, true],
					in: [
						["Essence", 10, 1],
						["Distilled", -1, 0.01],
					],
					out: [
						["Essence", -1, 14],
					],
					lock: ["Distilled", -1],
				},
			},
			recipes:
			{},
		},
		machineSoilElements:
		{
			baseStats: [250, 750, 2],
			reciconv:
			{
				soilElement:
				{
					baseStats: [1, 0.5, true, true],
					in: [
						["Soil", 100, 1],
						["Compressed", -1, 0.01],
					],
					out: [
						["Soil", -1, 14],
					],
					lock: ["Compressed", -1],
				},
			},
			recipes:
			{},
		},
		machineSeedElements:
		{
			baseStats: [0, 800],
			reciconv:
			{
				seed:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Soil", -1, 1, 100, ["Space", 1e7]],
						["Essence", -1, 1.1],
					],
					out: [
						["Seed", -1, 107],
					],
					lock: ["Essence", -9.01, "Soil", -0.1],
				},
			},
			recipes:
			{},
		},
		machinePureEssenceElements:
		{
			baseStats: [-250, 1250, 5],
			recipes:
			{},
		},
		machineUnPureSoilElements:
		{
			baseStats: [250, 1250],
			reciconv:
			{
				infuseSoil:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Soil", 250, 1],
						["PureEssence", -1, 0.01],
					],
					out: [
						["Soil", -500, 230],
					],
					lock: ["PureEssence", -0.01, "Glass", 2.2, "Space", 120],
				},
			},
			recipes:
			{}
		},
		machinePlantEarth:
		{
			baseStats: [100, 1100, ["SeedEarth", "PlantEarth"]],
			recipes:
			{
				growEarth:
				{
					baseStats: [1, 1, true, true],
					in: [
						["SoilEarth", 0.04, 1.1],
						["SeedEarth", 1, 1],
					],
					out: [
						["SeedEarth", 1, 111],
						["PlantEarth", 1, 10000],
					],
					lock: ["SeedEarth", 1],
				},
				harvestEarth1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["PlantEarth", 100, 10],
					],
					out: [
						["EssenceEarth", 1, 7, 7, ["FoldedSpace", 0.01]],
					],
					lock: ["PlantEarth", 1],
				},
				uprootEarth2:
				{
					baseStats: [1, 0.03, true, false],
					in: [
						["PlantEarth", 100, 100],
						["SeedEarth", 1, 1],
					],
					out: [
						["PureEssenceEarth", 1, 12],
					],
					lock: ["PlantEarth", 20],
				},
			},
		},
		machinePlantWater:
		{
			baseStats: [-100, 1100, ["SeedWater", "PlantWater"]],
			recipes:
			{
				growWater:
				{
					baseStats: [1, 1, true, true],
					in: [
						["SoilWater", 0.04, 1.1],
						["Cryogen", 0.004, 1.1],
						["SeedWater", 1, 1],
						["Cryospire", 0, 1],
					],
					out: [
						["SeedWater", 1.01, -111],
						["PlantWater", 1, 10000],
					],
					lock: ["EssenceWater", 0.1, "Cryospire", 1],
				},
				harvestWater1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["PlantWater", 100, 10],
					],
					out: [
						["EssenceWater", 1, 7, 7, ["Force", 1]],
					],
					lock: ["PlantWater", 1],
				},
				uprootWater2:
				{
					baseStats: [1, 0.03, true, true],
					in: [
						["PlantWater", 100, 100],
						["SeedWater", 0.7, 1],
					],
					out: [
						["PureEssenceWater", 1, 12],
					],
					lock: ["PlantWater", 20],
				},
			},
		},
		machinePlantAir:
		{
			baseStats: [-100, 900, ["SeedAir", "PlantAir"]],
			recipes:
			{
				growAir:
				{
					baseStats: [1, 1, true, true],
					in: [
						["SoilAir", 1, 1.1],
						["SeedAir", 1, 1],
					],
					out: [
						["SoilAir", 1, -250],
						["SeedAir", 1, 111],
						["PlantAir", 0.4, 10000],
					],
					lock: ["SeedAir", 1],
				},
				harvestAir1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["PlantAir", 100, 10],
					],
					out: [
						["EssenceAir", 1, 7, 7, ["Force", 1]],
					],
					lock: ["PlantAir", 1],
				},
				uprootAir2:
				{
					baseStats: [1, 0.06, true, false],
					in: [
						["PlantAir", 100, 100],
						["SeedAir", 1, 1],
					],
					out: [
						["PureEssenceAir", 1, 12],
					],
					lock: ["PlantAir", 20],
				},
			},
		},
		machinePlantFire:
		{
			baseStats: [100, 900, ["SeedFire", "PlantFire"]],
			recipes:
			{
				growFire:
				{
					baseStats: [1, 1, true, true],
					in: [
						["SoilFire", 0.04, 1.1],
						["SeedFire", 1, 1],
						["Lava", 0.001, 1],
					],
					out: [
						["SeedFire", 0.99, 131],
						["PlantFire", 1, 10000],
					],
					lock: ["EssenceFire", 0.1, "Sulphur", 4, "Coal", 4],
				},
				harvestFire1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["PlantFire", 10, 10],
					],
					out: [
						["EssenceFire", 1, 7, 7, ["Force", 1]],
					],
					lock: ["PlantFire", 1],
				},
				uprootFire2:
				{
					baseStats: [1, 0.03, true, false],
					in: [
						["PlantFire", 100, 100],
						["SeedFire", 1, 1],
					],
					out: [
						["PureEssenceFire", 1, 12],
					],
					lock: ["PlantFire", 20],
				},
			},
		},
	},
	preprocess: function ()
	{
		for (var i = 0; i < this.prefixElements.length; i++)
		{
			for (var j = 0; j < this.baseElements.length; j++)
			{
				var elem = this.prefixElements[i] + this.baseElements[j];
				this.elements.push(elem);
			}
		}
		addCircleElements(this.elements);
		elementalDisplayType["SeedEarth"] = "";
		elementalDisplayType["SeedAir"] = "";
		for (var mach in this.machines)
		{
			for (var rec in this.machines[mach].reciconv)
			{
				for (var j = 0; j < this.baseElements.length; j++)
				{
					var recipe = JSON.parse(JSON.stringify(this.machines[mach].reciconv[rec]));

					for (var i = 0; i < recipe.in.length; i++)
					{
						if (recipe.in[i][1] < 0)
						{
							recipe.in[i][1] *= -1;
							recipe.in[i][0] += this.baseElements[j];
						}
					}
					for (var i = 0; i < recipe.out.length; i++)
					{
						if (recipe.out[i][1] < 0)
						{
							recipe.out[i][1] *= -1;
							recipe.out[i][0] += this.baseElements[j];
						}
					}
					if (recipe.lock[1] < 0)
					{
						recipe.lock[1] *= -1;
						recipe.lock[0] += this.baseElements[j];
					}
					if (recipe.lock[3] && recipe.lock[3] < 0)
					{
						recipe.lock[3] *= -1;
						recipe.lock[2] += this.baseElements[j];
					}
					this.machines[mach].recipes[rec + this.baseElements[j]] = recipe;
				}
				this.machines[mach].reciconv = null;
			}
		}
		this.machines["machineSeedElements"].recipes["seedEarth"].lock[1] = 0.01;
		this.machines["machineSeedElements"].recipes["seedWater"].lock[1] = 2.01;
		this.machines["machineSeedElements"].recipes["seedWater"].lock.push("Cryospire");
		this.machines["machineSeedElements"].recipes["seedWater"].lock.push(1);
		this.machines["machineSeedElements"].recipes["seedAir"].lock[1] = 1.01;
		this.machines["machineSeedElements"].recipes["seedAir"].lock.push("Space");
		this.machines["machineSeedElements"].recipes["seedAir"].lock.push(1e6);
		this.machines["machineSeedElements"].recipes["seedFire"].lock[1] = 3.01;
		this.machines["machineSeedElements"].recipes["seedFire"].lock.push("Blast");
		this.machines["machineSeedElements"].recipes["seedFire"].lock.push(0.2);
		this.machines["machineSeedElements"].recipes["seedFire"].in.push(["Blast", 0, 0.3]);
		this.machines["machineUnPureSoilElements"].recipes["infuseSoilFire"].out[0][1] = 1250;
		for (var mach in this.machines)
		{
			var machine = this.machines[mach];
			if (machine.baseStats[2] && !machine.baseStats[2].length)
			{
				var pref = this.prefixElements[machine.baseStats[2] - 1];
				machine.baseStats[2] = [];
				for (var j = 0; j < this.baseElements.length; j++)
				{
					machine.baseStats[2].push(pref + this.baseElements[j]);
				}
			}
			simplifiedMachineData[mach] = this.machines[mach];
		}
	}
};
var coldCircle = {
	elements: ["Coolant", "Gale", "Cryospire", "Vortex"],
	machines:
	{
		machineCoolant:
		{
			baseStats: [-750, 0, "Coolant"],
			recipes:
			{
				coolantMerge1:
				{
					baseStats: [1, 0.2, true, true],
					in: [
						["Ice", 100, 100],
						["Snow", 0.1, 0.4],
						["Cryogen", 0.1, 0.4]
					],
					out: [
						["Coolant", 5, 1080],
					],
					lock: ["Knowledge", 36],
					upgrade: ["coolantMerge2", "Power", 36]
				},
				coolantMerge2:
				{
					baseStats: [1, 0.4, false, true],
					in: [
						["Ice", 80, 100],
						["Snow", 0.1, 0.4],
						["Cryogen", 0.1, 0.4]
					],
					out: [
						["Coolant", 5, 1080],
					],
				},
				coolantProduction1:
				{
					baseStats: [1, 0.9, true, true],
					in: [
						["Energy", 1, 120e7, 10, ["Bronze", 16, "Copper", 32, "Tin", 64, "Aluminum", 128, "Iron", 256, "Steel", 1, "Plastic", 1]],
						["Gale", 0, 4],
						["Cryospire", 0, 4],
					],
					out: [
						["Coolant", 1, 1580],
					],
					lock: ["Silver", 8],
				},
			}
		},
		machineGale:
		{
			baseStats: [-850, -250, "Gale"],
			recipes:
			{
				galeSetup1:
				{
					baseStats: [0.1, 0.1, true, true],
					in: [
						["Snow", 4, 0.1],
						["Coolant", 1, 54],
					],
					out: [
						["Gale", 10, 12],
					],
					lock: ["Knowledge", 36, "Coolant", 12],
				},
				galeCool1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gale", 1, 0.001],
						["Coolant", 1, 13],
					],
					out: [
						["Gale", 1, 13],
						["Coolant", 0.95, 1000],
					],
					lock: ["Gale", 1e99],
					alwayson: true,
				},
				galeMelt1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gale", 1, 0.001],
					],
					out: [
						["Gale", 0.95, 13],
						["Coolant", 0.05, 13],
					],
					lock: ["Gale", 1e99],
					alwayson: true,
				},
				galeMelt2:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Gale", 0.01, 0.001],
					],
					out: [],
					lock: ["Gale", 0.01],
				},
			}
		},
		machineCryospire:
		{
			baseStats: [-850, 250, "Cryospire"],
			recipes:
			{
				cryospireSetup1:
				{
					baseStats: [0.1, 0.5, true, true],
					in: [
						["Gale", 1, 1],
						["Coolant", 200, 100],
					],
					out: [
						["Cryospire", 2, 12],
					],
					lock: ["Knowledge", 36, "Silver", 2],
				},
				cryospireCool1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Cryospire", 1, 0.001],
						["Coolant", 1, 26],
					],
					out: [
						["Cryospire", 1, 13],
						["Coolant", 0.80, 1200],
					],
					lock: ["Cryospire", 1e99],
					alwayson: true,
				},
				cryospireMelt1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Cryospire", 1, 0.001],
					],
					out: [
						["Cryospire", 0.95, 13],
						["Coolant", 0.05, 26],
					],
					lock: ["Cryospire", 1e99],
					alwayson: true,
				},
				cryospireMelt2:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Cryospire", 0.01, 0.001],
					],
					out: [],
					lock: ["Cryospire", 0.01],
				},
			}
		},
		machineVortex:
		{
			baseStats: [-1100, 0, "Vortex"],
			recipes:
			{
				vortexSetup1:
				{
					baseStats: [0.1, 0.1, true, true],
					in: [
						["Cryospire", 1, 2],
						["Gale", 1, 2],
						["Ice", 1000, 200],
					],
					out: [
						["Vortex", 1, 12],
					],
					lock: ["Coolant", 1300],
				},
				vortexCool1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Vortex", 1, 0.001],
						["Coolant", 1, 39],
					],
					out: [
						["Vortex", 1, 13],
					],
					lock: ["Vortex", 1e99],
					alwayson: true,
				},
				vortexMelt1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Vortex", 1, 0.001],
					],
					out: [
						["Vortex", 0.50, 13],
						["Coolant", 0.50, 39],
					],
					lock: ["Vortex", 1e99],
					alwayson: true,
				},
				vortexMelt2:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Vortex", 0.01, 0.001],
					],
					out: [],
					lock: ["Vortex", 0.01],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	decay: function ()
	{
		var temp;
		for (var i = 1; i < this.elements.length; i++)
		{
			if (data.oElements[this.elements[i]].amount > 0)
			{
				if (machineData["machine" + this.elements[i]].paused)
				{
					machineData["machine" + this.elements[i]].paused = false;
				}
				var dec1 = machineData["machine" + this.elements[i]].recipes[1];

				if (!dec1.unlocked)
				{
					dec1.region.paymentSuccess();
				}
				dec1.enabled = true;
				dec1.activated = true;

				var dec2 = machineData["machine" + this.elements[i]].recipes[2];
				if (!dec2.unlocked)
				{
					dec2.region.paymentSuccess();
				}
				dec2.enabled = true;
				dec2.activated = true;
			}
		}
	},
};
var hotCircle = {
	elements: ["Blaze", "Blast", "Pyro", "Coal", "Sulphur", "Propane", "Ash", "Dust", "Carbon"],
	machines:
	{
		machineBlaze:
		{
			baseStats: [900, 0, "Blaze"],
			recipes:
			{
				blazeIgnite1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Coal", 0.03, 0.3],
					],
					out: [
						["Blaze", 0.024, 0.1],
					],
					lock: ["Coal", 0.1],
				},
				blazeDecay1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Blaze", 1, 0.001],
					],
					out: [
						["Blaze", 0.99, -12],
						["Ash", 0.01, -12],
					],
					lock: ["Ash", 1e99],
					alwayson: true,
				},
				blazeFuel1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Coal", 1, 0.1],
						["Blaze", 1, 0.1],
					],
					out: [
						["Blaze", 1.98, 1.1, 10, ["Plastic", 0.02]],
						["Ash", 0.02, -12],
					],
					lock: ["Knowledge", 36, "Energy", 0.01],
				},
			}
		},
		machineBlast:
		{
			baseStats: [950, 250, "Blast"],
			recipes:
			{
				blastIgnite1:
				{
					baseStats: [1, 0.5, true, false],
					in: [
						["Sulphur", 0.3, 0.5],
					],
					out: [
						["Blast", 0.3, 0.8],
						["Dust", 0.3, -12],
					],
					lock: ["Iron", 120],
				},
				blastDecay1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Blast", 1, 0.001],
					],
					out: [
						["Blast", 0.995, -12],
						["Dust", 0.005, -12],
					],
					lock: ["Dust", 1e99],
					alwayson: true,
				},
				blastFuel1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Sulphur", 0.2, 2.1],
						["Blast", 1, 0.5],
					],
					out: [
						["Blast", 1.1, 2.2, 5, ["Acid", 1]],
						["Dust", 0.1, -12],
					],
					lock: ["Steel", 1],
				},
			}
		},
		machinePyro:
		{
			baseStats: [950, -250, "Pyro"],
			recipes:
			{
				pyroIgnite1:
				{
					baseStats: [1, 0.5, true, false],
					in: [
						["Propane", 0.02, 0.1],
					],
					out: [
						["Pyro", 0.03, 0.1],
					],
					lock: ["Plastic", 1],
				},
				pyroDecay1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Pyro", 1, 0.001],
					],
					out: [
						["Pyro", 0.975, -12],
						["Carbon", 0.025, -12],
					],
					lock: ["Carbon", 1e99],
					alwayson: true,
				},
				pyroFuel1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Propane", 0.1, 0.1],
						["Pyro", 1, 0.1],
					],
					out: [
						["Pyro", 1.1, 1.2, 6, ["Steel", 1]],
					],
					lock: ["Pyro", 0.001],
				},
			}
		},
		machineCoal:
		{
			baseStats: [750, 0, "Coal"],
			recipes:
			{
				coalProduction1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Space", 1, 0.1],
						["Void", 1, 0.1],
						["EssenceFire", 0.1, 0.1],
					],
					out: [
						["Coal", 1, 12],
					],
					lock: ["Knowledge", 36],
				},
				coalRecover1:
				{
					baseStats: [1, 0.25, true, true],
					in: [
						["Ash", 1, 0.1],
						["Obsidian", 0.1, 0.1],
					],
					out: [
						["Coal", 1, 12],
					],
					lock: ["Ash", 0.1],
				},
				coalAdvProduction1:
				{
					baseStats: [1, 0.25, true, true],
					in: [
						["Stone", 0.1, 0.1],
						["Obsidian", 0.1, 0.1],
					],
					out: [
						["Coal", 1, 12],
					],
					lock: ["Obsidian", 2.1],
				},
			}
		},
		machineSulphur:
		{
			baseStats: [800, 150, "Sulphur"],
			recipes:
			{
				sulphurProduction1:
				{
					baseStats: [1, 0.3, true, true],
					in: [
						["Coal", 1, 0.1],
						["Water", 1e5, 0.1],
						["Air", 1e5, 0.1],
					],
					out: [
						["Sulphur", 1, 12],
					],
					lock: ["Bronze", 34],
				},
			}
		},
		machinePropane:
		{
			baseStats: [800, -150, "Propane"],
			recipes:
			{}
		},
		machineHotWaste:
		{
			baseStats: [1100, 0, ["Ash", "Dust", "Carbon"]],
			recipes:
			{}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	decay: function ()
	{
		var temp;
		for (var i = 0; i < 3; i++)
		{
			if (data.oElements[this.elements[i]].amount > 0)
			{
				if (machineData["machine" + this.elements[i]].paused)
				{
					machineData["machine" + this.elements[i]].paused = false;
				}
				var dec = machineData["machine" + this.elements[i]].recipes[1];
				if (!dec.unlocked)
				{
					dec.region.paymentSuccess();
				}
				dec.enabled = true;
			}
		}
	},
};
var powerCircle = {
	elements: ["Power", "Energy", "Fuel", "Diesel", "Petrol", "Propene"],
	machines:
	{
		machineRefinery:
		{
			baseStats: [600, -350, "Fuel"],
			recipes:
			{
				fuelRefine1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Oil", 1, 1],
						["Blaze", 0, 0.01],
					],
					out: [
						["Fuel", 1, 12],
					],
					lock: ["Knowledge", 36],
				},
			}
		},
		machineAdvancedRefinery:
		{
			baseStats: [750, -350, ["Diesel", "Petrol", "Propene"]],
			recipes:
			{
				oilRefine1:
				{
					baseStats: [1, 0.8, true, true],
					in: [
						["Oil", 100, 1],
						["Blast", 0, 0.8],
						["Cryospire", 0, 1],
					],
					out: [
						["Diesel", 90, 12],
						["Petrol", 8, 12],
						["Propene", 1, 12],
						["Propane", 1, 12],
					],
					lock: ["Blast", 0.1],
				},
			}
		},
		machineProcessFuel:
		{
			baseStats: [500, -500],
			recipes:
			{
				fuelUsage1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Fuel", 1, 0.001],
						["Gale", 0, 1],
					],
					out: [
						["Energy", 100, -12],
					],
					lock: ["Knowledge", 36],
					upgrade: ["fuelUsage2", "Copper", 6],
				},
				fuelUsage2:
				{
					baseStats: [1, 0.2, false, true],
					in: [
						["Fuel", 1, 0.001],
						["Gale", 0, 1],
					],
					out: [
						["Energy", 100, 12],
					],
				},
			}
		},
		machineProcessDiesel:
		{
			baseStats: [575, -575],
			recipes:
			{
				dieselDrain1:
				{
					baseStats: [1, 0, true, true],
					in: [
						["Diesel", 0.01, 5.01],
					],
					out: [],
					lock: ["Clay", 1, "Diesel", 0.01],
					upgrade: ["dieselDrain2", "Plastic", 0.1],
				},
				dieselDrain2:
				{
					baseStats: [1, 0, false, true],
					in: [
						["Diesel", 0.5, 5.01],
					],
					out: [],
				},
				dieselUsage1:
				{
					baseStats: [1, 0.25, true, true],
					in: [
						["Diesel", 1, 1.1],
						["Blaze", 0, 3],
					],
					out: [
						["Energy", 20, -150],
					],
					lock: ["Steel", 1],
				},
			}
		},
		machineProcessPetrol:
		{
			baseStats: [650, -650],
			recipes:
			{
				petrolDrain1:
				{
					baseStats: [1, 0, true, true],
					in: [
						["Petrol", 0.01, 5.01],
					],
					out: [],
					lock: ["Clay", 1, "Petrol", 0.01],
				},
				petrolUsage1:
				{
					baseStats: [1, 0.30, true, true],
					in: [
						["Petrol", 1, 1.1],
						["Pyro", 0, 0.5],
					],
					out: [
						["Power", 5, -150],
					],
					lock: ["Steel", 1],
				},
			}
		},
		machineProcessPropane:
		{
			baseStats: [725, -725],
			recipes:
			{
				propaneDrain1:
				{
					baseStats: [1, 0, true, true],
					in: [
						["Propane", 0.01, 5.01],
					],
					out: [],
					lock: ["Clay", 1, "Propane", 0.01],
				},
			}
		},
		machineProcessPropene:
		{
			baseStats: [800, -800],
			recipes:
			{
				propeneDrain1:
				{
					baseStats: [1, 0, true, true],
					in: [
						["Propene", 0.01, 5.01],
					],
					out: [],
					lock: ["Clay", 1, "Propene", 0.01],
					upgrade: ["propeneDrain2", "Plastic", 1],
				},
				propeneDrain2:
				{
					baseStats: [1, 0, false, true],
					in: [
						["Propene", 0.1, 5.01],
					],
					out: [],
				},
			}
		},
		machineEnergy:
		{
			baseStats: [350, -600, "Energy"],
			recipes:
			{}
		},
		machinePower:
		{
			baseStats: [350, -750, "Power"],
			recipes:
			{}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
};
var rarityCircle = {
	elements: ["Silver", "Bronze", "Copper", "Tin", "Aluminum", "Iron", "Steel", "Clay", "Plastic", "Silicon", "Acid", "Mayo"],
	machines:
	{
		machineSilver:
		{
			baseStats: [-740, -400, "Silver"],
			recipes:
			{
				silverStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 2, 1.2],
						["Alkahest", 2, 1.2],
					],
					out: [
						["Silver", 1, 1.2],
					],
					lock: ["Knowledge", 36],
				},
				silverAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 1, 2.4],
						["Gale", 0, 4.8],
					],
					out: [
						["Silver", 2, 16.3],
					],
					lock: ["Silver", 0.01, "Gale", 2],
				},
			}
		},
		machineBronze:
		{
			baseStats: [-570, -570, "Bronze"],
			recipes:
			{
				bronzeStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 4, 1.2],
						["Alkahest", 4, 1.2],
					],
					out: [
						["Bronze", 1, 1.2],
					],
					lock: ["Knowledge", 36, "Silver", 0.01],
				},
				bronzeAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Silver", 1, 2.4],
						["Energy", 0.1, 0.8],
					],
					out: [
						["Bronze", 2, 48.7],
					],
					lock: ["Bronze", 0.01, "Energy", 2],
				},
			}
		},
		machineCopper:
		{
			baseStats: [-570, -330, "Copper"],
			recipes:
			{
				copperStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 6, 1.2],
						["Alkahest", 6, 1.2],
					],
					out: [
						["Copper", 1, 1.2],
					],
					lock: ["Knowledge", 36, "Silver", 0.01],
				},
				copperAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Bronze", 1, 2.4],
						["Blaze", 0, 0.3],
					],
					out: [
						["Copper", 2, 184.7],
					],
					lock: ["Copper", 0.01, "Blaze", 0.6],
				},
			}
		},
		machineTin:
		{
			baseStats: [-740, -500, "Tin"],
			recipes:
			{
				tinStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 8, 1.2],
						["Alkahest", 8, 1.2],
					],
					out: [
						["Tin", 1, 1.2],
					],
					lock: ["Knowledge", 36, "Copper", 0.01],
				},
				tinAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Copper", 1, 2.4],
						["CompressedEarth", 0.001, 0.9],
					],
					out: [
						["Tin", 2, 2.3e3],
					],
					lock: ["Tin", 0.01, "CompressedEarth", 3.6],
				},
			}
		},
		machineAluminum:
		{
			baseStats: [-500, -500, "Aluminum"],
			recipes:
			{
				aluminumStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 12, 1.2],
						["Alkahest", 12, 1.2],
					],
					out: [
						["Aluminum", 1, 1.2],
					],
					lock: ["Knowledge", 36, "Copper", 0.01],
				},
				aluminumAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Tin", 1, 2.4],
						["Gale", 0, 8.9],
					],
					out: [
						["Aluminum", 2, 6.3e3],
					],
					lock: ["Aluminum", 0.01, "Gale", 3.6],
				},
			}
		},
		machineIron:
		{
			baseStats: [-670, -330, "Iron"],
			recipes:
			{
				ironStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 16, 1.2],
						["Alkahest", 16, 1.2],
					],
					out: [
						["Iron", 1, 1.2],
					],
					lock: ["Knowledge", 36, "Copper", 0.01],
				},
				ironAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Aluminum", 1, 2.4],
						["Alkahest", 0, 42],
					],
					out: [
						["Iron", 2, 2.4e4],
					],
					lock: ["Knowledge", 36, "Aluminum", 3.6],
					upgrade: ["ironAlchemy2", "Iron", 2.4],
				},
				ironAlchemy2:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Aluminum", 1, 2.4],
						["Alkahest", 0, 24],
					],
					out: [
						["Iron", 2, 2.4e4],
					],
				},
			}
		},
		machineSteel:
		{
			baseStats: [-670, -570, "Steel"],
			recipes:
			{
				steelProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Iron", 1, 1.2],
						["Carbon", 1, 1.2],
						["Pyro", 0, 0.4],
					],
					out: [
						["Steel", 1, 1.2],
					],
					lock: ["Carbon", 1],
				},
			}
		},
		machineClay:
		{
			baseStats: [-330, -570, "Clay"],
			recipes:
			{
				clayProduction1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Ash", 1, 4.8],
						["Sand", 100, 457],
						["Mud", 100, 457],
						["Water", 200, 1e4],
					],
					out: [
						["Clay", 1, 1.2],
					],
					lock: ["Ash", 1],
				},
			}
		},
		machinePlastic:
		{
			baseStats: [-330, -670, "Plastic"],
			recipes:
			{
				plasticProduction1:
				{
					baseStats: [1, 0.05, true, true],
					in: [
						["Propene", 1, 1.2],
						["Blaze", 0, 1],
					],
					out: [
						["Plastic", 1, 0.1],
					],
					lock: ["Propene", 0.1],
				},
				plasticProduction2:
				{
					baseStats: [1, 0.15, true, true],
					in: [
						["Propene", 1, 1.2],
						["Blaze", 0, 10],
					],
					out: [
						["Plastic", 1, 1.2],
					],
					lock: ["Plastic", 0.02],
					upgrade: ["plasticProduction3", "SterileGlass", 1],
				},
				plasticProduction3:
				{
					baseStats: [1, 0.45, false, true],
					in: [
						["Propene", 1, 1.2],
						["Blaze", 0, 10],
					],
					out: [
						["Plastic", 1, 1.2],
					],
				},
			}
		},
		machineSilicon:
		{
			baseStats: [-400, -740, "Silicon"],
			recipes:
			{
				siliconProduction1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Quartz", 1, 1],
						["Coal", 4, 9],
						["PureFire", 0.7, 1.7],
					],
					out: [
						["Silicon", 0.4, 2.2],
					],
					lock: ["Quartz", 1, "Earth", 1e6, "Water", 1e6, "Air", 1e6, "Fire", 1e6],
				},
			}
		},
		machineAcid:
		{
			baseStats: [-500, -740, "Acid"],
			recipes:
			{
				acidProduction1:
				{
					baseStats: [1, 0.2, true, true],
					in: [
						["Sulphur", 1, 1.2],
						["Plastic", 0.4, 0.8],
						["Vortex", 0, 1],
					],
					out: [
						["Acid", 1, 1.2],
					],
					lock: ["Vortex", 0.001, "Glass", 1],
				},
			}
		},
		machineMayo:
		{
			baseStats: [-570, -670, "Mayo"],
			recipes:
			{
				earthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["Mayo", 1, 1.2],
					],
					lock: ["Earth", 1e99],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
};
var gemCircle = {
	elements: ["CompressedDust", "CompressedAsh", "Gravel", "Pebbles", "Stone", "Gemstone", "Quartz", "Emerald", "Sapphire", "Topaz", "Ruby"],
	machines:
	{
		machineAdvancedCompress:
		{
			baseStats: [1100, 600, ["CompressedDust", "CompressedAsh"]],
			recipes:
			{
				ashCompress1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Ash", 100, 11],
					],
					out: [
						["CompressedAsh", 1, 0.1],
					],
					lock: ["Ash", 11],
					upgrade: ["ashCompress2", "Pyro", 3],
				},
				ashCompress2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Ash", 10, 9],
						["Power", 10, 90],
					],
					out: [
						["CompressedAsh", 5, 1.2],
					],
				},
				dustCompress1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Dust", 100, 11],
					],
					out: [
						["CompressedDust", 1, 0.1],
					],
					lock: ["Dust", 11],
					upgrade: ["dustCompress2", "Pyro", 3],
				},
				dustCompress2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Dust", 10, 9],
						["Energy", 100, 90],
					],
					out: [
						["CompressedDust", 5, 1.2],
					],
				},
			}
		},
		machineStone:
		{
			baseStats: [775, 600, ["Gravel", "Pebbles", "Stone"]],
			recipes:
			{
				gravelProduction1:
				{
					baseStats: [1, 0.8, true, true],
					in: [
						["CompressedEarth", 0.4, 1.2],
						["Energy", 1, 1.2],
					],
					out: [
						["Gravel", 1, 1.2, 10, ["PureEarth", 1]],
					],
					lock: ["Energy", 1],
				},
				pebbleProduction1:
				{
					baseStats: [1, 0.01, true, false],
					in: [
						["Obsidian", 1, 1],
						["Lava", 1, 1],
						["Cryogen", 1, 1],
					],
					out: [
						["Pebbles", 1, 0.1],
					],
					lock: ["Knowledge", 8],
					upgrade: ["pebbleProduction2", "Energy", 1, "Gravel", 0.1],
				},
				pebbleProduction2:
				{
					baseStats: [1, 0.8, false, true],
					in: [
						["Gravel", 1, 0.3],
						["Energy", 1, 1.2],
					],
					out: [
						["Pebbles", 1, 1.2, 10, ["FoldedSpace", 200]],
					],
					lock: ["Energy", 1],
				},
				stoneProduction1:
				{
					baseStats: [1, 0.8, true, true],
					in: [
						["Pebbles", 1, 0.3],
						["Energy", 1, 1.2],
					],
					out: [
						["Stone", 1, 1.2, 10, ["Acid", 1]],
					],
					lock: ["Energy", 1],
				},
			}
		},
		machineGemstone:
		{
			baseStats: [775, 775, "Gemstone"],
			recipes:
			{
				gemGrow1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Stone", 0.04, 0.6],
					],
					out: [
						["Gemstone", 0.001, 0.05],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow2:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedEarth", 0.04, 0.6],
						["Gemstone", 0, 0.05],
					],
					out: [
						["Gemstone", 0.001, 0.10],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow3:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Pebbles", 0.04, 0.6],
						["Gemstone", 0, 0.10],
					],
					out: [
						["Gemstone", 0.001, 0.15],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow4:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedWater", 0.04, 0.6],
						["Gemstone", 0, 0.15],
					],
					out: [
						["Gemstone", 0.001, 0.20],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow5:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Carbon", 0.04, 0.6],
						["Gemstone", 0, 0.20],
					],
					out: [
						["Gemstone", 0.001, 0.25],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow6:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedAir", 0.04, 0.6],
						["Gemstone", 0, 0.25],
					],
					out: [
						["Gemstone", 0.001, 0.30],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow7:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Iron", 0.04, 0.6],
						["Energy", 0.04, 0.6],
						["Gemstone", 0, 0.30],
					],
					out: [
						["Gemstone", 0.001, 0.35],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow8:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedFire", 0.04, 0.6],
						["Gemstone", 0, 0.35],
					],
					out: [
						["Gemstone", 0.001, 0.40],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow9:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedAsh", 0.001, 0.6],
						["Gemstone", 0, 0.40],
					],
					out: [
						["Gemstone", 0.001, 0.45],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow10:
				{
					baseStats: [1, 1, true, false],
					in: [
						["DistilledEarth", 0.04, 0.6],
						["Gemstone", 0, 0.45],
					],
					out: [
						["Gemstone", 0.001, 0.50],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow11:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Gravel", 0.04, 0.6],
						["Gemstone", 0, 0.50],
					],
					out: [
						["Gemstone", 0.001, 0.55],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow12:
				{
					baseStats: [1, 1, true, false],
					in: [
						["DistilledWater", 0.04, 0.6],
						["Gemstone", 0, 0.55],
					],
					out: [
						["Gemstone", 0.001, 0.60],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow13:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedDust", 0.001, 0.6],
						["Gemstone", 0, 0.60],
					],
					out: [
						["Gemstone", 0.001, 0.65],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow14:
				{
					baseStats: [1, 1, true, false],
					in: [
						["DistilledAir", 0.04, 0.6],
						["Gemstone", 0, 0.65],
					],
					out: [
						["Gemstone", 0.001, 0.70],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow15:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Steel", 0.006, 0.6],
						["Power", 0.04, 0.6],
						["Gemstone", 0, 0.70],
					],
					out: [
						["Gemstone", 0.001, 0.75],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow16:
				{
					baseStats: [1, 1, true, false],
					in: [
						["DistilledFire", 0.04, 0.6],
						["Gemstone", 0, 0.75],
					],
					out: [
						["Gemstone", 0.001, 0.80],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow17:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Force", 0.04, 0.6],
						["Gemstone", 0, 0.80],
					],
					out: [
						["Gemstone", 0.001, 0.85],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow18:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Space", 0.04, 0.6],
						["Gemstone", 0, 0.85],
					],
					out: [
						["Gemstone", 0.001, 0.90],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow19:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Pressure", 0.04, 0.6],
						["Gemstone", 0, 0.90],
					],
					out: [
						["Gemstone", 0.001, 0.95],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow20:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Acid", 0.002, 0.6],
						["Gemstone", 0, 0.95],
					],
					out: [
						["Gemstone", 0.001, 1.0],
					],
					lock: ["Acid", 0.1],
				},
			}
		},
		machineRandomGem:
		{
			baseStats: [600, 775],
			recipes:
			{
				gemBreak1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Gemstone", 1, 1]
					],
					out: [
						["Quartz", 1, 326],
						["Emerald", 0, 77],
						["Sapphire", 0, 77],
						["Topaz", 0, 77],
						["Ruby", 0, 77],
					],
					lock: ["Gemstone", 1],
				},
				gemRemove1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Gemstone", 1, 1],
						["PureGolemEarth", 0, 1],
						["PureGolemWater", 0, 1],
						["PureGolemAir", 0, 1],
						["PureGolemFire", 0, 1],
					],
					out: [],
					lock: ["Gemstone", 1, "PureGolemEarth", 1, "PureGolemWater", 1, "PureGolemAir", 1, "PureGolemFire", 1],
				},
			}
		},
		machineQuartz:
		{
			baseStats: [675, 675, "Quartz"],
			recipes:
			{}
		},
		machineEmerald:
		{
			baseStats: [500, 675, "Emerald"],
			recipes:
			{}
		},
		machineSapphire:
		{
			baseStats: [500, 575, "Sapphire"],
			recipes:
			{}
		},
		machineTopaz:
		{
			baseStats: [575, 500, "Topaz"],
			recipes:
			{}
		},
		machineRuby:
		{
			baseStats: [675, 500, "Ruby"],
			recipes:
			{}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
		elementalDisplayType["Topaz"] = "";
		elementalDisplayType["Sapphire"] = "";
		elementalDisplayType["Emerald"] = "";
		elementalDisplayType["Ruby"] = "";
		elementalDisplayType["Quartz"] = "";
	},
	decay: function ()
	{
		for (var i = 0; i < machineData.machineRandomGem.recipes[0].outputs.length; i++)
		{
			machineData.machineRandomGem.recipes[0].outputs[i].ratio = 0;
		}
		var r = Math.trunc(Math.max(20, Math.random() * 25) - 20);
		machineData.machineRandomGem.recipes[0].outputs[r].ratio = 1;
	},
};
var pureCircle = {
	elements: ["PureEarth", "PureWater", "PureAir", "PureFire", "SterileGlass", "CompressionCrystal", "PerfectedOrb", "PureGolemEarth", "PureGolemWater", "PureGolemAir", "PureGolemFire", "Mystery"],
	machines:
	{
		machinePerfectedComponents:
		{
			baseStats: [-525, 525, ["SterileGlass", "CompressionCrystal"]],
			recipes:
			{
				sterileGlassProduction1:
				{
					baseStats: [1, 0.2, true, true],
					in: [
						["Glass", 4, 0.5],
						["Plastic", 0.08, 0.5],
						["Silicon", 0.2, 0.5],
						["Silver", 2, 2],
						["Knowledge", 1, 36],
						["Pyro", 0, 6],
						["Vortex", 0, 4],
					],
					out: [
						["SterileGlass", 1, 108],
					],
					lock: ["Silicon", 1],
				},
				compressionCrystalProduction1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["SterileGlass", 0.03, 0.5],
						["FoldedSpatial", 2, 0.5],
						["Spatial", 1000, 140],
						["Tin", 8, 2],
						["Pressure", 2, 7.5],
						["Knowledge", 8, 36],
						["Blaze", 0, 10],
						["Blast", 0, 10],
						["Gale", 0, 9],
						["Cryospire", 0, 9],
					],
					out: [
						["CompressionCrystal", 1, 4.2],
					],
					lock: ["SterileGlass", 1],
				},
			}
		},
		machinePerfectedOrb:
		{
			baseStats: [-600, 600, "PerfectedOrb"],
			recipes:
			{
				perfectedOrbProduction1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["SterileGlass", 4, 4],
						["CompressionCrystal", 1, 1],
						["Emerald", 5, 5],
						["Sapphire", 5, 5],
						["Topaz", 5, 5],
						["Ruby", 5, 5],
					],
					out: [
						["PerfectedOrb", 1, 4],
					],
					lock: ["CompressionCrystal", 1],
				},
			}
		},
		machinePureMixer:
		{
			baseStats: [-675, 675],
			recipes:
			{
				pureEarthProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["DistilledEarth", 1, 0.1],
						["PureEssenceEarth", 1, 1.2],
					],
					out: [
						["PureEarth", 4, 1.2, 4.4, ["Clay", 1, "Plastic", 1, "Silicon", 1]],
					],
					lock: ["Aluminum", 1e3],
				},
				pureWaterProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["DistilledWater", 1, 0.1],
						["PureEssenceWater", 1, 1.2],
					],
					out: [
						["PureWater", 1, 1.2, 4.4, ["Clay", 1, "Plastic", 1, "Silicon", 1]],
					],
					lock: ["Aluminum", 1e3],
				},
				pureAirProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["DistilledAir", 1, 0.1],
						["PureEssenceAir", 1, 1.2],
					],
					out: [
						["PureAir", 3, 1.2, 4.4, ["Clay", 1, "Plastic", 1, "Silicon", 1]],
					],
					lock: ["Aluminum", 1e3],
				},
				pureFireProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["DistilledFire", 1, 0.1],
						["PureEssenceFire", 1, 1.2],
					],
					out: [
						["PureFire", 6, 1.2, 4.4, ["Clay", 1, "Plastic", 1, "Silicon", 1]],
					],
					lock: ["Aluminum", 1e3],
				},
			}
		},
		machinePureEarth:
		{
			baseStats: [-550, 900, "PureEarth"],
			recipes:
			{
				earthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["PureEarth", 1, 1.2],
					],
					lock: ["Mystery", 1e99],
				},
			}
		},
		machinePureWater:
		{
			baseStats: [-725, 875, "PureWater"],
			recipes:
			{
				earthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["PureWater", 1, 1.2],
					],
					lock: ["Mystery", 1e99],
				},
			}
		},
		machinePureAir:
		{
			baseStats: [-900, 550, "PureAir"],
			recipes:
			{
				earthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["PureAir", 1, 1.2],
					],
					lock: ["Mystery", 1e99],
				},
			}
		},
		machinePureFire:
		{
			baseStats: [-875, 725, "PureFire"],
			recipes:
			{
				earthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["PureFire", 1, 1.2],
					],
					lock: ["Mystery", 1e99],
				},
			}
		},
		machinePureGolemEarth:
		{
			baseStats: [-550, 975, "PureGolemEarth"],
			recipes:
			{
				pureGolemEarthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["PerfectedOrb", 1, 1],
						["PureEarth", 100, 100],
					],
					out: [
						["PureGolemEarth", 1, 1],
					],
					lock: ["SterileGlass", 21],
				},
			}
		},
		machinePureGolemWater:
		{
			baseStats: [-775, 925, "PureGolemWater"],
			recipes:
			{
				pureGolemWaterStart1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["PerfectedOrb", 1, 1],
						["PureWater", 100, 100],
					],
					out: [
						["PureGolemWater", 1, 1],
					],
					lock: ["SterileGlass", 21],
				},
			}
		},
		machinePureGolemAir:
		{
			baseStats: [-975, 550, "PureGolemAir"],
			recipes:
			{
				pureGolemAirStart1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["PerfectedOrb", 1, 1],
						["PureAir", 100, 100],
					],
					out: [
						["PureGolemAir", 1, 1],
					],
					lock: ["SterileGlass", 21],
				},
			}
		},
		machinePureGolemFire:
		{
			baseStats: [-925, 775, "PureGolemFire"],
			recipes:
			{
				pureGolemFireStart1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["PerfectedOrb", 1, 1],
						["PureFire", 100, 100],
					],
					out: [
						["PureGolemFire", 1, 1],
					],
					lock: ["SterileGlass", 21],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
};
