imagesPreload = false;
var elementalColors = {
	Earth: ["#008E4B", "#006C2D", "#004C10", "#002F00"],
	Water: ["#1D8EB3", "#006B8E", "#004A6B", "#002B4A"],
	Air: ["#C7C796", "#919264", "#5E6035", "#2F3208"],
	Fire: ["#C7442F", "#A22115", "#7E0000", "#5D0000"],
	Time: ["#CE8BCC", "#CE8BCC", "#CE8BCC", "#CE8BCC"],
	NormalLimit: ["#23001D", "#23001D", "#23001D", "#23001D"],
	TurboLimit: ["#23001D", "#23001D", "#23001D", "#23001D"],
};
var elementalDisplayType = {
	Earth: "exp",
	Air: "exp",
	Water: "exp",
	Fire: "exp",
	Time: "exp",
};

var initialData = {
	elements: [],
};
var data;
var optionData = {
	iconSize: 24,
	particleCDMultiplier: 1,
	glowCheckCDMultiplier: 1,
};

function preprocessData()
{
	data = {
		aElements: [],
		oElements:
		{},
		oElementsFlow:
		{},
		aMachines: [],
		oMachines:
		{},
		elementsKnown: 0,
	};
	for (var i = 0; i < initialData.elements.length; i++)
	{
		data.oElements[initialData.elements[i]] = {
			amount: 0,
			possibleAmount: 0,
			type: initialData.elements[i],
			index: i,
		};
		data.aElements.push(data.oElements[initialData.elements[i]]);
		data.oElementsFlow[initialData.elements[i]] = 0;
	}
}
