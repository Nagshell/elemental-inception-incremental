var initialData = {
	elements: ["Earth", "Water", "Air", "Fire", "Mud", "Ice", "Steam", "Sand", "Magma", "Void", "Alkahest", "GolemEarth", "GolemWater", "GolemAir", "GolemFire"],
	machines: [{
			name: "Infuser",
			power: 1,
			tasks: [{
					name: "Earth Golems",
					scaling: false,
					input: [{
						type: "Earth",
						ratio: 4,
						min: 9,
					}],
					output: [{
						type: "GolemEarth",
						ratio: 1,
						max: 100,
					}],
				},
				{
					scaling: false,
					input: [{
						type: "Water",
						ratio: 4,
						min: 9,
					}],
					output: [{
						type: "GolemWater",
						ratio: 1,
						max: 100,
					}],
				},
				{
					scaling: false,
					input: [{
						type: "Air",
						ratio: 4,
						min: 9,
					}],
					output: [{
						type: "GolemAir",
						ratio: 1,
						max: 100,
					}],
				},
				{
					scaling: false,
					input: [{
						type: "Fire",
						ratio: 4,
						min: 9,
					}],
					output: [{
						type: "GolemFire",
						ratio: 1,
						max: 100,
					}],
				},
			],
		},
		{
			name: "Liquefier",
			power: 1,
			tasks: [{
				scaling: true,
				input: [{
					type: "Earth",
					ratio: 1,
					min: 1,
				}, {
					type: "Water",
					ratio: 1,
					min: 1,
				}],
				output: [{
					type: "Water",
					ratio: 2.1,
					max: 9.5,
				}],
			}, ],
		},
		{
			name: "Rift",
			power: 1,
			tasks: [{
				scaling: false,
				input: [],
				output: [{
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
					}
				],
			}, ],
		},
		{
			name: "Boiler",
			power: 1,
			tasks: [{
				scaling: true,
				input: [{
					type: "Water",
					ratio: 1,
					min: 1,
				}, {
					type: "Fire",
					ratio: 1,
					min: 1,
				}],
				output: [{
					type: "Air",
					ratio: 2.1,
					max: 9.5,
				}],
			}, ],
		},
		{
			name: "Combustor",
			power: 2,
			tasks: [{
				scaling: true,
				input: [{
					type: "Air",
					ratio: 1,
					min: 1,
				}, {
					type: "Fire",
					ratio: 1,
					min: 1,
				}],
				output: [{
					type: "Fire",
					ratio: 2.05,
					max: 9.5,
				}],
			}, ],
		},
		{
			name: "Volcano",
			power: 1,
			tasks: [{
				scaling: true,
				input: [{
					type: "Earth",
					ratio: 1,
					min: 1,
				}, {
					type: "Fire",
					ratio: 1,
					min: 1,
				}],
				output: [{
					type: "Earth",
					ratio: 2.1,
					max: 9.5,
				}],
			}, ],
		},
	],
}

var data = {
	aElements: [],
	oElements: {},
	oElementsFlow: [],
	aMachines: [],
	oMachines: {},
}

function preprocess() {
	for (var i = 0; i < initialData.elements.length; i++) {
		data.oElements[initialData.elements[i]] = {
			amount: 0,
			type: initialData.elements[i],
			index: i,
		};
		data.aElements[i] = data.oElements[initialData.elements[i]];
		data.oElementsFlow[initialData.elements[i]] = 0;
	}

	for (var i = 0; i < initialData.machines.length; i++) {
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
