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
		spaceCircle:
		{
			x: -200,
			y: -1000,
			imagesList: [null, "mainBackground"],
			changeTicks: 0,

			currentImage: 0,
			nextImage: 0,
			changeTick: function ()
			{
				if (this.nextImage > 0)
				{
					this.changeTicks++;
					if (this.changeTicks == 600)
					{
						this.currentImage = this.nextImage;
						this.nextImage = 0;
					}
				}
				else
				{
					if (this.currentImage == 0)
					{
						//this.nextImage = 1;
					}
				}
			},
			clip: function (ctx)
			{
				ctx.beginPath();
				ctx.arc(0, 0, 600 * this.changeTicks / 600, 0, Math.PI * 2);
				ctx.clip();
			}
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
