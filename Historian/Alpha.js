var data = {
	elements : [0.01,0,0,0,0.0,0.0,0.0,0.0,0.0,0,0],
	elemFlow : [0,0,0,0,0,0,0,0,0,0,0],
	elemTankCoords : [[500,500],[300,500],[300,300],[500,300],[400,700],[100,400],[200,200],[600,200],[700,400],[400,250],[400,400]],
}

var machines = [
	{
		input : [
			{type:0,amount:1,min:1},
			{type:1,amount:1,min:1},
		],
		output : [{type:1,amount:2.1,max:4}],
		power : 0.5,
	},
	{
		input : [
			{type:1,amount:1,min:1},
			{type:3,amount:1,min:3},
		],
		output : [{type:2,amount:2.1,max:4}],
		power : 0.5,
	},
	{
		input : [
			{type:2,amount:1,min:1},
			{type:3,amount:1,min:1},
		],
		output : [{type:3,amount:2.1,max:4}],
		power : 1,
	},
	{
		input : [
			{type:0,amount:1,min:1},
			{type:3,amount:1,min:1},
		],
		output : [{type:0,amount:2.1,max:4}],
		power : 0.5,
	},
	
	{
		input : [
			{type:0,amount:1e5,min:1e4},
			{type:1,amount:1e5,min:1e4},
		],
		output : [{type:4,amount:1,max:2}],
		power : 1,
	},
	
	{
		input : [
			{type:4,amount:1,min:1},
			{type:2,amount:1e2,min:1e3},
		],
		output : [{type:5,amount:0.9,max:100}],
		power : 1,
	},
	
	{
		input : [
			{type:5,amount:1,min:1},
			{type:0,amount:1e2,min:1e3},
			{type:3,amount:1e2,min:1e3},
		],
		output : [{type:7,amount:0.9,max:100}],
		power : 1,
	},
	
	{
		input : [
			{type:7,amount:1,min:1},
			{type:3,amount:1e2,min:1e3},
		],
		output : [{type:8,amount:0.9,max:100}],
		power : 1,
	},
	
	{
		input : [
			{type:8,amount:1,min:1},
			{type:1,amount:1e2,min:1e3},
		],
		output : [
			{type:4,amount:0.5},
			{type:6,amount:0.5,max:100}
		],
		power : 1,
	},
	
	{
		input : [
			{type:6,amount:1,min:1},
			{type:7,amount:1,min:1},
		],
		output : [
			{type:4,amount:2.5},
			{type:9,amount:0.5,max:100}
		],
		power : 1,
	},
	
	{
		input : [
			{type:9,amount:1,min:1},
		],
		output : [
			{type:4,amount:2.5,max:100},
			{type:9,amount:0.5}
		],
		power : 1,
	},
	
	{
		input : [
			{type:9,amount:10,min:10},
			{type:0,amount:1e7,min:1e4},
			{type:1,amount:1e7,min:1e4},
			{type:2,amount:1e7,min:1e4},
			{type:3,amount:1e7,min:1e4},
		],
		output : [
			{type:10,amount:1,max:100},
		],
		power : 1,
	},
	
	{
		input : [
			{type:0,amount:1,min:0.25},
		],
		output : [
			{type:1,amount:1,max:2},
		],
		power : 1,
	},
	{
		input : [
			{type:0,amount:1,min:0.5},
		],
		output : [
			{type:2,amount:1,max:2},
		],
		power : 1,
	},
	{
		input : [
			{type:0,amount:1,min:0.75},
		],
		output : [
			{type:3,amount:1,max:2},
		],
		power : 1,
	},
	{
		input : [
			{type:0,amount:1},
		],
		output : [
			{type:0,amount:1.2,max:3},
		],
		power : 1,
	},
];

var machineLag = 0;
var startup = true;
function tick() {
	if(startup) {
		if(data.elements[0]>4)
			if(data.elements[1]>4)
				if(data.elements[2]>4)
					if(data.elements[3]>4) {
						machines[0].output[0].max=1e5;
						machines[1].output[0].max=1e5;
						machines[2].output[0].max=1e5;
						machines[3].output[0].max=1e5;
						startup = false;
					}
	}
	
	if(machineLag--==0) {
		machineLag = 0;
		for(var i=0;i<machines.length;i++) {
			var oMachine = machines[i];
			var limitsReached = false;
			for(var j=0;j<oMachine.input.length;j++) {
				if(oMachine.input[j].min)
				if(data.elements[oMachine.input[j].type] < oMachine.input[j].min) {
					limitsReached = true;
					break;
				}
			}
			for(var j=0;j<oMachine.output.length;j++) {
				if(oMachine.output[j].max)
				if(data.elements[oMachine.output[j].type] > oMachine.output[j].max) {
					limitsReached = true;
					break;
				}
			}
			
			if(limitsReached) continue;
			
			var vReactiveAmount = data.elements[oMachine.input[0].type]/oMachine.input[0].amount;
			for(var j=0;j<oMachine.input.length;j++) {
				var vTemp = data.elements[oMachine.input[j].type]/oMachine.input[j].amount;
				if(vTemp < vReactiveAmount) {
					vReactiveAmount = vTemp;
				}
			}
			
			vReactiveAmount *= 0.1 * oMachine.power;
			for(var j=0;j<oMachine.output.length;j++) {
				data.elemFlow[oMachine.output[j].type]+=vReactiveAmount * oMachine.output[j].amount;
			}
			for(var j=0;j<oMachine.input.length;j++) {
				data.elemFlow[oMachine.input[j].type] -= vReactiveAmount * oMachine.input[j].amount;
			}
		}
		
		for(var j=0;j<data.elemFlow.length;j++) {
			data.elements[j] += data.elemFlow[j];
			data.elemFlow[j] = 0;
		}
	}
}

function click(x,y){}
function hover(x,y){}





// Loop timer
var lastTimestamp = null;
var accumulatedTime = 0;

function loop(timestamp) {
	if(!lastTimestamp) {
		lastTimestamp = timestamp;
	}
	accumulatedTime += timestamp - lastTimestamp;
	lastTimestamp = timestamp;
	var rounds = 0;
	while(accumulatedTime > 16 && rounds++<4) {
		accumulatedTime-=16;
		tick();
	}
	draw();
	requestAnimationFrame(loop);
}
requestAnimationFrame(loop);