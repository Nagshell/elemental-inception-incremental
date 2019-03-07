var simplifiedMachineData = {
	EarthProducer:
	{
		baseStats: [500, 400, "Earth", 8],
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
				upgrade: ["Earth Slide", "Air", 0.01],
			},
			"Earth Slide":
			{
				baseStats: [1, 0.50, false, false],
				in: [],
				out: [
					["Earth", 0.02, 2],
				],
				lock: ["Earth", 0],
				upgrade: ["Earth Avalanche", "Fire", 0.01],
			},
			"Earth Avalanche":
			{
				baseStats: [1, 0.75, false, false],
				in: [],
				out: [
					["Earth", 0.04, 2],
				],
				lock: ["Earth", 0],
				upgrade: ["Weak Earth Rift", "Earth", 8],
			},
			"Weak Earth Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Earth", 0.1, 9, 10, []],
				],
				upgrade: ["Strong Earth Rift", "Earth", 1e50],
			},
			"Strong Earth Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Earth", 1e2, 1e300],
				],
			},
			"T1 Earth Conversion":
			{
				baseStats: [1, 1.01, true, true],
				in: [
					["Earth", 1, 0.9, 10, []],
					["Fire", 1, 0.9, 10, []],
				],
				out: [
					["Earth", 2, 11, 10, ["Earth", 10]],
				],
				lock: ["Fire", 1],
			}
		}
	},
	WaterProducer:
	{
		baseStats: [300, 400, "Water", 8],
		recipes:
		{
			"T0 Water Force":
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
					["Water", 0.1, 9, 10, []],
				],
				upgrade: ["Strong Water Rift", "Water", 1e50],
			},
			"Strong Water Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Water", 1e2, 1e300],
				],
			},
			"T1 Water Conversion":
			{
				baseStats: [1, 1.01, true, true],
				in: [
					["Earth", 1, 0.9, 10, []],
					["Water", 1, 0.9, 10, []],
				],
				out: [
					["Water", 2, 11, 10, ["Water", 10]],
				],
				lock: ["Water", 1],
			}
		}
	},

	AirProducer:
	{
		baseStats: [300, 200, "Air", 8],
		recipes:
		{
			"T0 Air Force":
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
					["Air", 0.1, 9, 10, []],
				],
				upgrade: ["Strong Air Rift", "Air", 1e50],
			},
			"Strong Air Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Air", 1e2, 1e300],
				],
			},
			"T1 Air Conversion":
			{
				baseStats: [1, 1.01, true, true],
				in: [
					["Water", 1, 0.9, 10, []],
					["Fire", 1, 0.9, 10, []],
				],
				out: [
					["Air", 2, 11, 10, ["Air", 10]],
				],
				lock: ["Fire", 1],
			}
		}
	},
	FireProducer:
	{
		baseStats: [500, 200, "Fire", 8],
		recipes:
		{
			"T0 Fire Force":
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
					["Fire", 0.1, 9, 10, []],
				],
				upgrade: ["Strong Fire Rift", "Fire", 1e50],
			},
			"Strong Fire Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Fire", 1e2, 1e300],
				],
			},
			"T1 Fire Conversion":
			{
				baseStats: [2, 1.01, true, true],
				in: [
					["Air", 1, 0.9, 10, []],
					["Fire", 1, 0.9, 10, []],
				],
				out: [
					["Fire", 2, 11, 10, ["Fire", 10]],
				],
				lock: ["Fire", 1],
			}
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
