function bitCount(n) {
	n = n - ((n >> 1) & 0x55555555)
	n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
	return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}

function RGBtoNumber(array) {
	return (array[2] * 256 + array[1]) * 256 + array[0];
}

function NumbertoRGB(number) {
	var array = [];
	array.push(number % 256);
	number = ~~(number / 256);
	array.push(number % 256);
	number = ~~(number / 256);
	array.push(number % 256);
	return array;
}

function RGBtoColorCSS(array) {
	return "rgb(" + array[0] + "," + array[1] + "," + array[2] + ")";
}
