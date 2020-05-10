var backgrounds = {
	circles:
	{},
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
