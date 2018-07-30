var tutorialClickable = null;
function click(x,y) {
	if(dynamicData.popupActive) {
		if(x >= 350 && y >= 650 && x <= 450 && y <= 690) {
			lore.disablePopup();
			highlight.active = false;
		}
		return;
	}
	if(cutsceneActive) {
		if(cutsceneActive.skipable && (x-100)*(x-100)+(y-100)*(y-100) < 45*45) {
			endCutscene();
		}
		return;
	}
	if(tempData.activeTab == 0 && dynamicData.nextStagePreview) {
		if((x-400)*(x-400)+(y-400)*(y-400) < 45*45) {
			startCutscene("preview");
		}
	}
	
	if(tempData.activeTab == 1 && dynamicData.mergingButton) {
		for(var i=0;i<dynamicData.golems.length;i++) {
			var oG = staticData.golems[dynamicData.golems[i]];
			if(oG.combine) {
				if((x-oG.x-400)*(x-oG.x-400)+(y-oG.y-400)*(y-oG.y-400) < 1600) {
					if(tempData.mergingGolems[0] === dynamicData.golems[i]) {
						tempData.mergingGolems = tempData.mergingGolems.splice(1);
					} else if(tempData.mergingGolems[1] === dynamicData.golems[i]) {
						tempData.mergingGolems.splice(1);
					} else if(tempData.mergingGolems.length < 2 && tempData.mergingGolems[1] !== dynamicData.golems[i]) {
						tempData.mergingGolems.push(dynamicData.golems[i]);
					}
				}
			}
		}
	}
	for(var i=0;i<dynamicData.clickableElements[tempData.activeTab].length;i++) {
		var oE = dynamicData.clickableElements[tempData.activeTab][i];
		if(oE.clicked && x >= oE.x1 && y >= oE.y1 && x <= oE.x2 && y <= oE.y2) {
			functionData[oE.clicked](oE,oE.arg1,oE.arg2);
			hover(x,y);
		}
	}
}
var currentlyHovered = null;
function hover(x,y) {
	if(dynamicData.popupActive) {
		if(x >= 350 && y >= 650 && x <= 450 && y <= 690) {
			highlight.x1 = 350;
			highlight.x2 = 450;
			highlight.y1 = 650;
			highlight.y2 = 690;
			highlight.active = true;
		} else {
			highlight.active = false;
		}
		return;
	}
	if(cutsceneActive) {
		return;
	}
		
	if(tempData.activeTab == 1) {
		canvasTooltip = null;
		for(var i=0;i<dynamicData.golems.length;i++) {
			var oG = staticData.golems[dynamicData.golems[i]];
			if((x-oG.x-400)*(x-oG.x-400)+(y-oG.y-400)*(y-oG.y-400) < 1600) {
				canvasTooltip = oG.tooltip;
			}
		}
	}
	if(currentlyHovered) {
		if(x < currentlyHovered.x1 || y < currentlyHovered.y1 || x > currentlyHovered.x2 || y > currentlyHovered.y2) {
			if(currentlyHovered.unhovered) {
				functionData[currentlyHovered.unhovered](currentlyHovered,currentlyHovered.arg1,currentlyHovered.arg2);
			}
			currentlyHovered = null;
		}
	}
	var temp = false;
	for(var i=0;i<dynamicData.clickableElements[tempData.activeTab].length;i++) {
		var oE = dynamicData.clickableElements[tempData.activeTab][i];
		if(x >= oE.x1 && y >= oE.y1 && x <= oE.x2 && y <= oE.y2) {
			if(oE.clicked) {
				if(oE.disableHighlight) {
					temp = !functionData[oE.disableHighlight](oE,oE.arg1,oE.arg2);
				} else {
					temp = true;
				}
				
				highlight.x1 = oE.x1;
				highlight.x2 = oE.x2;
				highlight.y1 = oE.y1;
				highlight.y2 = oE.y2;
			}
			if(oE.hovered) {
				currentlyHovered = oE;
				functionData[oE.hovered](oE,oE.arg1,oE.arg2);
			}
		}
	}
	highlight.active = temp;
}
