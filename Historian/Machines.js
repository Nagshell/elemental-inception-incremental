var machines = {
	list: [],

	tick: function ()
	{
		for (var i = 0; i < this.list.length; i++)
		{
			//this.list[i].tick();
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

		if (this.machine.displayRegionElement)
		{
			ctx.fillStyle = ctx.strokeStyle;
			var amount = data.oElements[this.machine.displayRegionElement].amount;
			var radius = 1;
			while (amount > 1)
			{
				radius += 4;
				amount--;
				amount /= 10;
			}
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, Math.PI * 2);
			ctx.fill();
			ctx.beginPath();
			ctx.arc(0, 0, radius + 4, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * amount);
			ctx.lineTo(0, 0);
			ctx.closePath();
			ctx.fill();
			ctx.lineWidth = 0.3;
			for (var rad2 = Math.min(radius + 8, 28); rad2 > radius; rad2 -= 4)
			{
				ctx.beginPath();
				ctx.arc(0, 0, rad2, 0, Math.PI * 2);
				ctx.stroke();
			}
		}
		ctx.restore();
	},
	regularPaneDraw: function (ctx)
	{
		ctx.save();
		ctx.fillStyle = ctx.strokeStyle;
		ctx.restore();
	},
	recipeRegionMouseHandler: function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (x < 17)
			{
				this.recipe.enabled = !this.recipe.enabled;
			}
			else if (x < 34)
			{
				//show pane
			}
		}
	},
	recipeRegionDraw: function (ctx, pane)
	{
		ctx.save();

		if (this.recipe.enabled)
		{
			ctx.drawImage(images.iconOn, 0, 0);
		}
		else
		{
			ctx.drawImage(images.iconOff, 0, 0);
		}
		ctx.drawImage(images.iconShow, 17, 0);
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(16.5, 0);
		ctx.lineTo(16.5, 17);
		ctx.moveTo(33.5, 0);
		ctx.lineTo(33.5, 17);
		ctx.stroke();
		ctx.textAlign = "left";
		ctx.fillStyle = ctx.strokeStyle;
		ctx.fillText(this.recipe.title, 36, 8);
		ctx.restore();

	}
};

function preprocessMachines()
{
	machines.displayRegionPath = new Path2D();
	machines.displayRegionPath.arc(0, 0, 32, 0, Math.PI * 2);
	machines.displayPanePath = new Path2D();
	machines.displayPanePath.rect(0, 0, 300, 300);
	machines.displayPanePathMin = new Path2D();
	machines.displayPanePathMin.rect(0, 0, 200, 64);

	machines.recipeSelectorRegion = new cRegion(100, 17);
	machines.recipeSelectorRegion.boundaryPath = new Path2D();
	machines.recipeSelectorRegion.boundaryPath.rect(0, 0, 70, 16);
	machines.recipeSelectorRegion.text = "Recipes";
	machines.recipeSelectorRegion.textX = 42;
	machines.recipeSelectorRegion.textY = 8;
	machines.recipeSelectorRegion.customDraw = function (ctx, pane)
	{
		if (!pane.recipeSelectorPane.boundaryPath)
		{
			ctx.drawImage(images.iconShow, 0, 0);
		}
		else
		{
			ctx.drawImage(images.iconHide, 0, 0);
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
	machines.recipeRegionPath.rect(0, 0, 160, 17);
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
		this.displayRegionElement = thisData.displayRegionElement;
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
		regionData.hideRegion.action(this.pane);

	this.pane.subRegions.push(machines.recipeSelectorRegion);

	this.pane.recipeSelectorPane = new cPane(this.pane, 0, 99);
	this.pane.recipeSelectorPane.title = "Recipes";
	this.pane.recipeSelectorPane.boundaryPath = new Path2D();
	this.pane.recipeSelectorPane.boundaryPath.rect(0, 0, 160, 17 + 17 * thisData.recipes.length);
	this.pane.recipeSelectorPane.subRegions.push(regionData.dragRegion);
	this.pane.recipeSelectorPane.subRegions.push(regionData.hideRegion);
	regionData.hideRegion.action(this.pane.recipeSelectorPane);
	for (var i = 0; i < thisData.recipes.length; i++)
	{
		var recipeRegion = new cRegion(0, 17 + 17 * i);
		this.pane.recipeSelectorPane.subRegions.push(recipeRegion);
		recipeRegion.recipe = thisData.recipes[i];
		recipeRegion.boundaryPath = machines.recipeRegionPath;
		recipeRegion.mouseHandler = machines.recipeRegionMouseHandler;
		recipeRegion.customDraw = machines.recipeRegionDraw;
	}
}
