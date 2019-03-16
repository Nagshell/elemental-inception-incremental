var loopId = null;
var gameVersion = 3;
savingSystem = {
	reccurentPaneSave: function (pane)
	{
		var returnData = {
			x: pane.x,
			y: pane.y,
			pinned: pane.pinned,
			subPanes:
			{},
		};
		if (pane.centerX)
		{
			returnData.centerX = pane.centerX;
			returnData.centerY = pane.centerY;
		}
		if (pane.boundaryPathMax)
		{
			returnData.minimized = true;
			regionData.maxRegion.action(pane);
		}
		if (pane.boundaryPath)
		{
			returnData.visible = true;
		}
		for (var i = 0; i < pane.subPanes.length; i++)
		{
			if (pane.subPanes[i].id)
			{
				returnData.subPanes[pane.subPanes[i].id] = this.reccurentPaneSave(pane.subPanes[i]);
			}
		}
		if (returnData.minimized)
		{
			regionData.minRegion.action(pane);
		}
		return returnData;
	},
	saveData: function ()
	{
		var dataToSave = [gameVersion];
		var numi = 0;
		for (var i = 0; i < data.aElements.length; i++)
		{
			if (data.aElements[i].amount > 0)
			{
				numi = i + 1;
			}
		}
		for (var i = 0; i < numi; i++)
		{
			dataToSave.push(Math.trunc(data.aElements[i].amount * 1000) / 1000);
		}
		numi = 0;
		for (var i = 0; i < machines.dataTranslator.length; i++)
		{
			var machine = machineData[machines.dataTranslator[i]];
			if (machine.upped)
			{
				numi = i + 1;
			}
		}
		for (var i = 0; i < numi; i++)
		{
			var machine = machineData[machines.dataTranslator[i]];
			if (machine.upped)
			{
				var temp = [];
				for (var j = 0; j < machine.recipes.length; j++)
				{
					var recipeData = machine.recipes[j].upData.slice();
					recipeData[0] *= 3;
					if (machine.recipes[j].enabled)
					{
						recipeData[0]++;
						if (machine.paused)
						{
							recipeData[0]++;
						}
					}
					for (var k = 1; k < recipeData.length; k++)
					{
						recipeData[k]--;
					}
					while (recipeData.length > 0 && recipeData[recipeData.length - 1] == 0)
					{
						recipeData.length--;
					}
					temp.push(recipeData);
				}
				while (temp.length > 0 && temp[temp.length - 1].length == 0)
				{
					temp.length--;
				}
				dataToSave.push(temp);
			}
			else
			{
				dataToSave.push([]);
			}
		}
		localStorage.setItem("saveData", JSON.stringify(dataToSave));

		var localDataToSave = {
			pP: this.reccurentPaneSave(mainPane),
			oD: optionData,
		};
		localStorage.setItem("localSaveData", JSON.stringify(localDataToSave));

		return dataToSave;
	},
	reccurentPaneLoad: function (data, pane)
	{
		pane.x = data.x;
		pane.y = data.y;
		if (data.centerX)
		{
			pane.centerX = data.centerX;
			pane.centerY = data.centerY;
		}
		for (var i = 0; i < pane.subPanes.length; i++)
		{
			if (pane.subPanes[i].id && data.subPanes[pane.subPanes[i].id])
			{
				this.reccurentPaneLoad(data.subPanes[pane.subPanes[i].id], pane.subPanes[i]);
			}
		}
		if (data.pinned)
		{
			regionData.pinRegion.action(pane);
		}
		if (data.minimized)
		{
			regionData.minRegion.action(pane);
		}
		if (data.visible)
		{
			if (pane.hiddenPath)
			{
				pane.boundaryPath = pane.hiddenPath;
				pane.hiddenPath = null;
			}
		}
	},
	loadData: function ()
	{
		if (!initialData || !machines || !machineDisplayElements || !panes || !regionData || !canvas || !particleGenerator || !images)
		{
			alert("Game data did not load properly. Please try refreshing the page or contact me if problem persists.");
			return;
		}
		localDataToLoad = JSON.parse(localStorage.getItem("localSaveData"));
		if (localDataToLoad && localDataToLoad.oD)
		{
			optionData = localDataToLoad.oD;
		}

		this.reloadData();
		dataToLoad = JSON.parse(localStorage.getItem("saveData"));

		if (dataToLoad)
		{
			if (gameVersion != dataToLoad[0])
			{
				alert("Game has beed updated. There is high chance previous save could not work properly. If that's the case, please consider hard resetting.");
				dataToLoad = versionMigrator(dataToLoad);
			}
			var z = 0;
			var eCount = 0;
			var mCount = 0;
			while (++z < dataToLoad.length)
			{
				if (!Array.isArray(dataToLoad[z]))
				{
					data.aElements[eCount++].amount = dataToLoad[z];
				}
				else
				{
					var mach = dataToLoad[z];
					var machine = machineData[machines.dataTranslator[mCount++]];
					if (mach.length)
					{
						machine.region.boundaryPath = machines.displayRegionPath;
					}
					for (var i = 0; i < mach.length; i++)
					{
						var rec = mach[i];
						var recipe = machine.recipes[i];
						if (rec[0] % 3)
						{
							recipe.enabled = true;
						}
						while (rec[0] > 2)
						{
							recipe.region.paymentSuccess();
							if (recipe.markedToUpgrade)
							{
								recipe = machine.hiddenRecipes[recipe.upgradeTo];
								machine.upgradeRecipe(i);
							}

							rec[0] -= 3;
						}

						if (rec[0] > 1)
						{
							machine.paused = true;
						}
						var iCount = 0;
						var searchNext = true;
						var slider = null;
						for (var j = 1; j < rec.length; j++)
						{
							rec[j]++;
							while (searchNext)
							{
								if (iCount < recipe.inputs.length)
								{
									if (recipe.inputs[iCount].sliderRegion)
									{
										searchNext = false;
										slider = recipe.inputs[iCount].sliderRegion;
									}
									else
									{
										iCount++;
									}
								}
								else
								{
									if (recipe.outputs[iCount - recipe.inputs.length].sliderRegion)
									{
										searchNext = false;
										slider = recipe.outputs[iCount - recipe.inputs.length].sliderRegion;
									}
									else
									{
										iCount++;
									}
								}
							}
							while (rec[j] > 2)
							{
								slider.paymentSuccess();
								rec[j] -= 3;
							}
							slider.mouseHandler(null, slider.target.sliderRegion.x + 10 + 40 * (rec[j]), 0, "mouseup");
							iCount++;
							searchNext = true;
						}
					}
				}
			}
			machines.glowCheckCD = 0;
			machines.glowCheck();
			if (machineData.golemInfuser)
			{
				educationalPane.region.markedToSuperGlow = !machineData.golemInfuser.recipes[0].unlocked;
			}

			if (localDataToLoad)
			{
				resizeCanvas();
				this.reccurentPaneLoad(localDataToLoad.pP, mainPane);
			}
		}
		savingSystem.loadingEnded = true;
	},
	reloadData: function ()
	{
		preprocessAdditionalCircles();

		preprocessIcons();
		preprocessData();
		preprocessRegionData();
		preprocessPaneData();
		preprocessMachines();

		preprocessMachinesData(simplifiedMachineData);
		preprocessParticles();
		resizeCanvas();

		cancelAnimationFrame(loopId);
		loopId = requestAnimationFrame(loop);

		c = 7201;
		saveCD = 540;
		s = saveCD / 2;
	},
	toConsole: function ()
	{
		return btoa(JSON.stringify(this.saveData()));
	},
	load: function (data)
	{
		if (confirm(locale.exchangeStringLoad))
		{
			localStorage.setItem("saveData", atob(data));
			this.loadData();
		}
	},
	initiateLoad: function ()
	{
		this.attemptedPaste = 1800;
	},
	hardReset: function ()
	{
		if (confirm(locale.hardReset))
		{
			this.reloadData();
			this.saveData();
		}
	},
	attemptedPaste: 0,
}

var c;
var saveCD;
var s;

function tick()
{

	particleGenerator.tick();
	machines.tick();
	for (var element in data.oElements)
	{
		data.oElements[element].amount += data.oElementsFlow[element];
		data.oElements[element].amount = Math.min(1e300, Math.max(0, data.oElements[element].amount));
		data.oElementsFlow[element] = 0;
	}

	if (data.oElements.Alkahest.amount >= 42 || c < 7201)
	{
		c -= 1;
	}
	if (c == 7200)
	{
		particleGenerator.explosions.push(new cExplosion(0, 0, 1, elementalColors["Alkahest"][1], elementalColors["Alkahest"][1], 7200, 1e10));
	}
	else if (c == 3600)
	{
		particleGenerator.explosions.push(new cExplosion(0, 0, 2, elementalColors["Alkahest"][2], elementalColors["Alkahest"][2], 7200, 1e10));
	}
	else if (c == 1800)
	{
		particleGenerator.explosions.push(new cExplosion(0, 0, 4, elementalColors["Alkahest"][3], elementalColors["Alkahest"][3], 7200, 1e10));
	}
	else if (c > 1280 && c < 7200 && c % 256 == 0)
	{
		particleGenerator.explosions.push(new cExplosion(0, 0, -1, elementalColors["Alkahest"][0], elementalColors["Alkahest"][0], 1280, 0.01));
	}
	else if (c > 640 && c <= 4800 && c % 128 == 0)
	{
		particleGenerator.explosions.push(new cExplosion(0, 0, -2, elementalColors["Alkahest"][0], elementalColors["Alkahest"][0], 1280, 0.01));
	}
	else if (c > 320 && c <= 3600 && c % 64 == 0)
	{
		particleGenerator.explosions.push(new cExplosion(0, 0, -4, elementalColors["Alkahest"][0], elementalColors["Alkahest"][0], 1280, 0.01));
	}
	else if (c > 160 && c <= 2000 && c % 32 == 0)
	{
		particleGenerator.explosions.push(new cExplosion(0, 0, -8, elementalColors["Alkahest"][0], elementalColors["Alkahest"][0], 1280, 0.01));
	}
	else if (c > 80 && c <= 600 && c % 16 == 0)
	{
		particleGenerator.explosions.push(new cExplosion(0, 0, -16, elementalColors["Alkahest"][0], elementalColors["Alkahest"][0], 1280, 0.01));
	}
	else if (c <= 0)
	{
		c = 7201;
		for (var i = 0; i < data.aElements.length; i++)
		{
			data.aElements[i].amount = 0;
		}
		particleGenerator.explosions.push(new cExplosion(0, 0, 10, elementalColors["Alkahest"][0], elementalColors["Alkahest"][0], 7200, 1e20));
	}
}

function testPaste(event)
{
	if (savingSystem.attemptedPaste > 0)
	{
		navigator.clipboard.readText().then(
			clipText => console.log(clipText));
	}
}
document.addEventListener("paste", testPaste);
var lastTimestamp = null;
var accumulatedTime = 0;
var drain = 16;
var maxRounds = 500;

function loop(timestamp)
{
	loopId = null;
	if (!lastTimestamp)
	{
		lastTimestamp = timestamp;
	}
	accumulatedTime += timestamp - lastTimestamp;
	lastTimestamp = timestamp;
	var rounds = 0;
	while (accumulatedTime > 16 && rounds++ < maxRounds)
	{
		accumulatedTime -= drain;
		tick();
	}
	if (s-- <= 0)
	{
		s = saveCD;
		savingSystem.saveData();
	}
	if (savingSystem.attemptedPaste > 0)
	{
		savingSystem.attemptedPaste--;
	}
	draw();
	loopId = requestAnimationFrame(loop);
}
savingSystem.loadData();
