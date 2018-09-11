var tutorialClickable = null;

function click(x, y) {
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
	if (tempData.activeTab == 1) {
		for (var golem in dynamicData.golems) {
			if (dynamicData.golems[golem] === 0) continue;
			var oG = staticData.golems[golem];
			if (oG.combine) {
				if ((x - oG.x - 400) * (x - oG.x - 400) + (y - oG.y - 400) * (y - oG.y - 400) < 1600) {
					if (tempData.mergingGolems[0] === golem) {
						tempData.mergingGolems = tempData.mergingGolems.splice(1);
					}
					else if (tempData.mergingGolems[1] === golem) {
						tempData.mergingGolems.splice(1);
					}
					else if (tempData.mergingGolems.length < 2) {
						tempData.mergingGolems.push(golem);
					}
				}
			}
		}
	}
	else if (tempData.activeTab == 5) {
		if ((x - 100) * (x - 100) + (y - 80) * (y - 80) < 400) {
			dynamicData.skillTree.locked = !dynamicData.skillTree.locked;
			skillTree.processNodes();
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
	}
	for (var i = 0; i < dynamicData.clickableElements[tempData.activeTab].length; i++) {
		var oE = dynamicData.clickableElements[tempData.activeTab][i];
		if (oE.clicked && x >= oE.x1 && y >= oE.y1 && x <= oE.x2 && y <= oE.y2) {
			functionData[oE.clicked](oE, oE.arg1, oE.arg2);
			hover(x, y);
		}
	}
}
var currentlyHovered = null;

function hover(x, y) {
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
	if (tempData.activeTab == 1) {
		canvasTooltip = null;
		for (var golem in dynamicData.golems) {
			if (dynamicData.golems[golem] === 0) continue;
			var oG = staticData.golems[golem];
			if ((x - oG.x - 400) * (x - oG.x - 400) + (y - oG.y - 400) * (y - oG.y - 400) < 1600) {
				canvasTooltip = oG.tooltip;
			}
		}
	}
	else if (tempData.activeTab == 5) {
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
			if (offcenterradius > 62500) {
				if (tempData.skillTreeZoomActive) {
					var length = Math.sqrt(offcenterradius);
					tempData.skillTreeScrollSpeedX = -(x - 400) / length * 6;
					tempData.skillTreeScrollSpeedY = -(y - 400) / length * 6;
				}
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
	if (currentlyHovered) {
		if (x < currentlyHovered.x1 || y < currentlyHovered.y1 || x > currentlyHovered.x2 || y > currentlyHovered.y2) {
			if (currentlyHovered.unhovered) {
				functionData[currentlyHovered.unhovered](currentlyHovered, currentlyHovered.arg1, currentlyHovered.arg2);
			}
			currentlyHovered = null;
		}
	}
	var temp = false;
	for (var i = 0; i < dynamicData.clickableElements[tempData.activeTab].length; i++) {
		var oE = dynamicData.clickableElements[tempData.activeTab][i];
		if (x >= oE.x1 && y >= oE.y1 && x <= oE.x2 && y <= oE.y2) {
			if (oE.clicked) {
				if (oE.disableHighlight) {
					temp = !functionData[oE.disableHighlight](oE, oE.arg1, oE.arg2);
				}
				else {
					temp = true;
				}
				highlight.x1 = oE.x1;
				highlight.x2 = oE.x2;
				highlight.y1 = oE.y1;
				highlight.y2 = oE.y2;
			}
			if (oE.hovered) {
				currentlyHovered = oE;
				functionData[oE.hovered](oE, oE.arg1, oE.arg2);
			}
		}
	}
	highlight.active = temp;
}
