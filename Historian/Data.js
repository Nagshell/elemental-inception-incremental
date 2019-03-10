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
		"#212121",
		"#101010",
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
	machines: [
	{
		name: "Infuser",
		power: 1,
		tasks: [
		{
			name: "Earth Golems",
			scaling: false,
			input: [
			{
				type: "Earth",
				ratio: 4,
				min: 9,
			}],
			output: [
			{
				type: "GolemEarth",
				ratio: 1,
				max: 100,
			}],
		},
		{
			scaling: false,
			input: [
			{
				type: "Water",
				ratio: 4,
				min: 9,
			}],
			output: [
			{
				type: "GolemWater",
				ratio: 1,
				max: 100,
			}],
		},
		{
			scaling: false,
			input: [
			{
				type: "Air",
				ratio: 4,
				min: 9,
			}],
			output: [
			{
				type: "GolemAir",
				ratio: 1,
				max: 100,
			}],
		},
		{
			scaling: false,
			input: [
			{
				type: "Fire",
				ratio: 4,
				min: 9,
			}],
			output: [
			{
				type: "GolemFire",
				ratio: 1,
				max: 100,
			}],
		}, ],
	},
	{
		name: "Liquefier",
		power: 1,
		tasks: [
		{
			scaling: true,
			input: [
			{
				type: "Earth",
				ratio: 1,
				min: 1,
			},
			{
				type: "Water",
				ratio: 1,
				min: 1,
			}],
			output: [
			{
				type: "Water",
				ratio: 2.1,
				max: 9.5,
			}],
		}, ],
	},
	{
		name: "Rift",
		power: 1,
		tasks: [
		{
			scaling: false,
			input: [],
			output: [
			{
				type: "Earth",
				ratio: 0.001,
				max: 1.5,
			},
			{
				type: "Air",
				ratio: 0.001,
				max: 1.5,
			},
			{
				type: "Water",
				ratio: 0.001,
				max: 1.5,
			},
			{
				type: "Fire",
				ratio: 0.001,
				max: 1.5,
			}],
		}, ],
	},
	{
		name: "Boiler",
		power: 1,
		tasks: [
		{
			scaling: true,
			input: [
			{
				type: "Water",
				ratio: 1,
				min: 1,
			},
			{
				type: "Fire",
				ratio: 1,
				min: 1,
			}],
			output: [
			{
				type: "Air",
				ratio: 2.1,
				max: 9.5,
			}],
		}, ],
	},
	{
		name: "Combustor",
		power: 2,
		tasks: [
		{
			scaling: true,
			input: [
			{
				type: "Air",
				ratio: 1,
				min: 1,
			},
			{
				type: "Fire",
				ratio: 1,
				min: 1,
			}],
			output: [
			{
				type: "Fire",
				ratio: 2.05,
				max: 9.5,
			}],
		}, ],
	},
	{
		name: "Volcano",
		power: 1,
		tasks: [
		{
			scaling: true,
			input: [
			{
				type: "Earth",
				ratio: 1,
				min: 1,
			},
			{
				type: "Fire",
				ratio: 1,
				min: 1,
			}],
			output: [
			{
				type: "Earth",
				ratio: 2.1,
				max: 9.5,
			}],
		}, ],
	}, ],
}

var data = {
	aElements: [],
	oElements:
	{},
	oElementsFlow:
	{},
	aMachines: [],
	oMachines:
	{},
	elementsKnown:0,
}

function preprocess()
{
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

	for (var i = 0; i < initialData.machines.length; i++)
	{
		data.oMachines[initialData.machines[i].name] = {
			iTask: 0,
			working: false,
			power: initialData.machines[i].power,
			tasks: initialData.machines[i].tasks,
			name: initialData.machines[i].name,
			index: i,
		};
		data.aMachines[i] = data.oMachines[initialData.machines[i].name];
	}

	initialData = null;
}

var machines = [];

preprocess();
