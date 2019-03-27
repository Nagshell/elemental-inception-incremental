var loopId = null;
var gameVersion = 13;
var elapsed = 0;
var formattedElapsed = 0;
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
		else
		{
			returnData.minimized = false;
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
			if (data.aElements[i].amount > 0 || data.aElements[i].type == "Time")
			{
				numi = i + 1;
			}
		}
		for (var i = 0; i < numi; i++)
		{
			dataToSave.push(Math.trunc(Math.max(0, data.aElements[i].amount) * 1000) / 1000);
			if (data.aElements[i].type == "Time")
			{
				dataToSave.push(-Date.now());
			}
			else
			{
				dataToSave.push(-1 - Math.trunc(data.aElements[i].possibleAmount * 1000) / 1000);
			}
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
		localDataToLoad = JSON.parse(localStorage.getItem("localSaveData"));
		if (localDataToLoad && localDataToLoad.oD)
		{
			optionData = localDataToLoad.oD;
		}

		this.reloadData();
		dataToLoad = JSON.parse(localStorage.getItem("saveData"));
		if (dataToLoad && dataToLoad[0] != gameVersion)
		{
			dataToLoad = versionMigrator(dataToLoad);
			if (Array.isArray(dataToLoad))
			{
				alert("Save system has beed updated. Save was migrated, but there is a chance it could not work properly. If that's the case, please consider hard resetting.");
			}
			else
			{
				alert("Save system has beed updated. There is 99.5% chance previous save wouldn't load properly. Game did hard reset, but you'll recieved a lot of turbo time as an apology.");
				data.oElements.Time.amount += dataToLoad;
				dataToLoad = null;
			}
		}
		if (dataToLoad)
		{
			var z = 0;
			var eCount = 0;
			var mCount = 0;
			while (++z < dataToLoad.length)
			{
				if (!Array.isArray(dataToLoad[z]))
				{
					data.aElements[eCount].amount = dataToLoad[z];
					if (dataToLoad[z] > 0)
					{
						data.aElements[eCount].known = true;
						data.elementsKnown++;
						if (machineDisplayElements[data.aElements[eCount].type] && machineDisplayElements[data.aElements[eCount].type] != "machineTime")
						{
							machineData[machineDisplayElements[data.aElements[eCount].type]].region.boundaryPath = machines.displayRegionPath;
						}
					}
					z++;
					if (data.aElements[eCount].type == "Time")
					{
						elapsed = Date.now() + dataToLoad[z];
						data.aElements[eCount].amount += elapsed * 0.8;
						formattedElapsed = Math.trunc(elapsed / 3600000) + ":" + ("0" + Math.trunc(elapsed % 3600000 / 60000)).slice(-2) + ":" + ("0" + Math.trunc(elapsed % 60000 / 1000)).slice(-2);
						setTimeout(() =>
						{
							elapsed = 0;
						}, 5000);
					}
					else
					{
						data.aElements[eCount].possibleAmount = -dataToLoad[z] - 1;
					}
					eCount++;
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

		c = cMax;
		saveCD = 540000;
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
	initiatePasteLoad: function ()
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
var cMax = 6401;

function tick()
{
	effectSystem.tick();

	coldCircle.decay();
	hotCircle.decay();
	gemCircle.decay();

	machines.tick();
	for (var element in data.oElements)
	{
		//data.oElements[element].amount += 0.100001;
		data.oElements[element].amount += data.oElementsFlow[element];
		if (data.oElements[element].type != "Time")
		{
			data.oElements[element].amount = Math.min(1e300, Math.max(0, data.oElements[element].amount));
		}
		data.oElementsFlow[element] = 0;
	}

	if (data.oElements.Alkahest.amount >= 42 || c < cMax)
	{
		c -= 1;
	}
	if (c == 6400)
	{
		for (var i = 0; i < 10; i++)
		{
			var temp = effectSystem.eventCircles[i];
			temp.maxR = 672;
			temp.minR = 32;
			temp.drawR = temp.maxR;
			temp.velocity = 0;
			temp.width = 1;
			temp.color = elementalColors.Alkahest[1];
		}
		effectSystem.eventCircles[0].velocity = -1 * 0.25;
	}
	else if (c == 5760)
	{
		effectSystem.eventCircles[1].velocity = -2 * 0.25;
	}
	else if (c == 5120)
	{
		effectSystem.eventCircles[2].velocity = -3 * 0.25;
	}
	else if (c == 4480)
	{
		effectSystem.eventCircles[3].velocity = -4 * 0.25;
	}
	else if (c == 3840)
	{
		effectSystem.eventCircles[4].velocity = -5 * 0.25;
	}
	else if (c == 3200)
	{
		effectSystem.eventCircles[5].velocity = -6 * 0.25;
	}
	else if (c == 2560)
	{
		effectSystem.eventCircles[6].velocity = -7 * 0.25;
	}
	else if (c == 1920)
	{
		effectSystem.eventCircles[7].velocity = -8 * 0.25;
	}
	else if (c == 1280)
	{
		effectSystem.eventCircles[8].velocity = -9 * 0.25;
	}
	else if (c == 640)
	{
		effectSystem.eventCircles[9].velocity = -10 * 0.25;
	}
	else if (c == 0)
	{
		for (var i = 0; i < effectSystem.eventCircles.length; i++)
		{
			effectSystem.eventCircles[i].velocity = 0;
			effectSystem.eventCircles[i].color = elementalColors.Alkahest[0];
		}
		effectSystem.eventCircles[0].velocity = 1;
		effectSystem.eventCircles[0].width = 4;
		effectSystem.eventCircles[1].velocity = 2;
		effectSystem.eventCircles[1].width = 10;
		effectSystem.eventCircles[1].drawR = effectSystem.eventCircles[1].minR;
		for (var i = 0; i < initialData.betaElements.length; i++)
		{
			data.oElements[initialData.betaElements[i]].amount = 0;
		}
		if (data.oElements.Revelation.amount < 1)
		{
			data.oElements.Revelation.amount += (1 - data.oElements.Revelation.amount) / 3;
		}
	}
	else if (c == -320)
	{
		c = cMax;
		effectSystem.eventCircles[0].velocity = 0;
		effectSystem.eventCircles[1].velocity = 0;
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
var drain = 16.667;
var maxRounds = 32;
var fps;
var fpsQueue = new cReplacingQueue(37);
var tps;
var tpsQueue = new cReplacingQueue(97);
var lim = false;
var saveCD;
var s;

function loop(timestamp)
{
	var time = performance.now();
	var lastTime = fpsQueue.push(time);
	if (lastTime != "null")
	{
		fps = 37000 / (time - lastTime);
	}
	else
	{
		fps = "..."
	}
	loopId = null;
	if (!lastTimestamp)
	{
		lastTimestamp = timestamp;
	}
	data.oElements.Time.amount += timestamp - lastTimestamp;
	lastTimestamp = timestamp;

	if (machineData.machineTime.recipes[1].enabled && !machineData.machineTime.paused)
	{
		if (data.oElements.TurboLimit.amount < 2)
		{
			data.oElements.TurboLimit.amount = 2;
		}
		maxRounds = data.oElements.TurboLimit.amount;
		if (data.oElements.Time.amount > 1e4)
		{
			data.oElements.TurboLimit.amount = Math.min(32.1, data.oElements.TurboLimit.amount + 0.01);
		}
		else
		{
			data.oElements.TurboLimit.amount = Math.max(1.9, data.oElements.TurboLimit.amount - 0.01);
		}
		data.oElements.NormalLimit.amount = Math.min(3.1, data.oElements.NormalLimit.amount + 0.0001);
	}
	else
	{
		if (data.oElements.NormalLimit.amount < 1)
		{
			data.oElements.NormalLimit.amount = 1;
		}
		maxRounds = data.oElements.NormalLimit.amount;
		if (data.oElements.Time.amount >= 80)
		{
			data.oElements.NormalLimit.amount = Math.min(3.1, data.oElements.NormalLimit.amount + 0.001);
		}
		else
		{
			data.oElements.NormalLimit.amount = Math.max(0.9, data.oElements.NormalLimit.amount - 0.001);
		}
		data.oElements.TurboLimit.amount = Math.max(1.9, data.oElements.TurboLimit.amount - 0.001);
	}

	var rounds = 0;
	while (data.oElements.Time.amount > drain && rounds++ < maxRounds)
	{
		tick();
		time = performance.now();
		lastTime = tpsQueue.push(time);
		if (lastTime != "null")
		{
			tps = 97000 / (time - lastTime);
		}
		else
		{
			tps = "..."
		}
		data.oElements.Time.amount -= drain;
	}
	if (tps != "..." && fps != "...")
	{
		tpf = Math.round(tps / fps * 10) / 10;
	}
	else
	{
		tpf = "...";
	}
	if (tps != "...")
	{
		tps = Math.round(tps);
	}
	if (fps != "...")
	{
		fps = Math.round(fps);
	}
	lim = rounds > maxRounds && data.oElements.Time.amount > 1e4;

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
