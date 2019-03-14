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
					["Air", 1, 0.1],
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
					["Fire", 1, 12, 10, ["Fire", 80]],
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
			},
		}
	},
	"golemInfuser":
	{
		baseStats: [-200, 300],
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
			},
		}
	},
	"golemMerger":
	{
		baseStats: [200, 300],
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
		baseStats: [0, 250, "Mud"],
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
					["Mud", 1, 52, 4, ["Mud", 60]],
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
		}
	},
	"machineIce":
	{
		baseStats: [-250, 50, "Ice"],
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
					["Ice", 1, 52, 4, ["Ice", 60]],
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
		}
	},
	"machineSteam":
	{
		baseStats: [-150, -200, "Steam"],
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
					["Steam", 1, 52, 4, ["Steam", 60]],
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
		}
	},
	"machineMagma":
	{
		baseStats: [250, 50, "Magma"],
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
					["Magma", 1, 52, 4, ["Magma", 60]],

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
		}
	},
	"machineSand":
	{
		baseStats: [150, -200, "Sand"],
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
					["Sand", 1, 52, 4, ["Magma", 180]],

				],
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
					["Mud", 6000, -45],
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
					["Mud", 600, -60],
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
					["Void", 1, 102],
					["Mud", 19, -150],
				],
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
		}
	},
};

function prepareTemplatedMachineData()
{
	var templateData = {};
	for (var title in simplifiedMachineData)
	{
		var simplifiedData = simplifiedMachineData[title];
		var preparedData = {
			x: simplifiedData.baseStats[0],
			y: simplifiedData.baseStats[1],

			recipes: [],
			hiddenRecipes:
			{},
			baseRecipes:
			{},
		};
		if (simplifiedData.baseStats[2])
		{
			preparedData.displayElement = simplifiedData.baseStats[2];
		}
		if (simplifiedData.baseStats[3])
		{
			preparedData.displayStep = simplifiedData.baseStats[3];
		}
		else
		{
			preparedData.displayStep = 8;
		}
		for (var recipeTitle in simplifiedData.recipes)
		{
			var simplifiedRecipe = simplifiedData.recipes[recipeTitle];
			var preparedRecipe = {
				id: recipeTitle,
				title: locale.oRecipes[recipeTitle],
				enabled: false,
				inputs: [],
				outputs: [],
				productionRate: simplifiedRecipe.baseStats[0],
				efficiency: simplifiedRecipe.baseStats[1],
			};
			if (simplifiedRecipe.baseStats[3])
			{
				preparedRecipe.scaling = true;
			}
			if (simplifiedRecipe.lock)
			{
				preparedRecipe.unlocked = false;
				preparedRecipe.unlockCosts = [];
				for (var i = 0; i < simplifiedRecipe.lock.length; i += 2)
				{
					preparedRecipe.unlockCosts.push(
					{
						type: simplifiedRecipe.lock[i],
						amount: simplifiedRecipe.lock[i + 1],
					});
				}
			}
			else
			{
				preparedRecipe.unlocked = true;
			}
			if (simplifiedRecipe.upgrade)
			{
				preparedRecipe.upgradeTo = simplifiedRecipe.upgrade[0];
				preparedRecipe.upgradeCosts = [];
				for (var i = 1; i < simplifiedRecipe.upgrade.length; i += 2)
				{
					preparedRecipe.upgradeCosts.push(
					{
						type: simplifiedRecipe.upgrade[i],
						amount: simplifiedRecipe.upgrade[i + 1],
					});
				}
			}

			for (var i = 0; i < simplifiedRecipe.in.length; i++)
			{
				var simplifiedIngredient = simplifiedRecipe.in[i];
				var preparedIngredient = {
					type: simplifiedIngredient[0],
					ratio: simplifiedIngredient[1],
					min: simplifiedIngredient[2],
				};
				if (simplifiedIngredient[3])
				{
					preparedIngredient.slider = 1;
					preparedIngredient.sliderBase = simplifiedIngredient[2];
					preparedIngredient.sliderStep = simplifiedIngredient[3];
					preparedIngredient.upped = 0;
					preparedIngredient.upgrades = [];
					if (simplifiedIngredient[4].length > 0)
					{
						for (var j = 0; j < simplifiedIngredient[4].length; j += 2)
						{
							preparedIngredient.upgrades[j / 2] = {
								costs: [
								{
									type: simplifiedIngredient[4][j],
									amount: simplifiedIngredient[4][j + 1],
								}]
							}
						}
					}
					else
					{
						preparedIngredient.upgrades[0] = {
							costs: [
							{
								type: simplifiedIngredient[0],
								amount: simplifiedIngredient[2] * simplifiedIngredient[3],
							}]
						}
					}
				}
				preparedRecipe.inputs.push(preparedIngredient);
			}
			for (var i = 0; i < simplifiedRecipe.out.length; i++)
			{
				var simplifiedIngredient = simplifiedRecipe.out[i];
				var preparedIngredient = {
					type: simplifiedIngredient[0],
					ratio: simplifiedIngredient[1],
					max: simplifiedIngredient[2],
				};
				if (simplifiedIngredient[2] < 0)
				{
					preparedIngredient.max *= -1;
					preparedIngredient.noLimit = true;
				}
				if (simplifiedIngredient[3])
				{
					preparedIngredient.slider = 1;
					preparedIngredient.sliderBase = simplifiedIngredient[2];
					preparedIngredient.sliderStep = simplifiedIngredient[3];
					preparedIngredient.upped = 0;
					preparedIngredient.upgrades = [];
					if (simplifiedIngredient[4].length > 0)
					{
						for (var j = 0; j < simplifiedIngredient[4].length; j += 2)
						{
							preparedIngredient.upgrades[j / 2] = {
								costs: [
								{
									type: simplifiedIngredient[4][j],
									amount: simplifiedIngredient[4][j + 1],
								}]
							}
						}
					}
					else
					{
						preparedIngredient.upgrades[0] = {
							costs: [
							{
								type: simplifiedIngredient[0],
								amount: simplifiedIngredient[2] * simplifiedIngredient[3],
							}]
						}
					}
				}
				preparedRecipe.outputs.push(preparedIngredient);
			}

			if (simplifiedRecipe.baseStats[2])
			{
				preparedData.recipes.push(preparedRecipe);
				preparedData.baseRecipes[recipeTitle] = preparedRecipe;
			}
			else
			{
				preparedData.hiddenRecipes[recipeTitle] = preparedRecipe;
			}
		}
		templateData[title] = preparedData;
	}
	return templateData;
}
