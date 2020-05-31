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
					upgrade: ["Skilled Conjure", "Knowledge", 400],
				},
				"Skilled Conjure":
				{
					baseStats: [1, 1, false, true],
					in: [
						["Mana", 0.001, 1],
					],
					out: [
						["Air", 0.003, 1e3]
					],
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
					upgrade: ["Skilled Conjure", "Knowledge", 400],
				},
				"Skilled Conjure":
				{
					baseStats: [1, 1, false, true],
					in: [
						["Mana", 0.001, 1],
					],
					out: [
						["Earth", 0.003, 1e3]
					],
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
					upgrade: ["Skilled Conjure", "Knowledge", 400],
				},
				"Skilled Conjure":
				{
					baseStats: [1, 1, false, true],
					in: [
						["Mana", 0.001, 1],
					],
					out: [
						["Water", 0.003, 1e3]
					],
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
					upgrade: ["Skilled Conjure", "Knowledge", 400],
				},
				"Skilled Conjure":
				{
					baseStats: [1, 1, false, true],
					in: [
						["Mana", 0.001, 1],
					],
					out: [
						["Fire", 0.003, 1e3]
					],
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
			{
				"Forbidden Chant":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Mana", 1, 100],
					],
					out: [
						["Magma", 0.003, 20]
					],
					lock: ["FKnowledge", 5],
				},
			}
		},
		'Ice':
		{
			baseStats: [50, 170, "Ice"],
			recipes:
			{
				"Forbidden Chant":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Mana", 1, 100],
					],
					out: [
						["Ice", 0.003, 20]
					],
					lock: ["FKnowledge", 3],
				},
			}
		},
		'Void':
		{
			baseStats: [0, 255, "Void"],
			recipes:
			{
				"Forbidden Chant":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Mana", 1, 100],
					],
					out: [
						["Void", 0.003, 20]
					],
					lock: ["FKnowledge", 8],
				},
			}
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
					lock: ["Stamina", 11],
				},
				"Influential Work":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Influence", 0, 100],
						["Stamina", 0.1, 20]
					],
					out: [
						["Currency", 0.002, 1000],
						//["Repute", 0.001, 100]
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
					upgrade: ["Funnel Steam", "FKnowledge", 20],
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
					upgrade:["Terraform land", "TerraProgress", 1, "Mana Charge", 1]
				},
				"Terraform land":
				{
					baseStats: [1, 1, false, true],
					in: [
						["Ritual", 1, 5],
					],
					out: [
						["TerraProgress", 0.005, 1],
						["PlaceOfPower", 0.005, 1],
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
						["Mana Charge", 40, 1e5],
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
				},
				"Burnout":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Wood", 100, 100],
						["Fire", 100, 100]
					],
					out: [
						["Ash", 10, 1000]
					],
					lock: ["Fire", 1e4],
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
			baseStats: [600,175,"Cycle"],
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
						["Soul", 0, 100],
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
					baseStats: [1, 1, true, true],
					in: [
						["Ritual", 2, 200],
					],
					out: [
						["Shattered Glass", 1, 200],
					],
					lock: ["Ritual", 200],
					alwayson: true,
				},
				"Ritual of Power":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Ritual", 20, 300],
					],
					out: [
						["Power", 1, 1000],
					],
					lock: ["Influence", 1, "Ritual", 300],
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
						["Lust1", 1, 1],
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
				"Ritual of Amnesia":
				{
					baseStats: [1, 1, true, true],
					in: [
						["RitualB", 0, 100],
						["Mind", 1, 1e3],
					],
					out: [
						["Body", 0.501, -6e3],
						["Soul", 0.501, -6e3],
					],
					lock: ["RitualB", 10],
				},
				"Ritual of Blood":
				{
					baseStats: [1, 1, true, true],
					in: [
						["RitualB", 0, 100],
						["Body", 1, 600],
					],
					out: [
						["Mind", 0.501, -6e3],
						["Soul", 0.501, -6e3],
					],
					lock: ["RitualB", 15],
				},
				"Ritual of Fear":
				{
					baseStats: [1, 1, true, true],
					in: [
						["RitualB", 0, 100],
						["Soul", 1, 600],
					],
					out: [
						["Body", 0.501, -6e3],
						["Mind", 0.501, -6e3],
					],
					lock: ["RitualB", 20],
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
					lock: ["FKnowledge", 0.1],
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
					lock: ["FKnowledge", 0.1],
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
					lock: ["FKnowledge", 0.5],
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
					lock: ["FKnowledge", 0.1],
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
					lock: ["FKnowledge", 0.1],
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
					lock: ["FKnowledge", 0.1],
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
					lock: ["FKnowledge", 0.1],
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
						["Empty Crystal", 1, 2],
					],
					out: [
						["Currency", 0.4, -50],
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
						["Body", 1, 2e4],
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
						["Mind", 1, 2e4],
						["Knowledge", 0.001, 1],
					],
					lock: ["Mind", 1],
				},
				"Research Utilization":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Knowledge", 100, 500],
					],
					out: [
						["Time", 3000, 1e20],
					],
					lock: ["Knowledge", 500],
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
						["Mind", 100, 2e4],
						["FKnowledge", 0.001, 1],
					],
					lock: ["Revelation", 0.001],
				},
				"Research Utilization":
				{
					baseStats: [1, 1, true, false],
					in: [
						["FKnowledge", 1, 50],
					],
					out: [
						["Time", 5000, 1e20],
					],
					lock: ["FKnowledge", 50],
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
						["Soul", 10, 2e4],
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

var lustCircle = {
	stepsOfLust: 5,
	elements: ["Revelation", "Craving", "Goat's Sin", "Lust1", "Lust2", "Lust3", "Lust4", "Lust5"],
	machines:
	{
		'Revelation':
		{
			baseStats: [0, -700, "Revelation"],
			recipes:
			{
				"???":
				{
					baseStats: [1, 1, true, false],
					in: [ ],
					out: [ 
						["Revelation", 0.001, 1]
					],
					lock: ["Revelation",2],
					upgrade: ["Mystery unravels", "Revelation", 1],
				},
				"Mystery unravels":
				{
					baseStats: [1, 1, false, false],
					in: [
						["Revelation", 0, 3]
					],
					out: [
						["Void", 1, 20]
					],
				},
			}
		},
		'Craving':
		{
			baseStats: [300, 650, "Craving"],
			recipes:
			{
				"Craving Distracts":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Craving", 1, 500],
						["Mana", 0, -100],
					],
					out: [
						["Craving", 1, -2e4],
						["Mana", -0.01, -1e3],
					],
					lock: ["Craving",1e99],
					alwayson: true,
				},
				"Repel Craving":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Power", 1, 100],
						["Craving", 40, 0.001],
					],
					out: [
					],
					lock: ["Craving",1000],
				},
			}
		},
		'Goat\'s Sin':
		{
			baseStats: [400, 650, "Goat's Sin"],
			recipes:
			{
				"Goat's Sin Flaw":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Goat's Sin", 1, 1],
						["Home", 0, 0.2],
					],
					out: [
						["Goat's Sin", 1, -1e4],
						["Home", -0.021, 1e3],
					],
					lock: ["Goat's Sin",1e99],
					alwayson: true,
				},
			}
		},
		'Lust: Step 1' : {
			baseStats: [250, 550, "Lust1"],
			recipes:
			{
				"Lust Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust1", 1, 0.001],
					],
					out: [
						["Lust1", 1.1, 4000],
					],
					lock: ["Lust1",1e99],
					alwayson: true,
				},
				"Lust Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust1", 3999, 4000],
					],
					out: [
						["Lust2", 1, 0.9],
					],
					lock: ["Lust1",1e99],
					alwayson: true,
				},
				"Lust Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust1", 99, 100],
						["Lust2", 0, 1],
					],
					out: [
						["Craving", 20, 1e4],
					],
					lock: ["Lust1",1e99],
					alwayson: true,
				},
			}
		},
		'Lust: Step 2' : {
			baseStats: [350, 550, "Lust2"],
			recipes:
			{
				"Lust Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust2", 1, 0.001],
					],
					out: [
						["Lust2", 1.05, 4000],
					],
					lock: ["Lust2",1e99],
					alwayson: true,
				},
				"Lust Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust2", 3999, 4000],
					],
					out: [
						["Lust3", 1, 0.9],
					],
					lock: ["Lust2",1e99],
					alwayson: true,
				},
				"Lust Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust2", 99, 100],
						["Lust3", 0, 1],
					],
					out: [
						["Craving", 60, 1e4],
					],
					lock: ["Lust2",1e99],
					alwayson: true,
				},
			}
		},
		'Lust: Step 3' : {
			baseStats: [450, 550, "Lust3"],
			recipes:
			{
				"Lust Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust3", 1, 0.001],
					],
					out: [
						["Lust3", 1.025, 4000],
					],
					lock: ["Lust3",1e99],
					alwayson: true,
				},
				"Lust Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust3", 3999, 4000],
					],
					out: [
						["Lust4", 1, 0.9],
					],
					lock: ["Lust3",1e99],
					alwayson: true,
				},
				"Lust Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust3", 99, 100],
						["Lust4", 0, 1],
					],
					out: [
						["Craving", 160, 1e4],
					],
					lock: ["Lust3",1e99],
					alwayson: true,
				},
			}
		},
		'Lust: Step 4' : {
			baseStats: [550, 550, "Lust4"],
			recipes:
			{
				"Lust Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust4", 1, 0.001],
					],
					out: [
						["Lust4", 1.0125, 4000],
					],
					lock: ["Lust4",1e99],
					alwayson: true,
				},
				"Lust Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust4", 3999, 4000],
					],
					out: [
						["Lust5", 1, 0.9],
					],
					lock: ["Lust4",1e99],
					alwayson: true,
				},
				"Lust Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust4", 99, 100],
						["Lust5", 0, 1],
					],
					out: [
						["Craving", 480, 1e4],
					],
					lock: ["Lust4",1e99],
					alwayson: true,
				},
			}
		},
		'Lust: Step 5' : {
			baseStats: [650, 550, "Lust5"],
			recipes:
			{
				"Lust Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust5", 1, 0.001],
					],
					out: [
						["Lust5", 1.006, 100],
					],
					lock: ["Lust5",1e99],
					alwayson: true,
				},
				"Lust Blessing":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Lust5", 99, 100],
					],
					out: [
						["Revelation", 1, -5],
						["Goat's Sin", 0.5, -5],
					],
					lock: ["Lust5",1e99],
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
		for (var i=1;i<=this.stepsOfLust;i++)
		{
			machineData["Lust: Step "+i].recipes[0].inputs[0].effectReference.maxR*=3;
		}
	},
	cooldown : 5,
	decay: function ()
	{	
		if(this.cooldown-->0) return;
		this.cooldown = 60;
		for (var i=1;i<=this.stepsOfLust;i++)
		{
			var recs = machineData["Lust: Step "+i].recipes;
			if(!recs[0].unlocked)
			{
				if(data.oElements["Lust"+i].amount < 0.1) continue;
				for (var recIndex in recs)
				{
					recs[recIndex].region.paymentSuccess();
				}
			}
		}
		var rec = machineData['Craving'].recipes[0];
		if(!rec.unlocked)
		{
			if(data.oElements["Craving"].amount > 0.1)
				rec.region.paymentSuccess();
		}
		var rec = machineData['Goat\'s Sin'].recipes[0];
		if(!rec.unlocked)
		{
			if(data.oElements["Goat's Sin"].amount > 0.1)
				rec.region.paymentSuccess();
		}
	}
};

var spireCircle = {
	spireLevels: 5,
	elements: ["Spire Foundation","Shattered Glass","Portal Frame","Influence","Portal","PortalEarth","PortalAir","PortalWater","PortalFire","Spirits","Repute",
		"Spire Pebble","Spire Nugget","Spire Chip",
		"Spire Cube","Spire Lump","Spire Slice",
		"Spire Block","Spire Knob","Spire Tile",
		"Spire Slab","Spire Mass","Spire Surface",
		"Spire Step", "Spire Floor",
		"Spire Doorman","Spire Steward","Spire Caretaker","Spire Warden","Spire Overseer","Spire Orb",
		"Spire Day", "Spire Night",
		"Warehouse","Gate","Guest Room","Workshop",
		"Stable","Academy",
		],
	machines:
	{
		'Shattered Glass' : {
			baseStats: [0, 400, "Shattered Glass"],
			recipes:
			{
				
			}
		},
		'Spire Foundation' : {
			baseStats: [0, 500, "Spire Foundation"],
			recipes:
			{
				"Lay down foundation":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Shattered Glass", 1, 1],
					],
					out: [
						["Spire Foundation", 0.1, 10],
					],
					lock: ["FKnowledge",0.01],
					alwayson: true,
				},
				"Spire's Blessing":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal Frame", 0, 1],
					],
					out: [
						["Greed1", 0.1, 1],
					],
					lock: ["Spire Foundation", 1e99],
					alwayson: true,
				},
			}
		},
		'Portal Frame' : {
			baseStats: [-100, 450, "Portal Frame"],
			recipes:
			{
				"Build Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Spire Foundation", 0, 10],
						["Shattered Glass", 0.1, 1],
						["Brick", 0.1, 8],
						["Wood", 10, 50],
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
			baseStats: [100, 450, "Influence"],
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
						["Influence", 0.5, 1e4],
					],
					lock: ["Portal Frame",0.001],
				},
			}
		},
		'Portal' : {
			baseStats: [-100, 550, "Portal"],
			recipes:
			{
			}
		},
		'PortalEarth' : {
			baseStats: [50, 600, "PortalEarth"],
			recipes:
			{
				"Open Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal Frame", 0, 1],
						["Power", 20, 80],
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
						["Earth", 1e4, 1e4],
					],
					out: [
					],
					lock: ["Earth",1e4],
				},
				"Absorb Element":
				{
					baseStats: [10, 1, true, true],
					in: [
						["PortalEarth", 1, 0.1],
					],
					out: [
						["PortalEarth", 1, -5],
						["Earth", 2e3, 4e4],
					],
					lock: ["Influence",0.01],
					alwayson: true
				},
				"Open the flood gate":
				{
					baseStats: [10, 1, true, true],
					in: [
						["PortalEarth", 0, 0.1],
						["Gate", 10, 0.1],
					],
					out: [
						["Gate", 10, -1e10],
						["Earth", 2e3, 4e4],
					],
					lock: ["Gate",1],
					alwayson: true
				},
			}
		},
		'PortalWater' : {
			baseStats: [-50, 600, "PortalWater"],
			recipes:
			{
				"Open Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal Frame", 0, 1],
						["Power", 20, 80],
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
						["Water", 1e4, 1e4],
					],
					out: [
					],
					lock: ["Water",1e4],
				},
				"Absorb Element":
				{
					baseStats: [10, 1, true, true],
					in: [
						["PortalWater", 1, 0.1],
					],
					out: [
						["PortalWater", 1, -5],
						["Water", 2e3, 4e4],
					],
					lock: ["Influence",0.01],
					alwayson: true
				},
				"Open the flood gate":
				{
					baseStats: [10, 1, true, true],
					in: [
						["PortalWater", 0, 0.1],
						["Gate", 10, 0.1],
					],
					out: [
						["Gate", 10, -1e10],
						["Water", 2e3, 4e4],
					],
					lock: ["Gate",1],
					alwayson: true
				},
			}
		},
		'PortalAir' : {
			baseStats: [150, 600, "PortalAir"],
			recipes:
			{
				"Open Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal Frame", 0, 1],
						["Power", 20, 80],
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
						["Air", 1e4, 1e4],
					],
					out: [
					],
					lock: ["Air",1e4],
				},
				"Absorb Element":
				{
					baseStats: [10, 1, true, true],
					in: [
						["PortalAir", 1, 0.1],
					],
					out: [
						["PortalAir", 1, -5],
						["Air", 2e3, 4e4],
					],
					lock: ["Influence",0.01],
					alwayson: true
				},
				"Open the flood gate":
				{
					baseStats: [10, 1, true, true],
					in: [
						["PortalAir", 0, 0.1],
						["Gate", 10, 0.1],
					],
					out: [
						["Gate", 10, -1e10],
						["Air", 2e3, 4e4],
					],
					lock: ["Gate",1],
					alwayson: true
				},
			}
		},
		'PortalFire' : {
			baseStats: [-150, 600, "PortalFire"],
			recipes:
			{
				"Open Portal":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Portal Frame", 0, 1],
						["Power", 20, 80],
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
						["Fire", 1e4, 1e4],
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
					lock: ["Influence",0.01],
					alwayson: true
				},
				"Open the flood gate":
				{
					baseStats: [10, 1, true, true],
					in: [
						["PortalFire", 0, 0.1],
						["Gate", 10, 0.1],
					],
					out: [
						["Gate", 10, -1e10],
						["Fire", 2e3, 4e4],
					],
					lock: ["Gate",1],
					alwayson: true
				},
			}
		},
		'Spirits' : {
			baseStats: [100, 550, "Spirits"],
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
		'Monumental Work : Spire Pebble' : {
			baseStats: [0, 700, "Spire Pebble"],
			recipes:
			{
				"Make Spire Pebble":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Mud", 10, 20],
						["Spirits", 1, 5],
					],
					out: [
						["Spirits", 1, -2e3],
						["Spire Pebble", 5, 1e3],
					],
					lock: ["Influence", 100, "Mud", 200],
				},
			}
		},
		'Monumental Work : Spire Nugget' : {
			baseStats: [-100, 700, "Spire Nugget"],
			recipes:
			{
				"Make Spire Nugget":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Steam", 10, 20],
						["Spirits", 1, 5],
					],
					out: [
						["Spirits", 1, -2e3],
						["Spire Nugget", 5, 1e3],
					],
					lock: ["Influence", 100, "Steam",200],
				},
			}
		},
		'Monumental Work : Spire Chip' : {
			baseStats: [100, 700, "Spire Chip"],
			recipes:
			{
				"Make Spire Chip":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Sand", 10, 20],
						["Spirits", 1, 5],
					],
					out: [
						["Spirits", 1, -2e3],
						["Spire Chip", 5, 1e3],
					],
					lock: ["Influence", 100, "Sand",200],
				},
			}
		},
		
		'Monumental Work : Spire Cube' : {
			baseStats: [0, 900, "Spire Cube"],
			recipes:
			{
				"Make Spire Cube":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Pebble", 8, 20],
						["Spire Nugget", 1, 20],
						["Spire Chip", 1, 20],
						
						["Spirits", 2, 5],
					],
					out: [
						["Spirits", 2, -2e3],
						["Spire Cube", 5, 1e3],
					],
					lock: ["Spire Pebble", 10, "Spire Doorman", 1],
				},
			}
		},
		'Monumental Work : Spire Lump' : {
			baseStats: [-100, 900, "Spire Lump"],
			recipes:
			{
				"Make Spire Lump":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Pebble", 1, 20],
						["Spire Nugget", 8, 20],
						["Spire Chip", 1, 20],
						["Spirits", 2, 5],
					],
					out: [
						["Spirits", 2, -2e3],
						["Spire Lump", 5, 1e3],
					],
					lock: ["Spire Nugget", 10, "Spire Doorman", 1],
				},
			}
		},
		'Monumental Work : Spire Slice' : {
			baseStats: [100, 900, "Spire Slice"],
			recipes:
			{
				"Make Spire Slice":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Pebble", 1, 20],
						["Spire Nugget", 1, 20],
						["Spire Chip", 8, 20],
						["Spirits", 2, 5],
					],
					out: [
						["Spirits", 2, -2e3],
						["Spire Slice", 5, 1e3],
					],
					lock: ["Spire Chip", 10, "Spire Doorman", 1],
				},
			}
		},
		
		'Monumental Work : Spire Block' : {
			baseStats: [0, 1100, "Spire Block"],
			recipes:
			{
				"Make Spire Block":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Cube", 8, 20],
						["Spire Lump", 1, 20],
						["Spire Slice", 1, 20],
						
						["Spirits", 4, 5],
					],
					out: [
						["Spirits", 4, -2e3],
						["Spire Block", 5, 1e3],
					],
					lock: ["Spire Cube", 10, "Spire Steward",1],
				},
			}
		},
		'Monumental Work : Spire Knob' : {
			baseStats: [-100, 1100, "Spire Knob"],
			recipes:
			{
				"Make Spire Knob":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Cube", 1, 20],
						["Spire Lump", 8, 20],
						["Spire Slice", 1, 20],
						["Spirits", 4, 5],
					],
					out: [
						["Spirits", 4, -2e3],
						["Spire Knob", 5, 1e3],
					],
					lock: ["Spire Lump", 10, "Spire Steward",1],
				},
			}
		},
		'Monumental Work : Spire Tile' : {
			baseStats: [100, 1100, "Spire Tile"],
			recipes:
			{
				"Make Spire Tile":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Cube", 1, 20],
						["Spire Lump", 1, 20],
						["Spire Slice", 8, 20],
						["Spirits", 4, 5],
					],
					out: [
						["Spirits", 4, -2e3],
						["Spire Tile", 5, 1e3],
					],
					lock: ["Spire Slice", 10, "Spire Steward",1],
				},
			}
		},
		
		'Monumental Work : Spire Slab' : {
			baseStats: [0, 1300, "Spire Slab"],
			recipes:
			{
				"Make Spire Slab":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Block", 8, 20],
						["Spire Knob", 1, 20],
						["Spire Tile", 1, 20],
						
						["Spirits", 8, 5],
					],
					out: [
						["Spirits", 8, -2e3],
						["Spire Slab", 5, 1e3],
					],
					lock: ["Spire Block", 10, "Spire Caretaker",1],
				},
			}
		},
		'Monumental Work : Spire Mass' : {
			baseStats: [-100, 1300, "Spire Mass"],
			recipes:
			{
				"Make Spire Mass":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Block", 1, 20],
						["Spire Knob", 8, 20],
						["Spire Tile", 1, 20],
						["Spirits", 8, 5],
					],
					out: [
						["Spirits", 8, -2e3],
						["Spire Mass", 5, 1e3],
					],
					lock: ["Spire Knob", 10, "Spire Caretaker",1],
				},
			}
		},
		'Monumental Work : Spire Surface' : {
			baseStats: [100, 1300, "Spire Surface"],
			recipes:
			{
				"Make Spire Surface":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Block", 1, 20],
						["Spire Knob", 1, 20],
						["Spire Tile", 8, 20],
						["Spirits", 8, 5],
					],
					out: [
						["Spirits", 8, -2e3],
						["Spire Surface", 5, 1e3],
					],
					lock: ["Spire Tile", 10, "Spire Caretaker",1],
				},
			}
		},
	
		'Monumental Work : Spire Step' : {
			baseStats: [-200, 800, "Spire Step"],
			recipes:
			{
				"Craft Spire Step":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Pebble", 10, 20],
						["Spire Nugget", 10, 20],
						["Spire Chip", 10, 20],
						["Stamina", 20, 10],
					],
					out: [
						["Spire Step", 1, 100],
					],
					lock: ["Spire Pebble", 10, "Spire Nugget", 10, "Spire Chip", 10],
				},
				"Transform Spire Step":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Cube", 10, 20],
						["Spire Lump", 10, 20],
						["Spire Slice", 10, 20],
						["Mana Charge", 20, 10],
					],
					out: [
						["Spire Step", 6400, 320000],
					],
					lock: ["Spire Cube", 10, "Spire Lump", 10, "Spire Slice", 10],
				},
				"Conjure Spire Step":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Block", 10, 20],
						["Spire Knob", 10, 20],
						["Spire Tile", 10, 20],
						["Mana Charge", 40, 10],
					],
					out: [
						["Spire Step", 12000000, 600000000],
					],
					lock: ["Spire Block", 10, "Spire Knob", 10, "Spire Tile", 10],
				},
			}
		},
		'Monumental Work : Spire Floor' : {
			baseStats: [-300, 800, "Spire Floor"],
			recipes:
			{
				"Proceed to the next Spire Floor":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Spire Step", 1, 20],
					],
					out: [
						["Spire Floor", 1, 100],
					],
					lock: ["Spire Step", 0.1],
				},
				"Secret of the Spire : Door":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Spire Floor", 0, 5],
					],
					out: [
						["Spire Doorman", 0.001, 1],
					],
					lock: ["Spire Step", 1],
				},
				"Secret of the Spire : Room":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Spire Floor", 0, 16],
					],
					out: [
						["Spire Steward", 0.001, 1],
					],
					lock: ["Spire Doorman", 1, "Spire Step", 1],
				},
				"Secret of the Spire : Infirmary":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Spire Floor", 0, 27],
					],
					out: [
						["Spire Caretaker", 0.001, 1],
					],
					lock: ["Spire Steward", 1,"Spire Step", 1],
				},
				"Secret of the Spire : Jail":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Spire Floor", 0, 38],
					],
					out: [
						["Spire Warden", 0.001, 1],
					],
					lock: ["Spire Caretaker", 1,"Spire Step", 1],
				},
				"Secret of the Spire : Tower":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Spire Floor", 0, 49],
					],
					out: [
						["Spire Overseer", 0.001, 1],
					],
					lock: ["Spire Warden", 1,"Spire Step", 1],
				},
				"Secret of the Spire : Chamber":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Spire Floor", 0, 60],
					],
					out: [
						["Spire Orb", 0.001, 1],
					],
					lock: ["Spire Overseer", 1,"Spire Step", 1],
				},
			}
		},
	
		'Elemental Doorman' : {
			baseStats: [-400, 800, "Spire Doorman"],
			recipes: {
				"Doorman's Blessing":
				{
					baseStats: [1, 1, true, false],
					in: [ ],
					out: [
						["Sloth1", 0.1, 1],
					],
					lock: ["Spire Doorman", 1e99],
					alwayson: true,
				},
			}
		},
		'Elemental Gate' : {
			baseStats: [-500, 800, "Gate"],
			recipes:
			{
				"Improve Portal output rate":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Doorman", 1, 0.5],
					],
					out: [
						["Gate", 1, 1e10],
					],
					lock: ["Spire Doorman", 1],
				},
			}
		},
		'Elemental Warehouse' : {
			baseStats: [-600, 800, "Warehouse"],
			recipes:
			{
				"Improve Portal output capacity":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Doorman", 1, 0.5],
					],
					out: [
						["Warehouse", 1, 1e10],
					],
					lock: ["Spire Doorman", 1],
				},
			}
		},
		'Elemental Steward' : {
			baseStats: [-400, 900, "Spire Steward"],
			recipes: {}
		},	
		'Elemental Caretaker' : {
			baseStats: [-400, 1000, "Spire Caretaker"],
			recipes: {}
		},
		'Elemental Warden' : {
			baseStats: [-400, 1100, "Spire Warden"],
			recipes: {
				"End of beta!":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Goat's Sin", 0.001, 0.002],
					],
					out: [
					],
					lock: ["Spire Warden", 1],
				},
				"Thanks for playing!":
				{
					baseStats: [1, 1, true, false],
					in: [	
						["Toad's Sin", 0.001, 0.002],	
					],
					out: [
					],
					lock: ["Spire Warden", 1],
				},
				"Join game's discord \\('_' )/":
				{
					baseStats: [1, 1, true, false],
					in: [	
						["Snail's Sin", 0.001, 0.002],	
					],
					out: [
					],
					lock: ["Spire Warden", 1],
				},
			}
		},
		'Elemental Overseer' : {
			baseStats: [-400, 1200, "Spire Overseer"],
			recipes: {}
		},	
		'Elemental Orb' : {
			baseStats: [-400, 1300, "Spire Orb"],
			recipes: {}
		},	
		'Elemental Guest Room' : {
			baseStats: [-500, 900, "Guest Room"],
			recipes:
			{
				"Improve Spirits output":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Steward", 1, 0.5],
					],
					out: [
						["Guest Room", 1, 1e10],
					],
					lock: ["Spire Steward", 1],
				},
			}
		},
		'Monumental Workshop' : {
			baseStats: [-600, 900, "Workshop"],
			recipes:
			{
				"Decrease Floor cost scaling":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Steward", 1, 0.5],
					],
					out: [
						["Workshop", 1, 1e10],
					],
					lock: ["Spire Steward", 1],
				},
			}
		},	
		'Elemental Stable' : {
			baseStats: [-500, 1000, "Stable"],
			recipes:
			{
				"Multiple portals at 9,99,999":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Caretaker", 1, 0.5],
					],
					out: [
						["Stable", 1, 1e3],
					],
					lock: ["Spire Caretaker", 1],
				},
			}
		},
		'Hallucination Academy' : {
			baseStats: [-600, 1000, "Academy"],
			recipes:
			{
				"Floor helpers training speed+":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Spire Caretaker", 1, 0.5],
					],
					out: [
						["Academy", 1, 1e10],
					],
					lock: ["Spire Caretaker", 1],
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
	
	portalMachines: ["PortalEarth","PortalWater","PortalAir","PortalFire"],
	
	decay: function ()
	{
		var amount = 1+data.oElements.Spirits.amount;
		var input = machineData["Spirits"].recipes[0].inputs[0];
		input.ratio = 2 + amount * amount;
		input.min = -2 + 2*input.ratio;
		
		amount = data.oElements["Spire Floor"].amount;
		var floorMachineRecipes = machineData['Monumental Work : Spire Floor'].recipes;
		input = floorMachineRecipes[0].inputs[0];
		input.ratio = Math.pow(2 - Math.log10(1+data.oElements.Workshop.amount)*0.08,amount);
		input.min = input.ratio;
		
		var warehouseMult = 4e4 * (1 + data.oElements.Warehouse.amount/10);
		var stableMult = Math.floor(1+Math.log10(1+data.oElements.Stable.amount));
		for(var machId of this.portalMachines) {
			machineData[machId].recipes[0].outputs[0].max = stableMult;
			machineData[machId].recipes[3].outputs[1].max = warehouseMult;
		}
		machineData.Spirits.recipes[1].outputs[1].ratio = 0.1 * (1 + data.oElements["Guest Room"].amount/20);
		
		var academyMultiplier = 1 + data.oElements.Academy.amount/60;
		for(var i=1;i<floorMachineRecipes.length;i++) 
		{
			floorMachineRecipes[i].outputs[0].ratio = 0.001 * academyMultiplier;
			floorMachineRecipes[i].outputs[0].max = academyMultiplier;
		}
	},
};

var greedCircle = {
	stepsOfGreed: 5,
	elements: ["Avarice", "Toad's Sin", "Greed1", "Greed2", "Greed3", "Greed4", "Greed5"],
	machines:
	{
		'Avarice':
		{
			baseStats: [300, 850, "Avarice"],
			recipes:
			{
				"Repel Avarice":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Power", 1, 100],
						["Avarice", 40, 0.001],
					],
					out: [
					],
					lock: ["Avarice",1000],
				},
				"Avarice Consumes1":
				{
					baseStats: [10, 1, true, true],
					in: [
						["Wood", 1, -100],
						["Avarice", 10, 500],
					],
					out: [
						["Wood", -1, -1e5],
						["Avarice", 10, -2e4],
						["Currency", 1, 1e10],
					],
					lock: ["Avarice",1e99],
					alwayson: true,
				},
				"Avarice Consumes2":
				{
					baseStats: [10, 1, true, true],
					in: [
						["Impure Mud", 1, -100],
						["Avarice", 10, 500],
					],
					out: [
						["Impure Mud", -1, -1e5],
						["Avarice", 10, -2e4],
						["Currency", 1, 1e10],
					],
					lock: ["Avarice",1e99],
					alwayson: true,
				},
				"Avarice Consumes3":
				{
					baseStats: [10, 1, true, true],
					in: [
						["Wet Sand", 1, -100],
						["Avarice", 10, 500],
					],
					out: [
						["Wet Sand", -1, -1e5],
						["Avarice", 10, -2e4],
						["Currency", 1, 1e10],
					],
					lock: ["Avarice",1e99],
					alwayson: true,
				},
				"Avarice Consumes4":
				{
					baseStats: [10, 1, true, true],
					in: [
						["Clay", 1, -100],
						["Avarice", 10, 500],
					],
					out: [
						["Clay", -1, -1e5],
						["Avarice", 10, -2e4],
						["Currency", 1, 1e10],
					],
					lock: ["Avarice",1e99],
					alwayson: true,
				},
				"Avarice Consumes5":
				{
					baseStats: [10, 1, true, true],
					in: [
						["Muddy Water", 1, -100],
						["Avarice", 10, 500],
					],
					out: [
						["Muddy Water", -1, -1e5],
						["Avarice", 10, -2e4],
						["Currency", 1, 1e10],
					],
					lock: ["Avarice",1e99],
					alwayson: true,
				},
			}
		},
		'Toad\'s Sin':
		{
			baseStats: [400, 850, "Toad's Sin"],
			recipes:
			{
				"Toad's Sin Flaw":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Toad's Sin", 1, 1],
						["Currency", 0, 0.2],
					],
					out: [
						["Toad's Sin", 1, -1e4],
						["Currency", -0.09, 1e3],
					],
					lock: ["Goat's Sin",1e99],
					alwayson: true,
				},
			}
		},
		'Greed: Step 1' : {
			baseStats: [250, 750, "Greed1"],
			recipes:
			{
				"Greed Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed1", 1, 0.001],
					],
					out: [
						["Greed1", 1.2, 2000],
					],
					lock: ["Greed1",1e99],
					alwayson: true,
				},
				"Greed Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed1", 1999, 2000],
					],
					out: [
						["Greed2", 1, 0.9],
					],
					lock: ["Greed1",1e99],
					alwayson: true,
				},
				"Greed Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed1", 99, 100],
						["Greed2", 0, 1],
					],
					out: [
						["Avarice", 10, 1e4],
					],
					lock: ["Greed1",1e99],
					alwayson: true,
				},
			}
		},
		'Greed: Step 2' : {
			baseStats: [350, 750, "Greed2"],
			recipes:
			{
				"Greed Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed2", 1, 0.001],
					],
					out: [
						["Greed2", 1.1, 2000],
					],
					lock: ["Greed2",1e99],
					alwayson: true,
				},
				"Greed Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed2", 1999, 2000],
					],
					out: [
						["Greed3", 1, 0.9],
					],
					lock: ["Greed2",1e99],
					alwayson: true,
				},
				"Greed Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed2", 99, 100],
						["Greed3", 0, 1],
					],
					out: [
						["Avarice", 30, 1e4],
					],
					lock: ["Greed2",1e99],
					alwayson: true,
				},
			}
		},
		'Greed: Step 3' : {
			baseStats: [450, 750, "Greed3"],
			recipes:
			{
				"Greed Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed3", 1, 0.001],
					],
					out: [
						["Greed3", 1.05, 2000],
					],
					lock: ["Greed3",1e99],
					alwayson: true,
				},
				"Greed Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed3", 1999, 2000],
					],
					out: [
						["Greed4", 1, 0.9],
					],
					lock: ["Greed3",1e99],
					alwayson: true,
				},
				"Greed Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed3", 99, 100],
						["Greed4", 0, 1],
					],
					out: [
						["Avarice", 80, 1e4],
					],
					lock: ["Greed3",1e99],
					alwayson: true,
				},
			}
		},
		'Greed: Step 4' : {
			baseStats: [550, 750, "Greed4"],
			recipes:
			{
				"Greed Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed4", 1, 0.001],
					],
					out: [
						["Greed4", 1.025, 2000],
					],
					lock: ["Greed4",1e99],
					alwayson: true,
				},
				"Greed Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed4", 1999, 2000],
					],
					out: [
						["Greed5", 1, 0.9],
					],
					lock: ["Greed4",1e99],
					alwayson: true,
				},
				"Greed Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed4", 99, 100],
						["Greed5", 0, 1],
					],
					out: [
						["Avarice", 240, 1e4],
					],
					lock: ["Greed4",1e99],
					alwayson: true,
				},
			}
		},
		'Greed: Step 5' : {
			baseStats: [650, 750, "Greed5"],
			recipes:
			{
				"Greed Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed5", 1, 0.001],
					],
					out: [
						["Greed5", 1.012, 100],
					],
					lock: ["Greed5",1e99],
					alwayson: true,
				},
				"Greed Blessing":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Greed5", 99, 100],
					],
					out: [
						["Toad's Sin", 0.5, -5],
					],
					lock: ["Greed5",1e99],
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
		for (var i=1;i<=this.stepsOfGreed;i++)
		{
			machineData["Greed: Step "+i].recipes[0].inputs[0].effectReference.maxR*=3;
		}
	},
	cooldown : 5,
	greedables : ["Wood","Impure Mud", "Clay", "Muddy Water", "Wet Sand"],
	decay: function ()
	{	
		if(this.cooldown-->0) return;
		this.cooldown = 60;
		
		var avarice = 1-data.oElements.Avarice.amount/1e4;
		var recipes = machineData.Avarice.recipes;
		recipes[1].outputs[2].ratio = 0.03 * avarice * avarice * avarice * avarice;
		recipes[2].outputs[2].ratio = 0.03 * avarice * avarice * avarice * avarice;
		recipes[3].outputs[2].ratio = 0.03 * avarice * avarice * avarice * avarice;
		recipes[4].outputs[2].ratio = 0.03 * avarice * avarice * avarice * avarice;
		recipes[5].outputs[2].ratio = 0.03 * avarice * avarice * avarice * avarice;
		
		for (var i=1;i<=this.stepsOfGreed;i++)
		{
			var recs = machineData["Greed: Step "+i].recipes;
			if(!recs[0].unlocked)
			{
				if(data.oElements["Greed"+i].amount < 0.1) continue;
				for (var recIndex in recs)
				{
					recs[recIndex].region.paymentSuccess();
				}
			}
		}
		if(data.oElements["Avarice"].amount > 0.1) {
			for(let i=1;i<=5;i++) {
				var rec = recipes[i];
				if(!rec.unlocked)
				{
					
						rec.region.paymentSuccess();
				}
			}
		}
		
		var rec = machineData['Toad\'s Sin'].recipes[0];
		if(!rec.unlocked)
		{
			if(data.oElements["Toad's Sin"].amount > 0.1)
				rec.region.paymentSuccess();
		}
		
		var rec = machineData['Spire Foundation'].recipes[1];
		if(!rec.unlocked)
		{
			if(data.oElements["Spire Foundation"].amount > 0.1)
				rec.region.paymentSuccess();
		}
	}
};

var slothCircle = {
	stepsOfSloth: 5,
	elements: ["Lethargy", "Snail's Sin", "Sloth1", "Sloth2", "Sloth3", "Sloth4", "Sloth5"],
	machines:
	{
		'Lethargy':
		{
			baseStats: [300, 1050, "Lethargy"],
			recipes:
			{
				"Lethargy Weakens Vigor":
				{
					baseStats: [10, 1, true, true],
					in: [
						["Body", 1, -100],
						["Lethargy", 1, 500],
					],
					out: [
						["Body", 1, -1e5],
						["Lethargy", 1, -2e4],
					],
					lock: ["Lethargy",1e99],
					alwayson: true,
				},
				"Repel Lethargy":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Power", 1, 100],
						["Lethargy", 40, 0.001],
					],
					out: [
					],
					lock: ["Lethargy",1000],
				},
			}
		},
		'Snail\'s Sin':
		{
			baseStats: [400, 1050, "Snail's Sin"],
			recipes:
			{
				"Snail's Sin Flaw":
				{
					baseStats: [1, 1, true, true],
					in: [
						["Snail's Sin", 1, 1],
						["Stamina", 0, 0.2],
					],
					out: [
						["Snail's Sin", 1, -1e4],
						["Stamina", -0.1, 1e3],
					],
					lock: ["Goat's Sin",1e99],
					alwayson: true,
				},
			}
		},
		'Sloth: Step 1' : {
			baseStats: [250, 950, "Sloth1"],
			recipes:
			{
				"Sloth Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth1", 1, 0.001],
					],
					out: [
						["Sloth1", 1.4, 2000],
					],
					lock: ["Sloth1",1e99],
					alwayson: true,
				},
				"Sloth Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth1", 1999, 2000],
					],
					out: [
						["Sloth2", 1, 0.9],
					],
					lock: ["Sloth1",1e99],
					alwayson: true,
				},
				"Sloth Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth1", 99, 100],
						["Sloth2", 0, 1],
					],
					out: [
						["Lethargy", 5, 1e4],
					],
					lock: ["Sloth1",1e99],
					alwayson: true,
				},
			}
		},
		'Sloth: Step 2' : {
			baseStats: [350, 950, "Sloth2"],
			recipes:
			{
				"Sloth Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth2", 1, 0.001],
					],
					out: [
						["Sloth2", 1.2, 2000],
					],
					lock: ["Sloth2",1e99],
					alwayson: true,
				},
				"Sloth Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth2", 1999, 2000],
					],
					out: [
						["Sloth3", 1, 0.9],
					],
					lock: ["Sloth2",1e99],
					alwayson: true,
				},
				"Sloth Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth2", 99, 100],
						["Sloth3", 0, 1],
					],
					out: [
						["Lethargy", 15, 1e4],
					],
					lock: ["Sloth2",1e99],
					alwayson: true,
				},
			}
		},
		'Sloth: Step 3' : {
			baseStats: [450, 950, "Sloth3"],
			recipes:
			{
				"Sloth Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth3", 1, 0.001],
					],
					out: [
						["Sloth3", 1.1, 2000],
					],
					lock: ["Sloth3",1e99],
					alwayson: true,
				},
				"Sloth Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth3", 1999, 2000],
					],
					out: [
						["Sloth4", 1, 0.9],
					],
					lock: ["Sloth3",1e99],
					alwayson: true,
				},
				"Sloth Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth3", 99, 100],
						["Sloth4", 0, 1],
					],
					out: [
						["Lethargy", 40, 1e4],
					],
					lock: ["Sloth3",1e99],
					alwayson: true,
				},
			}
		},
		'Sloth: Step 4' : {
			baseStats: [550, 950, "Sloth4"],
			recipes:
			{
				"Sloth Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth4", 1, 0.001],
					],
					out: [
						["Sloth4", 1.05, 2000],
					],
					lock: ["Sloth4",1e99],
					alwayson: true,
				},
				"Sloth Dwells":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth4", 1999, 2000],
					],
					out: [
						["Sloth5", 1, 0.9],
					],
					lock: ["Sloth4",1e99],
					alwayson: true,
				},
				"Sloth Corrupts":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth4", 99, 100],
						["Sloth5", 0, 1],
					],
					out: [
						["Lethargy", 120, 1e4],
					],
					lock: ["Sloth4",1e99],
					alwayson: true,
				},
			}
		},
		'Sloth: Step 5' : {
			baseStats: [650, 950, "Sloth5"],
			recipes:
			{
				"Sloth Yearns":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth5", 1, 0.001],
					],
					out: [
						["Sloth5", 1.012, 100],
					],
					lock: ["Sloth5",1e99],
					alwayson: true,
				},
				"Sloth Blessing":
				{
					baseStats: [1, 1, true, false],
					in: [
						["Sloth5", 99, 100],
					],
					out: [
						["Snail's Sin", 0.5, -5],
					],
					lock: ["Sloth5",1e99],
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
		for (var i=1;i<=this.stepsOfSloth;i++)
		{
			machineData["Sloth: Step "+i].recipes[0].inputs[0].effectReference.maxR*=3;
		}
	},
	cooldown : 5,
	decay: function ()
	{	
		machineData.Vigor.recipes[0].outputs[1].ratio = 0.005*Math.max(0,1-data.oElements.Lethargy.amount/1e4);
		if(this.cooldown-->0) return;
		this.cooldown = 60;
		for (var i=1;i<=this.stepsOfSloth;i++)
		{
			var recs = machineData["Sloth: Step "+i].recipes;
			if(!recs[0].unlocked)
			{
				if(data.oElements["Sloth"+i].amount < 0.1) continue;
				for (var recIndex in recs)
				{
					recs[recIndex].region.paymentSuccess();
				}
			}
		}
		var rec = machineData['Lethargy'].recipes[0];
		if(!rec.unlocked)
		{
			if(data.oElements["Lethargy"].amount > 0.1)
				rec.region.paymentSuccess();
		}
		var rec = machineData['Snail\'s Sin'].recipes[0];
		if(!rec.unlocked)
		{
			if(data.oElements["Snail's Sin"].amount > 0.1)
				rec.region.paymentSuccess();
		}
		
		var rec = machineData['Elemental Doorman'].recipes[0];
		if(!rec.unlocked)
		{
			if(data.oElements["Spire Doorman"].amount > 0.1)
				rec.region.paymentSuccess();
		}
	}
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
	lustCircle.preprocess();
	spireCircle.preprocess();
	greedCircle.preprocess();
	slothCircle.preprocess();
	
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
	lustCircle.postprocess();
	commerceCircle.postprocess();
	spireCircle.postprocess();
	greedCircle.postprocess();
	slothCircle.postprocess();
	postprocessed = true;
}
function decayAdditionalCircles() {
	baseCircle.decay();
	ritualCircle.decay();
	researchCircle.decay();
	lustCircle.decay();
	spireCircle.decay();
	greedCircle.decay();
	slothCircle.decay();
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