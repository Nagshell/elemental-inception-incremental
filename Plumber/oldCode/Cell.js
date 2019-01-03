class Cell {
	constructor(coordinates) {
		this.coordinates = coordinates;
		this.adjacent = [];
		this.adjacentFlow = [];

		this.contentType = 0;
		this.contentAmount = 0;

		this.displayType = 0;
		this.displayAmount = 0;

		this.inflowAmount = [];
		this.inflowType = [];
		this.inflowIndex = 0;

		this.additions = {};
	}
	initialize(height, walled) {
		if (this.initialized) return;
		this.initialized = true;

		if (walled) {
			terrainWallList.push(this);
			return;
		}
		this.contentType = 1;
		cellList.push(this);

		this.terrain = Math.min(Math.max(0, height), terrainMaxHeight);
		terrainRenderList.push(this);
	}
	finalize() {
		if (this.coordinates.x > 0 && grid[this.coordinates.x - 1][this.coordinates.y].contentType) {
			this.adjacent.push(grid[this.coordinates.x - 1][this.coordinates.y]);
			this.adjacentFlow.push(5);
		}
		if (this.coordinates.x + 1 < grid.length && grid[this.coordinates.x + 1][this.coordinates.y].contentType) {
			this.adjacent.push(grid[this.coordinates.x + 1][this.coordinates.y]);
			this.adjacentFlow.push(5);
		}
		if (this.coordinates.y > 0 && grid[this.coordinates.x][this.coordinates.y - 1].contentType) {
			this.adjacent.push(grid[this.coordinates.x][this.coordinates.y - 1]);
			this.adjacentFlow.push(5);
		}
		if (this.coordinates.y + 1 < grid.length && grid[this.coordinates.x][this.coordinates.y + 1].contentType) {
			this.adjacent.push(grid[this.coordinates.x][this.coordinates.y + 1]);
			this.adjacentFlow.push(5);
		}
	}
	inflow(type, amount) {
		if (this.inflowType[this.inflowIndex - 1] == type) {
			this.inflowAmount[this.inflowIndex - 1] += amount;
		}
		else {
			this.inflowType[this.inflowIndex] = type;
			this.inflowAmount[this.inflowIndex++] = amount;
		}
	}
};
var toggle = 1;

function calibrate() {
	if (--toggle > 0) return;
	toggle = 1;
	var drain;
	var cell;
	var stopCondition;
	var r;
	for (var x = 0; x < cellList.length; x++) {
		cell = cellList[x];
		if (cell.contentType !== 4)
			if (cell.calibrateAmount > 0.01) {
				for (var i = 0; i < cell.adjacent.length; i++) {
					var mult = 0.004;
					var rate = 5;
					if (cell.calibrateAmount < 0.95 && cell.coordinates.y < -2) {
						mult = 1 - cell.calibrateAmount;
					}
					if (cell.coordinates.y < -2) {
						rate = 15;
					}
					cell.adjacentFlow[i] += (rate - cell.adjacentFlow[i]) * mult;
				}
				if (false && cell.calibrateAmount > 24.5) {
					for (var i = 0; i < cell.adjacent.length; i++) {
						cell.adjacentFlow[i] += (4 - cell.adjacentFlow[i]) * 0.6;
					}
				}
				else {
					for (var i = 0; i < cell.adjacent.length; i++) {

						if (cell.contentType == 5) {
							drain = cell.calibrateAmount - cell.adjacent[i].calibrateAmount;
						}
						else {
							drain = cell.calibrateAmount - cell.adjacent[i].calibrateAmount + cell.terrain - cell.adjacent[i].terrain;
						}
						if (cell.contentType !== cell.adjacent[i].contentType && cell.adjacent[i].contentType > 1) {
							cell.adjacentFlow[i] -= 0.04; // * cell.adjacentFlow[i];
							if (cell.contentType == 2) {
								cell.adjacentFlow[i] -= 0.12;
							}
						}
						else if (cell.adjacent[i].contentType < 2) {
							cell.adjacentFlow[i] -= 0.01; // * cell.adjacentFlow[i];
							if (cell.contentType == 2) {
								cell.adjacentFlow[i] -= 0.3;

							}
						}
						//*
						else if (drain > 0.0) {
							if (drain > 0.03) {
								cell.adjacentFlow[i] -= 0.02; // * cell.adjacentFlow[i];}
								if (cell.contentType == 2) {
									cell.adjacentFlow[i] -= 0.06;
								}
							}
						}
						/*/
						else if (cell.contentAmount > cell.adjacent[i].contentAmount) {
							cell.adjacentFlow[i] -= 0.3;
						} //*/
						else {
							if (drain < -0.03) {
								cell.adjacentFlow[i] += 0.05; // / cell.adjacentFlow[i];
								if (cell.contentType == 2) {
									cell.adjacentFlow[i] += 0.15;
								}
							}
						} //*/
					}
				}
				stopCondition = false;
				r = 0;
				while (!stopCondition) {
					r++;
					if (r > 4) {
						for (var i = 0; i < cell.adjacent.length; i++) {
							cell.adjacentFlow[i] += (5 - cell.adjacentFlow[i]) * 0.1;
						}
					}
					cell.drain = 0;
					for (var i = 0; i < cell.adjacent.length; i++) {
						cell.drain += 1 / cell.adjacentFlow[i];
					}
					if (cell.drain > 0.8) {
						for (var i = 0; i < cell.adjacent.length; i++) {
							cell.adjacentFlow[i] += 0.5; //  / cell.adjacentFlow[i];
						}
					}
					else if (cell.drain < 0.02) {
						for (var i = 0; i < cell.adjacent.length; i++) {
							cell.adjacentFlow[i] -= 0.1; //  * cell.adjacentFlow[i];
						}
					}
					else {
						stopCondition = true;
					}
				}
			}
	}
}

function spread() {
	var outflow;
	var temp;
	var cell;
	var adj;
	for (var x = 0; x < cellList.length; x++) {
		cell = cellList[x];
		if (cell.contentAmount > 0.01) {
			outflow = 0;
			for (var i = 0; i < cell.adjacent.length; i++) {
				adj = cell.adjacent[i];
				if (cell.contentType == 5) {
					temp = cell.contentAmount / cell.adjacentFlow[i];
				}
				else {
					temp = Math.min(cell.contentAmount + cell.terrain - adj.terrain, cell.contentAmount) / cell.adjacentFlow[i];
				}
				if (temp > 0) {
					adj.inflow(cell.contentType, temp);
					outflow += temp;
				}
			}
			cell.contentAmount -= outflow;
		}
	}
}

function flush() {
	var cell;
	var type;
	var amount;
	for (var i = 0; i < cellList.length; i++) {
		cell = cellList[i];
		while (cell.inflowIndex > 0) {
			type = cell.inflowType[--cell.inflowIndex];
			amount = cell.inflowAmount[cell.inflowIndex];
			if (type == cell.contentType) {
				cell.contentAmount += amount;
			}

			else if (cell.contentType > 1) {
				cell.contentAmount -= amount;
				if (cell.contentAmount < 0) {
					cell.contentAmount *= -1;
					cell.contentType = type;
					for (var j = 0; j < cell.adjacent.length; j++) {
						cell.adjacentFlow[j] = 5;
					}
				}
			}
			else {
				cell.contentType = type;
				cell.contentAmount = amount;
			}
		}
		if (cell.contentAmount < 1e-10) {
			cell.contentAmount = 0;
			cell.contentType = 1;
		}
		else if (cell.contentAmount > 5 && cell.terrain < 1) {
			if (cd == cdmax)
				cell.inflow(cell.contentType, 0);
		}
		cell.calibrateAmount = cell.contentAmount;

		amount = Math.ceil(Math.min(40, cell.contentAmount) * 1) / 1;
		if (cell.displayType !== cell.contentType) {
			//if (Math.abs(cell.contentAmount - amount) > 0.1)
			cell.displayChange = true;
			cell.displayType = cell.contentType;
			cell.displayAmount = amount;
		}
		if (cell.displayAmount !== amount) {
			if (Math.abs(cell.contentAmount - cell.displayAmount) > 0.1) {
				cell.displayChange = true;
				cell.displayType = cell.contentType;
				cell.displayAmount = amount;
			}
		}

	}
}
