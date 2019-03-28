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
					if (this.current < 4)
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
					if (this.current < 3)
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
				time: 120,
			},
			{
				image: "lifeBackground2",
				clipX: 0,
				clipY: 800,
				time: 120,
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
					if (this.current < 4)
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
