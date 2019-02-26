function canvasMouseHover(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = event.clientX - canvasBox.left - 1;
	var y = event.clientY - canvasBox.top - 1;
	panes.handleMouse(x, y, "hover");
}

function canvasMouseDown(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = event.clientX - canvasBox.left - 1;
	var y = event.clientY - canvasBox.top - 1;
	panes.handleMouse(x, y, "mouseDown");
}

function canvasMouseUp(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = event.clientX - canvasBox.left - 1;
	var y = event.clientY - canvasBox.top - 1;
	panes.handleMouse(x, y, "mouseUp");
}

function canvasClick(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = event.clientX - canvasBox.left - 1;
	var y = event.clientY - canvasBox.top - 1;
	panes.handleMouse(x, y, "click");
}

var canvas = document.getElementById("canvasMain");

canvas.addEventListener("mousemove", canvasMouseHover);
canvas.addEventListener("mousedown", canvasMouseDown);
canvas.addEventListener("mouseup", canvasMouseUp);
canvas.addEventListener("click", canvasClick);

var ctxActive = canvas.getContext("2d");

function draw() {
	ctxActive.resetTransform();
	ctxActive.clearRect(0, 0, 800, 800);

	ctxActive.font = "14px Arial";
	ctxActive.textBaseline = "middle";
	ctxActive.textAlign = "center";
	ctxActive.strokeStyle = "#686868";
	ctxActive.lineWidth = 1;
	ctxActive.fillStyle = "#181818";

	for (var i = panes.list.length - 1; i >= 0; i--) {
		panes.list[i].draw(ctxActive);
	}

	ctxActive.beginPath();
	ctxActive.rect(0, 0, 50, 50);
	ctxActive.fill();
	ctxActive.stroke();
	ctxActive.fillStyle = "#818181";
	ctxActive.fillText("Reset", 25, 25);
}

function drawNumber(ctx, num, x, y) {
	ctx.save();
	ctx.textAlign = "left";

	ctx.fillText(Math.trunc(num * 100) / 100, x, y);

	ctx.restore();
}
