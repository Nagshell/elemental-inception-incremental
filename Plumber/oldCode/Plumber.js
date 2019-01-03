// Loop timer
var lastTimestamp = null;
var accumulatedTime = 0;

var dist = 1; //Math.floor(size / 2.8);
var cd = 0;
var cdmax = 5000;
var bombSize = 0; //32490;
bombSize = 30;
var times = 0;
var lag = 0;

var bombX, bombY;
var attackSize = 0;
var waterLag = 0;
var wX, wY;

function waterPull(x, y) {
	if (waterLag) return;
	waterLag = 10;
	wX = x;
	wY = y;
	for (var i = -30; i < 30; i++) {
		if (grid[x + i])
			for (var j = -30; j < 30; j++) {
				if (grid[x + i][y + j] && i * i + j * j < 12 * 12) {
					//grid[x + i][y + j].inflow(6, grid[x + i][y + j].contentAmount * 3);
					grid[x + i][y + j].frozen = true;
				}
			}
	}
}

function launchBomb(x, y) {
	if (lag) return;
	for (var i = 0; i < cellList.length; i++) {
		cellList[i].contentAmount = 0;
		cellList[i].inflow(2, 20 - cellList[i].terrain);
		for (var j = 0; j < cellList[i].adjacent.length; j++) {
			cellList[i].adjacentFlow[j] = 5;
		}
	}
	flush();
	draw();
	//grid[x][y].inflow(6, grid[x][y].contentAmount * 100);
	/*for (var i = -5; i < 6; i++) {
		if (grid[x + i])
			for (var j = -5; j < 6; j++) {
				if (grid[x + i][y + j] && i * i + j * j < 29) {
					//grid[x + i][y + j].inflow(6, grid[x + i][y + j].contentAmount * 3);
					grid[x + i][y + j].contentAmount = 0;
				}
			}
	}
	lag = 60;*/

	bombX = x;
	bombY = y;
	for (var i = -5; i < 6; i++) {
		if (grid[x + i])
			for (var j = -5; j < 6; j++) {
				if (grid[x + i][y + j] && i * i + j * j < 29) {
					//grid[x + i][y + j].inflow(6, grid[x + i][y + j].contentAmount * 3);
					grid[x + i][y + j].contentAmount = 0;
					grid[x + i][y + j].bombed = true;
				}
			}
	}
	lag = 120;
	attackSize = 0.05;
}
var r, d, m1, m2;
var lim = 0;

function tick() {

	controllerTick();
	if (lag) {
		lag -= 0.3;
		d = 120 - lag;
		d /= 1;
		m1 = 0 + d;
		m2 = 6 + d;
		var i, j;
		for (var ki = -Math.floor(m2); ki < m2; ki++) {
			i = ki + bombX;
			if (i < 0) continue;
			if (i >= gridSize) break;
			for (var kj = -Math.floor(m2); kj < m2; kj++) {
				j = kj + bombY;

				if (j < 0) continue;
				if (j >= gridSize) break;
				if (grid[i][j].bombed) continue;
				r = (ki) * (ki) + (kj) * (kj);

				if (r > m1 * m1 && r < m2 * m2) {
					grid[i][j].contentAmount *= Math.max(0, 1 - (lag + 120) / 240);
					grid[i][j].bombed = true;
				}

			}
		}
		if (lag < 0) {
			lag = 0;
			for (i = 0; i < cellList.length; i++) {
				cellList[i].bombed = false;
			}
		}

	}
	if (bombX && lag < 90)
		grid[bombX][bombY].inflow(5, 500 * (1 - lag / 90) + 3.9 * attackSize * gridSize);

	if (waterLag > 0) {
		waterLag -= 0.5;
		d = waterLag / 1;
		d /= 1;
		m1 = 0 + d;
		m2 = 8 + d;
		var i, j;
		for (var ki = -Math.floor(m2); ki < m2; ki++) {
			i = ki + wX;
			if (i < 0) continue;
			if (i >= gridSize) break;
			for (var kj = -Math.floor(m2); kj < m2; kj++) {

				j = kj + wY;
				if (j < 0) continue;
				if (j >= gridSize) break;
				if (wX == i && wY == j) continue;
				if (!grid[i][j].frozen) continue;
				r = (ki) * (ki) + (kj) * (kj);

				if (r > m1 * m1 && r < m2 * m2) {
					grid[wX][wY].inflow(grid[i][j].contentType, grid[i][j].contentAmount * 5 / 6);
					grid[i][j].contentAmount /= 6;
					grid[i][j].frozen = false;
				}
			}
		}

		if (waterLag <= 0) {
			waterLag = 0;
			grid[wX][wY].contentAmount /= 3;
			for (i = 0; i < cellList.length; i++) {
				cellList[i].frozen = false;
			}
		}
	}
	//grid[1][1].inflow(4, bombSize);
	//grid[1][gridSize - 2].inflow(5, bombSize);
	//grid[gridSize - 2][1].inflow(3, bombSize);
	//grid[gridSize - 2][gridSize - 2].inflow(2, bombSize);
	//bombSize += 0.1;
	if (cd-- == 0) {
		times++;
		if (times == 1) {
			cdmax = -1;
			//bombSize = 0;
		}
		cd = cdmax;

		for (var i = 0; i < cellList.length; i++) {
			cellList[i].contentAmount = 0;
			cellList[i].inflow(5, 20 - cellList[i].terrain);
		}

		//grid[dist][dist].inflow(5, bombSize);
		//grid[Math.floor(gridSize / 2)][Math.floor(gridSize / 2)].inflow(5, bombSize);
		//grid[dist][Math.floor(gridSize / 2)].inflow(3, bombSize);
		//grid[gridSize - dist][gridSize - dist].inflow(5, bombSize);
		//grid[gridSize - dist][dist].inflow(3, bombSize);

		//bombSize += 1000;
		//cdmax += 60;
	}

	if (mouseoverX > 110 && mouseoverX < 690)
		if (mouseoverY > 110 && mouseoverY < 690) {
			var x = Math.floor((mouseoverX - 100) / cellSize);
			var y = Math.floor((mouseoverY - 100) / cellSize);
			if (grid[x] && grid[x][y] && grid[x][y].contentType > 1 && grid[x][y].contentType < 6) {
				//grid[x][y].inflow(6, grid[x][y].contentAmount * 16);
			}
		}

	//grid[dist][gridSize - dist].inflow(4, 20);
	if (!lag && bombX) {
		for (var i = 0; i < cellList.length; i++) {
			if (cellList[i].adjacent.length < 4) cellList[i].inflow(2, attackSize);
			if (cellList[i].contentAmount < 0.3) cellList[i].contentAmount -= 0.0001;
		}
		attackSize += 0.00001;
	}

	if (lim-- == 0) {
		lim = 4;
		//calibrate();
		//spread();

	}
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
	if (fpssize < 180) {
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
	requestAnimationFrame(loop);
}
