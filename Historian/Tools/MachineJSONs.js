var simplifiedMachineData = {
	"machineEarth":
	{
		baseStats: [100, 100, "Earth"],
		recipes:
		{
			earthStart1:
			{
				baseStats: [1, 0.001, true, false],
				in: [],
				out: [
					["Earth", 1, 1.2],
				],
				lock: ["Earth", 0],
				upgrade: ["earthStart2", "Water", 0.1],
			},
			earthStart2:
			{
				baseStats: [1, 0.002, false, false],
				in: [],
				out: [
					["Earth", 1, 1.2],
				],
				upgrade: ["earthStart3", "Air", 0.1],
			},
			earthStart3:
			{
				baseStats: [1, 0.004, false, false],
				in: [],
				out: [
					["Earth", 1, 1.2],
				],
				upgrade: ["earthRift1", "Earth", 5],
			},
			earthRift1:
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Earth", 1, 12, 10, ["Earth", 80]],
				],
				upgrade: ["earthRift2", "Mud", 0.1, "Magma", 0.1],
			},
			earthRift2:
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Earth", 10, 1200, 9, ["GolemEarth", 5]],
				],
			},
			earthConversion1:
			{
				baseStats: [1, 1.02, true, true],
				in: [
					["Earth", 1, 1.1],
					["Fire", 1, 1.1],
				],
				out: [
					["Earth", 2, 5.2, 4, ["Earth", 10, "GolemEarth", 1]],
				],
				lock: ["Fire", 1],
				upgrade: ["earthConversion2", "Earth", 100],
			},
			earthConversion2:
			{
				baseStats: [1, 1.05, false, true],
				in: [
					["Earth", 1, 80.1],
					["Fire", 1, 80.1],
				],
				out: [
					["Earth", 2, 502],
				],
				upgrade: ["earthRift3", "Void", 0.1, "GolemEarth", 8],
			},
			earthRift3:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Earth", 1, 1]
				],
				out: [
					["Earth", 1, 12000, 4, ["Alkahest", 0.002]],
				],
				upgrade: ["earthRift4", "PureEarth", 1],
			},
			earthRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Earth", 1, 1]
				],
				out: [
					["Earth", 1, 120000],
				],
			},
			earthCConversion1:
			{
				baseStats: [1, 1.2, true, true],
				in: [
					["Earth", 1, 500],
					["Fire", 1, 500],
					["Mud", 0, 1.5],
					["Magma", 0, 1.5],
				],
				out: [
					["Earth", 2, 12000, 4, ["Mud", 10]],
				],
				lock: ["Mud", 0.2, "Magma", 0.2],
				upgrade: ["earthCRift1", "Void", 80, "GolemEarth", 8],
			},
			earthCRift1:
			{
				baseStats: [1, 2, false, true],
				in: [
					["Fire", 1, 500],
				],
				out: [
					["Earth", 1, 52000],
				],
				upgrade: ["earthCRift2", "Fire", 100000],
			},
			earthCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Fire", 1, 500],
				],
				out: [
					["Earth", 1, 52e7],
				],
			},
		}
	},
	"machineWater":
	{
		baseStats: [-100, 100, "Water"],
		recipes:
		{
			waterStart1:
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Earth", 1, 0.4],
				],
				out: [
					["Water", 1, 1.2],
				],
				lock: ["Earth", 1],
				upgrade: ["waterRift1", "Water", 5],
			},
			waterRift1:
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Water", 1, 12, 10, ["Water", 80]],
				],
				upgrade: ["waterRift2", "Ice", 0.1, "Steam", 0.1],
			},
			waterRift2:
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Water", 10, 1200, 9, ["GolemWater", 5]],
				],
			},
			waterConversion1:
			{
				baseStats: [1, 1.02, true, true],
				in: [
					["Earth", 1, 1.1],
					["Water", 1, 1.1],
				],
				out: [
					["Water", 2, 5.2, 4, ["Water", 10, "GolemWater", 1]],
				],
				lock: ["Air", 0.1],
				upgrade: ["waterConversion2", "Water", 100],
			},
			waterConversion2:
			{
				baseStats: [1, 1.05, false, true],
				in: [
					["Earth", 1, 80.1],
					["Water", 1, 80.1],
				],
				out: [
					["Water", 2, 502],
				],
				upgrade: ["waterRift3", "Void", 0.1, "GolemWater", 8],
			},
			waterRift3:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Water", 1, 1]
				],
				out: [
					["Water", 1, 12000, 4, ["Alkahest", 0.002]],
				],
				upgrade: ["waterRift4", "PureWater", 1],
			},
			waterRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Water", 1, 1]
				],
				out: [
					["Water", 1, 120000],
				],
			},
			waterCConversion1:
			{
				baseStats: [1, 1.2, true, true],
				in: [
					["Earth", 1, 500],
					["Water", 1, 500],
					["Mud", 0, 1.5],
					["Ice", 0, 1.5],
					["Steam", 0, 1.5],
				],
				out: [
					["Water", 2, 12000, 4, ["Ice", 10]],
				],
				lock: ["Mud", 0.2, "Ice", 0.2, "Steam", 0.2],
				upgrade: ["waterCRift1", "Void", 80, "GolemWater", 8],
			},
			waterCRift1:
			{
				baseStats: [1, 2, false, true],
				in: [
					["Earth", 1, 500],
				],
				out: [
					["Water", 1, 52000],
				],
				upgrade: ["waterCRift2", "Earth", 100000],
			},
			waterCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Earth", 1, 500],
				],
				out: [
					["Water", 1, 52e7],
				],
			},
		}
	},
	"machineAir":
	{
		baseStats: [-100, -100, "Air"],
		recipes:
		{
			airStart1:
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Water", 1, 0.4],
				],
				out: [
					["Air", 1, 1.2],
				],
				lock: ["Water", 1],
				upgrade: ["airRift1", "Air", 5],
			},
			airRift1:
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Air", 1, 12, 10, ["Air", 80]],
				],
				upgrade: ["airRift2", "Steam", 0.1, "Sand", 0.1],
			},
			airRift2:
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Air", 10, 1200, 9, ["GolemAir", 5]],
				],
			},
			airConversion1:
			{
				baseStats: [1, 1.02, true, true],
				in: [
					["Water", 1, 1.1],
					["Fire", 1, 1.1],
				],
				out: [
					["Air", 2, 5.2, 4, ["Air", 10, "GolemAir", 1]],
				],
				lock: ["Fire", 1],
				upgrade: ["airConversion2", "Air", 100],
			},
			airConversion2:
			{
				baseStats: [1, 1.05, false, true],
				in: [
					["Water", 1, 80.1],
					["Fire", 1, 80.1],
				],
				out: [
					["Air", 2, 502],
				],
				upgrade: ["airRift3", "Void", 0.1, "GolemAir", 8],
			},
			airRift3:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Air", 1, 1]
				],
				out: [
					["Air", 1, 12000, 4, ["Alkahest", 0.002]],
				],
				upgrade: ["airRift4", "PureAir", 1],
			},
			airRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Air", 1, 1]
				],
				out: [
					["Air", 1, 120000],
				],
			},
			airCConversion1:
			{
				baseStats: [1, 1.2, true, true],
				in: [
					["Water", 1, 500],
					["Fire", 1, 500],
					["Steam", 0, 1.5],
					["Sand", 0, 1.5],
				],
				out: [
					["Air", 2, 12000, 4, ["Steam", 10]],
				],
				lock: ["Steam", 0.2, "Sand", 0.2],
				upgrade: ["airCRift1", "Void", 80, "GolemAir", 8],
			},
			airCRift1:
			{
				baseStats: [1, 2, false, true],
				in: [
					["Water", 1, 500],
				],
				out: [
					["Air", 1, 52000],
				],
				upgrade: ["airCRift2", "Water", 100000],
			},
			airCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Water", 1, 500],
				],
				out: [
					["Air", 1, 52e7],
				],
			},
		}
	},
	"machineFire":
	{
		baseStats: [100, -100, "Fire"],
		recipes:
		{
			fireStart1:
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Air", 1, 0.2],
				],
				out: [
					["Fire", 1, 1.2],
				],
				lock: ["Air", 1],
				upgrade: ["fireRift1", "Fire", 5],
			},
			fireRift1:
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Fire", 1, 12, 10, ["Fire", 75]],
				],
				upgrade: ["fireRift2", "Steam", 0.1, "Magma", 0.1],
			},
			fireRift2:
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Fire", 10, 1200, 9, ["GolemFire", 5]],
				],
			},
			fireConversion1:
			{
				baseStats: [2, 1.02, true, true],
				in: [
					["Air", 1, 1.1],
					["Fire", 1, 1.1],
				],
				out: [
					["Fire", 2, 5.2, 4, ["Fire", 10, "GolemFire", 1]],
				],
				lock: ["Fire", 1],
				upgrade: ["fireConversion2", "Fire", 100],
			},
			fireConversion2:
			{
				baseStats: [2, 1.05, false, true],
				in: [
					["Air", 1, 80.1],
					["Fire", 1, 80.1],
				],
				out: [
					["Fire", 2, 502],
				],
				upgrade: ["fireRift3", "Void", 0.1, "GolemFire", 8],
			},
			fireRift3:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Fire", 1, 1]
				],
				out: [
					["Fire", 1, 12000, 4, ["Alkahest", 0.002]],
				],
				upgrade: ["fireRift4", "PureFire", 1],
			},
			fireRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Fire", 1, 1]
				],
				out: [
					["Fire", 1, 120000],
				],
			},
			fireCConversion1:
			{
				baseStats: [2, 1.2, true, true],
				in: [
					["Air", 1, 500],
					["Fire", 1, 500],
					["Steam", 0, 1.5],
					["Magma", 0, 1.5],
				],
				out: [
					["Fire", 2, 12000, 4, ["Magma", 10]],
				],
				lock: ["Steam", 0.2, "Magma", 0.2],
				upgrade: ["fireCRift1", "Void", 80, "GolemFire", 8],
			},
			fireCRift1:
			{
				baseStats: [1, 2, false, true],
				in: [
					["Air", 1, 500],
				],
				out: [
					["Fire", 1, 52000],
				],
				upgrade: ["fireCRift2", "Air", 100000],
			},
			fireCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Air", 1, 500],
				],
				out: [
					["Fire", 1, 52e7],
				],
			},
		}
	},
	"golemInfuser":
	{
		baseStats: [-195, 195, ["GolemEarth", "GolemWater", "GolemAir", "GolemFire"]],
		recipes:
		{
			golemEarth1:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Earth", 20, 20],
				],
				out: [
					["GolemEarth", 1, 1],
				],
				lock: ["Earth", 1, "Water", 1, "Air", 1, "Fire", 1],
				refund: ["GolemEarth", 1],
				upgrade: ["golemEarth2", "Earth", 450],
			},
			golemEarth2:
			{
				baseStats: [1, 1, false, false],
				in: [
					["Earth", 400, 480],
				],
				out: [
					["GolemEarth", 1, 2],
				],
				refund: ["GolemEarth", 2],
				upgrade: ["golemEarth3", "Earth", 11000],
			},
			golemEarth3:
			{
				baseStats: [1, 1, false, false],
				in: [
					["Earth", 8000, 9000],
				],
				out: [
					["GolemEarth", 5, 14],
				],
				refund: ["GolemEarth", 5],
			},
			golemWater1:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Water", 20, 20],
				],
				out: [
					["GolemWater", 1, 1],
				],
				lock: ["Earth", 14, "Water", 19, "Air", 14, "Fire", 14],
				refund: ["GolemWater", 1],
				upgrade: ["golemWater2", "Water", 450],
			},
			golemWater2:
			{
				baseStats: [1, 1, false, false],
				in: [
					["Water", 400, 480],
				],
				out: [
					["GolemWater", 1, 2],
				],
				refund: ["GolemWater", 2],
				upgrade: ["golemWater3", "Water", 11000],
			},
			golemWater3:
			{
				baseStats: [1, 1, false, false],
				in: [
					["Water", 8000, 9000],
				],
				out: [
					["GolemWater", 5, 14],
				],
				refund: ["GolemWater", 5],
			},
			golemAir1:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Air", 20, 20],
				],
				out: [
					["GolemAir", 1, 1],
				],
				lock: ["Earth", 14, "Water", 14, "Air", 19, "Fire", 14],
				refund: ["GolemAir", 1],
				upgrade: ["golemAir2", "Air", 450],
			},
			golemAir2:
			{
				baseStats: [1, 1, false, false],
				in: [
					["Air", 400, 480],
				],
				out: [
					["GolemAir", 1, 2],
				],
				refund: ["GolemAir", 2],
				upgrade: ["golemAir3", "Air", 11000],
			},
			golemAir3:
			{
				baseStats: [1, 1, false, false],
				in: [
					["Air", 8000, 9000],
				],
				out: [
					["GolemAir", 5, 14],
				],
				refund: ["GolemAir", 5],
			},
			golemFire1:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Fire", 20, 20],
				],
				out: [
					["GolemFire", 1, 1],
				],
				lock: ["Earth", 14, "Water", 14, "Air", 14, "Fire", 19],
				refund: ["GolemFire", 1],
				upgrade: ["golemFire2", "Fire", 450],
			},
			golemFire2:
			{
				baseStats: [1, 1, false, false],
				in: [
					["Fire", 400, 480],
				],
				out: [
					["GolemFire", 1, 2],
				],
				refund: ["GolemFire", 2],
				upgrade: ["golemFire3", "Fire", 11000],
			},
			golemFire3:
			{
				baseStats: [1, 1, false, false],
				in: [
					["Fire", 8000, 9000],
				],
				out: [
					["GolemFire", 5, 14],
				],
				refund: ["GolemFire", 5],
			},
		}
	},
	"golemMerger":
	{
		baseStats: [195, 195],
		recipes:
		{
			mergeMud1:
			{
				baseStats: [1, 0.02, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemWater", 1, 1],
				],
				out: [
					["Mud", 1, 0.1],
				],
				lock: ["GolemEarth", 2, "GolemWater", 2],
				upgrade: ["mergeMud2", "Earth", 1000, "Water", 1000],
			},
			mergeMud2:
			{
				baseStats: [1, 0.25, false, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemWater", 1, 1],
					["Earth", 700, 900],
					["Water", 700, 900],
				],
				out: [
					["Mud", 1, 1.2, 4, ["GolemWater", 3]],
				],
				upgrade: ["mergeMud3", "Void", 0.01],
			},
			mergeMud3:
			{
				baseStats: [1, 4, false, false],
				in: [
					["GolemEarth", 1, 5],
					["GolemWater", 1, 5],
					["Earth", 7000, 40000],
					["Water", 7000, 40000],
				],
				out: [
					["Mud", 1, 102],
				],
			},
			mergeIce1:
			{
				baseStats: [1, 0.016, true, false],
				in: [
					["GolemWater", 1, 1],
					["GolemAir", 1, 1],
				],
				out: [
					["Ice", 1, 0.1],
				],
				lock: ["GolemWater", 2, "GolemAir", 2, "Mud", 0.03],
				upgrade: ["mergeIce2", "GolemAir", 3],
			},
			mergeIce2:
			{
				baseStats: [1, 0.3, false, false],
				in: [
					["GolemAir", 1, 1],
					["GolemWater", 1, 1],
					["Air", 700, 900],
					["Water", 700, 900],
				],
				out: [
					["Ice", 1, 4.8, 3, ["GolemWater", 13]],
				],
				upgrade: ["mergeIce3", "Void", 0.01],
			},
			mergeIce3:
			{
				baseStats: [1, 4, false, false],
				in: [
					["GolemAir", 1, 5],
					["GolemWater", 1, 5],
					["Air", 7000, 40000],
					["Water", 7000, 40000],
				],
				out: [
					["Ice", 1, 102],
				],
			},
			mergeSteam1:
			{
				baseStats: [1, 0.012, true, false],
				in: [
					["GolemWater", 1, 1],
					["GolemFire", 1, 1],
				],
				out: [
					["Steam", 1, 0.1],
				],
				lock: ["GolemWater", 2, "GolemFire", 2, "Ice", 0.03],
				upgrade: ["mergeSteam2", "GolemFire", 3],
			},
			mergeSteam2:
			{
				baseStats: [1, 0.3, false, false],
				in: [
					["GolemFire", 1, 1],
					["GolemWater", 1, 1],
					["Fire", 700, 900],
					["Water", 700, 900],
				],
				out: [
					["Steam", 1, 4.8, 3, ["GolemWater", 13]],
				],
				upgrade: ["mergeSteam3", "Void", 0.01],
			},
			mergeSteam3:
			{
				baseStats: [1, 4, false, false],
				in: [
					["GolemFire", 1, 5],
					["GolemWater", 1, 5],
					["Fire", 7000, 40000],
					["Water", 7000, 40000],
				],
				out: [
					["Steam", 1, 102],
				],
			},
			mergeMagma1:
			{
				baseStats: [1, 0.008, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemFire", 1, 1],
				],
				out: [
					["Magma", 1, 0.1],
				],
				lock: ["GolemEarth", 2, "GolemFire", 2, "Steam", 0.03],
				upgrade: ["mergeMagma2", "GolemFire", 3],
			},
			mergeMagma2:
			{
				baseStats: [1, 0.3, false, false],
				in: [
					["GolemFire", 1, 1],
					["GolemEarth", 1, 1],
					["Fire", 700, 900],
					["Earth", 700, 900],
				],
				out: [
					["Magma", 1, 4.8, 3, ["GolemEarth", 13]],
				],
				upgrade: ["mergeMagma3", "Void", 0.01],
			},
			mergeMagma3:
			{
				baseStats: [1, 4, false, false],
				in: [
					["GolemFire", 1, 5],
					["GolemEarth", 1, 5],
					["Fire", 7000, 40000],
					["Earth", 7000, 40000],
				],
				out: [
					["Magma", 1, 102],
				],
			},
			mergeSand1:
			{
				baseStats: [1, 0.006, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemAir", 1, 1],
				],
				out: [
					["Sand", 1, 0.1],
				],
				lock: ["GolemEarth", 2, "GolemAir", 2, "Magma", 0.03],
			},
		}
	},
	"machineMud":
	{
		baseStats: [0, 275, "Mud"],
		recipes:
		{
			mudConversion1:
			{
				baseStats: [1, 0.75, true, true],
				in: [
					["Magma", 1, 0.09, 20, ["Mud", 1.5]],
					["Water", 1000, 900],
					["Fire", 1000, 900],
				],
				out: [
					["Mud", 1, 2.2],
				],
				lock: ["Mud", 1, "Water", 1000, "Fire", 1000],
				upgrade: ["mudConversion2", "Water", 24000, "Earth", 24000],
			},
			mudConversion2:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Magma", 1, 0.1, 18, ["Mud", 1.5]],
					["Earth", 0, 10000],
					["Water", 0, 10000],
					["Fire", 0, 10000],
				],
				out: [
					["Mud", 1, 52, 4, ["Mud", 60, "Glass", 0.8]],
				],
				upgrade: ["mudConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			mudConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Sand", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Mud", 1, 2560],
				],
			},
			mudAssimilation1:
			{
				baseStats: [1, 1.03, true, true],
				in: [
					["Mud", 1, 0.05],
					["Earth", 500, 900],
					["Water", 500, 900],
				],
				out: [
					["Mud", 1, 12],
				],
				lock: ["Mud", 4, "Earth", 1000, "Water", 1000],
			},
			mudRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Mud", 1, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineIce":
	{
		baseStats: [-275, 0, "Ice"],
		recipes:
		{
			iceConversion1:
			{
				baseStats: [1, 0.75, true, true],
				in: [
					["Mud", 1, 0.05, 35, ["Ice", 1.5]],
					["Earth", 1000, 900],
					["Air", 1000, 900],
				],
				out: [
					["Ice", 1, 2.2],
				],
				lock: ["Ice", 1, "Earth", 1000, "Air", 1000],
				upgrade: ["iceConversion2", "Air", 24000, "Water", 24000],
			},
			iceConversion2:
			{
				baseStats: [3, 1, false, true],
				in: [
					["Mud", 1, 0.1, 18, ["Ice", 1.5]],
					["Earth", 0, 10000],
					["Water", 0, 10000],
					["Air", 0, 10000],
				],
				out: [
					["Ice", 1, 52, 4, ["Ice", 60, "Glass", 0.8]],
				],
				upgrade: ["iceConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1, "Void", 2000],
			},
			iceConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Void", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Ice", 1, 2560],
				],
			},
			iceAssimilation1:
			{
				baseStats: [1, 1.03, true, true],
				in: [
					["Ice", 1, 0.05],
					["Air", 500, 900],
					["Water", 500, 900],
				],
				out: [
					["Ice", 1, 1.2],
				],
				lock: ["Water", 1000, "Air", 1000],
			},
			iceRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Ice", 1, 800],
				],
				lock: ["Silver", 2],
			},

		}
	},
	"machineSteam":
	{
		baseStats: [-195, -195, "Steam"],
		recipes:
		{
			steamConversion1:
			{
				baseStats: [1, 0.75, true, true],
				in: [
					["Ice", 1, 0.05, 35, ["Steam", 1.5]],
					["Air", 1000, 900],
					["Fire", 1000, 900],
				],
				out: [
					["Steam", 1, 2.2],
				],
				lock: ["Steam", 1, "Air", 1000, "Fire", 1000],
				upgrade: ["steamConversion2", "Water", 24000, "Fire", 24000],
			},
			steamConversion2:
			{
				baseStats: [2, 1, false, true],
				in: [
					["Ice", 1, 0.1, 18, ["Steam", 1.5]],
					["Water", 0, 10000],
					["Air", 0, 10000],
					["Fire", 0, 10000],
				],
				out: [
					["Steam", 1, 52, 4, ["Steam", 60, "Glass", 0.8]],
				],
				upgrade: ["steamConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			steamConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Mud", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Steam", 1, 2560],
				],
			},
			steamAssimilation1:
			{
				baseStats: [1, 1.03, true, true],
				in: [
					["Steam", 1, 0.05],
					["Water", 500, 900],
					["Fire", 500, 900],
				],
				out: [
					["Steam", 1, 1.2],
				],
				lock: ["Water", 1000, "Fire", 1000],
			},
			steamRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Steam", 1, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineMagma":
	{
		baseStats: [275, 0, "Magma"],
		recipes:
		{
			magmaConversion1:
			{
				baseStats: [1, 0.75, true, true],
				in: [
					["Steam", 1, 0.05, 35, ["Magma", 1.5]],
					["Water", 1000, 900],
					["Earth", 1000, 900],
				],
				out: [
					["Magma", 1, 2.2],
				],
				lock: ["Magma", 1, "Water", 1000, "Earth", 1000],
				upgrade: ["magmaConversion2", "Earth", 24000, "Fire", 24000],
			},
			magmaConversion2:
			{
				baseStats: [1, 1, false, true],
				in: [
					["Steam", 1, 0.1, 18, ["Magma", 1.5]],
					["Earth", 0, 10000],
					["Water", 0, 10000],
					["Fire", 0, 10000],
				],
				out: [
					["Magma", 1, 52, 4, ["Magma", 60, "Glass", 0.8]],

				],
				upgrade: ["magmaConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			magmaConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Steam", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Magma", 1, 2560],
				],
			},
			magmaAssimilation1:
			{
				baseStats: [1, 1.03, true, true],
				in: [
					["Magma", 1, 0.05],
					["Earth", 500, 900],
					["Fire", 500, 900],
				],
				out: [
					["Magma", 1, 1.2],
				],
				lock: ["Earth", 1000, "Fire", 1000],
			},
			magmaRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Magma", 1, 800],
				],
				lock: ["Silver", 2],
			},

		}
	},
	"machineSand":
	{
		baseStats: [195, -195, "Sand"],
		recipes:
		{
			sandConversion1:
			{
				baseStats: [1, 0.45, true, true],
				in: [
					["Magma", 1, 0.05, 35, ["Sand", 0.2]],
					["Air", 1000, 900],
					["Fire", 1000, 900],
				],
				out: [
					["Sand", 1, 2.2],
				],
				lock: ["Sand", 0.09, "Mud", 1.5, "Ice", 1.5, "Steam", 1.5, "Magma", 1.5],
				upgrade: ["sandConversion2", "Air", 24000, "Fire", 24000],
			},
			sandConversion2:
			{
				baseStats: [1, 0.15, false, true],
				in: [
					["Magma", 1, 0.1, 18, ["Sand", 0.5]],
					["Air", 400, 10],
					["Fire", 400, 10],
				],
				out: [
					["Sand", 1, 52, 4, ["Magma", 180, "Soil", 1.6]],

				],
				upgrade: ["sandConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			sandConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Ice", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Sand", 1, 2560],
				],
			},
			sandRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Sand", 0.5, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineVoid":
	{
		baseStats: [0, -275, "Void"],
		recipes:
		{
			voidClash1:
			{
				baseStats: [1, 0.01, true, true],
				in: [
					["Sand", 60, 45],
					["Steam", 60, 45],
				],
				out: [
					["Void", 1, 0.1],
					["Mud", 11900, -45],
				],
				lock: ["Sand", 3, "Steam", 3],
				upgrade: ["voidClash2", "Sand", 60, "Steam", 120],
			},
			voidClash2:
			{
				baseStats: [1, 0.1, false, true],
				in: [
					["Sand", 60, 60],
					["Steam", 60, 120],
				],
				out: [
					["Void", 1, 1.2],
					["Mud", 1190, -60],
				],
				upgrade: ["voidClash3", "Alkahest", 0.02],
			},
			voidClash3:
			{
				baseStats: [1, 1, false, true],
				in: [
					["Sand", 10, 150],
					["Steam", 10, 150],
				],
				out: [
					["Void", 1, 102, 8, ["Glass", 0.8]],
					["Mud", 19, -150, 2, ["Mud", 200, "Mud", 400, "Mud", 800, "Mud", 1600, "Mud", 2500]],
				],
			},
			voidConversion3:
			{
				baseStats: [2, 1.44, true, true],
				in: [
					["Magma", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Void", 1, 2560],
				],
				lock: ["Silicon", 1, "Plastic", 1, "Steel", 1],
			},
		}
	},
	"machineNexus":
	{
		baseStats: [0, 0, "Alkahest"],
		recipes:
		{
			alkahest1traces:
			{
				baseStats: [1, 0.1, true, true],
				in: [
					["Void", 1, 1],
					["Earth", 100000, 45000],
					["Water", 100000, 45000],
					["Air", 100000, 45000],
					["Fire", 100000, 45000],
				],
				out: [
					["Alkahest", 1, 0.1],
				],
				lock: ["Void", 0.001]

			},
			alkahest1merge:
			{
				baseStats: [10, 1, true, true],
				in: [
					["Void", 1, 1],
					["Earth", 100000, 50000],
					["Water", 100000, 50000],
					["Air", 100000, 50000],
					["Fire", 100000, 50000],
				],
				out: [
					["Alkahest", 1, 42],
				],
				lock: ["Alkahest", 0.1, "Earth", 50000, "Water", 50000, "Air", 50000, "Fire", 50000],
			},
			alkahest1mixer:
			{
				baseStats: [10, 1, true, false],
				in: [
					["Earth", 1e8, 5e8],
					["Water", 1e8, 5e8],
					["Air", 1e8, 5e8],
					["Fire", 1e8, 5e8],
				],
				out: [
					["Alkahest", 0.01, 41],
				],
				lock: ["Earth", 5e8, "Water", 5e8, "Air", 5e8, "Fire", 5e8],
			},
		}
	},
};
var backupBetaMachineData = {
	"machineEarth":
	{
		baseStats: [100, 100, "Earth"],
		recipes:
		{
			earthRift2:
			{
				baseStats: [1, 1.4, true, false],
				in: [],
				out: [
					["Earth", 1, 12000],
				],
				lock: ["Earth", 0],
			},
			earthRift3:
			{
				baseStats: [1, 1.4, true, true],
				in: [
					["Earth", 1, 1]
				],
				out: [
					["Earth", 1, 12000 * 4],
				],
				lock: ["Earth", 0],
				upgrade: ["earthRift4", "PureEarth", 1],
			},
			earthRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Earth", 1, 1]
				],
				out: [
					["Earth", 1, 120000],
				],
			},
			earthCRift1:
			{
				baseStats: [1, 2, true, true],
				in: [
					["Fire", 1, 500],
				],
				out: [
					["Earth", 1, 52000],
				],
				lock: ["Earth", 0],
				upgrade: ["earthCRift2", "Fire", 100000],
			},
			earthCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Fire", 1, 500],
				],
				out: [
					["Earth", 1, 52e7],
				],
			},
		}
	},
	"machineWater":
	{
		baseStats: [-100, 100, "Water"],
		recipes:
		{
			waterRift2:
			{
				baseStats: [1, 1.4, true, false],
				in: [],
				out: [
					["Water", 1, 12000],
				],
				lock: ["Earth", 0],
			},
			waterRift3:
			{
				baseStats: [1, 1.4, true, true],
				in: [
					["Water", 1, 1]
				],
				out: [
					["Water", 1, 12000 * 4],
				],
				lock: ["Earth", 0],
				upgrade: ["waterRift4", "PureWater", 1],
			},
			waterRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Water", 1, 1]
				],
				out: [
					["Water", 1, 120000],
				],
			},
			waterCRift1:
			{
				baseStats: [1, 2, true, true],
				in: [
					["Earth", 1, 500],
				],
				out: [
					["Water", 1, 52000],
				],
				lock: ["Earth", 0],
				upgrade: ["waterCRift2", "Earth", 100000],
			},
			waterCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Earth", 1, 500],
				],
				out: [
					["Water", 1, 52e7],
				],
			},
		}
	},
	"machineAir":
	{
		baseStats: [-100, -100, "Air"],
		recipes:
		{
			airRift2:
			{
				baseStats: [1, 1.4, true, false],
				in: [],
				out: [
					["Air", 1, 12000],
				],
				lock: ["Earth", 0],
			},
			airRift3:
			{
				baseStats: [1, 1.4, true, true],
				in: [
					["Air", 1, 1]
				],
				out: [
					["Air", 1, 12000 * 4],
				],
				lock: ["Earth", 0],
				upgrade: ["airRift4", "PureAir", 1],
			},
			airRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Air", 1, 1]
				],
				out: [
					["Air", 1, 120000],
				],
			},
			airCRift1:
			{
				baseStats: [1, 2, true, true],
				in: [
					["Water", 1, 500],
				],
				out: [
					["Air", 1, 52000],
				],
				lock: ["Earth", 0],
				upgrade: ["airCRift2", "Water", 100000],
			},
			airCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Water", 1, 500],
				],
				out: [
					["Air", 1, 52e7],
				],
			},
		}
	},
	"machineFire":
	{
		baseStats: [100, -100, "Fire"],
		recipes:
		{
			fireRift2:
			{
				baseStats: [1, 1.4, true, false],
				in: [],
				out: [
					["Fire", 1, 12000],
				],
				lock: ["Earth", 0],
			},
			fireRift3:
			{
				baseStats: [1, 1.4, true, true],
				in: [
					["Fire", 1, 1]
				],
				out: [
					["Fire", 1, 12000 * 4],
				],
				lock: ["Earth", 0],
				upgrade: ["fireRift4", "PureFire", 1],
			},
			fireRift4:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Fire", 1, 1]
				],
				out: [
					["Fire", 1, 120000],
				],
			},
			fireCRift1:
			{
				baseStats: [1, 2, true, true],
				in: [
					["Air", 1, 500],
				],
				out: [
					["Fire", 1, 52000],
				],
				lock: ["Earth", 0],
				upgrade: ["fireCRift2", "Air", 100000],
			},
			fireCRift2:
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Air", 1, 500],
				],
				out: [
					["Fire", 1, 52e7],
				],
			},
		}
	},
	"golemInfuser":
	{
		baseStats: [-195, 195, ["GolemEarth", "GolemWater", "GolemAir", "GolemFire"]],
		recipes:
		{
			golemEarth3:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Earth", 8000, 9000],
				],
				out: [
					["GolemEarth", 5, 14],
				],
				lock: ["Earth", 0],
			},
			golemWater3:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Water", 8000, 9000],
				],
				out: [
					["GolemWater", 5, 14],
				],
				lock: ["Earth", 0],
			},
			golemAir3:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Air", 8000, 9000],
				],
				out: [
					["GolemAir", 5, 14],
				],
				lock: ["Earth", 0],
			},
			golemFire3:
			{
				baseStats: [1, 1, true, false],
				in: [
					["Fire", 8000, 9000],
				],
				out: [
					["GolemFire", 5, 14],
				],
				lock: ["Earth", 0],
			},
		}
	},
	"golemMerger":
	{
		baseStats: [195, 195],
		recipes:
		{
			mergeMud3:
			{
				baseStats: [1, 4, true, false],
				in: [
					["GolemEarth", 1, 5],
					["GolemWater", 1, 5],
					["Earth", 7000, 40000],
					["Water", 7000, 40000],
				],
				out: [
					["Mud", 1, 102],
				],
				lock: ["Earth", 0],
			},
			mergeIce3:
			{
				baseStats: [1, 4, true, false],
				in: [
					["GolemAir", 1, 5],
					["GolemWater", 1, 5],
					["Air", 7000, 40000],
					["Water", 7000, 40000],
				],
				out: [
					["Ice", 1, 102],
				],
				lock: ["Earth", 0],
			},
			mergeSteam3:
			{
				baseStats: [1, 4, true, false],
				in: [
					["GolemFire", 1, 5],
					["GolemWater", 1, 5],
					["Fire", 7000, 40000],
					["Water", 7000, 40000],
				],
				out: [
					["Steam", 1, 102],
				],
				lock: ["Earth", 0],
			},
			mergeMagma3:
			{
				baseStats: [1, 4, true, false],
				in: [
					["GolemFire", 1, 5],
					["GolemEarth", 1, 5],
					["Fire", 7000, 40000],
					["Earth", 7000, 40000],
				],
				out: [
					["Magma", 1, 102],
				],
				lock: ["Earth", 0],
			},
			mergeSand1:
			{
				baseStats: [1, 0.006, true, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemAir", 1, 1],
				],
				out: [
					["Sand", 1, 0.1],
				],
				lock: ["Earth", 0],
			},
		}
	},
	"machineMud":
	{
		baseStats: [0, 275, "Mud"],
		recipes:
		{
			mudConversion2:
			{
				baseStats: [2, 1.44, true, true],
				in: [
					["Magma", 1, 1.8],
					["Earth", 0, 10000],
					["Water", 0, 10000],
					["Fire", 0, 10000],
				],
				out: [
					["Mud", 1, 208, 4, ["Glass", 0.8]],
				],
				lock: ["Earth", 0],
				upgrade: ["mudConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			mudConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Sand", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Mud", 1, 2560],
				],
			},
			mudRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Mud", 1, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineIce":
	{
		baseStats: [-275, 0, "Ice"],
		recipes:
		{
			iceConversion2:
			{
				baseStats: [3, 1, true, true],
				in: [
					["Mud", 1, 1.8],
					["Earth", 0, 10000],
					["Water", 0, 10000],
					["Air", 0, 10000],
				],
				out: [
					["Ice", 1, 208, 4, ["Glass", 0.8]],
				],
				lock: ["Earth", 0],
				upgrade: ["iceConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			iceConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Void", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Ice", 1, 2560],
				],
			},
			mudRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Ice", 1, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineSteam":
	{
		baseStats: [-195, -195, "Steam"],
		recipes:
		{
			steamConversion2:
			{
				baseStats: [2, 1, true, true],
				in: [
					["Ice", 1, 1.8],
					["Water", 0, 10000],
					["Air", 0, 10000],
					["Fire", 0, 10000],
				],
				out: [
					["Steam", 1, 208, 4, ["Glass", 0.8]],
				],
				lock: ["Earth", 0],
				upgrade: ["steamConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			steamConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Mud", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Steam", 1, 2560],
				],
			},
			mudRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Steam", 1, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineMagma":
	{
		baseStats: [275, 0, "Magma"],
		recipes:
		{
			magmaConversion2:
			{
				baseStats: [1, 1, true, true],
				in: [
					["Steam", 1, 1.8],
					["Earth", 0, 10000],
					["Water", 0, 10000],
					["Fire", 0, 10000],
				],
				out: [
					["Magma", 1, 208, 4, ["Glass", 0.8]],
				],
				lock: ["Earth", 0],
				upgrade: ["magmaConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			magmaConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Steam", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Magma", 1, 2560],
				],
			},
			mudRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Magma", 1, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineSand":
	{
		baseStats: [195, -195, "Sand"],
		recipes:
		{
			sandConversion2:
			{
				baseStats: [1, 0.15, true, true],
				in: [
					["Magma", 1, 1.8],
					["Air", 400, 10],
					["Fire", 400, 10],
				],
				out: [
					["Sand", 1, 208, 4, ["Soil", 1.6]],
				],
				lock: ["Earth", 0],
				upgrade: ["sandConversion3", "Silicon", 1, "Plastic", 1, "Steel", 1],
			},
			sandConversion3:
			{
				baseStats: [2, 1.44, false, true],
				in: [
					["Ice", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Sand", 1, 2560],
				],
			},
			mudRift1:
			{
				baseStats: [1, 1, true, false],
				in: [],
				out: [
					["Sand", 0.5, 800],
				],
				lock: ["Silver", 2],
			},
		}
	},
	"machineVoid":
	{
		baseStats: [0, -275, "Void"],
		recipes:
		{
			voidClash3:
			{
				baseStats: [1, 1, true, true],
				in: [
					["Sand", 10, 150],
					["Steam", 10, 150],
				],
				out: [
					["Void", 1, 102, 8, ["Glass", 0.8]],
					["Mud", 19, -150],
				],
				lock: ["Earth", 0],
			},
			voidConversion3:
			{
				baseStats: [2, 1.44, true, true],
				in: [
					["Magma", 1, 48],
					["Earth", 0, 1e6],
					["Water", 0, 1e6],
					["Air", 0, 1e6],
					["Fire", 0, 1e6],
				],
				out: [
					["Void", 1, 2560],
				],
				lock: ["Silicon", 1, "Plastic", 1, "Steel", 1],
			},
		},
	},
	"machineNexus":
	{
		baseStats: [0, 0, "Alkahest"],
		recipes:
		{
			alkahest1traces:
			{
				baseStats: [1, 0.1, true, true],
				in: [
					["Void", 1, 1],
					["Earth", 100000, 45000],
					["Water", 100000, 45000],
					["Air", 100000, 45000],
					["Fire", 100000, 45000],
				],
				out: [
					["Alkahest", 1, 0.1],
				],
				lock: ["Void", 0.001]

			},
			alkahest1merge:
			{
				baseStats: [1, 1, true, true],
				in: [
					["Void", 0.25, 1],
					["Earth", 25000, 50000],
					["Water", 25000, 50000],
					["Air", 25000, 50000],
					["Fire", 25000, 50000],
					["Alkahest", 1, 0.05],
				],
				out: [
					["Alkahest", 1.25, 42],
				],
				lock: ["Alkahest", 0.1, "Earth", 50000, "Water", 50000, "Air", 50000, "Fire", 50000],
			},
		}
	},
};

var midCircle = {
	elements: [
		"Revelation", "Knowledge",
		"Essence", "Soil", "Obsidian", "Lava", "Oil", "Force", "Space", "Glass", "Gold", "Snow", "Cryogen",
		"Solution", "DistilledEarth", "DistilledWater", "DistilledAir", "DistilledFire",
		"Pressure", "CompressedEarth", "CompressedWater", "CompressedAir", "CompressedFire",
	],
	machines:
	{
		machineKnowledge:
		{
			baseStats: [0, -450, ["Revelation", "Knowledge"]],
			recipes:
			{
				knowledgeProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Revelation", 1, 0.01],
					],
					out: [
						["Revelation", 1, -1],
						["Knowledge", 0.03, 7],
					],
					lock: ["Revelation", 0.1],
					upgrade: ["knowledgeProduction2", "Gold", 1],
				},
				knowledgeProduction2:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Revelation", 1, 0.01],
					],
					out: [
						["Revelation", 1, -5],
						["Knowledge", 0.05, 9, 1.3, ["DistilledEarth", 0.1, "DistilledWater", 0.1, "DistilledAir", 0.1, "DistilledFire", 0.1]],
					],
					upgrade: ["knowledgeProduction3", "Knowledge", 25],
				},
				knowledgeProduction3:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Revelation", 1, 0.01],
					],
					out: [
						["Revelation", 1, -5],
						["Knowledge", 0.8, 79],
					],
				},
				revelationGain1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Gold", 1, 0.3],
					],
					out: [
						["Revelation", 1, 1.2, 4, ["Knowledge", 8]],
					],
					lock: ["Gold", 0.1],
					upgrade: ["revelationGain2", "Knowledge", 75],
				},
				revelationGain2:
				{
					baseStats: [1, 0.01, false, true],
					in: [
						["Knowledge", 1, 0.3],
					],
					out: [
						["Revelation", 1, 4.8],
					],
				},
			}
		},
		machineEssence:
		{
			baseStats: [-100, 650, "Essence"],
			recipes:
			{
				essenceMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Mud", 1, 37],
						["Water", 200, 7900],
					],
					out: [
						["Essence", 1, 1.2, 2, ["Glass", 1.1]],
					],
					lock: ["Knowledge", 0.5, "Space", 1],
				},
			}
		},
		machineSoil:
		{
			baseStats: [100, 650, "Soil"],
			recipes:
			{
				soilMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Mud", 1, 37],
						["Earth", 200, 7900],
					],
					out: [
						["Soil", 1, 1.2, 2, ["Force", 0.2]],
					],
					lock: ["Knowledge", 0.1],
					upgrade: ["soilMerge2", "Knowledge", 36],
				},
				soilMerge2:
				{
					baseStats: [1, 0.01, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Mud", 1, 37],
						["Earth", 200, 7900],
					],
					out: [
						["Soil", 1, 12],
					],
				},
				soilAdvMerge1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Mud", 0.01, 37],
						["Earth", 4000, 79000],
						["Water", 2000, 79000],
					],
					out: [
						["Soil", 1, 24],
					],
					lock: ["Acid", 1],
				},
			}
		},
		machineObsidian:
		{
			baseStats: [650, 100, "Obsidian"],
			recipes:
			{
				obsidianMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Magma", 1, 37],
						["Earth", 200, 7900],
					],
					out: [
						["Obsidian", 1, 1.2],
					],
					lock: ["Knowledge", 0.2],
				},
				obsidianCooling1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Lava", 0.1, 0.6],
						["Gale", 0, 3.4],
					],
					out: [
						["Obsidian", 0.1, 2.4],
					],
					lock: ["Stone", 1],
				},
			}
		},
		machineLava:
		{
			baseStats: [650, -100, "Lava"],
			recipes:
			{
				lavaMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Magma", 1, 37],
						["Fire", 200, 7900],
					],
					out: [
						["Lava", 1, 1.2],
					],
					lock: ["Knowledge", 2, "Obsidian", 1, "Force", 1],
				},
			}
		},
		machineSpace:
		{
			baseStats: [0, -650, "Space"],
			recipes:
			{
				spaceMerge1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Void", 1, 100],
						["Air", 10000, 27900],
						["Fire", 10000, 27900],
					],
					out: [
						["Space", 1, 3.2],
					],
					lock: ["Knowledge", 1.5],
				},
			}
		},
		machineSnow:
		{
			baseStats: [-650, -100, "Snow"],
			recipes:
			{
				snowMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Ice", 1, 37],
						["Air", 200, 7900],
					],
					out: [
						["Snow", 1, 1.2, 4, ["Cryospire", 0.1, "Vortex", 0.1]],
					],
					lock: ["Knowledge", 0.3],
				},
			}
		},
		machineCryogen:
		{
			baseStats: [-650, 100, "Cryogen"],
			recipes:
			{
				cryogenMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Ice", 1, 37],
						["Water", 200, 7900],
					],
					out: [
						["Cryogen", 1, 1.2],
					],
					lock: ["Knowledge", 7, "Essence", 1.5, "Ice", 600],
				},
			}
		},
		machineGlass:
		{
			baseStats: [-400, -500, "Glass"],
			recipes:
			{
				glassMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Fire", 2000, 7900],
						["Lava", 0, 1.1],
					],
					out: [
						["Glass", 1, 1.2, 2, ["Knowledge", 36]],
					],
					lock: ["Knowledge", 3.3, "Sand", 300],
				},
			}
		},
		machineGold:
		{
			baseStats: [-500, -400, "Gold"],
			recipes:
			{
				goldMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Force", 0.01, 0.3],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					lock: ["Knowledge", 7, "Cryogen", 0.4, "Force", 1.1, "Sand", 700],
					upgrade: ["goldMerge2", "Iron", 0.01],
				},
				goldMerge2:
				{
					baseStats: [1, 0.001, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge3", "Silver", 1.01],
				},
				goldMerge3:
				{
					baseStats: [1, 0.002, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge4", "Bronze", 1.01],
				},
				goldMerge4:
				{
					baseStats: [1, 0.004, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge5", "Copper", 1.01],
				},
				goldMerge5:
				{
					baseStats: [1, 0.006, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge6", "Tin", 1.01],
				},
				goldMerge6:
				{
					baseStats: [1, 0.008, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge7", "Aluminum", 1.01],
				},
				goldMerge7:
				{
					baseStats: [1, 0.01, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 1.2],
					],
					upgrade: ["goldMerge8", "Iron", 1.01],
				},
				goldMerge8:
				{
					baseStats: [1, 0.01, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Sand", 1, 37],
						["Water", 2000, 7900],
					],
					out: [
						["Gold", 1, 4.8],
					],
				},
			}
		},
		machineForce:
		{
			baseStats: [400, -500, "Force"],
			recipes:
			{
				forceMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Steam", 1, 37],
						["Air", 200, 7900],
					],
					out: [
						["Force", 1, 1.2],
					],
					lock: ["Knowledge", 0.8, "Space", 1],
					upgrade: ["forceMerge2", "Steel", 1, "Space", 1e8],
				},
				forceMerge2:
				{
					baseStats: [1, 0.01, false, true],
					in: [
						["Alkahest", 0, 4.2],
						["Steam", 0.1, 37],
						["Air", 200, 7900],
						["Water", 1, 7900],
						["Fire", 200, 7900],
					],
					out: [
						["Force", 1, 102],
					],
				},
			}
		},
		machineOil:
		{
			baseStats: [500, -400, "Oil"],
			recipes:
			{
				oilMerge1:
				{
					baseStats: [1, 0.001, true, true],
					in: [
						["Alkahest", 0, 4.2],
						["Steam", 1, 37],
						["Earth", 200, 7900],
					],
					out: [
						["Oil", 1, 1.2],
					],
					lock: ["Knowledge", 0.4],
				},
				oilPump1:
				{
					baseStats: [1, 0.02, true, true],
					in: [
						["Energy", 0.001, 0.2],
						["Earth", 200, 7900],
						["Water", 200, 7900],
					],
					out: [
						["Oil", 1, 3.6],
					],
					lock: ["Silver", 0.4],
				},
				oilAdvPump2:
				{
					baseStats: [1, 0.12, true, true],
					in: [
						["Power", 0.001, 0.2],
						["Earth", 200, 7900],
						["Water", 200, 7900],
						["Air", 200, 7900],
					],
					out: [
						["Oil", 1, 64],
					],
					lock: ["Steel", 1],
				},
			}
		},
		machineSolution:
		{
			baseStats: [-500, 400, "Solution"],
			recipes:
			{
				solutionMix1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Alkahest", 1, 42],
						["Earth", 10000, 51000],
						["Water", 10000, 51000],
						["Air", 10000, 51000],
						["Fire", 10000, 51000],
					],
					out: [
						["Solution", 10, 120],
					],
					lock: ["Knowledge", 8],
					upgrade: ["solutionMix2", "PureEssenceEarth", 1],
				},
				solutionMix2:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Alkahest", 0.75, 42],
						["Earth", 5000, 51000],
						["Water", 10000, 51000],
						["Air", 10000, 51000],
						["Fire", 10000, 51000],
					],
					out: [
						["Solution", 10, 120],
					],
					upgrade: ["solutionMix3", "PureEssenceAir", 1],
				},
				solutionMix3:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Alkahest", 0.50, 42],
						["Earth", 5000, 51000],
						["Water", 10000, 51000],
						["Air", 5000, 51000],
						["Fire", 10000, 51000],
					],
					out: [
						["Solution", 10, 120],
					],
					upgrade: ["solutionMix4", "PureEssenceWater", 1],
				},
				solutionMix4:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Alkahest", 0.25, 42],
						["Earth", 5000, 51000],
						["Water", 5000, 51000],
						["Air", 5000, 51000],
						["Fire", 10000, 51000],
					],
					out: [
						["Solution", 10, 120],
					],
					upgrade: ["solutionMix5", "PureEssenceFire", 1],
				},
				solutionMix5:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Alkahest", 0, 42],
						["Earth", 5000, 51000],
						["Water", 5000, 51000],
						["Air", 5000, 51000],
						["Fire", 5000, 51000],
					],
					out: [
						["Solution", 10, 120],
					],
					upgrade: ["solutionMix6", "Tin", 1e3],
				},
				solutionMix6:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Alkahest", 0, 8.3],
						["Earth", 5000, 51000],
						["Water", 5000, 51000],
						["Air", 5000, 51000],
						["Fire", 5000, 51000],
					],
					out: [
						["Solution", 1, 120],
					],
				},
			}
		},
		machineDistill:
		{
			baseStats: [-400, 500, ["DistilledEarth", "DistilledWater", "DistilledAir", "DistilledFire"]],
			recipes:
			{
				distillEarth1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Solution", 10, 0.1],
						["Cryogen", 1, 0.1],
						["Lava", 1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledEarth", 1, 0.8],
					],
					lock: ["Solution", 1],
					upgrade: ["distillEarth2", "Knowledge", 36],
				},
				distillEarth2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Solution", 8, 0.1],
						["Cryogen", 0.1, 0.1],
						["Lava", 0.1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledEarth", 1, 8],
					],
					upgrade: ["distillEarth3", "Vortex", 0.01],
				},
				distillEarth3:
				{
					baseStats: [1, 0.2, false, true],
					in: [
						["Solution", 8, 0.1],
						["Gale", 0, 1],
						["Blaze", 0, 1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledEarth", 1, 18],
					],
				},
				distillWater1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Solution", 10, 0.1],
						["Cryogen", 1, 0.1],
						["Lava", 1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledWater", 1, 0.8],
					],
					lock: ["Solution", 1],
					upgrade: ["distillWater2", "Knowledge", 36],
				},
				distillWater2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Solution", 8, 0.1],
						["Cryogen", 0.1, 0.1],
						["Lava", 0.1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledWater", 1, 8],
					],
					upgrade: ["distillWater3", "Vortex", 0.01],
				},
				distillWater3:
				{
					baseStats: [1, 0.2, false, true],
					in: [
						["Solution", 8, 0.1],
						["Gale", 0, 1],
						["Blaze", 0, 1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledWater", 1, 18],
					],
				},
				distillAir1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Solution", 10, 0.1],
						["Cryogen", 1, 0.1],
						["Lava", 1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledAir", 1, 0.8],
					],
					lock: ["Solution", 1],
					upgrade: ["distillAir2", "Knowledge", 36],
				},
				distillAir2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Solution", 8, 0.1],
						["Cryogen", 0.1, 0.1],
						["Lava", 0.1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledAir", 1, 8],
					],
					upgrade: ["distillAir3", "Vortex", 0.01],
				},
				distillAir3:
				{
					baseStats: [1, 0.2, false, true],
					in: [
						["Solution", 8, 0.1],
						["Gale", 0, 1],
						["Blaze", 0, 1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledAir", 1, 18],
					],
				},
				distillFire1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Solution", 10, 0.1],
						["Cryogen", 1, 0.1],
						["Lava", 1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledFire", 1, 0.8],
					],
					lock: ["Solution", 1],
					upgrade: ["distillFire2", "Knowledge", 36],
				},
				distillFire2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Solution", 8, 0.1],
						["Cryogen", 0.1, 0.1],
						["Lava", 0.1, 0.1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledFire", 1, 8],
					],
					upgrade: ["distillFire3", "Vortex", 0.01],
				},
				distillFire3:
				{
					baseStats: [1, 0.2, false, true],
					in: [
						["Solution", 8, 0.1],
						["Gale", 0, 1],
					],
					out: [
						["Solution", 10, -140],
						["DistilledFire", 1, 18],
					],
				},
			}
		},
		machinePressure:
		{
			baseStats: [500, 400, "Pressure"],
			recipes:
			{
				pressureMerge1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Steam", 100, 100],
						["Force", 0.1, 0.1],
						["Space", 1, 10.5]
					],
					out: [
						["Pressure", 5, 12],
					],
					lock: ["Knowledge", 8, "Pebbles", 0.02, "Space", 2],
				},
			}
		},
		machineCompress:
		{
			baseStats: [400, 500, ["CompressedEarth", "CompressedWater", "CompressedAir", "CompressedFire"]],
			recipes:
			{
				compressEarth1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Pressure", 1, 0.1],
						["Earth", 1e7, 120],
					],
					out: [
						["CompressedEarth", 5, 0.8],
					],
					lock: ["Pressure", 0.1],
					upgrade: ["compressEarth2", "Knowledge", 36],
				},
				compressEarth2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Pressure", 1, 0.1],
						["Earth", 1e6, 120],
					],
					out: [
						["CompressedEarth", 5, 8],
					],
				},
				compressWater1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Pressure", 1, 0.1],
						["Water", 1e7, 120],
					],
					out: [
						["CompressedWater", 5, 0.8],
					],
					lock: ["Pressure", 0.1],
					upgrade: ["compressWater2", "Knowledge", 36],
				},
				compressWater2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Pressure", 1, 0.1],
						["Water", 1e6, 120],
					],
					out: [
						["CompressedWater", 5, 8],
					],
				},
				compressAir1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Pressure", 1, 0.1],
						["Air", 1e7, 120],
					],
					out: [
						["CompressedAir", 5, 0.8],
					],
					lock: ["Pressure", 0.1],
					upgrade: ["compressAir2", "Knowledge", 36],
				},
				compressAir2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Pressure", 1, 0.1],
						["Air", 1e6, 120],
					],
					out: [
						["CompressedAir", 5, 8],
					],
				},
				compressFire1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Pressure", 1, 0.1],
						["Fire", 1e7, 120],
					],
					out: [
						["CompressedFire", 5, 0.8],
					],
					lock: ["Pressure", 0.1],
					upgrade: ["compressFire2", "Knowledge", 36],
				},
				compressFire2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Pressure", 1, 0.1],
						["Fire", 1e6, 120],
					],
					out: [
						["CompressedFire", 5, 8],
					],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
}
var lifeCircle = {
	elements: [],
	baseElements: ["Earth", "Water", "Air", "Fire"],
	prefixElements: ["Essence", "Soil", "Seed", "Plant", "PureEssence"],
	machines:
	{
		machineEssenceElements:
		{
			baseStats: [-250, 750, 1],
			reciconv:
			{
				essenceElement:
				{
					baseStats: [1, 0.5, true, true],
					in: [
						["Essence", 10, 1],
						["Distilled", -1, 0.01],
					],
					out: [
						["Essence", -1, 14],
					],
					lock: ["Distilled", -1],
				},
			},
			recipes:
			{},
		},
		machineSoilElements:
		{
			baseStats: [250, 750, 2],
			reciconv:
			{
				soilElement:
				{
					baseStats: [1, 0.5, true, true],
					in: [
						["Soil", 100, 1],
						["Compressed", -1, 0.01],
					],
					out: [
						["Soil", -1, 14],
					],
					lock: ["Compressed", -1],
				},
			},
			recipes:
			{},
		},
		machineSeedElements:
		{
			baseStats: [0, 800],
			reciconv:
			{
				seed:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Soil", -1, 1, 100, ["Space", 1e7]],
						["Essence", -1, 1.1],
					],
					out: [
						["Seed", -1, 107],
					],
					lock: ["Essence", -9.01, "Soil", -0.1],
				},
			},
			recipes:
			{},
		},
		machinePureEssenceElements:
		{
			baseStats: [-250, 1250, 5],
			recipes:
			{},
		},
		machineUnPureSoilElements:
		{
			baseStats: [250, 1250],
			reciconv:
			{
				infuseSoil:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Soil", 250, 1],
						["PureEssence", -1, 0.01],
					],
					out: [
						["Soil", -500, 230],
					],
					lock: ["PureEssence", -0.01, "Glass", 2.2, "Space", 120],
				},
			},
			recipes:
			{}
		},
		machinePlantEarth:
		{
			baseStats: [100, 1100, ["SeedEarth", "PlantEarth"]],
			recipes:
			{
				growEarth:
				{
					baseStats: [1, 1, true, true],
					in: [
						["SoilEarth", 0.04, 1.1],
						["SeedEarth", 1, 1],
					],
					out: [
						["SeedEarth", 1, 111],
						["PlantEarth", 1, 10000],
					],
					lock: ["SeedEarth", 1],
				},
				harvestEarth1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["PlantEarth", 100, 10],
					],
					out: [
						["EssenceEarth", 1, 7, 7, ["FoldedSpace", 0.01]],
					],
					lock: ["PlantEarth", 1],
				},
				uprootEarth2:
				{
					baseStats: [1, 0.03, true, false],
					in: [
						["PlantEarth", 100, 100],
						["SeedEarth", 1, 1],
					],
					out: [
						["PureEssenceEarth", 1, 12],
					],
					lock: ["PlantEarth", 20],
				},
			},
		},
		machinePlantWater:
		{
			baseStats: [-100, 1100, ["SeedWater", "PlantWater"]],
			recipes:
			{
				growWater:
				{
					baseStats: [1, 1, true, true],
					in: [
						["SoilWater", 0.04, 1.1],
						["Cryogen", 0.004, 1.1],
						["SeedWater", 1, 1],
						["Cryospire", 0, 1],
					],
					out: [
						["SeedWater", 1.01, -111],
						["PlantWater", 1, 10000],
					],
					lock: ["EssenceWater", 0.1, "Cryospire", 1],
				},
				harvestWater1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["PlantWater", 100, 10],
					],
					out: [
						["EssenceWater", 1, 7, 7, ["Force", 1]],
					],
					lock: ["PlantWater", 1],
				},
				uprootWater2:
				{
					baseStats: [1, 0.03, true, true],
					in: [
						["PlantWater", 100, 100],
						["SeedWater", 0.7, 1],
					],
					out: [
						["PureEssenceWater", 1, 12],
					],
					lock: ["PlantWater", 20],
				},
			},
		},
		machinePlantAir:
		{
			baseStats: [-100, 900, ["SeedAir", "PlantAir"]],
			recipes:
			{
				growAir:
				{
					baseStats: [1, 1, true, true],
					in: [
						["SoilAir", 1, 1.1],
						["SeedAir", 1, 1],
					],
					out: [
						["SoilAir", 1, -250],
						["SeedAir", 1, 111],
						["PlantAir", 0.4, 10000],
					],
					lock: ["SeedAir", 1],
				},
				harvestAir1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["PlantAir", 100, 10],
					],
					out: [
						["EssenceAir", 1, 7, 7, ["Force", 1]],
					],
					lock: ["PlantAir", 1],
				},
				uprootAir2:
				{
					baseStats: [1, 0.06, true, false],
					in: [
						["PlantAir", 100, 100],
						["SeedAir", 1, 1],
					],
					out: [
						["PureEssenceAir", 1, 12],
					],
					lock: ["PlantAir", 20],
				},
			},
		},
		machinePlantFire:
		{
			baseStats: [100, 900, ["SeedFire", "PlantFire"]],
			recipes:
			{
				growFire:
				{
					baseStats: [1, 1, true, true],
					in: [
						["SoilFire", 0.04, 1.1],
						["SeedFire", 1, 1],
						["Lava", 0.001, 1],
					],
					out: [
						["SeedFire", 0.99, 131],
						["PlantFire", 1, 10000],
					],
					lock: ["EssenceFire", 0.1, "Sulphur", 4, "Coal", 4],
				},
				harvestFire1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["PlantFire", 10, 10],
					],
					out: [
						["EssenceFire", 1, 7, 7, ["Force", 1]],
					],
					lock: ["PlantFire", 1],
				},
				uprootFire2:
				{
					baseStats: [1, 0.03, true, false],
					in: [
						["PlantFire", 100, 100],
						["SeedFire", 1, 1],
					],
					out: [
						["PureEssenceFire", 1, 12],
					],
					lock: ["PlantFire", 20],
				},
			},
		},
	},
	preprocess: function ()
	{
		for (var i = 0; i < this.prefixElements.length; i++)
		{
			for (var j = 0; j < this.baseElements.length; j++)
			{
				var elem = this.prefixElements[i] + this.baseElements[j];
				this.elements.push(elem);
			}
		}
		addCircleElements(this.elements);
		elementalDisplayType["SeedEarth"] = "";
		elementalDisplayType["SeedAir"] = "";
		for (var mach in this.machines)
		{
			for (var rec in this.machines[mach].reciconv)
			{
				for (var j = 0; j < this.baseElements.length; j++)
				{
					var recipe = JSON.parse(JSON.stringify(this.machines[mach].reciconv[rec]));

					for (var i = 0; i < recipe.in.length; i++)
					{
						if (recipe.in[i][1] < 0)
						{
							recipe.in[i][1] *= -1;
							recipe.in[i][0] += this.baseElements[j];
						}
					}
					for (var i = 0; i < recipe.out.length; i++)
					{
						if (recipe.out[i][1] < 0)
						{
							recipe.out[i][1] *= -1;
							recipe.out[i][0] += this.baseElements[j];
						}
					}
					if (recipe.lock[1] < 0)
					{
						recipe.lock[1] *= -1;
						recipe.lock[0] += this.baseElements[j];
					}
					if (recipe.lock[3] && recipe.lock[3] < 0)
					{
						recipe.lock[3] *= -1;
						recipe.lock[2] += this.baseElements[j];
					}
					this.machines[mach].recipes[rec + this.baseElements[j]] = recipe;
				}
				this.machines[mach].reciconv = null;
			}
		}
		this.machines["machineSeedElements"].recipes["seedEarth"].lock[1] = 0.01;
		this.machines["machineSeedElements"].recipes["seedWater"].lock[1] = 2.01;
		this.machines["machineSeedElements"].recipes["seedWater"].lock.push("Cryospire");
		this.machines["machineSeedElements"].recipes["seedWater"].lock.push(1);
		this.machines["machineSeedElements"].recipes["seedAir"].lock[1] = 1.01;
		this.machines["machineSeedElements"].recipes["seedAir"].lock.push("Space");
		this.machines["machineSeedElements"].recipes["seedAir"].lock.push(1e6);
		this.machines["machineSeedElements"].recipes["seedFire"].lock[1] = 3.01;
		this.machines["machineSeedElements"].recipes["seedFire"].lock.push("Blast");
		this.machines["machineSeedElements"].recipes["seedFire"].lock.push(0.2);
		this.machines["machineSeedElements"].recipes["seedFire"].in.push(["Blast", 0, 0.3]);
		this.machines["machineUnPureSoilElements"].recipes["infuseSoilFire"].out[0][1] = 1250;
		for (var mach in this.machines)
		{
			var machine = this.machines[mach];
			if (machine.baseStats[2] && !machine.baseStats[2].length)
			{
				var pref = this.prefixElements[machine.baseStats[2] - 1];
				machine.baseStats[2] = [];
				for (var j = 0; j < this.baseElements.length; j++)
				{
					machine.baseStats[2].push(pref + this.baseElements[j]);
				}
			}
			simplifiedMachineData[mach] = this.machines[mach];
		}
	}
};
var coldCircle = {
	elements: ["Coolant", "Gale", "Cryospire", "Vortex"],
	machines:
	{
		machineCoolant:
		{
			baseStats: [-750, 0, "Coolant"],
			recipes:
			{
				coolantMerge1:
				{
					baseStats: [1, 0.2, true, true],
					in: [
						["Ice", 100, 100],
						["Snow", 0.1, 0.4],
						["Cryogen", 0.1, 0.4]
					],
					out: [
						["Coolant", 5, 1080],
					],
					lock: ["Knowledge", 36],
					upgrade: ["coolantMerge2", "Power", 36]
				},
				coolantMerge2:
				{
					baseStats: [1, 0.4, false, true],
					in: [
						["Ice", 80, 100],
						["Snow", 0.1, 0.4],
						["Cryogen", 0.1, 0.4]
					],
					out: [
						["Coolant", 5, 1080],
					],
				},
				coolantProduction1:
				{
					baseStats: [1, 0.9, true, true],
					in: [
						["Energy", 1, 120e7, 10, ["Bronze", 16, "Copper", 32, "Tin", 64, "Aluminum", 128, "Iron", 256, "Steel", 1, "Plastic", 1]],
						["Gale", 0, 4],
						["Cryospire", 0, 4],
					],
					out: [
						["Coolant", 1, 1580],
					],
					lock: ["Silver", 8],
				},
			}
		},
		machineGale:
		{
			baseStats: [-850, -250, "Gale"],
			recipes:
			{
				galeSetup1:
				{
					baseStats: [0.1, 0.1, true, true],
					in: [
						["Snow", 4, 0.1],
						["Coolant", 1, 54],
					],
					out: [
						["Gale", 10, 12],
					],
					lock: ["Knowledge", 36, "Coolant", 12],
				},
				galeCool1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gale", 1, 0.001],
						["Coolant", 1, 13],
					],
					out: [
						["Gale", 1, 13],
						["Coolant", 0.95, 1000],
					],
					lock: ["Gale", 1e99],
					alwayson: true,
				},
				galeMelt1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gale", 1, 0.001],
					],
					out: [
						["Gale", 0.95, 13],
						["Coolant", 0.05, 13],
					],
					lock: ["Gale", 1e99],
					alwayson: true,
				},
				galeMelt2:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Gale", 0.01, 0.001],
					],
					out: [],
					lock: ["Gale", 0.01],
				},
			}
		},
		machineCryospire:
		{
			baseStats: [-850, 250, "Cryospire"],
			recipes:
			{
				cryospireSetup1:
				{
					baseStats: [0.1, 0.5, true, true],
					in: [
						["Gale", 1, 1],
						["Coolant", 200, 100],
					],
					out: [
						["Cryospire", 2, 12],
					],
					lock: ["Knowledge", 36, "Silver", 2],
				},
				cryospireCool1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Cryospire", 1, 0.001],
						["Coolant", 1, 26],
					],
					out: [
						["Cryospire", 1, 13],
						["Coolant", 0.80, 1200],
					],
					lock: ["Cryospire", 1e99],
					alwayson: true,
				},
				cryospireMelt1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Cryospire", 1, 0.001],
					],
					out: [
						["Cryospire", 0.95, 13],
						["Coolant", 0.05, 26],
					],
					lock: ["Cryospire", 1e99],
					alwayson: true,
				},
				cryospireMelt2:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Cryospire", 0.01, 0.001],
					],
					out: [],
					lock: ["Cryospire", 0.01],
				},
			}
		},
		machineVortex:
		{
			baseStats: [-1100, 0, "Vortex"],
			recipes:
			{
				vortexSetup1:
				{
					baseStats: [0.1, 0.1, true, true],
					in: [
						["Cryospire", 1, 2],
						["Gale", 1, 2],
						["Ice", 1000, 200],
					],
					out: [
						["Vortex", 1, 12],
					],
					lock: ["Coolant", 1300],
				},
				vortexCool1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Vortex", 1, 0.001],
						["Coolant", 1, 39],
					],
					out: [
						["Vortex", 1, 13],
					],
					lock: ["Vortex", 1e99],
					alwayson: true,
				},
				vortexMelt1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Vortex", 1, 0.001],
					],
					out: [
						["Vortex", 0.50, 13],
						["Coolant", 0.50, 39],
					],
					lock: ["Vortex", 1e99],
					alwayson: true,
				},
				vortexMelt2:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Vortex", 0.01, 0.001],
					],
					out: [],
					lock: ["Vortex", 0.01],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	decay: function ()
	{
		var temp;
		for (var i = 1; i < this.elements.length; i++)
		{
			if (data.oElements[this.elements[i]].amount > 0)
			{
				if (machineData["machine" + this.elements[i]].paused)
				{
					machineData["machine" + this.elements[i]].paused = false;
				}
				var dec1 = machineData["machine" + this.elements[i]].recipes[1];

				if (!dec1.unlocked)
				{
					dec1.region.paymentSuccess();
				}
				dec1.enabled = true;
				dec1.activated = true;

				var dec2 = machineData["machine" + this.elements[i]].recipes[2];
				if (!dec2.unlocked)
				{
					dec2.region.paymentSuccess();
				}
				dec2.enabled = true;
				dec2.activated = true;
			}
		}
	},
};
var hotCircle = {
	elements: ["Blaze", "Blast", "Pyro", "Coal", "Sulphur", "Propane", "Ash", "Dust", "Carbon"],
	machines:
	{
		machineBlaze:
		{
			baseStats: [900, 0, "Blaze"],
			recipes:
			{
				blazeIgnite1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Coal", 0.03, 0.3],
					],
					out: [
						["Blaze", 0.024, 0.1],
					],
					lock: ["Coal", 0.1],
				},
				blazeDecay1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Blaze", 1, 0.001],
					],
					out: [
						["Blaze", 0.99, -12],
						["Ash", 0.01, -12],
					],
					lock: ["Ash", 1e99],
					alwayson: true,
				},
				blazeFuel1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Coal", 1, 0.1],
						["Blaze", 1, 0.1],
					],
					out: [
						["Blaze", 1.98, 1.1, 10, ["Plastic", 0.02]],
						["Ash", 0.02, -12],
					],
					lock: ["Knowledge", 36, "Energy", 0.01],
				},
			}
		},
		machineBlast:
		{
			baseStats: [950, 250, "Blast"],
			recipes:
			{
				blastIgnite1:
				{
					baseStats: [1, 0.5, true, false],
					in: [
						["Sulphur", 0.3, 0.5],
					],
					out: [
						["Blast", 0.3, 0.8],
						["Dust", 0.3, -12],
					],
					lock: ["Iron", 120],
				},
				blastDecay1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Blast", 1, 0.001],
					],
					out: [
						["Blast", 0.995, -12],
						["Dust", 0.005, -12],
					],
					lock: ["Dust", 1e99],
					alwayson: true,
				},
				blastFuel1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Sulphur", 0.2, 2.1],
						["Blast", 1, 0.5],
					],
					out: [
						["Blast", 1.1, 2.2, 5, ["Acid", 1]],
						["Dust", 0.1, -12],
					],
					lock: ["Steel", 1],
				},
			}
		},
		machinePyro:
		{
			baseStats: [950, -250, "Pyro"],
			recipes:
			{
				pyroIgnite1:
				{
					baseStats: [1, 0.5, true, false],
					in: [
						["Propane", 0.02, 0.1],
					],
					out: [
						["Pyro", 0.03, 0.1],
					],
					lock: ["Plastic", 1],
				},
				pyroDecay1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Pyro", 1, 0.001],
					],
					out: [
						["Pyro", 0.975, -12],
						["Carbon", 0.025, -12],
					],
					lock: ["Carbon", 1e99],
					alwayson: true,
				},
				pyroFuel1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Propane", 0.1, 0.1],
						["Pyro", 1, 0.1],
					],
					out: [
						["Pyro", 1.1, 1.2, 6, ["Steel", 1]],
					],
					lock: ["Pyro", 0.001],
				},
			}
		},
		machineCoal:
		{
			baseStats: [750, 0, "Coal"],
			recipes:
			{
				coalProduction1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Space", 1, 0.1],
						["Void", 1, 0.1],
						["EssenceFire", 0.1, 0.1],
					],
					out: [
						["Coal", 1, 12],
					],
					lock: ["Knowledge", 36],
				},
				coalRecover1:
				{
					baseStats: [1, 0.25, true, true],
					in: [
						["Ash", 1, 0.1],
						["Obsidian", 0.1, 0.1],
					],
					out: [
						["Coal", 1, 12],
					],
					lock: ["Ash", 0.1],
				},
				coalAdvProduction1:
				{
					baseStats: [1, 0.25, true, true],
					in: [
						["Stone", 0.1, 0.1],
						["Obsidian", 0.1, 0.1],
					],
					out: [
						["Coal", 1, 12],
					],
					lock: ["Obsidian", 2.1],
				},
			}
		},
		machineSulphur:
		{
			baseStats: [800, 150, "Sulphur"],
			recipes:
			{
				sulphurProduction1:
				{
					baseStats: [1, 0.3, true, true],
					in: [
						["Coal", 1, 0.1],
						["Water", 1e5, 0.1],
						["Air", 1e5, 0.1],
					],
					out: [
						["Sulphur", 1, 12],
					],
					lock: ["Bronze", 34],
				},
			}
		},
		machinePropane:
		{
			baseStats: [800, -150, "Propane"],
			recipes:
			{}
		},
		machineHotWaste:
		{
			baseStats: [1100, 0, ["Ash", "Dust", "Carbon"]],
			recipes:
			{}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	decay: function ()
	{
		var temp;
		for (var i = 0; i < 3; i++)
		{
			if (data.oElements[this.elements[i]].amount > 0)
			{
				if (machineData["machine" + this.elements[i]].paused)
				{
					machineData["machine" + this.elements[i]].paused = false;
				}
				var dec = machineData["machine" + this.elements[i]].recipes[1];
				if (!dec.unlocked)
				{
					dec.region.paymentSuccess();
				}
				dec.enabled = true;
			}
		}
	},
};
var powerCircle = {
	elements: ["Power", "Energy", "Fuel", "Diesel", "Petrol", "Propene"],
	machines:
	{
		machineRefinery:
		{
			baseStats: [600, -350, "Fuel"],
			recipes:
			{
				fuelRefine1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Oil", 1, 1],
						["Blaze", 0, 0.01],
					],
					out: [
						["Fuel", 1, 12],
					],
					lock: ["Knowledge", 36],
				},
			}
		},
		machineAdvancedRefinery:
		{
			baseStats: [750, -350, ["Diesel", "Petrol", "Propene"]],
			recipes:
			{
				oilRefine1:
				{
					baseStats: [1, 0.8, true, true],
					in: [
						["Oil", 100, 1],
						["Blast", 0, 0.8],
						["Cryospire", 0, 1],
					],
					out: [
						["Diesel", 90, 12],
						["Petrol", 8, 12],
						["Propene", 1, 12],
						["Propane", 1, 12],
					],
					lock: ["Blast", 0.1],
				},
			}
		},
		machineProcessFuel:
		{
			baseStats: [500, -500],
			recipes:
			{
				fuelUsage1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Fuel", 1, 0.001],
						["Gale", 0, 1],
					],
					out: [
						["Energy", 100, -12],
					],
					lock: ["Knowledge", 36],
					upgrade: ["fuelUsage2", "Copper", 6],
				},
				fuelUsage2:
				{
					baseStats: [1, 0.2, false, true],
					in: [
						["Fuel", 1, 0.001],
						["Gale", 0, 1],
					],
					out: [
						["Energy", 100, 12],
					],
				},
			}
		},
		machineProcessDiesel:
		{
			baseStats: [575, -575],
			recipes:
			{
				dieselDrain1:
				{
					baseStats: [1, 0, true, true],
					in: [
						["Diesel", 0.01, 5.01],
					],
					out: [],
					lock: ["Clay", 1, "Diesel", 0.01],
					upgrade: ["dieselDrain2", "Plastic", 0.1],
				},
				dieselDrain2:
				{
					baseStats: [1, 0, false, true],
					in: [
						["Diesel", 0.5, 5.01],
					],
					out: [],
				},
				dieselUsage1:
				{
					baseStats: [1, 0.25, true, true],
					in: [
						["Diesel", 1, 1.1],
						["Blaze", 0, 3],
					],
					out: [
						["Energy", 20, -150],
					],
					lock: ["Steel", 1],
				},
			}
		},
		machineProcessPetrol:
		{
			baseStats: [650, -650],
			recipes:
			{
				petrolDrain1:
				{
					baseStats: [1, 0, true, true],
					in: [
						["Petrol", 0.01, 5.01],
					],
					out: [],
					lock: ["Clay", 1, "Petrol", 0.01],
				},
				petrolUsage1:
				{
					baseStats: [1, 0.30, true, true],
					in: [
						["Petrol", 1, 1.1],
						["Pyro", 0, 0.5],
					],
					out: [
						["Power", 5, -150],
					],
					lock: ["Steel", 1],
				},
			}
		},
		machineProcessPropane:
		{
			baseStats: [725, -725],
			recipes:
			{
				propaneDrain1:
				{
					baseStats: [1, 0, true, true],
					in: [
						["Propane", 0.01, 5.01],
					],
					out: [],
					lock: ["Clay", 1, "Propane", 0.01],
				},
			}
		},
		machineProcessPropene:
		{
			baseStats: [800, -800],
			recipes:
			{
				propeneDrain1:
				{
					baseStats: [1, 0, true, true],
					in: [
						["Propene", 0.01, 5.01],
					],
					out: [],
					lock: ["Clay", 1, "Propene", 0.01],
					upgrade: ["propeneDrain2", "Plastic", 1],
				},
				propeneDrain2:
				{
					baseStats: [1, 0, false, true],
					in: [
						["Propene", 0.1, 5.01],
					],
					out: [],
				},
			}
		},
		machineEnergy:
		{
			baseStats: [350, -600, "Energy"],
			recipes:
			{}
		},
		machinePower:
		{
			baseStats: [350, -750, "Power"],
			recipes:
			{}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
};
var reachCircle = {
	elements: ["Spatial", "Temporal", "Parallel", "FoldedSpace", "FoldedSpatial", "FoldedTemporal", "Time", "NormalLimit", "TurboLimit"],
	machines:
	{
		machineSpatial:
		{
			baseStats: [-107, -907, "Spatial"],
			recipes:
			{
				spatialCreation1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Space", 1, 1.1],
					],
					out: [
						["Spatial", 1, 9.6],
					],
					lock: ["Glass", 1],
				},
				spatialProduce1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["Spatial", 1, 0.1],
					],
					out: [
						["Spatial", 10, -1e10],
						["Space", 0.4, 1e10],
					],
					lock: ["Spatial", 0.01],
				},
			}
		},
		machineTemporal:
		{
			baseStats: [150, -800, "Temporal"],
			recipes:
			{
				temporalCreation1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Space", 2, 11],
					],
					out: [
						["Temporal", 1, 1.2],
					],
					lock: ["Spatial", 1, "Space", 10, "Gold", 1, ],
				},
				temporalProduce1:
				{
					baseStats: [1, 0.05, true, true],
					in: [
						["Temporal", 1, 0.1],
						["Space", 1, 10.5],
					],
					out: [
						["Temporal", 20, -1e10],
						["Spatial", 1, 1e10],
					],
					lock: ["Temporal", 0.01],
				},
				temporalShenigans1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Temporal", 0.0005, 4],
					],
					out: [
						["Time", 4, -1e20],
					],
					lock: ["Parallel", 0.01],
				},
			}
		},
		machineParallel:
		{
			baseStats: [-107, -693, "Parallel"],
			recipes:
			{
				parallelCreation1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Space", 4, 110],
					],
					out: [
						["Parallel", 1, 1.2],
					],
					lock: ["Temporal", 1, "Space", 100],
				},
				parallelProduce1:
				{
					baseStats: [1, 0.05, true, true],
					in: [
						["Parallel", 1, 0.1],
						["Spatial", 1, 105],
					],
					out: [
						["Parallel", 20, -1e10],
						["Temporal", 1, 1e10],
					],
					lock: ["Parallel", 0.01],
				},
			}
		},
		machineFoldedSpace:
		{
			baseStats: [107, -693, "FoldedSpace"],
			recipes:
			{
				foldedSpaceCreation1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Parallel", 1, 1.1],
						["Space", 1, 0.1],
					],
					out: [
						["FoldedSpace", 1, 1.2],
					],
					lock: ["Knowledge", 36, "Parallel", 1, "Space", 1],
				},
			}
		},
		machineFoldedSpatial:
		{
			baseStats: [107, -907, "FoldedSpatial"],
			recipes:
			{
				foldedSpatialCreation1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["FoldedSpace", 1, 0.1],
					],
					out: [
						["FoldedSpatial", 1, 1.2],
					],
					lock: ["FoldedSpace", 1],
				},
				foldedSpatialProduce1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["FoldedSpatial", 1, 0.1],
					],
					out: [
						["FoldedSpatial", 10, -1e10],
						["FoldedSpace", 0.4, 1e10],
					],
					lock: ["FoldedSpatial", 0.01],
				},
			}
		},
		machineFoldedTemporal:
		{
			baseStats: [-150, -800, "FoldedTemporal"],
			recipes:
			{
				foldedTemporalCreation1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["FoldedSpace", 3, 1.1],
					],
					out: [
						["FoldedTemporal", 1, 1.2],
					],
					lock: ["FoldedSpatial", 1, "FoldedSpace", 10],
				},
				foldedTemporalProduce1:
				{
					baseStats: [1, 0.05, true, true],
					in: [
						["FoldedTemporal", 1, 0.1],
						["FoldedSpace", 1, 11],
					],
					out: [
						["FoldedTemporal", 20, -1e10],
						["FoldedSpatial", 1, 150],
					],
					lock: ["FoldedTemporal", 0.01],
				},
				foldedTemporalShenigans1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["FoldedTemporal", 0.0006, 1.1],
					],
					out: [
						["Time", 21, -1e20],
					],
					lock: ["FoldedTemporal", 1],
				},
			}
		},
		machineTime:
		{
			baseStats: [-0, -950, ["Time", "NormalLimit", "TurboLimit"]],
			recipes:
			{
				timeSlow1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Time", 500, 0.01],
					],
					out: [],
					lock: ["Knowledge", 0.001],
				},
				timeFast1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Time", 1, 0.01],
					],
					out: [],
					lock: ["Knowledge", 0.4, "Gold", 0.4],
				},
				timeBend1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Time", 200, 0.01],
					],
					out: [],
					lock: ["Temporal", 1, "Time", 1e6],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		elementalDisplayType["Time"] = "";
		elementalDisplayType["NormalLimit"] = "fixed";
		elementalDisplayType["TurboLimit"] = "fixed";
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
	decay: function ()
	{
		machines.lagbenderMultiplier = 1;
		if (!machineData.machineTime.paused)
		{
			if (machineData.machineTime.recipes[2].enabled)
			{
				machines.lagbenderMultiplier = 10;
			}
		}
	}
};
var rarityCircle = {
	elements: ["Silver", "Bronze", "Copper", "Tin", "Aluminum", "Iron", "Steel", "Clay", "Plastic", "Silicon", "Acid", "Mayo"],
	machines:
	{
		machineSilver:
		{
			baseStats: [-740, -400, "Silver"],
			recipes:
			{
				silverStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 2, 1.2],
						["Alkahest", 2, 1.2],
					],
					out: [
						["Silver", 1, 1.2],
					],
					lock: ["Knowledge", 36],
				},
				silverAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 1, 2.4],
						["Gale", 0, 4.8],
					],
					out: [
						["Silver", 2, 16.3],
					],
					lock: ["Silver", 0.01, "Gale", 2],
				},
			}
		},
		machineBronze:
		{
			baseStats: [-570, -570, "Bronze"],
			recipes:
			{
				bronzeStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 4, 1.2],
						["Alkahest", 4, 1.2],
					],
					out: [
						["Bronze", 1, 1.2],
					],
					lock: ["Knowledge", 36, "Silver", 0.01],
				},
				bronzeAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Silver", 1, 2.4],
						["Energy", 0.1, 0.8],
					],
					out: [
						["Bronze", 2, 48.7],
					],
					lock: ["Bronze", 0.01, "Energy", 2],
				},
			}
		},
		machineCopper:
		{
			baseStats: [-570, -330, "Copper"],
			recipes:
			{
				copperStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 6, 1.2],
						["Alkahest", 6, 1.2],
					],
					out: [
						["Copper", 1, 1.2],
					],
					lock: ["Knowledge", 36, "Silver", 0.01],
				},
				copperAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Bronze", 1, 2.4],
						["Blaze", 0, 0.3],
					],
					out: [
						["Copper", 2, 184.7],
					],
					lock: ["Copper", 0.01, "Blaze", 0.6],
				},
			}
		},
		machineTin:
		{
			baseStats: [-740, -500, "Tin"],
			recipes:
			{
				tinStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 8, 1.2],
						["Alkahest", 8, 1.2],
					],
					out: [
						["Tin", 1, 1.2],
					],
					lock: ["Knowledge", 36, "Copper", 0.01],
				},
				tinAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Copper", 1, 2.4],
						["CompressedEarth", 0.001, 0.9],
					],
					out: [
						["Tin", 2, 2.3e3],
					],
					lock: ["Tin", 0.01, "CompressedEarth", 3.6],
				},
			}
		},
		machineAluminum:
		{
			baseStats: [-500, -500, "Aluminum"],
			recipes:
			{
				aluminumStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 12, 1.2],
						["Alkahest", 12, 1.2],
					],
					out: [
						["Aluminum", 1, 1.2],
					],
					lock: ["Knowledge", 36, "Copper", 0.01],
				},
				aluminumAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Tin", 1, 2.4],
						["Gale", 0, 8.9],
					],
					out: [
						["Aluminum", 2, 6.3e3],
					],
					lock: ["Aluminum", 0.01, "Gale", 3.6],
				},
			}
		},
		machineIron:
		{
			baseStats: [-670, -330, "Iron"],
			recipes:
			{
				ironStart1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Gold", 16, 1.2],
						["Alkahest", 16, 1.2],
					],
					out: [
						["Iron", 1, 1.2],
					],
					lock: ["Knowledge", 36, "Copper", 0.01],
				},
				ironAlchemy1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Aluminum", 1, 2.4],
						["Alkahest", 0, 42],
					],
					out: [
						["Iron", 2, 2.4e4],
					],
					lock: ["Knowledge", 36, "Aluminum", 3.6],
					upgrade: ["ironAlchemy2", "Iron", 2.4],
				},
				ironAlchemy2:
				{
					baseStats: [1, 1, false, true],
					in: [
						["Aluminum", 1, 2.4],
						["Alkahest", 0, 24],
					],
					out: [
						["Iron", 2, 2.4e4],
					],
				},
			}
		},
		machineSteel:
		{
			baseStats: [-670, -570, "Steel"],
			recipes:
			{
				steelProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["Iron", 1, 1.2],
						["Carbon", 1, 1.2],
						["Pyro", 0, 0.4],
					],
					out: [
						["Steel", 1, 1.2],
					],
					lock: ["Carbon", 1],
				},
			}
		},
		machineClay:
		{
			baseStats: [-330, -570, "Clay"],
			recipes:
			{
				clayProduction1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Ash", 1, 4.8],
						["Sand", 100, 457],
						["Mud", 100, 457],
						["Water", 200, 1e4],
					],
					out: [
						["Clay", 1, 1.2],
					],
					lock: ["Ash", 1],
				},
			}
		},
		machinePlastic:
		{
			baseStats: [-330, -670, "Plastic"],
			recipes:
			{
				plasticProduction1:
				{
					baseStats: [1, 0.05, true, true],
					in: [
						["Propene", 1, 1.2],
						["Blaze", 0, 1],
					],
					out: [
						["Plastic", 1, 0.1],
					],
					lock: ["Propene", 0.1],
				},
				plasticProduction2:
				{
					baseStats: [1, 0.15, true, true],
					in: [
						["Propene", 1, 1.2],
						["Blaze", 0, 10],
					],
					out: [
						["Plastic", 1, 1.2],
					],
					lock: ["Plastic", 0.02],
					upgrade: ["plasticProduction3", "SterileGlass", 1],
				},
				plasticProduction3:
				{
					baseStats: [1, 0.45, false, true],
					in: [
						["Propene", 1, 1.2],
						["Blaze", 0, 10],
					],
					out: [
						["Plastic", 1, 1.2],
					],
				},
			}
		},
		machineSilicon:
		{
			baseStats: [-400, -740, "Silicon"],
			recipes:
			{
				siliconProduction1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Quartz", 1, 1],
						["Coal", 4, 9],
						["PureFire", 0.7, 1.7],
					],
					out: [
						["Silicon", 0.4, 2.2],
					],
					lock: ["Quartz", 1, "Earth", 1e6, "Water", 1e6, "Air", 1e6, "Fire", 1e6],
				},
			}
		},
		machineAcid:
		{
			baseStats: [-500, -740, "Acid"],
			recipes:
			{
				acidProduction1:
				{
					baseStats: [1, 0.2, true, true],
					in: [
						["Sulphur", 1, 1.2],
						["Plastic", 0.4, 0.8],
						["Vortex", 0, 1],
					],
					out: [
						["Acid", 1, 1.2],
					],
					lock: ["Vortex", 0.001, "Glass", 1],
				},
			}
		},
		machineMayo:
		{
			baseStats: [-570, -670, "Mayo"],
			recipes:
			{
				earthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["Mayo", 1, 1.2],
					],
					lock: ["Earth", 1e99],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
};
var gemCircle = {
	elements: ["CompressedDust", "CompressedAsh", "Gravel", "Pebbles", "Stone", "Gemstone", "Quartz", "Emerald", "Sapphire", "Topaz", "Ruby"],
	machines:
	{
		machineAdvancedCompress:
		{
			baseStats: [1100, 600, ["CompressedDust", "CompressedAsh"]],
			recipes:
			{
				ashCompress1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Ash", 100, 11],
					],
					out: [
						["CompressedAsh", 1, 0.1],
					],
					lock: ["Ash", 11],
					upgrade: ["ashCompress2", "Pyro", 3],
				},
				ashCompress2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Ash", 10, 9],
						["Power", 10, 90],
					],
					out: [
						["CompressedAsh", 5, 1.2],
					],
				},
				dustCompress1:
				{
					baseStats: [1, 0.01, true, true],
					in: [
						["Dust", 100, 11],
					],
					out: [
						["CompressedDust", 1, 0.1],
					],
					lock: ["Dust", 11],
					upgrade: ["dustCompress2", "Pyro", 3],
				},
				dustCompress2:
				{
					baseStats: [1, 0.1, false, true],
					in: [
						["Dust", 10, 9],
						["Energy", 100, 90],
					],
					out: [
						["CompressedDust", 5, 1.2],
					],
				},
			}
		},
		machineStone:
		{
			baseStats: [775, 600, ["Gravel", "Pebbles", "Stone"]],
			recipes:
			{
				gravelProduction1:
				{
					baseStats: [1, 0.8, true, true],
					in: [
						["CompressedEarth", 0.4, 1.2],
						["Energy", 1, 1.2],
					],
					out: [
						["Gravel", 1, 1.2, 10, ["PureEarth", 1]],
					],
					lock: ["Energy", 1],
				},
				pebbleProduction1:
				{
					baseStats: [1, 0.01, true, false],
					in: [
						["Obsidian", 1, 1],
						["Lava", 1, 1],
						["Cryogen", 1, 1],
					],
					out: [
						["Pebbles", 1, 0.1],
					],
					lock: ["Knowledge", 8],
					upgrade: ["pebbleProduction2", "Energy", 1, "Gravel", 0.1],
				},
				pebbleProduction2:
				{
					baseStats: [1, 0.8, false, true],
					in: [
						["Gravel", 1, 0.3],
						["Energy", 1, 1.2],
					],
					out: [
						["Pebbles", 1, 1.2, 10, ["FoldedSpace", 200]],
					],
					lock: ["Energy", 1],
				},
				stoneProduction1:
				{
					baseStats: [1, 0.8, true, true],
					in: [
						["Pebbles", 1, 0.3],
						["Energy", 1, 1.2],
					],
					out: [
						["Stone", 1, 1.2, 10, ["Acid", 1]],
					],
					lock: ["Energy", 1],
				},
			}
		},
		machineGemstone:
		{
			baseStats: [775, 775, "Gemstone"],
			recipes:
			{
				gemGrow1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Stone", 0.04, 0.6],
					],
					out: [
						["Gemstone", 0.001, 0.05],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow2:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedEarth", 0.04, 0.6],
						["Gemstone", 0, 0.05],
					],
					out: [
						["Gemstone", 0.001, 0.10],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow3:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Pebbles", 0.04, 0.6],
						["Gemstone", 0, 0.10],
					],
					out: [
						["Gemstone", 0.001, 0.15],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow4:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedWater", 0.04, 0.6],
						["Gemstone", 0, 0.15],
					],
					out: [
						["Gemstone", 0.001, 0.20],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow5:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Carbon", 0.04, 0.6],
						["Gemstone", 0, 0.20],
					],
					out: [
						["Gemstone", 0.001, 0.25],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow6:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedAir", 0.04, 0.6],
						["Gemstone", 0, 0.25],
					],
					out: [
						["Gemstone", 0.001, 0.30],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow7:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Iron", 0.04, 0.6],
						["Energy", 0.04, 0.6],
						["Gemstone", 0, 0.30],
					],
					out: [
						["Gemstone", 0.001, 0.35],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow8:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedFire", 0.04, 0.6],
						["Gemstone", 0, 0.35],
					],
					out: [
						["Gemstone", 0.001, 0.40],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow9:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedAsh", 0.001, 0.6],
						["Gemstone", 0, 0.40],
					],
					out: [
						["Gemstone", 0.001, 0.45],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow10:
				{
					baseStats: [1, 1, true, false],
					in: [
						["DistilledEarth", 0.04, 0.6],
						["Gemstone", 0, 0.45],
					],
					out: [
						["Gemstone", 0.001, 0.50],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow11:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Gravel", 0.04, 0.6],
						["Gemstone", 0, 0.50],
					],
					out: [
						["Gemstone", 0.001, 0.55],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow12:
				{
					baseStats: [1, 1, true, false],
					in: [
						["DistilledWater", 0.04, 0.6],
						["Gemstone", 0, 0.55],
					],
					out: [
						["Gemstone", 0.001, 0.60],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow13:
				{
					baseStats: [1, 1, true, false],
					in: [
						["CompressedDust", 0.001, 0.6],
						["Gemstone", 0, 0.60],
					],
					out: [
						["Gemstone", 0.001, 0.65],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow14:
				{
					baseStats: [1, 1, true, false],
					in: [
						["DistilledAir", 0.04, 0.6],
						["Gemstone", 0, 0.65],
					],
					out: [
						["Gemstone", 0.001, 0.70],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow15:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Steel", 0.006, 0.6],
						["Power", 0.04, 0.6],
						["Gemstone", 0, 0.70],
					],
					out: [
						["Gemstone", 0.001, 0.75],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow16:
				{
					baseStats: [1, 1, true, false],
					in: [
						["DistilledFire", 0.04, 0.6],
						["Gemstone", 0, 0.75],
					],
					out: [
						["Gemstone", 0.001, 0.80],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow17:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Force", 0.04, 0.6],
						["Gemstone", 0, 0.80],
					],
					out: [
						["Gemstone", 0.001, 0.85],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow18:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Space", 0.04, 0.6],
						["Gemstone", 0, 0.85],
					],
					out: [
						["Gemstone", 0.001, 0.90],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow19:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Pressure", 0.04, 0.6],
						["Gemstone", 0, 0.90],
					],
					out: [
						["Gemstone", 0.001, 0.95],
					],
					lock: ["Acid", 0.1],
				},
				gemGrow20:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Acid", 0.002, 0.6],
						["Gemstone", 0, 0.95],
					],
					out: [
						["Gemstone", 0.001, 1.0],
					],
					lock: ["Acid", 0.1],
				},
			}
		},
		machineRandomGem:
		{
			baseStats: [600, 775],
			recipes:
			{
				gemBreak1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Gemstone", 1, 1]
					],
					out: [
						["Quartz", 1, 326],
						["Emerald", 0, 77],
						["Sapphire", 0, 77],
						["Topaz", 0, 77],
						["Ruby", 0, 77],
					],
					lock: ["Gemstone", 1],
				},
				gemRemove1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["Gemstone", 1, 1],
						["PureGolemEarth", 0, 1],
						["PureGolemWater", 0, 1],
						["PureGolemAir", 0, 1],
						["PureGolemFire", 0, 1],
					],
					out: [],
					lock: ["Gemstone", 1, "PureGolemEarth", 1, "PureGolemWater", 1, "PureGolemAir", 1, "PureGolemFire", 1],
				},
			}
		},
		machineQuartz:
		{
			baseStats: [675, 675, "Quartz"],
			recipes:
			{}
		},
		machineEmerald:
		{
			baseStats: [500, 675, "Emerald"],
			recipes:
			{}
		},
		machineSapphire:
		{
			baseStats: [500, 575, "Sapphire"],
			recipes:
			{}
		},
		machineTopaz:
		{
			baseStats: [575, 500, "Topaz"],
			recipes:
			{}
		},
		machineRuby:
		{
			baseStats: [675, 500, "Ruby"],
			recipes:
			{}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
		elementalDisplayType["Topaz"] = "";
		elementalDisplayType["Sapphire"] = "";
		elementalDisplayType["Emerald"] = "";
		elementalDisplayType["Ruby"] = "";
		elementalDisplayType["Quartz"] = "";
	},
	decay: function ()
	{
		for (var i = 0; i < machineData.machineRandomGem.recipes[0].outputs.length; i++)
		{
			machineData.machineRandomGem.recipes[0].outputs[i].ratio = 0;
		}
		var r = Math.trunc(Math.max(20, Math.random() * 25) - 20);
		machineData.machineRandomGem.recipes[0].outputs[r].ratio = 1;
	},
};
var pureCircle = {
	elements: ["PureEarth", "PureWater", "PureAir", "PureFire", "SterileGlass", "CompressionCrystal", "PerfectedOrb", "PureGolemEarth", "PureGolemWater", "PureGolemAir", "PureGolemFire", "Mystery"],
	machines:
	{
		machinePerfectedComponents:
		{
			baseStats: [-525, 525, ["SterileGlass", "CompressionCrystal"]],
			recipes:
			{
				sterileGlassProduction1:
				{
					baseStats: [1, 0.2, true, true],
					in: [
						["Glass", 4, 0.5],
						["Plastic", 0.08, 0.5],
						["Silicon", 0.2, 0.5],
						["Silver", 2, 2],
						["Knowledge", 1, 36],
						["Pyro", 0, 6],
						["Vortex", 0, 4],
					],
					out: [
						["SterileGlass", 1, 108],
					],
					lock: ["Silicon", 1],
				},
				compressionCrystalProduction1:
				{
					baseStats: [1, 0.1, true, true],
					in: [
						["SterileGlass", 0.03, 0.5],
						["FoldedSpatial", 2, 0.5],
						["Spatial", 1000, 140],
						["Tin", 8, 2],
						["Pressure", 2, 7.5],
						["Knowledge", 8, 36],
						["Blaze", 0, 10],
						["Blast", 0, 10],
						["Gale", 0, 9],
						["Cryospire", 0, 9],
					],
					out: [
						["CompressionCrystal", 1, 4.2],
					],
					lock: ["SterileGlass", 1],
				},
			}
		},
		machinePerfectedOrb:
		{
			baseStats: [-600, 600, "PerfectedOrb"],
			recipes:
			{
				perfectedOrbProduction1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["SterileGlass", 4, 4],
						["CompressionCrystal", 1, 1],
						["Emerald", 5, 5],
						["Sapphire", 5, 5],
						["Topaz", 5, 5],
						["Ruby", 5, 5],
					],
					out: [
						["PerfectedOrb", 1, 4],
					],
					lock: ["CompressionCrystal", 1],
				},
			}
		},
		machinePureMixer:
		{
			baseStats: [-675, 675],
			recipes:
			{
				pureEarthProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["DistilledEarth", 1, 0.1],
						["PureEssenceEarth", 1, 1.2],
					],
					out: [
						["PureEarth", 4, 1.2, 4.4, ["Clay", 1, "Plastic", 1, "Silicon", 1]],
					],
					lock: ["Aluminum", 1e3],
				},
				pureWaterProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["DistilledWater", 1, 0.1],
						["PureEssenceWater", 1, 1.2],
					],
					out: [
						["PureWater", 1, 1.2, 4.4, ["Clay", 1, "Plastic", 1, "Silicon", 1]],
					],
					lock: ["Aluminum", 1e3],
				},
				pureAirProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["DistilledAir", 1, 0.1],
						["PureEssenceAir", 1, 1.2],
					],
					out: [
						["PureAir", 3, 1.2, 4.4, ["Clay", 1, "Plastic", 1, "Silicon", 1]],
					],
					lock: ["Aluminum", 1e3],
				},
				pureFireProduction1:
				{
					baseStats: [1, 1, true, true],
					in: [
						["DistilledFire", 1, 0.1],
						["PureEssenceFire", 1, 1.2],
					],
					out: [
						["PureFire", 6, 1.2, 4.4, ["Clay", 1, "Plastic", 1, "Silicon", 1]],
					],
					lock: ["Aluminum", 1e3],
				},
			}
		},
		machinePureEarth:
		{
			baseStats: [-550, 900, "PureEarth"],
			recipes:
			{
				earthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["PureEarth", 1, 1.2],
					],
					lock: ["Mystery", 1e99],
				},
			}
		},
		machinePureWater:
		{
			baseStats: [-725, 875, "PureWater"],
			recipes:
			{
				earthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["PureWater", 1, 1.2],
					],
					lock: ["Mystery", 1e99],
				},
			}
		},
		machinePureAir:
		{
			baseStats: [-900, 550, "PureAir"],
			recipes:
			{
				earthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["PureAir", 1, 1.2],
					],
					lock: ["Mystery", 1e99],
				},
			}
		},
		machinePureFire:
		{
			baseStats: [-875, 725, "PureFire"],
			recipes:
			{
				earthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [],
					out: [
						["PureFire", 1, 1.2],
					],
					lock: ["Mystery", 1e99],
				},
			}
		},
		machinePureGolemEarth:
		{
			baseStats: [-550, 975, "PureGolemEarth"],
			recipes:
			{
				pureGolemEarthStart1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["PerfectedOrb", 1, 1],
						["PureEarth", 100, 100],
					],
					out: [
						["PureGolemEarth", 1, 1],
					],
					lock: ["SterileGlass", 21],
				},
			}
		},
		machinePureGolemWater:
		{
			baseStats: [-775, 925, "PureGolemWater"],
			recipes:
			{
				pureGolemWaterStart1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["PerfectedOrb", 1, 1],
						["PureWater", 100, 100],
					],
					out: [
						["PureGolemWater", 1, 1],
					],
					lock: ["SterileGlass", 21],
				},
			}
		},
		machinePureGolemAir:
		{
			baseStats: [-975, 550, "PureGolemAir"],
			recipes:
			{
				pureGolemAirStart1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["PerfectedOrb", 1, 1],
						["PureAir", 100, 100],
					],
					out: [
						["PureGolemAir", 1, 1],
					],
					lock: ["SterileGlass", 21],
				},
			}
		},
		machinePureGolemFire:
		{
			baseStats: [-925, 775, "PureGolemFire"],
			recipes:
			{
				pureGolemFireStart1:
				{
					baseStats: [1, 1, true, false],
					in: [
						["PerfectedOrb", 1, 1],
						["PureFire", 100, 100],
					],
					out: [
						["PureGolemFire", 1, 1],
					],
					lock: ["SterileGlass", 21],
				},
			}
		},
	},
	preprocess: function ()
	{
		addCircleElements(this.elements);
		for (var machine in this.machines)
		{
			simplifiedMachineData[machine] = this.machines[machine];
		}
	},
};

var preprocessed = false;
var colorDummy = ["#454545", "#454545", "#454545", "#454545"];

function addCircleElements(array)
{
	for (var i = 0; i < array.length; i++)
	{
		initialData.elements.push(array[i]);
		if (!elementalColors[array[i]])
		{
			elementalColors[array[i]] = colorDummy;
		}
		if (!images["icon" + array[i]])
		{
			images["icon" + array[i]] = images.iconMissing;
		}
		elementalDisplayType[array[i]] = "exp";
	}
}

function preprocessAdditionalCircles()
{
	if (preprocessed)
	{
		return;
	}
	midCircle.preprocess();
	lifeCircle.preprocess();
	coldCircle.preprocess();
	hotCircle.preprocess();
	powerCircle.preprocess();
	reachCircle.preprocess();
	rarityCircle.preprocess();
	gemCircle.preprocess();
	pureCircle.preprocess();
	preprocessed = true;
}
