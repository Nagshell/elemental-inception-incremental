var nullCanvas = document.createElement('canvas');
var nullCtx = nullCanvas.getContext("2d");

var panes = {
	highlightDragged: function (pane)
	{
		pane.superGlow = panes.dragndrop != null;
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
		if (!panes.dragndrop)
			return;
		var top = panes.dragndrop.top;
		var x = 25 + top.x + panes.dragndrop.x;
		var y = 8 + top.y + panes.dragndrop.y;
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
	keyHandler: function (event)
	{
		//console.log(event.code);
		switch (event.code)
		{
			case "ArrowUp":
				panes.dragMove(0, -1);
				break;
			case "ArrowDown":
				panes.dragMove(0, 1);
				break;
			case "ArrowLeft":
				panes.dragMove(-1, 0);
				break;
			case "ArrowRight":
				panes.dragMove(1, 0);
				break;
		}
	},
	mouseHandler: function (event)
	{
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
		var type = event.type;
		if (event.type == "mousemove" && panes.dragndrop)
		{
			panes.dragMove(event.movementX, event.movementY);
			return;
		}
		if (event.type == "mousemove" && panes.dragndropcenter)
		{
			panes.dragndropcenter.centerX += event.movementX;
			panes.dragndropcenter.centerY += event.movementY;
			if (panes.dragndropcenter.centerPanes)
			{
				for (var i = 0; i < panes.dragndropcenter.centerPanes.length; i++)
				{
					panes.dragndropcenter.centerPanes[i].x -= event.movementX;
					panes.dragndropcenter.centerPanes[i].y -= event.movementY;
				}
			}
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
				for (var j = 0; j < targetPane.subRegions.length; j++)
				{
					var targetRegion = targetPane.subRegions[j].checkBoundary(x, y, type);
					if (targetRegion)
					{
						nohit = false;
						targetRegion.mouseHandler(targetPane, x, y, type);
					}
				}
				if (nohit && targetPane.centerX && type == "mousedown")
				{
					panes.dragndropcenter = targetPane;
				}
				break;
			}
		}

		for (var i = 0; i < panes.postMouseHandlerShow.length; i++)
		{
			regionData.showRegion.action(panes.postMouseHandlerShow[i]);
		}
		panes.postMouseHandlerShow = [];
	},
	resetPositions: function ()
	{
		for (var i = 0; i < panes.list.length; i++)
		{
			panes.list[i].resetPosition();
		}
	},
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
		this.boundaryPath = this.hiddenPath;
		this.hiddenPath = null;
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
			ctx.fillText(this.title, 52, 8);
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(0, 16.5);
			ctx.lineTo(999, 16.5);
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

		if (this.markedToGlow)
		{
			ctx.save();
			if (this.centerX)
			{
				ctx.translate(-this.centerX, -this.centerY);
			}
			ctx.strokeStyle = "#000000";
			ctx.shadowBlur = borderGlowRadius;
			ctx.stroke(this.boundaryPath);
			ctx.restore();
		}
		if (this.superGlow)
		{
			ctx.save();
			if (this.centerX)
			{
				ctx.translate(-this.centerX, -this.centerY);
			}
			ctx.strokeStyle = "#FFFF00";
			ctx.shadowColor = "#FFFF00";
			ctx.shadowBlur = borderGlowRadius;
			ctx.stroke(this.boundaryPath);
			ctx.restore();
		}
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
		ctx.stroke(this.boundaryPath);
		ctx.fill(this.boundaryPath);
		ctx.clip(this.boundaryPath);
		if (this.img)
		{
			ctx.drawImage(this.img, 0, 0);
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
		if (this.markedToGlow)
		{
			ctx.save();
			ctx.strokeStyle = "#000000";
			ctx.shadowBlur = borderGlowRadius;
			ctx.stroke(this.boundaryPath);
			ctx.restore();
		}
		if (this.superGlow)
		{
			ctx.save();
			ctx.strokeStyle = "#FFFF00";
			ctx.shadowColor = "#FFFF00";
			ctx.shadowBlur = borderGlowRadius;
			ctx.stroke(this.boundaryPath);
			ctx.restore();
		}
	}
	ctx.restore();
};

cRegion.prototype.action = function (pane)
{
	this.mouseHandler(pane, 0, 0, "mouseup");
}

cRegion.prototype.addImage = function (path)
{
	this.img = images[path];
};

cRegion.prototype.mouseHandler = function () {};
