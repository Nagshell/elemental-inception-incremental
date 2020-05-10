function prepareTemplatedMachineData(simplifiedDataToBeProcessed)
{
	var templateData = {};
	for (var title in simplifiedDataToBeProcessed)
	{
		var simplifiedData = simplifiedDataToBeProcessed[title];
		var preparedData = {
			x: simplifiedData.baseStats[0],
			y: simplifiedData.baseStats[1],

			recipes: [],
			hiddenRecipes:
			{},
			baseRecipes:
			{},
		};
		if (simplifiedData.baseStats[2])
		{
			if (Array.isArray(simplifiedData.baseStats[2]))
			{
				preparedData.displayArray = simplifiedData.baseStats[2];
				preparedData.displayArrayCurrent = 0;
				preparedData.displayArrayCD = 0;
				preparedData.displayArrayCDMax = 256;
				preparedData.displayElement = simplifiedData.baseStats[2][0];
			}
			else
			{
				preparedData.displayElement = simplifiedData.baseStats[2];
			}
		}
		if (simplifiedData.baseStats[3])
		{
			preparedData.displayStep = simplifiedData.baseStats[3];
		}
		else
		{
			preparedData.displayStep = 8;
		}
		for (var recipeTitle in simplifiedData.recipes)
		{
			var simplifiedRecipe = simplifiedData.recipes[recipeTitle];
			var preparedRecipe = {
				id: recipeTitle,
				title: locale.oRecipes[recipeTitle] || recipeTitle,
				enabled: false,
				inputs: [],
				outputs: [],
				productionRate: simplifiedRecipe.baseStats[0],
				efficiency: simplifiedRecipe.baseStats[1],
				alwayson: simplifiedRecipe.alwayson,
			};
			if (simplifiedRecipe.alwayson)
			{
				preparedData.unpauseable = true;
			}
			if (simplifiedRecipe.refund)
			{
				preparedRecipe.refund = {};
				for (var i = 0; i < simplifiedRecipe.refund.length; i += 2)
				{
					preparedRecipe.refund[simplifiedRecipe.refund[i]] = simplifiedRecipe.refund[i + 1]
				}
			}

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
				if (simplifiedIngredient[2] < 0)
				{
					preparedIngredient.max *= -1;
					preparedIngredient.noLimit = true;
				}
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
				preparedData.baseRecipes[recipeTitle] = preparedRecipe;
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
