var images = {};

function preprocessIcons()
{
	var resizabledIconList = [
		"iconOk",
		"iconOn",
		"iconOff",
		"iconOffTransparent",
		"iconUp",
		"iconUpNot",
		"iconLeft",
		"iconRight",
		"iconLock",
		"iconShow",
		"iconShowUp",
		"iconPause",
		"iconPauseTransparent",
		"iconResume",
		"iconHide",
		"iconDrag",
		"iconMin",
		"iconMax",
		"iconPin",
		"iconPinNot",
		"iconNext",
		"iconPrev",
	];
	var size = optionData.iconSize;
	for (var i = 0; i < resizabledIconList.length; i++)
	{
		var img = new Image();
		images[resizabledIconList[i]] = img;
		img.src = "img/icon" + size + "/" + resizabledIconList[i] + ".png";
	}
}

function preprocessImages()
{
	var imageList = [
		"iconMissing",

		"iconEarth",
		"iconWater",
		"iconAir",
		"iconFire",
		"iconMud",
		"iconIce",
		"iconSteam",
		"iconSand",
		"iconMagma",
		"iconVoid",
		"iconAlkahest",
		"iconGolemEarth",
		"iconGolemWater",
		"iconGolemAir",
		"iconGolemFire",

		"iconGale",

		"iconPlantEarth",
		"iconPlantWater",
		"iconPlantAir",
		"iconPlantFire",

		"iconSeedEarth",
		"iconSeedWater",
		"iconSeedAir",
		"iconSeedFire",

		"iconEmerald",
		"iconSapphire",
		"iconTopaz",
		"iconRuby",

		"buttonConfirm",
		"buttonConfirmCrossed",
		"buttonCancel",

		"machineBase",
		"machineEarth",
		"machineWater",
		"machineAir",
		"machineFire",

		"golemMerger",

		"machineMud",
		"machineIce",
		"machineSteam",
		"machineMagma",
		"machineSand",
		"machineVoid",
		"machineNexus",

		"machineGold",
		"machineSilver",
		"machineBronze",
		"machineCopper",
		"machineTin",
		"machineAluminum",
		"machineIron",
		"machineSteel",

		"machineTime",

		"machineOil",

		"machineSnow",
		"machineCryogen",
		"machineCoolant",
		"machineGale",
		"machineCryospire",
		"machineVortex",

		"machineLava",
		"machineObsidian",

		"machinePlantEarth", //*/

		"machineEmerald",
		"machineSapphire",
		"machineTopaz",
		"machineRuby",

		"tutorialPage0",
		"tutorialPage1",
		"tutorialPage2",
		"tutorialPage3",
		"tutorialPage4",
		"tutorialPage5",
		"tutorialPage6",
		"tutorialPage7",
		"tutorialPage8",

		"changelogPage0",
		"changelogPage1",
		"changelogPage2",
		"changelogPage3",
		"changelogPage4",

		"donationPage",

		"iconLegend",

		"midBackground1", "midBackground2", "midBackground3", "midBackground4",
		"reachBackground1", "reachBackground2", "reachBackground3",
		"lifeBackground1", "lifeBackground2", "lifeBackground3", "lifeBackground4",
		"coldBackground1", "coldBackground2", "coldBackground3",

	];
	for (var i = 0; i < imageList.length; i++)
	{
		var img = new Image();
		images[imageList[i]] = img;
		img.src = "img/" + imageList[i] + ".png";
	}
}
preprocessImages();
