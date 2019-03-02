var nullCanvas = document.createElement('canvas');
var nullCtx = nullCanvas.getContext("2d");

var panes = {
	list: [],
	dragndrop: null,
	lastmousemove: 0,
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

		var type = event.type;
		if (event.type == "mousemove" && panes.dragndrop)
		{
			var top = panes.dragndrop.top;
			if (!top || top.checkBoundary(10 + top.x + panes.dragndrop.x + event.movementX, 10 + top.y + panes.dragndrop.y, "mousemove"))
			{
				panes.dragndrop.x += event.movementX;
			}
			if (!top || top.checkBoundary(10 + top.x + panes.dragndrop.x, 10 + top.y + panes.dragndrop.y + event.movementY, "mousemove"))
			{
				panes.dragndrop.y += event.movementY;
			}
			return;
		}
		if (event.type == "mouseup" && panes.dragndrop)
		{
			panes.dragndrop = null;
			return;
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
					x -= temp.x;
					y -= temp.y;
					temp = temp.top;
				}

				for (var j = 0; j < targetPane.subRegions.length; j++)
				{
					var targetRegion = targetPane.subRegions[j].checkBoundary(x, y, type);
					if (targetRegion)
					{
						targetRegion.mouseHandler(targetPane, x, y, type);
					}
				}
				return;
			}
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
	x -= this.x;
	y -= this.y;
	if (!this.boundaryPath)
	{
		return false;
	}
	if (nullCtx.isPointInPath(this.boundaryPath, x, y))
	{
		for (var i = 0; i < this.subPanes.length; i++)
		{
			var target = this.subPanes[i].checkBoundary(x, y, type);
			if (target)
			{
				if (type == "mousedown")
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

		ctx.stroke(this.boundaryPath);
		ctx.fill(this.boundaryPath);
		ctx.clip(this.boundaryPath);

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
		for (var i = this.subPanes.length - 1; i >= 0; i--)
		{
			this.subPanes[i].draw(ctx);
		}
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
