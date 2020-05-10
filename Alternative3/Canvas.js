var savingSystem;
var lastMouseEvent;

function canvasMouseHandler(event)
{
	if (savingSystem && savingSystem.loadingEnded)
	{
		lastMouseEvent = event;
		panes.mouseHandler(event);
	}
}

function canvasKeyHandler(event)
{
	panes.keyHandler(event);
}

document.addEventListener("mousemove", canvasMouseHandler);
document.addEventListener("mousedown", canvasMouseHandler);
document.addEventListener("mouseup", canvasMouseHandler);
document.addEventListener("click", canvasMouseHandler);
document.addEventListener("dblclick", canvasMouseHandler);
document.addEventListener("keydown", canvasKeyHandler);

var canvas = document.getElementById("canvasMain");
var ctxActive = canvas.getContext("2d");

function resizeCanvas()
{
	if (mainPane.centerX)
	{
		mainPane.centerX -= Math.trunc(canvas.width / 2);
		mainPane.centerY -= Math.trunc(canvas.height / 2) - 100;
	}

	canvas.width = document.body.clientWidth - 20;
	canvas.height = document.body.clientHeight - 20;

	path = new Path2D();
	path.rect(0, 0, canvas.width, canvas.height - 100);
	mainPane.boundaryPath = path;

	path = new Path2D();
	path.rect(0, 0, canvas.width, canvas.height);
	panes.mainBoundary = path;

	if (mainPane.centerX)
	{
		mainPane.centerX += Math.trunc(canvas.width / 2);
		mainPane.centerY += Math.trunc(canvas.height / 2) - 100;
	}
	else
	{
		mainPane.centerX = Math.trunc(canvas.width / 2);
		mainPane.centerY = Math.trunc(canvas.height / 2) - 100;
	}

	var path = new Path2D();
	path.rect(0, 0, canvas.width, 99);
	trackerPane.boundaryPath = path;
	trackerPane.resize();
}
var borderGlow = {
	precolors:
	{
		purple: "rgba(255,55,205,",
		blue: "rgba(5,55,255,",
		yellow: "rgba(255,255,0,",
		cyan: "rgba(0,255,255,",
	},
	colors:
	{
		darkfill: "#101010",
		brightfill: "686868"
	},
	radius: 4,
	ticks: 0,
	alpha: 1,
	cycleTime: 240,
	prepareColor: function (color, alpha)
	{
		return this.precolors[color] + alpha + ")";
	},
	preparationTick: function ()
	{
		var tempGlowCycleTime = this.ticks++ % (this.cycleTime + 1) / this.cycleTime;
		tempGlowCycleTime *= Math.PI * 2;
		tempGlowCycleTime = (Math.sin(tempGlowCycleTime) + 1) / 2;
		tempGlowCycleTime = tempGlowCycleTime * 0.98 + 0.02;
		this.alpha = tempGlowCycleTime / 2;
		this.solidalpha = 1;
		for (var col in this.precolors)
		{
			if (col == "purple")
			{
				this.colors[col] = this.prepareColor(col, 0.5 + 0.5 * tempGlowCycleTime);
			}
			else
			{
				this.colors[col] = this.prepareColor(col, tempGlowCycleTime);
			}
			this.colors["solid" + col] = this.prepareColor(col, 1);
		}
	},
};

function draw()
{
	borderGlow.preparationTick();
	ctxActive.restore();
	ctxActive.save();
	ctxActive.clearRect(0, 0, canvas.width, canvas.height);
	ctxActive.font = "14px Arial";
	ctxActive.textBaseline = "middle";
	ctxActive.textAlign = "center";
	ctxActive.strokeStyle = "#DDDDDD";
	ctxActive.lineWidth = 2;
	ctxActive.fillStyle = "#101010";

	for (var i = panes.list.length - 1; i >= 0; i--)
	{
		panes.list[i].draw(ctxActive);
	}
}

function drawNumber(ctx, num, x, y, mode = "", align = "left", prefix = "", suffix = "")
{
	ctx.save();
	ctx.textAlign = align;
	if (num < 0)
	{
		num *= -1;
		prefix += "-";
	}
	if (num > 1e6 && mode != "exp")
	{
		mode = "exp";
	}
	if ((num == 0 || num >= 0.001 & num < 1000) && mode == "exp")
	{
		mode = "fixed";
	}
	if (mode == "exp")
	{
		var e = 0;
		while (num >= 10)
		{
			e++;
			num /= 10;
		}
		while (num < 1)
		{
			e--;
			num *= 10;
		}
		ctx.fillText(prefix + (Math.trunc(num * 100) / 100).toFixed(2) + "e" + e + suffix, x, y);
	}
	else if (mode == "fixed")
	{
		ctx.fillText(prefix + (Math.trunc(num * 1000) / 1000).toFixed(3).slice(0, 5) + suffix, x, y);
	}
	else
	{
		ctx.fillText(prefix + Math.trunc(num) + suffix, x, y);
	}

	ctx.restore();
}
