// data.oElements.Water.amount += 5.5e0;
// data.oElements.Earth.amount += 5.5e0;
// data.oElements.Air.amount += 5.5e100;
// data.oElements.Fire.amount += 5.5e0;

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
