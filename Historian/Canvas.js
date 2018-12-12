function canvasClick(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = (event.clientX - canvasBox.left - 1) * 800 / canvasBox.width;
	var y = (event.clientY - canvasBox.top - 1) * 800 / canvasBox.height;
	clicker.click(x, y);
}

function canvasHover(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = (event.clientX - canvasBox.left - 1) * 800 / canvasBox.width;
	var y = (event.clientY - canvasBox.top - 1) * 800 / canvasBox.height;
	clicker.hover(x, y);
}

var keySpeed = 7;

function canvasKeydown(event) {
	if (tempData.activeTab != 5) return;
	if (tempData.keyflags[event.code]) return;
	switch (event.code) {
		case "KeyW":
			tempData.skillTreeScrollSpeedY += keySpeed;
			break;
		case "KeyS":
			tempData.skillTreeScrollSpeedY -= keySpeed;
			break;
		case "KeyA":
			tempData.skillTreeScrollSpeedX += keySpeed;
			break;
		case "KeyD":
			tempData.skillTreeScrollSpeedX -= keySpeed;
			break;
		default:
			break;
	}
	tempData.keyflags[event.code] = true;
	tempData.keyflags.count++;
}

function canvasKeyup(event) {
	if (tempData.activeTab != 5) return;
	if (!tempData.keyflags[event.code]) return;
	switch (event.code) {
		case "KeyW":
			tempData.skillTreeScrollSpeedY -= keySpeed;
			break;
		case "KeyS":
			tempData.skillTreeScrollSpeedY += keySpeed;
			break;
		case "KeyA":
			tempData.skillTreeScrollSpeedX -= keySpeed;
			break;
		case "KeyD":
			tempData.skillTreeScrollSpeedX += keySpeed;
			break;
		default:
			break;
	}
	tempData.keyflags[event.code] = false;
	tempData.keyflags.count--;
}

var elementalTranlator = {
	"Earth": 0,
	"Water": 1,
	"Air": 2,
	"Fire": 3
}
var floatingCanvas = [
	[null, null],
	[null, null],
	[null, null],
	[null, null],
	[null, null],
	[null, null, null],
	[null, null],
	[null, null],
	[null, null],
	[null, null],
	[null, null],
	[null, null],
	[null, null]
];
var visibleOverlay = null;
var canvas = document.getElementById("canvasMain");
canvas.addEventListener("mousemove", canvasHover);
canvas.addEventListener("click", canvasClick);
document.addEventListener("keydown", canvasKeydown);
document.addEventListener("keyup", canvasKeyup);
var ctxActive = canvas.getContext("2d");
var canvasTooltip = null;
var redraw = [true, true, true, true, true, true, true, true, true, true, true];

function redrawFloating(tab) {
	redraw[tab] = false;
	for (var i = 0; i < floatingCanvas[tab].length; i++) {
		if (floatingCanvas[tab][i] === null) {
			floatingCanvas[tab][i] = document.createElement("canvas");
			if (i > 1) {
				floatingCanvas[tab][i].width = 2000;
				floatingCanvas[tab][i].height = 2000;
			}
			else {
				floatingCanvas[tab][i].width = 800;
				floatingCanvas[tab][i].height = 800;
			}

		}
		floatingCanvas[tab][i].getContext('2d').clearRect(0, 0, 800, 800);
	}
	var ctxBack = floatingCanvas[tab][0].getContext('2d');
	drawingTabs[tab].background(ctxBack);
	var ctxFront = floatingCanvas[tab][1].getContext('2d');
	drawingTabs[tab].foreground(ctxFront);
}

function draw() {
	ctxActive.setTransform(1, 0, 0, 1, 0, 0);
	ctxActive.clearRect(0, 0, 800, 800);
	ctxActive.font = "14px Arial";
	ctxActive.textBaseline = "middle";
	ctxActive.strokeStyle = staticData.borderColor;
	ctxActive.lineWidth = 3;
	ctxActive.fillStyle = "#181818";
	drawTabs(ctxActive);
	if (redraw[tempData.activeTab]) {
		redrawFloating(tempData.activeTab);
	}
	ctxActive.drawImage(floatingCanvas[tempData.activeTab][0], 0, 0);
	ctxActive.save();
	drawingTabs[tempData.activeTab].active(ctxActive);
	ctxActive.restore();
	ctxActive.save();
	if (canvasTooltip) {
		drawTooltip(ctxActive);
	}
	ctxActive.restore();
	ctxActive.drawImage(floatingCanvas[tempData.activeTab][1], 0, 0);
	if (visibleOverlay) {
		drawOverlay(ctxActive);
	}
	if (dynamicData.popupActive) {
		drawPopup(ctxActive);
	}
	if (currentlyHovered && currentlyHovered.clicked) {
		if (!currentlyHovered.disableHighlight || !currentlyHovered.disableHighlight()) {
			ctxActive.save();
			ctxActive.fillStyle = "rgba(255,255,255,0.06)";
			ctxActive.strokeStyle = "rgba(255,255,255,0.6)";
			ctxActive.beginPath();
			currentlyHovered.path(ctxActive);
			ctxActive.fill();
			ctxActive.stroke();
			ctxActive.restore();
		}
	}
	if (clicker.tabs[tempData.activeTab].canvas) {
		//ctxActive.drawImage(clicker.tabs[tempData.activeTab].canvas, 0, 0);
	}
}

var drawingTabs = [{ //Main setup
		background: function (ctx) {
			ctx.font = "14px Arial";
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.strokeStyle = staticData.borderColor;
			ctx.lineWidth = 3;
			ctx.fillStyle = "#181818";
			var nUpgradesAmount = dynamicData.visibleUpgrades.length;
			if (nUpgradesAmount > 0) {
				ctx.beginPath();
				ctx.moveTo(0, 60);
				ctx.lineTo(90, 60);
				ctx.arc(90, 85, 25, -Math.PI / 2, 0);
				ctx.lineTo(115, 90 + 35 * nUpgradesAmount);
				ctx.lineTo(0, 90 + 35 * nUpgradesAmount);
				ctx.fill();
				ctx.moveTo(0, 85);
				ctx.lineTo(115, 85);
				ctx.stroke();
				ctx.save();
				ctx.fillStyle = staticData.textColor;
				ctx.fillText("Upgrades", 50, 72);
				ctx.restore();
				ctx.save();
				ctx.translate(3, 90);
				for (var i = 0; i < dynamicData.visibleUpgrades.length; i++) {
					var oUpgrade = staticData.upgrades[dynamicData.visibleUpgrades[i]];
					ctx.fillStyle = staticData.textColor;
					if (dynamicData.upgradesBought[dynamicData.visibleUpgrades[i]]) {
						if (oUpgrade.boughtName && oUpgrade.boughtName.length > 14) {
							ctx.font = "12px Arial";
						}
						else {
							ctx.font = "14px Arial";
						}
						ctx.fillText(oUpgrade.boughtName, 53, 15);
					}
					else {
						if (oUpgrade.name.length > 14) {
							ctx.font = "12px Arial";
						}
						else {
							ctx.font = "14px Arial";
						}
						ctx.fillText(oUpgrade.name, 53, 15);
					}
					ctx.translate(0, 35);
				}
				ctx.restore();
			}
			var oMachine;
			ctx.beginPath();
			ctx.moveTo(800, 60);
			ctx.lineTo(710, 60);
			ctx.arc(710, 85, 25, -Math.PI / 2, Math.PI, true);
			var borderY = 110 + 63 * 4;
			oMachine = dynamicData.utilityMachines[0];
			borderY += 63;
			oMachine = dynamicData.utilityMachines[1];
			borderY += 95;
			oMachine = dynamicData.utilityMachines[2];
			borderY += 95;
			ctx.lineTo(685, borderY);
			ctx.lineTo(800, borderY);
			ctx.fill();
			ctx.moveTo(800, 105);
			ctx.lineTo(685, 105);
			ctx.stroke();
			ctx.save();
			ctx.fillStyle = staticData.textColor;
			ctx.fillText("Valve", 745, 72);
			ctx.fillText("Controller", 745, 92);
			ctx.restore();
			ctx.save();
			var y = 110;
			oMachine = dynamicData.conversionMachines[0];
			this.draw2ValverBackground(ctx, 689, y, oMachine.name, 0, 1, 1);
			y += 63;
			oMachine = dynamicData.conversionMachines[1];
			this.draw2ValverBackground(ctx, 689, y, oMachine.name, 1, 3, 2);
			y += 63;
			oMachine = dynamicData.conversionMachines[2];
			this.draw2ValverBackground(ctx, 689, y, oMachine.name, 2, 3, 3);
			y += 63;
			oMachine = dynamicData.conversionMachines[3];
			this.draw2ValverBackground(ctx, 689, y, oMachine.name, 0, 3, 0);
			y += 63;
			oMachine = dynamicData.utilityMachines[0];

			this.draw2ValverBackground(ctx, 689, y, oMachine.name, 2, 3);
			y += 63;

			oMachine = dynamicData.utilityMachines[1];

			this.draw4ValverBackground(ctx, 689, y, oMachine.name);
			y += 95;

			oMachine = dynamicData.utilityMachines[2];

			this.draw4ValverBackground(ctx, 689, y, oMachine.name);
			y += 95;

			ctx.restore();
			ctx.translate(400, 400);
			ctx.fillRect(-280, -280, 560, 560);
			ctx.save();
			for (var i = 0; i < 4; i++) {
				ctx.rotate(Math.PI / 2);
				ctx.translate(-200, -200);
				this.drawElementalTankBackground(ctx, i);
				ctx.translate(200, 200);
			}
			ctx.restore();
			if (!dynamicData.skillTree.currentChallenge || !dynamicData.skillTree.currentChallenge.effects.cruiser) {
				if (dynamicData.utilityMachines[0].maxBoost > 0) {
					ctx.save();
					ctx.fillStyle = staticData.textColor;
					ctx.fillText("Catalyst", 238, 73);
					var gradient = ctx.createLinearGradient(200, 0, 276, 0);
					gradient.addColorStop(0, "#555555");
					gradient.addColorStop(0.6, "#559955");
					gradient.addColorStop(1, "#995555");
					ctx.fillStyle = gradient;
					ctx.fillRect(200, 100, 76, 17);
					ctx.restore();
				}
			}
			ctx.translate(-400, -400);
			ctx.fillRect(120, 700, 660, 80);
			ctx.strokeRect(120, 700, 660, 80);
			ctx.save();
			ctx.lineWidth = 2;
			ctx.fillRect(10, 700, 100, 30);
			ctx.strokeRect(10, 700, 100, 30);
			ctx.fillRect(10, 750, 100, 30);
			ctx.strokeRect(10, 750, 100, 30);
			ctx.fillStyle = staticData.textColor;
			ctx.fillText("FAQ", 60, 715);
			ctx.fillText("Donate", 60, 765);
			ctx.restore();
		},
		draw4ValverBackground: function (ctx, x, y, machineName) {
			ctx.strokeRect(x, y, 108, 90);
			ctx.fillStyle = staticData.textColor;
			ctx.fillText(machineName, x + 54, y + 11);
			ctx.fillStyle = staticData.elementalColor[3][0];
			ctx.fillRect(x + 3, y + 25, 30, 30);
			ctx.fillStyle = staticData.elementalColor[2][0];
			ctx.fillRect(x + 3, y + 57, 30, 30);
			ctx.fillStyle = staticData.elementalColor[0][0];
			ctx.fillRect(x + 55, y + 25, 30, 30);
			ctx.fillStyle = staticData.elementalColor[1][0];
			ctx.fillRect(x + 55, y + 57, 30, 30);
		},
		draw2ValverBackground: function (ctx, x, y, machineName, elementalIdLeft, elementalIdRight, elementalProductId) {
			if (elementalProductId > -1) {
				ctx.fillStyle = staticData.elementalColor[elementalProductId][3];
				ctx.fillRect(x, y, 108, 24);
			}
			ctx.strokeRect(x, y, 108, 58);
			ctx.fillStyle = staticData.textColor;
			ctx.fillText(machineName, x + 54, y + 11);
			ctx.fillStyle = staticData.elementalColor[elementalIdLeft][0];
			ctx.fillRect(x + 3, y + 25, 30, 30);
			ctx.fillStyle = staticData.elementalColor[elementalIdRight][0];
			ctx.fillRect(x + 55, y + 25, 30, 30);
		},
		drawElementalTankBackground: function (ctx, elementId) {
			ctx.save();
			ctx.lineWidth = 1;
			ctx.strokeStyle = "#222222";
			ctx.fillStyle = staticData.elementalColor[elementId][2];
			for (var i = dynamicData.stats.pipes.level; i > 0; i -= 1) {
				ctx.beginPath();
				ctx.arc(80, 0, 80 - i * 8, -Math.PI / 2, 0);
				ctx.arc(200 - i * 8, 0, 40, -Math.PI, Math.PI / 2, true);
				ctx.lineTo(200, 40);
				ctx.lineTo(200, 44);
				ctx.lineTo(200 - i * 8, 44);
				ctx.arc(200 - i * 8, 0, 44, Math.PI / 2, -Math.PI);
				ctx.arc(80, 0, 76 - i * 8, 0, -Math.PI / 2, true);
				ctx.lineTo(80, -80 + i * 8);
				ctx.stroke();
				ctx.fill();
			}
			ctx.restore();
			ctx.save();
			ctx.fillStyle = staticData.elementalColor[elementId][3];
			ctx.beginPath();
			ctx.arc(0, 0, 80, 0, Math.PI / 2);
			ctx.lineTo(-80, 80);
			ctx.lineTo(-80, -80);
			ctx.lineTo(80, -80);
			ctx.lineTo(80, 0);
			ctx.fill();
			ctx.restore();
		},
		foreground: function (ctx) {
			ctx.font = "14px Arial";
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.strokeStyle = staticData.borderColor;
			ctx.lineWidth = 1;
			ctx.fillStyle = "#181818";
			ctx.save();
			ctx.strokeStyle = "#242424";
			var y = 110;
			oMachine = dynamicData.conversionMachines[0];
			this.draw2ValverForeground(ctx, 689, y, 0, 1);
			y += 63;
			oMachine = dynamicData.conversionMachines[1];
			this.draw2ValverForeground(ctx, 689, y, 1, 3);
			y += 63;
			oMachine = dynamicData.conversionMachines[2];
			this.draw2ValverForeground(ctx, 689, y, 2, 3);
			y += 63;
			oMachine = dynamicData.conversionMachines[3];
			this.draw2ValverForeground(ctx, 689, y, 0, 3);
			y += 63;
			oMachine = dynamicData.utilityMachines[0];

			this.draw2ValverForeground(ctx, 689, y, 2, 3);
			y += 63;

			oMachine = dynamicData.utilityMachines[1];

			this.draw4ValverForeground(ctx, 689, y);
			y += 95;

			oMachine = dynamicData.utilityMachines[2];

			this.draw4ValverForeground(ctx, 689, y);
			y += 95;

			ctx.restore();
			ctx.translate(400, 400);
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.arc(0, 0, 18, 0, Math.PI * 2);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(0, 0, 45, 0, Math.PI * 2);
			ctx.stroke();
			if (dynamicData.utilityMachines[0].maxBoost > 0) {
				ctx.beginPath();
				ctx.arc(0, 0, 120, 0, Math.PI * 2);
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(0, 0, 126, 0, Math.PI * 2);
				ctx.stroke();
			}

			ctx.save();
			for (var i = 0; i < 4; i++) {
				ctx.rotate(Math.PI / 2);
				ctx.translate(-200, -200);
				this.drawElementalTankForeground(ctx);
				ctx.translate(200, 200);
			}
			ctx.restore();
			ctx.strokeRect(-280, -280, 560, 560);
			if (!dynamicData.skillTree.currentChallenge || !dynamicData.skillTree.currentChallenge.effects.cruiser) {
				if (dynamicData.utilityMachines[0].maxBoost > 0) {
					ctx.strokeRect(200, 85, 76, 15);
					ctx.strokeRect(200, 60, 76, 57);
				}
			}
			ctx.translate(-400, -400);
		},
		draw4ValverForeground: function (ctx, x, y) {
			this.drawSingleValveForeground(ctx, x + 3, y + 25, 3);
			this.drawSingleValveForeground(ctx, x + 3, y + 57, 2);
			this.drawSingleValveForeground(ctx, x + 55, y + 25, 0);
			this.drawSingleValveForeground(ctx, x + 55, y + 57, 1);
		},
		draw2ValverForeground: function (ctx, x, y, elementalIdLeft, elementalIdRight) {
			this.drawSingleValveForeground(ctx, x + 3, y + 25, elementalIdLeft);
			this.drawSingleValveForeground(ctx, x + 55, y + 25, elementalIdRight);
		},
		drawSingleValveForeground: function (ctx, x, y, elementalId) {
			ctx.save();
			ctx.translate(x + 15, y + 15);
			ctx.beginPath();
			ctx.arc(0, 0, 10, 0, 2 * Math.PI);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(0, 0, 7, 0, 2 * Math.PI);
			ctx.stroke();
			for (var i = 0; i < 12; i++) {
				ctx.rotate(Math.PI / 6);
				ctx.beginPath();
				ctx.moveTo(7, 0);
				ctx.lineTo(10, 0);
				ctx.stroke();
			}
			ctx.strokeStyle = staticData.elementalColor[elementalId][1];
			ctx.strokeRect(-15, -15, 50, 30);
			ctx.beginPath();
			ctx.moveTo(15, -15);
			ctx.lineTo(15, 15);
			ctx.stroke();
			ctx.restore();
		},
		drawElementalTankForeground: function (ctx) {
			ctx.beginPath();
			ctx.arc(0, 0, 80, 0, Math.PI / 2);
			ctx.lineTo(-80, 80);
			ctx.lineTo(-80, -80);
			ctx.lineTo(80, -80);
			ctx.lineTo(80, 0);
			ctx.stroke();
		},
		active: function (ctx) {
			ctx.font = "14px Arial";
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.strokeStyle = staticData.borderColor;
			ctx.lineWidth = 2;
			ctx.fillStyle = "#181818";
			this.drawSidebarsActive(ctx);
			this.drawFillRatiosActive(ctx);
			ctx.translate(400, 400);
			this.drawMainSetupActive(ctx);
			this.drawTankNumbers(ctx);
			ctx.translate(-400, -400);
			ctx.save();
			ctx.fillStyle = "#080808";
			ctx.beginPath();
			ctx.rect(130, 710, 640, 60);
			ctx.fill();
			ctx.clip();
			if (tempData.currentBanner) {
				ctx.fillStyle = staticData.textColor;
				ctx.textAlign = "left";
				ctx.font = "16px Arial";
				ctx.fillText(tempData.currentBanner.text, tempData.currentBannerPosition, 740);
				lore.bannerScroll(ctx);
			}
			else {
				if (tempData.ticksWithoutBanner++ > 24000) {
					lore.idleBanner();
					tempData.ticksWithoutBanner = 0;
				}
			}
			ctx.restore();
		},
		drawSidebarsActive: function (ctx) {
			ctx.save();
			ctx.translate(3, 90);
			for (var i = 0; i < dynamicData.visibleUpgrades.length; i++) {
				var oUpgrade = staticData.upgrades[dynamicData.visibleUpgrades[i]];
				if (dynamicData.upgradesBought[dynamicData.visibleUpgrades[i]]) {
					ctx.strokeStyle = "#B5A348";
				}
				else {
					var bAffordable = true;
					for (var j = 0; j < oUpgrade.costs.length; j++) {
						if (oUpgrade.costs[j].amount > dynamicData.elementalTanks[oUpgrade.costs[j].type].amount) {
							bAffordable = false;
						}
					}
					if (bAffordable) {
						ctx.strokeStyle = "#337733";
					}
					else {
						ctx.strokeStyle = "#773333";
					}
				}
				ctx.strokeRect(0, 0, 107, 30);
				ctx.translate(0, 35);
			}
			ctx.restore();
			var oMachine;
			var y = 110;
			oMachine = dynamicData.conversionMachines[0];
			this.draw2ValverActive(ctx, 689, y, 0, oMachine.ingredient.valve, 1, oMachine.reagent.valve);
			y += 63;
			oMachine = dynamicData.conversionMachines[1];
			this.draw2ValverActive(ctx, 689, y, 1, oMachine.ingredient.valve, 3, oMachine.reagent.valve);
			y += 63;
			oMachine = dynamicData.conversionMachines[2];
			this.draw2ValverActive(ctx, 689, y, 2, oMachine.ingredient.valve, 3, oMachine.reagent.valve);
			y += 63;
			oMachine = dynamicData.conversionMachines[3];
			this.draw2ValverActive(ctx, 689, y, 0, oMachine.ingredient.valve, 3, oMachine.reagent.valve);
			y += 63;
			oMachine = dynamicData.utilityMachines[0];

			this.draw2ValverActive(ctx, 689, y, 2, oMachine.tanks[0].valve, 3, oMachine.tanks[1].valve);
			y += 63;

			oMachine = dynamicData.utilityMachines[1];

			this.draw4ValverActive(ctx, 689, y, oMachine.tanks[3].valve, oMachine.tanks[2].valve, oMachine.tanks[0].valve, oMachine.tanks[1].valve);
			y += 95;

			oMachine = dynamicData.utilityMachines[2];

			this.draw4ValverActive(ctx, 689, y, oMachine.tanks[3].valve, oMachine.tanks[2].valve, oMachine.tanks[0].valve, oMachine.tanks[1].valve);
			y += 95;

		},
		draw4ValverActive: function (ctx, x, y, valve0, valve1, valve2, valve3) {
			this.drawSingleValveActive(ctx, x + 3, y + 25, 3, valve0);
			this.drawSingleValveActive(ctx, x + 3, y + 57, 2, valve1);
			this.drawSingleValveActive(ctx, x + 55, y + 25, 0, valve2);
			this.drawSingleValveActive(ctx, x + 55, y + 57, 1, valve3);
		},
		draw2ValverActive: function (ctx, x, y, elementalIdLeft, leftValveStatus, elementalIdRight, rightValveStatus) {
			this.drawSingleValveActive(ctx, x + 3, y + 25, elementalIdLeft, leftValveStatus);
			this.drawSingleValveActive(ctx, x + 55, y + 25, elementalIdRight, rightValveStatus);
		},
		drawSingleValveActive: function (ctx, x, y, elementalId, valveStatus) {
			ctx.save();
			ctx.translate(x + 15, y + 15);
			if (valveStatus) {
				if (dynamicSaveData.options.colorblindMode) ctx.fillStyle = "#777777";
				else ctx.fillStyle = "#337733";
			}
			else {
				if (dynamicSaveData.options.colorblindMode) ctx.fillStyle = "#333333";
				else ctx.fillStyle = "#773333";
			}
			ctx.beginPath();
			ctx.arc(0, 0, 7, 0, 2 * Math.PI);
			ctx.fill();
			ctx.restore();
		},
		drawMainSetupActive: function (ctx) {
			ctx.save();
			ctx.rotate(Math.PI * tempData.canvasTicks / 2000);
			var golemCount = 0;
			for (var golemID in dynamicData.golems) {
				if (dynamicData.golems[golemID]) {
					golemCount++;
				}
			}
			for (var golemID in dynamicData.golems) {
				if (!dynamicData.golems[golemID]) {
					continue;
				}
				ctx.rotate(Math.PI * 2 / golemCount);
				this.drawGolem(ctx, staticData.golems[golemID], 0, -28, 0.18);
			}
			ctx.restore();
			if (dynamicData.utilityMachines[0].maxBoost > 0) {
				ctx.save();
				var tempRota = Math.max(0, Math.min(dynamicData.utilityMachines[0].speed, 2 * dynamicData.utilityMachines[0].maxSpeed - dynamicData.utilityMachines[0].speed));
				tempData.catalystRota += Math.PI / 40 * Math.pow(tempRota, 1.2);
				ctx.rotate(tempData.catalystRota);
				ctx.lineWidth = 4;
				ctx.beginPath();
				ctx.strokeStyle = "#881111";
				ctx.arc(0, 0, 123, 0, Math.PI);
				ctx.stroke();
				ctx.beginPath();
				ctx.fillStyle = "rgba(150,20,20,0.025)";
				ctx.arc(0, 0, 119, 0, Math.PI);
				ctx.arc(0, 0, 46, Math.PI, 0, true);
				ctx.fill();
				ctx.rotate(Math.PI);
				ctx.beginPath();
				ctx.strokeStyle = "#555511";
				ctx.arc(0, 0, 123, 0, Math.PI);
				ctx.stroke();
				ctx.beginPath();
				ctx.fillStyle = "rgba(150,150,20,0.015)";
				ctx.arc(0, 0, 119, 0, Math.PI);
				ctx.arc(0, 0, 46, Math.PI, 0, true);
				ctx.fill();
				ctx.restore();
			}
			ctx.save();
			tempData.machineRota += -Math.PI / 600 * dynamicData.stats.machineBonusSpeed * dynamicData.stats.machineGolemSpeed;
			ctx.rotate(tempData.machineRota);
			for (var i = 0; i < 4; i++) {
				var oCMachine = dynamicData.conversionMachines[i];
				var r1 = oCMachine.ingredient.amount / oCMachine.ingredient.drain;
				var r2 = oCMachine.reagent.amount / oCMachine.reagent.drain;
				var rMax = Math.max(r1, r2);
				r1 /= rMax;
				r2 /= rMax;
				r1 = 1 - (1 - r1) * (1 - r1);
				r2 = 1 - (1 - r2) * (1 - r2);
				r1 = Math.max(0, r1);
				r2 = Math.max(0, r2);
				ctx.rotate(Math.PI / 2);
				ctx.save();
				ctx.translate(80, 0);
				ctx.fillStyle = "#060606";
				ctx.beginPath();
				ctx.arc(0, 0, 31, 0, Math.PI * 2);
				ctx.fill();
				ctx.rotate(tempData.machineRota / 2);
				ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.ingredient.type]][1];
				ctx.beginPath();
				ctx.arc(0, 0, 30 * r1, 0, 2 * Math.PI);
				ctx.fill();
				ctx.strokeStyle = staticData.elementalColor[elementalTranlator[oCMachine.reagent.type]][1];
				ctx.lineWidth = 3;
				for (var j = 0; j < 4; j++) {
					ctx.beginPath();
					ctx.arc(-13, 0, 13, 0, -3 / 2 * Math.PI * r2, true);
					ctx.stroke();
					ctx.rotate(Math.PI / 2);
				}
				ctx.restore();
				ctx.beginPath();
				ctx.arc(80, 0, 31, 0, Math.PI * 2);
				ctx.stroke();
			}
			ctx.restore();
			ctx.save();
			ctx.lineWidth = 9;
			ctx.rotate(Math.PI * tempData.canvasTicks / 2000);
			var tump = 4;
			tump *= 4;
			for (var i = 0; i < tump; i++) {
				ctx.rotate(Math.PI * 2 / tump);
				ctx.strokeStyle = staticData.elementalColor[i % 4][1];
				ctx.beginPath();
				ctx.arc(0, 0, 158, 0, Math.PI * 2 / tump);
				ctx.stroke();
			}
			ctx.restore();
			ctx.beginPath();
			ctx.arc(0, 0, 153, 0, Math.PI * 2);
			ctx.moveTo(163, 0);
			ctx.arc(0, 0, 163, 0, Math.PI * 2, true);
			ctx.stroke();
			ctx.save();
			ctx.rotate(Math.PI * tempData.canvasTicks / 350);
			if (dynamicData.utilityMachines[0].maxBoost > 0) {
				var oUMachine = dynamicData.utilityMachines[0];
				var r1 = Math.log10(1 + oUMachine.tanks[0].amount);
				while (r1 > 5) {
					r1 -= 5;
				}
				r1 /= 5;
				var r2 = Math.log10(1 + oUMachine.tanks[1].amount)
				while (r2 > 3) {
					r2 -= 3;
				}
				r2 /= 3;
				ctx.save();
				ctx.translate(131, 0);
				ctx.beginPath();
				ctx.arc(0, 0, 32, Math.PI / 2, -Math.PI / 2, true);
				ctx.fill();
				ctx.lineWidth = 1;
				ctx.fillStyle = staticData.elementalColor[2][1];
				ctx.beginPath();
				ctx.moveTo(0, -32);
				ctx.arc(-131, 0, 127, -Math.PI / 9, 0);
				ctx.lineTo(0, 0);
				ctx.closePath();
				ctx.fill();
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(0, 0, 26, 0, -Math.PI / 2 * r1, true);
				ctx.arc(0, 0, 16, -Math.PI / 2 * r1, 0);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(0, 0, 26, 0, -Math.PI / 2, true);
				ctx.arc(0, 0, 16, -Math.PI / 2, 0);
				ctx.stroke();
				ctx.fillStyle = staticData.elementalColor[3][1]; //dynamicData.utilityMachines[0].tanks[0].
				ctx.beginPath();
				ctx.arc(-131, 0, 127, 0, Math.PI / 9);
				ctx.lineTo(0, 32);
				ctx.lineTo(0, 0);
				ctx.closePath();
				ctx.fill();
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(0, 0, 26, Math.PI / 2 * r2, 0, true);
				ctx.arc(0, 0, 16, 0, Math.PI / 2 * r2);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(0, 0, 26, Math.PI / 2, 0, true);
				ctx.arc(0, 0, 16, 0, Math.PI / 2);
				ctx.stroke();
				ctx.beginPath();
				ctx.moveTo(0, -32);
				ctx.arc(-131, 0, 127, -Math.PI / 9, Math.PI / 9);
				ctx.lineTo(0, 32);
				ctx.arc(0, 0, 32, Math.PI / 2, -Math.PI / 2, true);
				ctx.stroke();
				ctx.restore();
			}
			ctx.rotate(Math.PI);

			ctx.save();
			ctx.translate(165, 0);
			ctx.beginPath();
			ctx.arc(0, 0, 35, 0, Math.PI * 2);
			ctx.fill();
			ctx.stroke();
			ctx.rotate(Math.PI * tempData.canvasTicks / 7000);
			ctx.fillStyle = "#323232";
			ctx.strokeStyle = "#323232";
			ctx.beginPath();
			ctx.arc(0, 0, 7, 0, Math.PI * 2);
			ctx.fill();
			for (var i = 0; i < 4; i++) {
				ctx.rotate(Math.PI / 2);
				ctx.beginPath();
				ctx.moveTo(0, 0);
				ctx.lineTo(0, 35);
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(0, 0, 35, -Math.PI / 6, Math.PI / 6);
				ctx.fill();
			}
			ctx.rotate(Math.PI / 4);
			for (var i = 0; i < 4; i++) {
				ctx.rotate(Math.PI / 2);
				ctx.save();
				ctx.translate(21, 0);
				ctx.strokeStyle = staticData.elementalColor[i][1];
				ctx.fillStyle = staticData.elementalColor[i][2];
				ctx.lineWidth = 1;
				for (var j = 1; j < 5; j++) {
					ctx.beginPath();
					ctx.moveTo(0, 12);
					ctx.lineTo(7, 7);
					ctx.lineTo(9, 0);
					ctx.lineTo(7, -7);
					ctx.lineTo(0, -12);
					ctx.lineTo(-7, -7);
					ctx.lineTo(-9, 0);
					ctx.lineTo(-7, 7);
					ctx.closePath();
					ctx.fill();
					ctx.stroke();
					ctx.scale(0.6, 0.6);
					ctx.rotate(Math.PI * tempData.canvasTicks / (100 * j));
				}
				ctx.restore();
			}
			ctx.restore();

			ctx.restore();
			if (!dynamicData.skillTree.currentChallenge || !dynamicData.skillTree.currentChallenge.effects.cruiser) {
				if (dynamicData.utilityMachines[0].maxBoost > 0) {
					ctx.save();
					var x = 200 + 76 * Math.min(1, dynamicData.utilityMachines[0].speed / dynamicData.utilityMachines[0].maxSpeed / 2);
					ctx.save();
					ctx.beginPath();
					ctx.rect(200, 100, 76, 17);
					ctx.clip();
					ctx.lineWidth = 1;
					ctx.strokeStyle = "white";
					ctx.moveTo(x, 100);
					ctx.lineTo(x, 117);
					ctx.moveTo(x + 3, 109);
					ctx.arc(x, 109, 3, 0, Math.PI * 2);
					ctx.stroke();
					ctx.restore();
					if (dynamicData.utilityMachines[0].cooldown > 0) {
						ctx.fillStyle = "#666666";
						ctx.fillRect(200, 85, 76 * dynamicData.utilityMachines[0].cooldown / dynamicData.utilityMachines[0].maxCooldown, 15);
					}
					ctx.restore();
				}
			}
			for (var i = 0; i < 4; i++) {
				ctx.rotate(Math.PI / 2);
				ctx.translate(-180, -180);
				this.drawElementalTankRift(ctx, i);
				ctx.translate(180, 180);
			}
			ctx.fillStyle = staticData.textColor;
			if (dynamicData.golems["Earth"]) {
				this.drawGolem(ctx, staticData.golems["Earth"], 250, -190, 0.3);
				ctx.fillText(dynamicData.golems["Earth"], 250, -165);
			}
			if (dynamicData.golems["Water"]) {
				this.drawGolem(ctx, staticData.golems["Water"], 250, 175, 0.3);
				ctx.fillText(dynamicData.golems["Water"], 250, 200);
			}
			if (dynamicData.golems["Air"]) {
				this.drawGolem(ctx, staticData.golems["Air"], -250, 175, 0.3);
				ctx.fillText(dynamicData.golems["Air"], -250, 200);
			}
			if (dynamicData.golems["Fire"]) {
				this.drawGolem(ctx, staticData.golems["Fire"], -250, -190, 0.3);
				ctx.fillText(dynamicData.golems["Fire"], -250, -165);
			}
			if (dynamicData.skillTree.currentChallenge) {
				var node = dynamicData.skillTree.nodes[dynamicData.skillTree.currentChallengeNode];
				ctx.fillText(dynamicData.skillTree.currentChallengeNode, 40, -265);
				this.drawGolem(ctx, staticData.golems[node.branchID], 0, -230, 0.26);
				ctx.fillText(": " + dynamicData.golems[node.branchID] + " / " + dynamicData.skillTree.currentChallenge.golemCount, 45, -235);
				ctx.strokeRect(-40, -280, 160, 70);
			}
		},
		drawElementalTankRift: function (ctx, elementId) {
			ctx.save();
			ctx.lineWidth = 4;
			ctx.strokeStyle = staticData.elementalColor[elementId][1];
			ctx.fillStyle = staticData.elementalColor[elementId][2];
			ctx.rotate(Math.PI * tempData.canvasTicks / 5000);
			ctx.beginPath();
			ctx.moveTo(0, 40);
			ctx.lineTo(28, 28);
			ctx.lineTo(40, 0);
			ctx.lineTo(28, -28);
			ctx.lineTo(0, -40);
			ctx.lineTo(-28, -28);
			ctx.lineTo(-40, 0);
			ctx.lineTo(-28, 28);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();

			//ctx.scale(0.4+Math.log2(dynamicData.rifts.power)/10,1);
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(0, 35);
			ctx.lineTo(25, 0);
			ctx.lineTo(0, -35);
			ctx.lineTo(-25, 0);
			ctx.closePath();
			ctx.stroke();
			ctx.fillStyle = "#040404";
			ctx.beginPath();
			ctx.arc(0, 0, 20, 0, Math.PI * 2);
			ctx.fill();
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(0, 0, 16, 0, Math.PI * 2);
			ctx.stroke();
			var progressBar = (dynamicData.rifts.delay / dynamicData.rifts.maxDelay) * Math.PI * 2;
			ctx.beginPath();
			ctx.arc(0, 0, 18, progressBar - Math.PI / 4, progressBar);
			ctx.stroke();

			ctx.restore();
		},
		drawTankNumbers: function (ctx) {
			var prefix;
			var amount;
			ctx.save();
			ctx.fillStyle = staticData.textColor;
			ctx.font = "18px 'Open Sans'";
			ctx.textAlign = "left";
			ctx.fillText("Earth", 130, -260);
			ctx.fillText("Water", 130, 260);
			ctx.fillText("Air", -270, 260);
			ctx.fillText("Fire", -270, -260);
			drawNumber(ctx, 185, -258, dynamicData.elementalTanks["Earth"].amount);
			drawNumber(ctx, 185, 262, dynamicData.elementalTanks["Water"].amount);
			drawNumber(ctx, -215, 262, dynamicData.elementalTanks["Air"].amount);
			drawNumber(ctx, -215, -258, dynamicData.elementalTanks["Fire"].amount);
			var postfix = "";
			if (dynamicSaveData.options.relativeChange) {
				postfix = '%';
			}
			if (dynamicData.elementalTanks["Earth"].change < 0) {
				ctx.fillStyle = "red";
				prefix = "-";
			}
			else {
				ctx.fillStyle = "green";
				prefix = "+";
			}
			drawNumber(ctx, 185, -238, Math.abs(dynamicData.elementalTanks["Earth"].change), prefix, postfix);
			if (dynamicData.elementalTanks["Water"].change < 0) {
				ctx.fillStyle = "red";
				prefix = "-";
			}
			else {
				ctx.fillStyle = "green";
				prefix = "+";
			}
			drawNumber(ctx, 185, 242, Math.abs(dynamicData.elementalTanks["Water"].change), prefix, postfix);
			if (dynamicData.elementalTanks["Fire"].change < 0) {
				ctx.fillStyle = "red";
				prefix = "-";
			}
			else {
				ctx.fillStyle = "green";
				prefix = "+";
			}
			drawNumber(ctx, -215, -238, Math.abs(dynamicData.elementalTanks["Fire"].change), prefix, postfix);
			if (dynamicData.elementalTanks["Air"].change < 0) {
				ctx.fillStyle = "red";
				prefix = "-";
			}
			else {
				ctx.fillStyle = "green";
				prefix = "+";
			}
			drawNumber(ctx, -215, 242, Math.abs(dynamicData.elementalTanks["Air"].change), prefix, postfix);
			ctx.restore();
		},
		drawFillRatiosActive: function (ctx) {
			ctx.save();
			var oCMachine;
			ctx.lineWidth = 1;
			for (var i = 0; i < 4; i++) {
				oCMachine = dynamicData.conversionMachines[i];
				var r1 = oCMachine.ingredient.amount / oCMachine.ingredient.drain;
				var r2 = oCMachine.reagent.amount / oCMachine.reagent.drain;
				var rMax = Math.max(r1, r2);
				r1 /= rMax;
				r2 /= rMax;
				ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.ingredient.type]][0];
				ctx.fillRect(722, 135 + 63 * i, 20, 26 * r1);
				ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.reagent.type]][0];
				ctx.fillRect(774, 135 + 63 * i, 20, 26 * r2);
			}
			oCMachine = dynamicData.utilityMachines[0];

			var r1 = Math.log10(1 + oCMachine.tanks[0].amount);
			while (r1 > 5) {
				r1 -= 5;
			}
			r1 /= 5;
			var r2 = Math.log10(1 + oCMachine.tanks[1].amount)
			while (r2 > 3) {
				r2 -= 3;
			}
			r2 /= 3;
			ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[0].type]][0];
			ctx.fillRect(722, 135 + 63 * 4, 20, 30 * r1);
			ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[1].type]][0];
			ctx.fillRect(774, 135 + 63 * 4, 20, 30 * r2);

			for (var i = 0; i < 2; i++) {
				oCMachine = dynamicData.utilityMachines[i + 1];

				var r = [];
				for (var j = 0; j < 4; j++) {
					r.push(Math.log2(1 + oCMachine.tanks[j].amount) / Math.log2(1 + oCMachine.tanks[j].capacity));
					r[j] = Math.min(1, Math.max(0, r[j]));
				}
				ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[3].type]][0];
				ctx.fillRect(722, 135 + 63 * 5 + 95 * i, 20, 30 * r[3]);
				ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[0].type]][0];
				ctx.fillRect(774, 135 + 63 * 5 + 95 * i, 20, 30 * r[0]);
				ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[2].type]][0];
				ctx.fillRect(722, 135 + 63 * 5 + 95 * i + 32, 20, 30 * r[2]);
				ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[1].type]][0];
				ctx.fillRect(774, 135 + 63 * 5 + 95 * i + 32, 20, 30 * r[1]);
			}
			ctx.restore();
		},
		drawGolem: function (ctx, oG, x, y, zoom) {
			ctx.save();
			ctx.translate(x, y);
			ctx.scale(zoom, zoom);
			ctx.fillStyle = oG.colors[0];
			ctx.strokeStyle = oG.colors[1];
			ctx.beginPath();
			ctx.arc(0, 0, 40, -Math.PI / 6, Math.PI * 7 / 6);
			ctx.lineTo(0, -80);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			ctx.save();
			ctx.fillStyle = oG.colors[2];
			ctx.rotate(tempData.canvasTicks / 200 * oG.rotatingSpeed);
			for (var i = 0; i < 2; i++) {
				ctx.rotate(Math.PI);
				ctx.beginPath();
				ctx.arc(20, 0, 15, 0, 2 * Math.PI);
				ctx.fill();
			}
			ctx.restore();
			ctx.restore();
		},
	},
	{ //Golems
		golemDisplay: {},
		golemCircleProcessing: function () {
			this.golemDisplay.golemSumCount = 0;
			this.golemDisplay.golemObjects = [{}, {}, {}, {}];
			this.golemDisplay.golemPos = [];
			for (var i = 0; i < 4; i++) {
				this.golemDisplay.golemObjects[i].count = dynamicData.golems[elem[i]];
				this.golemDisplay.golemObjects[i].pos = [];
				this.golemDisplay.golemObjects[i].elem = i;
				this.golemDisplay.golemSumCount += this.golemDisplay.golemObjects[i].count;
			}
			this.golemDisplay.golemObjects.sort((a, b) => {
				return -(a.count - b.count);
			});
			if (this.golemDisplay.golemSumCount == 0) {
				return;
			}
			for (var i = 0; i < 4; i++) {
				this.golemDisplay.golemObjects[i].sat = this.golemDisplay.golemObjects[i].count / this.golemDisplay.golemSumCount;
			}

			var golCounter = 0;
			var currentCount = [0, 0, 0, 0];
			var currentSat = [0, 0, 0, 0];
			var count = 1e6;
			for (var i = 1; i <= this.golemDisplay.golemSumCount; i++) {
				if (!count--) {
					console.log(this.golemDisplay);
					console.log(currentCount);
					console.log(currentSat);
					console.log(golCounter);
					console.log(this.golemDisplay.golemPos);
					return;
				};
				var currentObject = this.golemDisplay.golemObjects[golCounter];
				if (currentCount[currentObject.elem] >= currentObject.count || currentSat[currentObject.elem] > currentObject.sat) {
					i--;
					golCounter = (golCounter + 1) % 4;
					continue;
				}
				this.golemDisplay.golemPos.push(currentObject.elem);
				currentObject.pos.push(i - 1);
				currentCount[currentObject.elem]++;
				for (var j = 0; j < 4; j++) {
					currentSat[j] = currentCount[j] / i;
				}
				golCounter = 0;
			}
		},
		background: function (ctx) {
			ctx.font = "14px Arial";
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.strokeStyle = staticData.borderColor;
			ctx.lineWidth = 3;
			ctx.fillStyle = "#181818";

			if (dynamicData.skillTree.currentChallengeNode) {
				ctx.fillRect(40, 120, 720, 560);
				ctx.strokeRect(40, 120, 720, 560);
				ctx.fillStyle = staticData.textColor;

				ctx.save();
				ctx.translate(49, 130);
				ctx.strokeRect(0, 0, 200, 360);
				ctx.save();
				ctx.beginPath();
				for (var i = 1; i < 4; i++) {
					ctx.translate(0, 90);
					ctx.moveTo(0, 0);
					ctx.lineTo(200, 0);
				}
				ctx.restore();

				ctx.save();
				for (var i = 0; i < 4; i++) {
					ctx.fillText(elem[i], 25, 20);
					ctx.translate(0, 90);
				}
				ctx.restore();
				ctx.restore();

				ctx.stroke();
				ctx.strokeRect(49, 498, 100, 172);
				ctx.beginPath();
				ctx.arc(505, 400, 240, 0, Math.PI * 2);
				ctx.stroke();
			}
			else {
				ctx.fillRect(120, 120, 560, 560);
				ctx.strokeRect(120, 120, 560, 560);
				ctx.fillStyle = staticData.textColor;
				ctx.strokeRect(350, 130, 100, 30);
				ctx.fillText("Combine", 400, 145);
				ctx.strokeRect(330, 170, 60, 30);
				ctx.strokeRect(410, 170, 60, 30);
			}
		},
		foreground: function (ctx) {
			this.golemCircleProcessing();
		},
		active: function (ctx) {
			ctx.save();
			ctx.font = "14px Arial";
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.strokeStyle = staticData.borderColor;
			ctx.lineWidth = 3;
			ctx.fillStyle = staticData.textColor;

			if (dynamicData.skillTree.currentChallengeNode) {
				//T1 sidebar
				ctx.save();
				ctx.translate(49, 130);
				for (var i = 0; i < 4; i++) {
					if (dynamicData.golems[elem[i]]) {
						this.drawGolem(ctx, staticData.golems[elem[i]], 25, 65, 0.3);
						ctx.fillText(dynamicData.golems[elem[i]], 50, 60);
					}
					ctx.translate(0, 90);
				}
				ctx.restore();

				//Main display
				ctx.save();
				var bondChance = 1;
				var turnAngle = 2 * Math.PI / this.golemDisplay.golemSumCount;

				ctx.translate(505, 400);
				var noT2Golems = true;
				var condition = 0
				for (var golemID in dynamicData.golems) {
					if (dynamicData.golems[golemID] && staticData.golems[golemID].from) {
						noT2Golems = false;
						ctx.save();
						ctx.lineWidth = 0.5;
						ctx.fillStyle = "#181818";
						switch (golemID) {
							/*
							case 'Sand':
								ctx.globalAlpha = 0.05;
								ctx.fillStyle = "#FFFFFF";
								this.reccurentCircle(ctx, 1, 5);
								break;
								//*/
							//* Fractal triangles
							case 'Ice':
								ctx.rotate(turnAngle);
								if (this.golemDisplay.golemSumCount == 12) {
									var maxLevels;
									if (dynamicData.golems["Water"] !== 9) maxLevels = 1;
									else if (dynamicData.golems["Air"] !== 3) maxLevels = 2;
									else maxLevels = 10;
									for (var levels = 0; levels < maxLevels; levels++) {
										for (var diamonds = 0; diamonds < this.golemDisplay.golemSumCount / 4; diamonds++) {
											ctx.beginPath();
											ctx.moveTo(0, 200);
											ctx.rotate(turnAngle);
											ctx.lineTo(0, 210);
											ctx.rotate(turnAngle);
											ctx.lineTo(0, 200);
											ctx.rotate(-turnAngle);
											ctx.lineTo(0, 130);
											ctx.rotate(3 * turnAngle);
											ctx.closePath();
											ctx.stroke();
										}
										ctx.rotate(2.3 * turnAngle);
										ctx.scale(0.77, 0.77);
									}
								}
								else if (this.golemDisplay.golemSumCount == 24) {
									var maxLevels;
									if (dynamicData.golems["Water"] !== 18) maxLevels = 1;
									else if (dynamicData.golems["Air"] !== 6) maxLevels = 2;
									else maxLevels = 45;
									for (var levels = 0; levels < maxLevels; levels++) {
										for (var diamonds = 0; diamonds < this.golemDisplay.golemSumCount / 4; diamonds++) {
											ctx.beginPath();
											ctx.moveTo(0, 200);
											ctx.rotate(turnAngle);
											ctx.lineTo(0, 200);
											ctx.rotate(turnAngle);
											ctx.lineTo(0, 200);
											ctx.rotate(-turnAngle);
											ctx.lineTo(0, 190);
											ctx.rotate(3 * turnAngle);
											ctx.closePath();
											ctx.stroke();
										}
										ctx.rotate(3.1 * turnAngle);
										ctx.scale(0.95, 0.95);
									}
								}
								break;
								//*/
								//* Alchemical Circle
							case 'Steam':
								ctx.beginPath();
								ctx.arc(0, 100, 100, Math.PI / 2, -Math.PI / 2, true);
								ctx.arc(0, -100, 100, Math.PI / 2, -Math.PI / 2);
								ctx.arc(0, 0, 200, -Math.PI / 2, 3 * Math.PI / 2);
								ctx.stroke();

								ctx.rotate(turnAngle);

								ctx.beginPath();
								ctx.moveTo(0, 228);
								ctx.rotate(turnAngle * 1.5);
								ctx.lineTo(0, 114);
								ctx.rotate(turnAngle * 1.5);
								ctx.lineTo(0, 228);
								ctx.lineTo(0, 160);
								ctx.rotate(-turnAngle * 1.5);
								ctx.lineTo(0, 80);
								ctx.rotate(-turnAngle * 1.5);
								ctx.lineTo(0, 160);
								ctx.closePath();
								ctx.fill();
								ctx.stroke();

								ctx.rotate(-turnAngle);

								ctx.beginPath();
								ctx.moveTo(0, 200);
								ctx.lineTo(0, -100);
								ctx.rotate(turnAngle * 2);
								ctx.lineTo(0, 200);
								ctx.stroke();
								ctx.beginPath();
								ctx.rotate(turnAngle);
								ctx.lineTo(0, 200);
								ctx.rotate(-turnAngle * 0.5);
								ctx.lineTo(0, 100);
								ctx.stroke();

								ctx.rotate(-turnAngle * 1.5);

								ctx.beginPath();
								ctx.arc(0, 190, 40, 0, Math.PI * 2);
								ctx.fill();
								ctx.stroke();

								ctx.rotate(turnAngle * 1.5);

								ctx.beginPath();
								ctx.arc(0, 93, 40, 0, Math.PI * 2);
								ctx.fill();
								ctx.stroke();

								ctx.rotate(turnAngle * 1.5);

								ctx.beginPath();
								ctx.arc(0, 190, 40, 0, Math.PI * 2);
								ctx.fill();
								ctx.stroke();

								ctx.rotate(-turnAngle * 1.5);

								ctx.translate(0, 93);
								ctx.beginPath();
								ctx.moveTo(0, 35);
								for (var i = 0; i < 7; i++) {
									ctx.rotate(2 * Math.PI / 7);
									ctx.lineTo(0, 35);
								}
								ctx.stroke();
								break;
								//*/

						}
						ctx.restore();
					}
				}
				if (noT2Golems && this.golemDisplay.golemSumCount == 16) {
					ctx.save();
					ctx.lineWidth = 0.5;
					ctx.fillStyle = "#181818";

					var maxLevels = 1;
					if (dynamicData.golems["Water"] == 4) maxLevels++;
					if (dynamicData.golems["Air"] == 4) maxLevels++;
					if (dynamicData.golems["Fire"] == 4) maxLevels++;
					if (dynamicData.golems["Water"] == 4) maxLevels++;
					if (maxLevels == 5) maxLevels = 25;
					else if (maxLevels > 1) maxLevels = 2;

					for (var sides = 4; sides < 4 + maxLevels; sides++) {
						let harmonyScale = 1 - 1.2 / sides;
						let direction = sides % 2 * 2 - 1;
						ctx.rotate(direction * harmonyScale * tempData.canvasTicks / 100);
						ctx.beginPath();
						ctx.arc(0, 0, 140, 0, Math.PI * 2);
						ctx.stroke();

						var harmonyTurn = Math.PI * 2 / sides;
						ctx.beginPath();
						for (var i = 0; i < sides; i++) {
							ctx.lineTo(0, 140);
							ctx.rotate(harmonyTurn);
						}
						ctx.closePath();
						ctx.stroke();
						ctx.rotate(-direction * harmonyScale * tempData.canvasTicks / 100);
						ctx.scale(harmonyScale, harmonyScale);
					}

					ctx.restore();
				}
				ctx.rotate(turnAngle * 3);
				ctx.rotate(tempData.canvasTicks / 10000);
				ctx.lineWidth = Math.min(2, 30 / this.golemDisplay.golemSumCount);
				ctx.save();
				ctx.globalAlpha = 1;
				for (var i = 0; i < 4; i++) {
					var currentObject = this.golemDisplay.golemObjects[i];
					ctx.strokeStyle = staticData.elementalColor[currentObject.elem][1];
					for (var j = 0; j < currentObject.pos.length; j++) {
						for (var k = j - 1; k >= 0; k--) {
							continue;
							if (Math.floor(Math.random() * bondChance)) {
								continue;
							}
							if (Math.abs(currentObject.pos[k] - currentObject.pos[j]) * 2 == this.golemDisplay.golemSumCount) {
								continue;
							}
							ctx.beginPath();

							ctx.save();
							ctx.rotate(turnAngle * currentObject.pos[k]);
							ctx.moveTo(0, 200);
							ctx.restore();

							ctx.save();
							ctx.rotate(turnAngle * currentObject.pos[j]);
							ctx.lineTo(0, 200);
							ctx.restore();

							ctx.stroke();
						}
					}
				}
				ctx.restore();
				for (var i = 0; i < this.golemDisplay.golemPos.length; i++) {
					this.drawGolem(ctx, staticData.golems[elem[this.golemDisplay.golemPos[i]]], 0, 200, Math.min(0.5, 7 / this.golemDisplay.golemSumCount));
					ctx.rotate(turnAngle);

				}
				ctx.restore();
				for (var golemID in dynamicData.golems) {
					if (dynamicData.golems[golemID] && staticData.golems[golemID].from) {
						//this.drawGolem(ctx, staticData.golems[golemID], 505, 400, 0.5);
					}
				}
			}
			else {
				if (tempData.mergingGolems[0]) ctx.fillText(tempData.mergingGolems[0], 360, 185);
				if (tempData.mergingGolems[1]) ctx.fillText(tempData.mergingGolems[1], 440, 185);

				ctx.translate(400, 400);
				for (var golem in dynamicData.golems) {
					if (dynamicData.golems[golem] === 0) continue;
					var oG = staticData.golems[golem];
					ctx.save();
					if (golem === tempData.mergingGolems[0] || golem === tempData.mergingGolems[1]) {
						ctx.save();
						ctx.fillStyle = "#999999";
						ctx.beginPath();
						ctx.arc(oG.x, oG.y, 50, 0, Math.PI * 2);
						ctx.fill();
						ctx.restore();
					}
					this.drawGolem(ctx, oG);
					ctx.fillText(dynamicData.golems[golem], oG.x, oG.y - 50);
					ctx.restore();
				}
				ctx.translate(-400, -400);
			}
			ctx.restore();
		},
		drawGolem: function (ctx, oG, x, y, zoom) {
			ctx.save();
			if (!dynamicData.skillTree.currentChallengeNode) {
				ctx.translate(oG.x, oG.y);
			}
			else {
				ctx.translate(x, y);
				ctx.scale(zoom, zoom);
			}
			ctx.fillStyle = oG.colors[0];
			ctx.strokeStyle = oG.colors[1];
			ctx.beginPath();
			ctx.arc(0, 0, 40, -Math.PI / 6, Math.PI * 7 / 6);
			ctx.lineTo(0, -80);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			ctx.save();
			ctx.fillStyle = oG.colors[2];
			ctx.rotate(tempData.canvasTicks / 200 * oG.rotatingSpeed);
			for (var i = 0; i < 2; i++) {
				ctx.rotate(Math.PI);
				ctx.beginPath();
				ctx.arc(20, 0, 15, 0, 2 * Math.PI);
				ctx.fill();
			}
			ctx.restore();
			ctx.restore();
		},
		reccurentCircle: function (ctx, depth, maxDepth) {
			if (depth >= maxDepth) {
				ctx.beginPath();
				ctx.arc(0, 0, 175, 0, Math.PI * 2);
				ctx.fill();
				return;
			}
			ctx.beginPath();
			ctx.arc(0, 0, 185, 0, Math.PI * 2);
			ctx.fill();
			depth++;
			ctx.rotate(-Math.pow(2.2, depth) * tempData.canvasTicks / 1000);
			for (var i = Math.max(0, depth - 3); i < depth; i++) {
				ctx.save();
				ctx.translate(0, 185 * (1 - 1 / ((depth - 2) / (9.5 - depth) + 2)));
				ctx.scale(1 / ((depth - 2) / (9.5 - depth) + 2), 1 / ((depth - 2) / (9.5 - depth) + 2));
				ctx.rotate(Math.pow(2.3, i / 3.3 + depth * 1.3) * tempData.canvasTicks / 1000);
				this.reccurentCircle(ctx, depth, maxDepth);
				ctx.restore();
				ctx.rotate(Math.PI * 2 / depth);
			}
		}
	},
	{ //Lore
		background: function (ctx) {},
		foreground: function (ctx) {},
		active: function (ctx) {
			ctx.lineWidth = 2;
			ctx.fillRect(230, 60, 140, 40);
			ctx.strokeRect(230, 60, 140, 40);
			ctx.fillRect(430, 60, 140, 40);
			ctx.strokeRect(430, 60, 140, 40);
			ctx.fillRect(100, 140, 600, 600);
			ctx.strokeRect(100, 140, 600, 600);
			ctx.fillStyle = "rgba(255,255,255,0.03)";
			ctx.strokeStyle = "rgba(255,255,255,0.1)";
			ctx.fillRect(100, 140, 600, 60);
			ctx.fillRect(100, 680, 600, 60);
			ctx.beginPath();
			ctx.moveTo(120, 180);
			ctx.lineTo(130, 160);
			ctx.lineTo(140, 180);
			ctx.moveTo(680, 180);
			ctx.lineTo(670, 160);
			ctx.lineTo(660, 180);
			ctx.moveTo(120, 700);
			ctx.lineTo(130, 720);
			ctx.lineTo(140, 700);
			ctx.moveTo(680, 700);
			ctx.lineTo(670, 720);
			ctx.lineTo(660, 700);
			ctx.stroke();
			ctx.fillStyle = staticData.textColor;
			ctx.textAlign = "center";
			ctx.fillText("Scroll to top", 300, 80);
			ctx.fillText("Scroll to bottom", 500, 80);
			ctx.beginPath();
			ctx.rect(100, 140, 600, 600);
			ctx.clip();
			tempData.loreScroll = Math.max(0, Math.min(dynamicData.lore.maxScroll, tempData.loreScroll + tempData.loreScrollSpeed));
			var y = 150 - tempData.loreScroll % 20;
			var startingMessage = ~~(tempData.loreScroll / 20) - 1;
			for (var i = ~~(tempData.loreScroll / 20); i < dynamicData.lore.messages.length; i++) {
				ctx.fillText(dynamicData.lore.messages[i], 400, y);
				y += 20;
				if (y > 750) {
					break;
				}
			}
		},
	},
	{ //Chievos
		background: function (ctx) {},
		foreground: function (ctx) {},
		active: function (ctx) {
			ctx.fillRect(100, 100, 600, 660);
			ctx.strokeRect(100, 100, 600, 660);
			if (permanentSaveData.achievementsUnlocked) {
				ctx.save();
				ctx.font = "18px Arial";
				ctx.textAlign = "center";
				ctx.fillStyle = staticData.textColor;
				ctx.fillText("Achievements - Soft Reset lets you try to get them all.", 400, 130);
				var y = 160;
				for (var achievementId in permanentSaveData.achievementList) {
					var achievement = permanentSaveData.achievementList[achievementId];
					ctx.save();
					ctx.fillText(achievement.name, 400, y + 20);
					ctx.font = "14px Arial";
					if (achievementId === 'speed') {
						if (!dynamicData.startTime) {
							ctx.fillText("Finish stage under 90 min. Your timer will start on next Soft Reset.", 400, y + 55);
						}
						else {
							var shownTime = Math.floor(achievement.time / 60000) + achievement.time % 60000 / 100000;
							shownTime = Math.floor(shownTime * 100) / 100;
							if (achievement.unlocked) {
								ctx.fillText("Your best time: " + shownTime.toFixed(2) + " min - Developer's time 66.38 min.", 400, y + 45);
							}
							else {
								ctx.fillText("Finish stage under 90 min. Your current best time : " + shownTime.toFixed(2) + " min.", 400, y + 45);
							}
							var time = ((new Date()) - dynamicData.startTime);
							shownTime = Math.floor(time / 60000) + time % 60000 / 100000;
							shownTime = Math.floor(shownTime * 100) / 100;
							ctx.font = "10px Arial";
							ctx.fillText("Current run : " + shownTime.toFixed(2) + " min", 400, y + 65);
						}
					}
					else {
						ctx.fillText(achievement.description, 400, y + 55);
					}
					if (achievement.unlocked) {
						ctx.strokeStyle = "#B5A348";
					}
					else {
						ctx.strokeStyle = "#773333";
					}
					ctx.strokeRect(180, y, 440, 75);
					y += 85;
					ctx.restore();
				}
				ctx.restore();
			}
			else {
				ctx.save();
				ctx.font = "18px Arial";
				ctx.textAlign = "center";
				ctx.fillStyle = staticData.textColor;
				ctx.fillText("Finish the game once to unlock achievements.", 400, 130);
				ctx.restore();
			}
		},
	},
	{ //Options
		background: function (ctx) {},
		foreground: function (ctx) {},
		active: function (ctx) {
			ctx.font = "14px Arial";
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.strokeStyle = staticData.borderColor;
			ctx.lineWidth = 2;
			ctx.fillStyle = "#181818";
			ctx.fillRect(330, 120, 140, 40);
			ctx.strokeRect(330, 120, 140, 40);
			ctx.fillRect(330, 180, 140, 40);
			ctx.strokeRect(330, 180, 140, 40);
			ctx.fillRect(330, 240, 140, 40);
			ctx.strokeRect(330, 240, 140, 40);
			ctx.fillRect(330, 300, 140, 40);
			ctx.strokeRect(330, 300, 140, 40);
			ctx.fillRect(100, 300, 200, 40);
			ctx.strokeRect(100, 300, 200, 40);
			ctx.fillRect(500, 300, 200, 40);
			ctx.strokeRect(500, 300, 200, 40);
			ctx.fillRect(220, 400, 160, 40);
			ctx.strokeRect(220, 400, 160, 40);
			ctx.fillRect(420, 400, 160, 40);
			ctx.strokeRect(420, 400, 160, 40);
			ctx.fillStyle = staticData.textColor;
			ctx.fillText("Manual Save", 400, 140);
			ctx.fillText("Manual Load", 400, 200);
			ctx.fillText("Soft Reset", 400, 260);
			ctx.fillText("Hard Reset", 400, 320);
			if (dynamicSaveData.options.colorblindMode) {
				ctx.fillText("Turn colorblind valves mode off.", 200, 320);
			}
			else {
				ctx.fillText("Turn colorblind valves mode on.", 200, 320);
			}
			ctx.fillText("Go back to stage select.", 600, 320);
			ctx.fillText("Experimental Import", 300, 420);
			ctx.fillText("Experimental Export", 500, 420);
		},
	},
	{ //Tree
		background: function (ctx) {
			this.tree(floatingCanvas[tempData.activeTab][2].getContext('2d'));
		},
		foreground: function (ctx) {},
		active: function (ctx) {
			ctx.textAlign = "center";
			var tX = tempData.skillTreeScrollX + tempData.skillTreeScrollSpeedX;
			if (tX > 600) tX = 600;
			if (tX < -600) tX = -600;
			var tY = tempData.skillTreeScrollY + tempData.skillTreeScrollSpeedY;
			if (tY > 600) tY = 600;
			if (tY < -600) tY = -600;
			var tZ = tempData.skillTreeZoom * tempData.skillTreeZoomSpeed;
			if (tZ > 1) tZ = 1;
			if (tZ < 0.25) tZ = 0.25;
			tempData.skillTreeScrollX = tX;
			tempData.skillTreeScrollY = tY;
			tempData.skillTreeZoom = tZ;

			ctx.lineWidth = 1;

			//Lock
			if (dynamicData.skillTree.currentBranch) {
				ctx.save();
				ctx.beginPath();
				ctx.arc(100, 80, 20, 0, 2 * Math.PI);
				ctx.fillStyle = "#002300";
				ctx.fill();
				ctx.stroke();
				ctx.restore();

				if (dynamicData.skillTree.locked) {
					ctx.beginPath();
					ctx.moveTo(90, 70);
					ctx.lineTo(90, 90);
					ctx.lineTo(110, 90);
					ctx.lineTo(110, 70);
					ctx.closePath();
					ctx.stroke();
				}
				else {
					ctx.beginPath();
					ctx.moveTo(90, 70);
					ctx.lineTo(90, 90);
					ctx.lineTo(110, 90);
					ctx.lineTo(110, 70);
					ctx.lineTo(105, 70);
					ctx.lineTo(95, 75);
					ctx.stroke();
				}
				if (dynamicData.skillTree.hoveredNode == "lock") {
					ctx.beginPath();
					ctx.arc(100, 80, 20, -Math.PI / 2, Math.PI / 2);
					ctx.lineTo(200, 100);
					ctx.arc(200, 80, 20, Math.PI / 2, -Math.PI / 2, true);
					ctx.closePath();
					ctx.fill();
					ctx.arc(100, 80, 20, -Math.PI / 2, Math.PI / 2, true);
					ctx.stroke();
					ctx.save();
					ctx.fillStyle = staticData.textColor;
					ctx.textAlign = "center";
					if (dynamicData.skillTree.locked) {
						ctx.fillText("Locked", 170, 80);
					}
					else {
						ctx.fillText("Unlocked", 170, 80);
					}
					ctx.restore();
				}
			}

			//Scroll buttons
			ctx.beginPath();
			ctx.arc(700, 80, 20, 0, 2 * Math.PI);
			ctx.fill();
			ctx.stroke();
			if (tZ < 1) {
				ctx.beginPath();
				ctx.moveTo(700, 70);
				ctx.lineTo(700, 90);
				ctx.moveTo(690, 80);
				ctx.lineTo(710, 80);
				ctx.stroke();
			}
			ctx.beginPath();
			ctx.arc(700, 130, 20, 0, 2 * Math.PI);
			ctx.fill();
			ctx.stroke();
			if (tZ > 0.25) {
				ctx.beginPath();
				ctx.moveTo(690, 130);
				ctx.lineTo(710, 130);
				ctx.stroke();
			}

			//Center piece
			ctx.translate(400, 400);
			ctx.beginPath();
			ctx.arc(0, 0, 350, 0, 2 * Math.PI);
			ctx.fill();
			if (!tempData.skillTreeZoomActive) {
				if (dynamicData.skillTree.currentBranch) {
					ctx.fillStyle = staticData.elementalColor[elementalTranlator[dynamicData.skillTree.currentBranch]][3];
				}
				else {
					ctx.fillStyle = "#111111";
				}
				ctx.globalAlpha = 0.4;
			}
			ctx.fill();
			if (!tempData.skillTreeZoomActive) {
				ctx.globalAlpha = 1;
			}
			ctx.stroke();
			ctx.clip();

			if (tempData.skillTreeZoomActive) {
				ctx.beginPath();
				if (dynamicData.skillTree.currentBranch) {
					ctx.fillStyle = staticData.elementalColor[elementalTranlator[dynamicData.skillTree.currentBranch]][3];
				}
				else {
					ctx.fillStyle = "#111111";
				}
				ctx.globalAlpha = 0.4;
				ctx.arc(0, 0, 250, 0, 2 * Math.PI);
				ctx.fill();
				ctx.globalAlpha = 1;
			}

			ctx.scale(tZ, tZ);
			ctx.translate(tX, tY);

			var ratio = tempData.canvasTicks % 87 / 100 + 0.0625;
			ctx.fillStyle = "#870087";
			for (var branchID in skillTree.branches) {
				for (var nodeID in skillTree.branches[branchID].nodes) {
					if (!dynamicData.skillTree.nodes[nodeID].showColor) {
						continue;
					}
					var node = skillTree.nodes[nodeID];
					var nodeLinks = skillTree.branches[branchID].nodes[nodeID];
					for (var i = 0; i < nodeLinks.length; i++) {
						if (!dynamicData.skillTree.nodes[nodeLinks[i]].showColor) {
							continue;
						}
						var nodeLink = skillTree.nodes[nodeLinks[i]];
						ctx.beginPath();
						ctx.arc((node.x - nodeLink.x) * ratio + nodeLink.x, (node.y - nodeLink.y) * ratio + nodeLink.y, 5, 0, 2 * Math.PI);
						ctx.fill();
					}
				}
			}
			ctx.drawImage(floatingCanvas[tempData.activeTab][2], -1000, -1000);
			if (dynamicData.skillTree.hoveredNode && dynamicData.skillTree.hoveredNode !== "lock" && dynamicData.skillTree.nodes[dynamicData.skillTree.hoveredNode].showColor) {
				var node = dynamicData.skillTree.nodes[dynamicData.skillTree.hoveredNode];
				var nodeData = node.data;

				ctx.save();
				ctx.translate(-tX, -tY);
				ctx.scale(1 / tZ, 1 / tZ);
				var centerX = tX + nodeData.x;
				var centerY = tY + nodeData.y;
				centerX *= tZ;
				centerY *= tZ;
				ctx.fillStyle = "rgba(0,0,0,0.7)";
				ctx.beginPath();
				ctx.arc(centerX, centerY, 150, 0, 2 * Math.PI);
				ctx.fill();
				ctx.stroke();

				ctx.fillStyle = staticData.textColor;
				//ctx.fillText("X", centerX - 60,centerY - 110);
				//ctx.fillText("Y", centerX - 60, centerY - 90);

				//ctx.fillText(nodeData.x, centerX - 40, centerY - 110);
				//ctx.fillText(nodeData.y, centerX - 40, centerY - 90);

				if (dynamicData.skillTree.locked) {
					if (permanentSaveData.skillTree.unlocked[dynamicData.skillTree.hoveredNode]) {
						ctx.fillText("You can only interact with locked nodes", centerX, centerY - 50);
						ctx.fillText("while tree is unlocked.", centerX, centerY - 30);
					}
				}
				else {
					if (node.cost > 999) {
						ctx.fillText("To get this node you need to unlock it.", centerX, centerY - 60);
						ctx.fillText("Activate this branch", centerX, centerY - 40);
						ctx.fillText("and lock your tree to do it.", centerX, centerY - 20);
					}
					else if (node.active) {
						ctx.fillText(dynamicData.skillTree.hoveredNode, centerX, centerY - 40);
					}
					else {
						ctx.fillText("Cost of this node and prerequisites:", centerX, centerY - 60);
						ctx.fillText(node.cost + " sp out of available " + dynamicData.skillTree.spAvail + " sp", centerX, centerY - 40);
						ctx.fillText("Also you can only have one branch active.", centerX, centerY - 10);
						//ctx.fillText(node.required.toString(2), centerX, centerY - 20);
					}
				}

				if (dynamicData.skillTree.locked && !permanentSaveData.skillTree.unlocked[dynamicData.skillTree.hoveredNode] && nodeData.challenge) {
					ctx.fillText("Unlock challenge:", centerX, centerY - 110);
					ctx.fillText("Gather " + nodeData.challenge.golemCount + " " + node.branchID + " golems.", centerX, centerY - 80);
					ctx.fillText("Golem cost: ", centerX - 40, centerY - 60);
					drawNumber(ctx, centerX, centerY - 60, nodeData.challenge.golemCost, null);
				}
				else if (nodeData.stat) {
					if (permanentSaveData.skillTree.unlocked[dynamicData.skillTree.hoveredNode]) {
						ctx.fillText("Passive:", centerX, centerY + 20);
					}
					else {
						ctx.fillText("Locked passive:", centerX, centerY + 20);
					}
					switch (nodeData.stat) {
						case "golemCost":
							ctx.fillText("Reduced Golem Creation costs", centerX, centerY + 40);
							ctx.fillText("-" + nodeData.power * (node.active ? 3 : 1) + "% to exponent", centerX, centerY + 60);
							break;
						case "stashCapacity":
							ctx.fillText("Increased Stash capacity", centerX, centerY + 40);
							ctx.fillText("+" + nodeData.power * (node.active ? 3 : 1) + "% to exponent", centerX, centerY + 60);
							break;
						case "transferRate":
							ctx.fillText("Increased pipe transfer rate", centerX, centerY + 40);
							ctx.fillText("+" + nodeData.power * (node.active ? 3 : 1) + "%", centerX, centerY + 60);
							break;
						case "transferRateMultiplier":
							ctx.fillText("Increased pipe transfer rate", centerX, centerY + 40);
							ctx.fillText("Multiplied by " + nodeData.power * (node.active ? 3 : 1), centerX, centerY + 60);
							break;
						case "gainAir":
							ctx.fillText("Increased Air gains", centerX, centerY + 40);
							ctx.fillText("+ " + nodeData.power * (node.active ? 3 : 1) + "%", centerX, centerY + 60);
							break;
						case "gainEarth":
							ctx.fillText("Increased Earth gains", centerX, centerY + 40);
							ctx.fillText("+ " + nodeData.power * (node.active ? 3 : 1) + "%", centerX, centerY + 60);
							break;
						case "gainWater":
							ctx.fillText("Increased Water gains", centerX, centerY + 40);
							ctx.fillText("+ " + nodeData.power * (node.active ? 3 : 1) + "%", centerX, centerY + 60);
							break;
						case "gainFire":
							ctx.fillText("Increased Fire gains", centerX, centerY + 40);
							ctx.fillText("+ " + nodeData.power * (node.active ? 3 : 1) + "%", centerX, centerY + 60);
							break;
						case "gainAll":
							ctx.fillText("Increased all Element gains", centerX, centerY + 40);
							ctx.fillText("+ " + nodeData.power * (node.active ? 3 : 1) + "%", centerX, centerY + 60);
							break;
						case "machineSpeed":
							ctx.fillText("Increased conversion machines speed", centerX, centerY + 40);
							ctx.fillText("+ " + nodeData.power * (node.active ? 3 : 1) + "%", centerX, centerY + 60);
							break;
						case "catalystMin":
							ctx.fillText("Improved inactive state of Catalyst.", centerX, centerY + 40);
							ctx.fillText("+ " + nodeData.power * (node.active ? 3 : 1) + "%", centerX, centerY + 60);
							break;
						case "catalystMax":
							if (node.active) {
								ctx.fillText("Automatically restarts Catalyst's active.", centerX, centerY + 40);
								ctx.fillText("Randomly modifies it's behaviour.", centerX, centerY + 60);
							}
							else {
								ctx.fillText("Nothing unless activated.", centerX, centerY + 40);
							}
							break;
						default:
							ctx.fillText("To be implemented.", centerX, centerY + 40);
							ctx.fillText("Will improve temporary upgrades.", centerX, centerY + 60);
							break;
					}
					if (!node.active) {
						ctx.fillText("Activated:", centerX, centerY + 85);
						if (nodeData.stat == "catalystMax") {
							ctx.fillText("Enchance Catalyst's active", centerX, centerY + 100);
						}
						else {
							ctx.fillText("Triple passive effect.", centerX, centerY + 100);
						}
					}
				}

				ctx.restore();
			}
		},
		tree: function (ctx) {
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, 2000, 2000);
			ctx.translate(1000, 1000);
			ctx.lineWidth = 3;
			ctx.fillStyle = "#181818";
			ctx.strokeStyle = staticData.borderColor;

			for (var branchID in skillTree.branches) {
				for (var nodeID in skillTree.branches[branchID].nodes) {
					if (!dynamicData.skillTree.nodes[nodeID].showColor) {
						continue;
					}
					var node = skillTree.nodes[nodeID];

					var nodeLinks = skillTree.branches[branchID].nodes[nodeID];
					for (var i = 0; i < nodeLinks.length; i++) {
						if (!dynamicData.skillTree.nodes[nodeLinks[i]].showColor) {
							continue;
						}
						var nodeLink = skillTree.nodes[nodeLinks[i]];
						ctx.beginPath();
						ctx.moveTo(node.x, node.y);
						ctx.lineTo(nodeLink.x, nodeLink.y);
						ctx.stroke();
					}
				}
			}
			for (var nodeID in skillTree.nodes) {
				if (!dynamicData.skillTree.nodes[nodeID].showColor) {
					continue;
				}
				var node = skillTree.nodes[nodeID];
				if (dynamicData.skillTree.locked) {
					if (permanentSaveData.skillTree.unlocked[nodeID]) {
						ctx.beginPath();
						ctx.moveTo(node.x, node.y - 30);
						ctx.lineTo(node.x - 30, node.y);
						ctx.lineTo(node.x, node.y + 30);
						ctx.lineTo(node.x + 30, node.y);
						ctx.closePath();
					}
				}
				else {
					if (!permanentSaveData.skillTree.unlocked[nodeID]) {
						ctx.beginPath();
						ctx.moveTo(node.x, node.y - 30);
						ctx.lineTo(node.x - 30, node.y);
						ctx.lineTo(node.x, node.y + 30);
						ctx.lineTo(node.x + 30, node.y);
						ctx.closePath();
					}
				}
				ctx.fill();
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(node.x, node.y, 25, 0, 2 * Math.PI);
				ctx.fillStyle = dynamicData.skillTree.nodes[nodeID].showColor;
				ctx.fill();
				ctx.stroke();
			}
		}
	},
	{ //Donation Box
		background: function (ctx) {},
		foreground: function (ctx) {},
		active: function (ctx) {
			ctx.font = "14px Arial";
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.strokeStyle = staticData.borderColor;
			ctx.lineWidth = 2;
			ctx.fillStyle = "#181818";
			ctx.fillRect(150, 200, 500, 300);
			ctx.strokeRect(150, 200, 500, 300);
			ctx.strokeRect(330, 450, 140, 40);
			ctx.strokeRect(330, 450, 140, 40);
			ctx.strokeRect(230, 350, 140, 40);
			ctx.strokeRect(430, 350, 140, 40);
			ctx.fillStyle = staticData.textColor;
			ctx.fillText("Patreon", 300, 370);
			ctx.fillText("Paypal", 500, 370);
			ctx.fillText("Go back", 400, 470);
			ctx.fillText("This it the place if you really enjoyed my game", 400, 230);
			ctx.fillText("and want to support me financially.", 400, 252);
			ctx.fillText("Here are the links which you can use to do so.", 400, 274);
		},
	},
	{ //
		background: function (ctx) {},
		foreground: function (ctx) {},
		active: function (ctx) {},
	},
	{ //
		background: function (ctx) {},
		foreground: function (ctx) {},
		active: function (ctx) {},
	}
];

function drawTabs(ctx) {
	ctx.save();
	ctx.textAlign = "center";
	ctx.translate(50, 0);
	for (var i = 0; i < 6; i++) {
		if (!dynamicData.tabStatus[i].disabled) {
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(0, 30);
			ctx.lineTo(110, 30);
			ctx.lineTo(110, 0);
			ctx.stroke();
			ctx.save();
			if (i === tempData.activeTab) {
				ctx.fillStyle = "#230023";
				dynamicData.tabStatus[i].highlight = false;
			}
			else if (dynamicData.tabStatus[i].highlight) {
				ctx.fillStyle = "#343400";
			}
			ctx.fill();
			ctx.restore();
			ctx.save();
			ctx.fillStyle = staticData.textColor;
			ctx.fillText(staticData.tabNames[i], 55, 15);
			ctx.restore();
		}
		ctx.translate(120, 0);
	}
	ctx.restore();
}

function drawTooltip(ctx) {
	ctx.save();
	ctx.textAlign = "left";
	ctx.fillRect(120, 36, 560, 79);
	ctx.strokeRect(120, 36, 560, 79);
	ctx.fillStyle = staticData.textColor;
	ctx.font = "18px Arial";
	ctx.fillText(canvasTooltip.topRow(), 130, 52);
	ctx.font = "14px Arial";
	ctx.fillText(canvasTooltip.middleRow(), 130, 80);
	ctx.font = "11px Arial";
	ctx.fillText(canvasTooltip.bottomRow(), 130, 100);
	ctx.restore();
	ctx.save();
	if (canvasTooltip.additions) {
		for (var i = 0; i < canvasTooltip.additions.length; i++) {
			ctx.save();
			var oA = canvasTooltip.additions[i];
			if (!oA.special) {
				if (oA.backgroundColor) ctx.fillStyle = oA.backgroundColor;
				ctx.fillRect(oA.x, oA.y, oA.w, oA.h);
				if (oA.textColor) {
					ctx.fillStyle = oA.textColor;
				}
				else {
					ctx.fillStyle = staticData.textColor;
				}
				if (oA.text) ctx.fillText(oA.text(), oA.x + 5, oA.y + 5);
				if (oA.borderColor) ctx.strokeStyle = oA.borderColor;
				ctx.strokeRect(oA.x, oA.y, oA.w, oA.h);
			}
			else {
				switch (oA.special) {
					case "upgradeCosts":
						for (var j = 0; j < staticData.upgrades[canvasTooltip.arg1].costs.length; j++) {
							var cost = staticData.upgrades[canvasTooltip.arg1].costs[j];
							ctx.save();
							ctx.fillStyle = staticData.elementalColor[elementalTranlator[cost.type]][0];
							ctx.textAlign = "right";
							ctx.fillText(cost.type, 560, 49 + j * 18);
							ctx.font = "16px 'Courier New'";
							drawNumber(ctx, 580, 50 + j * 18, cost.amount);
							ctx.restore();
						}
						break;
					case "conversionMachineDisplay":
						var oCM = dynamicData.conversionMachines[canvasTooltip.arg1];
						ctx.save();
						ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCM.ingredient.type]][0];
						ctx.textAlign = "right";
						ctx.fillText(oCM.ingredient.type, 560, 49);
						ctx.font = "16px 'Courier New'";
						drawNumber(ctx, 580, 50, oCM.ingredient.amount);
						ctx.restore();
						ctx.save();
						ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCM.reagent.type]][0];
						ctx.textAlign = "right";
						ctx.fillText(oCM.reagent.type, 560, 67);
						ctx.font = "16px 'Courier New'";
						drawNumber(ctx, 580, 68, oCM.reagent.amount);
						ctx.restore();
						break;
					case "utilityTankDisplay":
						var oCM = dynamicData.utilityMachines[canvasTooltip.arg1];
						for (var j = 0; j < oCM.tanks.length; j++) {
							var oT = oCM.tanks[j];
							ctx.save();
							ctx.fillStyle = staticData.elementalColor[elementalTranlator[oT.type]][0];
							ctx.textAlign = "right";
							ctx.fillText(oT.type, 455, 49 + 18 * j);
							ctx.font = "16px 'Courier New'";
							drawNumber(ctx, 470, 50 + 18 * j, oT.amount);
							drawNumber(ctx, 580, 50 + 18 * j, oT.capacity, "/ ");
							ctx.restore();
						}
						break;
				}
			}
			ctx.restore();
		}
	}
	ctx.restore();
}

function drawNumber(ctx, x, y, amount, prefix, postfix) {
	ctx.save();
	ctx.font = "16px 'Courier New'";
	if (prefix) {
		ctx.textAlign = "right";
		ctx.fillText(prefix, x, y);
	}
	if (postfix) {
		ctx.textAlign = "right";
		ctx.fillText(postfix, x + 84, y);
	}
	if (amount > 9999) {
		ctx.textAlign = "left";
		ctx.fillText(amount.toExponential(2).replace('+', ''), x, y);
	}
	else {
		ctx.textAlign = "right";
		ctx.fillText(amount.toFixed(1), x + 57, y);
	}
	ctx.restore();
}

function estimateBannerLength(bannerText, ctx) {
	return ctx.measureText(bannerText).width;
}

function drawOverlay(ctx) {
	ctx.save();
	ctx.globalAlpha = 0.9;
	ctx.fillRect(120, 120, 560, 560);
	ctx.strokeRect(120, 120, 560, 560);
	ctx.globalAlpha = 1;
	ctx.fillStyle = staticData.textColor;
	ctx.textAlign = "center";
	switch (visibleOverlay) {
		case 'FAQ':
			ctx.fillText("Frequently asked questions", 400, 160);
			ctx.textAlign = "left";
			ctx.fillText("Q1 : Why can't I see capacity of the machines?", 160, 200);
			ctx.fillText("A1 : With new crystals machines have near infinite capacity. (1e300)", 160, 220);
			ctx.fillText("Q2 : When gauge on machine looks full, why Element still flows into it?", 160, 260);
			ctx.fillText("A2 : With new capacity gauges behave differently. They show", 160, 280);
			ctx.fillText("ratio of Elements inside machine. This helps you visualise", 190, 300);
			ctx.fillText("which part of conversion recipe would need improvement.", 190, 320);
			ctx.fillText("Q3 : I have both valves open on machine, but I don't produce anything. Help?", 160, 360);
			ctx.fillText("A3 : 1. Secondary value on tank shows relative change of amount per second.", 160, 380);
			ctx.fillText("2. Before you get specific upgrade there are no limits in amount", 190, 400);
			ctx.fillText("Element that can flow into machine, which sometimes can lead to", 190, 420);
			ctx.fillText("situation where everything you produce just flows into machines.", 190, 440);
			ctx.fillText("Try disabling valve with dominant Element and enable valve with lesser one.", 190, 460);
			ctx.fillText("This will empty out the machine over time.", 190, 480);
			ctx.fillText("Q4 : How does Stash work exactly?", 160, 520);
			ctx.fillText("A4 : Whenever you make a golem or buy an upgrade stash activates,", 160, 540);
			ctx.fillText("letting out nth root of stored Elements. At first it's 4th root,", 190, 560);
			ctx.fillText("but with futher upgrades it can get up to square root.", 190, 580);
			ctx.fillText("Q5 : Is Mayonnaisse an Element?", 160, 620);
			ctx.fillText("A5 : No. I don't know what are you talking about.", 160, 640);
			break;
		case 'Challenge':
			ctx.fillText("Test", 360, 200);
			ctx.fillText("Test", 360, 220);
			ctx.fillText("Test", 320, 250);
			ctx.fillText("Test", 360, 280);
			ctx.fillText("Test", 370, 400);
			ctx.fillText("Test", 360, 500);
			break;
		default:

	}

}

function drawPopup(ctx) {
	ctxActive.save();
	ctxActive.fillRect(100, 400, 600, 300);
	ctxActive.strokeRect(100, 400, 600, 300);
	ctxActive.fillRect(350, 650, 100, 40);
	ctxActive.strokeRect(350, 650, 100, 40);
	ctxActive.textAlign = "center";
	ctxActive.fillStyle = staticData.textColor;
	ctxActive.fillText("Proceed", 400, 670);
	var text = lore.popupMessages[dynamicData.popupActive].text;
	var textlines = text.split('\n');
	for (var i = 0; i < textlines.length; i++) {
		ctxActive.fillText(textlines[i], 400, 440 + i * 20);
	}
	ctxActive.restore();
}
