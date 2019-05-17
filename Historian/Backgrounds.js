var backgrounds = {
	circles:
	{
		midCircle:
		{
			x: -323,
			y: -323,
			list: [null,
			{
				image: "midBackground1",
				clipX: 100,
				clipY: 100,
				time: 800,
			},
			{
				image: "midBackground2",
				clipX: 195,
				clipY: 195,
				time: 1600,
			},
			{
				image: "midBackground3",
				clipX: 0,
				clipY: -275,
				time: 1000,
			},
			{
				image: "midBackground4",
				clipX: 0,
				clipY: 0,
				time: 1600,
			}, ],
			changeTicks: 0,

			currentImage: null,
			nextImage: null,
			current: 0,
			next: 0,
			changeTick: function ()
			{
				if (this.next > 0)
				{
					this.changeTicks++;
					if (this.changeTicks >= this.list[this.next].time)
					{
						this.changeTicks = 0;
						this.currentImage = this.nextImage;
						this.nextImage = null;
						this.current = this.next;
						this.next = 0;
					}
				}
				else
				{
					var proceed = false;
					switch (this.current)
					{
						case 0:
							if (machineData.machineWater.recipes[0].unlocked)
								proceed = true;
							break;
						case 1:
							if (machineData.golemMerger.recipes[1].unlocked)
								proceed = true;
							break;
						case 2:
							if (machineData.machineVoid.recipes[0].unlocked)
								proceed = true;
							break;
						case 3:
							if (machineData.machineNexus.recipes[1].unlocked)
								proceed = true;
							break;
					}
					if (proceed)
					{
						this.next = this.current + 1;
						this.nextImage = this.list[this.next].image;
					}
				}
			},
			clip: function (ctx)
			{
				ctx.translate(-this.x, -this.y);
				ctx.beginPath();
				ctx.arc(this.list[this.next].clipX, this.list[this.next].clipY, this.changeTicks / 2, 0, Math.PI * 2);
				ctx.clip();
				ctx.translate(this.x, this.y);
			}
		},
		reachCircle:
		{
			x: -200,
			y: -1000,
			list: [null,
			{
				image: "reachBackground1",
				clipX: 0,
				clipY: -800,
				time: 800,
			},
			{
				image: "reachBackground2",
				clipX: 0,
				clipY: -800,
				time: 600,
			},
			{
				image: "reachBackground3",
				clipX: 0,
				clipY: -800,
				time: 500,
			}, ],
			changeTicks: 0,

			currentImage: null,
			nextImage: null,
			current: 0,
			next: 0,
			changeTick: function ()
			{
				if (this.next > 0)
				{
					this.changeTicks++;
					if (this.changeTicks >= this.list[this.next].time)
					{
						this.changeTicks = 0;
						this.currentImage = this.nextImage;
						this.nextImage = null;
						this.current = this.next;
						this.next = 0;
					}
				}
				else
				{
					var proceed = false;
					switch (this.current)
					{
						case 0:
							if (machineData.machineSpatial.recipes[1].unlocked)
								proceed = true;
							break;
						case 1:
							if (machineData.machineParallel.recipes[1].unlocked)
								proceed = true;
							break;
						case 2:
							if (machineData.machineFoldedTemporal.recipes[1].unlocked)
								proceed = true;
							break;
					}
					if (proceed)
					{
						this.next = this.current + 1;
						this.nextImage = this.list[this.next].image;
					}
				}
			},
			clip: function (ctx)
			{
				ctx.translate(-this.x, -this.y);
				ctx.beginPath();
				ctx.arc(this.list[this.next].clipX, this.list[this.next].clipY, this.changeTicks / 2, 0, Math.PI * 2);
				ctx.clip();
				ctx.translate(this.x, this.y);
			},
		},
		lifeCircle:
		{
			x: -300,
			y: 600,
			list: [null,
			{
				image: "lifeBackground1",
				clipX: 0,
				clipY: 800,
				time: 1200,
			},
			{
				image: "lifeBackground2",
				clipX: 0,
				clipY: 800,
				time: 1200,
			},
			{
				image: "lifeBackground3",
				clipX: 0,
				clipY: 800,
				time: 1200,
			},
			{
				image: "lifeBackground4",
				clipX: 0,
				clipY: 800,
				time: 1200,
			}, ],
			changeTicks: 0,

			currentImage: null,
			nextImage: null,
			current: 0,
			next: 0,
			changeTick: function ()
			{
				if (this.next > 0)
				{
					this.changeTicks++;
					if (this.changeTicks >= this.list[this.next].time)
					{
						this.changeTicks = 0;
						this.currentImage = this.nextImage;
						this.nextImage = null;
						this.current = this.next;
						this.next = 0;
					}
				}
				else
				{
					var proceed = false;
					switch (this.current)
					{
						case 0:
							if (machineData.machineSoilElements.recipes[0].unlocked)
								proceed = true;
							break;
						case 1:
							if (machineData.machineSeedElements.recipes[0].unlocked)
								proceed = true;
							break;
						case 2:
							if (machineData.machinePlantEarth.recipes[1].unlocked)
								proceed = true;
							break;
						case 3:
							if (machineData.machineUnPureSoilElements.recipes[0].unlocked)
								proceed = true;
							break;
					}
					if (proceed)
					{
						this.next = this.current + 1;
						this.nextImage = this.list[this.next].image;
					}
				}
			},
			clip: function (ctx)
			{
				ctx.translate(-this.x, -this.y);
				ctx.beginPath();
				ctx.arc(this.list[this.next].clipX, this.list[this.next].clipY, this.changeTicks / 2, 0, Math.PI * 2);
				ctx.clip();
				ctx.translate(this.x, this.y);
			},
		},
		coldCircle:
		{
			x: -1205,
			y: -300,
			list: [null,
			{
				image: "coldBackground1",
				clipX: -750,
				clipY: 0,
				time: 800,
			},
			{
				image: "coldBackground2",
				clipX: -750,
				clipY: 0,
				time: 800,
			},
			{
				image: "coldBackground3",
				clipX: -750,
				clipY: 0,
				time: 800,
			}, ],
			changeTicks: 0,

			currentImage: null,
			nextImage: null,
			current: 0,
			next: 0,
			changeTick: function ()
			{
				if (this.next > 0)
				{
					this.changeTicks++;
					if (this.changeTicks >= this.list[this.next].time)
					{
						this.changeTicks = 0;
						this.currentImage = this.nextImage;
						this.nextImage = null;
						this.current = this.next;
						this.next = 0;
					}
				}
				else
				{
					var proceed = false;
					switch (this.current)
					{
						case 0:
							if (machineData.machineGale.recipes[0].unlocked)
								proceed = true;
							break;
						case 1:
							if (machineData.machineCryospire.recipes[0].unlocked)
								proceed = true;
							break;
						case 2:
							if (machineData.machineVortex.recipes[0].unlocked)
								proceed = true;
							break;
					}
					if (proceed)
					{
						this.next = this.current + 1;
						this.nextImage = this.list[this.next].image;
					}
				}
			},
			clip: function (ctx)
			{
				ctx.translate(-this.x, -this.y);
				ctx.beginPath();
				ctx.arc(this.list[this.next].clipX, this.list[this.next].clipY, this.changeTicks / 2, 0, Math.PI * 2);
				ctx.clip();
				ctx.translate(this.x, this.y);
			},
		},
	},
	draw: function (ctx)
	{
		for (var circle in this.circles)
		{
			var circ = this.circles[circle];
			circ.changeTick();

			ctx.save();
			ctx.translate(circ.x, circ.y);
			if (circ.currentImage)
			{
				if (circ.customDraw)
				{
					circ.customDraw(ctx);
				}
				ctx.drawImage(images[circ.currentImage], 0, 0);

			}
			if (circ.nextImage)
			{
				circ.clip(ctx);
				ctx.drawImage(images[circ.nextImage], 0, 0);
			}
			ctx.restore();
		}
	},
};

function preprocessBackgrounds()
{
	for (var circle in backgrounds.circles)
	{
		var circ = backgrounds.circles[circle];
		circ.changeTicks = 0;
		circ.currentImage = null;
		circ.nextImage = null;
		circ.current = 0;
		circ.next = 0;
	}
}
