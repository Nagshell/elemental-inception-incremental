var effectSystem;
var particleSystem;

var lineSystem = {
	lines: [],
	circles: [],
	eventCircles: [],
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
				if (tempThing.volume > 0)
				{
					tempThing.directionalR -= tempThing.directionalV;
					if (tempThing.directionalR < 0)
					{
						tempThing.directionalR++;
					}
				}
				else
				{
					tempThing.directionalR += tempThing.directionalV;
					if (tempThing.directionalR > 1)
					{
						tempThing.directionalR--;
					}
				}
				tempVal = Math.abs(tempThing.volume);
				if (tempVal < 0.00001)
				{
					tempThing.volume = 0;
					continue;
				}
				tempVal = tempThing.destinationX - tempThing.drawX;
				tempThing.drawX += tempVal * 0.004;
				tempVal2 = tempThing.destinationY - tempThing.drawY;
				tempThing.drawY += tempVal2 * 0.004;
				if (Math.abs(tempVal) < 1 && Math.abs(tempVal) < 1)
				{
					tempVal = Math.random() * Math.PI * 2;
					tempThing.destinationX = tempThing.originX + Math.sin(tempVal) * 9;
					tempThing.destinationY = tempThing.originY + Math.cos(tempVal) * 9;
				}
				tempVal = tempThing.destinationA - tempThing.drawA;
				tempThing.drawA += tempVal * 0.005;
				tempVal2 = tempThing.destinationB - tempThing.drawB;
				tempThing.drawB += tempVal2 * 0.005;
				if (Math.abs(tempVal) < 1 && Math.abs(tempVal) < 1)
				{
					tempVal = Math.random() * Math.PI * 2;
					tempThing.destinationA = tempThing.originA + Math.sin(tempVal) * 9;
					tempThing.destinationB = tempThing.originB + Math.cos(tempVal) * 9;
				}
			}
		}

		for (var i = 0; i < this.circles.length; i++)
		{
			tempVal = Math.max(1e-5, data.oElements[this.circles[i][0]].amount / 1e10);
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

		for (var i = 0; i < this.eventCircles.length; i++)
		{
			tempThing = this.eventCircles[i];
			if (tempThing.velocity != 0)
			{
				tempThing.drawR += tempThing.velocity;
				if (tempThing.drawR < tempThing.minR)
				{
					tempThing.drawR += tempThing.maxR - tempThing.minR;
				}
				else if (tempThing.drawR > tempThing.maxR)
				{
					tempThing.drawR += tempThing.minR - tempThing.maxR;
				}
			}
		}
	},
	draw: function (ctx)
	{
		ctx.save();

		ctx.shadowBlur = 0;
		var tempThing;
		var tempVal;
		for (var i = 0; i < this.lines.length; i++)
		{
			ctx.strokeStyle = elementalColors[this.lines[i][0]][1];
			ctx.fillStyle = elementalColors[this.lines[i][0]][0];
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
				tempVal = 0.5 + Math.log10(1 + tempVal) / 2;
				ctx.lineWidth = tempVal;
				ctx.beginPath();
				ctx.moveTo(tempThing.drawA, tempThing.drawB);
				ctx.lineTo(tempThing.drawX, tempThing.drawY);
				ctx.stroke();

				ctx.beginPath();
				ctx.arc(tempThing.drawA + (tempThing.drawX - tempThing.drawA) * tempThing.directionalR, tempThing.drawB + (tempThing.drawY - tempThing.drawB) * tempThing.directionalR, tempVal * 0.5 + 2, 0, Math.PI * 2);
				ctx.fill();
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
		ctx.globalAlpha = 1;
		for (var i = 0; i < this.eventCircles.length; i++)
		{
			tempThing = this.eventCircles[i];
			if (tempThing.velocity != 0)
			{
				ctx.globalAlpha = 1 - tempThing.drawR / tempThing.maxR;
				ctx.strokeStyle = tempThing.color;
				ctx.lineWidth = tempThing.width;
				ctx.beginPath();
				ctx.arc(tempThing.drawX, tempThing.drawY, tempThing.drawR, 0, Math.PI * 2);
				ctx.stroke();
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
				this.lineDataColor[mach][machineDisplayElements[ingredient.type]][ingredient.type].directionalV *= (0.95 + Math.random() * 0.1);
				this.lineDataColor[mach][machineDisplayElements[ingredient.type]][ingredient.type].directionalR = Math.random();
			}
			ingredient.effectReference = this.lineDataColor[mach][machineDisplayElements[ingredient.type]][ingredient.type];
		}
	},
	preprocess: function ()
	{
		this.lines = [];
		this.circles = [];
		this.eventCircles = [];
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
			var dx, dy, dr;
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
					directionalR: 0,
					directionalV: 0,
				};
				dx = machineData[mach1].region.x - machineData[mach2].region.x;
				dy = machineData[mach1].region.y - machineData[mach2].region.y;
				dr = Math.sqrt(Math.sqrt(dx * dx + dy * dy)) * 50;
				this.lineData[mach1][mach2].directionalV = 1 / dr;
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

		//splosion circles generating
		var tempCircles = [];
		for (var i = 0; i < 10; i++)
		{
			var eventCircle = {
				drawX: machineData[machineDisplayElements[splosions.types.Alkaplosion.splosionElement]].x,
				drawY: machineData[machineDisplayElements[splosions.types.Alkaplosion.splosionElement]].y,
				drawR: 672,
				minR: 32,
				maxR: 672,
				velocity: 0,
				width: 1,
				color: elementalColors[splosions.types.Alkaplosion.splosionElement][1],
			};
			this.eventCircles.push(eventCircle);

			tempCircles.push(eventCircle);
		}
		splosions.types.Alkaplosion.splosionCircles = tempCircles;

		//for (var i = 0; i < splosionTypes.length; i++)
		var tempCircles = [];
		for (var i = 0; i < 10; i++)
		{
			var eventCircle = {
				drawX: machineData[machineDisplayElements[splosions.types.Firesplosion.splosionElement]].x,
				drawY: machineData[machineDisplayElements[splosions.types.Firesplosion.splosionElement]].y,
				drawR: 672,
				minR: 32,
				maxR: 672,
				velocity: 0,
				width: 1,
				color: elementalColors[splosions.types.Firesplosion.splosionElement][1],
			};
			this.eventCircles.push(eventCircle);

			tempCircles.push(eventCircle);
		}
		splosions.types.Firesplosion.splosionCircles = tempCircles;
		this.lineData = null;
		this.circleData = null;

		this.lineDataColor = null;
		this.circleDataColor1 = {};
		this.circleDataColor2 = {};
	},
};

effectSystem = lineSystem;

function preprocessParticles()
{
	effectSystem.preprocess();
}
