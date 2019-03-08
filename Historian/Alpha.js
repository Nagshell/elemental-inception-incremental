data.oElements.Water.amount = 2e2 * 0;
data.oElements.Earth.amount = 2e2 * 0;
data.oElements.Air.amount = 2e2 * 0;
data.oElements.Fire.amount = 2e2 * 0;
for (var i = 0; i < data.aElements.length; i++)
{
	//data.aElements[i].amount = 1e300;
}
//data.oElements.GolemEarth.amount = 15;
//data.oElements.GolemWater.amount = 3;
//data.oElements.GolemAir.amount = 31;
//data.oElements.GolemFire.amount = 7;

function tick()
{
	machines.tick();

	for (var element in data.oElements)
	{
		data.oElements[element].amount += data.oElementsFlow[element];
		data.oElements[element].amount = Math.min(1e300, Math.max(0, data.oElements[element].amount));
		data.oElementsFlow[element] = 0;
	}
}

function click(x, y)
{}

function hover(x, y)
{}

var lastTimestamp = null;
var accumulatedTime = 0;

function loop(timestamp)
{
	if (!lastTimestamp)
	{
		lastTimestamp = timestamp;
	}
	accumulatedTime += timestamp - lastTimestamp;
	lastTimestamp = timestamp;
	var rounds = 0;
	while (accumulatedTime > 16 && rounds++ < 4)
	{
		accumulatedTime -= 16;
		tick();
	}
	draw();
	requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
