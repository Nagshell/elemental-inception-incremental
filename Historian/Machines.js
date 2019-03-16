var machines = {
	list: [],
	glowCheckCD: 0,

	glowCheck: function ()
	{
		if (this.glowCheckCD-- <= 0)
		{
			this.glowCheckCD = 20 * optionData.glowCheckCDMultiplier;

			for (var i = 0; i < this.list.length; i++)
			{
				var tempMachine = this.list[i];
				for (var j = 0; j < tempMachine.recipes.length; j++)
				{
					var tempRecipe = tempMachine.recipes[j];
					if (tempRecipe.pieChart.results.working)
					{
						for (var k = 0; k < tempRecipe.outputs.length; k++)
						{
							var tempIngredient = tempRecipe.outputs[k];
							var tempMax = tempIngredient.max;
							if (tempIngredient.sliderRegion)
							{
								tempMax = tempIngredient.sliderBase * Math.pow(tempIngredient.sliderStep, tempIngredient.upped);
							}
							data.oElements[tempIngredient.type].possibleAmount = Math.max(tempMax, data.oElements[tempIngredient.type].possibleAmount);
						}
					}
				}
			}

			var mainFullGlow = false;
			for (var i = 0; i < this.list.length; i++)
			{
				var tempMachine = this.list[i];
				var machineFullGlow = false;
				var machineWeakGlow = false;
				for (var j = 0; j < tempMachine.recipes.length; j++)
				{
					var tempRecipe = tempMachine.recipes[j];
					var recipeFullGlow = false;
					var recipeWeakGlow = false;
					if (tempRecipe.unlocked)
					{
						if (tempRecipe.upgradeTo)
						{
							if (paymentPane.isAffordable(tempRecipe.upgradeCosts))
							{
								recipeFullGlow = true;
							}
							else if (paymentPane.isPotentiallyAffordable(tempRecipe.upgradeCosts))
							{
								recipeWeakGlow = true;
							}
						}
						for (var k = 0; k < tempRecipe.inputs.length; k++)
						{
							var tempIngredient = tempRecipe.inputs[k];
							if (tempIngredient.sliderRegion)
							{
								var sliderFullGlow = false;
								var sliderWeakGlow = false;
								if (tempIngredient.upped < tempIngredient.upgrades.length)
								{
									if (paymentPane.isAffordable(tempIngredient.upgrades[tempIngredient.upped].costs))
									{
										sliderFullGlow = true;
									}
									else if (paymentPane.isPotentiallyAffordable(tempIngredient.upgrades[tempIngredient.upped].costs))
									{
										sliderWeakGlow = true;
									}
								}
								if (sliderFullGlow)
								{
									tempIngredient.sliderRegion.glowColor = "purple";
								}
								else if (sliderWeakGlow)
								{
									tempIngredient.sliderRegion.glowColor = "blue";
								}
								else
								{
									tempIngredient.sliderRegion.glowColor = null;
								}
								tempIngredient.sliderRegion.markedToReadyGlow = sliderFullGlow || sliderWeakGlow;
								recipeFullGlow = recipeFullGlow || sliderFullGlow;
								recipeWeakGlow = recipeWeakGlow || sliderWeakGlow;
							}
						}
						for (var k = 0; k < tempRecipe.outputs.length; k++)
						{
							var tempIngredient = tempRecipe.outputs[k];
							if (tempIngredient.sliderRegion)
							{
								var sliderFullGlow = false;
								var sliderWeakGlow = false;
								if (tempIngredient.upped < tempIngredient.upgrades.length)
								{
									if (paymentPane.isAffordable(tempIngredient.upgrades[tempIngredient.upped].costs))
									{
										sliderFullGlow = true;
									}
									else if (paymentPane.isPotentiallyAffordable(tempIngredient.upgrades[tempIngredient.upped].costs))
									{
										sliderWeakGlow = true;
									}
								}
								if (sliderFullGlow)
								{
									tempIngredient.sliderRegion.glowColor = "purple";
								}
								else if (sliderWeakGlow)
								{
									tempIngredient.sliderRegion.glowColor = "blue";
								}
								else
								{
									tempIngredient.sliderRegion.glowColor = null;
								}
								tempIngredient.sliderRegion.markedToReadyGlow = sliderFullGlow || sliderWeakGlow;
								recipeFullGlow = recipeFullGlow || sliderFullGlow;
								recipeWeakGlow = recipeWeakGlow || sliderWeakGlow;
							}
						}
					}
					else
					{
						if (paymentPane.isAffordable(tempRecipe.unlockCosts))
						{
							recipeFullGlow = true;
						}
						else if (paymentPane.isPotentiallyAffordable(tempRecipe.unlockCosts))
						{
							recipeWeakGlow = true;
						}
					}
					if (recipeFullGlow)
					{
						tempRecipe.region.glowColor = "purple";
					}
					else if (recipeWeakGlow)
					{
						tempRecipe.region.glowColor = "blue";
					}
					else
					{
						tempRecipe.region.glowColor = null;
					}
					tempRecipe.region.markedToReadyGlow = recipeFullGlow || recipeWeakGlow;
					machineFullGlow = machineFullGlow || recipeFullGlow;
					machineWeakGlow = machineWeakGlow || recipeWeakGlow;
				}
				if (machineFullGlow)
				{
					tempMachine.pane.glowColor = "purple";
					tempMachine.region.glowColor = "purple";
				}
				else if (machineWeakGlow)
				{
					tempMachine.pane.glowColor = "blue";
					tempMachine.region.glowColor = "blue";
				}
				else
				{
					tempMachine.pane.glowColor = null;
					tempMachine.region.glowColor = null;
				}

				tempMachine.pane.markedToReadyGlow = machineFullGlow || machineWeakGlow;
				tempMachine.region.markedToReadyGlow = machineFullGlow || machineWeakGlow;
				mainFullGlow = mainFullGlow || machineFullGlow;
				if (tempMachine.pane.markedToReadyGlow && !tempMachine.region.boundaryPath)
				{
					tempMachine.region.boundaryPath = machines.displayRegionPath;
				}

			}
			mainPane.markedToReadyGlow = mainFullGlow;
		}
	},
	tick: function ()
	{
		this.glowCheck();
		for (var i = 0; i < this.list.length; i++)
		{
			if (!this.list[i].region.boundaryPath && this.list[i].displayElement)
			{
				if (data.oElements[this.list[i].displayElement].amount > 0)
				{
					this.list[i].region.boundaryPath = machines.displayRegionPath;
				}
			}
			this.list[i].tick();
		}
	},

	draw: function (ctx) {},
	upgradeRecipe: function (i)
	{
		var temp = this.recipes[i];
		this.recipes[i] = this.hiddenRecipes[temp.upgradeTo];
		if (temp.pane.boundaryPath)
		{
			regionData.hideRegion.action(temp.pane);
			regionData.showRegion.action(this.recipes[i].pane);
		}

		this.recipes[i].unlocked = temp.unlocked;
		this.recipes[i].enabled = temp.enabled;
		this.recipes[i].pane.x = temp.pane.x;
		this.recipes[i].pane.y = temp.pane.y;
		this.recipes[i].upData[0] = temp.upData[0];
		if (temp.pane.pinned)
		{
			regionData.pinRegion.action(temp.pane);
			regionData.pinRegion.action(this.recipes[i].pane);

		}
	},
	upgradeTick: function ()
	{
		for (var i = 0; i < this.recipes.length; i++)
		{
			if (this.recipes[i].markedToUpgrade)
			{
				this.upgradeRecipe(i);
			}
		}
	},
	machineTick: function ()
	{
		this.upgradeTick();
		if (this.displayElement)
		{
			if (data.oElements[this.displayElement].amount > 1e255)
			{
				this.displayStep = Math.min(0.03, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e127)
			{
				this.displayStep = Math.min(0.06, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e63)
			{
				this.displayStep = Math.min(0.125, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e31)
			{
				this.displayStep = Math.min(0.25, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e15)
			{
				this.displayStep = Math.min(0.5, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e7)
			{
				this.displayStep = Math.min(1, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e3)
			{
				this.displayStep = Math.min(2, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e1)
			{
				this.displayStep = Math.min(4, this.displayStep);
			}
		}
		for (var i = 0; i < this.recipes.length; i++)
		{
			var temp = this.recipes[i];
			if (this.paused)
			{
				continue;
			}
			if (temp.enabled)
			{
				var state = "working";
				for (var j = 0; j < temp.inputs.length; j++)
				{
					if (data.oElements[temp.inputs[j].type].amount < temp.inputs[j].min)
					{
						state = "empty";
					}
				}
				for (var j = 0; j < temp.outputs.length; j++)
				{
					if (data.oElements[temp.outputs[j].type].amount >= temp.outputs[j].max && !temp.outputs[j].noLimit)
					{
						state = "full";
					}
				}
				temp.pieChart.push(state);

				if (state !== "working")
				{
					continue;
				}
				var amount = 1e300;
				if (temp.scaling)
				{
					for (var j = 0; j < temp.inputs.length; j++)
					{
						if (temp.inputs[j].ratio)
						{
							amount = Math.min(amount, data.oElements[temp.inputs[j].type].amount / temp.inputs[j].ratio);
						}
					}
					amount /= 100;
					amount *= temp.productionRate;
				}
				else
				{
					amount = 1;
				}

				for (var j = 0; j < temp.inputs.length; j++)
				{
					data.oElementsFlow[temp.inputs[j].type] -= amount * temp.inputs[j].ratio;
					particleGenerator.machineFlow(machineDisplayElements[temp.inputs[j].type], this.id, temp.inputs[j].type, amount * temp.inputs[j].ratio);
				}
				for (var j = 0; j < temp.outputs.length; j++)
				{
					var flow = Math.min(amount * temp.outputs[j].ratio * temp.efficiency + data.oElements[temp.outputs[j].type].amount, temp.outputs[j].max * 1.2) - data.oElements[temp.outputs[j].type].amount;
					data.oElementsFlow[temp.outputs[j].type] += flow;
					if (this.id != "golemInfuser")
					{
						particleGenerator.machineFlow(this.id, machineDisplayElements[temp.outputs[j].type], temp.outputs[j].type, flow);
					}
				}
				if (this.id == "golemInfuser")
				{
					particleGenerator.explosion(this.id, 1, temp.outputs[0].type, 600, Math.pow(10, temp.outputs[0].ratio));
				}
			}
		}
	},

	displayRegionMouseHandler: function (pane, x, y, type)
	{
		if (this.machine.pane.hiddenPath)
		{
			regionData.showRegion.mouseHandler(this.machine.pane, x, y, type);
		}
		else
		{
			regionData.hideRegion.mouseHandler(this.machine.pane, x, y, type);
		}
	},
	displayRegionRegularDraw: function (ctx, pane)
	{
		ctx.save();
		if (images[this.machine.id])
		{
			ctx.drawImage(images[this.machine.id], -32, -32);
		}

		if (this.machine.displayElement)
		{
			ctx.strokeStyle = elementalColors[this.machine.displayElement][0];
			ctx.fillStyle = elementalColors[this.machine.displayElement][3];
			ctx.lineWidth = 0.1;
			var amount = data.oElements[this.machine.displayElement].amount;
			if (amount > 0.0)
			{
				var radius = 0;
				while (amount > 1)
				{
					radius += this.machine.displayStep;
					amount /= 10;
				}

				radius = Math.min(radius, 16);

				if (this.machine.displayStep >= 1)
				{
					for (var rad2 = Math.min(radius + this.machine.displayStep * Math.trunc(Math.max(3, 10 / this.machine.displayStep)), 16); rad2 > radius; rad2 -= this.machine.displayStep)
					{
						ctx.beginPath();
						ctx.arc(0, 0, rad2, 0, Math.PI * 2);
						ctx.stroke();
					}
				}
				ctx.beginPath();
				var angle = -Math.PI / 2 + Math.PI * 2 * Math.max(0, amount - 0.1) * 10 / 9;
				ctx.arc(0, 0, radius + this.machine.displayStep, -Math.PI / 2, angle);
				ctx.arc(0, 0, radius, angle, 3 * Math.PI / 2);
				//ctx.lineTo(0, 0);
				ctx.closePath();
				ctx.fill();
				ctx.lineWidth = 1.3;
				ctx.stroke();
			}
		}
		ctx.restore();
	},
	regularPaneDraw: function (ctx)
	{
		ctx.save();
		if (this.boundaryPathMax)
		{

			var turnedOn = 0;
			for (var i = 0; i < this.machine.recipes.length; i++)
			{
				if (this.machine.recipes[i].unlocked)
				{
					turnedOn++;
				}
			}
			ctx.save();
			ctx.fillStyle = chartColors["null"];
			ctx.lineWidth = 1;
			if (turnedOn > 0)
			{
				ctx.translate(optionData.iconSize * 5 + 60, optionData.iconSize + 1);
				var radius = optionData.iconSize * 2 + 2;
				radius /= turnedOn;
				radius = Math.min(radius, optionData.iconSize);
				for (var i = 0; i < this.machine.recipes.length; i++)
				{
					if (this.machine.recipes[i].unlocked)
					{
						var temp = this.machine.recipes[i].pieChart;
						ctx.translate(0, radius);
						ctx.save();
						ctx.beginPath();
						ctx.arc(0, 0, radius - 1, 0, Math.PI * 2);
						ctx.fill();
						if (!this.machine.recipes[i].enabled)
						{
							ctx.globalAlpha = Math.min(1, borderGlow.alpha + 0.25);
						}
						ctx.stroke();

						ctx.clip();

						var angle = 0;
						for (var type in temp.results)
						{
							ctx.beginPath();
							ctx.moveTo(0, 0);
							ctx.arc(0, 0, radius - 3, angle, angle + temp.results[type] / 300 * Math.PI);
							angle += temp.results[type] / 300 * Math.PI;
							ctx.fillStyle = chartColors[type];
							ctx.fill();
						}
						ctx.restore();
						ctx.translate(0, radius);
					}

				}
			}
			ctx.restore();
			if (this.machine.displayElement)
			{
				ctx.drawImage(images["icon" + this.machine.displayElement], optionData.iconSize * 2 - 31, optionData.iconSize + 6);
				ctx.fillStyle = ctx.strokeStyle;
				ctx.textAlign = "left";
				ctx.fillText(this.machine.displayElement, optionData.iconSize * 4, optionData.iconSize * 4.5 - 14);
				drawNumber(ctx, data.oElements[this.machine.displayElement].amount, optionData.iconSize * 4, optionData.iconSize * 4.5 + 4, elementalDisplayType[this.machine.displayElement], "left");
			}
		}
		else
		{
			if (this.machine.displayElement)
			{
				if (optionData.iconSize > 16)
				{
					ctx.drawImage(images["icon" + this.machine.displayElement], optionData.iconSize * 2 - 31, optionData.iconSize + 6);
				}
				ctx.fillStyle = ctx.strokeStyle;
				ctx.textAlign = "left";
				ctx.fillText(this.machine.displayElement, 5, optionData.iconSize * 4.5 - 14);
				drawNumber(ctx, data.oElements[this.machine.displayElement].amount, 5, optionData.iconSize * 4.5 + 4, elementalDisplayType[this.machine.displayElement], "left");
			}
		}
		ctx.restore();
	},
	pauseRegionMouseHandler: function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			pane.machine.paused = !pane.machine.paused;
		}
	},
	pauseRegionDraw: function (ctx, pane)
	{
		ctx.save();
		if (pane.machine.paused)
		{
			ctx.globalAlpha = borderGlow.alpha * 1.5 + 0.25;
			ctx.drawImage(images.iconResume, 0, 0);
		}
		else
		{
			ctx.drawImage(images.iconPause, 0, 0);
		}
		ctx.restore();
	},
	recipeRegionMouseHandler: function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (this.recipe.unlocked)
			{
				if (x < optionData.iconSize + 1)
				{
					this.recipe.enabled = !this.recipe.enabled;
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
						paymentPane.preparePayment(this.recipe.upgradeCosts, x, y, pane, this);
					}
				}
			}
			else
			{
				if (this.recipe.unlockCosts && this.recipe.unlockCosts.length > 0)
				{
					paymentPane.preparePayment(this.recipe.unlockCosts, x, y, pane, this);
				}
				else
				{
					this.paymentSuccess();
				}
			}
		}
	},
	recipeRegionPaymentSuccess: function ()
	{
		this.recipe.upData[0]++;
		this.recipe.machine.upped = true;
		if (!this.recipe.unlocked)
		{
			this.recipe.unlocked = true;
			// if (this.pane.top.boundaryPathMax)
			// {
			// 	this.pane.top.boundaryPathMax = machines.displayPanePath;
			// }
			// else if (this.pane.top.hiddenPath)
			// {
			// 	this.pane.top.hiddenPath = machines.displayPanePath;
			// }
			// else
			// {
			// 	this.pane.top.boundaryPath = machines.displayPanePath;
			// }
		}
		else
		{
			this.recipe.markedToUpgrade = true;
			this.recipe = this.recipe.machine.hiddenRecipes[this.recipe.upgradeTo];
			this.pane = this.recipe.pane;
			this.recipe.region = this;
		}
	},
	recipeRegionDraw: function (ctx, pane)
	{
		ctx.save();

		if (this.recipe.unlocked)
		{
			if (this.recipe.enabled)
			{
				ctx.drawImage(images.iconOn, 0, 0);
			}
			else
			{
				ctx.globalAlpha = borderGlow.alpha * 1.5 + 0.25;
				ctx.drawImage(images.iconOff, 0, 0);
			}
			ctx.globalAlpha = 1;
			if (this.recipe.upgradeTo)
			{
				if (paymentPane.isAffordable(this.recipe.upgradeCosts))
				{
					ctx.globalAlpha = borderGlow.alpha * 1.5 + 0.25;
					ctx.drawImage(images.iconUp, optionData.iconSize * 2 + 2, 0);
					ctx.globalAlpha = 1;
				}
				else
				{
					ctx.drawImage(images.iconUpNot, optionData.iconSize * 2 + 2, 0);
					if (this.markedToReadyGlow)
					{
						ctx.globalAlpha = borderGlow.alpha * 1.5 + 0.25;
					}
				}
			}
			if (this.pane.boundaryPath)
			{
				ctx.globalAlpha = 1;
				ctx.drawImage(images.iconHide, optionData.iconSize + 1, 0);
			}
			else
			{
				ctx.drawImage(images.iconShow, optionData.iconSize + 1, 0);
				ctx.globalAlpha = 1;
			}
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(optionData.iconSize + 0.5, 0);
			ctx.lineTo(optionData.iconSize + 0.5, optionData.iconSize + 1);
			ctx.moveTo(optionData.iconSize * 2 + 1.5, 0);
			ctx.lineTo(optionData.iconSize * 2 + 1.5, optionData.iconSize + 1);
			ctx.moveTo(optionData.iconSize * 3 + 2.5, 0);
			ctx.lineTo(optionData.iconSize * 3 + 2.5, optionData.iconSize + 1);
			ctx.stroke();
			ctx.textAlign = "left";
			ctx.fillStyle = ctx.strokeStyle;
			ctx.fillText(this.recipe.title, optionData.iconSize * 3 + 6, optionData.iconSize / 2);
		}
		else
		{
			ctx.drawImage(images.iconLock, optionData.iconSize * 2 + 2, 0);
		}
		ctx.restore();
	},
	recipePaneDraw: function (ctx, pane)
	{
		ctx.save();
		ctx.lineWidth = 1;
		ctx.save();

		var temp = this.recipe.pieChart;

		var radius = Math.min(optionData.iconSize + 14, this.finalY / 2 - optionData.iconSize - 12);
		//ctx.translate(optionData.iconSize * 3 + 200 - radius, optionData.iconSize * 2 + 19 + radius);
		ctx.translate(optionData.iconSize + 172 + radius, optionData.iconSize * 2 + 21 + radius);
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2);
		ctx.stroke();
		ctx.fill();
		ctx.clip();
		var angle = 0;
		radius -= 3;

		if (!this.recipe.enabled)
		{
			radius -= 6;
		}
		for (var type in temp.results)
		{
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.arc(0, 0, radius, angle, angle + temp.results[type] / 300 * Math.PI);
			angle += temp.results[type] / 300 * Math.PI;
			ctx.fillStyle = chartColors[type];
			ctx.fill();
		}
		ctx.restore();

		ctx.fillStyle = ctx.strokeStyle;
		ctx.textAlign = "center";
		if (this.recipe.scaling)
		{
			ctx.fillText(locale.recipeType + " - " + locale.recipeTypeScaling, optionData.iconSize * 2 + 152, optionData.iconSize + 9);
		}
		else
		{
			ctx.fillText(locale.recipeType + " - " + locale.recipeTypeFixed, optionData.iconSize * 2 + 152, optionData.iconSize + 9);
		}
		ctx.fillText(locale.efficiency + " " + Math.trunc(this.recipe.efficiency * 10000) / 100 + "%", optionData.iconSize * 2 + 152, optionData.iconSize * 2 + 9);
		ctx.beginPath();
		ctx.moveTo(optionData.iconSize + 100, optionData.iconSize * 2 + 18.5);
		ctx.lineTo(optionData.iconSize * 3 + 203, optionData.iconSize * 2 + 18.5);
		ctx.stroke();
		if (this.recipe.inputs.length > 0)
		{
			ctx.fillText(locale.inputs, optionData.iconSize * 0.5 + 50, optionData.iconSize * 1.5 + 1);
			ctx.strokeRect(optionData.iconSize - 0.5, optionData.iconSize + 0.5, 101, optionData.iconSize + 1);
		}
		if (this.recipe.outputs.length > 0)
		{
			ctx.fillText(locale.outputs, optionData.iconSize * 0.5 + 50, this.outputY);
			ctx.strokeRect(-0.5, this.outputY - 8.5, optionData.iconSize + 101, 17);
		}
		ctx.textAlign = "left";
		ctx.fillText(locale.production, optionData.iconSize + 102, optionData.iconSize * 2 + 27);
		ctx.fillText(locale.chart, optionData.iconSize + 102, optionData.iconSize * 2 + 44);
		ctx.restore();
	},
	ingredientRegionMouseHandler: function (pane, x, y, type)
	{
		x -= this.x;
		y -= this.y;
		if (type == "mousemove")
		{
			if (x < 50)
			{
				if (y > 17)
				{
					tooltipPane.showText("Current");
				}
			}
			else if (x > 65)
			{
				if (y <= 17)
				{
					if (this.ingredient.noLimit)
					{
						tooltipPane.showText("NonBlock Ratio");
					}
					else
					{
						tooltipPane.showText("Ratio");
					}
				}
				else
				{
					if (this.ingredient.min)
					{
						tooltipPane.showText("Required");
					}
					else
					{
						if (this.ingredient.noLimit)
						{
							tooltipPane.showText("NonBlock Max");
						}
						else
						{
							tooltipPane.showText("Maximal");
						}

					}

				}
			}

		}
	},
	ingredientRegionDraw: function (ctx)
	{
		ctx.save();
		ctx.fillStyle = ctx.strokeStyle;
		ctx.textAlign = "left";
		var temp = this.ingredient;
		ctx.fillText(temp.type, 3, 8);

		var displayStyle = "fixed";
		var resultRatio = temp.ratio;
		if (temp.max)
		{
			resultRatio *= temp.recipe.efficiency;
		}
		if (resultRatio > 1e3)
		{
			displayStyle = "exp";
		}
		else if (resultRatio == Math.trunc(resultRatio))
		{
			displayStyle = "";
		}
		drawNumber(ctx, resultRatio, optionData.iconSize + 98, 8, displayStyle, "right", temp.noLimit ? "0 - " : "");
		drawNumber(ctx, data.oElements[temp.type].amount, 3, 25, elementalDisplayType[temp.type]);
		ctx.fillText("/", optionData.iconSize / 2 + 50, 25);
		drawNumber(ctx, temp.min || temp.max, optionData.iconSize + 98, 25, elementalDisplayType[temp.type], "right");
		ctx.restore();
	},
	sliderRegionPaymenentSuccess: function ()
	{
		this.target.upData[this.target.upDataId] += 3;
		this.target.recipe.machine.upped = true;
		this.target.upped++;
		if (this.target.max)
		{
			this.target.slider = 2;
			this.target.max = this.target.sliderBase * Math.pow(this.target.sliderStep, this.target.upped);
		}
	},
	sliderRegionMouseHandler: function (pane, x, y, type)
	{
		x -= this.x;
		y -= this.y;
		var sliderMoved = false;
		if (this.drag && type == "mousemove")
		{
			if (this.target.upped && x < 100)
			{
				sliderMoved = true;
			}
		}
		else if (type == "mousedown")
		{
			this.drag = true;
			machines.drag = this;
		}
		else if (type == "mouseup")
		{
			this.drag = false;
			var temp = this.target;
			if (x >= 100)
			{
				if (this.target.upped < this.target.upgrades.length)
				{
					paymentPane.preparePayment(this.target.upgrades[this.target.upped].costs, x, y, pane, this);
				}
			}
			else if (this.target.upped)
			{
				sliderMoved = true;
			}
		}
		if (sliderMoved)
		{
			if (x <= 10)
			{
				this.target.slider = 0;
			}
			else if (x <= 90)
			{
				this.target.slider = Math.max(0, (x - 10)) / 40;
			}
			else
			{
				this.target.slider = 2;
			}
			this.target.upData[this.target.upDataId] = Math.floor(this.target.upData[this.target.upDataId] / 3) * 3;
			this.target.upData[this.target.upDataId] += this.target.slider;
			var newValue = this.target.sliderBase * Math.pow(this.target.sliderStep, (this.target.slider - 1) * this.target.upped);
			if (this.target.min)
			{
				this.target.min = newValue;
			}
			if (this.target.max)
			{
				this.target.max = newValue;
			}
		}
	},
	sliderRegionDraw: function (ctx)
	{
		var temp = this.target;
		ctx.beginPath();
		ctx.moveTo(100, 0);
		ctx.lineTo(100, optionData.iconSize);
		ctx.stroke();
		if (temp.upped < temp.upgrades.length)
		{

			if (paymentPane.isAffordable(temp.upgrades[temp.upped].costs))
			{

				ctx.drawImage(images.iconUp, 100, 0);
			}
			else
			{
				ctx.drawImage(images.iconUpNot, 100, 0);
			}
		}
		ctx.save();
		if (temp.upped)
		{
			ctx.fillStyle = "#181818";
			ctx.fillRect(0, 0, 92, optionData.iconSize);
			ctx.fillStyle = "#646464";
			ctx.fillRect(8 + 40 * temp.slider, 0, 4, optionData.iconSize);
			ctx.drawImage(images.iconLeft, 0, 0);
			ctx.drawImage(images.iconRight, 92, 0);
		}
		ctx.restore();
	},
};

function preprocessMachines()
{
	machines.displayRegionPath = new Path2D();
	machines.displayRegionPath.arc(0, 0, 32, 0, Math.PI * 2);

	machines.displayPanePathMin = new Path2D();
	machines.displayPanePathMin.rect(0, 0, optionData.iconSize * 4 + 120, optionData.iconSize * 5 + 4);
	machines.displayPanePathDemo = new Path2D();
	machines.displayPanePathDemo.rect(0, 0, optionData.iconSize * 7 + 207, optionData.iconSize * 5 + 4);

	var path = new Path2D();
	path.rect(0, 0, optionData.iconSize, optionData.iconSize);
	machines.machinePauseRegion = new cRegion(optionData.iconSize * 3 + 3, optionData.iconSize + 1);
	machines.machinePauseRegion.boundaryPath = path;
	machines.machinePauseRegion.customDraw = machines.pauseRegionDraw;
	machines.machinePauseRegion.mouseHandler = machines.pauseRegionMouseHandler;

	machines.recipeSelectorRegion = new cRegion(optionData.iconSize * 4 + 4, optionData.iconSize + 1);
	machines.recipeSelectorRegion.boundaryPath = new Path2D();
	machines.recipeSelectorRegion.boundaryPath.rect(0, 0, optionData.iconSize + 53, optionData.iconSize);
	machines.recipeSelectorRegion.text = "Recipes";
	machines.recipeSelectorRegion.textX = optionData.iconSize + 25;
	machines.recipeSelectorRegion.textY = optionData.iconSize / 2;
	machines.recipeSelectorRegion.customDraw = function (ctx, pane)
	{
		if (pane.recipeSelectorPane.boundaryPath)
		{
			ctx.drawImage(images.iconHide, 0, 0);
		}
		else
		{
			ctx.drawImage(images.iconShow, 0, 0);
		}
	};
	machines.recipeSelectorRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (!pane.recipeSelectorPane.boundaryPath)
			{
				regionData.showRegion.action(pane.recipeSelectorPane);
			}
			else
			{
				regionData.hideRegion.action(pane.recipeSelectorPane);
			}
		}
	};

	machines.recipeRegionPath = new Path2D();
	machines.recipeRegionPath.rect(0, 0, optionData.iconSize * 3 + 203, optionData.iconSize);

	machines.sliderRegionPath = new Path2D();
	machines.sliderRegionPath.rect(0, 0, optionData.iconSize + 100, optionData.iconSize);

	machines.ingredientRegionPath = new Path2D();
	machines.ingredientRegionPath.rect(0, 0, optionData.iconSize + 100, 33);
}

function initMachine(title)
{
	var thisData = machineData[title];
	machines.list.push(thisData);
	thisData.tick = machines.machineTick;
	thisData.upgradeTick = machines.upgradeTick;
	thisData.upgradeRecipe = machines.upgradeRecipe;
	thisData.id = title;
	thisData.title = locale.oMachines[title];
	thisData.currentRecipes = [];

	thisData.region = new cRegion(thisData.x, thisData.y);
	thisData.region.machine = thisData;
	thisData.region.mouseHandler = machines.displayRegionMouseHandler;
	if (thisData.displayRegionCustomDraw)
	{
		thisData.region.customDraw = thisData.displayRegionCustomDraw;
	}
	else
	{
		thisData.region.customDraw = machines.displayRegionRegularDraw;
		if (!thisData.displayStep)
		{
			thisData.displayStep = 16;
		}
	}

	mainPane.subRegions.push(thisData.region);

	thisData.pane = new cPane(mainPane, thisData.x + 32, thisData.y + 32);
	thisData.pane.machine = thisData;
	thisData.pane.centerPanes = [];
	thisData.pane.boundaryPath = machines.displayPanePathDemo;
	thisData.pane.boundaryPathMin = machines.displayPanePathMin;
	thisData.pane.subRegions.push(regionData.dragRegion);
	thisData.pane.subRegions.push(regionData.minRegion);
	thisData.pane.subRegions.push(regionData.hideRegion);
	thisData.pane.subRegions.push(regionData.draggableTitleRegionShifted);
	thisData.pane.subRegions.push(machines.machinePauseRegion);
	thisData.pane.subRegions.push(regionData.pinRegion);
	thisData.pane.subRegionsMin.push(regionData.dragRegion);
	thisData.pane.subRegionsMin.push(regionData.maxRegion);
	thisData.pane.subRegionsMin.push(regionData.hideRegion);
	thisData.pane.subRegionsMin.push(regionData.draggableTitleRegionShifted);
	thisData.pane.subRegionsMin.push(machines.machinePauseRegion);
	thisData.pane.subRegionsMin.push(regionData.pinRegion);
	thisData.pane.title = thisData.title;
	thisData.pane.id = title;
	if (thisData.paneCustomDraw)
	{
		thisData.pane.customDraw = thisData.paneCustomDraw;
	}
	else
	{
		thisData.pane.customDraw = machines.regularPaneDraw;
	}

	regionData.hideRegion.action(thisData.pane);

	thisData.pane.subRegions.push(machines.recipeSelectorRegion);

	thisData.pane.recipeSelectorPane = new cPane(thisData.pane, optionData.iconSize * 4 + 4, optionData.iconSize + 1);
	thisData.pane.recipeSelectorPane.title = locale.recipes;
	thisData.pane.recipeSelectorPane.independent = true;
	//thisData.pane.recipeSelectorPane.id = "recipeSelector";
	thisData.pane.recipeSelectorPane.boundaryPath = new Path2D();
	thisData.pane.recipeSelectorPane.boundaryPath.rect(0, 0, optionData.iconSize * 3 + 203, (optionData.iconSize + 1) * (thisData.recipes.length + 1) - 1);
	thisData.pane.recipeSelectorPane.subRegions.push(regionData.hideRegion);
	regionData.hideRegion.action(thisData.pane.recipeSelectorPane);

	for (var i = thisData.recipes.length - 1; i >= 0; i--)
	{
		var thisRecipe = thisData.recipes[i];
		thisRecipe.machine = thisData;
		prepareRecipe(thisRecipe);

		var recipeRegion = new cRegion(0, (optionData.iconSize + 1) * (i + 1));
		thisRecipe.region = recipeRegion;
		thisData.pane.recipeSelectorPane.subRegions.push(recipeRegion);
		recipeRegion.recipe = thisRecipe;
		recipeRegion.boundaryPath = machines.recipeRegionPath;
		recipeRegion.mouseHandler = machines.recipeRegionMouseHandler;
		recipeRegion.paymentSuccess = machines.recipeRegionPaymentSuccess;
		recipeRegion.customDraw = machines.recipeRegionDraw;
		recipeRegion.pane = thisRecipe.pane;
		thisRecipe.pane.x = (optionData.iconSize + 1) * (7 + thisData.recipes.length - i) + 200;
		thisRecipe.pane.y = (optionData.iconSize + 1) * (2 + i);
	}
	for (var recipeTitle in thisData.hiddenRecipes)
	{
		var thisRecipe = thisData.hiddenRecipes[recipeTitle];
		thisRecipe.machine = thisData;
		prepareRecipe(thisRecipe);
	}
}

function prepareRecipe(thisRecipe)
{
	thisRecipe.upData = [0];
	thisRecipe.pieChart = new cEfficiencyCounter();

	var recipePane = new cPane(thisRecipe.machine.pane, 0, 0);
	thisRecipe.pane = recipePane;

	recipePane.title = thisRecipe.title;
	recipePane.id = thisRecipe.id;
	recipePane.independent = true;
	recipePane.recipe = thisRecipe;

	recipePane.subRegions.push(regionData.dragRegion);
	recipePane.subRegions.push(regionData.pinRegion);
	recipePane.subRegions.push(regionData.hideRegion);
	recipePane.subRegions.push(regionData.draggableTitleRegion);
	recipePane.customDraw = machines.recipePaneDraw;

	var y = optionData.iconSize * 2 + 2;
	for (var j = 0; j < thisRecipe.inputs.length; j++)
	{
		y += prepareIngredient(thisRecipe.inputs[j], thisRecipe, 0, y) + 1;
	}
	recipePane.outputY = y + 8;
	y += 17;
	for (var j = 0; j < thisRecipe.outputs.length; j++)
	{
		y += prepareIngredient(thisRecipe.outputs[j], thisRecipe, 0, y) + 1;
	}
	recipePane.finalY = y - 1;
	recipePane.boundaryPath = new Path2D();
	recipePane.boundaryPath.rect(0, 0, optionData.iconSize * 3 + 203, y - 1);
	regionData.hideRegion.action(recipePane);
}

function prepareIngredient(thisIngredient, thisRecipe, x, y)
{
	var h = 33;
	thisIngredient.recipe = thisRecipe;
	thisIngredient.ingredientRegion = new cRegion(x, y);
	thisIngredient.ingredientRegion.ingredient = thisIngredient;
	thisIngredient.ingredientRegion.boundaryPath = machines.ingredientRegionPath;
	thisIngredient.ingredientRegion.mouseHandler = machines.ingredientRegionMouseHandler;
	thisIngredient.ingredientRegion.customDraw = machines.ingredientRegionDraw;

	thisRecipe.pane.subRegions.push(thisIngredient.ingredientRegion);

	if (thisIngredient.upgrades)
	{
		thisIngredient.upData = thisRecipe.upData;
		thisIngredient.upDataId = thisRecipe.upData.length;
		thisRecipe.upData.push(0);
		var sliderRegion = new cRegion(x, y + 34);
		thisIngredient.sliderRegion = sliderRegion;
		sliderRegion.boundaryPath = machines.sliderRegionPath;
		sliderRegion.mouseHandler = machines.sliderRegionMouseHandler;
		sliderRegion.customDraw = machines.sliderRegionDraw;
		sliderRegion.target = thisIngredient;
		sliderRegion.paymentSuccess = machines.sliderRegionPaymenentSuccess;
		thisRecipe.pane.subRegions.push(sliderRegion);
		h += optionData.iconSize + 1;
	}
	return h;
}
