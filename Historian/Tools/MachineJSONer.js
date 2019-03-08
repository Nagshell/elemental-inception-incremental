var simplifiedMachineData = {
	"Crystallizer":
	{
		baseStats: [500, 400, "Earth", 4],
		recipes:
		{
			"Earth Trickle":
			{
				baseStats: [1, 0.25, true, false],
				in: [],
				out: [
					["Earth", 0.01, 2],
				],
				lock: ["Earth", 0],
				upgrade: ["Earth Slide", "Air", 0.1],
			},
			"Earth Slide":
			{
				baseStats: [1, 0.50, false, false],
				in: [],
				out: [
					["Earth", 0.02, 2],
				],
				upgrade: ["Earth Avalanche", "Fire", 0.1],
			},
			"Earth Avalanche":
			{
				baseStats: [1, 0.75, false, false],
				in: [],
				out: [
					["Earth", 0.03, 2],
				],
				upgrade: ["Weak Earth Rift", "Earth", 8],
			},
			"Weak Earth Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Earth", 0.1, 3e1],
				],
				upgrade: ["Pure Earth Rift", "Earth", 1e50],
			},
			"Pure Earth Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Earth", 1e2, 1e300],
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
					["Earth", 2, 11, 10, ["Earth", 10]],
				],
				lock: ["Fire", 1],
				upgrade: ["Improved Earth Conversion", "GolemEarth", 1],
			},
			"Improved Earth Conversion":
			{
				baseStats: [1, 1.3, false, true],
				in: [
					["Earth", 1, 0.1],
					["Fire", 1, 0.1],
				],
				out: [
					["Earth", 2, 1.1e11, 1e9, ["Earth", 1e11]],
				],
				upgrade: ["True Earth Rift", "GolemEarth", 3],
			},
			"True Earth Rift":
			{
				baseStats: [1, 1.8, false, true],
				in: [
					["Earth", 1, 1]
				],
				out: [
					["Earth", 1, 1e200],
				],
			},
			"Catalized Earth Conversion":
			{
				baseStats: [1, 2, true, true],
				in: [
					["Earth", 1, 1e20],
					["Fire", 1, 1e20],
					["Mud", 0, 2],
					["Magma", 0, 2],
					["Sand", 0, 2],
				],
				out: [
					["Earth", 2, 1.1e51, 1e49, ["Void", 100]],
				],
				lock: ["Mud", 2, "Magma", 2, "Sand", 2],
				upgrade: ["Stable Earth Rift", "GolemEarth", 8],
			},
			"Stable Earth Rift":
			{
				baseStats: [1, 3, false, true],
				in: [
					["Earth", 1, 1e20],
					["Alkahest", 0, 1],
				],
				out: [
					["Earth", 1, 1e300],
				],
			},
		}
	},
	"Aqueous Extractor":
	{
		baseStats: [300, 400, "Water", 8],
		recipes:
		{
			"Forcefull Water Conversion":
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Earth", 1, 0.1],
				],
				out: [
					["Water", 1, 2],
				],
				lock: ["Earth", 2],
				upgrade: ["Weak Water Rift", "Water", 8],
			},
			"Weak Water Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Water", 0.1, 3e1],
				],
				upgrade: ["Pure Water Rift", "Water", 1e50],
			},
			"Pure Water Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Water", 1e2, 1e300],
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
					["Water", 2, 11, 10, ["Water", 10]],
				],
				lock: ["Water", 1],
				upgrade: ["Improved Water Conversion", "GolemWater", 1],
			},
			"Improved Water Conversion":
			{
				baseStats: [1, 1.3, false, true],
				in: [
					["Earth", 1, 0.1],
					["Water", 1, 0.1],
				],
				out: [
					["Water", 2, 1.1e11, 1e9, ["Water", 1e11]],
				],
				upgrade: ["True Water Rift", "GolemWater", 3],
			},
			"True Water Rift":
			{
				baseStats: [1, 1.8, false, true],
				in: [
					["Water", 1, 1]
				],
				out: [
					["Water", 1, 1e300],
				],
			},
			"Catalized Earth Conversion":
			{
				baseStats: [1, 2, true, true],
				in: [
					["Earth", 1, 1e20],
					["Water", 1, 1e20],
					["Mud", 0, 2],
					["Ice", 0, 2],
					["Steam", 0, 2],
				],
				out: [
					["Water", 2, 1.1e51, 1e49, ["Void", 100]],
				],
				lock: ["Mud", 2, "Ice", 2, "Steam", 2],
				upgrade: ["Stable Water Rift", "GolemWater", 8],
			},
			"Stable Water Rift":
			{
				baseStats: [1, 3, false, true],
				in: [
					["Water", 1, 1e20],
					["Alkahest", 0, 1],
				],
				out: [
					["Water", 1, 1e300],
				],
			},
		}
	},
	"Pressure Chamber":
	{
		baseStats: [300, 200, "Air", 8],
		recipes:
		{
			"Forcefull Air Conversion":
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Water", 1, 0.1],
				],
				out: [
					["Air", 1, 2],
				],
				lock: ["Water", 4],
				upgrade: ["Weak Air Rift", "Air", 8],
			},
			"Weak Air Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Air", 0.1, 3e1],
				],
				upgrade: ["Pure Air Rift", "Air", 1e50],
			},
			"Pure Air Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Air", 1e2, 1e300],
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
					["Air", 2, 11, 10, ["Air", 10]],
				],
				lock: ["Fire", 1],
				upgrade: ["Improved Air Conversion", "GolemAir", 1],
			},
			"Improved Air Conversion":
			{
				baseStats: [1, 1.3, false, true],
				in: [
					["Water", 1, 0.1],
					["Fire", 1, 0.1],
				],
				out: [
					["Air", 2, 1.1e11, 1e9, ["Air", 1e11]],
				],
				upgrade: ["True Air Rift", "GolemAir", 3],
			},
			"True Air Rift":
			{
				baseStats: [1, 1.8, false, true],
				in: [
					["Air", 1, 1]
				],
				out: [
					["Air", 1, 1e300],
				],
			},
			"Catalized Air Conversion":
			{
				baseStats: [1, 2, true, true],
				in: [
					["Water", 1, 1e20],
					["Fire", 1, 1e20],
					["Ice", 0, 2],
					["Sand", 0, 2],
					["Void", 0, 2],
				],
				out: [
					["Air", 2, 1.1e51, 1e49, ["Void", 100]],
				],
				lock: ["Ice", 2, "Sand", 2, "Void", 2],
				upgrade: ["Stable Air Rift", "GolemAir", 8],
			},
			"Stable Air Rift":
			{
				baseStats: [1, 3, false, true],
				in: [
					["Air", 1, 1e20],
					["Alkahest", 0, 1],
				],
				out: [
					["Air", 1, 1e300],
				],
			},
		}
	},
	"Incinerator":
	{
		baseStats: [500, 200, "Fire", 8],
		recipes:
		{
			"Forcefull Fire Conversion":
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Air", 1, 0.1],
				],
				out: [
					["Fire", 1, 2],
				],
				lock: ["Air", 1],
				upgrade: ["Weak Fire Rift", "Fire", 8],
			},
			"Weak Fire Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Fire", 0.1, 3e1],
				],
				upgrade: ["Pure Fire Rift", "Fire", 1e50],
			},
			"Pure Fire Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Fire", 1e2, 1e300],
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
					["Fire", 2, 11, 10, ["Fire", 10]],
				],
				lock: ["Fire", 1],
				upgrade: ["Improved Fire Conversion", "GolemFire", 1],
			},
			"Improved Fire Conversion":
			{
				baseStats: [2, 1.3, false, true],
				in: [
					["Air", 1, 0.1],
					["Fire", 1, 0.1],
				],
				out: [
					["Fire", 2, 1.1e11, 1e9, ["Fire", 1e11]],
				],
				upgrade: ["True Fire Rift", "GolemFire", 3],
			},
			"True Fire Rift":
			{
				baseStats: [1, 1.8, false, true],
				in: [
					["Fire", 1, 1]
				],
				out: [
					["Fire", 1, 1e300],
				],
			},
			"Catalized Fire Conversion":
			{
				baseStats: [1, 2, true, true],
				in: [
					["Air", 1, 1e20],
					["Fire", 1, 1e20],
					["Magma", 0, 2],
					["Steam", 0, 2],
					["Void", 0, 2],
				],
				out: [
					["Fire", 2, 1.1e51, 1e49, ["Void", 100]],
				],
				lock: ["Magma", 2, "Steam", 2, "Void", 2],
				upgrade: ["Stable Fire Rift", "GolemFire", 8],
			},
			"Stable Fire Rift":
			{
				baseStats: [1, 3, false, true],
				in: [
					["Fire", 1, 1e20],
					["Alkahest", 0, 1],
				],
				out: [
					["Fire", 1, 1e300],
				],
			},
		}
	},
	"Golem Infuser":
	{
		baseStats: [200, 600],
		recipes:
		{
			"Earth Orb Infusion":
			{
				baseStats: [1, 1, true, false],
				in: [
					["Earth", 1e2, 1e2],
				],
				out: [
					["GolemEarth", 1, 1],
				],
				lock: ["Earth", 1.1e2, "Water", 1.1e2, "Air", 1.1e2, "Fire", 1.1e2],
				upgrade: ["Earth Golem Infusion", "Earth", 1e10],
			},
			"Earth Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Earth", 0.9e20, 1.1e20],
				],
				out: [
					["GolemEarth", 1, 2],
				],
				upgrade: ["Earth Golem Creation", "Earth", 1e60],
			},
			"Earth Golem Creation":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Earth", 0.9e100, 1.1e100],
				],
				out: [
					["GolemEarth", 2, 8],
				],
				//upgrade: ["Earth Golem", "Alkahest", 1],
			},
			"Water Orb Infusion":
			{
				baseStats: [1, 1, true, false],
				in: [
					["Water", 1e2, 1e2],
				],
				out: [
					["GolemWater", 1, 1],
				],
				lock: ["Earth", 1.1e2, "Water", 1.1e2, "Air", 1.1e2, "Fire", 1.1e2],
				upgrade: ["Water Golem Infusion", "Water", 1e10],
			},
			"Water Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Water", 0.9e20, 1.1e20],
				],
				out: [
					["GolemWater", 1, 2],
				],
				upgrade: ["Water Golem Creation", "Water", 1e60],
			},
			"Water Golem Creation":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Water", 0.9e100, 1.1e100],
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
					["Air", 1e2, 1e2],
				],
				out: [
					["GolemAir", 1, 1],
				],
				lock: ["Earth", 1.1e2, "Water", 1.1e2, "Air", 1.1e2, "Fire", 1.1e2],
				upgrade: ["Air Golem Infusion", "Air", 1e10],
			},
			"Air Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Air", 0.9e20, 1.1e20],
				],
				out: [
					["GolemAir", 1, 2],
				],
				upgrade: ["Air Golem Creation", "Air", 1e60],
			},
			"Air Golem Creation":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Air", 0.9e100, 1.1e100],
				],
				out: [
					["GolemAir", 2, 8],
				],
				//upgrade: ["Air Golem", "Alkahest", 1],
			},
			"Fire Orb Infusion":
			{
				baseStats: [1, 1, true, false],
				in: [
					["Fire", 1e2, 1e2],
				],
				out: [
					["GolemFire", 1, 1],
				],
				lock: ["Earth", 1.1e2, "Water", 1.1e2, "Air", 1.1e2, "Fire", 1.1e2],
				upgrade: ["Fire Golem Infusion", "Fire", 1e10],
			},
			"Fire Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Fire", 0.9e20, 1.1e20],
				],
				out: [
					["GolemFire", 1, 2],
				],
				upgrade: ["Fire Golem Creation", "Fire", 1e60],
			},
			"Fire Golem Creation":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Fire", 0.9e100, 1.1e100],
				],
				out: [
					["GolemFire", 2, 8],
				],
				//upgrade: ["Fire Golem Creation", "Alkahest", 1],
			},
		}
	},
	"Golem Merger":
	{
		baseStats: [600, 600],
		recipes:
		{
			"Simple Mud Merging":
			{
				baseStats: [1, 1, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemWater", 1, 1],
					["Earth", 1e10, 1e10],
					["Water", 1e10, 1e10],
				],
				out: [
					["Mud", 0.4, 1.5],
				],
				lock: ["GolemEarth", 2, "GolemWater", 2, "Mud", 0.5],
				upgrade: ["Intermediete Mud Merging", "Mud", 2],
			},
			"Intermediete Mud Merging":
			{
				baseStats: [1, 1, false, false],
				in: [
					["GolemEarth", 2, 2],
					["GolemWater", 2, 2],
					["Earth", 1e20, 1e20],
					["Water", 1e20, 1e20],
				],
				out: [
					["Mud", 1.2, 3],
				],
			},
			"Golem Merging : Mud":
			{
				baseStats: [1, 1, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemWater", 1, 1],
				],
				out: [
					["Mud", 0.1, 1],
				],
				lock: ["GolemEarth", 2, "GolemWater", 2],
			},
			"Golem Merging : Ice":
			{
				baseStats: [1, 1, true, false],
				in: [
					["GolemWater", 1, 1],
					["GolemAir", 1, 1],
				],
				out: [
					["Ice", 0.08, 1],
				],
				lock: ["GolemWater", 2, "GolemAir", 2, "Mud", 0.3],
			},
			"Golem Merging : Steam":
			{
				baseStats: [1, 1, true, false],
				in: [
					["GolemWater", 1, 1],
					["GolemFire", 1, 1],
				],
				out: [
					["Steam", 0.06, 1],
				],
				lock: ["GolemWater", 2, "GolemFire", 2, "Ice", 0.3],
			},
			"Golem Merging : Magma":
			{
				baseStats: [1, 1, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemFire", 1, 1],
				],
				out: [
					["Magma", 0.04, 1],
				],
				lock: ["GolemEarth", 2, "GolemFire", 2, "Steam", 0.3],
			},
			"Golem Merging : Sand":
			{
				baseStats: [1, 1, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemAir", 1, 1],
				],
				out: [
					["Sand", 0.02, 1],
				],
				lock: ["GolemEarth", 2, "GolemAir", 2, "Magma", 0.3],
			},
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
							preparedIngredient.upgrades[j] = {
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
							preparedIngredient.upgrades[j] = {
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

	var canvas = document.getElementById("canvasMain");
	canvas.value = JSON.stringify(templateData);
}
prepareTemplatedMachineData();
