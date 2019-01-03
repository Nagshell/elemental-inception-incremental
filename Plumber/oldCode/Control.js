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

var mouseoverX, mouseoverY;

function canvasHover(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = (event.clientX - canvasBox.left - 1) * 800 / canvasBox.width;
	var y = (event.clientY - canvasBox.top - 1) * 800 / canvasBox.height;
	mouseoverX = Math.floor(x);
	mouseoverY = Math.floor(y)
}
canvas.addEventListener("mousemove", canvasHover);

function canvasClick(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = (event.clientX - canvasBox.left - 1) * 800 / canvasBox.width;
	var y = (event.clientY - canvasBox.top - 1) * 800 / canvasBox.height;

	x = Math.floor(x);
	y = Math.floor(y);

	if (mouseoverX > 100 && mouseoverX < 700)
		if (mouseoverY > 100 && mouseoverY < 700) {
			x = Math.floor((x - 100) / cellSize);
			y = Math.floor((y - 100) / cellSize);
			if (grid[x] && grid[x][y]) {
				//launchBomb(x, y);
				if (!bombX) launchBomb(x, y);
				else
					waterPull(x, y);
			}
		}

}
canvas.addEventListener("click", canvasClick);
