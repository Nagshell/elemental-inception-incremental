var cellSize = 1;
var pixelSize = 600;

var pixelOffsetX = 100;
var pixelOffsetY = 100;

const gridSize = pixelSize / cellSize;

//draw <-> logic <-> sublogic
var grid = [];

for (var i = 0; i < gridSize; i++) {
	grid[i] = new Float32Array(gridSize * 8);

	for (var j = 0; j < gridSize; j++) {
		//grid[i * gridSize + j] = 3; //Math.floor(Math.random() * 1000) / 100;
		grid[i][j] = 3; //Math.floor(Math.random() * 1000) / 100;
	}
	grid[i] = grid[i].buffer;
}
