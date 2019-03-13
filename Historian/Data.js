var elementalColors = {
	Earth: [
		"#008E4B",
		"#006C2D",
		"#004C10",
		"#002F00",
	],
	Water: [
		"#1D8EB3",
		"#006B8E",
		"#004A6B",
		"#002B4A",
	],
	Air: [
		"#C7C796",
		"#919264",
		"#5E6035",
		"#2F3208",
	],
	Fire: [
		"#C7442F",
		"#A22115",
		"#7E0000",
		"#5D0000",
	],
	GolemEarth: [
		"#008E4B",
		"#006C2D",
		"#004C10",
		"#002F00",
	],
	GolemWater: [
		"#1D8EB3",
		"#006B8E",
		"#004A6B",
		"#002B4A",
	],
	GolemAir: [
		"#C7C796",
		"#919264",
		"#5E6035",
		"#2F3208",
	],
	GolemFire: [
		"#C7442F",
		"#A22115",
		"#7E0000",
		"#5D0000",
	],
	Mud: [
		"#956851",
		"#754B35",
		"#552F1B",
		"#381600",
	],
	Magma: [
		"#D35400",
		"#740000",
		"#B23800",
		"#590000",
	],
	Ice: [
		"#E4F1FE",
		"#4F5A65",
		"#B1F0FF",
		"#8CAFCE",
	],
	Sand: [
		"#BBBBA2",
		"#898972",
		"#F0F0D6",
		"#5A5A44",
	],
	Steam: [
		"#FFFFFF",
		"#AFBCC8",
		"#E4F1FE",
		"#AFBCC8",
	],
	Void: [
		"#2E3131",
		"#212121",
		"#101010",
		"#000000",
	],
	Alkahest: [
		"#9E4B8C",
		"#620F55",
		"#46003B",
		"#23001D",
	],
}
var elementalDisplayType = {
	Earth: "exp",
	Air: "exp",
	Water: "exp",
	Fire: "exp",
	Mud: "exp",
	Magma: "exp",
	Ice: "exp",
	Sand: "exp",
	Steam: "exp",
	Void: "exp",
	Alkahest: "exp",
	GolemEarth: "",
	GolemAir: "",
	GolemWater: "",
	GolemFire: "",
}

var initialData = {
	elements: ["Earth", "Water", "Air", "Fire", "Mud", "Ice", "Steam", "Sand", "Magma", "Void", "Alkahest", "GolemEarth", "GolemWater", "GolemAir", "GolemFire"],
}
var data;

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
			type: initialData.elements[i],
			index: i,
		};
		data.aElements[i] = data.oElements[initialData.elements[i]];
		data.oElementsFlow[initialData.elements[i]] = 0;
	}
}
