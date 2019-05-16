function cReplacingQueue(maxLength)
{
	this.maxLength = maxLength;
	this.pointer = 0;
	this.array = [];
}
cReplacingQueue.prototype.push = function (element)
{
	if (this.array.length < this.maxLength)
	{
		this.array.push(element);
		return "null";
	}
	else
	{
		var temp = this.array[this.pointer];
		this.array[this.pointer++] = element;
		if (this.pointer == this.maxLength)
		{
			this.pointer = 0;
		}
		return temp;
	}
}

function cEfficiencyCounter(maxLength = 600)
{
	this.queue = new cReplacingQueue(maxLength);
	this.results = {
		null: maxLength,
	};
}

cEfficiencyCounter.prototype.push = function (element)
{
	if (this.results[element])
	{
		this.results[element]++;
	}
	else
	{
		this.results[element] = 1;
	}
	this.results[this.queue.push(element)]--;
}
