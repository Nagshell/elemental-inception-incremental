var points = [];

var canvas = document.getElementById("canvasMain");
var ctx = canvas.getContext("2d");

var alpha = 0;
var explosionCD = 0;
var eX, eY;

function draw() {

	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgb(0,255,200)";
	ctx.fillStyle = "rgb(255,100,0)";
	ctx.font = "24px Arial";
	ctx.clearRect(0, 0, 1000, 1000);

	alpha += 1 / 50;
	if (alpha > 1)
		alpha = 1;

	ctx.beginPath();
	ctx.globalAlpha = 1 - alpha;
	for (var j = 1; j < points.length - 1; j++) {
		ctx.moveTo(points[0].x, points[0].y);
		ctx.lineTo(points[j].x, points[j].y);
	}
	ctx.stroke();

	ctx.beginPath();
	ctx.globalAlpha = 1;
	for (var i = 1; i < points.length; i++) {

		for (var j = i + 1; j < points.length - 1; j++) {
			ctx.moveTo(points[i].x, points[i].y);
			ctx.lineTo(points[j].x, points[j].y);
		}
	}
	ctx.stroke();

	ctx.beginPath();
	ctx.globalAlpha = alpha;
	for (var i = 1; i < points.length; i++) {
		ctx.moveTo(points[i].x, points[i].y);
		ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
	}
	ctx.stroke();

	if (explosionCD <= 0 && Math.random() < 1.03) {
		explosionCD = 240;
		eX = Math.random() * 600 + 50;
		eY = Math.random() * 600 + 50;
	}
	if (explosionCD > 0) {
		ctx.globalAlpha = (120 - Math.abs(explosionCD - 120)) / 120;
		ctx.fillText("*explosion*", eX, eY);
		explosionCD--;
	}
}

draw();

function autoPoints() {
	var newX = Math.random() * 700 + 50;
	var newY = Math.random() * 700 + 50;

	points.push({
		x: newX,
		y: newY,
	});

	if (points.length > 6) {
		points.shift();
	}
	alpha = 0;
}
setInterval(autoPoints, 1000);
autoPoints();
autoPoints();

function drawLoop(timestamp) {
	draw();
	requestAnimationFrame(drawLoop);
}
requestAnimationFrame(drawLoop);
