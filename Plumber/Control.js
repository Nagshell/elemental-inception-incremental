var x = 0,
	y = 0;
var keyflags = {};
var keySpeed = 0.1;
var playerXSpeed = 0;
var playerYSpeed = 0;

document.addEventListener("keydown", canvasKeydown);
document.addEventListener("keyup", canvasKeyup);

function controllerTick() {
	x += playerXSpeed;
	if (x < 1.5) x = 1.5;
	if (x > gridSize - 0.5) x = gridSize - 0.5;
	y += playerYSpeed;
	if (y < 1.5) y = 1.5;
	if (y > gridSize - 0.5) y = gridSize - 0.5;
}

function controllerDraw() {

}

function canvasKeydown(event) {
	if (event.code == 'Tab') return;
	if (keyflags[event.code]) return;
	switch (event.code) {
		case "KeyW":
			playerYSpeed -= keySpeed;
			break;
		case "KeyS":
			playerYSpeed += keySpeed;
			break;
		case "KeyA":
			playerXSpeed -= keySpeed;
			break;
		case "KeyD":
			playerXSpeed += keySpeed;
			break;
		default:
			break;
	}
	keyflags[event.code] = true;
}

function canvasKeyup(event) {
	if (event.code == 'Tab') return;
	if (!keyflags[event.code]) return;
	switch (event.code) {
		case "KeyW":
			playerYSpeed += keySpeed;
			break;
		case "KeyS":
			playerYSpeed -= keySpeed;
			break;
		case "KeyA":
			playerXSpeed += keySpeed;
			break;
		case "KeyD":
			playerXSpeed -= keySpeed;
			break;
		default:
			break;
	}
	keyflags[event.code] = false;
}

var hoverX, hoverY;
var hoverGridX, hoverGridY;
var clickGridX, clickGridY;

function canvasHover(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = (event.clientX - canvasBox.left - 1) * canvas.width / canvasBox.width;
	var y = (event.clientY - canvasBox.top - 1) * canvas.height / canvasBox.height;
	hoverX = Math.floor(x);
	hoverY = Math.floor(y);

	if (x > pixelOffsetX && x < pixelOffsetX + pixelSize)
		if (y > pixelOffsetY && y < pixelOffsetY + pixelSize) {
			hoverGridX = Math.floor((x - pixelOffsetX) / cellSize);
			hoverGridY = Math.floor((y - pixelOffsetY) / cellSize);
		}
}
canvas.addEventListener("mousemove", canvasHover);

function canvasClick(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = (event.clientX - canvasBox.left - 1) * canvas.width / canvasBox.width;
	var y = (event.clientY - canvasBox.top - 1) * canvas.height / canvasBox.height;

	if (x > pixelOffsetX && x < pixelOffsetX + pixelSize)
		if (y > pixelOffsetY && y < pixelOffsetY + pixelSize) {
			clickGridX = Math.floor((x - pixelOffsetX) / cellSize);
			clickGridY = Math.floor((y - pixelOffsetY) / cellSize);
		}

}
canvas.addEventListener("click", canvasClick);
