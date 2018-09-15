var tutorialClickable = null;
var currentlyHovered = null;
var clickerFreeID = 1;
var clicker = {
	click: function (x, y) {
		if (dynamicData.popupActive) {
			if (x >= 350 && y >= 650 && x <= 450 && y <= 690) {
				lore.disablePopup();
				highlight.active = false;
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
			if (oClicker && oClicker.clicked) {
				oClicker.clicked();
			}
		}
		clicker.hover(x, y);
	},
	hover: function (x, y) {
		if (dynamicData.popupActive) {
			if (x >= 350 && y >= 650 && x <= 450 && y <= 690) {
				highlight.x1 = 350;
				highlight.x2 = 450;
				highlight.y1 = 650;
				highlight.y2 = 690;
				highlight.active = true;
			}
			else {
				highlight.active = false;
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
		if (!currentlyHovered && clickerTab.canvas) {
			var oClicker = clickerTab.hexTranslator[RGBtoNumber(clickerTab.canvas.getContext('2d').getImageData(x, y, 1, 1).data)];
			if (oClicker) {
				if (oClicker.hovered) {
					oClicker.hovered();
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
			specialClick: function (x, y) {
				if ((x - 100) * (x - 100) + (y - 80) * (y - 80) < 400) {
					if (dynamicData.skillTree.currentBranch) {
						dynamicData.skillTree.locked = !dynamicData.skillTree.locked;
						skillTree.processNodes();
					}
				}

				var clickedSkill = false;
				var offcenterradius = (x - 400) * (x - 400) + (y - 400) * (y - 400);
				if (offcenterradius < 122500) {
					var clickPositionX = x - 400;
					var clickPositionY = y - 400;
					clickPositionX /= tempData.skillTreeZoom;
					clickPositionY /= tempData.skillTreeZoom;
					for (var nodeID in skillTree.nodes) {
						var node = dynamicData.skillTree.nodes[nodeID];
						var nodePositionX = node.data.x + tempData.skillTreeScrollX;
						var nodePositionY = node.data.y + tempData.skillTreeScrollY;
						//nodePositionX *= tempData.skillTreeZoom;
						//nodePositionY *= tempData.skillTreeZoom;
						if ((clickPositionX - nodePositionX) * (clickPositionX - nodePositionX) + (clickPositionY - nodePositionY) * (clickPositionY - nodePositionY) < 625) {
							skillTree.clickNode(nodeID);
							clickedSkill = true;
						}
					}
					if (!clickedSkill) {
						tempData.skillTreeZoomActive = !tempData.skillTreeZoomActive;
					}
				}
			},
			specialHover: function (x, y) {
				if ((x - 700) * (x - 700) + (y - 80) * (y - 80) < 400) {
					tempData.skillTreeZoomSpeed = 1.01;
				}
				else if ((x - 700) * (x - 700) + (y - 130) * (y - 130) < 400) {
					tempData.skillTreeZoomSpeed = 0.99;
				}
				else {
					tempData.skillTreeZoomSpeed = 1;
				}
				dynamicData.skillTree.hoveredNode = null;
				var offcenterradius = (x - 400) * (x - 400) + (y - 400) * (y - 400);
				if ((x - 100) * (x - 100) + (y - 80) * (y - 80) < 400) {
					dynamicData.skillTree.hoveredNode = "lock";
				}
				else if (offcenterradius < 122500) {
					if (offcenterradius > 62500 && tempData.skillTreeZoomActive) {
						var length = Math.sqrt(offcenterradius);
						tempData.skillTreeScrollSpeedX = -(x - 400) / length * 6;
						tempData.skillTreeScrollSpeedY = -(y - 400) / length * 6;

					}
					else {
						tempData.skillTreeScrollSpeedX = 0;
						tempData.skillTreeScrollSpeedY = 0;

						var hoverPositionX = x - 400;
						var hoverPositionY = y - 400;
						hoverPositionX /= tempData.skillTreeZoom;
						hoverPositionY /= tempData.skillTreeZoom;
						for (var nodeID in skillTree.nodes) {
							var node = dynamicData.skillTree.nodes[nodeID];
							var nodePositionX = node.data.x + tempData.skillTreeScrollX;
							var nodePositionY = node.data.y + tempData.skillTreeScrollY;

							if ((hoverPositionX - nodePositionX) * (hoverPositionX - nodePositionX) + (hoverPositionY - nodePositionY) * (hoverPositionY - nodePositionY) < 625) {
								dynamicData.skillTree.hoveredNode = nodeID;
							}
						}
					}
				}
				else {
					tempData.skillTreeScrollSpeedX = 0;
					tempData.skillTreeScrollSpeedY = 0;
				}
			}
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
