function canvasClick(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = event.clientX - canvasBox.left-1;
	var y = event.clientY - canvasBox.top-1;
	click(x,y);
}

function canvasHover(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = event.clientX - canvasBox.left-1;
	var y = event.clientY - canvasBox.top-1;
	hover(x,y);
}

var canvas = document.getElementById("canvasMain");
canvas.addEventListener("mousemove", canvasHover);
canvas.addEventListener("click", canvasClick);
var ctxActive = canvas.getContext("2d");

function draw() {
	ctxActive.resetTransform();
	ctxActive.clearRect(0, 0, 800, 800);
	
	ctxActive.font = "14px Arial";
	ctxActive.textBaseline = "middle";
	ctxActive.strokeStyle = "#686868";
	ctxActive.lineWidth = 3;
	ctxActive.fillStyle = "#181818";
	
	
	for(var i=0;i<data.elements.length;i++) {
		ctxActive.save();
		
		ctxActive.beginPath();
		ctxActive.arc(data.elemTankCoords[i][0],data.elemTankCoords[i][1],50,0,Math.PI*2);
		ctxActive.fill();
		ctxActive.stroke();
	
	
		ctxActive.fillStyle = "#FFFFFF";
		
		drawNumber(data.elements[i],data.elemTankCoords[i][0],data.elemTankCoords[i][1]);
		
		ctxActive.restore();
	}
}

function drawNumber(num,x,y) {
	ctxActive.save();
	ctxActive.textAlign="center";
	
	ctxActive.fillText(Math.trunc(num*100)/100,x,y);
	
	ctxActive.restore();
}
