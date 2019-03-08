//data.oElements.Earth.amount = 100;
//data.oElements.Water.amount = 100;
//data.oElements.Air.amount = 100;
//data.oElements.Fire.amount = 100;
//
// data.oElements.GolemEarth.amount = 80;
// data.oElements.GolemWater.amount = 80;
// data.oElements.GolemAir.amount = 80;
// data.oElements.GolemFire.amount = 80;
//
for (var i = 0; i < data.aElements.length; i++)
{
	//data.aElements[i].amount = 1e10;
}
//data.oElements.Void.amount = 0.01;
var c = 0;

function tick()
{
	if (c-- > 1)
	{
		c = 180;
		data.oElements.Earth.amount = 100;
		data.oElements.Water.amount = 100;
		data.oElements.Air.amount = 100;
		data.oElements.Fire.amount = 100;
		data.oElements.GolemEarth.amount = 0;
		data.oElements.GolemWater.amount = 0;
		data.oElements.GolemAir.amount = 0;
		data.oElements.GolemFire.amount = 0;
	}
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
