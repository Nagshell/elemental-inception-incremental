function canvasMouseHandler(event)
{
	panes.mouseHandler(event);
	//particleGenerator.mouseHandler(event);
}

function documentMouseHandler(event)
{
	console.log(event);
}

document.addEventListener("mousemove", canvasMouseHandler);
document.addEventListener("mousedown", canvasMouseHandler);
document.addEventListener("mouseup", canvasMouseHandler);
document.addEventListener("click", canvasMouseHandler);

var canvas = document.getElementById("canvasMain");
var ctxActive = canvas.getContext("2d");

function draw()
{
	ctxActive.resetTransform();
	ctxActive.clearRect(0, 0, 800, 800);

	ctxActive.font = "14px Arial";
	ctxActive.textBaseline = "middle";
	ctxActive.textAlign = "center";
	ctxActive.strokeStyle = "#686868";
	ctxActive.lineWidth = 2;
	ctxActive.fillStyle = "#101010";
	ctxActive.shadowColor = "#FFFFFF";
	ctxActive.shadowBlur = 0;

	for (var i = panes.list.length - 1; i >= 0; i--)
	{
		panes.list[i].draw(ctxActive);
	}
	//ctxActive.globalAlpha = 0.5;
	//particleGenerator.draw(ctxActive);
	ctxActive.globalAlpha = 1;
}

function drawNumber(ctx, num, x, y)
{
	ctx.save();
	ctx.textAlign = "left";

	ctx.fillText(Math.trunc(num * 100) / 100, x, y);

	ctx.restore();
}
