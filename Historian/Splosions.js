var splosionTime;
function runSplosion()
{
	
}

var splosions = {
	types : {},
	start : function (splosionType) {
		splosions.types[splosionType].ticking = true;
	},
	run : function (splosion, splosionElementColor, splosionMachine) {
		splosion.timer -= 1;
		if (splosion.timer == 6400)
		{
			splosion.splosionCircles[0].velocity = -1 * 0.25;
		}
		else if (splosion.timer == 5760)
		{
			splosion.splosionCircles[1].velocity = -2 * 0.25;
		}
		else if (splosion.timer == 5120)
		{
			splosion.splosionCircles[2].velocity = -3 * 0.25;
		}
		else if (splosion.timer == 4480)
		{
			splosion.splosionCircles[3].velocity = -4 * 0.25;
		}
		else if (splosion.timer == 3840)
		{
			splosion.splosionCircles[4].velocity = -5 * 0.25;
		}
		else if (splosion.timer == 3200)
		{
			splosion.splosionCircles[5].velocity = -6 * 0.25;
		}
		else if (splosion.timer == 2560)
		{
			splosion.splosionCircles[6].velocity = -7 * 0.25;
		}
		else if (splosion.timer == 1920)
		{
			splosion.splosionCircles[7].velocity = -8 * 0.25;
		}
		else if (splosion.timer == 1280)
		{
			splosion.splosionCircles[8].velocity = -9 * 0.25;
		}
		else if (splosion.timer == 640)
		{
			splosion.splosionCircles[9].velocity = -10 * 0.25;
		}
		else if (splosion.timer == 0)
		{
			for (var i = 0; i < splosion.splosionCircles.length; i++)
			{
				splosion.splosionCircles[i].velocity = 0;
				splosion.splosionCircles[i].color = splosionElementColor[0];
			}
			splosion.splosionCircles[0].velocity = 1;
			splosion.splosionCircles[0].width = 4;
			splosion.splosionCircles[1].velocity = 2;
			splosion.splosionCircles[1].width = 10;
			splosion.splosionCircles[1].drawR = splosion.splosionCircles[1].minR;
			
			this.outcome(splosion);
		}
		else if (splosion.timer == -320)
		{
			splosion.timer = splosion.maxTimer;
			splosion.splosionCircles[0].velocity = 0;
			splosion.splosionCircles[0].width = 1;
			splosion.splosionCircles[0].drawR = 32;
			splosion.splosionCircles[1].velocity = 0;
			splosion.splosionCircles[1].width = 1;
			splosion.splosionCircles[1].drawR = 32;
			splosion.ticking = false;
		}
	},
	tick: function ()
	{
		if(splosions.types.Alkaplosion.ticking)
		{
			this.run(splosions.types.Alkaplosion, elementalColors.Alkahest, machineData.machineNexus);
		}
		if(splosions.types.Firesplosion.ticking)
		{
			this.run(splosions.types.Firesplosion, elementalColors.Fire, machineData.machineFire);
		}
	},
	outcome: function(splosion) {
		if(splosion == splosions.types.Alkaplosion)
		{
			for (var i = 0; i < initialData.betaElements.length; i++)
			{
				data.oElements[initialData.betaElements[i]].amount = 0;
			}
		}
		if(splosion == splosions.types.Firesplosion)
		{
			data.oElements.Fire.amount = 0;
		}
		if(splosion == splosions.types.Alkaplosion && data.oElements.Revelation.amount < 1)
		{
			data.oElements.Revelation.amount += (1 - data.oElements.Revelation.amount) / 3;
		}
	}
};

function preprocessSplosions()
{
    var types = [["Alkaplosion","Alkahest"], ["Firesplosion", "Fire"]];

    for (var i = 0; i < types.length; i++)
    {
        var newPlosion = {
			ticking: false,
			maxTimer: 6401,
			timer: 6401,
			splosionElement: types[i][1],
        };
		splosions.types[types[i][0]] = newPlosion;
    }
}
