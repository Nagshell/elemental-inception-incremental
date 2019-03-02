var machineData = {
	Liquefier:
	{
		x: 300,
		y: 400,
		displayRegionRegularDraw: true,
		displayRegionElement: "Water",
		paneRegularDraw: true,
		recipes: [
		{
			title: "Water Conversion",
			enabled: false,
			scaling: true,
			efficiency: 1.01,
			inputs: [
			{
				type: "Earth",
				ratio: 1,
				min: 1,
				slider: 1,
			},
			{
				type: "Water",
				ratio: 1,
				min: 1,
				slider: 1,
			}],
			outputs: [
			{
				type: "Water",
				ratio: 2,
				max: 11,
				slider: 1,
			}],
		}],
	},
	Boiler:
	{
		x: 300,
		y: 200,
		displayRegionRegularDraw: true,
		displayRegionElement: "Air",
		recipes: [],
	},
	Combustor:
	{
		x: 500,
		y: 200,
		displayRegionRegularDraw: true,
		displayRegionElement: "Fire",
		recipes: [],
	},
	Volcano:
	{
		x: 500,
		y: 400,
		displayRegionRegularDraw: true,
		displayRegionElement: "Earth",
		recipes: [],
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
