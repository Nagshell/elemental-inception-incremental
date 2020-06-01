var loopId = null;
var gameVersion = 305;
var elapsed = 0;
var formattedElapsed = 0;
savingSystem = {
	migrationMessage: "",
	reccurentPaneSave: function (pane)
	{
		var returnData = {
			pinned: pane.pinned,
			subPanes:
			{},
		};
		for (var i = 0; i < pane.subRegions.length; i++)
		{
			if (pane.subRegions[i] == regionData.dragRegion)
			{
				returnData.x = pane.x;
				returnData.y = pane.y;
			}
		}
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
		if (pane.hiddenPath)
		{
			returnData.hidden = true;
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
					if (machine.recipes[j].activated)
					{
						recipeData[0] += 0.5;
					}
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
		localStorage.setItem("saveDataAlternative3", JSON.stringify(dataToSave));

		var localDataToSave = {
			pP: this.reccurentPaneSave(mainPane),
			oD: optionData,
		};
		localStorage.setItem("localSaveDataAlternative3", JSON.stringify(localDataToSave));

		return dataToSave;
	},
	reccurentPaneLoad: function (data, pane)
	{
		if (data.x)
		{
			pane.x = data.x;
		}
		if (data.y)
		{
			pane.y = data.y;
		}
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
		if (data.hidden)
		{
			if (pane.boundaryPath)
			{
				pane.hiddenPath = pane.boundaryPath;
				pane.boundaryPath = null;
			}
		}
	},
	loadData: function ()
	{
		localDataToLoad = JSON.parse(localStorage.getItem("localSaveDataAlternative3"));
		if (localDataToLoad && localDataToLoad.oD)
		{
			optionData = localDataToLoad.oD;
		}

		this.reloadData();
		dataToLoad = JSON.parse(localStorage.getItem("saveDataAlternative3"));
		if (dataToLoad && dataToLoad[0] != gameVersion)
		{
			dataToLoad = versionMigrator(dataToLoad);
			if (Array.isArray(dataToLoad))
			{
				if (this.migrationMessage)
				{
					alert(this.migrationMessage);
				}
				else
				{
					alert("Save system has beed updated. Save was migrated, but there is a chance it could not work properly. If that's the case, please consider hard resetting.");
				}
			}
			else
			{
				if (dataToLoad == -100)
				{
					alert("Updated + Performed full hard reset");
				}
				else
				{
					alert("Save system has beed updated. There is 99.5% chance previous save wouldn't load properly. Game did hard reset, but you have recieved a lot of turbo time as an apology.");
				}
				data.oElements.Time.amount += dataToLoad;
				dataToLoad = null;
				this.saveData();
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
						}, 25000);
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
						var toActivate = false;
						if (rec[0] % 1 > 0)
						{
							rec[0] -= rec[0] % 1;
							toActivate = true;
						}
						if (rec[0] % 3)
						{
							recipe.enabled = true;
						}
						while (rec[0] > 2)
						{
							recipe.region.paymentSuccess(false);
							if (recipe.markedToUpgrade)
							{
								recipe = machine.hiddenRecipes[recipe.upgradeTo];
								machine.upgradeRecipe(i, false);
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
						recipe.activated = toActivate;
					}
				}
			}
			machines.glowCheckCD = 0;
			machines.glowCheck();
			if (machineData.golemInfuser)
			{
				iconLegendPane.markedToSuperGlow = !machineData.golemInfuser.recipes[0].unlocked;
				educationalPane.markedToSuperGlow = !machineData.golemInfuser.recipes[0].unlocked;
			}
			if (localDataToLoad)
			{
				resizeCanvas();
				this.reccurentPaneLoad(localDataToLoad.pP, mainPane);
			}
		}
		savingSystem.loadingEnded = true;

		tickLore();
		reccurentLoreUnTick(lore.dataTree);
		lorePane.region.markedToSuperGlow = false;
		postprocessAdditionalCircles();
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
		preprocessLore();
		preprocessSplosions();
		preprocessParticles();
		resizeCanvas();
		preprocessBackgrounds();

		cancelAnimationFrame(loopId);
		loopId = requestAnimationFrame(loop);

		c = cMax;
		saveCD = 5400;
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
	hardReset: function ()
	{
		if (confirm(locale.hardReset))
		{
			this.reloadData();
			this.saveData();
			location.reload(true);
		}
	},

	toString: function ()
	{
		// add some extra info to save. Date is probably more or less helpfull.
		var extraInfo = "(" + new Date().toLocaleString().replace(/[^\w.,\-:;]/g, "") + ")";
		return "TFA3save" + extraInfo + "<<" + btoa(JSON.stringify(this.saveData())) + ">>";
	},
	validateImportString(str)
	{
		// if (typeof str !== "string") {
		//	 return false;
		// } // just convert instead
		str += "";
		// whitespace and quotes may remain from copying from somewhere else
		str = str.replace(/[\s"]/g, "");
		if (str.match(/TFA3save/))
		{
			let match = str.match(/TFA3save.*?<<([^]*)>>/);
			if (match)
				str = match[1];
		}
		try
		{
			JSON.parse(atob(str));
		}
		catch (e)
		{
			return false;
		}
		return str;
	},
	loadFromString: function (str)
	{
		let data = this.validateImportString(str);
		if (!data)
		{
			return alert(locale.exchangeStringInvalid);
		}
		if (confirm(locale.exchangeStringLoad))
		{
			localStorage.setItem("saveData", atob(data));
			this.loadData();
			location.reload();
			// loading save does not handle closing some of windows properly
			// it wont be bad to reload page anyway
		}
	},
	globalCopyHandler: function (event)
	{
		event.clipboardData.setData("text/plain", savingSystem.toString());
		event.preventDefault();
		alert(locale.exchangeStringCopyed);
	},
	globalPasteHandler: function (event)
	{
		let str = event.clipboardData.getData("text/plain");
		event.preventDefault();

		str = savingSystem.validateImportString(str);
		if (!str)
		{
			return alert(locale.exchangeStringInvalid);
		}

		// let str = prompt(locale.exchangeStringPasted);
		// if (str == locale.exchangeStringLoadComfirmed) {
		if (confirm(locale.exchangeStringPasted))
		{
			savingSystem.loadFromString(str);
		}
	},
}
document.addEventListener("copy", savingSystem.globalCopyHandler);
document.addEventListener("paste", savingSystem.globalPasteHandler);

var c;
var cMax = 6401;
var winCheck = true;

function tick()
{
	tickLore();
	effectSystem.tick();

	decayAdditionalCircles();

	machines.tick();

	for (var element in data.oElements)
	{
		//data.oElements[element].amount += 0.100001;
		data.oElements[element].amount += data.oElementsFlow[element];
		if (data.oElements[element].type != "Time")
		{
			data.oElements[element].amount = Math.min(1e300, Math.max(-1e300, data.oElements[element].amount));
		}
		data.oElementsFlow[element] = 0;
	}

	// if (data.oElements.Alkahest.amount >= 42)
	// {
	// 	splosions.start("Alkaplosion");
	// }
	// splosions.tick();

	if (winCheck && data.oElements["Spire Warden"].amount > 0.5)
	{
		victoryPane.showText("                 Victory achieved?\n                 I hope you liked the side stage 3.3 of The First Alkahistorian!\n\n"+
		"Big thanks to my supporters and helpers:\nPhantomLemon aka Milk | Blake Chapman | WaitingIdly | Kesseleth | Len923 | The Troubled Twin\n"+
		"Alexander Clatworthy | xicmiah | Levi King | Jesse Clark | Dranacos  | William Mitchell\nGrant Kowalewski | Ivan Ivanov | Ryan Beeman | Marlyn | Liran Biber | Toksyuryel\nMojken | Baxil | Summercat | charlyfu | Cullen Langford | Ferlinheld"+
		"\n\nAs well as Essi, who was there to hug whenever he felt like it."+
		"\n\nHonourable mentions: Hevipelle and lerpinglemur"+
		"\n\n\\\\('_' )\n Made by Nagshell");
		regionData.showRegion.action(victoryPane);
		victoryPane.x = 200;
		victoryPane.y = 200;
		winCheck = false;
	}
}

var lastTimestamp = null;
var accumulatedTime = 0;

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
	if (machineData.machineTime.recipes[0].enabled && !machineData.machineTime.paused)
	{
		maxRounds = Math.floor(Math.random() * 1.25);
	}
	else if (machineData.machineTime.recipes[1].enabled && !machineData.machineTime.paused)
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
		if (data.oElements.Time.amount >= 200)
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
	while (data.oElements.Time.amount > 100 && rounds++ < maxRounds)
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
	draw();
	loopId = requestAnimationFrame(loop);
}
savingSystem.loadData();
