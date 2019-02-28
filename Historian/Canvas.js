function canvasMouseHandler(event) {
	panes.mouseHandler(event);
}
var canvas = document.getElementById("canvasMain");

canvas.addEventListener("mousemove", canvasMouseHandler);
canvas.addEventListener("mousedown", canvasMouseHandler);
canvas.addEventListener("mouseup", canvasMouseHandler);
canvas.addEventListener("click", canvasMouseHandler);

var ctxActive = canvas.getContext("2d");

function draw() {
	ctxActive.resetTransform();
	ctxActive.clearRect(0, 0, 800, 800);

	ctxActive.font = "14px Arial";
	ctxActive.textBaseline = "middle";
	ctxActive.textAlign = "center";
	ctxActive.strokeStyle = "#686868";
	ctxActive.lineWidth = 2;
	ctxActive.fillStyle = "#181818";

	for (var i = panes.list.length - 1; i >= 0; i--) {
		panes.list[i].draw(ctxActive);
	}

	ctxActive.beginPath();
	ctxActive.rect(0, 0, 50, 50);

	ctxActive.stroke();
	ctxActive.fill();
	ctxActive.fillStyle = "#818181";
	ctxActive.fillText("Reset", 25, 25);
}

function drawNumber(ctx, num, x, y) {
	ctx.save();
	ctx.textAlign = "left";

	ctx.fillText(Math.trunc(num * 100) / 100, x, y);

	ctx.restore();
}
