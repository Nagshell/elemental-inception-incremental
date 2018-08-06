function canvasClick(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = (event.clientX - canvasBox.left-1)*800/canvasBox.width;
	var y = (event.clientY - canvasBox.top-1)*800/canvasBox.height;
	
	click(x,y);
}

function canvasHover(event) {
	var canvasBox = canvas.getBoundingClientRect();
	var x = (event.clientX - canvasBox.left-1)*800/canvasBox.width;
	var y = (event.clientY - canvasBox.top-1)*800/canvasBox.height;
	hover(x,y);
}

var highlight = {
	"active" : false,
	x1 : 0,
	x2 : 0,
	y1 : 0,
	y2 : 0
}

var elementalTranlator = {
	"Earth" : 0,
	"Water" : 1,
	"Air" : 2,
	"Fire" : 3
}

var floatingCanvas = [
	[null,null],
	[null,null],
	[null,null],
	[null,null],
	[null,null],
	[null,null]
];

var FAQvisible = false;

var canvas = document.getElementById("canvasMain");
canvas.addEventListener("mousemove", canvasHover);
canvas.addEventListener("click", canvasClick);
canvas.addEventListener("wheel", canvasClick);

var ctxActive = canvas.getContext("2d");
var canvasTooltip = null;
var redraw = [true,true,true,true,true,true];

function redrawFloating(tab) {
	redraw[tab] = false;
	if(floatingCanvas[tab][0] === null) {
		floatingCanvas[tab][0] = document.createElement("canvas");
		floatingCanvas[tab][0].width = 800;
		floatingCanvas[tab][0].height = 800;
	}
	if(floatingCanvas[tab][1] === null) {
		floatingCanvas[tab][1] = document.createElement("canvas");
		floatingCanvas[tab][1].width = 800;
		floatingCanvas[tab][1].height = 800;
	}
	var ctxBack = floatingCanvas[tab][0].getContext('2d');
	ctxBack.clearRect(0, 0, 800, 800);
	var ctxFront = floatingCanvas[tab][1].getContext('2d');
	ctxFront.clearRect(0, 0, 800, 800);
	switch(tempData.activeTab) {
		case 0:
			drawMainBackground(ctxBack);
			drawMainForeground(ctxFront);
			break;
		case 1:
			drawGolemBackground(ctxBack);
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
	}
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
	
	if(redraw[tempData.activeTab]) {
		redrawFloating(tempData.activeTab);
	}
	ctxActive.drawImage(floatingCanvas[tempData.activeTab][0],0,0);
	ctxActive.save();
	switch(tempData.activeTab) {
		case 0:
			drawMainActive(ctxActive);
			if(canvasTooltip) {
				drawTooltip(ctxActive);
			}
			break;
		case 1:
			drawGolemActive(ctxActive);
			if(canvasTooltip) {
				drawTooltip(ctxActive);
			}
			break;
		case 2:
			drawLoreActive(ctxActive);
			break;
		case 3:
			drawStatsActive(ctxActive);
			break;
		case 4:
			drawOptionsActive(ctxActive);
			break;
		case 5:
			drawDonate(ctxActive);
			break;
	}
	ctxActive.restore();
	ctxActive.drawImage(floatingCanvas[tempData.activeTab][1],0,0);
	if(FAQvisible) {
		drawFAQ(ctxActive);
	}
	if(dynamicData.popupActive) {
		ctxActive.save();
		ctxActive.fillRect(100,400,600,300);
		ctxActive.strokeRect(100,400,600,300);
		ctxActive.fillRect(350,650,100,40);
		ctxActive.strokeRect(350,650,100,40);
		
		ctxActive.textAlign = "center";
		ctxActive.fillStyle = staticData.textColor;
		ctxActive.fillText("Proceed",400,670);
		
		
		var text = lore.popupMessages[dynamicData.popupActive].text;
		var textlines = text.split('\n');
		for(var i=0;i<textlines.length;i++) {
			ctxActive.fillText(textlines[i],400,440+i*20);
		}
		
		ctxActive.restore();
	}
	if(highlight.active) {
		ctxActive.save();
		ctxActive.fillStyle = "rgba(255,255,255,0.06)";
		ctxActive.fillRect(highlight.x1,highlight.y1,highlight.x2-highlight.x1,highlight.y2-highlight.y1);
		ctxActive.strokeStyle = "rgba(255,255,255,0.6)";
		ctxActive.strokeRect(highlight.x1,highlight.y1,highlight.x2-highlight.x1,highlight.y2-highlight.y1);
		ctxActive.restore();
	}
}


function drawTabs(ctx) {
	ctx.save();
	ctx.textAlign = "center";
	ctx.translate(100,0);
	for(var i=0;i<5;i++) {
		if(!dynamicData.tabStatus[i].disabled) { 
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.lineTo(0,30);
			ctx.lineTo(110,30);
			ctx.lineTo(110,0);
			ctx.stroke();
			ctx.save();
			if(i===tempData.activeTab) {
				ctx.fillStyle = "#230023";
				dynamicData.tabStatus[i].highlight = false;
			} else if(dynamicData.tabStatus[i].highlight) {
				ctx.fillStyle = "#343400";
			}
			ctx.fill();
			ctx.restore();
			
			ctx.save();
			ctx.fillStyle = staticData.textColor;
			ctx.fillText(staticData.tabNames[i],55,15);
			ctx.restore();
		}
		ctx.translate(120,0);
	}
	ctx.restore();
}

function drawMainForeground(ctx) {
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
	draw2ValverForeground(ctx,689,y,0,1);
	y+=63;
	oMachine = dynamicData.conversionMachines[1];
	draw2ValverForeground(ctx,689,y,1,3);
	y+=63;
	oMachine = dynamicData.conversionMachines[2];
	draw2ValverForeground(ctx,689,y,2,3);
	y+=63;
	oMachine = dynamicData.conversionMachines[3];
	draw2ValverForeground(ctx,689,y,0,3);
	y+=63;
	oMachine = dynamicData.utilityMachines[0];
	if(oMachine.unlocked) {
		draw2ValverForeground(ctx,689,y,2,3);
		y+=63;
	}
	oMachine = dynamicData.utilityMachines[1];
	if(oMachine.unlocked) {
		draw4ValverForeground(ctx,689,y);
		y+=95;
	}
	oMachine = dynamicData.utilityMachines[2];
	if(oMachine.unlocked) {
		draw4ValverForeground(ctx,689,y);
		y+=95;
	}
	ctx.restore();
	
	ctx.translate(400,400);
	ctx.lineWidth = 2;
	
	ctx.beginPath();
	ctx.arc(0,0,18,0,Math.PI*2);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0,0,45,0,Math.PI*2);
	ctx.stroke();
	
	if(dynamicData.utilityMachines[0].maxBoost > 0) {
		ctx.beginPath();
		ctx.arc(0,0,120,0,Math.PI*2);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(0,0,126,0,Math.PI*2);
		ctx.stroke();
	}
	
	
	ctx.save();
	for(var i=0;i<4;i++) {
		ctx.rotate(Math.PI/2);
		ctx.translate(-200,-200);
		
		drawElementalTankForeground(ctx);
		
		ctx.translate(200,200);
	}
	ctx.restore();
	
	ctx.strokeRect(-280,-280,560,560);
	
	if(dynamicData.utilityMachines[0].maxBoost > 0) {
		ctx.strokeRect(200,85,76,15);
		ctx.strokeRect(200,60,76,57);
	}
	ctx.translate(-400,-400);
}

function draw4ValverForeground(ctx,x,y) {
	drawSingleValveForeground(ctx,x+3,y+25,3);
	drawSingleValveForeground(ctx,x+3,y+57,2);
	drawSingleValveForeground(ctx,x+55,y+25,0);
	drawSingleValveForeground(ctx,x+55,y+57,1);
}

function draw2ValverForeground(ctx,x,y,elementalIdLeft,elementalIdRight) {
	drawSingleValveForeground(ctx,x+3,y+25,elementalIdLeft);
	drawSingleValveForeground(ctx,x+55,y+25,elementalIdRight);
}

function drawSingleValveForeground(ctx,x,y,elementalId) {
	ctx.save();
	ctx.translate(x+15,y+15);
	
	ctx.beginPath();
	ctx.arc(0,0,10,0,2*Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0,0,7,0,2*Math.PI);
	ctx.stroke();
	for(var i=0;i<12;i++) {
		ctx.rotate(Math.PI/6);
		
		ctx.beginPath();
		ctx.moveTo(7,0);
		ctx.lineTo(10,0);
		ctx.stroke();
	}
	ctx.strokeStyle = staticData.elementalColor[elementalId][1];
	ctx.strokeRect(-15,-15,50,30);
	ctx.beginPath();
	ctx.moveTo(15,-15);
	ctx.lineTo(15,15);
	ctx.stroke();
	ctx.restore();
}

function drawElementalTankForeground(ctx) {
	ctx.beginPath();
	ctx.arc(0,0,80,0,Math.PI/2);
	ctx.lineTo(-80,80);
	ctx.lineTo(-80,-80);
	ctx.lineTo(80,-80);
	ctx.lineTo(80,0);
	ctx.stroke();
}

function drawMainBackground(ctx) {
	ctx.font = "14px Arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.strokeStyle = staticData.borderColor;
	ctx.lineWidth = 3;
	ctx.fillStyle = "#181818";

	var nUpgradesAmount = dynamicData.visibleUpgrades.length;
	if(nUpgradesAmount > 0) {
		ctx.beginPath();
		ctx.moveTo(0,60);
		ctx.lineTo(90,60);
		ctx.arc(90,85,25,-Math.PI/2,0);
		ctx.lineTo(115,90+35*nUpgradesAmount);
		ctx.lineTo(0,90+35*nUpgradesAmount);
		ctx.fill();
		ctx.moveTo(0,85);
		ctx.lineTo(115,85);
		ctx.stroke();
		
		ctx.save();
		ctx.fillStyle = staticData.textColor;
		ctx.fillText("Upgrades",50,72);
		ctx.restore();
		
		ctx.save();
		ctx.translate(3,90);
		for(var i=0;i<nUpgradesAmount;i++) {
			var oUpgrade = staticData.upgrades[dynamicData.visibleUpgrades[i]];
			ctx.fillStyle = staticData.textColor;
			if(dynamicData.upgradesBought[dynamicData.visibleUpgrades[i]]) {
				if(oUpgrade.boughtName.length > 14) {
					ctx.font = "12px Arial";
				} else {
					ctx.font = "14px Arial";
				}
				ctx.fillText(oUpgrade.boughtName,53,15);
			} else {
				if(oUpgrade.name.length > 14) {
					ctx.font = "12px Arial";
				} else {
					ctx.font = "14px Arial";
				}
				ctx.fillText(oUpgrade.name,53,15);
			}
			ctx.translate(0,35);
		}
		ctx.restore();
		
	}
	
	var oMachine;
	ctx.beginPath();
	ctx.moveTo(800,60);
	ctx.lineTo(710,60);
	ctx.arc(710,85,25,-Math.PI/2,Math.PI,true);
	var borderY = 110 + 63*4;
	oMachine = dynamicData.utilityMachines[0];
	if(oMachine.unlocked) {
		borderY+=63;
	}
	oMachine = dynamicData.utilityMachines[1];
	if(oMachine.unlocked) {
		borderY+=95;
	}
	oMachine = dynamicData.utilityMachines[2];
	if(oMachine.unlocked) {
		borderY+=95;
	}
	ctx.lineTo(685,borderY);
	ctx.lineTo(800,borderY);
	ctx.fill();
	ctx.moveTo(800,105);
	ctx.lineTo(685,105);
	ctx.stroke();
	
	ctx.save();
	ctx.fillStyle = staticData.textColor;
	ctx.fillText("Valve",745,72);
	ctx.fillText("Controller",745,92);
	ctx.restore();
	
	ctx.save();
	var y = 110;
	oMachine = dynamicData.conversionMachines[0];
	draw2ValverBackground(ctx,689,y,oMachine.name,0,1,1);
	y+=63;
	oMachine = dynamicData.conversionMachines[1];
	draw2ValverBackground(ctx,689,y,oMachine.name,1,3,2);
	y+=63;
	oMachine = dynamicData.conversionMachines[2];
	draw2ValverBackground(ctx,689,y,oMachine.name,2,3,3);
	y+=63;
	oMachine = dynamicData.conversionMachines[3];
	draw2ValverBackground(ctx,689,y,oMachine.name,0,3,0);
	y+=63;
	oMachine = dynamicData.utilityMachines[0];
	if(oMachine.unlocked) {
		draw2ValverBackground(ctx,689,y,oMachine.name,2,3);
		y+=63;
	}
	oMachine = dynamicData.utilityMachines[1];
	if(oMachine.unlocked) {
		draw4ValverBackground(ctx,689,y,oMachine.name);
		y+=95;
	}
	oMachine = dynamicData.utilityMachines[2];
	if(oMachine.unlocked) {
		draw4ValverBackground(ctx,689,y,oMachine.name);
		y+=95;
	}
	ctx.restore();

	ctx.translate(400,400);
	ctx.fillRect(-280,-280,560,560);
	
	ctx.save();
	for(var i=0;i<4;i++) {
		ctx.rotate(Math.PI/2);
		ctx.translate(-200,-200);
		drawElementalTankBackground(ctx,i);
		ctx.translate(200,200);
	}
	ctx.restore();
	
	if(dynamicData.utilityMachines[0].maxBoost > 0) {
		ctx.save();
		
		ctx.fillStyle = staticData.textColor;
		ctx.fillText("Catalyst",238,73);
		
		var gradient = ctx.createLinearGradient(200,0,276,0);
		gradient.addColorStop(0,"#555555");
		gradient.addColorStop(0.6,"#559955");
		gradient.addColorStop(1,"#995555");
		
		ctx.fillStyle = gradient;
		ctx.fillRect(200, 100, 76, 17);
		
		ctx.restore();
	}
	ctx.translate(-400,-400);
	
	
	ctx.fillRect(120,700,660,80);
	ctx.strokeRect(120,700,660,80);
	
	ctx.save();
	ctx.lineWidth = 2;
	ctx.fillRect(10,700,100,30);
	ctx.strokeRect(10,700,100,30);
	ctx.fillRect(10,750,100,30);
	ctx.strokeRect(10,750,100,30);
	ctx.fillStyle = staticData.textColor;
	ctx.fillText("FAQ",60,715);
	ctx.fillText("Donate",60,765);
	ctx.restore();
}

function draw4ValverBackground(ctx,x,y,machineName) {
	ctx.strokeRect(x,y,108,90);
	ctx.fillStyle = staticData.textColor;
	ctx.fillText(machineName,x+54,y+11);
	ctx.fillStyle = staticData.elementalColor[3][0];
	ctx.fillRect(x+3,y+25,30,30);
	ctx.fillStyle = staticData.elementalColor[2][0];
	ctx.fillRect(x+3,y+57,30,30);
	ctx.fillStyle = staticData.elementalColor[0][0];
	ctx.fillRect(x+55,y+25,30,30);
	ctx.fillStyle = staticData.elementalColor[1][0];
	ctx.fillRect(x+55,y+57,30,30);
}

function draw2ValverBackground(ctx,x,y,machineName,elementalIdLeft,elementalIdRight,elementalProductId) {
	if(elementalProductId > -1) {
		ctx.fillStyle = staticData.elementalColor[elementalProductId][3];
		ctx.fillRect(x,y,108,24);
	}
	ctx.strokeRect(x,y,108,58);
	ctx.fillStyle = staticData.textColor;
	ctx.fillText(machineName,x+54,y+11);
	ctx.fillStyle = staticData.elementalColor[elementalIdLeft][0];
	ctx.fillRect(x+3,y+25,30,30);
	ctx.fillStyle = staticData.elementalColor[elementalIdRight][0];
	ctx.fillRect(x+55,y+25,30,30);
}

function drawElementalTankBackground(ctx,elementId) {
	ctx.save();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#222222";
	ctx.fillStyle = staticData.elementalColor[elementId][2];
	for(var i=dynamicData.stats.pipes.level;i>0;i-=1) {
		ctx.beginPath();
		ctx.arc(80,0,80-i*8,-Math.PI/2,0);
		ctx.arc(200-i*8,0,40,-Math.PI,Math.PI/2,true);
		ctx.lineTo(200,40);
		ctx.lineTo(200,44);
		ctx.lineTo(200-i*8,44);
		ctx.arc(200-i*8,0,44,Math.PI/2,-Math.PI);
		ctx.arc(80,0,76-i*8,0,-Math.PI/2,true);
		ctx.lineTo(80,-80+i*8);
		
		ctx.stroke();
		
		ctx.fill();
	}
	ctx.restore();
	
	ctx.save();
	ctx.fillStyle = staticData.elementalColor[elementId][3];
	ctx.beginPath();
	ctx.arc(0,0,80,0,Math.PI/2);
	ctx.lineTo(-80,80);
	ctx.lineTo(-80,-80);
	ctx.lineTo(80,-80);
	ctx.lineTo(80,0);
	ctx.fill();
	ctx.restore();
}

function drawMainActive(ctx) {
	ctx.font = "14px Arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.strokeStyle = staticData.borderColor;
	ctx.lineWidth = 2;
	ctx.fillStyle = "#181818";
	
	
	drawSidebarsActive(ctx);
	drawFillRatiosActive(ctx);
	
	ctx.translate(400,400);
	
	drawMainSetupActive(ctx);
	drawTankNumbers(ctx);
	
	ctx.translate(-400,-400);
	
	ctx.save();
	ctx.fillStyle = "#080808";
	ctx.beginPath();
	ctx.rect(130,710,640,60);
	ctx.fill();
	ctx.clip();
	
	if(tempData.currentBanner) {
		ctx.fillStyle = staticData.textColor;
		ctx.textAlign = "left";
		ctx.font = "16px Arial";
		ctx.fillText(tempData.currentBanner.text,tempData.currentBannerPosition,740);
		lore.bannerScroll(ctx);
	} else {
		if(tempData.ticksWithoutBanner++ > 24000) {
			lore.idleBanner();
			tempData.ticksWithoutBanner = 0;
		}
	}
	ctx.restore();
}

function drawSidebarsActive(ctx) {	
	ctx.save();
	ctx.translate(3,90);
	for(var i=0;i<dynamicData.visibleUpgrades.length;i++) {
		var oUpgrade = staticData.upgrades[dynamicData.visibleUpgrades[i]];
		if(dynamicData.upgradesBought[dynamicData.visibleUpgrades[i]]) {
			ctx.strokeStyle = "#B5A348";
		} else {
			var bAffordable = true;
			for(var j=0;j<oUpgrade.costs.length;j++) {
				if(oUpgrade.costs[j].amount > dynamicData.elementalTanks[oUpgrade.costs[j].type].amount) {
					bAffordable = false;
				}
			}
			if(bAffordable) {
				ctx.strokeStyle = "#337733";
			} else {
				ctx.strokeStyle = "#773333";
			}
		}
		ctx.strokeRect(0,0,107,30);
		ctx.translate(0,35);
	}
	ctx.restore();
	
	var oMachine;
	var y = 110;
	oMachine = dynamicData.conversionMachines[0];
	draw2ValverActive(ctx,689,y,0,oMachine.ingredient.valve,1,oMachine.reagent.valve);
	y+=63;
	oMachine = dynamicData.conversionMachines[1];
	draw2ValverActive(ctx,689,y,1,oMachine.ingredient.valve,3,oMachine.reagent.valve);
	y+=63;
	oMachine = dynamicData.conversionMachines[2];
	draw2ValverActive(ctx,689,y,2,oMachine.ingredient.valve,3,oMachine.reagent.valve);
	y+=63;
	oMachine = dynamicData.conversionMachines[3];
	draw2ValverActive(ctx,689,y,0,oMachine.ingredient.valve,3,oMachine.reagent.valve);
	y+=63;
	oMachine = dynamicData.utilityMachines[0];
	if(oMachine.unlocked) {
		draw2ValverActive(ctx,689,y,2,oMachine.tanks[0].valve,3,oMachine.tanks[1].valve);
		y+=63;
	}
	oMachine = dynamicData.utilityMachines[1];
	if(oMachine.unlocked) {
		draw4ValverActive(ctx,689,y,oMachine.tanks[3].valve,oMachine.tanks[2].valve,oMachine.tanks[0].valve,oMachine.tanks[1].valve);
		y+=95;
	}
	oMachine = dynamicData.utilityMachines[2];
	if(oMachine.unlocked) {
		draw4ValverActive(ctx,689,y,oMachine.tanks[3].valve,oMachine.tanks[2].valve,oMachine.tanks[0].valve,oMachine.tanks[1].valve);
		y+=95;
	}
}

function draw4ValverActive(ctx,x,y,valve0,valve1,valve2,valve3) {
	drawSingleValveActive(ctx,x+3,y+25,3,valve0);
	drawSingleValveActive(ctx,x+3,y+57,2,valve1);
	drawSingleValveActive(ctx,x+55,y+25,0,valve2);
	drawSingleValveActive(ctx,x+55,y+57,1,valve3);
}

function draw2ValverActive(ctx,x,y,elementalIdLeft,leftValveStatus,elementalIdRight,rightValveStatus) {
	drawSingleValveActive(ctx,x+3,y+25,elementalIdLeft,leftValveStatus);
	drawSingleValveActive(ctx,x+55,y+25,elementalIdRight,rightValveStatus);
}

function drawSingleValveActive(ctx,x,y,elementalId,valveStatus) {
	ctx.save();
	ctx.translate(x+15,y+15);
	if(valveStatus) {
		if(dynamicData.colorblindMode)
			ctx.fillStyle = "#777777";
		else
			ctx.fillStyle = "#337733";
	} else {
		if(dynamicData.colorblindMode)
			ctx.fillStyle = "#333333";
		else
			ctx.fillStyle = "#773333";
	}
	ctx.beginPath();
	ctx.arc(0,0,7,0,2*Math.PI);
	ctx.fill();
	ctx.restore();
}

function drawTooltip(ctx) {
	ctx.save();
	ctx.textAlign = "left";
	ctx.fillRect(120,36,560,79);
	ctx.strokeRect(120,36,560,79);
	
	ctx.fillStyle = staticData.textColor;
	ctx.font = "18px Arial";
	ctx.fillText(canvasTooltip.topRow(),130,52);
	ctx.font = "14px Arial";
	ctx.fillText(canvasTooltip.middleRow(),130,80);
	ctx.font = "11px Arial";
	ctx.fillText(canvasTooltip.bottomRow(),130,100);
	
	ctx.restore();
	ctx.save();
	if(canvasTooltip.additions) {
		for(var i=0;i<canvasTooltip.additions.length;i++) {
			ctx.save();
			var oA = canvasTooltip.additions[i];
			
			if(!oA.special) {
				if(oA.backgroundColor)
					ctx.fillStyle = oA.backgroundColor;
				ctx.fillRect(oA.x,oA.y,oA.w,oA.h);
				
				if(oA.textColor) {
					ctx.fillStyle = oA.textColor;
				} else {
					ctx.fillStyle = staticData.textColor;
				}
					
				
				if(oA.text)
					ctx.fillText(oA.text(),oA.x+5,oA.y+5);
				
				if(oA.borderColor)
					ctx.strokeStyle = oA.borderColor;
				
				ctx.strokeRect(oA.x,oA.y,oA.w,oA.h);
			} else {
				switch(oA.special) {
					case "upgradeCosts":
						for(var j=0;j<staticData.upgrades[canvasTooltip.arg1].costs.length;j++) {
							var cost = staticData.upgrades[canvasTooltip.arg1].costs[j];
							ctx.save();
							ctx.fillStyle = staticData.elementalColor[elementalTranlator[cost.type]][0];
							ctx.textAlign = "right";
							
							ctx.fillText(cost.type,560,49+j*18);
							ctx.font = "16px 'Courier New'";
							drawNumber(ctx,580,50+j*18,cost.amount);
							ctx.restore();
						}
						break;
					case "conversionMachineDisplay":
						var oCM = dynamicData.conversionMachines[canvasTooltip.arg1];
						
						ctx.save();
						ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCM.ingredient.type]][0];
						ctx.textAlign = "right";
						ctx.fillText(oCM.ingredient.type,560,49);
						ctx.font = "16px 'Courier New'";
						drawNumber(ctx,580,50,oCM.ingredient.amount);
						ctx.restore();
						
						ctx.save();
						ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCM.reagent.type]][0];
						ctx.textAlign = "right";
						ctx.fillText(oCM.reagent.type,560,67);
						ctx.font = "16px 'Courier New'";
						drawNumber(ctx,580,68,oCM.reagent.amount);
						ctx.restore();
						break;
					case "utilityTankDisplay":
						var oCM = dynamicData.utilityMachines[canvasTooltip.arg1];
						
						for(var j=0;j<oCM.tanks.length;j++) {
							var oT = oCM.tanks[j];
							ctx.save();
							ctx.fillStyle = staticData.elementalColor[elementalTranlator[oT.type]][0];
							ctx.textAlign = "right";
							ctx.fillText(oT.type,455,49+18*j);
							
							
							ctx.font = "16px 'Courier New'";
							drawNumber(ctx,470,50+18*j,oT.amount);
							drawNumber(ctx,580,50+18*j,oT.capacity,"/ ");
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

function drawMainSetupActive(ctx) {
	ctx.save();
	ctx.rotate(Math.PI*tempData.canvasTicks/2000);
	for(var i=0;i<dynamicData.golems.length;i++) {
		ctx.rotate(Math.PI*2/dynamicData.golems.length);
		ctx.fillStyle = staticData.golems[dynamicData.golems[i]].colors[0];
		ctx.strokeStyle = staticData.golems[dynamicData.golems[i]].colors[1];
		ctx.beginPath();
		ctx.moveTo(29,-4);
		ctx.lineTo(35,0);
		ctx.lineTo(29,4);
		ctx.arc(29,0,4,Math.PI/2,-Math.PI/2);
		ctx.lineTo(35,0);
		ctx.lineWidth = 1;
		ctx.fill();
		ctx.stroke();
		
		ctx.strokeStyle = staticData.borderColor;
		ctx.beginPath();
		ctx.arc(31,0,8,0,Math.PI*2);
		ctx.lineWidth = 1;
		ctx.stroke();
	}
	ctx.restore();
	
	if(dynamicData.utilityMachines[0].maxBoost > 0) {
		ctx.save();
		var tempRota = Math.max(0,Math.min(dynamicData.utilityMachines[0].speed,2*dynamicData.utilityMachines[0].maxSpeed - dynamicData.utilityMachines[0].speed));
		tempData.catalystRota += Math.PI/40*Math.pow(tempRota,1.2);
		ctx.rotate(tempData.catalystRota);
		ctx.lineWidth = 4;
		ctx.beginPath();
		ctx.strokeStyle = "#881111";
		ctx.arc(0,0,123,0,Math.PI);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.fillStyle = "rgba(150,20,20,0.025)";
		ctx.arc(0,0,119,0,Math.PI);
		ctx.arc(0,0,46,Math.PI,0,true);
		ctx.fill();
		
		ctx.rotate(Math.PI);
		ctx.beginPath();
		ctx.strokeStyle = "#555511";
		ctx.arc(0,0,123,0,Math.PI);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.fillStyle = "rgba(150,150,20,0.015)";
		ctx.arc(0,0,119,0,Math.PI);
		ctx.arc(0,0,46,Math.PI,0,true);
		ctx.fill();
		
		ctx.restore();
	}
	
	
	ctx.save();
	tempData.machineRota += -Math.PI/600*dynamicData.stats.machineBonusSpeed*dynamicData.stats.machineGolemSpeed;
	ctx.rotate(tempData.machineRota);
	for(var i=0;i<4;i++) {
		var oCMachine = dynamicData.conversionMachines[i];
		var r1 = oCMachine.ingredient.amount / oCMachine.ingredient.drain;
		var r2 = oCMachine.reagent.amount / oCMachine.reagent.drain;
		var rMax = Math.max(r1,r2);
		r1 /= rMax;
		r2 /= rMax;
		r1 = 1-(1-r1)*(1-r1);
		r2 = 1-(1-r2)*(1-r2);
		
		ctx.rotate(Math.PI/2);
		
		ctx.save();
		ctx.translate(80,0);
		
		ctx.fillStyle = "#060606";
		ctx.beginPath();
		ctx.arc(0,0,31,0,Math.PI*2);
		ctx.fill();
		
		ctx.rotate(tempData.machineRota/2);
		
		ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.ingredient.type]][1];
		ctx.beginPath();
		ctx.arc(0,0,30*r1,0,2*Math.PI);
		ctx.fill();
		
		ctx.strokeStyle = staticData.elementalColor[elementalTranlator[oCMachine.reagent.type]][1];
		ctx.lineWidth = 3;
		for(var j=0;j<4;j++) {
			ctx.beginPath();
			ctx.arc(-13,0,13,0,-3/2*Math.PI*r2,true);
			ctx.stroke();
			ctx.rotate(Math.PI/2);
		}
		
		
		ctx.restore();
		ctx.beginPath();
		ctx.arc(80,0,31,0,Math.PI*2);
		ctx.stroke();
	}
	ctx.restore();
	
	ctx.save();
	ctx.lineWidth = 9;
	ctx.rotate(Math.PI*tempData.canvasTicks/2000);
	var tump = 4;
	tump *= 4;
	for(var i=0;i<tump;i++) {
		ctx.rotate(Math.PI*2/tump);
		
		ctx.strokeStyle = staticData.elementalColor[i%4][1];
		
		ctx.beginPath();
		ctx.arc(0,0,158,0,Math.PI*2/tump);
		ctx.stroke();
	}
	ctx.restore();
	
	ctx.beginPath();
	ctx.arc(0,0,153,0,Math.PI*2);
	ctx.moveTo(163,0);
	ctx.arc(0,0,163,0,Math.PI*2,true);
	ctx.stroke();
	
	ctx.save();
	ctx.rotate(Math.PI*tempData.canvasTicks/350);
	if(dynamicData.utilityMachines[0].maxBoost > 0) {
		var oUMachine = dynamicData.utilityMachines[0];
		var r1 = Math.log10(1+oUMachine.tanks[0].amount);
		while(r1>5) {
			r1-=5;
		}
		r1/=5;
		var r2 = Math.log10(1+oUMachine.tanks[1].amount)
		while(r2>3) {
			r2-=3;
		}
		r2/=3;
		
		ctx.save();
		ctx.translate(131,0);
		
		ctx.beginPath();
		ctx.arc(0,0,32,Math.PI/2,-Math.PI/2,true);
		ctx.fill();
		
		ctx.lineWidth=1;
		
		ctx.fillStyle = staticData.elementalColor[2][1];
		ctx.beginPath();
		ctx.moveTo(0,-32);
		ctx.arc(-131,0,127,-Math.PI/9,0);
		ctx.lineTo(0,0);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(0,0,26,0,-Math.PI/2*r1,true);
		ctx.arc(0,0,16,-Math.PI/2*r1,0);
		ctx.fill();
		ctx.beginPath();
		ctx.arc(0,0,26,0,-Math.PI/2,true);
		ctx.arc(0,0,16,-Math.PI/2,0);
		ctx.stroke();
		
		ctx.fillStyle = staticData.elementalColor[3][1];//dynamicData.utilityMachines[0].tanks[0].
		ctx.beginPath();
		ctx.arc(-131,0,127,0,Math.PI/9);
		ctx.lineTo(0,32);
		ctx.lineTo(0,0);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(0,0,26,Math.PI/2*r2,0,true);
		ctx.arc(0,0,16,0,Math.PI/2*r2);
		ctx.fill();
		ctx.beginPath();
		ctx.arc(0,0,26,Math.PI/2,0,true);
		ctx.arc(0,0,16,0,Math.PI/2);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(0,-32);
		ctx.arc(-131,0,127,-Math.PI/9,Math.PI/9);
		ctx.lineTo(0,32);
		ctx.arc(0,0,32,Math.PI/2,-Math.PI/2,true);
		ctx.stroke();
		
		ctx.restore();
	}
	ctx.rotate(Math.PI);
	if(dynamicData.utilityMachines[2].unlocked) {
		ctx.save();
		ctx.translate(165,0);
		ctx.beginPath();
		ctx.arc(0,0,35,0,Math.PI*2);
		ctx.fill();
		ctx.stroke();
		ctx.rotate(Math.PI*tempData.canvasTicks/7000);
		
		ctx.fillStyle = "#323232";
		ctx.strokeStyle = "#323232";
		ctx.beginPath();
		ctx.arc(0,0,7,0,Math.PI*2);
		ctx.fill();
		
		for(var i=0;i<4;i++) {
			ctx.rotate(Math.PI/2);
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.lineTo(0,35);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(0,0,35,-Math.PI/6,Math.PI/6);
			ctx.fill();
		}
		ctx.rotate(Math.PI/4);
		for(var i=0;i<4;i++) {
			ctx.rotate(Math.PI/2);
			ctx.save();
			ctx.translate(21,0);
			ctx.strokeStyle = staticData.elementalColor[i][1];
			ctx.fillStyle = staticData.elementalColor[i][2];
			ctx.lineWidth = 1;
			for(var j=1;j<5;j++) {
				ctx.beginPath();
				ctx.moveTo(0,12);
				ctx.lineTo(7,7);
				ctx.lineTo(9,0);
				ctx.lineTo(7,-7);
				ctx.lineTo(0,-12);
				ctx.lineTo(-7,-7);
				ctx.lineTo(-9,0);
				ctx.lineTo(-7,7);
				ctx.closePath();
				ctx.fill();
				ctx.stroke();
				
				ctx.scale(0.6,0.6);
				ctx.rotate(Math.PI*tempData.canvasTicks/(100*j));
			}
			
			
			ctx.restore();
		}
		ctx.restore();
	}
	
	
	ctx.restore();
	if(dynamicData.utilityMachines[0].maxBoost > 0) {
		ctx.save();
		
		var x = 200 + 76*Math.min(1,dynamicData.utilityMachines[0].speed/dynamicData.utilityMachines[0].maxSpeed/2);
		
		ctx.save();
		ctx.beginPath();
		ctx.rect(200,100,76,17);
		ctx.clip();
	
		ctx.lineWidth = 1;
		ctx.strokeStyle = "white";
		ctx.moveTo(x,100);
		ctx.lineTo(x,117);
		ctx.moveTo(x+3,109);
		ctx.arc(x,109,3,0,Math.PI*2);
		ctx.stroke();
		ctx.restore();
		
		if(dynamicData.utilityMachines[0].cooldown > 0) {
			ctx.fillStyle = "#666666";
			ctx.fillRect(200,85,76*dynamicData.utilityMachines[0].cooldown/dynamicData.utilityMachines[0].maxCooldown,15);
		}
		ctx.restore();
	}
	
	for(var i=0;i<4;i++) {
		ctx.rotate(Math.PI/2);
		ctx.translate(-180,-180);
		drawElementalTankRift(ctx,i);
		ctx.translate(180,180);
	}
	
	if(dynamicData.nextStagePreview) {
		ctx.fillStyle = "#040404";
		ctx.beginPath();
		ctx.arc(0,0,45,0,Math.PI*2);
		ctx.fill();
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(0,0,18,0,Math.PI*2);
		ctx.fill();
		ctx.stroke();
	}
}

function drawElementalTankRift(ctx,elementId) {
	ctx.save();
	ctx.lineWidth = 4;
	ctx.strokeStyle = staticData.elementalColor[elementId][1];
	ctx.fillStyle = staticData.elementalColor[elementId][2];
	
	ctx.rotate(Math.PI*tempData.canvasTicks/5000);
	
	ctx.beginPath();
	ctx.moveTo(0,40);
	ctx.lineTo(28,28);
	ctx.lineTo(40,0);
	ctx.lineTo(28,-28);
	ctx.lineTo(0,-40);
	ctx.lineTo(-28,-28);
	ctx.lineTo(-40,0);
	ctx.lineTo(-28,28);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	if(dynamicData.rifts.unlocked > elementId) {
		
		//ctx.scale(0.4+Math.log2(dynamicData.rifts.power)/10,1);
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(0,35);
		ctx.lineTo(25,0);
		ctx.lineTo(0,-35);
		ctx.lineTo(-25,0);
		ctx.closePath();
		ctx.stroke();
		
		ctx.fillStyle = "#040404";
		ctx.beginPath();
		ctx.arc(0,0,20,0,Math.PI*2);
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(0,0,16,0,Math.PI*2);
		ctx.lineTo(20,0);
		ctx.stroke();
		
		var progressBar = (dynamicData.rifts.delay/dynamicData.rifts.maxDelay)*Math.PI*2;
		ctx.beginPath();
		ctx.arc(0,0,18,progressBar-Math.PI/4,progressBar);
		ctx.stroke();
	}
	
	ctx.restore();
}


function drawTankNumbers(ctx) {
	var prefix;
	var amount;
	ctx.save();
	
	ctx.fillStyle = staticData.textColor;
	ctx.font = "18px 'Open Sans'";
	ctx.textAlign = "left";
	
	ctx.fillText("Earth",130,-260);
	ctx.fillText("Water",130,260);
	ctx.fillText("Air",-270,260);
	ctx.fillText("Fire",-270,-260);
	
	drawNumber(ctx,185,-258,dynamicData.elementalTanks["Earth"].amount);
	drawNumber(ctx,185,262,dynamicData.elementalTanks["Water"].amount);
	drawNumber(ctx,-215,262,dynamicData.elementalTanks["Air"].amount);
	drawNumber(ctx,-215,-258,dynamicData.elementalTanks["Fire"].amount);
	
	if(dynamicData.elementalTanks["Earth"].change < 0) {
		ctx.fillStyle = "red";
		prefix = "-";
	} else {
		ctx.fillStyle = "green";
		prefix = "+";
	}
	drawNumber(ctx,185,-238,Math.abs(dynamicData.elementalTanks["Earth"].change),prefix);
	if(dynamicData.elementalTanks["Water"].change < 0) {
		ctx.fillStyle = "red";
		prefix = "-";
	} else {
		ctx.fillStyle = "green";
		prefix = "+";
	}
	drawNumber(ctx,185,242,Math.abs(dynamicData.elementalTanks["Water"].change),prefix);
	if(dynamicData.elementalTanks["Fire"].change < 0) {
		ctx.fillStyle = "red";
		prefix = "-";
	} else {
		ctx.fillStyle = "green";
		prefix = "+";
	}
	drawNumber(ctx,-215,-238,Math.abs(dynamicData.elementalTanks["Fire"].change),prefix);
	if(dynamicData.elementalTanks["Air"].change < 0) {
		ctx.fillStyle = "red";
		prefix = "-";
	} else {
		ctx.fillStyle = "green";
		prefix = "+";
	}
	drawNumber(ctx,-215,242,Math.abs(dynamicData.elementalTanks["Air"].change),prefix);
	
	ctx.restore();
}

function drawFillRatiosActive(ctx) {
	ctx.save();
	var oCMachine;
	ctx.lineWidth = 1;
	for(var i=0;i<4;i++) {
		oCMachine = dynamicData.conversionMachines[i];
		
		var r1 = oCMachine.ingredient.amount / oCMachine.ingredient.drain;
		var r2 = oCMachine.reagent.amount / oCMachine.reagent.drain;
		
		var rMax = Math.max(r1,r2);
		r1 /= rMax;
		r2 /= rMax;
		
		ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.ingredient.type]][0];
		ctx.fillRect(722,135+63*i,20,26*r1);	
		ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.reagent.type]][0];
		ctx.fillRect(774,135+63*i,20,26*r2);
	}
	oCMachine = dynamicData.utilityMachines[0];
	if(oCMachine.unlocked) {
		var r1 = Math.log10(1+oCMachine.tanks[0].amount);
		while(r1>5) {
			r1-=5;
		}
		r1/=5;
		var r2 = Math.log10(1+oCMachine.tanks[1].amount)
		while(r2>3) {
			r2-=3;
		}
		r2/=3;
	
		ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[0].type]][0];
		ctx.fillRect(722,135+63*4,20,30*r1);
		ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[1].type]][0];
		ctx.fillRect(774,135+63*4,20,30*r2);
	}
	for(var i=0;i<2;i++) {
		oCMachine = dynamicData.utilityMachines[i+1];
		if(!oCMachine.unlocked)
			continue;
		var r = [];
		for(var j=0;j<4;j++) {
			r.push(Math.log2(1+oCMachine.tanks[j].amount) / Math.log2(1+oCMachine.tanks[j].capacity));
		}
		ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[3].type]][0];
		ctx.fillRect(722,135+63*5+95*i,20,30*r[3]);
		ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[0].type]][0];
		ctx.fillRect(774,135+63*5+95*i,20,30*r[0]);
		ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[2].type]][0];
		ctx.fillRect(722,135+63*5+95*i+32,20,30*r[2]);
		ctx.fillStyle = staticData.elementalColor[elementalTranlator[oCMachine.tanks[1].type]][0];
		ctx.fillRect(774,135+63*5+95*i+32,20,30*r[1]);
	}
	ctx.restore();
}

function drawGolemBackground(ctx) {
	ctx.font = "14px Arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.strokeStyle = staticData.borderColor;
	ctx.lineWidth = 3;
	ctx.fillStyle = "#181818";
	
	ctx.fillRect(120,120,560,560);
	ctx.strokeRect(120,120,560,560);
	
	if(dynamicData.mergingButton) {
		ctx.fillStyle = staticData.textColor;
		ctx.strokeRect(350,130,100,30);
		ctx.fillText("Combine",400,145);
		
		ctx.strokeRect(330,170,60,30);
		ctx.strokeRect(410,170,60,30);
	}
}

function drawGolemActive(ctx) {
	ctx.save();
	ctx.font = "14px Arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.strokeStyle = staticData.borderColor;
	ctx.lineWidth = 3;
	ctx.fillStyle = staticData.textColor;
	if(dynamicData.mergingButton) {
		if(tempData.mergingGolems[0])
			ctx.fillText(tempData.mergingGolems[0],360,185);
		if(tempData.mergingGolems[1])
			ctx.fillText(tempData.mergingGolems[1],440,185);
	}
	ctx.translate(400,400);
	
	
	
	for(var i=0;i<dynamicData.golems.length;i++) {
		var oG = staticData.golems[dynamicData.golems[i]];
		ctx.save();
		if(dynamicData.golems[i] == "Infernal") {
			var scale = 0;
			for(var j=0;j<4;j++) {
				scale += dynamicData.elementalTanks[elem[j]].amount;
			}
			if(scale > 4e90) {
				scale/=4;
				scale = Math.log10(1+scale);
				scale-=90;
				scale/=20;
				scale = Math.min(scale,1);
				ctx.scale(1+scale,1+scale);
			}
		}
		
		if(dynamicData.golems[i] === tempData.mergingGolems[0] || dynamicData.golems[i] === tempData.mergingGolems[1]) {
			ctx.save();
			ctx.fillStyle = "#999999";
			ctx.beginPath();
			ctx.arc(oG.x,oG.y,50,0,Math.PI*2);
			ctx.fill();
			ctx.restore();
		}
		drawGolem(ctx,oG.x,oG.y,oG.colors,oG.rotatingSpeed);
		ctx.restore();
	}
	
	ctx.translate(-400,-400);
	ctx.restore();
}

function drawGolem(ctx,x,y,colors,rotatingSpeed) {
	ctx.save();
	ctx.translate(x,y);
	ctx.fillStyle = colors[0];
	ctx.strokeStyle = colors[1];
	
	ctx.beginPath();
	ctx.arc(0,0,40,-Math.PI/6,Math.PI*7/6);
	ctx.lineTo(0,-80);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	
	ctx.save();
	ctx.fillStyle = colors[2];
	ctx.rotate(tempData.canvasTicks/200 * rotatingSpeed);
	for(var i=0;i<2;i++) {
		ctx.rotate(Math.PI);
		ctx.beginPath();
		ctx.arc(20,0,15,0,2*Math.PI);
		ctx.fill();
	}
	ctx.restore();
	
	ctx.restore();
}

function drawLoreActive(ctx) {
	ctx.lineWidth = 2;
	ctx.fillRect(230,60,140,40);
	ctx.strokeRect(230,60,140,40);
	ctx.fillRect(430,60,140,40);
	ctx.strokeRect(430,60,140,40);
	
	ctx.fillRect(100,140,600,600);
	ctx.strokeRect(100,140,600,600);
	
	ctx.fillStyle = "rgba(255,255,255,0.03)";
	ctx.strokeStyle = "rgba(255,255,255,0.1)";
	ctx.fillRect(100,140,600,60);
	ctx.fillRect(100,680,600,60);
	
	ctx.beginPath();
	ctx.moveTo(120,180);
	ctx.lineTo(130,160);
	ctx.lineTo(140,180);
	ctx.moveTo(680,180);
	ctx.lineTo(670,160);
	ctx.lineTo(660,180);
	
	ctx.moveTo(120,700);
	ctx.lineTo(130,720);
	ctx.lineTo(140,700);
	ctx.moveTo(680,700);
	ctx.lineTo(670,720);
	ctx.lineTo(660,700);
	ctx.stroke();
	
	
	
	ctx.fillStyle = staticData.textColor;
	ctx.textAlign = "center";
	ctx.fillText("Scroll to top",300,80);
	ctx.fillText("Scroll to bottom",500,80);
	
	ctx.beginPath();
	ctx.rect(100,140,600,600);
	ctx.clip();
	
	tempData.loreScroll = Math.max(0,Math.min(dynamicData.lore.maxScroll,tempData.loreScroll+tempData.loreScrollSpeed));
	var y=150-tempData.loreScroll%20;
	var startingMessage = ~~(tempData.loreScroll/20)-1;
	
	for(var i=~~(tempData.loreScroll/20);i<dynamicData.lore.messages.length;i++) {
		ctx.fillText(dynamicData.lore.messages[i],400,y);
		y+=20;
		if(y>750) {
			break;
		}
	}
}

function drawStatsActive(ctx) {
	ctx.fillRect(100,100,600,660);
	ctx.strokeRect(100,100,600,660);
	
	if(achievementsData.achievementsUnlocked) {
		ctx.save();
		ctx.font = "18px Arial";
		ctx.textAlign = "center";
		ctx.fillStyle = staticData.textColor;
		ctx.fillText("Achievements - Soft Reset lets you try to get them all.",400,130);
		var y = 160;
		for(var achievementId in achievementsData.achievementList) {
			var achievement = achievementsData.achievementList[achievementId];
			ctx.save();
			
			ctx.fillText(achievement.name,400,y+20);
			ctx.font = "14px Arial";
			if(achievementId==='speed') {
				if(!dynamicData.startTime) {
					ctx.fillText("Finish stage under 90 min. Your timer will start on next Soft Reset.",400,y+55);
				} else {
					var shownTime = Math.floor(achievement.time/60000)+achievement.time%60000/100000;
					shownTime = Math.floor(shownTime*100)/100;
					if(achievement.unlocked) {
						ctx.fillText("Your best time: "+shownTime.toFixed(2)+" min - Developer's time 66.38 min.",400,y+45);
					} else {
						ctx.fillText("Finish stage under 90 min. Your current best time : "+shownTime.toFixed(2)+" min.",400,y+45);
					}
					var time = ((new Date()) - dynamicData.startTime);
					shownTime = Math.floor(time/60000)+time%60000/100000;
					shownTime = Math.floor(shownTime*100)/100;
					ctx.font = "10px Arial";
					ctx.fillText("Current run : "+shownTime.toFixed(2)+" min",400,y+65);
				}
				
			} else {
				ctx.fillText(achievement.description,400,y+55);
			}
			
			if(achievement.unlocked) {
				ctx.strokeStyle = "#B5A348";
			} else {
				ctx.strokeStyle = "#773333";
			}
			ctx.strokeRect(180,y,440,75);
			y+=85;
			ctx.restore();
		}
		ctx.restore();
	} else {
		ctx.save();
		ctx.font = "18px Arial";
		ctx.textAlign = "center";
		ctx.fillStyle = staticData.textColor;
		ctx.fillText("Finish the game once to unlock achievements.",400,130);
		ctx.restore();
	}
}

function drawOptionsActive(ctx) {
	ctx.font = "14px Arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.strokeStyle = staticData.borderColor;
	ctx.lineWidth = 2;
	ctx.fillStyle = "#181818";
	
	ctx.fillRect(330,120,140,40);
	ctx.strokeRect(330,120,140,40);
	
	ctx.fillRect(330,180,140,40);
	ctx.strokeRect(330,180,140,40);
	
	ctx.fillRect(330,240,140,40);
	ctx.strokeRect(330,240,140,40);
	
	ctx.fillRect(100,300,200,40);
	ctx.strokeRect(100,300,200,40);
	
	ctx.fillRect(500,300,200,40);
	ctx.strokeRect(500,300,200,40);
	
	ctx.fillRect(220,400,160,40);
	ctx.strokeRect(220,400,160,40);
	
	ctx.fillRect(420,400,160,40);
	ctx.strokeRect(420,400,160,40);
	
	ctx.fillStyle = staticData.textColor;
	ctx.fillText("Manual Save",400,140);
	ctx.fillText("Manual Load",400,200);
	ctx.fillText("Soft Reset",400,260);
	if(dynamicData.colorblindMode) {
		ctx.fillText("Turn colorblind valves mode off.",200,320);
	} else {
		ctx.fillText("Turn colorblind valves mode on.",200,320);
	}
	ctx.fillText("Go back to stage select.",600,320);
	ctx.fillText("Experimental Import",300,420);
	ctx.fillText("Experimental Export",500,420);
}

function drawNumber(ctx,x,y,amount,prefix) {
	ctx.save();
	ctx.font = "16px 'Courier New'";
	if(prefix) {
		ctx.textAlign = "right";
		ctx.fillText(prefix,x,y);
	}
	if(amount > 9999) {
		ctx.textAlign = "left";
		ctx.fillText(amount.toExponential(2).replace('+',''),x,y);
	} else {
		ctx.textAlign = "right";
		ctx.fillText(amount.toFixed(1),x+57,y);
	}
	
	ctx.restore();
}

function estimateBannerLength(bannerText,ctx) {
	return ctx.measureText(bannerText).width;
}

function drawFAQ(ctx) {
	ctx.save();
	ctx.globalAlpha = 0.9;
	ctx.fillRect(120,120,560,560);
	ctx.strokeRect(120,120,560,560);
	ctx.globalAlpha = 1;
	ctx.fillStyle = staticData.textColor;
	ctx.textAlign = "center";
	ctx.fillText("Frequently asked questions",400,160);
	ctx.textAlign = "left";
	ctx.fillText("Q1 : Why can't I see capacity of the machines?",160,200);
	ctx.fillText("A1 : With new crystals machines have near infinite capacity. (1e300)",160,220);
	ctx.fillText("Q2 : When gauge on machine looks full, why Element still flows into it?",160,260);
	ctx.fillText("A2 : With new capacity gauges behave differently. They show",160,280);
	ctx.fillText(     "ratio of Elements inside machine. This helps you visualise",190,300);
	ctx.fillText(     "which part of conversion recipe would need improvement.",190,320);
	ctx.fillText("Q3 : I have both valves open on machine, but I don't produce anything. Help?",160,360);
	ctx.fillText("A3 : 1. Secondary value on tank shows absolute change of amount per second.",160,380);
	ctx.fillText(     "2. Before you get specific upgrade there are no limits in amount",190,400);
	ctx.fillText(     "Element that can flow into machine, which sometimes can lead to",190,420);
	ctx.fillText(     "situation where everything you produce just flows into machines.",190,440);
	ctx.fillText(     "Try disabling valve with dominant Element and enable valve with lesser one.",190,460);
	ctx.fillText(     "This will empty out the machine over time.",190,480);
	ctx.fillText("Q4 : How does Stash work exactly?",160,520);
	ctx.fillText("A4 : Whenever you make a golem or buy an upgrade stash activates,",160,540);
	ctx.fillText(     "letting out nth root of stored Elements. At first it's 4th root,",190,560);
	ctx.fillText(     "but with futher upgrades it can get up to square root.",190,580);
	ctx.fillText("Q5 : Is Mayonnaisse an Element?",160,620);
	ctx.fillText("A5 : No. I don't know what are you talking about.",160,640);
}

function drawDonate(ctx) {
	ctx.font = "14px Arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.strokeStyle = staticData.borderColor;
	ctx.lineWidth = 2;
	ctx.fillStyle = "#181818";
	
	ctx.fillRect(150,200,500,300);
	ctx.strokeRect(150,200,500,300);
	
	ctx.strokeRect(330,450,140,40);
	
	ctx.strokeRect(330,450,140,40);
	ctx.strokeRect(230,350,140,40);
	ctx.strokeRect(430,350,140,40);
	
	ctx.fillStyle = staticData.textColor;
	
	ctx.fillText("Patreon",300,370);
	ctx.fillText("Paypal",500,370);
	ctx.fillText("Go back",400,470);
	
	ctx.fillText("This it the place if you really enjoyed my game",400,230);
	ctx.fillText("and want to support me financially.",400,252);
	ctx.fillText("Here are the links which you can use to do so.",400,274);
}
