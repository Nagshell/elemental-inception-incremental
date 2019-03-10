var machines = {
	list: [],
	glowCheckCD: 0,

	glowCheck: function ()
	{
		if (this.glowCheckCD-- == 0)
		{
			this.glowCheckCD = 60;
			var mainGlow = false;
			for (var i = 0; i < this.list.length; i++)
			{
				var tempMachine = this.list[i];
				var machineGlow = false;
				for (var j = 0; j < tempMachine.recipes.length; j++)
				{
					var tempRecipe = tempMachine.recipes[j];
					var recipeGlow = false;
					if (tempRecipe.unlocked)
					{

						if (tempRecipe.upgradeTo)
						{
							if (paymentPane.isAffordable(tempRecipe.upgradeCosts))
							{
								recipeGlow = true;
							}
						}
						for (var k = 0; k < tempRecipe.inputs.length; k++)
						{
							var tempIngredient = tempRecipe.inputs[k];
							if (tempIngredient.sliderRegion)
							{
								var sliderGlow = false;
								if (tempIngredient.upped < tempIngredient.upgrades.length)
								{
									if (paymentPane.isAffordable(tempIngredient.upgrades[tempIngredient.upped].costs))
									{
										sliderGlow = true;

									}
								}
								tempIngredient.sliderRegion.markedToGlow = sliderGlow;
								recipeGlow = recipeGlow || sliderGlow;
							}
						}
						for (var k = 0; k < tempRecipe.outputs.length; k++)
						{
							var tempIngredient = tempRecipe.outputs[k];
							if (tempIngredient.sliderRegion)
							{
								var sliderGlow = false;
								if (tempIngredient.upped < tempIngredient.upgrades.length)
								{
									if (paymentPane.isAffordable(tempIngredient.upgrades[tempIngredient.upped].costs))
									{
										sliderGlow = true;

									}
								}
								tempIngredient.sliderRegion.markedToGlow = sliderGlow;
								recipeGlow = recipeGlow || sliderGlow;
							}
						}
					}
					else
					{
						if (paymentPane.isAffordable(tempRecipe.unlockCosts))
						{
							recipeGlow = true;
						}
					}
					tempRecipe.region.markedToGlow = recipeGlow;
					machineGlow = machineGlow || recipeGlow;
				}
				tempMachine.pane.markedToGlow = machineGlow;
				if (machineGlow && !tempMachine.region.boundaryPath)
				{
					tempMachine.region.boundaryPath = machines.displayRegionPath;
				}
				tempMachine.region.markedToGlow = machineGlow;
				mainGlow = mainGlow || machineGlow;

			}
			mainPane.markedToGlow = mainGlow;
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

	machineTick: function ()
	{
		if (this.displayElement)
		{
			if (data.oElements[this.displayElement].amount > 1e255)
			{
				this.displayStep = Math.min(0.09, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e127)
			{
				this.displayStep = Math.min(0.125, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e63)
			{
				this.displayStep = Math.min(0.25, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e31)
			{
				this.displayStep = Math.min(0.5, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e15)
			{
				this.displayStep = Math.min(1, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e7)
			{
				this.displayStep = Math.min(2, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e3)
			{
				this.displayStep = Math.min(4, this.displayStep);
			}
			else if (data.oElements[this.displayElement].amount > 1e1)
			{
				this.displayStep = Math.min(8, this.displayStep);
			}
		}
		for (var i = 0; i < this.recipes.length; i++)
		{
			var temp = this.recipes[i];
			while (temp.markedToUpgrade)
			{
				this.recipes[i] = this.hiddenRecipes[temp.upgradeTo];
				regionData.hideRegion.action(temp.pane);
				this.recipes[i].pane.x = temp.pane.x;
				this.recipes[i].pane.y = temp.pane.y;
				temp = this.recipes[i];
			}
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
						temp.inputs[j].pieChart.push("empty");
					}
					else
					{
						temp.inputs[j].pieChart.push("working");
					}
				}
				for (var j = 0; j < temp.outputs.length; j++)
				{
					if (data.oElements[temp.outputs[j].type].amount >= temp.outputs[j].max && !temp.outputs[j].noLimit)
					{
						state = "full";
						temp.outputs[j].pieChart.push("full");
					}
					else
					{
						temp.outputs[j].pieChart.push("working");
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
					particleGenerator.machineFlow(machineDisplayElements[temp.inputs[j].type], this.title, temp.inputs[j].type, amount * temp.inputs[j].ratio);
				}
				for (var j = 0; j < temp.outputs.length; j++)
				{
					var flow = Math.min(amount * temp.outputs[j].ratio * temp.efficiency + data.oElements[temp.outputs[j].type].amount,temp.outputs[j].max*1.4) - data.oElements[temp.outputs[j].type].amount;
					data.oElementsFlow[temp.outputs[j].type] += flow;
					if (this.title != "Golem Infuser")
						particleGenerator.machineFlow(this.title, machineDisplayElements[temp.outputs[j].type], temp.outputs[j].type, flow);
				}
				if (this.title == "Golem Infuser")
				{
					particleGenerator.explosion(this.title, 1, temp.outputs[0].type, 600, Math.pow(10,temp.outputs[0].ratio));
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

		if (this.machine.displayElement)
		{
			ctx.strokeStyle = elementalColors[this.machine.displayElement][0];
			ctx.fillStyle = elementalColors[this.machine.displayElement][3];
			ctx.lineWidth = 0.1;
			var amount = data.oElements[this.machine.displayElement].amount;
			if (amount > 0.0)
			{
				var radius = 1;
				while (amount > 1)
				{
					radius += this.machine.displayStep;
					amount /= 10;
				}

				radius = Math.min(radius, 32);

				if (this.machine.displayStep >= 1)
				{
					for (var rad2 = Math.min(radius + this.machine.displayStep * Math.trunc(Math.max(3, 10 / this.machine.displayStep)), 32); rad2 > radius; rad2 -= this.machine.displayStep)
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
			ctx.save();
			var turnedOn = 0;
			for (var i = 0; i < this.machine.recipes.length; i++)
			{
				if (this.machine.recipes[i].enabled)
				{
					turnedOn++;
				}
			}
			if (turnedOn > 0)
			{
				ctx.translate(0, 18 + 29 / turnedOn);
				for (var i = 0; i < this.machine.recipes.length; i++)
				{
					if (this.machine.recipes[i].enabled)
					{
						var temp = this.machine.recipes[i].pieChart;

						ctx.save();
						ctx.beginPath();
						ctx.arc(40, 0, 25 / turnedOn, 0, Math.PI * 2);
						ctx.stroke();
						ctx.fill();
						ctx.clip();
						var angle = 0;
						for (var type in temp.results)
						{
							ctx.beginPath();
							ctx.moveTo(40, 0);
							ctx.arc(40, 0, 22 / turnedOn, angle, angle + temp.results[type] / 300 * Math.PI);
							angle += temp.results[type] / 300 * Math.PI;
							ctx.fillStyle = chartColors[type];
							ctx.fill();
						}
						ctx.restore();
						ctx.translate(0, 3 + 50 / turnedOn);
					}
					
				}
			}

			ctx.restore();

			ctx.fillStyle = ctx.strokeStyle;
			if (this.machine.displayElement)
			{
				ctx.drawImage(images["icon" + this.machine.displayElement], 70, 17);
				ctx.fillText(this.machine.displayElement, 158, 30);
				drawNumber(ctx, data.oElements[this.machine.displayElement].amount, 147, 47, elementalDisplayType[this.machine.displayElement]);
			}
		}
		else
		{
			ctx.save();
			var turnedOn = false;
			ctx.translate(12, 200);
			for (var i = 0; i < this.machine.recipes.length; i++)
			{
				if (this.machine.recipes[i].pieChart.results.null == 600)
				{
					continue;
				}
				turnedOn = true;
				var temp = this.machine.recipes[i].pieChart;

				var radius = 31 - this.machine.recipes.length;
				ctx.save();
				ctx.beginPath();
				ctx.arc(40, 0, radius, 0, Math.PI * 2);
				ctx.stroke();
				ctx.fill();
				ctx.clip();
				var angle = 0;
				radius -= 3;
				if (!this.machine.recipes[i].enabled)
				{
					radius /= 2;
				}
				for (var type in temp.results)
				{
					ctx.beginPath();
					ctx.moveTo(40, 0);
					ctx.arc(40, 0, radius, angle, angle + temp.results[type] / 300 * Math.PI);
					angle += temp.results[type] / 300 * Math.PI;
					ctx.fillStyle = chartColors[type];
					ctx.fill();
				}

				ctx.restore();
				if (!this.machine.recipes[i].enabled)
				{
					radius *= 2;
				}
				ctx.translate(0, radius * 2 + 10);
			}

			ctx.restore();

			ctx.fillStyle = ctx.strokeStyle;
			if (turnedOn)
			{
				ctx.fillText("Efficiency", 50, 140);
				ctx.fillText("Charts", 50, 157);
			}

			if (this.machine.displayElement)
			{
				ctx.drawImage(images["icon" + this.machine.displayElement], 17, 17);
				ctx.fillText(this.machine.displayElement, 49, 90);
				drawNumber(ctx, data.oElements[this.machine.displayElement].amount, 32, 107, elementalDisplayType[this.machine.displayElement], "left");
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
		if (pane.machine.paused)
		{
			ctx.drawImage(images.iconResume, 0, 0);
		}
		else
		{
			ctx.drawImage(images.iconPause, 0, 0);
		}
	},
	recipeRegionMouseHandler: function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (this.recipe.unlocked)
			{
				if (x < 17)
				{
					this.recipe.enabled = !this.recipe.enabled;
				}
				else if (x < 34)
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
				else if (x < 51)
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
		if (!this.recipe.unlocked)
		{
			this.recipe.unlocked = true;
			this.pane.top.boundaryPath = machines.displayPanePath;
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
				ctx.drawImage(images.iconOff, 0, 0);
			}
			if (this.pane.boundaryPath)
			{
				ctx.drawImage(images.iconHide, 17, 0);
			}
			else
			{
				ctx.drawImage(images.iconShow, 17, 0);
			}
			if (this.recipe.upgradeTo)
			{
				if (paymentPane.isAffordable(this.recipe.upgradeCosts))
				{
					ctx.drawImage(images.iconUp, 34, 0);
				}
				else
				{
					ctx.drawImage(images.iconUpNot, 34, 0);
				}
			}
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(16.5, 0);
			ctx.lineTo(16.5, 17);
			ctx.moveTo(33.5, 0);
			ctx.lineTo(33.5, 17);
			ctx.moveTo(50.5, 0);
			ctx.lineTo(50.5, 17);
			ctx.stroke();
			ctx.textAlign = "left";
			ctx.fillStyle = ctx.strokeStyle;
			ctx.fillText(this.recipe.title, 55, 8);
		}
		else
		{
			ctx.drawImage(images.iconLock, 17, 0);
		}
		ctx.restore();
	},
	recipePaneDraw: function (ctx, pane)
	{
		ctx.save();
		ctx.lineWidth = 1;
		ctx.beginPath();

		ctx.textAlign = "left";
		ctx.fillStyle = ctx.strokeStyle;
		var y = 30;
		if (this.recipe.inputs.length > 0)
		{
			ctx.fillText("Inputs", 15, y);
		}
		y += 22;
		for (var i = 0; i < this.recipe.inputs.length; i++)
		{
			ctx.save();
			ctx.strokeRect(34, y - 8, 122, 50);
			ctx.fillStyle = "#080808";
			ctx.fillRect(34, y - 8, 122, 50);
			ctx.restore();
			ctx.strokeRect(34, y - 8, 122, 33);
			ctx.save();
			ctx.fillStyle = "#080808";
			ctx.fillRect(34, y - 8, 122, 33);
			ctx.restore();
			var temp = this.recipe.inputs[i];
			ctx.fillText(temp.type, 36, y);
			if (temp.ratio > 1e3)
			{
				drawNumber(ctx, temp.ratio, 153, y, "exp", "right");
			}
			else if (temp.ratio == Math.trunc(temp.ratio))
			{
				drawNumber(ctx, temp.ratio, 153, y, "", "right");
			}
			else
			{
				drawNumber(ctx, temp.ratio, 153, y, "fixed", "right");
			}
			y += 17;
			drawNumber(ctx, data.oElements[temp.type].amount, 36, y, elementalDisplayType[temp.type]);
			ctx.fillText("/", 95, y);
			drawNumber(ctx, temp.min, 105, y, elementalDisplayType[temp.type]);
			y += 17;
			ctx.save();
			ctx.strokeRect(140, y - 8, 16, 16);
			ctx.fillStyle = "#080808";
			ctx.fillRect(140, y - 8, 16, 16);
			var temp = temp.pieChart;

			ctx.save();
			ctx.beginPath();
			ctx.arc(148, y, 6, 0, Math.PI * 2);
			ctx.stroke();
			ctx.fill();
			ctx.clip();
			var angle = 0;
			for (var type in temp.results)
			{
				ctx.beginPath();
				ctx.moveTo(148, y);
				ctx.arc(148, y, 5, angle, angle + temp.results[type] / 300 * Math.PI);
				angle += temp.results[type] / 300 * Math.PI;
				ctx.fillStyle = chartColors[type];
				ctx.fill();
			}

			ctx.restore();
			ctx.restore();

			y += 22;
		}
		if (this.recipe.outputs.length > 0)
		{
			ctx.fillText("Outputs", 15, y);
		}
		y += 22;
		for (var i = 0; i < this.recipe.outputs.length; i++)
		{
			ctx.save();
			ctx.strokeRect(34, y - 8, 122, 50);
			ctx.fillStyle = "#080808";
			ctx.fillRect(34, y - 8, 122, 50);
			ctx.restore();
			ctx.strokeRect(34, y - 8, 122, 33);
			ctx.save();
			ctx.fillStyle = "#080808";
			ctx.fillRect(34, y - 8, 122, 33);
			ctx.restore();
			var temp = this.recipe.outputs[i];
			ctx.fillText(temp.type, 36, y);
			if (temp.ratio * this.recipe.efficiency > 1e3)
			{
				drawNumber(ctx, temp.ratio * this.recipe.efficiency, 153, y, "exp", "right");
			}
			else if (temp.ratio * this.recipe.efficiency == Math.trunc(temp.ratio * this.recipe.efficiency))
			{
				drawNumber(ctx, temp.ratio * this.recipe.efficiency, 153, y, "", "right");
			}
			else
			{
				drawNumber(ctx, temp.ratio * this.recipe.efficiency, 153, y, "fixed", "right");
			}
			y += 17;
			drawNumber(ctx, data.oElements[temp.type].amount, 36, y, elementalDisplayType[temp.type]);
			ctx.fillText("/", 95, y);
			drawNumber(ctx, temp.max, 105, y, elementalDisplayType[temp.type]);
			y += 17;
			ctx.save();
			ctx.strokeRect(140, y - 8, 16, 16);
			ctx.fillStyle = "#080808";
			ctx.fillRect(140, y - 8, 16, 16);

			var temp = temp.pieChart;

			ctx.save();
			ctx.beginPath();
			ctx.arc(148, y, 6, 0, Math.PI * 2);
			ctx.stroke();
			ctx.fill();
			ctx.clip();
			var angle = 0;
			for (var type in temp.results)
			{
				ctx.beginPath();
				ctx.moveTo(148, y);
				ctx.arc(148, y, 5, angle, angle + temp.results[type] / 300 * Math.PI);
				angle += temp.results[type] / 300 * Math.PI;
				ctx.fillStyle = chartColors[type];
				ctx.fill();
			}

			ctx.restore();

			ctx.restore();
			y += 22;
		}
		ctx.fillText("Efficiency " + this.recipe.efficiency * 100 + "%", 15, y);
		y += 22;

		ctx.restore();
	},
	sliderRegionPaymenentSuccess: function ()
	{
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
		if (this.drag && type == "mousemove")
		{
			if (this.target.upped && x <= 88)
			{
				this.target.slider = Math.max(0, (x - 2)) / 43;
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
			if (x > 88)
			{
				if (this.target.upped < this.target.upgrades.length)
				{
					paymentPane.preparePayment(this.target.upgrades[this.target.upped].costs, x, y, pane, this);
				}

			}
		}
	},
	sliderRegionDraw: function (ctx)
	{
		var temp = this.target;
		if (temp.upped < temp.upgrades.length)
		{
			ctx.strokeRect(89, 0, 16, 16);
			if (paymentPane.isAffordable(temp.upgrades[temp.upped].costs))
			{

				ctx.drawImage(images.iconUp, 89, 0);
			}
			else
			{
				ctx.drawImage(images.iconUpNot, 89, 0);
			}
		}
		ctx.save();
		ctx.strokeRect(0, 0, 88, 16);
		if (temp.upped)
		{
			ctx.fillStyle = "#181818";
			ctx.fillRect(0, 0, 88, 16);
			ctx.fillStyle = "#646464";
			ctx.fillRect(0 + 42 * temp.slider, 0, 4, 16);
			ctx.restore();
		}
		else
		{

			ctx.fillStyle = "#080808";
			ctx.fillRect(0, 0, 88, 16);
			ctx.restore();
		}
	},
};

function preprocessMachines()
{
	machines.displayRegionPath = new Path2D();
	machines.displayRegionPath.arc(0, 0, 32, 0, Math.PI * 2);
	machines.displayPanePath = new Path2D();
	machines.displayPanePath.rect(0, 0, 400, 493);
	machines.displayPanePathMin = new Path2D();
	machines.displayPanePathMin.rect(0, 0, 200, 81);
	machines.displayPanePathDemo = new Path2D();
	machines.displayPanePathDemo.rect(0, 0, 362, 115);

	var path = new Path2D();
	path.rect(0, 0, 16, 16);
	machines.machinePauseRegion = new cRegion(70, 17);
	machines.machinePauseRegion.boundaryPath = path;
	machines.machinePauseRegion.customDraw = machines.pauseRegionDraw;
	machines.machinePauseRegion.mouseHandler = machines.pauseRegionMouseHandler;
	machines.machinePauseRegionMin = new cRegion(0, 17);
	machines.machinePauseRegionMin.boundaryPath = path;
	machines.machinePauseRegionMin.customDraw = machines.pauseRegionDraw;
	machines.machinePauseRegionMin.mouseHandler = machines.pauseRegionMouseHandler;

	machines.recipeSelectorRegion = new cRegion(87, 17);
	machines.recipeSelectorRegion.boundaryPath = new Path2D();
	machines.recipeSelectorRegion.boundaryPath.rect(0, 0, 70, 16);
	machines.recipeSelectorRegion.text = "Recipes";
	machines.recipeSelectorRegion.textX = 42;
	machines.recipeSelectorRegion.textY = 8;
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
	machines.recipeRegionPath.rect(0, 0, 275, 16);

	machines.sliderRegionPath = new Path2D();
	machines.sliderRegionPath.rect(0, 0, 105, 16);
}
preprocessMachines();

function initMachine(title)
{
	var thisData = machineData[title];
	machines.list.push(thisData);
	thisData.tick = machines.machineTick;
	thisData.title = title;
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

	thisData.pane = new cPane(mainPane, thisData.x + 32, thisData.y +32);
	thisData.pane.machine = thisData;
	thisData.pane.boundaryPath = machines.displayPanePathDemo;
	thisData.pane.boundaryPathMin = machines.displayPanePathMin;
	thisData.pane.subRegions.push(regionData.dragRegion);
	thisData.pane.subRegions.push(regionData.minRegion);
	thisData.pane.subRegions.push(regionData.hideRegion);
	thisData.pane.subRegions.push(regionData.draggableTitleRegionShifted);
	thisData.pane.subRegions.push(machines.machinePauseRegion);
	thisData.pane.subRegionsMin.push(regionData.dragRegion);
	thisData.pane.subRegionsMin.push(regionData.maxRegion);
	thisData.pane.subRegionsMin.push(regionData.hideRegion);
	thisData.pane.subRegionsMin.push(regionData.draggableTitleRegionShifted);
	thisData.pane.subRegionsMin.push(machines.machinePauseRegionMin);
	thisData.pane.title = title;
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

	thisData.pane.recipeSelectorPane = new cPane(thisData.pane, 87, 17);
	thisData.pane.recipeSelectorPane.title = "Recipes";
	thisData.pane.recipeSelectorPane.boundaryPath = new Path2D();
	thisData.pane.recipeSelectorPane.boundaryPath.rect(0, 0, 275, 16 + 17 * thisData.recipes.length);
	thisData.pane.recipeSelectorPane.subRegions.push(regionData.dragRegion);
	thisData.pane.recipeSelectorPane.subRegions.push(regionData.hideRegion);
	thisData.pane.recipeSelectorPane.subRegions.push(regionData.draggableTitleRegion);
	regionData.hideRegion.action(thisData.pane.recipeSelectorPane);

	for (var i = thisData.recipes.length - 1; i >= 0; i--)
	{
		var thisRecipe = thisData.recipes[i];
		thisRecipe.machine = thisData;
		thisRecipe.pieChart = new cEfficiencyCounter();
		var recipeRegion = new cRegion(0, 17 + 17 * i);
		thisRecipe.region = recipeRegion;
		thisData.pane.recipeSelectorPane.subRegions.push(recipeRegion);
		recipeRegion.recipe = thisRecipe;
		recipeRegion.boundaryPath = machines.recipeRegionPath;
		recipeRegion.mouseHandler = machines.recipeRegionMouseHandler;
		recipeRegion.paymentSuccess = machines.recipeRegionPaymentSuccess;
		recipeRegion.customDraw = machines.recipeRegionDraw;

		var recipePane = new cPane(thisData.pane, 104 - 17 * i, 102 + 17 * i);
		thisRecipe.pane = recipePane;
		recipePane.title = thisRecipe.title;
		recipePane.recipe = thisRecipe;
		recipePane.boundaryPath = new Path2D();
		var nL = 84 + 56 * thisRecipe.inputs.length + 56 * thisRecipe.outputs.length;
		recipePane.boundaryPath.rect(0, 0, 275, nL);

		recipePane.subRegions.push(regionData.dragRegion);
		recipePane.subRegions.push(regionData.hideRegion);
		recipePane.subRegions.push(regionData.draggableTitleRegion);

		recipePane.customDraw = machines.recipePaneDraw;

		recipeRegion.pane = recipePane;
		regionData.hideRegion.action(recipePane);

		var y = 78;
		for (var j = 0; j < thisRecipe.inputs.length; j++)
		{
			thisRecipe.inputs[j].pieChart = new cEfficiencyCounter();
			thisRecipe.inputs[j].paymentSuccess = machines.recipePaneResourceUpPaymenentSuccess;
			if (thisRecipe.inputs[j].upgrades)
			{
				var sliderRegion = new cRegion(34, y);
				thisRecipe.inputs[j].sliderRegion = sliderRegion;
				sliderRegion.boundaryPath = machines.sliderRegionPath;
				sliderRegion.mouseHandler = machines.sliderRegionMouseHandler;
				sliderRegion.customDraw = machines.sliderRegionDraw;
				sliderRegion.target = thisRecipe.inputs[j];
				sliderRegion.paymentSuccess = machines.sliderRegionPaymenentSuccess;
				recipePane.subRegions.push(sliderRegion);
			}
			y += 56;
		}
		y += 22;
		for (var j = 0; j < thisRecipe.outputs.length; j++)
		{
			thisRecipe.outputs[j].pieChart = new cEfficiencyCounter();
			thisRecipe.outputs[j].paymentSuccess = machines.recipePaneResourceUpPaymenentSuccess;
			if (thisRecipe.outputs[j].upgrades)
			{
				var sliderRegion = new cRegion(34, y);
				thisRecipe.outputs[j].sliderRegion = sliderRegion;
				sliderRegion.boundaryPath = machines.sliderRegionPath;
				sliderRegion.mouseHandler = machines.sliderRegionMouseHandler;
				sliderRegion.customDraw = machines.sliderRegionDraw;
				sliderRegion.target = thisRecipe.outputs[j];
				sliderRegion.paymentSuccess = machines.sliderRegionPaymenentSuccess;
				recipePane.subRegions.push(sliderRegion);
			}
			y += 56;
		}
	}

	var num = thisData.recipes.length;
	for (var recipeTitle in thisData.hiddenRecipes)
	{
		var thisRecipe = thisData.hiddenRecipes[recipeTitle];
		thisRecipe.pieChart = new cEfficiencyCounter();
		thisRecipe.machine = thisData;

		var recipePane = new cPane(thisData.pane, 191 - 17 * num, 0 * 116 + 17 + 17 * num++);
		thisRecipe.pane = recipePane;
		recipePane.title = thisRecipe.title;
		recipePane.recipe = thisRecipe;
		recipePane.boundaryPath = new Path2D();
		var nL = 84 + 56 * thisRecipe.inputs.length + 56 * thisRecipe.outputs.length;
		recipePane.boundaryPath.rect(0, 0, 190, nL);

		recipePane.subRegions.push(regionData.dragRegion);
		recipePane.subRegions.push(regionData.hideRegion);
		recipePane.subRegions.push(regionData.draggableTitleRegion);
		recipePane.customDraw = machines.recipePaneDraw;
		regionData.hideRegion.action(recipePane);

		var y = 78;
		for (var j = 0; j < thisRecipe.inputs.length; j++)
		{
			thisRecipe.inputs[j].pieChart = new cEfficiencyCounter();
			thisRecipe.inputs[j].paymentSuccess = machines.recipePaneResourceUpPaymenentSuccess;
			if (thisRecipe.inputs[j].upgrades)
			{
				var sliderRegion = new cRegion(34, y);
				thisRecipe.inputs[j].sliderRegion = sliderRegion;
				sliderRegion.boundaryPath = machines.sliderRegionPath;
				sliderRegion.mouseHandler = machines.sliderRegionMouseHandler;
				sliderRegion.customDraw = machines.sliderRegionDraw;
				sliderRegion.target = thisRecipe.inputs[j];
				sliderRegion.paymentSuccess = machines.sliderRegionPaymenentSuccess;
				recipePane.subRegions.push(sliderRegion);
			}
			y += 56;
		}
		y += 22;
		for (var j = 0; j < thisRecipe.outputs.length; j++)
		{
			thisRecipe.outputs[j].pieChart = new cEfficiencyCounter();
			thisRecipe.outputs[j].paymentSuccess = machines.recipePaneResourceUpPaymenentSuccess;
			if (thisRecipe.outputs[j].upgrades)
			{
				var sliderRegion = new cRegion(34, y);
				thisRecipe.outputs[j].sliderRegion = sliderRegion;
				sliderRegion.boundaryPath = machines.sliderRegionPath;
				sliderRegion.mouseHandler = machines.sliderRegionMouseHandler;
				sliderRegion.customDraw = machines.sliderRegionDraw;
				sliderRegion.target = thisRecipe.outputs[j];
				sliderRegion.paymentSuccess = machines.sliderRegionPaymenentSuccess;
				recipePane.subRegions.push(sliderRegion);
			}
			y += 56;
		}
	}
}
