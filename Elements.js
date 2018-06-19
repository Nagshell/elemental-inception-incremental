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
var machineRotationSpeed = 0;
var activeMachine = 0;
var unlockedMachines = 0;
var machineDocks = 0;

var transferRate = 0;
var activationRequirement = 0.75;
var outputEfficiency = 1;

// Earth
var autoclickerTicks = 0;

// Prestige of the year award
var golemCount = 0;

// Loop timer
var lastTimestamp = null;
var accumulatedTime = 0;

var stopCondition = false;

function loop(timestamp) {
	if(!lastTimestamp) {
		lastTimestamp = timestamp;
	}
	accumulatedTime += timestamp - lastTimestamp;
	lastTimestamp = timestamp;
	if(stopCondition) {
		return;
	}
	while(accumulatedTime > 50) {
		tick();
		accumulatedTime-=50;
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
			elementArray[0][0]+=unlockedElements;
			autoclickerTicks = 0;
		}
	}
	
	//rotate setup
	activeMachineTicks+=machineRotationSpeed;
	
	//rotation to next machine
	if(activeMachineTicks > 80) {
		for(var i=0;i<machineDocks;i++) {
			var tempActive = (activeMachine+i)%unlockedMachines;
			document.getElementById("machine"+tempActive).style.backgroundColor = '#2E2E2E';
		}
		//included looping
		activeMachine=(activeMachine+1)%unlockedMachines;
		
		activeMachineTicks=0;
	}
	
	//InputValves logic
	if(upgrades[24][2] == 1 || activeMachineTicks <= 40) {
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
	if(upgrades[24][2] == 1 || activeMachineTicks > 40) {
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
		if(currentElement[3] == 0 && currentElement[0] > 20000000*(golemCount+1)*(golemCount+1)) {
			//golem is born
			golemCount++;
			currentElement[3] = 1;
			runEvent("birthOfGolem");			
		} else if(currentElement[3] == 1 && currentElement[0] > 1000000) {
			currentElement[3] = 2;
			
			runEvent("channeledGolem");
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
	for(var i=0;i<unlockedElements;i++) {
		document.getElementById("elementTank"+i).innerHTML = elementArray[i][0].toFixed(2);
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
		} else {
			return;
		}
	}
	
	// Action available - limit clicking
	/*
	lock = 1;
	document.getElementById("mouseIndicatorBar").style.transform="scaleY(0)";	
	setTimeout(function(){
		document.getElementById("mouseIndicatorBar").style.transform="scaleY(1)";
		setTimeout(function(){
			lock = 0;
		},500);
	},500);
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
	//Click was made
	clicksDOM.innerHTML = ++clicks;
	
	
	document.getElementById("tab"+currentTab).style.display = 'none';
	currentTab = i;
	document.getElementById("tab"+currentTab).style.display = '';
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
			elementArray[3][0] += 1000000000000;
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

//Post new message
function sendMessage(duration,messageText) {
	var newMessage = orginMessage.cloneNode();
	newMessage.id = "chatMessage"+messageCount++;
	newMessage.innerHTML = messageText;
	//chatBox.insertBefore(newMessage,chatBox.firstChild);
	chatBox.appendChild(newMessage);
	//Message fading
	setTimeout(function(){
		newMessage.classList.replace("chatMessage","chatMessageDecay");
		//Message removal
		setTimeout(function(){
			newMessage.classList.replace("chatMessageDecay","chatMessage");
			//chatLogBox.insertBefore(newMessage,chatLogBox.firstChild);
			chatLogBox.appendChild(newMessage);
		},5000);
	},duration*1000);
}


var eventFlags = [];
for(var z=0;z<16;z++) {
	eventFlags.push(true);
}
//runEvent("machineAmount1-0");
function runEvent(eventId) {
	switch(eventId) {
		case "elementBase0":
			sendMessage(1,"Base of Earth Orb has been filled. Now I can truly start filling it with Earth.");
			document.getElementById("upgrade0").style.display="";
			requestAnimationFrame(loop);
			break;
		case "elementBase1":
			sendMessage(2,"Water Orb's base is complete. Finally I should be able to use full potential of Liquefier. Let's start by fully filling it's reagent tank.");
			break;
		case "elementBase2":
			sendMessage(1,"Air Orb's online.");
			break;
		case "elementBase3":
			sendMessage(1,"Fire Orb activated. With power of Fire all machines should be able to work to their full potential.");
			
			setTimeout(function(){
				sendMessage(4,"In the center of the room new piece activated - Reaction Catalyst. It seems to increase efficiency of reactions in machines.");
				document.getElementById("upgrade13").style.display="";
			},15000);
			break;
		case "elementAmount8-0":
			if(eventFlags[0]) {
				eventFlags[0] = false;
				
				document.getElementById("machine0").style.display="";
				transferRate += 0.005;
				unlockedMachines++;
				
				sendMessage(6,"With increasing supply of Earth I should start thinking about activating another Orb. <br>Under rusted sheets I found Liquefier. It's slightly damaged, but should work nonetheless.<br>I should open valves and hopefully Earth should start flowing into it.");
			}
			break;
		case "elementAmount8-2":
			if(eventFlags[1]) {
				eventFlags[1] = false;
				
				document.getElementById("upgrade5").style.display="";
				document.getElementById("upgrade17").style.display="";
				
				sendMessage(6,"With building up supply of Air few other upgrades became available. I also found parts of another machine. While over half of it is missing, I think I should be able to find replacements for them.");
				setTimeout(function(){
					sendMessage(4,"And another machine's ready. I found replacement parts that are good enough in workshop of my father.");
					document.getElementById("machine2").style.display="";
					unlockedMachines++;
				},25000);
			}
			break;
		case "machineAmount3-0":
			if(eventFlags[2]) {
				eventFlags[2] = false;
				
				machineDocks++;
				machineRotationSpeed++;
				
				sendMessage(15,"I realized few things about Liquefier. Once Earth flowed into it's internal tank, whole machine started rotating on track that goes around whole room.<br>On it's way it docks in two places. First let's element flow into it, while other seems to be place where it should actually work. Sadly it seems that lack of reagent hinders it.");
				setTimeout(function(){
					sendMessage(6,"I think I can manually override functionality of machine. It's going to be inefficient, but I can turn 4 Earth in Liquefier into Water by clicking Water Orb.");
					document.getElementById("element1").style.display="";
				},10000);
			}
			break;
		case "machineAmount3-1":
			if(eventFlags[3]) {
				eventFlags[3] = false;
				
				document.getElementById("element2").style.display="";
				
				sendMessage(4,"Boiler requires Fire to run, but my manual method should still be viable. 4 Water in Boiler will turn into some Air.");
			}	
			break;
		case "machineAmount3-2":
			if(eventFlags[4]) {
				eventFlags[4] = false;
				
				document.getElementById("element3").style.display="";
				
				sendMessage(4,"It seems that the end of manual grind is near. 4 Air in Combustor will turn into some Fire.");
			}	
			break;
		case "activeMachine0":
			if(eventFlags[5]) {
				eventFlags[5] = false;
				
				document.getElementById("upgrade1").style.display="";
				document.getElementById("upgrade2").style.display="";
				document.getElementById("upgrade9").style.display="";
				
				sendMessage(4,"Yes! It works! Now I can accumulate Water with 100% machine's efficiency. 4 Earth and 1 Water => 4 Water,<br>With supply of Water I can start thinking about upgrading Liquefier and working towards next Orb");
				
			}
			break;
		case "upgradeBought0":
			sendMessage(2,"Now I don't need to fill Earth manually. What a relief.");
			break;
		case "upgradeBought2":
			document.getElementById("machine1").style.display="";
			unlockedMachines++;
			
			sendMessage(6,"While I was tinkering with reaction regulators I noticed two halves of another machine laying in the corner. After quick assembly I managed to repair it.");
			break;
		case "upgradeBought13":
			sendMessage(6,"For the whole time I thought it was a decoration. Volcano made with brass alloys. It's machine.<br>If I upgrade Reaction Catalyst once more I should be able to make positive feedback loop to multiply my Earth supply.");
			document.getElementById("machine3").style.display="";
			
			document.getElementById("machineProductInfo0").innerHTML="5 Water";
			document.getElementById("machineProductInfo1").innerHTML="5 Air";
			document.getElementById("machineProductInfo2").innerHTML="5 Fire";
			document.getElementById("machineProductInfo3").innerHTML="5 Earth";
			unlockedMachines++;
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
			setTimeout(function(){
				sendMessage(12,"After breakthrough my supply of elements steadily increases. I noticed that elemental orbs contain small crystals that let's them condense elements into much denser state. It gave me new idea...");
				document.getElementById("upgrade25").style.display="";
			},10000);
			break;
		case "intro0":
			if(noSkip) {
				sendMessage(180,"If you happen to miss any of messages, you can check everything in Log tab.");
				setTimeout(function(){
					runEvent("intro1");
				},2000);
			}
			break;
		case "intro1":
			if(noSkip) {
				sendMessage(7,"My mentor told me story about Elements. Legend tells that there was a wise Alchemist that mastered all fundamentals of the world as we know it.");
				setTimeout(function(){
					runEvent("intro2");
				},7000);
			}
			break;
		case "intro2":
			if(noSkip) {
				sendMessage(6,"He was able to control all elements and produce mountains of gold, heal sick with one look and much more. Eh, fairy tales...");
				setTimeout(function(){
					runEvent("intro3");
				},6000);
			}
			break;
		case "intro3":
			if(noSkip) {
				sendMessage(5,"But now that my father fell deadly ill, that story is the last thing that gives me hope.");
				setTimeout(function(){
					runEvent("intro4");
				},5000);
			}
			break;
		case "intro4":
			if(noSkip) {
				sendMessage(7,"I don't want to become god, but maybe Elemental research will let me discover some kind of medicine for my father.");
				setTimeout(function(){
					runEvent("intro5");
				},7000);
			}
			break;
		case "intro5":
			if(noSkip) {
				sendMessage(6,"Legend tells that knowledge of the Alchemist came from combining four base Elements together.");
				setTimeout(function(){
					runEvent("intro6");
				},6000);
			}
			break;
		case "intro6":
			if(noSkip) {
				sendMessage(10,"After few days of reading about Elements in library, I began to understand the basics. All you need to do begin experimenting is Elemental Glove (which I found at affordable price in nearby market)");
				setTimeout(function(){
					runEvent("intro7");
				},10000);
			}
			break;
		case "intro7":
			if(noSkip) {
				sendMessage(10,"Another required piece are Elemental Orbs. Luckily my grandmother used to play with one set of those, I found them in attic of our old house. <br>Rusted, almost broken, but should suffice for learning experience.");
				setTimeout(function(){
					runEvent("intro8");
				},10000);
			}
			break;
		case "intro8":
			if(noSkip) {
				sendMessage(10,"And so my study began within this littered room. Quickly I met my biggest obstacle. Elemental Glove can only handle 1 Element at the time.<br> How I'm supposed to combine 4 of them?");
				setTimeout(function(){
					runEvent("intro9");
				},10000);
			}
			break;
		case "intro9":
			if(noSkip) {
				sendMessage(14,"But elements inside Orbs can be manipulated with pipes and valves. It seems that grandmother had something setup, but it all crumbled with time.<br>Usually when two Elements happen to be in one container, they will disappear together, but I should investigate different possibilities first.");
				setTimeout(function(){
					runEvent("intro10");
				},14000);
			}
			break;
		case "intro10":
			sendMessage(14,"Well, using random debris I should fill Earth Orb with it's Element. Let's try to actually do something. I decided to make all my interactions with Orbs slow and steady. I don't want to destroy them by clicking too fast.");
			document.getElementById("element0").style.display="";
			document.getElementById("skipButton").remove();
			
			document.getElementById("containerButton").style.display="";
			document.getElementById("containerElement").style.display="";
			document.getElementById("containerMouse").style.display="";
			document.getElementById("tab0").style.display="";
			
			
			break;
		case "birthOfGolem":
			if(golemCount == 1) {
				var elementImploded = 0;
				while(elementArray[elementImploded][3]==0) {
					elementImploded++;
				}
				elementArray[elementImploded][3]=0;
				sendMessage(40,"I-I... I think I messed up. Nothing said that there was a capacity limit of Elemental Orb. It was supposed to condense Element and transfer excess to another plane of existence in case of overflow.<br>But something else happened. There was a big implosion inside "+
				elementArray[elementImploded][4]+" Orb and aftershock send me flying across the room. Aftermath of the situation: Every Element disappeared. Machines seem to be fine, but crystals inside exploded. I guess I need to upgrade machine tanks again.<br>"+
				"Now for the Orbs themselves. Hm, strange. Bases are left intact, but the compression crystals vibrate at high rate. I need to restart everything and test what are they doing.");
				setTimeout(function(){
					sendMessage(10,"Alright, whole setup is back in working order. Let's start again.");
					document.getElementById("upgrade5").style.display="";
					document.getElementById("upgrade25").style.display="";
				},39000);
				accumulatedTime -= 40000;
				
				setTimeout(function(){
					sendMessage(10,"Another implosion. "+elementArray[elementImploded][4]+" Orb transformed. I never saw anything like that before. It still hold Element like before, but compression crystal expanded ten-fold. I wonder what will happen when I fill it again. I need to do few adjustments and I'll let machines run again.");
					accumulatedTime -= 10000;
				},50000);
				setTimeout(function(){
					sendMessage(10,"Expanded Crystal started generating it's Element by itself. Did I just reverse overflow process?");
					elementArray[elementImploded][3]=1;
				},60000);
			} else {
				sendMessage(20,"Another Orb imploded.");
				accumulatedTime -= 15000;
				setTimeout(function(){
					sendMessage(10,"Alright, whole setup is back in working order. Let's continue.");
					document.getElementById("upgrade5").style.display="";
					document.getElementById("upgrade25").style.display="";
				},14000);
			}
			//Clear everything
			for(var j=0;j<unlockedElements;j++) {
				elementArray[j][0]=0;
			}
			for(var j=0;j<unlockedElements;j++) {
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
			break;
		case "channeledGolem":
			var sum = 0;
			for(var j=0;j<unlockedElements;j++) {
				if(elementArray[j][3]==2) {
					document.getElementById("elementTank"+j).style.visibility = "hidden";
					sum++;
				}
			}
			if(sum==1) {
				sendMessage(30,"I thought I only began to scratch capacity of new Orb, but it seems expanding crystal had reverse effect on Orb's capacity. This time overflow did not cause implosion, but compression crystal fully merged with Orb itself.<br>"+
				"I need to test my newest accidental creation");
				accumulatedTime -= 60000;
				
				setTimeout(function(){
					sendMessage(30,"Are those... eyes? Orb started to have gradual changes in it's shape. Now it looks more like a tear, and Element inside swirls in two small orbs.<br>"+
					"I feel like they are following my movement. I feel... strange about it. Anyway it seems that insides of Orb are fully connected to another plane. My input pipes coming out of it instantly fill and containers I provide to it. Well, that's certainly helpful.");
					elementArray[elementImploded][3]=1;
				},30000);
				setTimeout(function(){
					sendMessage(3,"Tests complete. I guess I should turn rest of the Orbs into this new entity. I decided to name it \"Golem\". Let's start cycle of machines again.");
				},57000);
			} else if(sum < 4){
				sendMessage(3,"Another Orb transformed into Golem. I need to continue.");
				accumulatedTime -= 5000;
			} else {
				sendMessage(3,"Last Orb transformed into Golem. It's time.");
				accumulatedTime -= 5000;
				setTimeout(function(){
					runEvent("outro0");
				},5000);
			}
			break;
		case "outro0":

			stopCondition = true;
			document.getElementById("containerButton").remove();
			document.getElementById("containerElement").remove();
			document.getElementById("containerMouse").remove();
			document.getElementById("tab0").remove();
			document.getElementById("tab1").remove();
			document.getElementById("tab2").remove();
			document.getElementById("tab3").remove();
			document.getElementById("tab4").remove();
			document.getElementById("tab5").remove();
			
			sendMessage(6,"Legend tells that knowledge of the Alchemist came from combining four base Elements together.");
			setTimeout(function(){
				runEvent("outro1");
			},6000);
			break;
		case "outro1":
			sendMessage(6,"I removed all Golems from their pedestals and put them in small circle.");
			setTimeout(function(){
				runEvent("outro1.1");
			},6000);
			break;
		case "outro1.1":
			sendMessage(10,"I tried it with Orbs. Touch every one of them at the same time. Complete failure, interaction between elements caused all Orbs to empty themselves.");
			setTimeout(function(){
				runEvent("outro2");
			},10000);
			break;
		case "outro2":
			sendMessage(6,"Now let's try it with Golems. I took my Elemental Glove and touched each Golem with one of my fingers.");
			setTimeout(function(){
				runEvent("outro3");
			},6000);
			break;
		case "outro3":
			sendMessage(6,"Blinding light. Vision. Old person running towards me. Loud shout, piercing every cell of my existence.");
			setTimeout(function(){
				runEvent("outro4");
			},6000);
			break;
		case "outro4":
			sendMessage(6,"\"Thou shall not meddle with Elements. Go back where you came from.\"");
			setTimeout(function(){
				runEvent("outro5");
			},6000);
			break;
		case "outro5":
			sendMessage(6,"Darkness. Quiet and comforting.");
			setTimeout(function(){
				runEvent("outro6");
			},6000);
			break;
		case "outro6":
			sendMessage(6,"I woke up slowly. I was still in attic of my old family house. I think. Every single piece of my machinery disappeared. What happened?");
			setTimeout(function(){
				runEvent("outro7");
			},6000);
			break;
		case "outro7":
			sendMessage(30,"Nothing. I don't remember what happened after hearing that shout. I know one thing though. Elemental Glove I used is now fused with my hand. I cannot take it off. I don't need to take it off. I think I can use it to go back there. To find out what lies on the other side. To find out what Alchemist hides. I'll be back, whether you like it or not.");
			setTimeout(function(){
				runEvent("outro8");
			},30000);
			break;
		case "outro8":
			document.getElementById("overlord").innerHTML = "Thank you for playing intro stage of my game. \\('_' ) <br><br> You can always refresh page to reset.";
			break;
	}
}
var noSkip = true;
function skipIntro() {
	noSkip = false;
	runEvent("intro10");
}
runEvent("intro0");

setInterval(punMaker,60000);
var puns = 0;
function punMaker() {
	switch(puns) {
		case 8:
			sendMessage(1,"You thought something interesting happened, but it was me, Dio.");
			break;
	}
	puns++;
	
}

