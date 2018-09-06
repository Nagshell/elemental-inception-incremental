// Mouse clicks stat
var clicks = 0;
var clicksDOM = document.getElementById("clicksMade");

// Element clicks limiter
var lock = 0;

// Active tab
var currentTab = 0;

// MessageBox reference
var orginMessage = document.getElementById("chatMessageOrgin");
var chatBox = document.getElementById("chat");
var chatLogBox = document.getElementById("chatLog");
var messageCount = 0;


// Elemental Array
// ElementAmount Base Valves BaseGolemType Name
var unlockedElements = 0;
var elementArray = [];
elementArray.push([0,0,0,0,"Earth"]);
elementArray.push([0,0,0,0,"Water"]);
elementArray.push([0,0,0,0,"Air"]);
elementArray.push([0,0,0,0,"Fire"]);


// Machine Array
// IngredientType Valve Amount Max ReagentType Valve Amount Max Output 
var machineArray = [];
machineArray.push([0,0,0,   8,1,0,0,  2,1]);
machineArray.push([1,0,0,  64,3,0,0,  16,2]);
machineArray.push([2,0,0,  64,3,0,0,  16,3]);
machineArray.push([0,0,0,  256,3,0,0, 64,0]);

// Machine stats
var activeMachineTicks = 0;
var activeMovementTicks = 0;
var machineRotationSpeed = 0;
var activeMachine = 0;
var unlockedMachines = 0;
var machineDocks = 0;

var transferRate = 0;
var activationRequirement = 0.75;
var outputEfficiency = 1;

// Earth
var autoclickerTicks = 0;
var autoclickerLimiter = 1;

// Prestige of the year award
var golemCount = 0;

// Loop timer
var lastTimestamp = null;
var accumulatedTime = 0;

var freezeGameplay = false;
var theEndReached = false;


function loop(timestamp) {
	if(theEndReached) {
		return;
	}
	if(!lastTimestamp) {
		lastTimestamp = timestamp;
	}
	if(messageAlive > 0) {
		document.getElementById("cutsceneIndicator").innerHTML = "Gameplay paused<br>Check Chatbox";
		lastTimestamp = timestamp;
		requestAnimationFrame(loop);
		return;
	}
	accumulatedTime += timestamp - lastTimestamp;
	lastTimestamp = timestamp;
	var ticksDoneThisRound = 0;
	while(accumulatedTime > 50 && ticksDoneThisRound++ < 3) {
		accumulatedTime-=50;
		if(ticksDoneThisRound == 1) {
			chatTrimmer(50);
		}
		if(!freezeGameplay) {
			if(accumulatedTime > 100) {
				document.getElementById("cutsceneIndicator").innerHTML = "Accumulated time:<br>"+accumulatedTime.toFixed(0) + " ms";
			} else {
				document.getElementById("cutsceneIndicator").innerHTML = "";
			}
			tick();
		} else {
			ticksDoneThisRound = 3;
			document.getElementById("cutsceneIndicator").innerHTML = "Gameplay paused<br>Check Chatbox";
		}
	}
	
	if(!freezeGameplay) {
		drawPreview();
		punMaker();
	}
	requestAnimationFrame(loop);
}
function tick() {
	var currentElement;
	var currentMachine;
	var tempNumber;
	
	//autoClicker logic
	if(upgrades[0][2] == 1) {
		autoclickerTicks++;
		if(autoclickerTicks > 20) {
			elementArray[0][0]+=unlockedElements*autoclickerLimiter;
			autoclickerTicks = 0;
		}
	}
	
	//rotate setup
	if(activeMovementTicks < 40) {
		activeMovementTicks+=machineRotationSpeed;
		if(activeMovementTicks > 40) {
			activeMovementTicks = 40;
		}
	}
	if(activeMovementTicks == 40){
		activeMachineTicks+=machineRotationSpeed;
	}
	
	//rotation to next machine
	if(activeMachineTicks >= 40) {
		for(var i=0;i<machineDocks;i++) {
			var tempActive = (activeMachine+i)%unlockedMachines;
			document.getElementById("machine"+tempActive).style.backgroundColor = '#2E2E2E';
		}
		//included looping
		activeMachine=(activeMachine+1)%unlockedMachines;
		
		activeMachineTicks=0;
		activeMovementTicks=0;
	}
	
	//InputValves logic
	if(upgrades[24][2] == 1 || activeMachineTicks == 0) {
		for(var i=0;i<unlockedElements;i++) {
			currentElement = elementArray[i];
			if(currentElement[2] > 0) {
				tempNumber = currentElement[0]*transferRate;
				currentElement[0] -= tempNumber;
				for(var j=0;j<unlockedMachines;j++) {
					currentMachine = machineArray[j];
					if(currentMachine[0] == i && currentMachine[1] == 1) {
						currentMachine[2] += tempNumber/currentElement[2];
						if(currentMachine[2] > currentMachine[3]) {
							currentElement[0] += currentMachine[2] - currentMachine[3];
							currentMachine[2] = currentMachine[3];
						}
					}
					if(currentMachine[4] == i && currentMachine[5] == 1) {
						currentMachine[6] += tempNumber/currentElement[2];
						if(currentMachine[6] > currentMachine[7]) {
							currentElement[0] += currentMachine[6] - currentMachine[7];
							currentMachine[6] = currentMachine[7];
						}
					}
				}
			}
		}
	}
	
	//Machines logic
	if(upgrades[24][2] == 1 || activeMovementTicks == 40) {
		for(var i=0;i<machineDocks;i++) {
			var tempActive = (activeMachine+i)%unlockedMachines;
			document.getElementById("machine"+tempActive).style.backgroundColor = '#3A0035';
			currentMachine = machineArray[tempActive];
			tempNumber = Math.min(currentMachine[2]/currentMachine[3],currentMachine[6]/currentMachine[7]);
			if(tempNumber > activationRequirement) {
				tempNumber *= 0.1;
				currentMachine[2] -= tempNumber*currentMachine[3];
				currentMachine[6] -= tempNumber*currentMachine[7];
				elementArray[currentMachine[8]][0] += tempNumber*currentMachine[3]*outputEfficiency;
				
				
				runEvent("activeMachine"+tempActive);
			}
		}
	}
	
	//Golems Logic
	for(var i=0;i<unlockedElements;i++) {
		currentElement = elementArray[i];
		if(currentElement[3] == 1) {
			currentElement[0] += unlockedElements;
		} else if(currentElement[3] == 2) {
			currentElement[0] = 1000000000;
		}
		if(elementImploded == i && currentElement[0]>10) {
			sendMessageJSON("reset3");
		} else if(currentElement[3] == 0 && currentElement[0] > 20000000*(golemCount+1)*(golemCount/8+1)) {
			//golem is born
			golemCount++;
			elementImploded = i;
			runEvent("golemEvent0");			
		} else if(currentElement[3] == 1 && currentElement[0] > 1000000) {
			currentElement[3] = 2;
			
			runEvent("golemEvent3");
		}
	}
	
	
	//Events
	for(var i=0;i<unlockedElements;i++) {
		if(elementArray[i][0]>=8) {
			runEvent("elementAmount8-"+i);
		}
	}
	for(var i=0;i<unlockedMachines;i++) {
		if(machineArray[i][2]>=3) {
			runEvent("machineAmount3-"+i);
		}
	}
	
	//Display
	for(var i=0;i<4;i++) {
		document.getElementById("elementTank"+i).innerHTML = elementArray[i][0].toFixed(2);
		if(i>0 && machineArray[i-1][2] < 4) {
			document.getElementById("elementCost"+i).style.color = "#FFC6C6";
		} else {
			document.getElementById("elementCost"+i).style.color = "#C5FFB0";
		}
		document.getElementById("machineIngredientTank"+i).style.transform = "scaleY("+(machineArray[i][2]/machineArray[i][3])+")";
		document.getElementById("machineReagentTank"+i).style.transform = "scaleY("+(machineArray[i][6]/machineArray[i][7])+")";
	}
	
	//Available upgrades background
	for(var i=0;i<29;i++) {
		var currentUpgrade = upgrades[i];
		if(elementArray[currentUpgrade[0]][0] >= currentUpgrade[1]) {
			document.getElementById("upgrade"+i).style.backgroundColor =  "#0D1C0D";
		} else {
			document.getElementById("upgrade"+i).style.backgroundColor =  "#1C0D0D";
		}
	}
}

//Manually clicking on Element's box
function manual(i) {
	// Lock actions during cutscenes
	if(messageAlive > 0) {
		return;
	}
	// If lock is still active do nothing
	if(lock == 1) return;
	// Click was made
	clicksDOM.innerHTML = ++clicks;
	
	// Check requirements
	if(i>0) {
		i--;
		if(machineArray[i][2] >= 4) {
			machineArray[i][2] -= 4;
			document.getElementById("machineIngredientTank"+i).style.transform = "scaleY("+(machineArray[i][2]/machineArray[i][3])+")";
			i++;
			if(machineArray[i-1][2] < 4) {
				document.getElementById("elementCost"+i).style.color = "#FFC6C6";
			} else {
				document.getElementById("elementCost"+i).style.color = "#C5FFB0";
			}
		} else {
			return;
		}
	}
	
	// Action available - limit clicking
	lock++;
	if(lock==1) {
		document.getElementById("mouseIndicatorBar").style.transform="scaleY(0)";	
		setTimeout(function(){
			document.getElementById("mouseIndicatorBar").style.transform="scaleY(1)";
			setTimeout(function(){
				lock = 0;
			},500);
		},500);
	}
	//*/
	
	var currentElement = elementArray[i];
	
	// Check if base needs filling
	if(currentElement[1]<7) {
		currentElement[1]++;
		document.getElementById("elementBase"+i).style.transform = "scaleX("+(currentElement[1]/7)+")";
		
		//Base filled to max
		if(currentElement[1] == 7) {
			//New element have been unlocked
			unlockedElements++;
			setTimeout(function(){
				document.getElementById("elementBase"+i).style.transform = "scaleX(0)";
				document.getElementById("elementBackground"+i).style.transform = "scaleX(1)";
				document.getElementById("elementTank"+i).innerHTML = elementArray[i][0].toFixed(2);
			},1000);
			
			runEvent("elementBase"+i);
		}
	} else {
		//Slightly increased conversion rate for more active elements
		// 4:1 -> 8:3 -> 2:1 -> 8:5
		currentElement[0]+=1+i/2;
		document.getElementById("elementTank"+i).innerHTML = currentElement[0].toFixed(2);
	}
}

//Turning of the valves
function machineIngredientValveTurn(i) {
	// Lock actions during cutscenes
	if(messageAlive > 0) {
		return;
	}
	//Click was made
	clicksDOM.innerHTML = ++clicks;
	
	
	var currentMachine = machineArray[i];
	var currentElement = elementArray[currentMachine[0]];
	currentElement[2] -= currentMachine[1];
	currentMachine[1] ^= 1;
	currentElement[2] += currentMachine[1];
	document.getElementById("machineIngredientValve"+i).style.transform = "scaleX("+currentMachine[1]+")";
}
function machineReagentValveTurn(i) {
	// Lock actions during cutscenes
	if(messageAlive > 0) {
		return;
	}
	//Click was made
	clicksDOM.innerHTML = ++clicks;
	
	
	var currentMachine = machineArray[i];
	var currentElement = elementArray[currentMachine[4]];
	currentElement[2] -= currentMachine[5];
	currentMachine[5] ^= 1;
	currentElement[2] += currentMachine[5];
	document.getElementById("machineReagentValve"+i).style.transform = "scaleX("+currentMachine[5]+")";
}

// Tab switching
function switchTab(i) {
	document.getElementById("tab"+currentTab).style.display = 'none';
	currentTab = i;
	document.getElementById("tab"+currentTab).style.display = '';
	if(i == 0) {
		var preview = document.getElementById("canvasPreview");
		preview.style.width="250px";
		preview.style.height="250px";
		document.getElementById("machineHolder").appendChild(preview);
	}
	if(i == 1) {
		var preview = document.getElementById("canvasPreview");
		preview.style.width="600px";
		preview.style.height="600px";
		document.getElementById("canvasHolder").appendChild(preview);
	}
}

// Upgrade data
// RequiredElement Amount Active Chained
var upgrades = [];
upgrades.push([0,2,0,false]); // 0
upgrades.push([1,2,0,false]); // 1
upgrades.push([1,4,0,true]);  // 2
upgrades.push([2,4,0,true]);  // 3
upgrades.push([3,4,0,false]); // 4
upgrades.push([1,32,0,true]); // 5
upgrades.push([2,128,0,true]); // 6
upgrades.push([0,1024,0,true]);  // 7
upgrades.push([0,5120,0,false]); // 8
upgrades.push([1,16,0,true]); // 9
upgrades.push([0,64,0,true]); // 10
upgrades.push([2,128,0,true]); // 11
upgrades.push([3,1024,0,false]);  // 12
upgrades.push([3,2,0,true]); // 13
upgrades.push([3,256,0,true]); // 14
upgrades.push([0,2048,0,true]); // 15
upgrades.push([3,2048,0,false]); // 16
upgrades.push([2,16,0,true]);  // 17
upgrades.push([1,128,0,true]); // 18
upgrades.push([3,256,0,true]); // 19
upgrades.push([2,1024,0,true]); // 20
upgrades.push([0,2048,0,true]); // 21
upgrades.push([0,5120,0,true]);  // 22
upgrades.push([0,10240,0,true]); // 23
upgrades.push([2,40960,0,false]); // 24
upgrades.push([0,102400,0,true]); // 25
upgrades.push([1,102400,0,true]); // 26
upgrades.push([2,102400,0,true]); // 27
upgrades.push([3,102400,0,false]); // 28

// Clicked on upgrade
function upgrade(upgradeNum) {
	// Lock actions during cutscenes
	if(messageAlive > 0) {
		return;
	}
	var currentUpgrade = upgrades[upgradeNum];
	var currentElement = elementArray[currentUpgrade[0]];
	
	//Requirements
	if(currentElement[0] < currentUpgrade[1]) {
		return;
	}
	
	//Click was made
	clicksDOM.innerHTML = ++clicks;
	
	//Pay the cost
	currentElement[0] -= currentUpgrade[1];
	
	//Activate upgrade
	currentUpgrade[2] = 1;
	
	//Event
	runEvent("upgradeBought"+upgradeNum);
	
	//Hide upgrade
	document.getElementById("upgrade"+upgradeNum).style.display="none";
	//Show next upgrade in chain
	if(currentUpgrade[3]) {
		document.getElementById("upgrade"+(upgradeNum+1)).style.display="";
	}
	
	//Special upgrade mechanics
	switch(upgradeNum) {
		case 0:
		/* You encountered random debug cheat, move along good sir.
			elementArray[0][0] += 50000;
			elementArray[1][0] += 20000;
			elementArray[2][0] += 20000;
			elementArray[3][0] += 100000;
		//*/
			break;
		case 1:
			machineArray[0][3]*=8;
			machineArray[0][7]*=8;
			break;
		case 2:
		case 3:
		case 4:
			activationRequirement -= 0.25;
			break;
		case 5:
		case 6:
		case 7:
			for(var z=0;z<4;z++) {
				machineArray[z][3]*=2;
				machineArray[z][7]*=2;
			}
			break;
		case 8:
			for(var z=0;z<4;z++) {
				machineArray[z][3]*=4;
				machineArray[z][7]*=4;
			}
			break;
		case 9:
		case 10:
		case 11:
			transferRate+=0.005;
			break;
		case 12:
			transferRate+=0.03;
			break;
		case 13:
		case 14:
			outputEfficiency += 0.25;
			break;
		case 16:
			outputEfficiency += 0.5;
			break;
		case 17:
		case 18:
		case 19:
		case 20:
			machineRotationSpeed++;
			break;
		case 21:
		case 22:
		case 23:
			machineDocks++;
			break;
		case 28:
			for(var z=0;z<4;z++) {
				machineArray[z][3]*=256;
				machineArray[z][7]*=256;
			}
			break;
	}
}
var elementImploded = -1;
var eventFlags = [];
for(var z=0;z<16;z++) {
	eventFlags.push(true);
}
function runEvent(eventId) {
	switch(eventId) {
		case "elementBase0":
			sendMessageJSON("base0");
			document.getElementById("upgrade0").style.display="";
			break;
		case "elementBase1":
			sendMessageJSON("base1");
			break;
		case "elementBase2":
			sendMessageJSON("base2");
			break;
		case "elementBase3":
			sendMessageJSON("base3");
			break;
		case "elementAmount8-0":
			if(eventFlags[0]) {
				eventFlags[0] = false;
				
				sendMessageJSON("elementGathered0");
			}
			break;
		case "elementAmount8-2":
			if(eventFlags[1]) {
				eventFlags[1] = false;
				
				document.getElementById("upgrade5").style.display="";
				document.getElementById("upgrade17").style.display="";
				
				sendMessageJSON("elementGathered2");
			}
			break;
		case "elementAmount8-3":
			if(eventFlags[2]) {
				eventFlags[2] = false;
				
				sendMessageJSON("elementGathered3");
				document.getElementById("upgrade13").style.display="";
			}
			break;
		case "unlockMachine0":
			document.getElementById("machine0").style.display="";
			transferRate += 0.005;
			unlockedMachines++;
			break;
		case "unlockMachine2":
			document.getElementById("machine2").style.display="";
			unlockedMachines++;
			break;
		case "unlockElement1":
			document.getElementById("element1").style.display="";
			break;
		case "machineAmount3-0":
			if(eventFlags[3]) {
				eventFlags[3] = false;
				
				machineDocks++;
				machineRotationSpeed++;
				
				sendMessageJSON("machineThresholdAmount-0");
			}
			break;
		case "machineAmount3-1":
			if(eventFlags[4]) {
				eventFlags[4] = false;
				
				document.getElementById("element2").style.display="";
				
				sendMessageJSON("machineThresholdAmount-1");
			}	
			break;
		case "machineAmount3-2":
			if(eventFlags[5]) {
				eventFlags[5] = false;
				
				document.getElementById("element3").style.display="";
				
				sendMessageJSON("machineThresholdAmount-2");
			}	
			break;
		case "activeMachine0":
			if(eventFlags[6]) {
				eventFlags[6] = false;
				
				document.getElementById("upgrade1").style.display="";
				document.getElementById("upgrade2").style.display="";
				document.getElementById("upgrade9").style.display="";
				
				sendMessageJSON("machineActivated0");
			}
			break;
		case "upgradeBought0":
			sendMessageJSON("upgradeBought0");
			break;
		case "upgradeBought2":
			document.getElementById("machine1").style.display="";
			unlockedMachines++;
			sendMessageJSON("upgradeBought2");
			break;
		case "upgradeBought13":
			sendMessageJSON("upgradeBought13");
			document.getElementById("machine3").style.display="";
			unlockedMachines++;
			
			document.getElementById("machineProductInfo0").innerHTML="5 Water";
			document.getElementById("machineProductInfo1").innerHTML="5 Air";
			document.getElementById("machineProductInfo2").innerHTML="5 Fire";
			document.getElementById("machineProductInfo3").innerHTML="5 Earth";
			break;
		case "upgradeBought14":
			document.getElementById("machineProductInfo0").innerHTML="6 Water";
			document.getElementById("machineProductInfo1").innerHTML="6 Air";
			document.getElementById("machineProductInfo2").innerHTML="6 Fire";
			document.getElementById("machineProductInfo3").innerHTML="6 Earth";
			break;
		case "upgradeBought16":
			document.getElementById("machineProductInfo0").innerHTML="8 Water";
			document.getElementById("machineProductInfo1").innerHTML="8 Air";
			document.getElementById("machineProductInfo2").innerHTML="8 Fire";
			document.getElementById("machineProductInfo3").innerHTML="8 Earth";
			break;
		case "upgradeBought24":
			sendMessageJSON("upgradeBought24");
			document.getElementById("upgrade25").style.display="";
			break;
		case "golemEvent0":
			//Clear everything
			for(var j=0;j<unlockedElements;j++) {
				elementArray[j][0]=0;
			}
			for(var j=0;j<unlockedMachines;j++) {
				currentMachine = machineArray[j];
				currentMachine[2] = 0;
				currentMachine[6] = 0;
				var tempClicks = clicks;
				if(currentMachine[1] == 1) {
					machineIngredientValveTurn(j);
				}
				if(currentMachine[5] == 1) {
					machineReagentValveTurn(j);
				}
				clicks = tempClicks;
				clicksDOM.innerHTML = clicks;
			}
			
			//reset capacity upgrades
			upgrades[5][2] = 0;
			upgrades[6][2] = 0;
			upgrades[7][2] = 0;
			upgrades[8][2] = 0;
			upgrades[25][2] = 0;
			upgrades[26][2] = 0;
			upgrades[27][2] = 0;
			upgrades[28][2] = 0;
			
			//reset capacity itself
			machineArray[0][3]=64;
			machineArray[0][7]=16;
			machineArray[1][3]=64;
			machineArray[1][7]=16;
			machineArray[2][3]=64;
			machineArray[2][7]=16;
			machineArray[3][3]=256;
			machineArray[3][7]=64;
		
			if(golemCount == 1) {
				autoclickerLimiter = 0.05;
				sendMessageJSON("reset0");
			} else {
				sendMessageJSON("reset5");
				runEvent("golemEvent2");
			}
			break;
		case "golemEvent1":
			document.getElementById("upgrade5").style.display="";
			document.getElementById("upgrade25").style.display="";
			accumulatedTime = -100;
			break;
		case "golemEvent2":
			elementArray[elementImploded][3]=1;
			elementImploded = -1;
			break;
		case "golemEvent3":
			var sum = 0;
			for(var j=0;j<unlockedElements;j++) {
				if(elementArray[j][3]==2) {
					document.getElementById("element"+j).style.display = "none";
					document.getElementById("golem"+j).style.display = "";
					sum++;
				}
			}
			if(sum==1) {
				sendMessageJSON("reset7");
			} else if(sum < 4){
				sendMessageJSON("reset10");
			} else {
				sendMessageJSON("reset11");
			}
			break;
		case "theIntro":
			requestAnimationFrame(loop);
			sendMessageJSON("intro0");
			break;
		case "theBeginning":
			document.getElementById("element0").style.display="";
			
			document.getElementById("containerButton").style.display="";
			document.getElementById("containerElement").style.display="";
			document.getElementById("containerMouse").style.display="";
			switchTab(0);
			document.getElementById("skipButton").remove();
			document.getElementById("chatMessageProgressBar").style.transition = "transform 1ms";
			setTimeout(function(){
				document.getElementById("chatMessageProgressBar").classList.remove("chatMessageProgressBarActive");
				document.getElementById("chatMessageProgressBar").classList.add("chatMessageProgressBar");
			},50);
			
			break;
		case "theOutro":
			document.getElementById("containerButton").remove();
			document.getElementById("containerElement").remove();
			document.getElementById("containerMouse").remove();
			document.getElementById("tab0").remove();
			document.getElementById("tab1").remove();
			document.getElementById("tab3").remove();
			document.getElementById("tab4").remove();
			document.getElementById("tab5").remove();
			document.getElementById("tab6").remove();
			sendMessageJSON("outro0");
			break;
		case "theEnd":
			theEndReached = true;
			document.getElementById("chatMessageGameplay").innerHTML = "You made a total of " + clicks + " clicks to reach this ending screen.";
			break;
	}
}
function skipIntro() {
	var id = setTimeout(null,0);
    while (id--) 
    {
        window.clearTimeout(id);
    }
	
	var log = document.getElementById("chatLog");
	log.innerHTML = "";
	for(var i=0;i<16;i++) {
		var tempMessage = jsonMessages["intro"+i];
		log.innerHTML += "<br><br>"+tempMessage.loreText;
		log.innerHTML += "<br>"+tempMessage.gameplayText;
	}
	
	
	messageAlive = 0;
	freezeGameplay = false;
	availableChatButtonClick = false;
	document.getElementById("chatMessageButton").style.transform = "scaleX(0)";
	document.getElementById("chatMessageProgressText").innerHTML = "";
	sendMessageJSON("intro16");
}

var puns = 0;
function punMaker() {
	if(disablePuns)
		return;
	switch(puns) {
		case 9600:
			sendMessageJSON("pun1");
			break;
		case 28800:
			sendMessageJSON("pun2");
			break;
	}
	puns++;
}
	
var ctx;
function drawPreview() {
	
	ctx = document.getElementById("canvasPreview").getContext("2d");
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, 600, 600);
	
	ctx.strokeStyle = "white";
	drawFullCircle(300,300,290,"#0D0D0D");
	ctx.stroke();
	
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	
	
	
	if(machineDocks >= 1 ) {
		drawDockBase(0);
	}
	if(machineDocks >= 2 ) {
		drawDockBase(1);
	}
	if(machineDocks >= 3 ) {
		drawDockBase(2);
	}
	if(machineDocks >= 4 ) {
		drawDockBase(3);
	}
	
	//filled pipes?
	var greenInputPipesColor = (elementArray[0][0] > 1 ? "#2F681A" : "#4D4D4D");
	var blueInputPipesColor = (elementArray[1][0] > 1 ? "#39586C" : "#4D4D4D");
	var yellowInputPipesColor = (elementArray[2][0] > 1 ? "#615400" : "#4D4D4D");
	var redInputPipesColor = (elementArray[3][0] > 1 ? "#780A0A" : "#4D4D4D");
	
	//outer input lines
	drawFullCircle(300,300,230,greenInputPipesColor);
	ctx.stroke();
	drawFullCircle(300,300,220,blueInputPipesColor);
	ctx.stroke();
	drawFullCircle(300,300,210,yellowInputPipesColor);
	ctx.stroke();
	drawFullCircle(300,300,200,redInputPipesColor);
	ctx.stroke();
	drawFullCircle(300,300,190,"#0D0D0D");
	ctx.stroke();
	
	//inner input lines
	drawFullCircle(300,300,100,greenInputPipesColor);
	ctx.stroke();
	drawFullCircle(300,300,90,blueInputPipesColor);
	ctx.stroke();
	drawFullCircle(300,300,80,yellowInputPipesColor);
	ctx.stroke();
	drawFullCircle(300,300,70,redInputPipesColor);
	ctx.stroke();
	drawFullCircle(300,300,60,"#0D0D0D");
	ctx.stroke();
	
	//elemental orbs
	drawElementalOrb(0);
	drawElementalOrb(1);
	drawElementalOrb(2);
	drawElementalOrb(3);

	//docks
	if(machineDocks >= 1 ) {
		drawDock(0);
	}
	if(machineDocks >= 2 ) {
		drawDock(1);
	}
	if(machineDocks >= 3 ) {
		drawDock(2);
	}
	if(machineDocks >= 4 ) {
		drawDock(3);
	}
	
	if(upgrades[24][2] == 0) {
		ctx.translate(300,300);
		ctx.rotate(-2*activeMachine/unlockedMachines*Math.PI);
		if(activeMovementTicks < 40) {
			var partialMovement = activeMovementTicks-40;
			var partialMovement2 = Math.min(partialMovement+machineRotationSpeed,0);
			partialMovement += (partialMovement2-partialMovement)*Math.min(accumulatedTime/50,1);
			partialMovement /= 40;
			ctx.rotate(-2*partialMovement/unlockedMachines*Math.PI);
		}
		ctx.translate(-300,-300);
	}
	if(unlockedMachines >= 1) {
		drawMachine(0);
	}
	if(unlockedMachines >= 2) {
		ctx.translate(300,300);
		ctx.rotate(2/unlockedMachines*Math.PI);
		ctx.translate(-300,-300);
		
		drawMachine(1);
	}
	if(unlockedMachines >= 3) {
		ctx.translate(300,300);
		ctx.rotate(2/unlockedMachines*Math.PI);
		ctx.translate(-300,-300);
		
		drawMachine(2);
	}
	if(unlockedMachines >= 4) {
		ctx.translate(300,300);
		ctx.rotate(2/unlockedMachines*Math.PI);
		ctx.translate(-300,-300);
		
		drawMachine(3);
	}
}
function drawFullCircle(x,y,radius,color) {
	ctx.beginPath();
	ctx.arc(x,y,radius,0,2*Math.PI,false);
	ctx.fillStyle = color;
	ctx.fill();
}
function drawOctagon(x,y,radius) {
	ctx.beginPath();
	var tempNumber = radius * 3.5/5;
	ctx.moveTo(x,y+radius);
	ctx.lineTo(x+tempNumber,y+tempNumber);
	ctx.lineTo(x+radius,y);
	ctx.lineTo(x+tempNumber,y-tempNumber);
	ctx.lineTo(x,y-radius);
	ctx.lineTo(x-tempNumber,y-tempNumber);
	ctx.lineTo(x-radius,y);
	ctx.lineTo(x-tempNumber,y+tempNumber);
	ctx.lineTo(x,y+radius);
	ctx.lineTo(x+tempNumber,y+tempNumber);
}

var elementalOrbData = [];
elementalOrbData.push(["#2F681A","#449625"]);
elementalOrbData.push(["#39586C","#5890B4"]);
elementalOrbData.push(["#615400","#AA9A3B"]);
elementalOrbData.push(["#780A0A","#BD1717"]);

var golemRotation = 0;
function drawElementalOrb(i) {
	unlock = 0;
	var x = 300;
	var y = 220;
	ctx.save();
	ctx.translate(300,300);
	ctx.rotate(2*Math.PI/4*i);
	ctx.translate(-300,-300);
	if(elementArray[i][3]==2) {
		ctx.beginPath();
		var radius = 40;
		ctx.arc(x,y,radius,0,Math.PI,false);
		ctx.arc(x+radius,y,2*radius,Math.PI,Math.PI*4/3,false);
		ctx.arc(x-radius,y,2*radius,-Math.PI/3,0,false);
		ctx.fillStyle = elementalOrbData[i][0];
		ctx.fill();
		ctx.strokeStyle=elementalOrbData[i][1];
		ctx.stroke();
		
		ctx.translate(x,y);
		ctx.rotate(Math.PI/900*golemRotation++/(i+3));
		ctx.translate(-x,-y);
		
		drawFullCircle(x+radius/2,y,radius/4,"rgba(255,255,255,0.10)");
		drawFullCircle(x-radius/2,y,radius/4,"rgba(255,255,255,0.10)");
	} else {
		drawFullCircle(x,y,46,"rgba(29,29,29,0.92)");
		ctx.stroke();
		if(elementArray[i][1]==7) {
			//Orb fill ratio
			var ratio = elementArray[i][0];
			ratio = 1+Math.log10(1+ratio);
			if(ratio<0) {
				ratio = 0;
			} else if(ratio<4) {
				ratio*=ratio;
			} else {
				ratio = 6 + 10*(ratio-3);
			}
			if(ratio > 46) {
				ratio = 44;
			}
			
			drawFullCircle(x,y,ratio,elementalOrbData[i][0]);
			ctx.strokeStyle=elementalOrbData[i][1];
			if(elementArray[i][3]==1) {
				ctx.lineWidth = 6;
				drawOctagon(x,y,30);
			} else if(elementArray[i][3]==0) {
				ctx.lineWidth = 3;
				drawOctagon(x,y,20);
			} 
			ctx.stroke();
		}
	}
	ctx.restore();
}

var dockData = [];
dockData.push([153,153]);
dockData.push([447,153]);
dockData.push([447,447]);
dockData.push([153,447]);

function drawDock(i) {
	var x = dockData[i][0];
	var y = dockData[i][1];
	drawFullCircle(x,y,56,'#1A0015');
	ctx.stroke();
}
function drawDockBase(i) {
	var x = dockData[i][0];
	var y = dockData[i][1];
	var tempColor;
	if(upgrades[24][2] == 0 && activeMovementTicks < 40) {
		tempColor="rgba(19,19,19,0.98)";
	} else {
		tempColor='#4A0046';
	}
	
	ctx.beginPath();
	ctx.fillStyle = tempColor;
	
	ctx.moveTo(x-5,y-5);
	ctx.lineTo(x-5,y-90);
	ctx.lineTo(x+5,y-90);
	ctx.lineTo(x+5,y-5);
	ctx.lineTo(x+90,y-5);
	ctx.lineTo(x+90,y+5);
	ctx.lineTo(x+5,y+5);
	ctx.lineTo(x+5,y+90);
	ctx.lineTo(x-5,y+90);
	ctx.lineTo(x-5,y+5);
	ctx.lineTo(x-90,y+5);
	ctx.lineTo(x-90,y-5);
	ctx.lineTo(x-5,y-5);
	ctx.fill();
	ctx.stroke();
	
	drawFullCircle(x,y,70,tempColor);
	ctx.stroke();
}
function drawMachine(i) {
	var ratio;
	drawFullCircle(153,153,50,"rgba(19,19,19,0.98)");
	ctx.stroke();
	drawFullCircle(153,153,47,"rgba(19,19,19,0.98)");
	ctx.stroke();
	switch(i) {
		case 0:
			drawFullCircle(153,153,42,"rgba(19,19,19,0.98)");
			ctx.stroke();
			
			ratio = 1+machineArray[0][6]/machineArray[0][7];
			ratio /= 2; 
			ratio = (Math.sqrt(ratio)-Math.sqrt(0.5))/(1-Math.sqrt(0.5));
			drawFullCircle(153,153,15+27*ratio,"#39586C");
			
			drawFullCircle(153,153,15,"#2F681A");
			ctx.stroke();
			
			ratio = 1-machineArray[0][2]/machineArray[0][3];
			ratio = Math.sqrt(ratio);
			
			drawFullCircle(153,153,ratio*15,"rgba(19,19,19,0.98)");
			break;
		case 1:
			drawFullCircle(153,153,42,"rgba(19,19,19,0.98)");
			ctx.stroke();
			
			ratio = 1+machineArray[1][6]/machineArray[1][7];
			ratio /= 2; 
			ratio = (Math.sqrt(ratio)-Math.sqrt(0.5))/(1-Math.sqrt(0.5));
			drawFullCircle(153,153,32+10*ratio,"#780A0A");
			
			drawFullCircle(153,153,32,"#39586C");
			ctx.stroke();
			
			ratio = 1-machineArray[1][2]/machineArray[1][3];
			ratio = Math.sqrt(ratio);
			
			drawFullCircle(153,153,ratio*32,"rgba(19,19,19,0.98)");
			break;
		case 2:
			drawFullCircle(153,153,42,"rgba(19,19,19,0.98)");
			ctx.stroke();
			
			ratio = 1+machineArray[2][2]/machineArray[2][3];
			ratio /= 2; 
			ratio = (Math.sqrt(ratio)-Math.sqrt(0.5))/(1-Math.sqrt(0.5));
			drawFullCircle(153,153,10+32*ratio,"#615400");
			
			drawFullCircle(153,153,10,"#780A0A");
			ctx.stroke();
			
			ratio = 1-machineArray[2][6]/machineArray[2][7];
			ratio = Math.sqrt(ratio);
			
			drawFullCircle(153,153,ratio*10,"rgba(19,19,19,0.98)");
			break;
		case 3:
			drawFullCircle(153,153,42,"rgba(19,19,19,0.98)");
			ctx.stroke();
			
			ratio = 1+machineArray[3][2]/machineArray[3][3];
			ratio /= 2; 
			ratio = (Math.sqrt(ratio)-Math.sqrt(0.5))/(1-Math.sqrt(0.5));
			drawFullCircle(153,153,20+22*ratio,"#2F681A");
			
			drawFullCircle(153,153,20,"#780A0A");
			ctx.stroke();
			
			ratio = 1-machineArray[3][6]/machineArray[3][7];
			ratio = Math.sqrt(ratio);
			
			drawFullCircle(153,153,ratio*20,"rgba(19,19,19,0.98)");
			break;
	}
}

var chatLoreTrimmerDelay = 0;
var chatGameplayTrimmerDelay = 0;
function chatTrimmer(timePassed) {
	if(chatLoreTrimmerDelay == 0) {
		var chatText = document.getElementById("chatMessageLore");
		//br handling
		if(chatText.innerHTML.charAt(0) == '<') {
			chatText.innerHTML = chatText.innerHTML.slice(3);
			chatText.innerHTML = chatText.innerHTML.slice(3);
		}
		chatText.innerHTML = chatText.innerHTML.slice(1).trim();
	} else if (chatLoreTrimmerDelay > 0){
		chatLoreTrimmerDelay = Math.max(chatLoreTrimmerDelay-timePassed,0);
	}
	if(chatGameplayTrimmerDelay == 0) {
		var chatText = document.getElementById("chatMessageGameplay");
		chatText.innerHTML = chatText.innerHTML.slice(1).trim();
	} else if (chatGameplayTrimmerDelay > 0) {
		chatGameplayTrimmerDelay = Math.max(chatGameplayTrimmerDelay-timePassed,0);
	}
	
}

var messageAlive = 0;
var tempMessage;
var disablePuns = false;
function sendMessageJSON(msgId) {
	tempMessage = jsonMessages[msgId];
	
	var log = document.getElementById("chatLog");
	log.innerHTML += "<br><br>"+tempMessage.loreText;
	log.innerHTML += "<br>"+tempMessage.gameplayText;
	
	if(tempMessage.flush) {
		document.getElementById("chatMessageLore").innerHTML = tempMessage.loreText;
		document.getElementById("chatMessageGameplay").innerHTML = tempMessage.gameplayText;
		chatLoreTrimmerDelay = tempMessage.loreFreezeDuration;
		chatGameplayTrimmerDelay = tempMessage.gameplayFreezeDuration;
	} else {
		document.getElementById("chatMessageLore").innerHTML += "<br>"+tempMessage.loreText;
		document.getElementById("chatMessageGameplay").innerHTML += tempMessage.gameplayText;
		chatLoreTrimmerDelay += tempMessage.loreFreezeDuration;
		chatGameplayTrimmerDelay += tempMessage.gameplayFreezeDuration;
	}
	
	if(tempMessage.progressBar) {
		messageAlive++;
	}
	if(tempMessage.buttonAvailable) {
		messageAlive++;
	}	
	switch(tempMessage.firstActiveElement) {
		case "button":
			messageShowButton();
			break;
		case "progressBar":
			messageActivateProgressBar();
			break;
		case "none":
			messageChainNext();
			break;
	}
	if(tempMessage.eventId) {
		runEvent(tempMessage.eventId);
		drawPreview();
	}
}
function messageActivateProgressBar() {
	document.getElementById("chatMessageProgressText").innerHTML = tempMessage.progressBar.barText;
	//Run bar
	document.getElementById("chatMessageProgressBar").style.transition = "transform "+tempMessage.progressBar.duration+"ms linear";
	disablePuns = true;
	setTimeout(function(){
		document.getElementById("chatMessageProgressBar").classList.remove("chatMessageProgressBar");
		document.getElementById("chatMessageProgressBar").classList.add("chatMessageProgressBarActive");
		//On bar completion
		setTimeout(function(){
			disablePuns = false;
			document.getElementById("chatMessageProgressText").innerHTML = "";
			messageAlive--;
			document.getElementById("chatMessageProgressBar").style.transition = "transform 1ms linear";
			document.getElementById("chatMessageProgressBar").classList.remove("chatMessageProgressBarActive");
			document.getElementById("chatMessageProgressBar").classList.add("chatMessageProgressBar");
			if(tempMessage.firstActiveElement == "progressBar" && messageAlive > 0) {
				messageShowButton();
			}
			messageChainNext();
		},tempMessage.progressBar.duration);
	},50);
}
function messageShowButton() {
	availableChatButtonClick = true;
	document.getElementById("chatMessageButton").style.transform = "scaleX(1)";
}
var availableChatButtonClick = false;
function chatButton() {
	if(availableChatButtonClick) {
		availableChatButtonClick = false;
		messageAlive--;
		document.getElementById("chatMessageButton").style.transform = "scaleX(0)";
		if(tempMessage.firstActiveElement == "button" && messageAlive > 0) {
			messageActivateProgressBar();
		}
		messageChainNext();	
	}
}
function messageChainNext() {
	if(messageAlive == 0 && tempMessage.chainedMessage) {
		freezeGameplay = true;
		disablePuns = true;
		setTimeout(function(){
			freezeGameplay = false;
			disablePuns = false;
			sendMessageJSON(tempMessage.chainedMessage);
		},tempMessage.chainedMessageDelay);
	}
}
runEvent("theIntro");
