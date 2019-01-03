var canvas = document.getElementById("canvasMain");

var ctxActive = canvas.getContext("2d");

ctxActive.font = "14px Arial";
ctxActive.textBaseline = "middle";
ctxActive.textAlign = "left";
ctxActive.lineWidth = 0.3;

var fluidData = ctxActive.createImageData(600, 600);
var backgroundData;

var fps = 0;

function draw() {
	ctxActive.save();

	ctxActive.clearRect(0, 0, 800, 800);

	ctxActive.fillStyle = "#FFFFFF";
	ctxActive.fillText("FPS: " + Math.round(fps), 4, 10);
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

}
