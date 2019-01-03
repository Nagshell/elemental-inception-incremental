//importScripts("Data.js");

var earthGrid;

function unravel() {
	//for (var i = 0; i < 600; i++) {
	for (var j = 0; j < 600; j++) {
		earthGrid[j] = Math.floor(1.3 * 1000) / 100;
		//earthGrid[i * 600 + j] = Math.floor(1.3 * 1000) / 100;
	}
	//}
}

onmessage = function (e) {
	earthGrid = new Float32Array(e.data);
	unravel();
	postMessage(earthGrid.buffer, [earthGrid.buffer]);
}
