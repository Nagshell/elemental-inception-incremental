var tutorialClickable = null;
var currentlyHovered = null;
var clickerFreeID = 1;
var clicker = {
	click: function (x, y) {
		if (tempData.keyflags.count > 0) return;
		if (dynamicData.popupActive) {
			if (x >= 350 && y >= 650 && x <= 450 && y <= 690) {
				lore.disablePopup();
			}
			return;
		}
		if (cutsceneActive) {
			if (cutsceneActive.skipable && (x - 100) * (x - 100) + (y - 100) * (y - 100) < 45 * 45) {
				endCutscene();
			}
			return;
		}
		var clickerTab = clicker.tabs[tempData.activeTab];
		if (clickerTab.specialClick(x, y)) {
			return;
		}
		if (clickerTab.canvas) {
			var oClicker = clickerTab.hexTranslator[RGBtoNumber(clickerTab.canvas.getContext('2d').getImageData(x, y, 1, 1).data)];
			if (oClicker && oClicker.clicked && (!oClicker.disable || !oClicker.disable())) {
				oClicker.clicked(x, y);
			}
		}
		clicker.hover(x, y);
	},
	hover: function (x, y) {
		if (tempData.keyflags.count > 0) return;
		if (dynamicData.popupActive) {
			if (x >= 350 && y >= 650 && x <= 450 && y <= 690) {
				currentlyHovered = dynamicData.popupActive.clicker;
			}
			else {
				currentlyHovered = false;
			}
			return;
		}
		if (cutsceneActive) {
			return;
		}
		var clickerTab = clicker.tabs[tempData.activeTab];
		if (clickerTab.specialHover(x, y)) {
			return;
		}
		if (currentlyHovered) {
			var oClicker = clickerTab.hexTranslator[RGBtoNumber(clickerTab.canvas.getContext('2d').getImageData(x, y, 1, 1).data)];
			if (oClicker !== currentlyHovered) {
				if (currentlyHovered.unhovered) {
					currentlyHovered.unhovered();
				}
				currentlyHovered = null;
			}
		}
		if (clickerTab.canvas) {
			var oClicker = clickerTab.hexTranslator[RGBtoNumber(clickerTab.canvas.getContext('2d').getImageData(x, y, 1, 1).data)];
			if (oClicker && (!oClicker.disable || !oClicker.disable())) {
				if (oClicker.hovered) {
					oClicker.hovered(x, y);
					currentlyHovered = oClicker;
				}
				else if (oClicker.clicked) {
					currentlyHovered = oClicker;
				}
			}
		}
	},
	tabs: [{ //Machine setup
			canvas: null,
			hexTranslator: [null],
			specialClick: function (x, y) {},
			specialHover: function (x, y) {}
		},
		{ //Golems
			canvas: null,
			hexTranslator: [null],
			specialClick: function (x, y) {},
			specialHover: function (x, y) {}
		},
		{ //Lore
			canvas: null,
			hexTranslator: [null],
			specialClick: function (x, y) {},
			specialHover: function (x, y) {}
		},
		{ //Chievos
			canvas: null,
			hexTranslator: [null],
			specialClick: function (x, y) {},
			specialHover: function (x, y) {}
		},
		{ //Options
			canvas: null,
			hexTranslator: [null],
			specialClick: function (x, y) {},
			specialHover: function (x, y) {}
		},
		{ //Tree
			canvas: null,
			hexTranslator: [null],
			specialClick: function (x, y) {},
			specialHover: function (x, y) {}
		},
		{ //Donation Box
			canvas: null,
			hexTranslator: [null],
			specialClick: function (x, y) {},
			specialHover: function (x, y) {}
		},
		{ //
			canvas: null,
			hexTranslator: [null],
			specialClick: function (x, y) {},
			specialHover: function (x, y) {}
		},
		{ //
			canvas: null,
			hexTranslator: [null],
			specialClick: function (x, y) {},
			specialHover: function (x, y) {}
		}
	],
	addingCanvas: null,
	addClicker: function (oClicker, tab) {
		clicker.tabs[tab].hexTranslator[clickerFreeID] = oClicker;

		var ctxFilter = clicker.addingCanvas.getContext('2d');
		ctxFilter.clearRect(0, 0, 800, 800);
		var colorArray = NumbertoRGB(clickerFreeID++);
		ctxFilter.fillStyle = RGBtoColorCSS(colorArray);

		ctxFilter.beginPath();
		oClicker.path(ctxFilter);
		ctxFilter.fill();

		var ctxDestination = clicker.tabs[tab].canvas.getContext('2d');
		var destinationImageData = ctxDestination.getImageData(oClicker.bounds.x, oClicker.bounds.y, oClicker.bounds.w, oClicker.bounds.h);
		var destinationData = destinationImageData.data;
		var filterData = ctxFilter.getImageData(oClicker.bounds.x, oClicker.bounds.y, oClicker.bounds.w, oClicker.bounds.h).data;

		for (var i = 0; i < filterData.length; i += 4) {
			if (filterData[i + 3] > 0) {
				destinationData[i + 0] = colorArray[0];
				destinationData[i + 1] = colorArray[1];
				destinationData[i + 2] = colorArray[2];
				destinationData[i + 3] = 255;
			}
		}

		ctxDestination.putImageData(destinationImageData, oClicker.bounds.x, oClicker.bounds.y);
	},
	resetTab: function (tab) {
		tab = clicker.tabs[tab];
		tab.canvas.getContext('2d').clearRect(0, 0, 800, 800);
		tab.hexTranslator = [null];
	}
}

function preprocessClicker() {
	clicker.addingCanvas = document.createElement('canvas');
	clicker.addingCanvas.width = 800;
	clicker.addingCanvas.height = 800;
	for (var i = 0; i < clicker.tabs.length; i++) {
		clicker.tabs[i].canvas = document.createElement('canvas');
		clicker.tabs[i].canvas.width = 800;
		clicker.tabs[i].canvas.height = 800;
	}
}
preprocessClicker();
