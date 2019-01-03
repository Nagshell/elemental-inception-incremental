for (var i = 0; i < gridSize; i++) {
	grid[i] = [];
	for (var j = 0; j < gridSize; j++) {
		grid[i][j] = new Cell({
			x: i,
			y: j
		});
	}
}

for (var i = 0; i < gridSize; i++) {
	grid[i][0].initialize(0, true);
	grid[i][gridSize - 1].initialize(0, true);
	grid[0][i].initialize(0, true);
	grid[gridSize - 1][i].initialize(0, true);
}

for (var i = 1; i < gridSize - 20; i++) {
	//grid[10][i].initialize(0, true);
	//grid[50][i].initialize(0, true);
	//grid[90][i].initialize(0, true);

	//grid[30][gridSize - i].initialize(0, true);
	//grid[70][gridSize - i].initialize(0, true);

}

var noiser = new OpenSimplexNoise(Math.floor(Math.random() * 100));
var terrainNoiseGrid = noiser.array2D(gridSize, gridSize);

for (var i = 0; i < gridSize; i++) {
	for (var j = 0; j < gridSize; j++) {
		//grid[i][j].initialize(Math.floor(5 * i / gridSize) + Math.floor(5 * j / gridSize) + 3 * Math.floor(3 * (terrainNoiseGrid[Math.floor(i / 2)][Math.floor(j / 2)] + 1) / 2));
		//grid[i][j].initialize(Math.floor(10 * i / gridSize) + Math.floor(10 * j / gridSize));
		grid[i][j].initialize(3 * Math.floor(5 * (terrainNoiseGrid[Math.floor(i / 2)][Math.floor(j / 2)] + 1) / 2));
		grid[i][j].initialize(0);
	}
}
for (var i = 0; i < gridSize; i++) {
	for (var j = 0; j < gridSize; j++) {
		grid[i][j].finalize();
	}
}

tick();
requestAnimationFrame(loop);
