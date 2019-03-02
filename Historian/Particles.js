var origins = [];

var particleGenerator = {
	particles:
	{},

	tick: function ()
	{
		for (var i = 0; i < origins.length; i++)
		{
			if (!particleGenerator.particles[origins[i].type])
			{
				particleGenerator.particles[origins[i].type] = [];
			}
			if (origins[i].c-- < 0)
			{
				origins[i].c = origins[i].cd;
				var dr = Math.random() * origins[i].r;
				var dq = Math.random() * Math.PI * 2;
				var dx = dr * Math.sin(dq) * 1;
				var dy = dr * Math.cos(dq) * 1;
				particleGenerator.particles[origins[i].type].push(new particle(dx + origins[i].x, dy + origins[i].y, origins[i].a, origins[i].b, 2500));
			}
		}
		for (var type in this.particles)
		{
			for (var i = 0; i < this.particles[type].length; i++)
			{
				this.particles[type][i].tick();

				if (this.particles[type][i].lifespan < 0)
				{
					this.particles[type][i] = this.particles[type][this.particles[type].length - 1];
					this.particles[type].length--;
					i--;
				}
			}
		}
	},
	draw: function (ctx)
	{
		ctx.save();
		ctx.shadowBlur = 5;

		var temp;
		for (var type in this.particles)
		{
			ctx.fillStyle = type;
			ctx.shadowColor = type;
			ctx.beginPath();
			for (var i = 0; i < this.particles[type].length; i++)
			{
				temp = this.particles[type][i];

				ctx.save();
				ctx.translate(temp.x, temp.y);

				ctx.rotate(temp.lifespan / 300 * Math.PI * 6);
				// ctx.moveTo(16, 0);
				// ctx.arc(0, 0, 16, 0, Math.PI / 2, true);
				// ctx.arc(1, 1, 15, Math.PI / 2, 0);
				//ctx.moveTo(-1, -1);
				ctx.rect(-2, -2, 4, 4);

				if (i % 50 == 9)
				{
					//ctx.stroke();
					ctx.fill();
					ctx.beginPath();
				}
				ctx.restore();

			}
			ctx.fill();
		}
		ctx.restore();
	},
	mouseHandler: function (event)
	{
		var x = event.offsetX;
		var y = event.offsetY;
		var type = event.type;
		if (type == "mousemove")
		{}
	},
};

function particle(x, y, a, b, ticks)
{
	this.a = a;
	this.b = b;
	this.x = x;
	this.y = y;
	this.lifespan = ticks;
}

particle.prototype.tick = function ()
{
	this.x += (this.a - this.x) * 0.0015 + (Math.random() - 0.5) * 0.38;
	this.y += (this.b - this.y) * 0.0015 + (Math.random() - 0.5) * 0.38;
	this.lifespan--;
};
