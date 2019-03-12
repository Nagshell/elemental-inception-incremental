var simplifiedMachineData = {
	"Crystallizer":
	{
		baseStats: [100, 100, "Earth", 16],
		recipes:
		{
			"Earth Trickle":
			{
				baseStats: [1, 0.0008, true, false],
				in: [],
				out: [
					["Earth", 1, 1.2],
				],
				lock: ["Earth", 0],
				upgrade: ["Earth Slide", "Water", 0.1],
			},
			"Earth Slide":
			{
				baseStats: [1, 0.0015, false, false],
				in: [],
				out: [
					["Earth", 1, 1.2],
				],
				upgrade: ["Earth Avalanche", "Air", 0.1],
			},
			"Earth Avalanche":
			{
				baseStats: [1, 0.004, false, false],
				in: [],
				out: [
					["Earth", 1, 1.2],
				],
				upgrade: ["Weak Earth Rift", "Earth", 5],
			},
			"Weak Earth Rift":
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Earth", 1, 12, 10, ["Earth", 80]],
				],
				upgrade: ["Pure Earth Rift", "Mud", 0.1, "Magma", 0.1],
			},
			"Pure Earth Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Earth", 10, 1200, 9, ["GolemEarth", 5]],
				],
			},
			"Simple Earth Conversion":
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
				upgrade: ["Improved Earth Conversion", "Earth", 100],
			},
			"Improved Earth Conversion":
			{
				baseStats: [1, 1.05, false, true],
				in: [
					["Earth", 1, 80.1],
					["Fire", 1, 80.1],
				],
				out: [
					["Earth", 2, 502],
				],
				upgrade: ["True Earth Rift", "Void", 0.1, "GolemEarth", 8],
			},
			"True Earth Rift":
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Earth", 1, 1]
				],
				out: [
					["Earth", 1, 12000, 4, ["Alkahest", 0.002]],
				],
			},
			"Catalized Earth Conversion":
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
				upgrade: ["Stabilized Earth C-Rift", "Void", 80, "GolemEarth", 8],
			},
			"Stabilized Earth C-Rift":
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
	"Aqueous Extractor":
	{
		baseStats: [-100, 100, "Water", 16],
		recipes:
		{
			"Forcefull Water Conversion":
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Earth", 1, 0.4],
				],
				out: [
					["Water", 1, 1.2],
				],
				lock: ["Earth", 1],
				upgrade: ["Weak Water Rift", "Water", 5],
			},
			"Weak Water Rift":
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Water", 1, 12, 10, ["Water", 80]],
				],
				upgrade: ["Pure Water Rift", "Ice", 0.1, "Steam", 0.1],
			},
			"Pure Water Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Water", 10, 1200, 9, ["GolemWater", 5]],
				],
			},
			"Simple Water Conversion":
			{
				baseStats: [1, 1.02, true, true],
				in: [
					["Earth", 1, 1.1],
					["Water", 1, 1.1],
				],
				out: [
					["Water", 2, 5.2, 4, ["Water", 10, "GolemWater", 1]],
				],
				lock: ["Water", 1],
				upgrade: ["Improved Water Conversion", "Water", 100],
			},
			"Improved Water Conversion":
			{
				baseStats: [1, 1.05, false, true],
				in: [
					["Earth", 1, 80.1],
					["Water", 1, 80.1],
				],
				out: [
					["Water", 2, 502],
				],
				upgrade: ["True Water Rift", "Void", 0.1, "GolemWater", 8],
			},
			"True Water Rift":
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Water", 1, 1]
				],
				out: [
					["Water", 1, 12000, 4, ["Alkahest", 0.002]],
				],
			},
			"Catalized Water Conversion":
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
				upgrade: ["Stabilized Water C-Rift", "Void", 80, "GolemWater", 8],
			},
			"Stabilized Water C-Rift":
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
	"Pressure Chamber":
	{
		baseStats: [-100, -100, "Air", 16],
		recipes:
		{
			"Forcefull Air Conversion":
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Water", 1, 0.4],
				],
				out: [
					["Air", 1, 1.2],
				],
				lock: ["Water", 4],
				upgrade: ["Weak Air Rift", "Air", 5],
			},
			"Weak Air Rift":
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Air", 1, 12, 10, ["Air", 80]],
				],
				upgrade: ["Pure Air Rift", "Steam", 0.1, "Sand", 0.1],
			},
			"Pure Air Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Air", 10, 1200, 9, ["GolemAir", 5]],
				],
			},
			"Simple Air Conversion":
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
				upgrade: ["Improved Air Conversion", "Air", 100],
			},
			"Improved Air Conversion":
			{
				baseStats: [1, 1.05, false, true],
				in: [
					["Water", 1, 80.1],
					["Fire", 1, 80.1],
				],
				out: [
					["Air", 2, 502],
				],
				upgrade: ["True Air Rift", "Void", 0.1, "GolemAir", 8],
			},
			"True Air Rift":
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Air", 1, 1]
				],
				out: [
					["Air", 1, 12000, 4, ["Alkahest", 0.002]],
				],
			},
			"Catalized Air Conversion":
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
				upgrade: ["Stabilized Air C-Rift", "Void", 80, "GolemAir", 8],
			},
			"Stabilized Air C-Rift":
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
	"Incinerator":
	{
		baseStats: [100, -100, "Fire", 16],
		recipes:
		{
			"Forcefull Fire Conversion":
			{
				baseStats: [1, 0.25, true, true],
				in: [
					["Air", 1, 0.1],
				],
				out: [
					["Fire", 1, 1.2],
				],
				lock: ["Air", 1],
				upgrade: ["Weak Fire Rift", "Fire", 5],
			},
			"Weak Fire Rift":
			{
				baseStats: [1, 0.1, false, false],
				in: [],
				out: [
					["Fire", 1, 12, 10, ["Fire", 80]],
				],
				upgrade: ["Pure Fire Rift", "Steam", 0.1, "Magma", 0.1],
			},
			"Pure Fire Rift":
			{
				baseStats: [1, 1, false, false],
				in: [],
				out: [
					["Fire", 10, 1200, 9, ["GolemFire", 5]],
				],
			},
			"Simple Fire Conversion":
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
				upgrade: ["Improved Fire Conversion", "Fire", 100],
			},
			"Improved Fire Conversion":
			{
				baseStats: [2, 1.05, false, true],
				in: [
					["Air", 1, 80.1],
					["Fire", 1, 80.1],
				],
				out: [
					["Fire", 2, 502],
				],
				upgrade: ["True Fire Rift", "Void", 0.1, "GolemFire", 8],
			},
			"True Fire Rift":
			{
				baseStats: [1, 1.4, false, true],
				in: [
					["Fire", 1, 1]
				],
				out: [
					["Fire", 1, 12000, 4, ["Alkahest", 0.002]],
				],
			},
			"Catalized Fire Conversion":
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
				upgrade: ["Stabilized Fire C-Rift", "Void", 80, "GolemFire", 8],
			},
			"Stabilized Fire C-Rift":
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
	"Golem Infuser":
	{
		baseStats: [-200, 300],
		recipes:
		{
			"Earth Orb Infusion":
			{
				baseStats: [1, 1, true, false],
				in: [
					["Earth", 20, 20],
				],
				out: [
					["GolemEarth", 1, 1],
				],
				lock: ["Earth", 19, "Water", 14, "Air", 14, "Fire", 14],
				upgrade: ["Earth Golem Infusion", "Earth", 450],
			},
			"Earth Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Earth", 400, 480],
				],
				out: [
					["GolemEarth", 1, 2],
				],
				upgrade: ["Earth Golem Creation", "Earth", 11000],
			},
			"Earth Golem Creation":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Earth", 8000, 9000],
				],
				out: [
					["GolemEarth", 5, 14],
				],
			},
			"Water Orb Infusion":
			{
				baseStats: [1, 1, true, false],
				in: [
					["Water", 20, 20],
				],
				out: [
					["GolemWater", 1, 1],
				],
				lock: ["Earth", 14, "Water", 19, "Air", 14, "Fire", 14],
				upgrade: ["Water Golem Infusion", "Water", 450],
			},
			"Water Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Water", 400, 480],
				],
				out: [
					["GolemWater", 1, 2],
				],
				upgrade: ["Water Golem Creation", "Water", 11000],
			},
			"Water Golem Creation":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Water", 8000, 9000],
				],
				out: [
					["GolemWater", 5, 14],
				],
			},
			"Air Orb Infusion":
			{
				baseStats: [1, 1, true, false],
				in: [
					["Air", 20, 20],
				],
				out: [
					["GolemAir", 1, 1],
				],
				lock: ["Earth", 14, "Water", 14, "Air", 19, "Fire", 14],
				upgrade: ["Air Golem Infusion", "Air", 450],
			},
			"Air Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Air", 400, 480],
				],
				out: [
					["GolemAir", 1, 2],
				],
				upgrade: ["Air Golem Creation", "Air", 11000],
			},
			"Air Golem Creation":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Air", 8000, 9000],
				],
				out: [
					["GolemAir", 5, 14],
				],
			},
			"Fire Orb Infusion":
			{
				baseStats: [1, 1, true, false],
				in: [
					["Fire", 20, 20],
				],
				out: [
					["GolemFire", 1, 1],
				],
				lock: ["Earth", 14, "Water", 14, "Air", 14, "Fire", 19],
				upgrade: ["Fire Golem Infusion", "Fire", 450],
			},
			"Fire Golem Infusion":
			{
				baseStats: [1, 1, false, false],
				in: [
					["Fire", 400, 480],
				],
				out: [
					["GolemFire", 1, 2],
				],
				upgrade: ["Fire Golem Creation", "Fire", 11000],
			},
			"Fire Golem Creation":
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
	"Golem Merger":
	{
		baseStats: [200, 300],
		recipes:
		{
			"Merge : Traces of Mud":
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
				upgrade: ["Simple Mud Extraction", "Earth", 1000, "Water", 1000],
			},
			"Simple Mud Extraction":
			{
				baseStats: [1, 0.5, false, false],
				in: [
					["GolemEarth", 1, 1],
					["GolemWater", 1, 1],
					["Earth", 700, 900],
					["Water", 700, 900],
				],
				out: [
					["Mud", 1, 1.2, 4, ["GolemWater", 3]],
				],
				upgrade: ["Intermediete Mud Extraction", "Void", 0.01],
			},
			"Intermediete Mud Extraction":
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
			"Merge : Traces of Ice":
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
				upgrade: ["Simple Ice Extraction", "GolemAir", 3],
			},
			"Simple Ice Extraction":
			{
				baseStats: [1, 0.3, false, false],
				in: [
					["GolemAir", 1, 1],
					["GolemWater", 1, 1],
					["Air", 700, 900],
					["Water", 700, 900],
				],
				out: [
					["Ice", 1, 4.8, 3, ["GolemWater", 3]],
				],
				upgrade: ["Intermediete Ice Extraction", "Void", 0.01],
			},
			"Intermediete Ice Extraction":
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
			"Merge : Traces of Steam":
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
				upgrade: ["Simple Steam Extraction", "GolemFire", 3],
			},
			"Simple Steam Extraction":
			{
				baseStats: [1, 0.3, false, false],
				in: [
					["GolemFire", 1, 1],
					["GolemWater", 1, 1],
					["Fire", 700, 900],
					["Water", 700, 900],
				],
				out: [
					["Steam", 1, 4.8, 3, ["GolemWater", 3]],
				],
				upgrade: ["Intermediete Steam Extraction", "Void", 0.01],
			},
			"Intermediete Steam Extraction":
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
			"Merge : Traces of Magma":
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
				upgrade: ["Simple Magma Extraction", "GolemFire", 3],
			},
			"Simple Magma Extraction":
			{
				baseStats: [1, 0.3, false, false],
				in: [
					["GolemFire", 1, 1],
					["GolemEarth", 1, 1],
					["Fire", 700, 900],
					["Earth", 700, 900],
				],
				out: [
					["Magma", 1, 4.8, 3, ["GolemEarth", 3]],
				],
				upgrade: ["Intermediete Magma Extraction", "Void", 0.01],
			},
			"Intermediete Magma Extraction":
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
			"Merge : Traces of Sand":
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
	"Aggregator":
	{
		baseStats: [0, 250, "Mud"],
		recipes:
		{
			"Forcefull Mud Conversion":
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
				upgrade: ["Gainfull Mud Conversion", "Water", 24000, "Earth", 24000],
			},
			"Gainfull Mud Conversion":
			{
				baseStats: [4, 2, false, true],
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
			"Basic Mud Assimilation":
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
	"Polar Vortex":
	{
		baseStats: [-250, 50, "Ice"],
		recipes:
		{
			"Forcefull Ice Conversion":
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
				upgrade: ["Loseless Ice Conversion", "Air", 24000, "Water", 24000],
			},
			"Loseless Ice Conversion":
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
			"Basic Ice Assimilation":
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
	"Combustion Engine":
	{
		baseStats: [-150, -200, "Steam"],
		recipes:
		{
			"Forcefull Steam Conversion":
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
				upgrade: ["Loseless Steam Conversion", "Water", 24000, "Fire", 24000],
			},
			"Loseless Steam Conversion":
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
			"Basic Steam Assimilation":
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
	"Volcano":
	{
		baseStats: [250, 50, "Magma"],
		recipes:
		{
			"Forcefull Magma Conversion":
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
				upgrade: ["Loseless Magma Conversion", "Earth", 24000, "Fire", 24000],
			},
			"Loseless Magma Conversion":
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
			"Basic Magma Assimilation":
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
	"Pulverizer":
	{
		baseStats: [150, -200, "Sand"],
		recipes:
		{
			"Forcefull Sand Conversion":
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
				upgrade: ["Losefull Sand Conversion", "Air", 24000, "Fire", 24000],
			},
			"Losefull Sand Conversion":
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
	"Orb of Emptiness":
	{
		baseStats: [0, -150, "Void"],
		recipes:
		{
			"Antitype Trace":
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
				upgrade: ["Antitype Merge", "Sand", 60, "Steam", 120],
			},
			"Antitype Merge":
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
				upgrade: ["Antitype Fusion", "Alkahest", 0.02],
			},
			"Antitype Fusion":
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
	"Nexus of Unification":
	{
		baseStats: [0, 0, "Alkahest"],
		recipes:
		{
			"Universal Solvent":
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
			"Universal Solution":
			{
				baseStats: [10, 1, true, true],
				in: [
					["Void", 1, 1],
					["Earth", 1000000, 50000],
					["Water", 1000000, 50000],
					["Air", 1000000, 50000],
					["Fire", 1000000, 50000],
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
		for (var recipeTitle in simplifiedData.recipes)
		{
			var simplifiedRecipe = simplifiedData.recipes[recipeTitle];
			var preparedRecipe = {
				title: recipeTitle,
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
