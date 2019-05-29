imagesPreload = false;
var elementalColors = {
	Earth: ["#008E4B", "#006C2D", "#004C10", "#002F00"],
	Water: ["#1D8EB3", "#006B8E", "#004A6B", "#002B4A"],
	Air: ["#C7C796", "#919264", "#5E6035", "#2F3208"],
	Fire: ["#C7442F", "#A22115", "#7E0000", "#5D0000"],
	GolemEarth: ["#008E4B", "#006C2D", "#004C10", "#002F00"],
	GolemWater: ["#1D8EB3", "#006B8E", "#004A6B", "#002B4A"],
	GolemAir: ["#C7C796", "#919264", "#5E6035", "#2F3208"],
	GolemFire: ["#C7442F", "#A22115", "#7E0000", "#5D0000"],
	Mud: ["#956851", "#754B35", "#552F1B", "#381600"],
	Magma: ["#D35400", "#740000", "#B23800", "#590000"],
	Ice: ["#E4F1FE", "#4F5A65", "#B1F0FF", "#8CAFCE"],
	Sand: ["#BBBBA2", "#898972", "#F0F0D6", "#5A5A44"],
	Steam: ["#FFFFFF", "#AFBCC8", "#E4F1FE", "#AFBCC8"],
	Void: ["#2E3131", "#212121", "#101010", "#000000"],
	Alkahest: ["#9E4B8C", "#821F65", "#46003B", "#23001D"],
	Revelation: ["#bfbfbf", "#bfbfbf", "#bfbfbf", "#bfbfbf"],
	Knowledge: ["#bfbfbf", "#bfbfbf", "#bfbfbf", "#bfbfbf"],
	Essence: ["#c1f0ea", "#98e6db", "#2cb9a5", "#239081"],
	Soil: ["#a35910", "#b15214", "#743f0b", "#462607"],
	Obsidian: ["#400080", "#400080", "#130047", "#0d001a"],
	Lava: ["#f89406", "#f15a22", "#f89406", "#481705"],
	Oil: ["#000000", "#004646", "#001313", "#001313"],
	Force: ["#d9d9d9", "#404040", "#fde3a7", "#595959"],
	Space: ["#eddede", "#ffffff", "#d9d9d9", "abbaba"],
	Glass: ["#ffffff", "#bfbfbf", "#d9d9d9", "#a8ccd7"],
	Gold: ["#FFD700", "#e6c200", "#ffe34d", "#b39600"],
	Snow: ["#e4f1fe", "#e6f2fe", "#e4f1fe", "#b5d9fc"],
	Cryogen: ["#84bffa", "#53a6f9", "#b5d9fc", "#228cf7"],
	Solution: ["#d5b8ff", "#b480ff", "#d2b3ff", "#f0e5ff"],
	DistilledEarth: ["#d2b3ff", "#006C2D", "#004C10", "#002F00"],
	DistilledWater: ["#d2b3ff", "#006B8E", "#004A6B", "#002B4A"],
	DistilledAir: ["#d2b3ff", "#919264", "#5E6035", "#2F3208"],
	DistilledFire: ["#d2b3ff", "#A22115", "#7E0000", "#5D0000"],
	Pressure: ["#e8ecf1", "#ececec", "#e8e8e8", "#c8c8c8"],
	CompressedEarth: ["#004E2B", "#006C2D", "#004C10", "#002F00"],
	CompressedWater: ["#0D4E63", "#006B8E", "#004A6B", "#002B4A"],
	CompressedAir: ["#777746", "#919264", "#5E6035", "#2F3208"],
	CompressedFire: ["#77241F", "#A22115", "#7E0000", "#5D0000"],
	EssenceEarth: ["#98e6db", "#006C2D", "#004C10", "#002F00"],
	EssenceWater: ["#98e6db", "#006B8E", "#004A6B", "#002B4A"],
	EssenceAir: ["#98e6db", "#919264", "#5E6035", "#2F3208"],
	EssenceFire: ["#98e6db", "#A22115", "#7E0000", "#5D0000"],
	SoilEarth: ["#743f0b", "#006C2D", "#004C10", "#002F00"],
	SoilWater: ["#743f0b", "#006B8E", "#004A6B", "#002B4A"],
	SoilAir: ["#743f0b", "#919264", "#5E6035", "#2F3208"],
	SoilFire: ["#743f0b", "#A22115", "#7E0000", "#5D0000"],
	SeedEarth: ["#004C10", "#006C2D", "#004C10", "#002F00"],
	SeedWater: ["#004A6B", "#006B8E", "#004A6B", "#002B4A"],
	SeedAir: ["#5E6035", "#919264", "#5E6035", "#2F3208"],
	SeedFire: ["#7E0000", "#A22115", "#7E0000", "#5D0000"],
	PlantEarth: ["#87d37c", "#006C2D", "#004C10", "#002F00"],
	PlantWater: ["#87d37c", "#006B8E", "#004A6B", "#002B4A"],
	PlantAir: ["#87d37c", "#919264", "#5E6035", "#2F3208"],
	PlantFire: ["#87d37c", "#A22115", "#7E0000", "#5D0000"],
	PureEssenceEarth: ["#98e6db", "#008E4B", "#008E4B", "#008E4B"],
	PureEssenceWater: ["#98e6db", "#1D8EB3", "#1D8EB3", "#1D8EB3"],
	PureEssenceAir: ["#98e6db", "#C7C796", "#C7C796", "#C7C796"],
	PureEssenceFire: ["#98e6db", "#C7442F", "#C7442F", "#C7442F"],
	PureEarth: ["#008E4B", "#008E4B", "#008E4B", "#008E4B"],
	PureWater: ["#1D8EB3", "#1D8EB3", "#1D8EB3", "#1D8EB3"],
	PureAir: ["#C7C796", "#C7C796", "#C7C796", "#C7C796"],
	PureFire: ["#C7442F", "#C7442F", "#C7442F", "#C7442F"],
	PureGolemEarth: ["#FFFFFF", "#008E4B", "#008E4B", "#008E4B"],
	PureGolemWater: ["#FFFFFF", "#1D8EB3", "#1D8EB3", "#1D8EB3"],
	PureGolemAir: ["#FFFFFF", "#C7C796", "#C7C796", "#C7C796"],
	PureGolemFire: ["#FFFFFF", "#C7442F", "#C7442F", "#C7442F"],
	Coolant: ["#e4f1fe", "#e6f2fe", "#b5d9fc", "#228cf7"],
	Gale: ["#e4f1fe", "#e6f2fe", "#e4f1fe", "#b5d9fc"],
	Cryospire: ["#84bffa", "#53a6f9", "#b5d9fc", "#228cf7"],
	Vortex: ["#e4f1fe", "#e6f2fe", "#B1F0FF", "#8CAFCE"],
	Blaze: ["#481705", "#f15a22", "#f15a22", "#f15a22"],
	Blast: ["#481705", "#a7350c", "#481705", "#772608"],
	Pyro: ["#481705", "#f89406", "#f89406", "#f89406"],
	Coal: ["#481705", "#262626", "#262626", "#262626"],
	Sulphur: ["#fef160", "#f5d76e", "#f2d984", "#ffec8b"],
	Propane: ["#141414", "#646464", "#141414", "#646464"],
	Ash: ["#484848", "#484848", "#484848", "#484848"],
	Dust: ["#848484", "#848484", "#848484", "#848484"],
	Carbon: ["#050505", "#212121", "#262626", "#212121"],
	Power: ["#fff9de", "#fff9de", "#fff9de", "#fff9fe"],
	Energy: ["#fff9de", "#f5e653", "#f5e51b", "#f5e51b"],
	Fuel: ["#ffec8b", "#fcb941", "#fcb941", "#fcb941"],
	Diesel: ["#c8f7c5", "#ffec8b", "#c8f7c5", "#ffec8b"],
	Petrol: ["#f15a22", "#f15a22", "#c8f7c5", "#e8f7e5"],
	Propene: ["#646464", "#141414", "#646464", "#141414"],
	Spatial: ["#eddede", "#ffffff", "#d9d9d9", "abbaba"],
	Temporal: ["#eddede", "#ffffff", "#d9d9d9", "abbaba"],
	Parallel: ["#eddede", "#ffffff", "#d9d9d9", "abbaba"],
	FoldedSpace: ["#eddede", "#ffffff", "#d9d9d9", "abbaba"],
	FoldedSpatial: ["#eddede", "#ffffff", "#d9d9d9", "abbaba"],
	FoldedTemporal: ["#eddede", "#ffffff", "#d9d9d9", "abbaba"],
	Time: ["#CE8BCC", "#CE8BCC", "#CE8BCC", "#CE8BCC"],
	NormalLimit: ["#23001D", "#23001D", "#23001D", "#23001D"],
	TurboLimit: ["#23001D", "#23001D", "#23001D", "#23001D"],
	Silver: ["#C0C0C0", "#C0C0C0", "#C0C0C0", "#C0C0C0"],
	Bronze: ["#cd7f32", "#cd7f32", "#cd7f32", "#cd7f32"],
	Copper: ["#b87333", "#b87333", "#b87333", "#b87333"],
	Tin: ["#d3d4d5 ", "#d3d4d5 ", "#d3d4d5 ", "#d3d4d5 "],
	Aluminum: ["#848789", "#848789", "#848789", "#848789"],
	Iron: ["#C0CCCC", "#C0CCCC", "#C0CCCC", "#C0CCCC"],
	Steel: ["#CACCCE", "#CACCCE", "#CACCCE", "#CACCCE"],
	Clay: ["#734222", "#734222", "#734222", "#734222"],
	Plastic: ["#EFECD8", "#EFECD8", "#EFECD8", "#EFECD8"],
	Silicon: ["#9599a5", "#9599a5", "#9599a5", "#9599a5"],
	Acid: ["#b0bf1a", "#b0bf1a", "#b0bf1a", "#b0bf1a"],
	CompressedDust: ["#e5ccc9", "#e5ccc9", "#e5ccc9", "#a58c89"],
	CompressedAsh: ["#b2beb5", "#b2beb5", "#b2beb5", "#929e95"],
	Gravel: ["#484642", "#4a4b46", "#504C48", "#666666"],
	Pebbles: ["#8D8D8D", "#666666", "#4D4D4D", "#3C3C3C"],
	Stone: ["#3C3C3C", "#666666", "#4D4D4D", "#8D8D8D"],
	Gemstone: ["#888888 ", "#888888", "#444444", "#444444"],
	Quartz: ["#cab8c9", "#aa98a9", "#aa98a9", "#aa98a9"],
	Emerald: ["#000000", "#50c878", "#50c878", "#50c878"],
	Sapphire: ["#000000", "#0f52ba", "#0f52ba", "#0f52ba"],
	Topaz: ["#000000", "#ffc87c", "#ffc87c", "#ffc87c"],
	Ruby: ["#000000", "#e0115f", "#e0115f", "#e0115f"],
	SterileGlass: ["#FFFFFF", "#b8dce7", "#b8dce7", "#b8dce7"],
	CompressionCrystal: ["#000000", "#000000", "#FFFFFF", "#FFFFFF"],
	PerfectedOrb: ["#FFFFFF", "#FFFFFF", "#000000", "#000000"],
};
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
	Time: "exp",
};

var initialData = {
	betaElements: ["Earth", "Water", "Air", "Fire", "Mud", "Ice", "Steam", "Sand", "Magma", "Void", "GolemEarth", "GolemWater", "GolemAir", "GolemFire", "Alkahest"],
	elements: ["Earth", "Water", "Air", "Fire", "Mud", "Ice", "Steam", "Sand", "Magma", "Void", "GolemEarth", "GolemWater", "GolemAir", "GolemFire", "Alkahest"],
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
