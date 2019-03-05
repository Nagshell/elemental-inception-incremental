var chartColors = {
	null: "#080808",
	working: "#686868",
	full: "#A8A8A8",
	empty: "#282828",
};
var machineData = {
	Liquefier:
	{
		x: 300,
		y: 400,
		displayRegionRegularDraw: true,
		displayElement: "Water",
		paneRegularDraw: true,
		recipes: [
		{
			title: "T1 Water Conversion",
			enabled: false,
			unlocked: false,
			scaling: true,
			productionRate: 1,
			efficiency: 1.01,
			inputs: [
			{
				type: "Earth",
				ratio: 1,
				min: 2,
				slider: 1,

				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Earth",
						amount: 10,
					}],
				}, ],
			},
			{
				type: "Water",
				ratio: 1,
				min: 1,
				slider: 1,
				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Water",
						amount: 20,
					}],
				}, ],
			}],
			outputs: [
			{
				type: "Water",
				ratio: 2,
				max: 11,
				slider: 1,
				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Water",
						amount: 10,
					}],
				}, ],
			}, ],
		}, ],
	},
	Boiler:
	{
		x: 300,
		y: 200,
		displayRegionRegularDraw: true,
		displayElement: "Air",
		paneRegularDraw: true,
		recipes: [
		{
			title: "T1 Air Conversion",
			enabled: false,
			unlocked: false,
			scaling: true,
			productionRate: 1,
			efficiency: 1.01,
			inputs: [
			{
				type: "Water",
				ratio: 1,
				min: 2,
				slider: 1,

				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Earth",
						amount: 10,
					}],
				}, ],
			},
			{
				type: "Fire",
				ratio: 1,
				min: 2,
				slider: 1,
				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Water",
						amount: 20,
					}],
				}, ],
			}],
			outputs: [
			{
				type: "Air",
				ratio: 2,
				max: 11,
				slider: 1,
				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Water",
						amount: 10,
					}],
				}, ],
			}, ],
		}, ],
	},
	Combustor:
	{
		x: 500,
		y: 200,
		displayRegionRegularDraw: true,
		displayElement: "Fire",
		paneRegularDraw: true,
		recipes: [
		{
			title: "T1 Fire Conversion",
			enabled: false,
			unlocked: false,
			scaling: true,
			productionRate: 1,
			efficiency: 1.01,
			inputs: [
			{
				type: "Air",
				ratio: 1,
				min: 1,
				slider: 1,

				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Earth",
						amount: 10,
					}],
				}, ],
			},
			{
				type: "Fire",
				ratio: 1,
				min: 1,
				slider: 1,
				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Water",
						amount: 20,
					}],
				}, ],
			}],
			outputs: [
			{
				type: "Fire",
				ratio: 2,
				max: 11,
				slider: 1,
				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Water",
						amount: 10,
					}],
				}, ],
			}, ],
		}, ],
	},
	Volcano:
	{
		x: 500,
		y: 400,
		displayRegionRegularDraw: true,
		displayElement: "Earth",
		paneRegularDraw: true,
		recipes: [
		{
			title: "T1 Earth Conversion",
			enabled: false,
			unlocked: false,
			scaling: true,
			productionRate: 1,
			efficiency: 1.01,
			inputs: [
			{
				type: "Earth",
				ratio: 1,
				min: 1,
				slider: 1,

				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Earth",
						amount: 10,
					}],
				}, ],
			},
			{
				type: "Fire",
				ratio: 1,
				min: 4,
				slider: 1,
				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Water",
						amount: 20,
					}],
				}, ],
			}],
			outputs: [
			{
				type: "Earth",
				ratio: 2,
				max: 11,
				slider: 1,
				upped: 0,
				upgrades: [
				{
					costs: [
					{
						type: "Water",
						amount: 10,
					}],
				}, ],
			}, ],
		}, ],
	},
};

function preprocessMachinesData()
{
	for (var title in machineData)
	{
		new cMachine(title);
	}
}
preprocessMachinesData();
