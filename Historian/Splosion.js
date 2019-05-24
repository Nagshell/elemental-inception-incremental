var splosionTime;
//var splosionTypes = new Array();
//var splosionNames = new Array();

function startSplosion(splosionType)
{
		splosionType.ticking = true;
}

function runSplosion(splosionType, splosionElementColor, splosionMachine)
{
	splosionType.timer -= 1;
	if (splosionType.timer == 6400)
	{
		splosionType.splosionCircles[0].velocity = -1 * 0.25;
	}
	else if (splosionType.timer == 5760)
	{
		splosionType.splosionCircles[1].velocity = -2 * 0.25;
	}
	else if (splosionType.timer == 5120)
	{
		splosionType.splosionCircles[2].velocity = -3 * 0.25;
	}
	else if (splosionType.timer == 4480)
	{
		splosionType.splosionCircles[3].velocity = -4 * 0.25;
	}
	else if (splosionType.timer == 3840)
	{
		splosionType.splosionCircles[4].velocity = -5 * 0.25;
	}
	else if (splosionType.timer == 3200)
	{
		splosionType.splosionCircles[5].velocity = -6 * 0.25;
	}
	else if (splosionType.timer == 2560)
	{
		splosionType.splosionCircles[6].velocity = -7 * 0.25;
	}
	else if (splosionType.timer == 1920)
	{
		splosionType.splosionCircles[7].velocity = -8 * 0.25;
	}
	else if (splosionType.timer == 1280)
	{
		splosionType.splosionCircles[8].velocity = -9 * 0.25;
	}
	else if (splosionType.timer == 640)
	{
		splosionType.splosionCircles[9].velocity = -10 * 0.25;
	}
	else if (splosionType.timer == 0)
	{
		for (var i = 0; i < splosionType.splosionCircles.length; i++)
		{
			splosionType.splosionCircles[i].velocity = 0;
			splosionType.splosionCircles[i].color = splosionElementColor[0];
		}
		splosionType.splosionCircles[0].velocity = 1;
		splosionType.splosionCircles[0].width = 4;
		splosionType.splosionCircles[1].velocity = 2;
		splosionType.splosionCircles[1].width = 10;
		splosionType.splosionCircles[1].drawR = splosionType.splosionCircles[1].minR;
		splosionCleanUp(splosionType);
		splosionReward(splosionType);
	}
	else if (splosionType.timer == -320)
	{
		splosionType.timer = splosionType.maxTimer;
		splosionType.splosionCircles[0].velocity = 0;
		splosionType.splosionCircles[0].width = 1;
		splosionType.splosionCircles[0].drawR = 32;
		splosionType.splosionCircles[1].velocity = 0;
		splosionType.splosionCircles[1].width = 1;
		splosionType.splosionCircles[1].drawR = 32;
		splosionType.ticking = false;
	}
}

function splosionCleanUp(splosionType)
{
	if(splosionType == splosions.Alkaplosion)
	{
		for (var i = 0; i < initialData.betaElements.length; i++)
		{
			data.oElements[initialData.betaElements[i]].amount = 0;
		}
	}
	if(splosionType == splosions.Firesplosion)
	{
		data.oElements.Fire.amount = 0;
	}
}

function splosionReward(splosionType)
{
		if(splosionType == splosions.Alkaplosion)
		if (data.oElements.Revelation.amount < 1)
		{
			data.oElements.Revelation.amount += (1 - data.oElements.Revelation.amount) / 3;
		}
}

var splosions = {
	tick: function ()
	{
		if(splosions.Alkaplosion.ticking)
		{
			runSplosion(splosions.Alkaplosion, elementalColors.Alkahest, machineData.machineNexus);
		}
		if(splosions.Firesplosion.ticking)
		{
			runSplosion(splosions.Firesplosion, elementalColors.Fire, machineData.machineFire);
		}
	}
};

function preprocessSplosions()
{
		//var splosionNames = new Array();
		//var splosionTypes = new Array();
    var types = [["Alkaplosion","Alkahest"], ["Firesplosion", "Fire"]];

    for (var i = 0; i < types.length; i++)
    {

        var newPlosion =
				{
					ticking: false,
					maxTimer: 6401,
					timer: 6401,
					splosionElement: types[i][1]
        };

				splosions[types[i][0]] = newPlosion;
				//splosionNames[i] = types[i][0];
				//splosionTypes[i] = types[i][1];
    }
		/*Remember to add a corrisponding processing block to visuals
		around line 434... assuming code hadn't been added above it*/
}
