var nullCanvas = document.createElement('canvas');
var nullCtx = nullCanvas.getContext("2d");

var dragged = null;
var hoverX,hoverY;
var windowsList = [];
function windowInteract(x,y,type) {
	if(dragged && type=="hover") {
		dragged.x+=x-hoverX;
		dragged.y+=y-hoverY;
		hoverX = x;
		hoverY = y;
	}
	if(dragged && type=="mouseup") {
		dragged = null;
	}
	for(var i=0;i<windowsList.length;i++) {
		if(windowsList[i].checkBoundary(x,y,type)) {
			return;
		}
	}
}

function cWindow() {
	this.x = 0;
	this.y = 0;
	this.boundaryPath = null;
}



cWindow.prototype.checkBoundary = function(x,y,type) {
	if(!this.boundaryPath) {
		return false;
	}
	if(nullCtx.isPointInPath(this.boundaryPath, x-this.x, y-this.y)) {
		if(type=="mousedown") {
			dragged = this;
			hoverX = x;
			hoverY = y;
		}
		this.interact(x-this.x,y-this.y,type);
		return true;
	}
};
cWindow.prototype.interact = function(x,y,type) {
};

var testWindow = new cWindow();
windowsList.push(testWindow);
var testWindow2 = new cWindow();
windowsList.push(testWindow2);

var path = new Path2D();
path.rect(0,0,200,200);
testWindow.boundaryPath = path;
testWindow.x=100;
testWindow.y=300;

var path = new Path2D();
path.rect(0,0,100,200);
testWindow2.boundaryPath = path;
testWindow2.x=300;
testWindow2.y=300;



