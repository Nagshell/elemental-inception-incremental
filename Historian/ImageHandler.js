var images = {};

function preprocessImages()
{
	var imageList = [
		"iconOn",
		"iconOff",
		"iconUp",
		"iconUpNot",
		"iconLeft",
		"iconRight",
		"iconLock",
		"iconShow",
		"iconPause",
		"iconResume",
		"iconHide",
		"iconDrag",
		"iconMin",
		"iconMax",
		"iconPin",
		"iconPinNot",
		"iconNext",
		"iconPrev",

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
		"iconMergerDisplay",

		"buttonConfirm",
		"buttonConfirmCrossed",
		"buttonCancel",

		"machineBase",
		"machineEarth",
		"machineWater",
		"machineAir",
		"machineFire",
		"machineMud",
		"machineIce",
		"machineSteam",
		"machineMagma",
		"machineSand",

		"machineVoid",
		"machineNexus",

		"mainBackground1",
		"mainBackground2",
		"mainBackground3",
		"mainBackground4",

		"tutorialPage0",
		"tutorialPage1",
		"tutorialPage2",
		"tutorialPage3",
		"tutorialPage4",
		"tutorialPage5",
		"tutorialPage6",
		"tutorialPage7",
	];
	for (var i = 0; i < imageList.length; i++)
	{
		var img = new Image();
		images[imageList[i]] = img;
		img.src = "img/" + imageList[i] + ".png";
	}
}
preprocessImages();
