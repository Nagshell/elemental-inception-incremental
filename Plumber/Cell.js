/*
 * webgl cell
 * [ amount, inflow, terrain, changed,flowUp,flowDown,flowLeft,flowRight]
 *
 *
 *
 *
 */

class Cell {
	constructor(coordinates) {

	}
	initialize(height, walled) {

	}
	finalize() {

	}
	inflow(type, amount) {

	}
}

var workerEarth = new Worker('CellWorker.js');
