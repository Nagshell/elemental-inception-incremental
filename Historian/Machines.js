var machines = {
	list: [],

	tick: function ()
	{
		for (var i = 0; i < this.list.length; i++)
		{
			this.list[i].tick();
		}
	},

	draw: function (ctx) {},

	displayRegionMouseHandler: function (pane, x, y, type)
	{
		regionData.showRegion.mouseHandler(this.machine.pane, x, y, type);
	},
	displayRegionRegularDraw: function (ctx, pane)
	{
		ctx.save();

		if (this.machine.displayElement)
		{
			ctx.fillStyle = "#181818";
			ctx.lineWidth = 0.3;
			var amount = data.oElements[this.machine.displayElement].amount;
			if (amount > 0.2)
			{
				var radius = 1;
				while (amount > 1)
				{
					radius += 4;
					amount /= 10;
				}
				for (var rad2 = Math.min(radius + 8, 28); rad2 > radius; rad2 -= 4)
				{
					ctx.beginPath();
					ctx.arc(0, 0, rad2, 0, Math.PI * 2);
					ctx.stroke();
				}
				ctx.beginPath();
				var angle = -Math.PI / 2 + Math.PI * 2 * Math.max(0, amount - 0.1) * 10 / 9;
				ctx.arc(0, 0, radius + 4, -Math.PI / 2, angle);
				ctx.arc(0, 0, radius, angle, -Math.PI / 2);
				//ctx.lineTo(0, 0);
				ctx.closePath();
				ctx.fill();
				ctx.lineWidth = 0.7;
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
					if (!this.machine.recipes[i].enabled)
					{
						continue;
					}
					var temp = this.machine.recipes[i].pieChart;

					ctx.save();
					ctx.beginPath();
					ctx.arc(32, 0, 25 / turnedOn, 0, Math.PI * 2);
					ctx.stroke();
					ctx.fill();
					ctx.clip();
					var angle = 0;
					for (var type in temp.results)
					{
						ctx.beginPath();
						ctx.moveTo(32, 0);
						ctx.arc(32, 0, 22 / turnedOn, angle, angle + temp.results[type] / 300 * Math.PI);
						angle += temp.results[type] / 300 * Math.PI;
						ctx.fillStyle = chartColors[type];
						ctx.fill();
					}
					ctx.restore();
					ctx.translate(0, 3 + 50 / turnedOn);
				}
			}

			ctx.restore();

			ctx.fillStyle = ctx.strokeStyle;
			if (this.machine.displayElement)
			{
				ctx.drawImage(images["icon" + this.machine.displayElement], 60, 17);
				ctx.fillText(this.machine.displayElement, 170, 30);
				drawNumber(ctx, data.oElements[this.machine.displayElement].amount, 155, 47, "exp");
			}
		}
		else
		{
			ctx.save();
			var turnedOn = false;
			ctx.translate(0, 80);
			for (var i = 0; i < this.machine.recipes.length; i++)
			{
				if (this.machine.recipes[i].pieChart.results.null == 600)
				{
					continue;
				}
				turnedOn = true;
				var temp = this.machine.recipes[i].pieChart;

				ctx.save();
				ctx.beginPath();
				ctx.arc(40, 0, 32, 0, Math.PI * 2);
				ctx.stroke();
				ctx.fill();
				ctx.clip();
				var angle = 0;
				var radius = 28;
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
				ctx.translate(0, 70);
			}

			ctx.restore();

			ctx.fillStyle = ctx.strokeStyle;
			if (turnedOn)
			{
				ctx.fillText("Efficiency", 40, 25);
				ctx.fillText("Charts", 40, 41);
			}

			if (this.machine.displayElement)
			{
				ctx.drawImage(images["icon" + this.machine.displayElement], 100, 100);
			}
		}
		ctx.restore();
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
			}
			else
			{
				this.recipe.unlocked = true;
			}
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
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(16.5, 0);
			ctx.lineTo(16.5, 17);
			ctx.moveTo(33.5, 0);
			ctx.lineTo(33.5, 17);
			ctx.stroke();
			ctx.textAlign = "left";
			ctx.fillStyle = ctx.strokeStyle;
			ctx.fillText(this.recipe.title, 38, 8);
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
		ctx.fillText("Inputs", 15, y);
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
			drawNumber(ctx, temp.ratio, 120, y, "fixed");
			y += 17;
			drawNumber(ctx, data.oElements[temp.type].amount, 36, y, "exp");
			drawNumber(ctx, temp.min, 90, y, "exp");
			y += 17;
			if (temp.upgrades)
			{
				if (temp.upped < temp.upgrades.length)
				{
					var affordable = true;
					for (var j = 0; j < temp.upgrades[temp.upped].costs.length; j++)
					{
						affordable = affordable && temp.upgrades[temp.upped].costs[j].amount <= data.oElements[temp.upgrades[temp.upped].costs[j].type].amount;
					}
					if (affordable)
					{
						ctx.strokeRect(123, y - 8, 16, 16);
						ctx.drawImage(images.iconUp, 123, y - 8);
					}
					else
					{
						ctx.strokeRect(123, y - 8, 16, 16);
						ctx.drawImage(images.iconUpNot, 123, y - 8);
					}
				}
				if (temp.upped)
				{
					ctx.save();
					ctx.strokeRect(34, y - 8, 88, 16);
					ctx.fillStyle = "#181818";
					ctx.fillRect(34, y - 8, 88, 16);
					ctx.fillStyle = "#646464";
					ctx.fillRect(34 + 42 * temp.slider, y - 8, 4, 16);
					ctx.restore();
				}
				else
				{
					ctx.save();
					ctx.strokeRect(34, y - 8, 88, 16);
					ctx.fillStyle = "#080808";
					ctx.fillRect(34, y - 8, 88, 16);
					ctx.restore();
				}
			}
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
		ctx.fillText("Outputs", 15, y);
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
			drawNumber(ctx, temp.ratio * this.recipe.efficiency, 120, y, "fixed");
			y += 17;
			drawNumber(ctx, data.oElements[temp.type].amount, 36, y, "exp");
			drawNumber(ctx, temp.max, 90, y, "exp");
			y += 17;
			if (temp.upgrades)
			{
				if (temp.upped < temp.upgrades.length)
				{
					var affordable = true;
					for (var j = 0; j < temp.upgrades[temp.upped].costs.length; j++)
					{
						affordable = affordable && temp.upgrades[temp.upped].costs[j].amount <= data.oElements[temp.upgrades[temp.upped].costs[j].type].amount;
					}
					if (affordable)
					{
						ctx.strokeRect(123, y - 8, 16, 16);
						ctx.drawImage(images.iconUp, 123, y - 8);
					}
					else
					{
						ctx.strokeRect(123, y - 8, 16, 16);
						ctx.drawImage(images.iconUpNot, 123, y - 8);
					}
				}
				if (temp.upped)
				{
					ctx.save();
					ctx.strokeRect(34, y - 8, 88, 16);
					ctx.fillStyle = "#181818";
					ctx.fillRect(34, y - 8, 88, 16);
					ctx.fillStyle = "#646464";
					ctx.fillRect(34 + 42 * temp.slider, y - 8, 4, 16);
					ctx.restore();
				}
				else
				{
					ctx.save();
					ctx.strokeRect(34, y - 8, 88, 16);
					ctx.fillStyle = "#080808";
					ctx.fillRect(34, y - 8, 88, 16);
					ctx.restore();
				}
			}
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
		ctx.fillText("Efficiency " + this.recipe.efficiency, 15, y);
		y += 22;

		ctx.restore();

	},
};

function preprocessMachines()
{
	machines.displayRegionPath = new Path2D();
	machines.displayRegionPath.arc(0, 0, 32, 0, Math.PI * 2);
	machines.displayPanePath = new Path2D();
	machines.displayPanePath.rect(0, 0, 381, 493);
	machines.displayPanePathMin = new Path2D();
	machines.displayPanePathMin.rect(0, 0, 200, 81);

	machines.recipeSelectorRegion = new cRegion(104, 17);
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
	machines.recipeRegionPath.rect(0, 0, 174, 17);
}
preprocessMachines();

function cMachine(title)
{
	machines.list.push(this);
	var thisData = machineData[title];
	this.x = thisData.x;
	this.y = thisData.y;
	this.recipes = thisData.recipes;
	this.currentRecipes = [];
	this.maxRecipes = 1;

	this.region = new cRegion(this.x, this.y);
	this.region.machine = this;
	this.region.mouseHandler = machines.displayRegionMouseHandler;
	this.region.boundaryPath = machines.displayRegionPath;
	if (thisData.displayRegionRegularDraw)
	{
		this.region.customDraw = machines.displayRegionRegularDraw;
		this.displayElement = thisData.displayElement;
	}
	else
	{
		//console.log("huh");
	}

	mainPane.subRegions.push(this.region);

	this.pane = new cPane(mainPane, this.x, this.y);
	this.pane.machine = this;
	this.pane.boundaryPath = machines.displayPanePath;
	this.pane.boundaryPathMin = machines.displayPanePathMin;
	this.pane.subRegions.push(regionData.dragRegion);
	this.pane.subRegions.push(regionData.minRegion);
	this.pane.subRegions.push(regionData.hideRegion);
	this.pane.subRegionsMin.push(regionData.dragRegion);
	this.pane.subRegionsMin.push(regionData.maxRegion);
	this.pane.subRegionsMin.push(regionData.hideRegion);
	this.pane.title = title;
	if (thisData.paneRegularDraw)
	{
		this.pane.customDraw = machines.regularPaneDraw;
	}
	else
	{
		//console.log("huh");
	}

	if (title !== "Liquefier")
	{
		regionData.hideRegion.action(this.pane);
	}
	else
	{
		this.pane.x -= 250;
		this.pane.y -= 250;
	}

	this.pane.subRegions.push(machines.recipeSelectorRegion);

	this.pane.recipeSelectorPane = new cPane(this.pane, 87, 17);
	this.pane.recipeSelectorPane.title = "Recipes";
	this.pane.recipeSelectorPane.boundaryPath = new Path2D();
	this.pane.recipeSelectorPane.boundaryPath.rect(0, 0, 174, 16 + 17 * thisData.recipes.length);
	this.pane.recipeSelectorPane.subRegions.push(regionData.dragRegion);
	this.pane.recipeSelectorPane.subRegions.push(regionData.hideRegion);
	regionData.hideRegion.action(this.pane.recipeSelectorPane);
	for (var i = thisData.recipes.length - 1; i >= 0; i--)
	{
		thisData.recipes[i].pieChart = new cEfficiencyCounter();
		var recipeRegion = new cRegion(0, 17 + 17 * i);
		this.pane.recipeSelectorPane.subRegions.push(recipeRegion);
		recipeRegion.recipe = thisData.recipes[i];
		recipeRegion.boundaryPath = machines.recipeRegionPath;
		recipeRegion.mouseHandler = machines.recipeRegionMouseHandler;
		recipeRegion.customDraw = machines.recipeRegionDraw;

		var recipePane = new cPane(this.pane, 191, 0 * 116 + 17 + 17 * i);
		recipePane.title = thisData.recipes[i].title;
		recipePane.recipe = thisData.recipes[i];
		recipePane.boundaryPath = new Path2D();
		var nL = 84 + 56 * thisData.recipes[i].inputs.length + 56 * thisData.recipes[i].outputs.length;
		recipePane.boundaryPath.rect(0, 0, 190, nL);

		recipePane.subRegions.push(regionData.dragRegion);
		recipePane.subRegions.push(regionData.hideRegion);
		recipePane.customDraw = machines.recipePaneDraw;

		recipeRegion.pane = recipePane;
		regionData.hideRegion.action(recipePane);

		for (var j = 0; j < thisData.recipes[i].inputs.length; j++)
		{
			thisData.recipes[i].inputs[j].pieChart = new cEfficiencyCounter();
		}
		for (var j = 0; j < thisData.recipes[i].outputs.length; j++)
		{
			thisData.recipes[i].outputs[j].pieChart = new cEfficiencyCounter();
		}
	}
}

cMachine.prototype.tick = function ()
{
	for (var i = 0; i < this.recipes.length; i++)
	{
		var temp = this.recipes[i];
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
				if (data.oElements[temp.outputs[j].type].amount > temp.outputs[j].max)
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
					amount = Math.min(amount, data.oElements[temp.inputs[j].type].amount / temp.inputs[j].ratio);
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
			}
			for (var j = 0; j < temp.outputs.length; j++)
			{
				data.oElementsFlow[temp.outputs[j].type] += amount * temp.outputs[j].ratio * temp.efficiency;
			}
		}
	}
};
