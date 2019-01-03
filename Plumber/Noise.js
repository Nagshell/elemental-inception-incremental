var norm = 1.0 / 47.0;
var squish = 0.366025403784439;
var stretch = -0.211324865405187;

var base = [
	[1, 1, 0, 1, 0, 1, 0, 0, 0],
	[1, 1, 0, 1, 0, 1, 2, 1, 1]
];

var grad = [
	5, 2, 2, 5,
	-5, 2, -2, 5,
	5, -2, 2, -5,
	-5, -2, -2, -5,
];
var lp = [0, 1, 1, 0, 4, 1, 17, 0, 20, 2, 21, 2, 22, 5, 23, 5, 26, 4, 39, 3, 42, 4, 43, 3];

var p = [0, 0, 1, -1, 0, 0, -1, 1, 0, 2, 1, 1, 1, 2, 2, 0, 1, 2, 0, 2, 1, 0, 0, 0];

class Contribution2 {
	constructor(multiplier, xsb, ysb) {
		this.dx = -xsb - multiplier * squish;
		this.dy = -ysb - multiplier * squish;
		this.xsb = xsb;
		this.ysb = ysb;
	}
}

function shuffleSeed(seed) {
	const newSeed = new Uint32Array(1);
	newSeed[0] = seed[0] * 1664525 + 1013904223;
	return newSeed;
}

class OpenSimplexNoise {
	constructor(clientSeed) {
		this.lookup2D = [];
		this.initialize();
		this.perm = new Uint8Array(256);
		this.perm2D = new Uint8Array(256);
		const source = new Uint8Array(256);

		for (let i = 0; i < 256; i++) source[i] = i;

		let seed = new Uint32Array(1);
		seed[0] = clientSeed;
		seed = shuffleSeed(shuffleSeed(shuffleSeed(seed)));

		for (let i = 255; i >= 0; i--) {
			seed = shuffleSeed(seed);
			const r = new Uint32Array(1);
			r[0] = (seed[0] + 31) % (i + 1);
			if (r[0] < 0) r[0] += i + 1;
			this.perm[i] = source[r[0]];
			this.perm2D[i] = this.perm[i] & 0x0e;

			source[r[0]] = source[i];
		}
	}

	array2D(width, height) {
		const output = new Array(width);
		for (let x = 0; x < width; x++) {
			output[x] = new Array(height);
			for (let y = 0; y < height; y++) {
				output[x][y] = this.noise2D(5 * x / width, 5 * y / height);
			}
		}
		return output;
	}

	noise2D(x, y) {
		const stretchOffset = (x + y) * stretch;
		const [xs, ys] = [x + stretchOffset, y + stretchOffset];
		const [xsb, ysb] = [Math.floor(xs), Math.floor(ys)];
		const squishOffset = (xsb + ysb) * squish;
		const [dx0, dy0] = [x - (xsb + squishOffset), y - (ysb + squishOffset)];
		const [xins, yins] = [xs - xsb, ys - ysb];
		const inSum = xins + yins;
		const hashVals = new Uint32Array(4);
		hashVals[0] = xins - yins + 1;
		hashVals[1] = inSum;
		hashVals[2] = inSum + yins;
		hashVals[3] = inSum + xins;
		const hash =
			hashVals[0] |
			(hashVals[1] << 1) |
			(hashVals[2] << 2) |
			(hashVals[3] << 4);
		let c = this.lookup2D[hash];
		let value = 0.0;
		while (typeof c !== 'undefined') {
			const [dx, dy] = [dx0 + c.dx, dy0 + c.dy];
			let attn = 2 - dx * dx - dy * dy;
			if (attn > 0) {
				const [px, py] = [xsb + c.xsb, ysb + c.ysb];
				const i = this.perm2D[(this.perm[px & 0xff] + py) & 0xff];
				const valuePart = grad[i] * dx + grad[i + 1] * dy;
				attn *= attn;
				value += attn * attn * valuePart;
			}
			c = c.next;
		}
		return value * norm;
	}

	initialize() {
		const contributions2D = [];
		for (let i = 0; i < p.length; i += 4) {
			const baseSet = base[p[i]];
			let previous = null;
			let current = null;
			for (let k = 0; k < baseSet.length; k += 3) {
				current = new Contribution2(baseSet[k], baseSet[k + 1], baseSet[k + 2]);
				if (previous === null) contributions2D[i / 4] = current;
				else previous.next = current;
				previous = current;
			}
			current.next = new Contribution2(p[i + 1], p[i + 2], p[i + 3]);
		}
		this.lookup2D = [];
		for (let i = 0; i < lp.length; i += 2) {
			this.lookup2D[lp[i]] = contributions2D[lp[i + 1]];
		}
	}
}
