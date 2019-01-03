const gpu = new GPU();
const myFunc = gpu.createKernel(function (inputArray) {
	var x = this.thread.x;
	var y = this.thread.y;
	var o = inputArray[x][y];
	var a = 1;
	if (x > 0) {
		a++;
		o += inputArray[x - 1][y];
	}
	if (x < 4999) {
		a++;
		o += inputArray[x + 1][y];
	}
	if (y > 0) {
		a++;
		o += inputArray[x][y - 1];
	}
	if (y < 4999) {
		a++;
		o += inputArray[x][y + 1];
	}
	return o / a;
}).setOutput([5000, 5000]);

var testInput = [];
var testout = [];
for (var i = 0; i < 5000; i++) {
	break;
	testInput[i] = [];
	testout[i] = [];
	for (var j = 0; j < 5000; j++) {
		testInput[i][j] = Math.random();
		testout[i][j] = Math.random();
	}
}

var ta = performance.now();
//myFunc(testInput);
var tb = performance.now();
var x;
var y;
var o;
var a;
for (var i = 0; i < 5000; i++) {
	break;
	for (var j = 0; j < 5000; j++) {
		x = i;
		y = j;
		o = testInput[x][y];
		a = 1;
		if (x > 0) {
			a++;
			o += testInput[x - 1][y];
		}
		if (x < 4999) {
			a++;
			o += testInput[x + 1][y];
		}
		if (y > 0) {
			a++;
			o += testInput[x][y - 1];
		}
		if (y < 4999) {
			a++;
			o += testInput[x][y + 1];
		}
		testout[x][y] = o / a;
	}
}
var tc = performance.now();
console.log((tb - ta) + " vs " + (tc - tb));
