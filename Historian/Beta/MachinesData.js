var chartColors = {
	null: "#080808",
	working: "#686868",
	full: "#A8A8A8",
	empty: "#282828",
};
var machineData;
var machineDisplayElements = {};

function preprocessMachinesData(simplifiedDataToBeProcessed)
{
	machines.list = [];
	machines.dataTranslator = [];

	machines.glowCheckCD = 0;

	machineData = prepareTemplatedMachineData(simplifiedDataToBeProcessed);

	var count = 0;
	for (var title in machineData)
	{
		machineData[title].translatedID = count++;
		machines.dataTranslator.push(title);

		if (machineData[title].displayArray)
		{
			for (var i = 0; i < machineData[title].displayArray.length; i++)
			{
				machineDisplayElements[machineData[title].displayArray[i]] = title;
			}
		}
		else if (machineData[title].displayElement)
		{
			machineDisplayElements[machineData[title].displayElement] = title;
		}
		initMachine(title);
	}
}
