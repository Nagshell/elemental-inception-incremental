var canvas = document.getElementById("canvasMain");

var ctxActive = canvas.getContext("2d");
var fps = 0;

ctxActive.font = "14px Arial";
ctxActive.textBaseline = "middle";
ctxActive.textAlign = "left";
ctxActive.lineWidth = 0.3;

var fluidData = ctxActive.createImageData(600, 600);
var backgroundData;

var limit = true;

function draw() {
	ctxActive.save();

	ctxActive.clearRect(0, 0, 800, 800);

	var cell;
	var temp;
	for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
			cell = grid[i][j];
			if (!cell.displayChange) continue;
			cell.displayChange = false;
			for (var x = 0; x < cellSize; x++)
				for (var y = 0; y < cellSize; y++) {
					var index = ((y + j * cellSize) * 600 + x + i * cellSize) * 4;
					var alpha = Math.min(1, 0.1 + 0.05 * cell.displayAmount);
					fluidData.data[index + 0] = Math.floor(backgroundData.data[index + 0] * (1 - alpha) + alpha * colorArray[cell.displayType][0]);
					fluidData.data[index + 1] = Math.floor(backgroundData.data[index + 1] * (1 - alpha) + alpha * colorArray[cell.displayType][1]);
					fluidData.data[index + 2] = Math.floor(backgroundData.data[index + 2] * (1 - alpha) + alpha * colorArray[cell.displayType][2]);
					if (limit && fluidData.data[index + 2] == 255) {
						limit = false;
						// console.log(backgroundData.data[index + 2]);
						// console.log(alpha);
						// console.log(colorArray[cell.displayType][2]);
						// console.log(backgroundData.data[index + 2] * (1 - alpha) + alpha * colorArray[cell.displayType][2]);
					}
					fluidData.data[index + 3] = 100;
					//console.log(0.1 + 0.03 * cell.displayAmount);
				}
			if (grid[i - 1]) {
				if (grid[i - 1][j].contentType !== grid[i][j].contentType) {
					var alpha = 0.5;
					cell.displayChange = true;
					for (var x = 0; x < cellSize; x++) {
						var index = ((x + j * cellSize) * 600 + 0 + i * cellSize) * 4;
						fluidData.data[index + 0] = Math.floor(fluidData.data[index + 0] * (1 - alpha) + alpha * colorArray[0][0]);
						fluidData.data[index + 1] = Math.floor(fluidData.data[index + 1] * (1 - alpha) + alpha * colorArray[0][1]);
						fluidData.data[index + 2] = Math.floor(fluidData.data[index + 2] * (1 - alpha) + alpha * colorArray[0][2]);
					}
				}
			}
			if (grid[i][j - 1]) {
				if (grid[i][j - 1].contentType !== grid[i][j].contentType) {
					var alpha = 0.5;
					cell.displayChange = true;
					for (var x = 0; x < cellSize; x++) {
						var index = ((0 + j * cellSize) * 600 + x + i * cellSize) * 4;
						fluidData.data[index + 0] = Math.floor(fluidData.data[index + 0] * (1 - alpha) + alpha * colorArray[0][0]);
						fluidData.data[index + 1] = Math.floor(fluidData.data[index + 1] * (1 - alpha) + alpha * colorArray[0][1]);
						fluidData.data[index + 2] = Math.floor(fluidData.data[index + 2] * (1 - alpha) + alpha * colorArray[0][2]);
					}
				}
			}
		}
	}
	ctxActive.putImageData(fluidData, 100, 100);

	ctxActive.fillStyle = "#FFFFFF";
	ctxActive.globalAlpha = 1;
	ctxActive.fillText(mouseoverX, 20, 20);
	ctxActive.fillText(mouseoverY, 20, 35);
	ctxActive.fillText(Math.round(100 * fps) / 100, 420, 35);
	if (mouseoverX > 100 && mouseoverX < 700)
		if (mouseoverY > 100 && mouseoverY < 700) {
			var x = Math.floor((mouseoverX - 100) / cellSize);
			var y = Math.floor((mouseoverY - 100) / cellSize);
			ctxActive.fillText(x, 20, 60);
			ctxActive.fillText(y, 20, 75);
			if (grid[x] && grid[x][y]) {
				ctxActive.fillText(Math.round(grid[x][y].contentAmount * 1e3) / 1e3, 20, 100);
				ctxActive.fillText(Math.round(grid[x][y].terrain * 1e3) / 1e3, 20, 120);
			}
		}

	for (var i = 0; i < totals.length; i++) {
		totals[i] = 0;
	}
	for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
			cell = grid[i][j];
			if (cell.contentType < 2) continue;
			totals[cell.contentType] += cell.contentAmount;
		}
	}
	ctxActive.fillText(Math.floor(totals[2]), 20, 200);
	ctxActive.fillText(Math.floor(totals[3]), 20, 220);
	ctxActive.fillText(Math.floor(totals[4]), 20, 240);
	ctxActive.fillText(Math.floor(totals[5]), 20, 260);
	ctxActive.fillText(Math.floor(totals[6]), 20, 280);

	ctxActive.restore();
}
var colorTypes = [
	"#FFFFFF",
	"#000000",
	"#BB2222",
	"#2222BB",
	"#22BB22",
	"#BBBB22",
	"#BB22BB",
];
var colorArray = [
	[255, 255, 255],
	[0, 0, 0],
	[255, 10, 10],
	[10, 255, 255],
	[10, 255, 10],
	[255, 255, 10],
	[255, 10, 255],
];

function prepareBackground() {
	if (backgroundData) return;

	var backgroundCanvas = document.createElement("canvas");
	backgroundCanvas.width = 600;
	backgroundCanvas.height = 600;
	var ctxBackground = backgroundCanvas.getContext('2d');
	var tempObject;

	ctxBackground.fillStyle = colorTypes[0];
	for (var i = 0; i < terrainWallList.length; i++) {
		tempObject = terrainWallList[i].coordinates;
		ctxBackground.fillRect(tempObject.x * cellSize, tempObject.y * cellSize, cellSize, cellSize);
	}

	for (var j = 0; j < terrainRenderList.length; j++) {
		var height = terrainRenderList[j].terrain;
		ctxBackground.fillStyle = "rgb(" + (10 + height * 8) + "," + (10 + height * 8) + "," + (10 + height * 8) + ")";
		tempObject = terrainRenderList[j].coordinates;
		ctxBackground.fillRect(tempObject.x * cellSize, tempObject.y * cellSize, cellSize, cellSize);
	}

	backgroundData = ctxBackground.getImageData(0, 0, 600, 600);
	for (var i = 0; i < backgroundData.data.length; i++) {
		fluidData.data[i] = backgroundData.data[i];
	}
}
