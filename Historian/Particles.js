var particleGenerator = {
	stopTheLag: function ()
	{
		this.stopLag = !this.stopLag;
	},
	machineFlow: function (machineOrigin, machineTarget, type, volume, delay = 0)
	{

		if (!machineOrigin || !machineTarget)
		{
			return;
		}
		if (machineOrigin == machineTarget)
		{
			var r = 80;
			var v = -0.3;
			var vol = volume;
			if (machineTarget == "Nexus of Unification")
			{
				v *= 5;
				r *= 10;
				vol *= 10;
			}
			this.explosion(machineTarget, v, type, r, vol);
			return;
		}
		if (elementalDisplayType[type] == "exp")
		{
			volume = Math.log10(1 + volume);
		}
		var color = elementalColors[type][0];
		if (this.machineLinks[machineOrigin][machineTarget].volumes[color])
		{
			this.machineLinks[machineOrigin][machineTarget].volumes[color].amount += volume;
			this.machineLinks[machineOrigin][machineTarget].volumes[color].cd += delay;
		}
		else
		{
			this.machineLinks[machineOrigin][machineTarget].volumes[color] = {
				amount: volume,
				cd: 0,
			};
		}
	},

	explosion: function (machineTarget, v, type, lifespan, amount)
	{
		var temp = this.explosionGenerators;
		if (!temp[machineTarget])
		{
			temp[machineTarget] = {};
		}
		temp = temp[machineTarget];
		if (!temp[type])
		{
			temp[type] = {};
		}
		temp = temp[type];
		if (!temp[v])
		{
			temp[v] = {
				amount: 0,
				cd: 0,
				cdMax: 40,
				lifespan: lifespan,
			};
		}
		temp = temp[v];
		temp.amount += amount;
	},
	explosionGenerators:
	{},
	explosions: [],
	particles:
	{},

	machineLinks:
	{},

	tick: function ()
	{
		if (this.stopLag)
		{
			return;
		}
		var temp;
		for (var origin in this.machineLinks)
		{
			for (var target in this.machineLinks[origin])
			{
				temp = this.machineLinks[origin][target];
				for (var color in temp.volumes)
				{
					if (!this.particles[color])
					{
						this.particles[color] = [];
					}
					if (temp.volumes[color].amount > 0)
					{
						if (temp.volumes[color].cd-- <= 0)
						{
							var cdMax = 5;
							if (temp.volumes[color].amount <= 0.1)
							{
								cdMax *= 1.5;
							}
							if (temp.volumes[color].amount <= 1)
							{
								cdMax *= 1.5;
							}
							if (temp.volumes[color].amount <= 1e2)
							{
								cdMax *= 2;
							}
							if (temp.volumes[color].amount <= 1e4)
							{
								cdMax *= 1.5;
							}

							temp.volumes[color].cd = cdMax * (1 + Math.random());
							this.particles[color].push(new particle(machineData[origin].region.x, machineData[origin].region.y, target, Math.min(5, Math.log2(1 + Math.max(1, temp.volumes[color].amount / 30))) / 2, 600));
							temp.volumes[color].amount = 0;
						}
					}
				}
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

		for (var i = 0; i < this.explosions.length; i++)
		{
			this.explosions[i].r += this.explosions[i].v;
			if (this.explosions[i].v < 0)
			{
				if (this.explosions[i].r <= 24)
				{
					this.explosions[i] = this.explosions[this.explosions.length - 1];
					this.explosions.length--;
					i--;
				}

			}
			else
			{
				if (this.explosions[i].lifespan <= this.explosions[i].r)
				{
					this.explosions[i] = this.explosions[this.explosions.length - 1];
					this.explosions.length--;
					i--;
				}
			}
		}
		temp = this.explosionGenerators;
		for (var target in temp)
		{
			var temp1 = temp[target];
			var t1 = machineData[target].region;
			for (var type in temp1)
			{
				var temp2 = temp1[type];
				for (var v in temp2)
				{
					var temp3 = temp2[v];
					if (temp3.amount > 0 && temp3.cd-- <= 0)
					{

						temp3.cd = temp3.cdMax * (1 + Math.random());
						this.explosions.push(new cExplosion(t1.x, t1.y, 1 * v, elementalColors[type][3], elementalColors[type][3], temp3.lifespan, Math.max(0.1, temp3.amount)));
						temp3.amount = 0;
					}
				}
			}
		}
	},

	draw: function (ctx)
	{
		if (this.stopLag)
		{
			return;
		}

		ctx.save();
		ctx.shadowBlur = 5;

		var temp;
		for (var type in this.particles)
		{
			ctx.fillStyle = type;
			ctx.shadowColor = "#FFFFFF";
			ctx.beginPath();
			for (var i = 0; i < this.particles[type].length; i++)
			{
				temp = this.particles[type][i];

				ctx.save();
				ctx.translate(temp.x, temp.y);

				ctx.rotate(temp.lifespan / 20);
				ctx.scale(temp.size, temp.size);
				ctx.rect(-1, -1, 2, 2);

				// if (i % 17 == 9)
				// {
				// 	ctx.fill();
				// 	ctx.beginPath();
				// }
				ctx.restore();

			}
			ctx.fill();
		}

		//ctx.shadowBlur = 25;
		for (var i = 0; i < this.explosions.length; i++)
		{
			if (this.explosions[i].r < 0) continue;
			//console.log(asd);
			ctx.strokeStyle = this.explosions[i].color1;
			ctx.shadowColor = this.explosions[i].color2;
			ctx.lineWidth = this.explosions[i].size;
			if (this.explosions[i].v < 0)
			{
				ctx.shadowBlur = 5;
				ctx.globalAlpha = Math.min(1, 2 * (this.explosions[i].lifespan - this.explosions[i].r) / this.explosions[i].lifespan);
			}
			else
			{
				ctx.shadowBlur = 25;
				ctx.globalAlpha = (this.explosions[i].lifespan - this.explosions[i].r) / this.explosions[i].lifespan;
			}

			ctx.beginPath();
			ctx.arc(this.explosions[i].x, this.explosions[i].y, this.explosions[i].r, 0, Math.PI * 2);
			ctx.stroke();
		}
		ctx.restore();
	},
};

function cExplosion(x, y, v, color1, color2, lifespan, amount)
{

	this.x = x;
	this.y = y;
	this.v = v;
	if (v < 0)
	{
		this.r = Math.trunc(lifespan) * 1;
		this.lifespan = lifespan * 1;
	}
	else
	{
		this.r = -Math.trunc(Math.random() * 15) * 1;
		this.lifespan = lifespan * 1;
	}
	this.color1 = color1;
	this.color2 = color2;
	this.sizeBase = amount;
	this.size = 0.4 + Math.log10(1 + amount);

}

function particle(x, y, target, size, ticks)
{
	this.x = x + (Math.random() - 0.5) * 25;
	this.y = y + (Math.random() - 0.5) * 25;
	this.size = 0.5 + size;
	this.lifespan = ticks;
	this.v = 1.8;
	this.target = target;
}
var particleTemporaryAngle;
var particleTemporaryTarget;
particle.prototype.tick = function ()
{
	particleTemporaryTarget = machineData[this.target].region;
	if (this.y !== particleTemporaryTarget.y)
	{
		particleTemporaryAngle = Math.atan((this.x - particleTemporaryTarget.x) / (this.y - particleTemporaryTarget.y));
		if (this.y > particleTemporaryTarget.y)
		{
			particleTemporaryAngle += Math.PI;
		}
		this.x += this.v * Math.sin(particleTemporaryAngle);
		this.y += this.v * Math.cos(particleTemporaryAngle);
	}
	else
	{
		if (this.x > particleTemporaryTarget.x)
		{
			this.x -= this.v;
		}
		else
		{
			this.x += this.v;
		}
	}
	if ((this.y - particleTemporaryTarget.y) * (this.y - particleTemporaryTarget.y) + (this.x - particleTemporaryTarget.x) * (this.x - particleTemporaryTarget.x) < 100)
	{
		this.lifespan = 0;
	}
	this.x += (Math.random() - 0.5) * 2;
	this.y += (Math.random() - 0.5) * 2;
	this.lifespan--;
};

function preprocessParticles()
{
	for (var machineOrigin in machineData)
	{
		if (!particleGenerator.machineLinks[machineOrigin])
		{
			particleGenerator.machineLinks[machineOrigin] = {};
		}
		for (var machineTarget in machineData)
		{
			if (machineTarget == machineOrigin)
			{
				continue;
			}
			if (!particleGenerator.machineLinks[machineOrigin][machineTarget])
			{
				particleGenerator.machineLinks[machineOrigin][machineTarget] = {
					volumes:
					{},
				};
			}
		}
	}
}

preprocessParticles();
