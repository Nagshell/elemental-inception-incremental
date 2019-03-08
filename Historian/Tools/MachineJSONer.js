var simplifiedMachineData = {
	"Crystallizer":
	{
		baseStats: [100, 100, "Earth", 16],
		recipes:
		{
			"Earth Trickle":
			{
				baseStats: [1, 0.0008, true, false],
				in: [],
				out: [
					["Earth", 1, 1.2],
				],
				lock: ["Earth", 0],
				upgrade: ["Earth Slide", "Water", 0.1],
			},
			"Earth Slide":
			{
				baseStats: [1, 0.0015, false, false],
				in: [],
				out: [
					["Earth", 1, 1.2],
				],
				upgrade: ["Earth Avalanche", "Air", 0.1],
			},
			"Earth Avalanche":
			{
				baseStats: [1, 0.004, false, false],
				in: [],
				out: [
					["Earth", 1, 1.2],
				],
				upgrade: ["Weak Earth Rift", "Earth", 5],
			},
			"Weak Earth Rift":
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Earth", 1, 12, 10, ["Earth", 80]],
				],
				upgrade: ["Pure Earth Rift", "Mud", 0.1, "Magma", 0.1],
			},
			"Pure Earth Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Earth", 2, 1200],
				],
			},
			"Simple Earth Conversion":
			{
				baseStats: [1, 1.02, true, true],
				in: [
					["Earth", 1, 1.1],
					["Fire", 1, 1.1],
				],
				out: [
					["Earth", 2, 5.2, 4, ["Earth", 10, "GolemEarth", 1]],
				],
				lock: ["Fire", 1],
				upgrade: ["Improved Earth Conversion", "Earth", 100],
			},
			"Improved Earth Conversion":
			{
				baseStats: [1, 1.05, false, true],
				in: [
					["Earth", 1, 80.1],
					["Fire", 1, 80.1],
				],
				out: [
					["Earth", 2, 502],
				],
				upgrade: ["True Earth Rift", "Void", 0.1, "GolemEarth", 8],
			},
			"True Earth Rift":
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Earth", 1, 1]
				],
				out: [
					["Earth", 1, 12000],
				],
			},
			"Catalized Earth Conversion":
			{
				baseStats: [1, 1.2, true, true],
				in: [
					["Earth", 1, 500],
					["Fire", 1, 500],
					["Mud", 0, 2],
					["Magma", 0, 2],
					["Sand", 0, 2],
				],
				out: [
					["Earth", 2, 12000, 4, ["Mud", 10]],
				],
				lock: ["Mud", 2, "Magma", 2, "Sand", 2],
				upgrade: ["Stable Earth Rift", "Void", 10, "GolemEarth", 8],
			},
			"Stable Earth Rift":
			{
				baseStats: [1, 1.8, false, true],
				in: [
					["Earth", 1, 500],
					["Alkahest", 0, 0.1],
				],
				out: [
					["Earth", 1, 52000],
				],
			},
		}
	},
	"Aqueous Extractor":
	{
		baseStats: [-100, 100, "Water", 16],
		recipes:
		{
			"Forcefull Water Conversion":
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Earth", 1, 0.4],
				],
				out: [
					["Water", 1, 1.2],
				],
				lock: ["Earth", 1],
				upgrade: ["Weak Water Rift", "Water", 5],
			},
			"Weak Water Rift":
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Water", 1, 12, 10, ["Water", 80]],
				],
				upgrade: ["Pure Water Rift", "Ice", 0.1, "Steam", 0.1],
			},
			"Pure Water Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Water", 2, 1200],
				],
			},
			"Simple Water Conversion":
			{
				baseStats: [1, 1.02, true, true],
				in: [
					["Earth", 1, 1.1],
					["Water", 1, 1.1],
				],
				out: [
					["Water", 2, 5.2, 4, ["Water", 10, "GolemWater", 1]],
				],
				lock: ["Water", 1],
				upgrade: ["Improved Water Conversion", "Water", 100],
			},
			"Improved Water Conversion":
			{
				baseStats: [1, 1.05, false, true],
				in: [
					["Earth", 1, 80.1],
					["Water", 1, 80.1],
				],
				out: [
					["Water", 2, 502],
				],
				upgrade: ["True Water Rift", "Void", 0.1, "GolemWater", 8],
			},
			"True Water Rift":
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Water", 1, 1]
				],
				out: [
					["Water", 1, 12000],
				],
			},
			"Catalized Water Conversion":
			{
				baseStats: [1, 1.2, true, true],
				in: [
					["Earth", 1, 500],
					["Water", 1, 500],
					["Mud", 0, 2],
					["Ice", 0, 2],
					["Steam", 0, 2],
				],
				out: [
					["Water", 2, 12000, 4, ["Ice", 10]],
				],
				lock: ["Mud", 2, "Ice", 2, "Steam", 2],
				upgrade: ["Stable Water Rift", "Void", 10, "GolemWater", 8],
			},
			"Stable Water Rift":
			{
				baseStats: [1, 1.8, false, true],
				in: [
					["Water", 1, 500],
					["Alkahest", 0, 0.1],
				],
				out: [
					["Water", 1, 52000],
				],
			},
		}
	},
	"Pressure Chamber":
	{
		baseStats: [-100, -100, "Air", 16],
		recipes:
		{
			"Forcefull Air Conversion":
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Water", 1, 0.4],
				],
				out: [
					["Air", 1, 1.2],
				],
				lock: ["Water", 4],
				upgrade: ["Weak Air Rift", "Air", 5],
			},
			"Weak Air Rift":
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Air", 1, 12, 10, ["Air", 80]],
				],
				upgrade: ["Pure Air Rift", "Steam", 0.1, "Sand", 0.1],
			},
			"Pure Air Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Air", 2, 1200],
				],
			},
			"Simple Air Conversion":
			{
				baseStats: [1, 1.02, true, true],
				in: [
					["Water", 1, 1.1],
					["Fire", 1, 1.1],
				],
				out: [
					["Air", 2, 5.2, 4, ["Air", 10, "GolemAir", 1]],
				],
				lock: ["Fire", 1],
				upgrade: ["Improved Air Conversion", "Air", 100],
			},
			"Improved Air Conversion":
			{
				baseStats: [1, 1.05, false, true],
				in: [
					["Water", 1, 80.1],
					["Fire", 1, 80.1],
				],
				out: [
					["Air", 2, 502],
				],
				upgrade: ["True Air Rift", "Void", 0.1, "GolemAir", 8],
			},
			"True Air Rift":
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Air", 1, 1]
				],
				out: [
					["Air", 1, 12000],
				],
			},
			"Catalized Air Conversion":
			{
				baseStats: [1, 1.2, true, true],
				in: [
					["Water", 1, 500],
					["Fire", 1, 500],
					["Steam", 0, 2],
					["Sand", 0, 2],
				],
				out: [
					["Air", 2, 12000, 4, ["Steam", 10]],
				],
				lock: ["Steam", 2, "Sand", 2],
				upgrade: ["Stable Air Rift", "Void", 10, "GolemAir", 8],
			},
			"Stable Air Rift":
			{
				baseStats: [1, 1.8, false, true],
				in: [
					["Air", 1, 500],
					["Alkahest", 0, 0.1],
				],
				out: [
					["Air", 1, 52000],
				],
			},
		}
	},
	"Incinerator":
	{
		baseStats: [100, -100, "Fire", 16],
		recipes:
		{
			"Forcefull Fire Conversion":
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Air", 1, 0.1],
				],
				out: [
					["Fire", 1, 1.2],
				],
				lock: ["Air", 1],
				upgrade: ["Weak Fire Rift", "Fire", 5],
			},
			"Weak Fire Rift":
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Fire", 1, 12, 10, ["Fire", 80]],
				],
				upgrade: ["Pure Fire Rift", "Steam", 0.1, "Magma", 0.1],
			},
			"Pure Fire Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Fire", 2, 1200],
				],
			},
			"Simple Fire Conversion":
			{
				baseStats: [2, 1.02, true, true],
				in: [
					["Air", 1, 1.1],
					["Fire", 1, 1.1],
				],
				out: [
					["Fire", 2, 5.2, 4, ["Fire", 10, "GolemFire", 1]],
				],
				lock: ["Fire", 1],
				upgrade: ["Improved Fire Conversion", "Fire", 100],
			},
			"Improved Fire Conversion":
			{
				baseStats: [2, 1.05, false, true],
				in: [
					["Air", 1, 80.1],
					["Fire", 1, 80.1],
				],
				out: [
					["Fire", 2, 502],
				],
				upgrade: ["True Fire Rift", "Void", 0.1, "GolemFire", 8],
			},
			"True Fire Rift":
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Fire", 1, 1]
				],
				out: [
					["Fire", 1, 12000],
				],
			},
			"Catalized Fire Conversion":
			{
				baseStats: [2, 1.2, true, true],
				in: [
					["Air", 1, 500],
					["Fire", 1, 500],
					["Steam", 0, 2],
					["Magma", 0, 2],
				],
				out: [
					["Fire", 2, 12000, 4, ["Magma", 10]],
				],
				lock: ["Steam", 2, "Magma", 2],
				upgrade: ["Stable Fire Rift", "Void", 10, "GolemFire", 8],
			},
			"Stable Fire Rift":
			{
				baseStats: [1, 1.8, false, true],
				in: [
					["Fire", 1, 500],
					["Alkahest", 0, 0.1],
				],
				out: [
					["Fire", 1, 52000],
				],
			},
		}
	},
	"Golem Infuser":
	{
		baseStats: [-200, 300],
		recipes:
		{
			"Earth Orb Infusion":
			{
				baseStats: [1, 1, true, false],
				in: [
					["Earth", 20, 20],
				],
				out: [
					["GolemEarth", 1, 1],
				],
				lock: ["Earth", 19, "Water", 14, "Air", 14, "Fire", 14],
				upgrade: ["Earth Golem Infusion", "Earth", 450],
			},
			"Earth Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Earth", 400, 400],
				],
				out: [
					["GolemEarth", 1, 2],
				],
				upgrade: ["Earth Golem Creation", "Earth", 11000],
			},
			"Earth Golem Creation":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Earth", 8000, 8000],
				],
				out: [
					["GolemEarth", 2, 8],
				],
			},
			"Water Orb Infusion":
			{
				baseStats: [1, 1, true, false],
				in: [
					["Water", 20, 20],
				],
				out: [
					["GolemWater", 1, 1],
				],
				lock: ["Earth", 14, "Water", 19, "Air", 14, "Fire", 14],
				upgrade: ["Water Golem Infusion", "Water", 450],
			},
			"Water Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Water", 400, 400],
				],
				out: [
					["GolemWater", 1, 2],
				],
				upgrade: ["Water Golem Creation", "Water", 11000],
			},
			"Water Golem Creation":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Water", 8000, 8000],
				],
				out: [
					["GolemWater", 2, 8],
				],
				//upgrade: ["Water Golem", "Alkahest", 1],
			},
			"Air Orb Infusion":
			{
				baseStats: [1, 1, true, false],
				in: [
					["Air", 20, 20],
				],
				out: [
					["GolemAir", 1, 1],
				],
				lock: ["Earth", 14, "Water", 14, "Air", 19, "Fire", 14],
				upgrade: ["Air Golem Infusion", "Air", 450],
			},
			"Air Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Air", 400, 400],
				],
				out: [
					["GolemAir", 1, 2],
				],
				upgrade: ["Air Golem Creation", "Air", 11000],
			},
			"Air Golem Creation":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Air", 8000, 8000],
				],
				out: [
					["GolemAir", 2, 8],
				],
			},
			"Fire Orb Infusion":
			{
				baseStats: [1, 1, true, false],
				in: [
					["Fire", 20, 20],
				],
				out: [
					["GolemFire", 1, 1],
				],
				lock: ["Earth", 14, "Water", 14, "Air", 14, "Fire", 19],
				upgrade: ["Fire Golem Infusion", "Fire", 450],
			},
			"Fire Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Fire", 400, 400],
				],
				out: [
					["GolemFire", 1, 2],
				],
				upgrade: ["Fire Golem Creation", "Fire", 11000],
			},
			"Fire Golem Creation":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Fire", 8000, 8000],
				],
				out: [
					["GolemFire", 2, 8],
				],
			},
		}
	},
	"Golem Merger":
	{
		baseStats: [200, 300],
		recipes:
		{
			"Merge : Traces of Mud":
			{
				baseStats: [1, 0.01, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemWater", 1, 1],
				],
				out: [
					["Mud", 1, 0.1],
				],
				lock: ["GolemEarth", 2, "GolemWater", 2],
				upgrade: ["Simple Mud Extraction", "Earth", 1000, "Water", 1000],
			},
			"Simple Mud Extraction":
			{
				baseStats: [1, 0.08, false, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemWater", 1, 1],
					["Earth", 700, 900],
					["Water", 700, 900],
				],
				out: [
					["Mud", 1, 1.2, 4, ["GolemWater", 3]],
				],
				upgrade: ["Intermediete Mud Extraction", "Void", 0.1],
			},
			"Intermediete Mud Extraction":
			{
				baseStats: [1, 3.5, false, false],
				in: [
					["GolemEarth", 1, 5],
					["GolemWater", 1, 5],
					["Earth", 7000, 40000],
					["Water", 7000, 40000],
				],
				out: [
					["Mud", 1, 102],
				],
			},

			"Merge : Traces of Ice":
			{
				baseStats: [1, 0.008, true, false],
				in: [
					["GolemWater", 1, 1],
					["GolemAir", 1, 1],
				],
				out: [
					["Ice", 1, 0.1],
				],
				lock: ["GolemWater", 2, "GolemAir", 2, "Mud", 0.3],
			},
			"Merge : Traces of Steam":
			{
				baseStats: [1, 0.006, true, false],
				in: [
					["GolemWater", 1, 1],
					["GolemFire", 1, 1],
				],
				out: [
					["Steam", 1, 0.1],
				],
				lock: ["GolemWater", 2, "GolemFire", 2, "Ice", 0.03],
			},
			"Merge : Traces of Magma":
			{
				baseStats: [1, 0.004, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemFire", 1, 1],
				],
				out: [
					["Magma", 1, 0.1],
				],
				lock: ["GolemEarth", 2, "GolemFire", 2, "Steam", 0.03],
			},
			"Merge : Traces of Sand":
			{
				baseStats: [1, 0.002, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemAir", 1, 1],
				],
				out: [
					["Sand", 1, 0.1],
				],
				lock: ["GolemEarth", 2, "GolemAir", 2, "Magma", 0.03],
			},
		}
	},
	"Aggregator":
	{
		baseStats: [0, 250, "Mud"],
		recipes:
		{

		}
	},
	"Polar Vortex":
	{
		baseStats: [-250, 50, "Ice"],
		recipes:
		{

		}
	},
	"Combustion Engine":
	{
		baseStats: [-150, -200, "Steam"],
		recipes:
		{

		}
	},
	"Volcano":
	{
		baseStats: [250, 50, "Magma"],
		recipes:
		{

		}
	},
	"Pulverizer":
	{
		baseStats: [150, -200, "Sand"],
		recipes:
		{

		}
	},
	"Orb of Emptiness":
	{
		baseStats: [0, -150, "Void"],
		recipes:
		{

		}
	},
	"Nexus of Unification":
	{
		baseStats: [0, 0, "Alkahest"],
		recipes:
		{

		}
	},
};

function prepareTemplatedMachineData()
{
	var templateData = {};
	for (var title in simplifiedMachineData)
	{
		var simplifiedData = simplifiedMachineData[title];
		var preparedData = {
			x: simplifiedData.baseStats[0],
			y: simplifiedData.baseStats[1],

			recipes: [],
			hiddenRecipes:
			{},
		};
		if (simplifiedData.baseStats[2])
		{
			preparedData.displayElement = simplifiedData.baseStats[2];
		}
		if (simplifiedData.baseStats[3])
		{
			preparedData.displayStep = simplifiedData.baseStats[3];
		}
		for (var recipeTitle in simplifiedData.recipes)
		{
			var simplifiedRecipe = simplifiedData.recipes[recipeTitle];
			var preparedRecipe = {
				title: recipeTitle,
				enabled: false,
				inputs: [],
				outputs: [],
				productionRate: simplifiedRecipe.baseStats[0],
				efficiency: simplifiedRecipe.baseStats[1],
			};
			if (simplifiedRecipe.baseStats[3])
			{
				preparedRecipe.scaling = true;
			}
			if (simplifiedRecipe.lock)
			{
				preparedRecipe.unlocked = false;
				preparedRecipe.unlockCosts = [];
				for (var i = 0; i < simplifiedRecipe.lock.length; i += 2)
				{
					preparedRecipe.unlockCosts.push(
					{
						type: simplifiedRecipe.lock[i],
						amount: simplifiedRecipe.lock[i + 1],
					});
				}
			}
			else
			{
				preparedRecipe.unlocked = true;
			}
			if (simplifiedRecipe.upgrade)
			{
				preparedRecipe.upgradeTo = simplifiedRecipe.upgrade[0];
				preparedRecipe.upgradeCosts = [];
				for (var i = 1; i < simplifiedRecipe.upgrade.length; i += 2)
				{
					preparedRecipe.upgradeCosts.push(
					{
						type: simplifiedRecipe.upgrade[i],
						amount: simplifiedRecipe.upgrade[i + 1],
					});
				}
			}

			for (var i = 0; i < simplifiedRecipe.in.length; i++)
			{
				var simplifiedIngredient = simplifiedRecipe.in[i];
				var preparedIngredient = {
					type: simplifiedIngredient[0],
					ratio: simplifiedIngredient[1],
					min: simplifiedIngredient[2],
				};
				if (simplifiedIngredient[3])
				{
					preparedIngredient.slider = 1;
					preparedIngredient.sliderBase = simplifiedIngredient[2];
					preparedIngredient.sliderStep = simplifiedIngredient[3];
					preparedIngredient.upped = 0;
					preparedIngredient.upgrades = [];
					if (simplifiedIngredient[4].length > 0)
					{
						for (var j = 0; j < simplifiedIngredient[4].length; j += 2)
						{
							preparedIngredient.upgrades[j / 2] = {
								costs: [
								{
									type: simplifiedIngredient[4][j],
									amount: simplifiedIngredient[4][j + 1],
								}]
							}
						}
					}
					else
					{
						preparedIngredient.upgrades[0] = {
							costs: [
							{
								type: simplifiedIngredient[0],
								amount: simplifiedIngredient[2] * simplifiedIngredient[3],
							}]
						}
					}
				}
				preparedRecipe.inputs.push(preparedIngredient);
			}
			for (var i = 0; i < simplifiedRecipe.out.length; i++)
			{
				var simplifiedIngredient = simplifiedRecipe.out[i];
				var preparedIngredient = {
					type: simplifiedIngredient[0],
					ratio: simplifiedIngredient[1],
					max: simplifiedIngredient[2],
				};
				if (simplifiedIngredient[3])
				{
					preparedIngredient.slider = 1;
					preparedIngredient.sliderBase = simplifiedIngredient[2];
					preparedIngredient.sliderStep = simplifiedIngredient[3];
					preparedIngredient.upped = 0;
					preparedIngredient.upgrades = [];
					if (simplifiedIngredient[4].length > 0)
					{
						for (var j = 0; j < simplifiedIngredient[4].length; j += 2)
						{
							preparedIngredient.upgrades[j / 2] = {
								costs: [
								{
									type: simplifiedIngredient[4][j],
									amount: simplifiedIngredient[4][j + 1],
								}]
							}
						}
					}
					else
					{
						preparedIngredient.upgrades[0] = {
							costs: [
							{
								type: simplifiedIngredient[0],
								amount: simplifiedIngredient[2] * simplifiedIngredient[3],
							}]
						}
					}
				}
				preparedRecipe.outputs.push(preparedIngredient);
			}

			if (simplifiedRecipe.baseStats[2])
			{
				preparedData.recipes.push(preparedRecipe);
			}
			else
			{
				preparedData.hiddenRecipes[recipeTitle] = preparedRecipe;
			}
		}
		templateData[title] = preparedData;
	}
	return templateData;
}
//var canvas = document.getElementById("canvasMain");
//canvas.value = JSON.stringify(prepareTemplatedMachineData());
