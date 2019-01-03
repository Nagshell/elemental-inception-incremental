// Loop timer
var lastTimestamp = null;
var accumulatedTime = 0;

function tick() {

	controllerTick();

	//calibrate();
	//spread();
	//flush();
}

var stop = false;
var rounds = 0;
var lastRound;
var tempo = 16;

var fpsarray = [];
var fpscount = 0;
var fpssize = 0;

function loop(timestamp) {
	if (!lastTimestamp) {
		lastTimestamp = timestamp;
	}
	if (stop) {
		lastTimestamp = timestamp;
		requestAnimationFrame(loop);
		return;
	}
	if (fpssize < 30) {
		fps = fpscount * 1000 / (timestamp - fpsarray[0]);
		fpssize++;
		fpsarray[fpscount++] = timestamp;
	}
	else {
		if (fpscount == fpssize) {
			fpsarray[fpscount] = timestamp;
			fpscount = 0;
			fps = fpssize * 1000 / (fpsarray[fpssize - 1] - fpsarray[0]);
		}
		else {
			fpsarray[fpscount++] = timestamp;
			fps = fpssize * 1000 / (fpsarray[fpscount - 1] - fpsarray[fpscount]);
		}
	}
	accumulatedTime += timestamp - lastTimestamp;

	lastTimestamp = timestamp;
	rounds = 0;
	while (accumulatedTime > 16 && rounds++ < 1) {
		accumulatedTime -= tempo;
		tick();
	}
	while (accumulatedTime > 16) {
		accumulatedTime -= 16;
	}
	lastRound = rounds;
	draw();
	z = 0;
	for (var i = 0; i < 600; i++)
		workerEarth.postMessage(grid[i], [grid[i]]);
}
var z;
workerEarth.onmessage = function (e) {
	grid[z++] = e.data;
	for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
			//grid[i * gridSize + j] = Math.floor(Math.random() * 1000) / 100;
		}
	}
	if (z == 600)
		requestAnimationFrame(loop);
}
