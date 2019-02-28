var nullCanvas = document.createElement('canvas');
var nullCtx = nullCanvas.getContext("2d");

var panes = {
	list: [],
	dragndrop: null,
	mouseHandler: function (event) {
		var x = event.offsetX;
		var y = event.offsetY;
		var type = event.type;
		if (event.type == "click" && x < 50 && y < 50) {
			panes.resetPositions();
		}
		if (event.type == "mousemove" && panes.dragndrop) {
			var top = panes.dragndrop.top;
			if (!top || top.checkBoundary(10 + top.x + panes.dragndrop.x + event.movementX, 10 + top.y + panes.dragndrop.y, "mousemove")) {
				panes.dragndrop.x += event.movementX;
			}
			if (!top || top.checkBoundary(10 + top.x + panes.dragndrop.x, 10 + top.y + panes.dragndrop.y + event.movementY, "mousemove")) {
				panes.dragndrop.y += event.movementY;
			}
			return;
		}
		if (event.type == "mouseup" && panes.dragndrop) {
			panes.dragndrop = null;
		}
		for (var i = 0; i < panes.list.length; i++) {
			var targetPane = panes.list[i].checkBoundary(x, y, type);
			if (targetPane) {
				if (type == "mousedown") {
					var temp = panes.list[i];
					while (i-- > 0) {
						panes.list[i + 1] = panes.list[i];
					}
					panes.list[0] = temp;
				}
				var temp = targetPane;
				while (temp) {
					x -= temp.x;
					y -= temp.y;
					temp = temp.top;
				}

				for (var j = 0; j < targetPane.subRegions.length; j++) {
					var targetRegion = targetPane.subRegions[j].checkBoundary(x, y, type);
					if (targetRegion) {
						targetRegion.action(targetPane, x, y, type);
					}
				}
				return;
			}
		}
	},
	resetPositions: function () {
		for (var i = 0; i < panes.list.length; i++) {
			panes.list[i].resetPosition();
		}
	},
}

function cPane(top, x, y) {
	this.x = x;
	this.defaultX = x;
	this.y = y;
	this.defaultY = y;
	this.boundaryPath = null;
	this.subPanes = [];
	this.subRegions = [];
	this.subPanesMin = [];
	this.subRegionsMin = [];

	this.top = top;
	if (top) {
		top.subPanes.push(this);
	}
	else {
		panes.list.push(this);
	}
}

cPane.prototype.checkBoundary = function (x, y, type) {
	x -= this.x;
	y -= this.y;
	if (!this.boundaryPath) {
		return false;
	}
	if (nullCtx.isPointInPath(this.boundaryPath, x, y)) {
		for (var i = 0; i < this.subPanes.length; i++) {
			var target = this.subPanes[i].checkBoundary(x, y, type);
			if (target) {
				if (type == "mousedown") {
					var temp = this.subPanes[i];
					while (i-- > 0) {
						this.subPanes[i + 1] = this.subPanes[i];
					}
					this.subPanes[0] = temp;
				}
				return target;
			}
		}
		return this;
	}
};

cPane.prototype.interact = function (x, y, type) {};

cPane.prototype.resetPosition = function () {
	if (this.switchedPath) {
		this.boundaryPath = this.switchedPath;
		this.switchedPath = null;
	}
	this.x = this.defaultX;
	this.y = this.defaultY;
	for (var i = 0; i < this.subPanes.length; i++) {
		this.subPanes[i].resetPosition();
	}
};

cPane.prototype.draw = function (ctx) {
	ctx.save();
	ctx.translate(this.x, this.y);
	if (this.boundaryPath) {

		ctx.stroke(this.boundaryPath);
		ctx.fill(this.boundaryPath);
		ctx.clip(this.boundaryPath);
		for (var i = this.subRegions.length - 1; i >= 0; i--) {
			this.subRegions[i].draw(ctx);
		}
		for (var i = this.subPanes.length - 1; i >= 0; i--) {
			this.subPanes[i].draw(ctx);
		}
	}
	ctx.restore();
};

function cRegion(x, y) {
	this.boundaryPath = null;
	this.x = x;
	this.y = y;
}

cRegion.prototype.checkBoundary = function (x, y) {
	x -= this.x;
	y -= this.y;
	if (!this.boundaryPath) {
		return false;
	}
	if (nullCtx.isPointInPath(this.boundaryPath, x, y)) {
		return this;
	}
};

cRegion.prototype.draw = function (ctx) {
	ctx.save();
	ctx.translate(this.x, this.y);
	if (this.boundaryPath) {
		ctx.stroke(this.boundaryPath);
		ctx.fill(this.boundaryPath);
		if (this.img) {
			ctx.drawImage(this.img, 0, 0);
		}
	}
	ctx.restore();
};

var dragRegion = new cRegion(0, 0);
var path = new Path2D();
path.rect(0, 0, 16, 16);
dragRegion.boundaryPath = path;
dragRegion.action = function (pane, x, y, type) {
	if (type == "mousedown") {
		panes.dragndrop = pane;
	}
}
var dragImg = new Image();
dragImg.onload = function () {
	dragRegion.img = dragImg;
}
dragImg.src = "img/iconDrag.png";

var hideRegion = new cRegion(32, 0);
hideRegion.boundaryPath = path;
hideRegion.action = function (pane, x, y, type) {
	if (type == "mouseup") {
		pane.switchedPath = pane.boundaryPath;
		pane.boundaryPath = null;
	}
}
var hideImg = new Image();
hideImg.onload = function () {
	hideRegion.img = hideImg;
}
hideImg.src = "img/iconHide.png";

var minRegion = new cRegion(16, 0);
minRegion.boundaryPath = path;
minRegion.action = function (pane, x, y, type) {
	if (type == "mouseup") {
		pane.subPanesMax = pane.subPanes;
		pane.subPanes = pane.subPanesMin;

		pane.subRegionsMax = pane.subRegions;
		pane.subRegions = pane.subRegionsMin;

		pane.boundaryPathMax = pane.boundaryPath;
		pane.boundaryPath = pane.boundaryPathMin;
	}
}
var minImg = new Image();
minImg.onload = function () {
	minRegion.img = minImg;
}
minImg.src = "img/iconMin.png";
var maxRegion = new cRegion(16, 0);
maxRegion.boundaryPath = path;
maxRegion.action = function (pane, x, y, type) {
	if (type == "mouseup") {
		pane.subPanesMin = pane.subPanes;
		pane.subPanes = pane.subPanesMax;

		pane.subRegionsMin = pane.subRegions;
		pane.subRegions = pane.subRegionsMax;

		pane.boundaryPathMin = pane.boundaryPath;
		pane.boundaryPath = pane.boundaryPathMax;
	}
}
var maxImg = new Image();
maxImg.onload = function () {
	maxRegion.img = maxImg;
}
maxImg.src = "img/iconMax.png";

var testPane = new cPane(null, 100, 300);
testPane.subRegions.push(dragRegion);
testPane.subRegions.push(minRegion);
testPane.subRegions.push(hideRegion);
testPane.subRegionsMin.push(dragRegion);
testPane.subRegionsMin.push(maxRegion);
path = new Path2D();
path.moveTo(0, 0);
path.lineTo(0, 300);
path.arc(0, 0, 300, Math.PI / 2, 0, true);
path.closePath();
testPane.boundaryPath = path;
path = new Path2D();
path.rect(0, 0, 100, 64);
testPane.boundaryPathMin = path;

var testPane2 = new cPane(null, 500, 300);
testPane2.subRegions.push(dragRegion);
testPane2.subRegions.push(minRegion);
testPane2.subRegions.push(hideRegion);
path = new Path2D();
path.rect(0, 0, 100, 200);
testPane2.boundaryPath = path;

var testPane3 = new cPane(testPane, 75, 25);
testPane3.subRegions.push(dragRegion);
path = new Path2D();
path.rect(0, 0, 150, 50);
testPane3.boundaryPath = path;

var testPane4 = new cPane(testPane, 25, 125);
testPane4.subRegions.push(dragRegion);
path = new Path2D();
path.rect(0, 0, 50, 150);
testPane4.boundaryPath = path;

var testPane5 = new cPane(testPane, 125, 125);
testPane5.subRegions.push(dragRegion);
path = new Path2D();
path.rect(0, 0, 75, 75);
testPane5.boundaryPath = path;
