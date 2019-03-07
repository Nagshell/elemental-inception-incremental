var regionData = {};

function preprocessRegionData()
{
	regionData.resetRegion = new cRegion(750, 0);
	var path = new Path2D();
	path.rect(0, 0, 50, 50);
	regionData.resetRegion.boundaryPath = path;
	regionData.resetRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			panes.resetPositions();
		}
	}
	regionData.resetRegion.text = "Unhide";
	regionData.resetRegion.textX = 25;
	regionData.resetRegion.textY = 25;

	regionData.dragRegion = new cRegion(0, 0);
	regionData.dragRegion.addImage("iconDrag");
	path = new Path2D();
	path.rect(0, 0, 16, 16);
	regionData.dragRegion.boundaryPath = path;
	regionData.dragRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mousedown")
		{
			panes.dragndrop = pane;
		}
	}

	regionData.hideRegion = new cRegion(17, 0);
	regionData.hideRegion.addImage("iconHide");
	regionData.hideRegion.boundaryPath = path;
	regionData.hideRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (pane.boundaryPath)
			{
				pane.hiddenPath = pane.boundaryPath;
				pane.boundaryPath = null;
			}
		}
	}

	regionData.showRegion = new cRegion(17, 0);
	regionData.showRegion.addImage("iconShow");
	regionData.showRegion.boundaryPath = path;
	regionData.showRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (pane.hiddenPath)
			{
				pane.boundaryPath = pane.hiddenPath;
				pane.hiddenPath = null;
			}
			if (pane.top)
			{
				var i = 0;
				while (pane.top.subPanes[i] !== pane)
				{
					i++;
				}
				while (i > 0)
				{
					i--;
					pane.top.subPanes[i + 1] = pane.top.subPanes[i];
				}
				pane.top.subPanes[i] = pane;
			}
		}
	}

	regionData.minRegion = new cRegion(34, 0);
	regionData.minRegion.addImage("iconMin");
	regionData.minRegion.boundaryPath = path;
	regionData.minRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			pane.subPanesMax = pane.subPanes;
			pane.subPanes = pane.subPanesMin;

			pane.subRegionsMax = pane.subRegions;
			pane.subRegions = pane.subRegionsMin;

			pane.boundaryPathMax = pane.boundaryPath;
			pane.boundaryPath = pane.boundaryPathMin;
		}
	}

	regionData.maxRegion = new cRegion(34, 0);
	regionData.maxRegion.addImage("iconMax");
	regionData.maxRegion.boundaryPath = path;
	regionData.maxRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			pane.subPanesMin = pane.subPanes;
			pane.subPanes = pane.subPanesMax;

			pane.subRegionsMin = pane.subRegions;
			pane.subRegions = pane.subRegionsMax;

			pane.boundaryPathMin = pane.boundaryPath;
			pane.boundaryPath = pane.boundaryPathMax;
			pane.boundaryPathMax = null;
		}
	}

	path = new Path2D();
	path.rect(0, 0, 55, 16);
	regionData.confirmRegion = new cRegion(17, 22);
	regionData.confirmRegion.boundaryPath = path;
	regionData.confirmRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (pane.costs)
			{
				if (paymentPane.isAffordable(pane.costs))
				{
					for (var i = 0; i < pane.costs.length; i++)
					{
						data.oElements[pane.costs[i].type].amount -= pane.costs[i].amount;
					}
					pane.target.paymentSuccess();
					pane.costs = null;
				}
			}
		}
	}
	regionData.confirmRegion.customDraw = function (ctx, pane)
	{
		if (pane.costs)
		{
			var possible = true;
			for (var i = 0; i < pane.costs.length; i++)
			{
				possible = possible && (data.oElements[pane.costs[i].type].amount >= pane.costs[i].amount);
			}
			if (possible)
			{
				ctx.drawImage(images.buttonConfirm, 0, 0);
			}
			else
			{
				ctx.drawImage(images.buttonConfirmCrossed, 0, 0);
			}
		}

	}

	path = new Path2D();
	path.rect(0, 0, 49, 16);
	regionData.cancelRegion = new cRegion(20, 44);
	regionData.cancelRegion.addImage("buttonCancel");
	regionData.cancelRegion.boundaryPath = path;
	regionData.cancelRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (pane.costs)
			{
				pane.costs = null;
			}
		}
	}
}
preprocessRegionData();

var trackerPane = new cPane(null, 0, 0);
var path = new Path2D();
path.rect(0, 0, 800, 99);
trackerPane.boundaryPath = path;

var mainPane = new cPane(null, 0, 100);
//mainPane.subRegions.push(regionData.resetRegion);
var path = new Path2D();
path.rect(0, 0, 800, 700);
mainPane.boundaryPath = path;
mainPane.customDraw = function (ctx)
{
	particleGenerator.draw(ctx);
}

trackerPane.customDraw = function (ctx)
{
	return;
	ctx.save();
	ctx.fillStyle = ctx.strokeStyle;
	ctx.restore();
}

path = new Path2D();
path.rect(0, 0, 306, 83);
var paymentPane = new cPane(mainPane, 300, 0);
paymentPane.boundaryPath = path;
paymentPane.subRegions.push(regionData.confirmRegion);
paymentPane.subRegions.push(regionData.cancelRegion);
paymentPane.subRegions.push(regionData.dragRegion);
paymentPane.customDraw = function (ctx)
{
	ctx.save();
	ctx.fillStyle = ctx.strokeStyle;
	if (this.costs)
	{
		for (var i = 0; i < this.costs.length; i++)
		{
			if (data.oElements[this.costs[i].type].amount > 0)
			{
				ctx.fillText(this.costs[i].type, 120, 8);
				drawNumber(ctx, data.oElements[this.costs[i].type].amount, 220, 8, elementalDisplayType[this.costs[i].type], "right");
				ctx.fillText("/", 230, 8);
				drawNumber(ctx, this.costs[i].amount, 236, 8, elementalDisplayType[this.costs[i].type]);
			}
			else
			{
				if (this.costs[i].amount > 0)
				{
					ctx.fillText("???", 120, 8);
				}
				else
				{
					ctx.fillText("Freebie!", 120, 8);
				}

			}

			ctx.translate(0, 17);
		}
	}
	else
	{
		regionData.hideRegion.action(this);
	}
	ctx.restore();
}
paymentPane.preparePayment = function (costs, x, y, offsetPane, target)
{
	this.costs = costs;
	this.target = target;
	regionData.showRegion.action(this);

	this.x = x + 17;
	this.y = y + 17;
	while (offsetPane.top !== null)
	{
		this.x += offsetPane.x;
		this.y += offsetPane.y;
		offsetPane = offsetPane.top;
	}
}
paymentPane.isAffordable = function (costs)
{
	var possible = true;
	for (var i = 0; i < costs.length; i++)
	{
		possible = possible && (data.oElements[costs[i].type].amount >= costs[i].amount);
	}
	return possible;
}
regionData.hideRegion.action(paymentPane);
