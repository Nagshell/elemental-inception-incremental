var effectSystem;
var particleSystem;

var lineSystem = {
	lines: [],
	circles: [],
	tick: function ()
	{
		var tempThing;
		var tempVal;
		var tempVal2;
		for (var i = 0; i < this.lines.length; i++)
		{
			for (var j = 1; j < this.lines[i].length; j++)
			{
				tempThing = this.lines[i][j];
				tempThing.volume *= 0.985;
				tempVal = Math.abs(tempThing.volume);
				if (tempVal < 0.00001)
				{
					tempThing.volume = 0;
					continue;
				}
				tempVal = tempThing.destinationX - tempThing.drawX;
				tempThing.drawX += tempVal * 0.005;
				tempVal2 = tempThing.destinationY - tempThing.drawY;
				tempThing.drawY += tempVal2 * 0.005;
				if (Math.abs(tempVal) < 1 && Math.abs(tempVal) < 1)
				{
					tempVal = Math.random() * Math.PI * 2;
					tempThing.destinationX = tempThing.originX + Math.sin(tempVal) * 14;
					tempThing.destinationY = tempThing.originY + Math.sin(tempVal) * 14;
				}
				tempVal = tempThing.destinationA - tempThing.drawA;
				tempThing.drawA += tempVal * 0.007;
				tempVal2 = tempThing.destinationB - tempThing.drawB;
				tempThing.drawB += tempVal2 * 0.007;
				if (Math.abs(tempVal) < 1 && Math.abs(tempVal) < 1)
				{
					tempVal = Math.random() * Math.PI * 2;
					tempThing.destinationA = tempThing.originA + Math.sin(tempVal) * 14;
					tempThing.destinationB = tempThing.originB + Math.sin(tempVal) * 14;
				}

			}
		}

		for (var i = 0; i < this.circles.length; i++)
		{
			tempVal = data.oElements[this.circles[i][0]].amount / 1e10;
			for (var j = 1; j < this.circles[i].length; j++)
			{
				tempThing = this.circles[i][j];
				if (tempThing.lastVolume == 0 && Math.abs(tempThing.volume) < tempVal)
				{
					continue;
				}
				tempThing.volume *= 0.98;

				if (tempThing.volume > 0)
				{
					if (tempThing.volume < tempVal)
					{
						if (tempThing.drawR > tempThing.minR)
						{
							tempThing.drawR -= 0.1;
						}
						else
						{
							tempThing.volume = 0;
							tempThing.drawR = tempThing.maxR;
						}
					}
					else
					{
						tempThing.drawR -= 0.1 + Math.log10(1 + tempThing.volume) / 5;
						if (tempThing.drawR < tempThing.minR)
						{
							tempThing.drawR += tempThing.maxR - tempThing.minR;
						}
					}
				}
				else if (tempThing.volume < 0)
				{
					if (tempThing.volume > -tempVal)
					{

						if (tempThing.drawR < tempThing.maxR)
						{
							tempThing.drawR += 0.1;
						}
						else
						{
							tempThing.volume = 0;
							tempThing.drawR = tempThing.minR;
						}
					}
					else
					{
						tempThing.drawR += 0.1 + Math.log10(1 - tempThing.volume) / 5;
						if (tempThing.drawR > tempThing.maxR)
						{
							tempThing.drawR -= tempThing.maxR - tempThing.minR;
						}
					}
				}
				tempThing.lastVolume = tempThing.volume;
			}
		}
	},
	draw: function (ctx)
	{
		ctx.save();

		//ctx.shadowBlur = 5;
		var tempThing;
		var tempVal;
		for (var i = 0; i < this.lines.length; i++)
		{
			ctx.strokeStyle = elementalColors[this.lines[i][0]][1];
			//ctx.shadowColor = elementalColors[this.lines[i][0]][0];
			for (var j = 1; j < this.lines[i].length; j++)
			{
				tempThing = this.lines[i][j];
				if (tempThing.volume == 0)
				{
					continue;
				}
				tempVal = Math.abs(tempThing.volume);
				ctx.globalAlpha = 0.8 + Math.min(0.2, tempVal / 3);
				ctx.lineWidth = 0.3 + Math.log10(1 + tempVal);
				ctx.beginPath();
				ctx.moveTo(tempThing.drawA, tempThing.drawB);
				ctx.lineTo(tempThing.drawX, tempThing.drawY);
				ctx.stroke();
			}
		}
		for (var i = 0; i < this.circles.length; i++)
		{
			ctx.strokeStyle = elementalColors[this.circles[i][0]][0];
			for (var j = 1; j < this.circles[i].length; j++)
			{
				tempThing = this.circles[i][j];
				if (tempThing.volume != 0)
				{
					ctx.globalAlpha = 1 - tempThing.drawR / tempThing.maxR;
					ctx.lineWidth = 0.5 + Math.log10(1 + Math.abs(tempThing.volume)) / 2;
					ctx.beginPath();
					ctx.arc(tempThing.drawX, tempThing.drawY, tempThing.drawR, 0, Math.PI * 2);
					ctx.stroke();
				}
			}
		}
		ctx.restore();
	},
	preprocessIngredient: function (mach, recipe, ingredient)
	{
		if (machineDisplayElements[ingredient.type] == mach)
		{
			if (ingredient.min)
			{
				if (!this.circleDataColor1[mach][ingredient.type])
				{
					this.circleDataColor1[mach][ingredient.type] = JSON.parse(JSON.stringify(this.circleData[mach]));
					this.circleDataColor1[mach][ingredient.type].maxR += 32;
				}
				ingredient.effectReference = this.circleDataColor1[mach][ingredient.type];
			}
			else
			{
				var ratio = ingredient.ratio * recipe.efficiency;
				var other;
				for (var i = 0; i < recipe.inputs.length; i++)
				{
					if (recipe.inputs[i].type == ingredient.type)
					{
						ratio -= recipe.inputs[i].ratio;
						other = recipe.inputs[i];
					}
				}
				if (other)
				{
					if (ratio < 0)
					{
						ingredient.effectReference = other.effectReference;
					}
					else
					{
						if (!this.circleDataColor2[mach][ingredient.type])
						{
							this.circleDataColor2[mach][ingredient.type] = JSON.parse(JSON.stringify(this.circleData[mach]));
						}
						other.effectReference.sources--;
						ingredient.effectReference = this.circleDataColor2[mach][ingredient.type];
						other.effectReference = ingredient.effectReference;
					}
				}
				else
				{
					if (!this.circleDataColor2[mach][ingredient.type])
					{
						this.circleDataColor2[mach][ingredient.type] = JSON.parse(JSON.stringify(this.circleData[mach]));
					}
					ingredient.effectReference = this.circleDataColor2[mach][ingredient.type];
				}
			}
			ingredient.effectReference.sources++;
		}
		else
		{
			if (!this.lineDataColor[mach][machineDisplayElements[ingredient.type]][ingredient.type])
			{
				this.lineDataColor[mach][machineDisplayElements[ingredient.type]][ingredient.type] =
					JSON.parse(JSON.stringify(this.lineData[mach][machineDisplayElements[ingredient.type]]));
			}
			ingredient.effectReference = this.lineDataColor[mach][machineDisplayElements[ingredient.type]][ingredient.type];
		}
	},
	preprocess: function ()
	{
		this.lineData = {};
		this.circleData = {};

		this.lineDataColor = {};
		this.circleDataColor1 = {};
		this.circleDataColor2 = {};

		for (var mach in machineData)
		{
			this.lineData[mach] = {};
			this.lineDataColor[mach] = {};
		}
		for (var mach1 in machineData)
		{
			this.circleData[mach1] = {
				drawX: machineData[mach1].region.x,
				drawY: machineData[mach1].region.y,
				drawR: 16,
				minR: 25,
				maxR: 96,
				volume: 0,
				lastVolume: 0,
				sources: 0,
			};
			this.circleDataColor1[mach1] = {};
			this.circleDataColor2[mach1] = {};
			for (var mach2 in machineData)
			{
				this.lineData[mach1][mach2] = {
					drawX: machineData[mach1].region.x,
					drawY: machineData[mach1].region.y,
					drawA: machineData[mach2].region.x,
					drawB: machineData[mach2].region.y,
					destinationX: machineData[mach1].region.x,
					destinationY: machineData[mach1].region.y,
					destinationA: machineData[mach2].region.x,
					destinationB: machineData[mach2].region.y,
					originX: machineData[mach1].region.x,
					originY: machineData[mach1].region.y,
					originA: machineData[mach2].region.x,
					originB: machineData[mach2].region.y,
					volume: 0,
				};
				this.lineDataColor[mach1][mach2] = {};
			}
		}

		for (var mach in machineData)
		{
			var machine = machineData[mach];
			for (var i = 0; i < machine.recipes.length; i++)
			{
				var recipe = machine.recipes[i];
				for (var j = 0; j < recipe.inputs.length; j++)
				{
					var ingredient = recipe.inputs[j];
					if (!machineDisplayElements[ingredient.type])
					{
						continue;
					}
					this.preprocessIngredient(mach, recipe, ingredient);
				}
				for (var j = 0; j < recipe.outputs.length; j++)
				{
					var ingredient = recipe.outputs[j];
					if (!machineDisplayElements[ingredient.type])
					{
						continue;
					}
					this.preprocessIngredient(mach, recipe, ingredient);
				}
			}
			for (var rec in machine.hiddenRecipes)
			{
				var recipe = machine.hiddenRecipes[rec];
				for (var j = 0; j < recipe.inputs.length; j++)
				{
					var ingredient = recipe.inputs[j];
					if (!machineDisplayElements[ingredient.type])
					{
						continue;
					}
					this.preprocessIngredient(mach, recipe, ingredient);
				}
				for (var j = 0; j < recipe.outputs.length; j++)
				{
					var ingredient = recipe.outputs[j];
					if (!machineDisplayElements[ingredient.type])
					{
						continue;
					}
					this.preprocessIngredient(mach, recipe, ingredient);
				}
			}
		}

		for (var mach in this.circleDataColor1)
		{
			for (var type in this.circleDataColor1[mach])
			{
				var circle = this.circleDataColor1[mach][type];
				if (circle.sources == 0)
				{
					continue;
				}
				var targetArray = null;
				for (var i = 0; i < this.circles.length; i++)
				{
					if (this.circles[i][0] == type)
					{
						targetArray = this.circles[i];
						break;
					}
				}
				if (!targetArray)
				{
					targetArray = [type];
					this.circles.push(targetArray);
				}
				targetArray.push(circle);
				circle.array = targetArray;
			}
		}
		for (var mach in this.circleDataColor2)
		{
			for (var type in this.circleDataColor2[mach])
			{
				var circle = this.circleDataColor2[mach][type];
				if (circle.sources == 0)
				{
					continue;
				}
				var targetArray = null;
				for (var i = 0; i < this.circles.length; i++)
				{
					if (this.circles[i][0] == type)
					{
						targetArray = this.circles[i];
						break;
					}
				}
				if (!targetArray)
				{
					targetArray = [type];
					this.circles.push(targetArray);
				}
				targetArray.push(circle);
				circle.array = targetArray;
			}
		}

		for (var mach1 in this.lineDataColor)
		{
			for (var mach2 in this.lineDataColor[mach1])
			{
				for (var type in this.lineDataColor[mach1][mach2])
				{
					var line = this.lineDataColor[mach1][mach2][type];
					var targetArray = null;
					for (var i = 0; i < this.lines.length; i++)
					{
						if (this.lines[i][0] == type)
						{
							targetArray = this.lines[i];
							break;
						}
					}
					if (!targetArray)
					{
						targetArray = [type];
						this.lines.push(targetArray);
					}
					targetArray.push(line);
					line.array = targetArray;
				}
			}
		}
		this.lineData = null;
		this.circleData = null;

		this.lineDataColor = null;
		this.circleDataColor1 = {};
		this.circleDataColor2 = {};
	},
};

effectSystem = lineSystem;
/*
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
			if (machineTarget == "machineNexus")
			{
				v *= 5;
				r *= 10;
				vol *= 10;
			}
			this.explosion(machineTarget, v, type, r, vol);
			return;
		}
		if (volume < 0)
		{
			volume *= -1;
			var temp = machineOrigin;
			machineOrigin = machineTarget;
			machineTarget = temp;
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
				cdMax: 90,
				lifespan: lifespan,
			};
		}
		temp = temp[v];
		temp.amount += amount;
	},
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
							var cdMax = 15 * optionData.particleCDMultiplier;
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
							if (target == "machineNexus")
							{
								temp.volumes[color].amount *= 10e5;
							}
							this.particles[color].push(new particle(machineData[origin].region.x, machineData[origin].region.y, target, Math.min(5, Math.log2(1 + Math.max(1, temp.volumes[color].amount / 30))) / 2, 6000));
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
					if (temp3.amount != 0 && temp3.cd-- <= 0)
					{
						var tempV = v;
						if (temp3.amount < 0)
						{
							temp3.amount *= -1;
							tempV *= -1;
						}

						temp3.cd = temp3.cdMax * optionData.particleCDMultiplier + Math.random() * 4;
						var delay = Math.random();
						if (target == "golemInfuser")
						{
							delay += Math.random() * 36;
						}
						this.explosions.push(new cExplosion(t1.x, t1.y, 1 * v, elementalColors[type][3], elementalColors[type][3], temp3.lifespan, Math.max(0.1, temp3.amount), delay));
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

function cExplosion(x, y, v, color1, color2, lifespan, amount, delay = 0)
{

	this.x = x;
	this.y = y;
	this.v = v;
	if (v < 0)
	{
		this.r = Math.trunc(lifespan) * 1 + delay;
		this.lifespan = lifespan * 1 + delay;
	}
	else
	{
		this.r = -delay;
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

function particleLine(x, y, a, b)
{
	this.x = x;
	this.y = y;
	this.dx = x;
	this.dy = y;
	this.tx = x;
	this.ty = y;
	this.a = a;
	this.b = b;
	this.da = a;
	this.db = b;
	this.ta = a;
	this.tb = b;
	this.size = 1;
	this.color = elementalColors[initialData.elements[Math.floor(Math.random() * 4)]][1];
}
particleLine.prototype.tick = function ()
{

	if (this.size > 0)
	{
		this.size *= 0.98;
		this.size = Math.max(0, this.size - 0.001);
	}
	this.x += (this.dx - this.x) * 0.02;
	this.y += (this.dy - this.y) * 0.02;
	this.a += (this.da - this.a) * 0.03;
	this.b += (this.db - this.b) * 0.03;

	if (Math.abs(this.x - this.dx) < 0.5 && Math.abs(this.x - this.dx) < 0.5)
	{
		this.dx = this.tx + (Math.random() - 0.5) * 25;
		this.dy = this.ty + (Math.random() - 0.5) * 25;
	}
	if (Math.abs(this.a - this.da) < 0.5 && Math.abs(this.a - this.da) < 0.5)
	{
		this.da = this.ta + (Math.random() - 0.5) * 25;
		this.db = this.tb + (Math.random() - 0.5) * 25;
	}
}
particleLine.prototype.draw = function (ctx)
{
	if (this.size > 0)
	{
		ctx.save();
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.size;
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.a, this.b);
		ctx.stroke();
		ctx.restore();

		ctx.beginPath();
		ctx.arc(this.tx, this.ty, 32, 0, Math.PI * 2);
		ctx.stroke();
		ctx.fill();
		ctx.beginPath();
		ctx.arc(this.ta, this.tb, 32, 0, Math.PI * 2);
		ctx.stroke();
		ctx.fill();
	}
}

function preprocessParticles()
{
	particleGenerator.explosionGenerators = {};
	particleGenerator.explosions = [];
	particleGenerator.particles = {};

	particleGenerator.machineLinks = {};

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
*/
function preprocessParticles()
{
	effectSystem.preprocess();
}
