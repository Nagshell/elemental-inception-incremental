var regionData = {};

function preprocessRegionData()
{
	regionData.dragRegion = new cRegion(17, 0);
	regionData.dragRegion.addImage("iconDrag");
	var path = new Path2D();
	path.rect(0, 0, 16, 16);
	regionData.dragRegion.boundaryPath = path;
	regionData.dragRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mousedown")
		{
			panes.dragndrop = pane;
			panes.highlightDragged(pane);
		}
	}

	regionData.hideRegion = new cRegion(0, 0);
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

	regionData.showRegion = new cRegion(0, 0);
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

				var mx = 10 + pane.top.x + pane.x;
				var my = 10 + pane.top.y + pane.y;
				if (pane.top.centerX)
				{
					mx += pane.top.centerX;
					my += pane.top.centerY;
				}
				if (!pane.top.checkBoundary(mx, my, "mousemove"))
				{
					pane.x = pane.defaultX;
					pane.y = pane.defaultY;
					return;
				}
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

			if (pane.boundaryPath)
			{
				pane.boundaryPathMax = pane.boundaryPath;
				pane.boundaryPath = pane.boundaryPathMin;
			}
			else
			{
				pane.boundaryPathMax = pane.hiddenPath;
				pane.hiddenPath = pane.boundaryPathMin;
			}
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

			if (pane.boundaryPath)
			{
				pane.boundaryPathMin = pane.boundaryPath;
				pane.boundaryPath = pane.boundaryPathMax;
			}
			else
			{
				pane.boundaryPathMin = pane.hiddenPath;
				pane.hiddenPath = pane.boundaryPathMax;
			}

			pane.boundaryPathMax = null;
		}
	}

	regionData.draggableTitleRegion = new cRegion(34, 0);
	path = new Path2D();
	path.rect(0, 0, 400, 16);
	regionData.draggableTitleRegion.boundaryPath = path;
	regionData.draggableTitleRegion.mouseHandler = regionData.dragRegion.mouseHandler;
	regionData.draggableTitleRegion.customDraw = function (ctx, pane)
	{
		ctx.save();
		ctx.fillStyle = ctx.strokeStyle;
		ctx.textAlign = "left";
		ctx.fillText(pane.title, 5, 8);
		ctx.restore();
	}
	regionData.draggableTitleRegionShifted = new cRegion(51, 0);
	regionData.draggableTitleRegionShifted.boundaryPath = path;
	regionData.draggableTitleRegionShifted.mouseHandler = regionData.dragRegion.mouseHandler;
	regionData.draggableTitleRegionShifted.customDraw = regionData.draggableTitleRegion.customDraw;

	regionData.confirmRegion = new cRegion(22, 39);
	path = new Path2D();
	path.rect(0, 0, 55, 16);
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
					machines.glowCheckCD = 0;
					machines.glowCheck();
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

	regionData.cancelRegion = new cRegion(25, 63);
	path = new Path2D();
	path.rect(0, 0, 49, 16);
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

	regionData.saveRegion = new cRegion(20, 58);
	path = new Path2D();
	path.rect(0, 0, 60, 16);
	regionData.saveRegion.text = locale.save;
	regionData.saveRegion.textX = 30;
	regionData.saveRegion.textY = 8;
	regionData.saveRegion.boundaryPath = path;
	regionData.saveRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (saveCD - s >= 60)
			{
				s = saveCD;
				savingSystem.saveData();
			}
		}
	}
	regionData.saveRegion.customDraw = function (ctx, pane)
	{
		if (saveCD - s <= 60)
		{
			ctx.save();
			ctx.globalAlpha = 1 - (saveCD - s) / 60;
			ctx.fillStyle = "#646464";
			ctx.fill(this.boundaryPath);
			ctx.restore();
		}
	}

	regionData.resetRegion = new cRegion(20, 25);
	path = new Path2D();
	path.rect(0, 0, 80, 16);
	regionData.resetRegion.text = locale.reset;
	regionData.resetRegion.textX = 40;
	regionData.resetRegion.textY = 8;
	regionData.resetRegion.boundaryPath = path;
	regionData.resetRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			savingSystem.hardReset();
		}
	}

	regionData.pinRegion = new cRegion(0, 17);
	path = new Path2D();
	path.rect(0, 0, 16, 16);
	regionData.pinRegion.boundaryPath = path;
	regionData.pinRegion.customDraw = function (ctx, pane)
	{
		if (pane.pinned)
		{
			ctx.drawImage(images.iconPinNot, 0, 0);
		}
		else
		{
			ctx.drawImage(images.iconPin, 0, 0);
		}
	}
	regionData.pinRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			var list = pane.top.centerPanes;
			if (list)
			{
				if (pane.pinned)
				{
					list[pane.pinID] = list[list.length - 1];
					list[pane.pinID].pinID = pane.pinID;
					list.length--;
					pane.pinned = false;
				}
				else
				{
					pane.pinID = list.length;
					pane.pinned = true;
					list.push(pane);
				}
			}
		}
	}

	regionData.nextPageRegion = new cRegion(34, 17);
	regionData.nextPageRegion.boundaryPath = path;
	regionData.nextPageRegion.customDraw = function (ctx, pane)
	{
		if (pane.currentPage < pane.maxPages)
		{
			ctx.drawImage(images.iconNext, 0, 0);
		}
	}
	regionData.nextPageRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (pane.currentPage < pane.maxPages)
			{
				pane.currentPage++;
			}
		}
	}

	regionData.prevPageRegion = new cRegion(17, 17);
	regionData.prevPageRegion.boundaryPath = path;
	regionData.prevPageRegion.customDraw = function (ctx, pane)
	{
		if (pane.currentPage > 0)
		{
			ctx.drawImage(images.iconPrev, 0, 0);
		}
	}
	regionData.prevPageRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (pane.currentPage > 0)
			{
				pane.currentPage--;
			}
		}
	}
}
preprocessRegionData();

var trackerPane;
var mainPane;
var paymentPane;
var educationalPane;

function preprocessPaneData()
{
	panes.list = [];
	panes.postMouseHandlerShow = [];
	panes.dragndrop = null;
	panes.lastmousemove = 0;

	mainPane = new cPane(null, 0, 100);
	var path = new Path2D();
	path.rect(0, 0, 800, 700);
	mainPane.boundaryPath = path;
	mainPane.centerPanes = [];
	mainPane.customDraw = function (ctx)
	{
		var tempBackground;
		if (mainPane.background)
		{
			mainPane.backgroundR++;
		}
		if (machineData.machineNexus.recipes[1].unlocked)
		{
			tempBackground = "mainBackground4";
		}
		else if (machineData.machineVoid.recipes[0].unlocked)
		{
			tempBackground = "mainBackground3";
		}
		else if (machineData.golemMerger.recipes[0].unlocked)
		{
			tempBackground = "mainBackground2";
		}
		else if (machineData.machineWater.recipes[1].unlocked)
		{
			tempBackground = "mainBackground1";
		}
		if (tempBackground != mainPane.background)
		{
			mainPane.backgroundR = 0;
			mainPane.backgroundLast = mainPane.background;
			mainPane.background = tempBackground;
		}
		if (mainPane.background)
		{
			ctx.save();
			if (mainPane.backgroundR < 600)
			{
				mainPane.backgroundR++;
				if (mainPane.backgroundLast)
				{
					ctx.drawImage(images[mainPane.backgroundLast], -400, -400);
				}
				ctx.beginPath();
				ctx.arc(0, 0, mainPane.backgroundR, 0, Math.PI * 2);
				ctx.globalAlpha = (600 - mainPane.backgroundR) / 600;
				ctx.stroke();
				ctx.globalAlpha = 1;
				ctx.clip();
			}
			ctx.drawImage(images[mainPane.background], -400, -400);
			ctx.restore();
		}

		particleGenerator.draw(ctx);

		var x = -this.centerX + canvas.width / 2;
		var y = -this.centerY + canvas.height / 2 - 100;

		ctx.save();
		ctx.globalAlpha = borderGlow.alpha;

		ctx.shadowBlur = borderGlow.radius * 2;
		ctx.strokeStyle = borderGlow.colors.brightfill;
		ctx.shadowColor = borderGlow.colors.purple;

		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(x, y);
		var noGlow = true;
		for (var i = 0; i < this.subRegions.length; i++)
		{
			if (this.subRegions[i].markedToReadyGlow && this.subRegions[i].glowColor == "purple")
			{
				ctx.lineTo(this.subRegions[i].x, this.subRegions[i].y);
				ctx.moveTo(x, y);
				noGlow = false;
			}
		}
		if (noGlow && x * x + y * y > 10000 * (1 + data.elementsKnown * data.elementsKnown))
		{
			ctx.lineTo(0, 0);
			ctx.moveTo(x, y);
			ctx.shadowColor = borderGlow.colors.blue;
			ctx.strokeStyle = borderGlow.colors.blue;
			noGlow = false;
		}
		if (!noGlow)
		{
			ctx.moveTo(x + 5, y);
			ctx.arc(x, y, 5, 0, Math.PI * 2);
			ctx.moveTo(x + 10, y);
			ctx.arc(x, y, 10, 0, Math.PI * 2);
			ctx.moveTo(x + 15, y);
			ctx.arc(x, y, 15, 0, Math.PI * 2);
			ctx.stroke();
		}
		ctx.restore();
	}

	paymentPane = new cPane(mainPane, 300, 0);
	path = new Path2D();
	path.rect(0, 0, 306, 83);
	paymentPane.boundaryPath = path;
	paymentPane.subRegions.push(regionData.hideRegion);
	paymentPane.subRegions.push(regionData.confirmRegion);
	paymentPane.subRegions.push(regionData.cancelRegion);
	paymentPane.subRegions.push(regionData.dragRegion);
	paymentPane.subRegions.push(regionData.pinRegion);
	paymentPane.customDraw = function (ctx)
	{
		ctx.save();
		ctx.fillStyle = ctx.strokeStyle;
		if (this.costs)
		{
			for (var i = 0; i < this.costs.length; i++)
			{
				if (data.oElements[this.costs[i].type].known)
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
						ctx.fillText(locale.free, 120, 8);
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
		panes.postMouseHandlerShow.push(this);

		if (!this.pinned)
		{
			this.x = x + 17;
			this.y = y + 17;
			while (offsetPane.top !== null)
			{
				this.x += offsetPane.x;
				this.y += offsetPane.y;
				offsetPane = offsetPane.top;
			}
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
	paymentPane.isPotentiallyAffordable = function (costs)
	{
		var possible = true;
		for (var i = 0; i < costs.length; i++)
		{
			possible = possible && (data.oElements[costs[i].type].possibleAmount >= costs[i].amount);
		}
		return possible;
	}
	regionData.hideRegion.action(paymentPane);

	trackerPane = new cPane(null, 0, 0);
	path = new Path2D();
	path.rect(0, 0, 800, 99);
	trackerPane.boundaryPath = path;
	trackerPane.customDraw = function (ctx)
	{
		ctx.save();
		ctx.textAlign = "left";
		ctx.fillStyle = ctx.strokeStyle;
		ctx.fillText(locale.autosave + ": " + Math.trunc(s / 3600) + ":" + Math.ceil((s - Math.trunc(s / 3600) * 3600) / 60), trackerPane.savingX, 50);
		ctx.restore();
	}
	trackerPane.resize = function ()
	{
		trackerPane.savingX = canvas.width - 150;
		regionData.saveRegion.x = trackerPane.savingX + 22;
		regionData.resetRegion.x = trackerPane.savingX + 12;
	}
	trackerPane.subRegions.push(regionData.saveRegion);
	trackerPane.subRegions.push(regionData.resetRegion);

	path = new Path2D();
	path.rect(0, 0, 140, 20);
	var rs = [];
	for (var i = 0; i < 5; i++)
	{
		var r = new cRegion(50 + 160 * i, 40);
		r.text = locale.aTabNames[i];
		r.textX = 70;
		r.textY = 10;
		r.boundaryPath = path;
		trackerPane.subRegions.push(r);
		rs.push(r);
	}
	rs[3].mouseHandler = function (mainPane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (this.pane.boundaryPath)
			{
				regionData.hideRegion.mouseHandler(this.pane, x, y, type);
			}
			else
			{
				regionData.showRegion.mouseHandler(this.pane, x, y, type);
				this.markedToSuperGlow = false;
				this.pane.x = 50 - this.pane.top.centerX;
				this.pane.y = 50 - this.pane.top.centerY;
			}
		}
	};

	educationalPane = new cPane(mainPane, 200, 200);
	rs[3].markedToSuperGlow = true;
	rs[3].pane = educationalPane;
	educationalPane.region = rs[3];
	path = new Path2D();
	path.rect(0, 0, 300, 230);
	educationalPane.boundaryPath = path;
	educationalPane.subRegions.push(regionData.dragRegion);
	educationalPane.subRegions.push(regionData.pinRegion);
	educationalPane.subRegions.push(regionData.hideRegion);
	educationalPane.subRegions.push(regionData.nextPageRegion);
	educationalPane.subRegions.push(regionData.prevPageRegion);
	educationalPane.currentPage = 0;
	educationalPane.maxPages = 7;
	educationalPane.customDraw = function (ctx)
	{
		ctx.save();
		ctx.fillStyle = ctx.strokeStyle;
		ctx.fillText(locale.page + " " + (this.currentPage + 1) + " " + locale.outOf + " " + (this.maxPages + 1), 50, 42);
		if (images["tutorialPage" + this.currentPage])
		{
			ctx.drawImage(images["tutorialPage" + this.currentPage], 0, 50);
		}
		switch (this.currentPage)
		{
			case 0:
				break;
		}
		ctx.restore();
	}

	regionData.pinRegion.action(educationalPane);
	regionData.hideRegion.action(educationalPane);
}
