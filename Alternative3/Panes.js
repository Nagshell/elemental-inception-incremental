var nullCanvas = document.createElement('canvas');
var nullCtx = nullCanvas.getContext("2d");

var panes = {
	lastClickedPane: null,
	highlightDragged: function (pane)
	{
		pane.markedToSuperGlow = panes.dragndrop != null;
		if (pane.independentVisible)
		{
			for (var i = pane.subPanes.length - 1; i >= 0; i--)
			{
				if (pane.subPanes[i].independent)
				{
					panes.highlightDragged(pane.subPanes[i]);
				}
			}
		}
	},
	dragMove: function (dx, dy)
	{
		var top = panes.dragndrop.top;
		var x = optionData.iconSize * 3 / 2 + top.x + panes.dragndrop.x;
		var y = optionData.iconSize / 2 + top.y + panes.dragndrop.y;
		if (panes.dragndrop.independent)
		{
			top = top.top;
			x += top.x;
			y += top.y;
		}
		if (top.centerX)
		{
			x += top.centerX;
			y += top.centerY;
		}
		if (!top.checkBoundary(x, y, "mousemove") && !top.centerX)
		{
			panes.dragndrop.x = panes.dragndrop.defaultX;
			panes.dragndrop.y = panes.dragndrop.defaultY;
			return;
		}
		x += dx;
		if (!top || top.checkBoundary(x, y, "mousemove"))
		{
			panes.dragndrop.x += dx;
			if (panes.dragndrop.centerPanes)
			{
				for (var i = 0; i < panes.dragndrop.centerPanes.length; i++)
				{
					panes.dragndrop.centerPanes[i].x -= dx;
				}
			}
		}
		x -= dx;
		y += dy;
		if (!top || top.checkBoundary(x, y, "mousemove"))
		{
			panes.dragndrop.y += dy;
			if (panes.dragndrop.centerPanes)
			{
				for (var i = 0; i < panes.dragndrop.centerPanes.length; i++)
				{
					panes.dragndrop.centerPanes[i].y -= dy;
				}
			}
		}
	},
	dragCenterMove: function (dx, dy)
	{
		panes.dragndropcenter.centerX += dx;
		panes.dragndropcenter.centerY += dy;
		if (panes.dragndropcenter.centerPanes)
		{
			for (var i = 0; i < panes.dragndropcenter.centerPanes.length; i++)
			{
				panes.dragndropcenter.centerPanes[i].x -= dx;
				panes.dragndropcenter.centerPanes[i].y -= dy;
			}
		}
	},
	moveCenterMap: function (x, y)
	{
		panes.dragndropcenter = mainPane;
		panes.dragCenterMove(x - mainPane.centerX, y - mainPane.centerY);
		panes.dragndropcenter = null;
	},
	keyHandler: function (event)
	{
		//console.log(event.code);
		switch (event.code)
		{
			case "ArrowUp":
				if (panes.dragndrop)
				{
					panes.dragMove(0, -1);
				}
				else if (panes.dragndropcenter)
				{
					panes.dragCenterMove(0, -1);
				}
				break;
			case "ArrowDown":
				if (panes.dragndrop)
				{
					panes.dragMove(0, 1);
				}
				else if (panes.dragndropcenter)
				{
					panes.dragCenterMove(0, 1);
				}
				break;
			case "ArrowLeft":
				if (panes.dragndrop)
				{
					panes.dragMove(-1, 0);
				}
				else if (panes.dragndropcenter)
				{
					panes.dragCenterMove(-1, 0);
				}
				break;
			case "ArrowRight":
				if (panes.dragndrop)
				{
					panes.dragMove(1, 0);
				}
				else if (panes.dragndropcenter)
				{
					panes.dragCenterMove(1, 0);
				}
				break;
		}
		switch (event.key)
		{
			case "w":
				if (panes.dragndrop)
				{
					panes.dragMove(0, -1);
				}
				else if (panes.dragndropcenter)
				{
					panes.dragCenterMove(0, -1);
				}
				break;
			case "s":
				if (event.ctrlKey)
				{
					event.preventDefault();
					regionData.saveRegion.action(trackerPane);
				}
				else
				{
					if (panes.dragndrop)
					{
						panes.dragMove(0, 1);
					}
					else if (panes.dragndropcenter)
					{
						panes.dragCenterMove(0, 1);
					}
				}
				break;

			case "a":
				if (panes.dragndrop)
				{
					panes.dragMove(-1, 0);
				}
				else if (panes.dragndropcenter)
				{
					panes.dragCenterMove(-1, 0);
				}
				break;
			case "d":
				if (panes.dragndrop)
				{
					panes.dragMove(1, 0);
				}
				else if (panes.dragndropcenter)
				{
					panes.dragCenterMove(1, 0);
				}
				break;
		}
	},
	mouseHandler: function (event)
	{
		regionData.hideRegion.action(tooltipPane);
		if (event.type == "mousemove")
		{
			var now = new Date().getTime();
			if (now - this.lastmousemove < 100)
			{
				//return;
			}
			this.lastmousemove = now;
		}
		if (event.type == "click")
		{
			return;
		}
		if (event.type == "dblclick")
		{
			if (panes.lastClickedPane)
			{
				regionData.confirmRegion.action(paymentPane);
			}
			return;
		}
		panes.lastClickedPane = null;
		waypointPane.recentlyGrowing = waypointPane.growing;
		waypointPane.growing = false;
		minimapPane.recentlyGrowing = minimapPane.growing;
		minimapPane.growing = false;
		mapControlPane.recentlyGrowing = mapControlPane.growing;
		mapControlPane.growing = false;
		iconLegendPane.recentlyGrowing = iconLegendPane.growing;
		iconLegendPane.growing = false;

		var type = event.type;
		if (event.type == "mousemove" && panes.dragndrop)
		{
			panes.dragMove(event.movementX, event.movementY);
			return;
		}
		if (event.type == "mousemove" && panes.dragndropcenter)
		{
			panes.dragCenterMove(event.movementX, event.movementY);
			return;
		}
		if (event.type == "mouseup")
		{
			if (panes.dragndrop)
			{
				var tempPane = panes.dragndrop;
				panes.dragndrop = null;
				panes.highlightDragged(tempPane);
				return;
			}
			if (panes.dragndropcenter)
			{
				panes.dragndropcenter = null;
				return;
			}
			if (machines.drag)
			{
				machines.drag.drag = false;
				machines.drag = null;
			}
		}
		if (event.target.id !== "canvasMain")
			return;
		var x = event.offsetX;
		var y = event.offsetY;
		for (var i = 0; i < panes.list.length; i++)
		{
			var targetPane = panes.list[i].checkBoundary(x, y, type);
			if (targetPane)
			{
				if (type == "mousedown")
				{
					var temp = panes.list[i];
					while (i-- > 0)
					{
						panes.list[i + 1] = panes.list[i];
					}
					panes.list[0] = temp;
				}
				var temp = targetPane;
				while (temp)
				{
					if (temp.centerX)
					{
						x -= temp.centerX;
						y -= temp.centerY;
					}
					x -= temp.x;
					y -= temp.y;
					temp = temp.top;
				}
				var nohit = true;
				var targetRegion;
				for (var j = 0; j < targetPane.subRegions.length; j++)
				{
					var tempTarget = targetPane.subRegions[j].checkBoundary(x, y, type);
					if (tempTarget)
					{
						targetRegion = tempTarget;
					}
				}
				if (targetRegion)
				{
					nohit = false;
					targetRegion.mouseHandler(targetPane, x, y, type);
					if (targetRegion.markedToSuperGlow && type == "mouseup")
						targetRegion.markedToSuperGlow = false;
				}
				if (nohit && targetPane.mouseHandler)
				{
					targetPane.mouseHandler(targetPane, x, y, type);
				}
				break;
			}
		}

		for (var i = 0; i < panes.postMouseHandlerShow.length; i++)
		{
			if (!panes.postMouseHandlerShow[i].blockShow)
			{
				regionData.showRegion.action(panes.postMouseHandlerShow[i]);
				panes.postMouseHandlerShow[i].postShow = false;
			}
		}
		panes.postMouseHandlerShow = [];
		if (tooltipPane.readyToShow)
		{
			regionData.showRegion.action(tooltipPane);
			tooltipPane.x = event.offsetX + 15;
			tooltipPane.y = event.offsetY + 15;
			tooltipPane.readyToShow = false;
		}
	},
	resetPositions: function ()
	{
		for (var i = 0; i < panes.list.length; i++)
		{
			panes.list[i].resetPosition();
		}
	},
}

function doGlows(ctx, target, colModifier = "")
{
	ctx.save();

	if (target.markedToSuperGlow)
	{
		ctx.strokeStyle = "#000000";
		ctx.shadowColor = borderGlow.colors[colModifier + "yellow"];
	}
	else if (target.markedToReadyGlow)
	{
		if (target.glowColor)
		{
			ctx.strokeStyle = borderGlow.colors[colModifier + target.glowColor];
			ctx.shadowColor = borderGlow.colors[colModifier + target.glowColor];
			if (target.glowColor == "purple")
			{
				ctx.globalAlpha = 1;
			}
			else
			{
				ctx.globalAlpha = borderGlow[colModifier + "alpha"];
			}
		}
		else
		{
			ctx.strokeStyle = borderGlow.colors[colModifier + "purple"];
			ctx.shadowColor = borderGlow.colors[colModifier + "purple"];
			ctx.globalAlpha = 1;
		}

	}
	else
	{
		ctx.restore();
		return;
	}

	if (target.centerX)
	{
		ctx.translate(-target.centerX, -target.centerY);
	}
	ctx.shadowBlur = borderGlow.radius;
	ctx.lineWidth = 3;
	if (target.glowPath)
	{
		ctx.stroke(target.glowPath);
	}
	else
	{
		ctx.stroke(target.boundaryPath);
	}

	ctx.restore();
}

function cPane(top, x, y)
{
	this.x = x;
	this.defaultX = x;
	this.y = y;
	this.defaultY = y;
	this.boundaryPath = null;
	this.subPanes = [];
	this.subRegions = [];
	this.subPanesMin = [];
	this.subRegionsMin = [];

	this.top = top;
	if (top)
	{
		top.subPanes.push(this);
	}
	else
	{
		panes.list.push(this);
	}
}

cPane.prototype.checkBoundary = function (x, y, type)
{
	if (!this.boundaryPath)
	{
		return false;
	}
	x -= this.x;
	y -= this.y;
	if (nullCtx.isPointInPath(this.boundaryPath, x, y))
	{
		if (this.centerX)
		{
			x -= this.centerX;
			y -= this.centerY;
		}
		for (var i = 0; i < this.subPanes.length; i++)
		{
			var target = this.subPanes[i].checkBoundary(x, y, type);
			if (target)
			{
				if (type != "mousemove")
				{
					var temp = this.subPanes[i];
					while (i-- > 0)
					{
						this.subPanes[i + 1] = this.subPanes[i];
					}
					this.subPanes[0] = temp;
				}
				return target;
			}
		}
		return this;
	}
	else if (this.independentVisible)
	{
		if (this.centerX)
		{
			x -= this.centerX;
			y -= this.centerY;
		}
		for (var i = 0; i < this.subPanes.length; i++)
		{
			if (!this.subPanes[i].independent)
			{
				continue;
			}
			var target = this.subPanes[i].checkBoundary(x, y, type);
			if (target)
			{
				if (type != "mousemove")
				{
					var temp = this.subPanes[i];
					while (i-- > 0)
					{
						this.subPanes[i + 1] = this.subPanes[i];
					}
					this.subPanes[0] = temp;
				}
				return target;
			}
		}
	}
};

cPane.prototype.interact = function (x, y, type) {};

cPane.prototype.resetPosition = function ()
{
	if (this.hiddenPath)
	{
		//this.boundaryPath = this.hiddenPath;
		//this.hiddenPath = null;
	}
	if (this.boundaryPathMin && !this.boundaryPathMax)
	{
		//minRegion.action(this, 0, 0, "mouseup");
	}
	this.x = this.defaultX;
	this.y = this.defaultY;
	for (var i = 0; i < this.subPanes.length; i++)
	{
		this.subPanes[i].resetPosition();
	}
};

cPane.prototype.unpinPinnable = function ()
{
	for (var i = 0; i < this.subRegions.length; i++)
	{
		if (this.pinned && regionData.pinRegion == this.subRegions[i])
		{
			regionData.pinRegion.action(this);
		}
	}
	for (var i = 0; i < this.subPanes.length; i++)
	{
		this.subPanes[i].unpinPinnable();
	}
};

cPane.prototype.draw = function (ctx)
{
	ctx.save();
	ctx.translate(this.x, this.y);
	if (this.boundaryPath)
	{
		ctx.save();
		ctx.stroke(this.boundaryPath);
		ctx.fill(this.boundaryPath);
		ctx.clip(this.boundaryPath);
		if (this.centerX)
		{
			ctx.translate(this.centerX, this.centerY);
		}
		if (this.title)
		{
			ctx.save();
			ctx.fillStyle = ctx.strokeStyle;
			ctx.textAlign = "left";
			ctx.fillText(this.title, optionData.iconSize * 3 + 5, optionData.iconSize / 2);
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(0, optionData.iconSize + 0.5);
			ctx.lineTo(999, optionData.iconSize + 0.5);
			ctx.stroke();
			ctx.restore();
		}
		if (this.customDraw)
		{
			this.customDraw(ctx);
		}
		for (var i = this.subRegions.length - 1; i >= 0; i--)
		{
			this.subRegions[i].draw(ctx, this);
		}

		doGlows(ctx, this);

		for (var i = this.subPanes.length - 1; i >= 0; i--)
		{
			if (!this.subPanes[i].independent)
			{
				this.subPanes[i].draw(ctx);
			}
		}
		ctx.restore();

		ctx.save();
		this.independentVisible = false;
		for (var i = this.subPanes.length - 1; i >= 0; i--)
		{
			if (this.subPanes[i].independent)
			{
				this.subPanes[i].draw(ctx);
				this.independentVisible = true;
			}
		}
		ctx.restore();
	}
	ctx.restore();
};

function cRegion(x, y)
{
	this.boundaryPath = null;
	this.x = x;
	this.y = y;
}

cRegion.prototype.checkBoundary = function (x, y)
{
	x -= this.x;
	y -= this.y;
	if (!this.boundaryPath)
	{
		return false;
	}
	if (nullCtx.isPointInPath(this.boundaryPath, x, y))
	{
		return this;
	}
};

cRegion.prototype.draw = function (ctx, pane)
{
	ctx.save();
	ctx.translate(this.x, this.y);
	if (this.boundaryPath)
	{
		if (this.goldenShine)
		{
			ctx.save();
			ctx.strokeStyle = "#ffbf00";
			ctx.stroke(this.boundaryPath);
			ctx.restore();
		}
		else
		{
			ctx.stroke(this.boundaryPath);
		}

		ctx.fill(this.boundaryPath);
		ctx.clip(this.boundaryPath);
		if (this.img)
		{
			ctx.drawImage(images[this.img], 0, 0);
		}
		if (this.text)
		{
			ctx.save();
			ctx.fillStyle = ctx.strokeStyle;
			if (this.textX)
			{
				ctx.fillText(this.text, this.textX, this.textY);
			}
			else
			{
				ctx.fillText(this.text, 0, 0);
			}

			ctx.restore();
		}
		if (this.customDraw)
		{
			this.customDraw(ctx, pane);
		}
		doGlows(ctx, this);
	}
	ctx.restore();
};

cRegion.prototype.action = function (pane)
{
	this.mouseHandler(pane, 0, 0, "mouseup");
}

cRegion.prototype.mouseHandler = function () {};
