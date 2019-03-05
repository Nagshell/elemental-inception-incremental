data.oElements.Water.amount = 2;
data.oElements.Earth.amount = 2;
data.oElements.Air.amount = 2;
data.oElements.Fire.amount = 4;

function tick()
{
	for (var element in data.oElements)
	{
		data.oElementsFlow[element] = 0;
	}
	machines.tick();
	particleGenerator.tick();

	for (var element in data.oElements)
	{
		data.oElements[element].amount += data.oElementsFlow[element];
		data.oElements[element].amount = Math.max(0, data.oElements[element].amount);
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
