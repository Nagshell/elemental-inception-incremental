function startCutscene(cutId) {
	cutsceneActive = cutscenes[cutId];
	
	cutsceneActive.segmentTimePassed = 0;
	cutsceneActive.segmentCount = 0;
	
	cutsceneActive.startCutscene();
}

function endCutscene() {
	cutsceneActive = null;
}
function startDraw() {
	ctxActive.setTransform(1, 0, 0, 1, 0, 0);
	ctxActive.clearRect(0,0,800,800);
	ctxActive.font = "14px Arial";
	ctxActive.textBaseline = "middle";
	ctxActive.textAlign = "center";
	ctxActive.strokeStyle = staticData.borderColor;
	ctxActive.lineWidth = 2;
	ctxActive.fillStyle = "#181818";
}

function endDraw() {
	if(cutsceneActive && cutsceneActive.skipable) {
		ctxActive.beginPath();
		ctxActive.arc(100,100,45,0,Math.PI*2);
		ctxActive.fill();
		ctxActive.stroke();
		ctxActive.fillStyle = staticData.textColor;
		ctxActive.fillText("Skip",100,100);
	}
}

var cutsceneActive = false;

var cutsceneCanvas = [];
var cutsceneCanvasCtx = [];
var currentCtx = null;

var cutscenes = {
	"combine" : {
		"segmentTimePassed" : 0,
		"segmentCount" : 0,
		"quickMode" : false,
		"segmentDuration" : [2000,30000,30000,12000,6000,4000,4000,0],
		"segmentDurationQuick" : [1000,4000,10000,10000,500,500,500,0],
		"colors1" : null,
		"colors2" : null,
		"colors3" : null,
		"rotation" : Math.PI/2,
		"maxRotSpeed" : 0.2,
		"maxRotSpeedQuick" : 0.15,
		"slowRotSpeed" : 0.08,
		"startCutscene" : function() {
			
			var g1 = tempData.mergingGolems[0];
			var g2 = tempData.mergingGolems[1];
			cutsceneActive.colors1 = staticData.golems[g1].colors; 
			cutsceneActive.colors2 = staticData.golems[g2].colors;
			cutsceneActive.colors3 = staticData.golems[staticData.golems[g1].combine[g2]].colors;
			cutsceneActive.rotation = Math.PI/2;
			if(cutsceneCanvas.length < 1) {
				var newCanvas = document.createElement("canvas");
				cutsceneCanvas.push(newCanvas);
				newCanvas.width = 800;
				newCanvas.height = 800;
				cutsceneCanvasCtx.push(newCanvas.getContext("2d"));
			}
			
			for(var i=0;i<cutsceneCanvasCtx.length;i++) {
				cutsceneCanvasCtx[i].clearRect(0,0,800,800);
			}
			
			cutsceneActive.quickMode = achievementsData.mergeWatched;
			cutsceneActive.skipable = achievementsData.mergeWatched;
			currentCtx = cutsceneCanvasCtx[0];
			currentCtx.lineWidth = 2;
			currentCtx.fillStyle = "#000000";
		},
		"advanceCutscene" : function(timePassed) {
			cutsceneActive.segmentTimePassed += timePassed;
			var tDura = 0;
			if(cutsceneActive.quickMode) {
				tDura = cutsceneActive.segmentDurationQuick[cutsceneActive.segmentCount];
			} else {
				tDura = cutsceneActive.segmentDuration[cutsceneActive.segmentCount];
			}
			if(tDura > 0 && cutsceneActive.segmentTimePassed > tDura) {
				cutsceneActive.segmentTimePassed -= tDura;
				cutsceneActive.segmentCount++;
				tDura = cutsceneActive.segmentDuration[cutsceneActive.segmentCount];
			}
			var tTime = cutsceneActive.segmentTimePassed;
			if(tDura !== 0) {
				tTime /= tDura;
			}
			startDraw();
			ctxActive.fillStyle = "#080808";
			ctxActive.fillRect(50,50,700,700);
			
			currentCtx.save();
			currentCtx.translate(400,400);
			currentCtx.fillStyle = "#000000";
			currentCtx.strokeStyle = staticData.borderColor;
			currentCtx.globalAlpha=1;
			cutsceneActive.drawSegments[cutsceneActive.segmentCount](tTime);
			currentCtx.restore();
			
			ctxActive.drawImage(cutsceneCanvas[0],0,0);
			endDraw();
		},
		"drawSegments" : [
			function(tRatio) {
				currentCtx.beginPath();
				currentCtx.arc(0,0,190,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				tRatio = 1-tRatio;
				
				currentCtx.rotate(cutsceneActive.rotation);
				cutsceneActive.drawGolem(0,82+40*tRatio,-0.5*Math.PI*tRatio,cutsceneActive.colors1,true);
				currentCtx.rotate(Math.PI);
				cutsceneActive.drawGolem(0,82+40*tRatio,0.5*Math.PI*tRatio,cutsceneActive.colors2,true);
			},
			function(tRatio) {
				currentCtx.fillStyle = "rgba(0,0,0,0.04)";
				currentCtx.beginPath();
				currentCtx.arc(0,0,190,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				var tRot = 0;
				if(cutsceneActive.quickMode) {
					tRot = cutsceneActive.maxRotSpeedQuick*Math.PI*Math.pow(tRatio,3);
				} else {
					tRot = cutsceneActive.maxRotSpeed*Math.PI*Math.pow(tRatio,3);
				}
				
				
				cutsceneActive.rotation+=tRot;
				currentCtx.rotate(cutsceneActive.rotation);
				currentCtx.globalAlpha=0.4;
				cutsceneActive.drawGolem(0,82,0,cutsceneActive.colors1,true);
				currentCtx.rotate(Math.PI);
				cutsceneActive.drawGolem(0,82,0,cutsceneActive.colors2,true);
				
				currentCtx.globalAlpha=0.1*tRatio;
				currentCtx.beginPath();
				currentCtx.arc(0,0,130,0,Math.PI*2);
				currentCtx.stroke();
				currentCtx.strokeStyle = "#040404";
				currentCtx.beginPath();
				currentCtx.arc(0,0,126,0,Math.PI*2);
				currentCtx.stroke();
			},
			function(tRatio) {
				
				currentCtx.fillStyle = "rgba(0,0,0,0.01)";
				currentCtx.beginPath();
				currentCtx.arc(0,0,190,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				var tRot = 0;
				if(cutsceneActive.quickMode) {
					tRot = cutsceneActive.maxRotSpeedQuick*Math.PI*Math.pow(1-tRatio,1.5);
				} else {
					tRot = cutsceneActive.maxRotSpeed*Math.PI*Math.pow(1-tRatio,1.5);
				}
				
				cutsceneActive.rotation+=tRot+tRatio*0.01*Math.PI;
				currentCtx.rotate(cutsceneActive.rotation);
				currentCtx.globalAlpha=0.4;
				cutsceneActive.drawGolem(0,82+80*tRatio,tRatio*Math.PI/2,cutsceneActive.colors1,true);
				currentCtx.rotate(Math.PI);
				cutsceneActive.drawGolem(0,82+80*tRatio,tRatio*Math.PI/2,cutsceneActive.colors2,true);
				
				currentCtx.globalAlpha=0.1;
				currentCtx.beginPath();
				currentCtx.arc(0,0,130+80*tRatio,0,Math.PI*2);
				currentCtx.stroke();
				currentCtx.strokeStyle = "#040404";
				currentCtx.beginPath();
				currentCtx.arc(0,0,126+80*tRatio,0,Math.PI*2);
				currentCtx.stroke();
			},
			function(tRatio) {
				currentCtx.fillStyle = "rgba(0,0,0,0.014)";
				currentCtx.beginPath();
				currentCtx.arc(0,0,190,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				var tRot = cutsceneActive.slowRotSpeed*Math.PI*Math.pow(tRatio,1);
				
				cutsceneActive.rotation+=tRot+(1-tRatio)*0.01*Math.PI;
				currentCtx.rotate(cutsceneActive.rotation);
				currentCtx.globalAlpha=0.4;
				cutsceneActive.drawGolem(0,162-121*tRatio,Math.PI/2,cutsceneActive.colors1,true);
				currentCtx.rotate(Math.PI);
				cutsceneActive.drawGolem(0,162-121*tRatio,Math.PI/2,cutsceneActive.colors2,true);
			},
			function(tRatio) {
				currentCtx.fillStyle = "rgba(0,0,0,0.14)";
				currentCtx.beginPath();
				currentCtx.arc(0,0,190,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				cutsceneActive.rotation+=cutsceneActive.slowRotSpeed*Math.PI;
				
				currentCtx.rotate(cutsceneActive.rotation);
				currentCtx.globalAlpha=0.4-0.4*tRatio;
				cutsceneActive.drawGolem(0,42,Math.PI/2,cutsceneActive.colors1,true);
				currentCtx.globalAlpha=0.6*tRatio;
				cutsceneActive.drawCurvedGolem(0,42,Math.PI/2,cutsceneActive.colors1);
				
				currentCtx.rotate(Math.PI);
				currentCtx.globalAlpha=0.4-0.4*tRatio;
				cutsceneActive.drawGolem(0,42,Math.PI/2,cutsceneActive.colors2,true);
				currentCtx.globalAlpha=0.6*tRatio;
				cutsceneActive.drawCurvedGolem(0,41,Math.PI/2,cutsceneActive.colors2);
			},
			function(tRatio) {
				currentCtx.fillStyle = "rgba(0,0,0,0.3)";
				currentCtx.beginPath();
				currentCtx.arc(0,0,190,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				cutsceneActive.rotation+=cutsceneActive.slowRotSpeed*Math.PI;
				
				currentCtx.globalAlpha=0.6-0.6*tRatio;
				currentCtx.rotate(cutsceneActive.rotation);
				cutsceneActive.drawCurvedGolem(0,42,Math.PI/2,cutsceneActive.colors1);
				currentCtx.rotate(Math.PI);
				cutsceneActive.drawCurvedGolem(0,41,Math.PI/2,cutsceneActive.colors2);
				
				currentCtx.globalAlpha=tRatio;
				currentCtx.rotate(Math.PI/2);
				cutsceneActive.drawCombinedGolem(0,0,0,cutsceneActive.colors3);
			},
			function(tRatio) {
				currentCtx.beginPath();
				currentCtx.arc(0,0,190,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				cutsceneActive.rotation+=cutsceneActive.slowRotSpeed*Math.PI*(1-tRatio);
				currentCtx.rotate(cutsceneActive.rotation+Math.PI/2);
				cutsceneActive.drawCombinedGolem(0,0,0,cutsceneActive.colors3);
			},
			function() {
				achievementsData.mergeWatched = true;
				endCutscene();
			}
		],
		"drawGolem" : function(x,y,rot,colors,eyes) {
			currentCtx.save();
			currentCtx.translate(x,y);
			currentCtx.rotate(rot);
			currentCtx.fillStyle = colors[0];
			currentCtx.strokeStyle = colors[1];
			
			currentCtx.beginPath();
			currentCtx.arc(0,0,40,-Math.PI/6,Math.PI*7/6);
			currentCtx.lineTo(0,-80);
			currentCtx.closePath();
			currentCtx.fill();
			currentCtx.stroke();
			
			if(eyes) {
				currentCtx.save();
				currentCtx.fillStyle = colors[2];
				currentCtx.rotate(2*Math.PI*cutsceneActive.segmentTimePassed/2000);
				for(var i=0;i<2;i++) {
					currentCtx.rotate(Math.PI);
					currentCtx.beginPath();
					currentCtx.arc(20,0,15,0,2*Math.PI);
					currentCtx.fill();
				}
				currentCtx.restore();
			}
			currentCtx.restore();
		},
		"drawCurvedGolem" : function(x,y,rot,colors) {
			currentCtx.save();
			currentCtx.lineWidth = 1;
			currentCtx.translate(x,y);
			currentCtx.rotate(rot);
			currentCtx.fillStyle = colors[0];
			currentCtx.strokeStyle = colors[1];
			
			currentCtx.beginPath();
			currentCtx.arc(0,0,41,0,Math.PI);
			currentCtx.arc(-82,0,41,0,Math.PI,true);
			currentCtx.arc(-41,0,82,Math.PI,0);
			currentCtx.closePath();
			currentCtx.fill();
			//currentCtx.stroke();
			
			currentCtx.restore();
		},
		"drawCombinedGolem" : function(x,y,rot,colors) {
			currentCtx.save();
			currentCtx.translate(x,y);
			currentCtx.rotate(rot);
			currentCtx.fillStyle = colors[0];
			currentCtx.strokeStyle = colors[1];
			
			currentCtx.beginPath();
			currentCtx.arc(0,0,82,0,2*Math.PI);
			currentCtx.closePath();
			currentCtx.fill();
			currentCtx.stroke();
			
			currentCtx.save();
			currentCtx.fillStyle = colors[2];
			//currentCtx.rotate(-2*Math.PI*cutsceneActive.segmentTimePassed/4000);
			for(var i=0;i<2;i++) {
				currentCtx.rotate(Math.PI);
				currentCtx.beginPath();
				currentCtx.arc(40,0,25,0,2*Math.PI);
				currentCtx.fill();
			}
			currentCtx.restore();
			
			currentCtx.restore();
		}
	},
	"eat" : {
		"segmentTimePassed" : 0,
		"segmentCount" : 0,
		"segmentDuration" : [2000,2000,8000,1000,0],
		"ballPart" : 1/12,
		"colors" : null,
		"golemType" : null,
		"startCutscene" : function() {
			cutsceneActive.colors = staticData.golems[cutsceneActive.golemType].colors;
			
			if(cutsceneCanvas.length < 1) {
				var newCanvas = document.createElement("canvas");
				cutsceneCanvas.push(newCanvas);
				newCanvas.width = 800;
				newCanvas.height = 800;
				cutsceneCanvasCtx.push(newCanvas.getContext("2d"));
			}
			
			for(var i=0;i<cutsceneCanvasCtx.length;i++) {
				cutsceneCanvasCtx[i].clearRect(0,0,800,800);
			}
			
			currentCtx = cutsceneCanvasCtx[0];
			currentCtx.lineWidth = 3;
			currentCtx.fillStyle = "#181818";
			currentCtx.fillRect(50,50,700,700);
		},
		"advanceCutscene" : function(timePassed) {
			cutsceneActive.segmentTimePassed += timePassed;
			var tDura = cutsceneActive.segmentDuration[cutsceneActive.segmentCount];
			if(tDura > 0 && cutsceneActive.segmentTimePassed > tDura) {
				cutsceneActive.segmentTimePassed -= tDura;
				cutsceneActive.segmentCount++;
				tDura = cutsceneActive.segmentDuration[cutsceneActive.segmentCount];
			}
			var tTime = cutsceneActive.segmentTimePassed;
			if(tDura !== 0) {
				tTime /= tDura;
			}
			startDraw();
			
			ctxActive.fillStyle = "#181818";
			ctxActive.fillRect(50,50,700,700);
			
			currentCtx.save();
			currentCtx.translate(400,400);
			currentCtx.fillStyle = "#000000";
			currentCtx.globalAlpha=1;
			currentCtx.rotate(Math.PI/2);
			cutsceneActive.drawSegments[cutsceneActive.segmentCount](tTime);
			currentCtx.restore();
			
			ctxActive.drawImage(cutsceneCanvas[0],0,0);
		},
		"drawSegments" : [
			function(tRatio) {
				currentCtx.beginPath();
				currentCtx.arc(0,0,250,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				tRatio = 1-tRatio;
				
				cutsceneActive.drawGolem(0,160+40*tRatio,-0.5*Math.PI*tRatio,1);
				currentCtx.rotate(Math.PI);
				cutsceneActive.drawGolem(0,160+40*tRatio,0.5*Math.PI*tRatio,1);
			},
			function(tRatio) {
				currentCtx.beginPath();
				currentCtx.arc(0,0,250,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				currentCtx.save();
				currentCtx.globalAlpha=tRatio;
				currentCtx.strokeStyle = cutsceneActive.colors[1];
				currentCtx.lineWidth = 5;
				currentCtx.beginPath();
				currentCtx.moveTo(0,160);
				currentCtx.lineTo(0,-160);
				currentCtx.stroke();
				currentCtx.restore();
				
				cutsceneActive.drawGolem(0,160,0,1);
				currentCtx.rotate(Math.PI);
				cutsceneActive.drawGolem(0,160,0,1);
			},
			function(tRatio) {
				currentCtx.fillStyle = "rgba(0,0,0,0.3)";
				currentCtx.beginPath();
				currentCtx.arc(0,0,250,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				var firstReached = false;
				var ballRatio = tRatio;
				while(ballRatio >= cutsceneActive.ballPart) {
					ballRatio -= cutsceneActive.ballPart;
					firstReached = true;
				}
				ballRatio /= cutsceneActive.ballPart;
				
				if(firstReached) {
					if(ballRatio < 0.6) {
						cutsceneActive.drawGolemHighlight(0,-160,Math.PI,1+ballRatio);
					} else {
						cutsceneActive.drawGolemHighlight(0,-160,Math.PI,3.4-3*ballRatio);
					}
				}
				currentCtx.save();
				currentCtx.strokeStyle = cutsceneActive.colors[1];
				currentCtx.lineWidth = 5;
				currentCtx.beginPath();
				currentCtx.moveTo(0,160);
				currentCtx.lineTo(0,-160);
				currentCtx.stroke();
				currentCtx.restore();
				
				
				
				cutsceneActive.drawBall(0,160-320*ballRatio);
				
				cutsceneActive.drawGolem(0,160,0,1-0.8*tRatio);
				currentCtx.rotate(Math.PI);
				if(firstReached) {
					if(ballRatio < 0.2) {
						cutsceneActive.drawGolem(0,160,0,1+ballRatio);
					} else {
						cutsceneActive.drawGolem(0,160,0,4/3-2/3*Math.min(ballRatio,0.5));
					}
				} else {
					cutsceneActive.drawGolem(0,160,0,1);
				}
			},
			function(tRatio) {
				currentCtx.fillStyle = "rgba(0,0,0,0.3)";
				currentCtx.beginPath();
				currentCtx.arc(0,0,250,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				if(tRatio < 0.8) {
					cutsceneActive.drawGolemHighlight(0,160,0,0.2+tRatio);
				} else {
					cutsceneActive.drawGolemHighlight(0,160,0,1-(tRatio-0.8)/0.2);
				}
				if(tRatio < 0.6) {
					cutsceneActive.drawGolemHighlight(0,-160,Math.PI,1+tRatio);
				} else {
					cutsceneActive.drawGolemHighlight(0,-160,Math.PI,3.4-3*tRatio);
				}
				
				
				currentCtx.save();
				currentCtx.globalAlpha=1-tRatio;
				currentCtx.strokeStyle = cutsceneActive.colors[1];
				currentCtx.lineWidth = 5;
				currentCtx.beginPath();
				currentCtx.moveTo(0,160);
				currentCtx.lineTo(0,-160);
				currentCtx.stroke();
				currentCtx.restore();
				
				cutsceneActive.drawGolem(0,160,0,0.2-0.2*	tRatio);
				currentCtx.rotate(Math.PI);
				if(tRatio < 0.2) {
						cutsceneActive.drawGolem(0,160,0,1+tRatio);
					} else {
						cutsceneActive.drawGolem(0,160,0,4/3-2/3*Math.min(tRatio,0.5));
					}
			},
			function() {
				endCutscene();
			}
		],
		"drawGolem" : function(x,y,rot,scale) {
			currentCtx.save();
			currentCtx.translate(x,y);
			currentCtx.rotate(rot);
			currentCtx.scale(scale,scale);
			currentCtx.fillStyle = cutsceneActive.colors[0];
			currentCtx.strokeStyle = cutsceneActive.colors[1];
			
			currentCtx.beginPath();
			currentCtx.arc(0,0,40,-Math.PI/6,Math.PI*7/6);
			currentCtx.lineTo(0,-80);
			currentCtx.closePath();
			currentCtx.fill();
			currentCtx.stroke();
			
			currentCtx.save();
			currentCtx.fillStyle = cutsceneActive.colors[2];
			currentCtx.rotate(2*Math.PI*cutsceneActive.segmentTimePassed/4000);
			for(var i=0;i<2;i++) {
				currentCtx.rotate(Math.PI);
				currentCtx.beginPath();
				currentCtx.arc(20,0,15,0,2*Math.PI);
				currentCtx.fill();
			}
			currentCtx.restore();
			
			currentCtx.restore();
		},
		"drawGolemHighlight" : function(x,y,rot,scale) {
			currentCtx.save();
			currentCtx.lineWidth = 1;
			currentCtx.translate(x,y);
			currentCtx.rotate(rot);
			currentCtx.scale(scale,scale);
			currentCtx.fillStyle = "rgba(255,255,255,0.05)";
			
			currentCtx.beginPath();
			currentCtx.arc(0,0,40,-Math.PI/6,Math.PI*7/6);
			currentCtx.lineTo(0,-80);
			currentCtx.closePath();
			currentCtx.fill();
			
			currentCtx.restore();
		},
		"drawBall" : function(x,y) {
			currentCtx.save();
			currentCtx.translate(x,y);
			currentCtx.fillStyle = cutsceneActive.colors[0];
			currentCtx.strokeStyle = cutsceneActive.colors[1];
			
			currentCtx.beginPath();
			currentCtx.arc(0,0,8,Math.PI/6,-Math.PI*7/6,true);
			currentCtx.lineTo(0,16);
			currentCtx.closePath();
			currentCtx.fill();
			currentCtx.stroke();
			
			
			currentCtx.restore();
		}
	},
	"preview" : {
		"segmentTimePassed" : 0,
		"segmentCount" : 0,
		"segmentDuration" : [8000,4000,10000,6000,0],
		"startCutscene" : function() {

			if(cutsceneCanvas.length < 1) {
				var newCanvas = document.createElement("canvas");
				cutsceneCanvas.push(newCanvas);
				newCanvas.width = 800;
				newCanvas.height = 800;
				cutsceneCanvasCtx.push(newCanvas.getContext("2d"));
			}
			
			for(var i=0;i<cutsceneCanvasCtx.length;i++) {
				cutsceneCanvasCtx[i].clearRect(0,0,800,800);
			}
			
			currentCtx = cutsceneCanvasCtx[0];
			currentCtx.lineWidth = 2;
			currentCtx.fillStyle = "#181818";
			currentCtx.fillRect(50,50,700,700);
		},
		"advanceCutscene" : function(timePassed) {
			cutsceneActive.segmentTimePassed += timePassed;
			var tDura = cutsceneActive.segmentDuration[cutsceneActive.segmentCount];
			if(tDura > 0 && cutsceneActive.segmentTimePassed > tDura) {
				cutsceneActive.segmentTimePassed -= tDura;
				cutsceneActive.segmentCount++;
				tDura = cutsceneActive.segmentDuration[cutsceneActive.segmentCount];
			}
			var tTime = cutsceneActive.segmentTimePassed;
			if(tDura !== 0) {
				tTime /= tDura;
			}
			startDraw();
			
			ctxActive.fillStyle = "#181818";
			ctxActive.fillRect(50,50,700,700);
			
			currentCtx.save();
			currentCtx.translate(400,400);
			currentCtx.fillStyle = "#000000";
			currentCtx.strokeStyle = staticData.borderColor;
			currentCtx.globalAlpha=1;
			cutsceneActive.drawSegments[cutsceneActive.segmentCount](tTime);
			currentCtx.restore();
			
			ctxActive.drawImage(cutsceneCanvas[0],0,0);
		},
		"drawSegments" : [
			function(tRatio) {
				currentCtx.save();
				currentCtx.beginPath();
				currentCtx.arc(0,0,270,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				currentCtx.clip();
				currentCtx.rotate(tRatio*Math.PI*8);
				
				currentCtx.beginPath();
				currentCtx.arc(0,0,45*(1+tRatio*5),0,Math.PI*2);
				currentCtx.stroke();
				
				currentCtx.beginPath();
				currentCtx.arc(0,0,18*(1+tRatio*5),0,Math.PI*2);
				currentCtx.stroke();
				
				currentCtx.save();
				currentCtx.strokeStyle = staticData.borderColor;
				currentCtx.fillStyle = "#060606";
				for(var i=0;i<4;i++) {
					currentCtx.rotate(Math.PI/2);
					currentCtx.beginPath();
					currentCtx.arc(80*(1+tRatio*5),0,31*(1+tRatio*5),0,Math.PI*2);
					currentCtx.fill();
					currentCtx.stroke();
				}
				currentCtx.restore();
				
				
				currentCtx.restore();
			},
			function(tRatio) {
				currentCtx.save();
				currentCtx.beginPath();
				currentCtx.arc(0,0,270,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				currentCtx.clip();
				
				currentCtx.rotate(Math.PI/4);
				currentCtx.rotate(tRatio*Math.PI*2);
				
				
				currentCtx.save();
				currentCtx.globalAlpha = tRatio;
				for(var i=0;i<4;i++) {
					currentCtx.save();
					currentCtx.fillStyle = staticData.elementalColor[i][3];
					currentCtx.beginPath();
					currentCtx.moveTo(0,0);
					currentCtx.arc(0,0,270,Math.PI/2*i,(i+1)*Math.PI/2);
					currentCtx.fill();
					currentCtx.restore();
				}
				currentCtx.restore();
				
				currentCtx.beginPath();
				currentCtx.arc(0,0,108,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				
				currentCtx.restore();
			},
			function(tRatio) {
				currentCtx.save();
				currentCtx.beginPath();
				currentCtx.arc(0,0,270,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				currentCtx.clip();
				
				tRatio = 	(1-tRatio)*(1-tRatio);
				cutsceneActive.drawTree(11*tRatio+1);
				
				currentCtx.restore();
			},
			function(tRatio) {
				currentCtx.save();
				currentCtx.beginPath();
				currentCtx.arc(0,0,270,0,Math.PI*2);
				currentCtx.fill();
				currentCtx.stroke();
				currentCtx.clip();
				
				cutsceneActive.drawTree(1);
				
				currentCtx.restore();
			},
			function() {
				endCutscene();
			}
		],
		"drawTree" : function (scale) {
			currentCtx.save();
			currentCtx.rotate(Math.PI/4);
			for(var i=0;i<4;i++) {
				currentCtx.save();
				currentCtx.fillStyle = staticData.elementalColor[i][3];
				currentCtx.beginPath();
				currentCtx.moveTo(0,0);
				currentCtx.arc(0,0,270,Math.PI/2*i,(i+1)*Math.PI/2);
				currentCtx.fill();
				currentCtx.restore();
			}
			currentCtx.rotate(Math.PI);	
			
			currentCtx.beginPath();
			currentCtx.arc(0,0,9*scale,0,Math.PI*2);
			currentCtx.fill();
			currentCtx.stroke();
			var translate = 0;
			for(var i=0;i<4;i++) {
				translate+=60;
				var jMax = Math.pow(2,i);
				currentCtx.rotate(Math.PI/4/jMax);
				currentCtx.save();
				for(var colorId = 0;colorId<4;colorId++) {
					currentCtx.strokeStyle = staticData.elementalColor[colorId][0];
					if(i>0) {
						currentCtx.fillStyle = staticData.elementalColor[colorId][2];
					} else {
						currentCtx.fillStyle = staticData.elementalColor[colorId][1];
					}
					currentCtx.rotate(Math.PI/2);
					currentCtx.save();
					for(var j=0;j<jMax;j++) {
						currentCtx.rotate(Math.PI/2/jMax);
						
						currentCtx.beginPath();
						currentCtx.arc(translate*scale,0,18*scale,0,Math.PI*2);
						currentCtx.fill();
						currentCtx.stroke();
					}
					currentCtx.restore();
				}
				currentCtx.restore();
			}
			
			currentCtx.restore();
		}
	}
}
