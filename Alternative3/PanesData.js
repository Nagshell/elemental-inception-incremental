var regionData = {};

function preprocessRegionData()
{
	regionData.iconPath = new Path2D();
	regionData.iconPath.rect(0, 0, optionData.iconSize, optionData.iconSize);
	regionData.dragRegion = new cRegion(optionData.iconSize + 1, 0);
	regionData.dragRegion.img = "iconDrag";
	regionData.dragRegion.boundaryPath = regionData.iconPath;
	regionData.dragRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mousemove" && pane.title)
		{
			tooltipPane.showText(pane.title);
		}
		if (type == "mousedown")
		{
			panes.dragndrop = pane;
			panes.highlightDragged(pane);
		}
	}

	regionData.hideRegion = new cRegion(0, 0);
	regionData.hideRegion.img = "iconHide";
	regionData.hideRegion.boundaryPath = regionData.iconPath;
	regionData.hideRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (pane.boundaryPath)
			{
				pane.hiddenPath = pane.boundaryPath;
				pane.boundaryPath = null;
				pane.blockShow = true;
				pane.postShow = false;
			}
		}
	}

	regionData.showRegion = new cRegion(0, 0);
	regionData.showRegion.img = "iconShow";
	regionData.showRegion.boundaryPath = regionData.iconPath;
	regionData.showRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (pane.hiddenPath)
			{
				pane.boundaryPath = pane.hiddenPath;
				pane.hiddenPath = null;
				pane.blockShow = false;
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

				var mx = optionData.iconSize * 3 / 2 + pane.top.x + pane.x;
				var my = optionData.iconSize / 2 + pane.top.y + pane.y;
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
			else
			{
				var i = 0;
				while (panes.list[i] !== pane)
				{
					i++;
				}
				while (i > 0)
				{
					i--;
					panes.list[i + 1] = panes.list[i];
				}
				panes.list[i] = pane;
			}
		}
	}

	regionData.minRegion = new cRegion(optionData.iconSize * 2 + 2, 0);
	regionData.minRegion.img = "iconMin";
	regionData.minRegion.boundaryPath = regionData.iconPath;
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

	regionData.maxRegion = new cRegion(optionData.iconSize * 2 + 2, 0);
	regionData.maxRegion.img = "iconMax";
	regionData.maxRegion.boundaryPath = regionData.iconPath;
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

	regionData.draggableTitleRegion = new cRegion(optionData.iconSize * 2 + 2, 0);
	var path = new Path2D();
	path.rect(0, 0, optionData.iconSize * 7 + 350, optionData.iconSize);
	regionData.draggableTitleRegion.boundaryPath = path;
	regionData.draggableTitleRegion.mouseHandler = regionData.dragRegion.mouseHandler;
	regionData.draggableTitleRegion.customDraw = function (ctx, pane)
	{
		ctx.save();
		ctx.fillStyle = ctx.strokeStyle;
		ctx.textAlign = "left";
		ctx.fillText(pane.title, 5, optionData.iconSize / 2);
		ctx.restore();
	}
	regionData.draggableTitleRegionShifted = new cRegion(optionData.iconSize * 3 + 3, 0);
	regionData.draggableTitleRegionShifted.boundaryPath = path;
	regionData.draggableTitleRegionShifted.mouseHandler = regionData.dragRegion.mouseHandler;
	regionData.draggableTitleRegionShifted.customDraw = regionData.draggableTitleRegion.customDraw;

	regionData.confirmRegion = new cRegion(optionData.iconSize + 5, optionData.iconSize + 14);
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
					pane.target.paymentSuccess(true);
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

	regionData.cancelRegion = new cRegion(optionData.iconSize + 8, optionData.iconSize + 38);
	path = new Path2D();
	path.rect(0, 0, 49, 16);
	regionData.cancelRegion.img = "buttonCancel";
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

	regionData.pinRegion = new cRegion(0, optionData.iconSize + 1);
	regionData.pinRegion.boundaryPath = regionData.iconPath;
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

	regionData.nextPageRegion = new cRegion(optionData.iconSize * 2 + 2, optionData.iconSize + 1);
	regionData.nextPageRegion.boundaryPath = regionData.iconPath;
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

	regionData.prevPageRegion = new cRegion(optionData.iconSize + 1, optionData.iconSize + 1);
	regionData.prevPageRegion.boundaryPath = regionData.iconPath;
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

var trackerPane;
var mainPane;
var paymentPane;
var educationalPane;
var optionsPane;
var waypointPane;
var minimapPane;
var mapControlPane;
var donatePage;
var waypointsBase = [
{
	name: locale.waypoints.center,
	x: 0,
	y: 0,
}];

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
		backgrounds.draw(ctx);
		effectSystem.draw(ctx);

		var x = -this.centerX + Math.trunc(canvas.width / 2);
		var y = -this.centerY + Math.trunc(canvas.height / 2) - 100;

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
	};
	mainPane.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mousedown")
		{
			panes.dragndropcenter = this;
		}
	}

	paymentPane = new cPane(mainPane, 300, 0);
	path = new Path2D();
	path.rect(0, 0, 306, optionData.iconSize + 66);
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
		if (this.target == target && this.boundaryPath)
		{
			regionData.hideRegion.action(this);
			return;
		}
		this.costs = costs;
		this.target = target;
		panes.postMouseHandlerShow.push(this);
		this.blockShow = false;

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
		ctx.fillText(locale.autosave + ": " + Math.trunc(s / 3600) + ":" + ("0" + Math.ceil((s - Math.trunc(s / 3600) * 3600) / 60)).slice(-2), trackerPane.savingX, 50);
		ctx.fillText("TPF:" + tpf, trackerPane.savingX - 50, 33);
		ctx.fillText("FPS:" + fps, trackerPane.savingX - 50, 50);
		ctx.fillText("TPS:" + tps, trackerPane.savingX - 50, 67);
		ctx.fillText("In-game timer: " + 
			data.oElements["Game Hours"].amount + ":" +
			("0"+data.oElements["Game Minutes"].amount).slice(-2) + ":" + 
			("0"+data.oElements["Game Seconds"].amount).slice(-2),
			trackerPane.savingX - 250, 16);
		if (lim)
		{
			ctx.fillText("Capped", trackerPane.savingX - 50, 84);
		}
		if (elapsed)
		{
			ctx.textAlign = "right";
			ctx.fillText("Awarded " + Math.round(elapsed * 0.8) + " bonus Time.", trackerPane.savingX - 60, 67);
			ctx.fillText("Time spent offline: " + formattedElapsed, trackerPane.savingX - 60, 50);
		}
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

	var tabWidth = 140;
	var tabHeight = 24;
	path = new Path2D();
	path.rect(0, 0, tabWidth, tabHeight);
	var tabRegions = [];
	for (var i = 0; i < 18; i++)
	{
		var r = new cRegion(5 + (tabWidth + 8) * Math.floor(i / 3), 5 + (tabHeight + 8) * (i % 3));
		r.text = locale.aTabNames[i];
		r.textX = tabWidth / 2;
		r.textY = tabHeight / 2;
		r.boundaryPath = locale.aTabNames[i] ? path : null;
		if (i > 2)
		{
			trackerPane.subRegions.push(r);
		}
		tabRegions.push(r);
	}

	educationalPane = new cPane(mainPane, 200, 200);
	path = new Path2D();
	path.rect(0, 0, 300, 230);
	educationalPane.boundaryPath = path;
	educationalPane.subRegions.push(regionData.dragRegion);
	educationalPane.subRegions.push(regionData.pinRegion);
	educationalPane.subRegions.push(regionData.hideRegion);
	educationalPane.subRegions.push(regionData.nextPageRegion);
	educationalPane.subRegions.push(regionData.prevPageRegion);
	educationalPane.subRegions.push(regionData.draggableTitleRegion);
	educationalPane.currentPage = 0;
	educationalPane.maxPages = 8;
	educationalPane.customDraw = function (ctx)
	{
		ctx.save();
		ctx.fillStyle = ctx.strokeStyle;
		this.title = locale.page + " " + (this.currentPage + 1) + " " + locale.outOf + " " + (this.maxPages + 1);
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
	educationalPane.region = tabRegions[4];
	educationalPane.region.mouseHandler = function (pane, x, y, type)
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
				this.pane.x = 50 - this.pane.top.centerX;
				this.pane.y = 50 - this.pane.top.centerY;
			}
		}
	};
	educationalPane.region.pane = educationalPane;

	regionData.pinRegion.action(educationalPane);
	regionData.hideRegion.action(educationalPane);

	tooltipPane = new cPane(null, 0, 0);
	path = new Path2D();
	path.rect(0, 0, 60, 17);
	tooltipPane.boundaryPath = path;
	tooltipPane.customDraw = function (ctx)
	{
		ctx.save();
		ctx.textAlign = "left";
		ctx.fillStyle = ctx.strokeStyle;
		ctx.fillText(this.text, 4, 8);
		ctx.restore();
	}
	tooltipPane.showText = function (text)
	{
		this.readyToShow = true;
		if (this.text != text)
		{
			this.text = text;
			var path = new Path2D();
			path.rect(0, 0, Math.ceil(ctxActive.measureText(text).width) + 8, 16);
			if (this.hiddenPath)
			{
				this.hiddenPath = path;
			}
			else
			{
				this.boundaryPath = path;
			}
		}
	}
	regionData.hideRegion.action(tooltipPane);
	
	victoryPane = new cPane(null, 0, 0);
	path = new Path2D();
	path.rect(0, 0, 60, 17);
	victoryPane.boundaryPath = path;
	victoryPane.customDraw = function (ctx)
	{
		ctx.save();
		ctx.textAlign = "left";
		ctx.fillStyle = ctx.strokeStyle;
		
		var textSplit = this.text.split("\n");
		var y = 8;
		for(let i=0;i<textSplit.length;i++){
			ctx.fillText(textSplit[i], 4, y);
			y+=16;
		}	
		ctx.restore();
	}
	victoryPane.showText = function (text)
	{
		this.readyToShow = true;
		if (this.text != text)
		{
			this.text = text;
			var path = new Path2D();
			
			var textSplit = text.split("\n");
			
			var textWidth = 0;
			var textHeight = 16 * textSplit.length;
			
			for(let i=0;i<textSplit.length;i++){
				textWidth = Math.max(textWidth,Math.ceil(ctxActive.measureText(textSplit[i]).width));
			}			
			
			path.rect(0, 0, textWidth + 200, textHeight);
			if (this.hiddenPath)
			{
				this.hiddenPath = path;
			}
			else
			{
				this.boundaryPath = path;
			}
		}
	}
	victoryPane.subRegions.push(regionData.hideRegion);
	regionData.hideRegion.action(victoryPane);

	waypointPane = new cPane(trackerPane, tabRegions[0].x, tabRegions[0].y);
	waypointPane.modelRegion = tabRegions[0];
	waypointPane.boundaryPath = waypointPane.modelRegion.boundaryPath;
	waypointPane.maxGrowth = 15;
	waypointPane.independent = true;
	waypointPane.growth = 0;
	waypointPane.growthX = 0;
	waypointPane.growthY = optionData.iconSize - 1;
	waypointPane.customDraw = function (ctx)
	{
		ctx.save();
		var rePath = false;

		if (this.growing && this.growth < this.maxGrowth)
		{
			this.growth++;
			regionData.showRegion.action(this.top);
			rePath = true;
		}
		else if (this.growing)
		{
			this.growth = 1;
			this.maxGrowth = 1;
		}
		else if (!this.growing && this.growth > 0)
		{
			this.growth--;
			rePath = true;
		}
		if (rePath)
		{
			path = new Path2D();
			path.rect(0, 0, tabWidth + this.growth / this.maxGrowth * this.growthX, tabHeight + this.growth / this.maxGrowth * this.growthY);
			this.boundaryPath = path;
		}
		ctx.fillStyle = ctx.strokeStyle;
		if (this.growth > 0)
		{
			ctx.save();
			ctx.translate(0, tabHeight);
			ctx.textAlign = "left";
			for (var i = 0; i < waypointsBase.length; i++)
			{
				ctx.fillText(waypointsBase[i].name, optionData.iconSize + 5, optionData.iconSize / 2 + 1);
				ctx.stroke(regionData.iconPath);
				ctx.drawImage(images.iconNext, 0, 0);
				ctx.translate(0, optionData.iconSize);
			}
			ctx.restore();
		}

		ctx.fillText(this.modelRegion.text, this.modelRegion.textX, this.modelRegion.textY);
		ctx.restore();
	};
	waypointPane.mouseHandler = function (pane, x, y, type)
	{
		if (this.recentlyGrowing || type == "mouseup")
		{
			this.growing = true;
			if (machineData.machineKnowledge.recipes[0].unlocked)
			{
				this.growthY = optionData.iconSize * waypointsBase.length;
			}
		}
		if (type == "mouseup")
		{
			if (x < optionData.iconSize)
			{
				y -= tabHeight;
				if (y > 0)
				{
					y = Math.trunc(y / optionData.iconSize);
					x = waypointsBase[y].x;
					y = waypointsBase[y].y;
					panes.moveCenterMap(-x + Math.trunc(canvas.width / 2), -y + Math.trunc(canvas.height / 2) - 100);
				}
			}
		}
	};

	minimapPane = new cPane(trackerPane, tabRegions[1].x, tabRegions[1].y);
	minimapPane.modelRegion = tabRegions[1];
	minimapPane.boundaryPath = waypointPane.modelRegion.boundaryPath;
	minimapPane.maxGrowth = 30;
	minimapPane.independent = true;
	minimapPane.growth = 0;
	minimapPane.growthX = 300 - tabWidth;
	minimapPane.growthY = 300;
	minimapPane.load = 0;
	minimapPane.maxLoad = 30;
	minimapPane.scale = 10;

	minimapPane.customDraw = function (ctx)
	{
		ctx.save();
		var rePath = false;
		if (this.growing && this.growth < this.maxGrowth)
		{
			this.growth++;
			//regionData.showRegion.action(this.top);
			rePath = true;
		}
		else if (this.growing)
		{
			this.growth = 1;
			this.maxGrowth = 1;
		}
		else if (!this.growing && this.growth > 0)
		{
			this.growth--;
			rePath = true;
		}
		if (rePath)
		{
			path = new Path2D();
			path.rect(0, 0, tabWidth + this.growth / this.maxGrowth * this.growthX, tabHeight + this.growth / this.maxGrowth * this.growthY);
			this.boundaryPath = path;
		}

		if (this.growth >= this.maxGrowth)
		{
			if (this.load < this.maxLoad)
			{
				this.load++;
			}
			else
			{
				this.maxLoad = 1;
				this.load = 1;
			}
			if (this.load > 0)
			{
				ctx.save();
				ctx.translate((this.growthX + tabWidth) / 2, this.growthY / 2 + tabHeight);

				ctx.beginPath();
				ctx.arc(0, 0, Math.max(0, this.load / this.maxLoad * (this.growthX + tabWidth) / 2 - 5), 0, Math.PI * 2);
				ctx.stroke();
				ctx.fill();
				ctx.clip();
				ctx.scale(1 / this.scale, 1 / this.scale);
				for (var machineTitle in machineData)
				{
					var mach = machineData[machineTitle];
					if (mach.region.boundaryPath)
					{
						ctx.save();
						ctx.translate(mach.region.x, mach.region.y);
						ctx.stroke(mach.region.boundaryPath);
						ctx.clip(mach.region.boundaryPath);
						doGlows(ctx, mach.region, "solid");
						ctx.restore();
					}
				}

				ctx.restore();
			}
		}
		else
		{
			this.load = 0;
		}

		ctx.fillStyle = ctx.strokeStyle;
		ctx.fillText(this.modelRegion.text, this.modelRegion.textX, this.modelRegion.textY);
		ctx.restore();
	}
	minimapPane.mouseHandler = function (pane, x, y, type)
	{
		if (this.recentlyGrowing || type == "mouseup")
		{
			this.growing = true;
		}
		if (type == "mouseup")
		{
			x -= (this.growthX + tabWidth) / 2;
			y -= this.growthY / 2 + tabHeight;
			var r = this.load / this.maxLoad * (this.growthX + tabWidth) / 2 - 5;
			if (x * x + y * y < r * r)
			{
				panes.moveCenterMap(-x * this.scale + Math.trunc(canvas.width / 2), -y * this.scale + Math.trunc(canvas.height / 2) - 100);
			}
		}
	}

	mapControlPane = new cPane(trackerPane, tabRegions[2].x, tabRegions[2].y);
	mapControlPane.modelRegion = tabRegions[2];
	mapControlPane.boundaryPath = waypointPane.modelRegion.boundaryPath;
	mapControlPane.maxGrowth = 15;
	mapControlPane.independent = true;
	mapControlPane.growth = 0;
	mapControlPane.growthX = 148;
	mapControlPane.growthY = 75;
	mapControlPane.customDraw = function (ctx)
	{
		ctx.save();
		ctx.fillStyle = ctx.strokeStyle;
		ctx.fillText(this.modelRegion.text, this.modelRegion.textX, this.modelRegion.textY);

		var rePath = false;
		if (this.growing && this.growth < this.maxGrowth)
		{
			this.growth++;
			regionData.showRegion.action(this.top);
			rePath = true;
		}
		else if (!this.growing && this.growth > 0)
		{
			this.growth--;
			rePath = true;
			if (this.hideAllRegion.hiddenList.length > 0)
			{
				for (var i = 0; i < this.hideAllRegion.hiddenList.length; i++)
				{
					this.hideAllRegion.hiddenList[i].boundaryPath = this.hideAllRegion.hiddenList[i].hiddenPath;
					this.hideAllRegion.hiddenList[i].hiddenPath = null;
				}
				this.hideAllRegion.hiddenList = [];
			}
		}
		if (rePath)
		{
			path = new Path2D();
			path.rect(0, 0, tabWidth + this.growth / this.maxGrowth * this.growthX, tabHeight + this.growth / this.maxGrowth * this.growthY);
			this.boundaryPath = path;
		}

		ctx.restore();
	}
	mapControlPane.mouseHandler = function (pane, x, y, type)
	{
		if (this.recentlyGrowing || type == "mouseup")
		{
			this.growing = true;
		}
	}
	preprocessMapControl();

	iconLegendPane = new cPane(trackerPane, tabRegions[5].x, tabRegions[5].y);
	iconLegendPane.modelRegion = tabRegions[5];
	iconLegendPane.boundaryPath = waypointPane.modelRegion.boundaryPath;
	iconLegendPane.maxGrowth = 15;
	iconLegendPane.independent = true;
	iconLegendPane.growth = 0;
	iconLegendPane.growthX = 110;
	iconLegendPane.growthY = 242;
	iconLegendPane.customDraw = function (ctx)
	{
		ctx.save();
		ctx.fillStyle = ctx.strokeStyle;
		ctx.fillText(this.modelRegion.text, this.modelRegion.textX, this.modelRegion.textY);

		var rePath = false;
		if (this.growing && this.growth < this.maxGrowth)
		{
			this.growth++;
			regionData.showRegion.action(this.top);
			rePath = true;
		}
		else if (!this.growing && this.growth > 0)
		{
			this.growth--;
			rePath = true;
		}
		if (rePath)
		{
			path = new Path2D();
			path.rect(0, 0, tabWidth + this.growth / this.maxGrowth * this.growthX, tabHeight + this.growth / this.maxGrowth * this.growthY);
			this.boundaryPath = path;
		}

		if (this.growth > 0)
		{
			ctx.drawImage(images.iconLegend, 0, 25);
		}
		ctx.restore();
	}
	iconLegendPane.mouseHandler = function (pane, x, y, type)
	{
		if (this.recentlyGrowing || type == "mouseup")
		{
			this.markedToSuperGlow = false;
			this.growing = true;
		}
	}
	iconLegendPane.modelRegion.markedToSuperGlow = true;

	lorePane = new cPane(mainPane, -300, -300);
	lorePane.title = "Lore Viewer";
	regionData.pinRegion.action(lorePane);

	lorePane.region = tabRegions[3];
	lorePane.region.pane = lorePane;
	lorePane.region.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			this.markedToSuperGlow = false;
			if (this.pane.boundaryPath)
			{
				regionData.hideRegion.mouseHandler(this.pane, x, y, type);
			}
			else
			{
				regionData.showRegion.mouseHandler(this.pane, x, y, type);
				this.markedToSuperGlow = false;
				this.pane.x = 0 - mainPane.centerX;
				this.pane.y = 0 - mainPane.centerY;
			}
		}
	};
	lorePane.subRegions.push(regionData.dragRegion);
	lorePane.subRegions.push(regionData.hideRegion);
	lorePane.subRegions.push(regionData.draggableTitleRegion);

	optionsPane = new cPane(mainPane, 300, 100);
	var path = new Path2D();
	path.rect(0, 0, 400, 300);
	optionsPane.boundaryPath = path;
	optionsPane.title = "Options - Don't forget to apply your settings!";
	optionsPane.customDraw = function (ctx)
	{
		if (!this.postShow)
		{
			panes.postMouseHandlerShow.push(this);
			this.postShow = true;
		}
	}

	optionsPane.maxPages = 0;
	if (optionsPane.maxPages > 0)
	{
		optionsPane.currentPage = 0;
		optionsPane.subRegions.push(regionData.nextPageRegion);
		optionsPane.subRegions.push(regionData.prevPageRegion);
	}
	optionsPane.subRegions.push(regionData.dragRegion);
	optionsPane.subRegions.push(regionData.hideRegion);

	optionsPane.subRegions.push(regionData.draggableTitleRegion);
	regionData.hideRegion.action(optionsPane);
	regionData.pinRegion.action(optionsPane);

	optionsPane.region = tabRegions[9];
	optionsPane.region.pane = optionsPane;
	optionsPane.region.mouseHandler = lorePane.region.mouseHandler;

	preprocessOptions();

	// changelogPane = new cPane(mainPane, 200, 200);
	// path = new Path2D();
	// path.rect(0, 0, 300, 230);
	// changelogPane.boundaryPath = path;
	// changelogPane.subRegions.push(regionData.dragRegion);
	// changelogPane.subRegions.push(regionData.pinRegion);
	// changelogPane.subRegions.push(regionData.hideRegion);
	// changelogPane.subRegions.push(regionData.nextPageRegion);
	// changelogPane.subRegions.push(regionData.prevPageRegion);
	// changelogPane.subRegions.push(regionData.draggableTitleRegion);
	// changelogPane.maxPages = 4;
	// changelogPane.currentPage = changelogPane.maxPages;
	// changelogPane.customDraw = function (ctx)
	// {
		// ctx.save();
		// ctx.fillStyle = ctx.strokeStyle;
		// this.title = locale.page + " " + (this.currentPage + 1) + " " + locale.outOf + " " + (this.maxPages + 1);
		// if (images["changelogPage" + this.currentPage])
		// {
			// ctx.drawImage(images["changelogPage" + this.currentPage], 0, 50);
		// }
		// switch (this.currentPage)
		// {
			// case 0:
				// break;
		// }
		// ctx.restore();
	// }
	// changelogPane.region = tabRegions[10];
	// changelogPane.region.mouseHandler = function (pane, x, y, type)
	// {
		// if (type == "mouseup")
		// {
			// if (this.pane.boundaryPath)
			// {
				// regionData.hideRegion.mouseHandler(this.pane, x, y, type);
			// }
			// else
			// {
				// regionData.showRegion.mouseHandler(this.pane, x, y, type);
				// this.pane.x = 50 - this.pane.top.centerX;
				// this.pane.y = 50 - this.pane.top.centerY;
			// }
		// }
	// };
	// changelogPane.region.pane = changelogPane;
	// regionData.pinRegion.action(changelogPane);
	// regionData.hideRegion.action(changelogPane);

	donatePage = new cPane(mainPane, 300, 100);
	var path = new Path2D();
	path.rect(0, 0, 300, 200);
	donatePage.boundaryPath = path;
	donatePage.title = "Donation Page";
	donatePage.customDraw = function (ctx)
	{
		ctx.drawImage(images.donationPage, 0, 30);
	}
	donatePage.subRegions.push(regionData.dragRegion);
	donatePage.subRegions.push(regionData.hideRegion);

	donatePage.subRegions.push(regionData.draggableTitleRegion);
	regionData.hideRegion.action(donatePage);
	regionData.pinRegion.action(donatePage);

	donatePage.region = tabRegions[11];
	donatePage.region.pane = donatePage;
	donatePage.region.mouseHandler = lorePane.region.mouseHandler;

	preprocessDonations();

	tabRegions[7].mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			window.open('https://discord.gg/CjdSuzH', '_blank');
		}
	}
}

function preprocessMapControl()
{
	var hideAllRegion = new cRegion(20, 30);
	var path = new Path2D();
	path.rect(0, 0, 120, 20);
	hideAllRegion.boundaryPath = path;
	hideAllRegion.text = "Temp. Hide Panes";
	hideAllRegion.textX = 60;
	hideAllRegion.textY = 10;
	hideAllRegion.hiddenList = [];
	hideAllRegion.mouseHandler = function (pane, x, y, type)
	{
		pane.growing = true;
		if (type == "mouseup")
		{
			for (var i = 0; i < this.hiddenList.length; i++)
			{
				this.hiddenList[i].boundaryPath = this.hiddenList[i].hiddenPath;
				this.hiddenList[i].hiddenPath = null;
			}
			this.hiddenList = [];
			for (var i = mainPane.subPanes.length - 1; i >= 0; i--)
			{
				if (mainPane.subPanes[i].boundaryPath)
				{
					mainPane.subPanes[i].hiddenPath = mainPane.subPanes[i].boundaryPath;
					mainPane.subPanes[i].boundaryPath = null;
					this.hiddenList.push(mainPane.subPanes[i]);
				}
			}
		}
	}
	mapControlPane.subRegions.push(hideAllRegion);
	mapControlPane.hideAllRegion = hideAllRegion;

	var closeAllRegion = new cRegion(20, 60);
	closeAllRegion.boundaryPath = path;
	closeAllRegion.text = "Close All Panes";
	closeAllRegion.textX = 60;
	closeAllRegion.textY = 10;
	closeAllRegion.mouseHandler = function (pane, x, y, type)
	{
		pane.growing = true;
		if (type == "mouseup")
		{
			for (var i = mainPane.subPanes.length - 1; i >= 0; i--)
			{
				regionData.hideRegion.action(mainPane.subPanes[i]);
			}
		}
	}
	mapControlPane.subRegions.push(closeAllRegion);

	var unpinAllRegion = new cRegion(150, 30);
	unpinAllRegion.boundaryPath = path;
	unpinAllRegion.text = "Unpin All Panes";
	unpinAllRegion.textX = 60;
	unpinAllRegion.textY = 10;
	unpinAllRegion.mouseHandler = function (pane, x, y, type)
	{
		pane.growing = true;
		if (type == "mouseup")
		{
			mainPane.unpinPinnable();
		}
	}
	mapControlPane.subRegions.push(unpinAllRegion);

	var resetAllRegion = new cRegion(150, 60);
	resetAllRegion.boundaryPath = path;
	resetAllRegion.text = "Reset Pane Pos.";
	resetAllRegion.textX = 60;
	resetAllRegion.textY = 10;
	resetAllRegion.mouseHandler = function (pane, x, y, type)
	{
		pane.growing = true;
		if (type == "mouseup")
		{
			panes.resetPositions();
		}
	}
	mapControlPane.subRegions.push(resetAllRegion);
}

function preprocessOptions()
{
	optionsPane.optionData = JSON.parse(JSON.stringify(optionData));

	var applyRegion = new cRegion(95, 270);
	var path = new Path2D();
	path.rect(0, 0, 100, 20);
	applyRegion.boundaryPath = path;
	applyRegion.text = "Apply Settings";
	applyRegion.textX = 50;
	applyRegion.textY = 10;

	applyRegion.customDraw = function (ctx)
	{
		this.markedToSuperGlow = JSON.stringify(optionData) != JSON.stringify(optionsPane.optionData);
	}
	applyRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (JSON.stringify(optionData) != JSON.stringify(optionsPane.optionData) && confirm("This will require to save your game and soft-reload it. Continue?"))
			{
				optionData = JSON.parse(JSON.stringify(optionsPane.optionData));
				savingSystem.saveData();
				savingSystem.loadData();
			}
		}
	};
	optionsPane.apply = applyRegion;
	optionsPane.subRegions.push(applyRegion);

	var revertRegion = new cRegion(205, 270);
	revertRegion.boundaryPath = path;
	revertRegion.text = "Revert changes";
	revertRegion.textX = 50;
	revertRegion.textY = 10;
	revertRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			optionsPane.optionData = JSON.parse(JSON.stringify(optionData));
			pane.iconSizeRegion.text = "Toggle UI size. " + optionData.iconSize + "px -> " + optionsPane.optionData.iconSize + "px";
			pane.particleCDRegion.text = "Toggle particle limiter. x" + optionData.particleCDMultiplier + " -> x" + optionsPane.optionData.particleCDMultiplier;
		}
	};
	optionsPane.subRegions.push(revertRegion);

	var iconSizeRegion = new cRegion(25, 75);
	iconSizeRegion.text = "Toggle icon size. " + optionData.iconSize + "px -> " + optionsPane.optionData.iconSize + "px";
	iconSizeRegion.textX = 100;
	iconSizeRegion.textY = 10;
	var path = new Path2D();
	path.rect(0, 0, iconSizeRegion.textX * 2, 20);
	iconSizeRegion.boundaryPath = path;
	iconSizeRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			pane.optionData.iconSize = 40 - pane.optionData.iconSize;
			this.text = "Toggle UI size. " + optionData.iconSize + "px -> " + optionsPane.optionData.iconSize + "px";
		}
	};
	optionsPane.iconSizeRegion = iconSizeRegion;
	optionsPane.subRegions.push(iconSizeRegion);

	optionsPane.optionData.particleCDMultiplier = 1;
	/*var particleCDRegion = new cRegion(25, 100);
	particleCDRegion.text = "Toggle particle limiter. x" + optionData.particleCDMultiplier + " -> x" + optionsPane.optionData.particleCDMultiplier;
	particleCDRegion.textX = 100;
	particleCDRegion.textY = 10;
	var path = new Path2D();
	path.rect(0, 0, particleCDRegion.textX * 2, 20);
	particleCDRegion.boundaryPath = path;
	particleCDRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			pane.optionData.particleCDMultiplier = 1 + (pane.optionData.particleCDMultiplier) % 9;
			this.text = "Toggle particle limiter. x" + optionData.particleCDMultiplier + " -> x" + optionsPane.optionData.particleCDMultiplier;
		}
	};
	optionsPane.particleCDRegion = particleCDRegion;
	optionsPane.subRegions.push(particleCDRegion);*/
}

function preprocessDonations()
{
	var patreonRegion = new cRegion(20, 160);
	var path = new Path2D();
	path.rect(0, 0, 120, 20);
	patreonRegion.boundaryPath = path;
	patreonRegion.text = "Link to Patreon";
	patreonRegion.textX = 60;
	patreonRegion.textY = 10;
	patreonRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			window.open('https://www.patreon.com/user?u=12559765', '_blank');
		}
	}
	donatePage.subRegions.push(patreonRegion);

	var paypalRegion = new cRegion(150, 160);
	var path = new Path2D();
	path.rect(0, 0, 120, 20);
	paypalRegion.boundaryPath = path;
	paypalRegion.text = "Link to Paypal";
	paypalRegion.textX = 60;
	paypalRegion.textY = 10;
	paypalRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TNTLB3ZN7BVUQ', '_blank');
		}
	}
	donatePage.subRegions.push(paypalRegion);
}
