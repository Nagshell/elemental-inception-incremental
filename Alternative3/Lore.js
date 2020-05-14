var lore = {
	loreTree:
	{
		General:
		{
			text: "Currently this section is empty",
		},
	},
	recurHide: function (node)
	{
		regionData.hideRegion.action(node.pane);
		for (var i = 0; i < node.list.length; i++)
		{
			this.recurHide(node.list[i]);
		}
	},
	buttonMouseHandler: function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (this.markedToSuperGlow)
			{
				lorePane.region.markedToSuperGlow = false;
				this.markedToSuperGlow = false;
				var unglow = this.node.top;
				while (unglow.button)
				{
					unglow.button.markedToSuperGlow = false;
					unglow = unglow.top;
				}
			}
			var topList = this.node.top.list;
			for (var i = 0; i < this.node.index; i++)
			{
				regionData.showRegion.action(topList[i].button);
				topList[i].button.focus = "left";
				lore.recurHide(topList[i]);
			}
			for (var i = topList.length - 1; i > this.node.index; i--)
			{
				regionData.showRegion.action(topList[i].button);
				topList[i].button.focus = "right";
				lore.recurHide(topList[i]);
			}
			regionData.showRegion.action(this);
			if (!this.locked)
			{
				regionData.showRegion.action(this.node.pane);
				topList[i].pane.scrollRate = 0;
				topList[i].pane.boundaryPath = new Path2D();
				this.opened = true;
			}
			this.focus = "center";
		}
	},
	buttonCustomDraw: function (ctx)
	{
		ctx.save();
		var x = 60;
		if (this.focus == "right")
		{
			x = 70;
		}
		else if (this.focus == "left")
		{
			x = 50;
		}
		else if (this.opened)
		{
			ctx.fillStyle = "#321632";
			ctx.fill(this.boundaryPath);
		}
		if (!this.locked)
		{
			ctx.fillStyle = ctx.strokeStyle;
			ctx.fillText(this.node.name, x, 10);
		}
		ctx.restore();
	},
	paneCustomDraw: function (ctx)
	{
		ctx.save();

		if (this.scrollRate < this.scrollMax)
		{
			this.scrollRate++;
			this.boundaryPath = new Path2D();
			if (this.node.list.length > 0)
			{
				this.boundaryPath.rect(0, 0, 20 + 100 * this.node.list.length, this.scrollRate / this.scrollMax * 20);
			}
			else
			{
				this.scrollMax = 30;
				if (this.maxTextY)
				{
					this.boundaryPath.rect(0, 0, 400 * this.columnCount, this.scrollRate / this.scrollMax * this.maxTextY);
				}
				else
				{
					this.boundaryPath.rect(0, 0, 400 * this.columnCount, this.scrollRate * 3);
				}

			}
			if (this.scrollRate >= this.scrollMax)
			{
				for (var i = 0; i < this.node.list.length; i++)
				{
					if (this.node.list[i].button.opened && this.node.list[i].button.focus == "center")
					{
						regionData.showRegion.action(this.node.list[i].pane);
						this.node.list[i].pane.scrollRate = 0;
						this.node.list[i].pane.boundaryPath = new Path2D();
					}
				}
			}
		}
		if (this.text)
		{
			if (this.textCanvas)
			{
				ctx.drawImage(this.textCanvas, 0, 0);
			}
			else
			{
				this.textCanvas = document.createElement('canvas');
				this.textCanvas.width = 400;
				this.textCanvas.height = 50;
				var ctxText = this.textCanvas.getContext('2d');
				ctxText.font = "14px Arial";
				ctxText.textAlign = "center";
				var words = this.text.split(" ");
				var lines = [];
				var i;
				for (i = 0; i < words.length; i++)
				{
					words[i] = words[i].replace(/_/g, " ");
				}
				i = 0;
				var line;
				var testLine;
				var y = 25;
				while (i < words.length)
				{
					if (words[i] == "|")
					{
						i++;
						if (line === null)
						{
							lines.push("");
							if (lines.length <= 25)
							{
								y += 20;
							}
						}
						line = null;
						continue;
					}
					line = "";
					testLine = words[i] + " ";
					while (ctx.measureText(testLine).width < 380)
					{
						line += words[i++] + " ";
						if (i >= words.length || words[i] == "|")
						{
							break;
						}
						testLine += words[i] + " ";
					}
					lines.push(line);
					this.columnCount = 1 + Math.floor(lines.length / 25);
					if (lines.length <= 25)
					{
						y += 20;
					}
				}
				this.maxTextY = y;
				this.textCanvas.width = 400 * this.columnCount;
				this.textCanvas.height = 25 + y;
				ctxText = this.textCanvas.getContext('2d');
				ctxText.font = "14px Arial";
				ctxText.textAlign = "left";
				ctxText.fillStyle = ctx.fillStyle;
				ctxText.fill(this.boundaryPath);
				ctxText.fillStyle = ctx.strokeStyle;
				ctxText.strokeStyle = ctx.strokeStyle;
				for (i = 0; i < lines.length; i++)
				{
					ctxText.fillText(lines[i], 10 + 400 * Math.floor(i / 25), 25 + 20 * (i % 25));
				}
				for (i = 1; i < this.columnCount; i++)
				{
					ctxText.beginPath();
					ctxText.moveTo(400 * i, 10);
					ctxText.lineTo(400 * i, 40 + 20 * 24);
					ctxText.stroke();
				}
			}
		}
		ctx.restore();
	},
};

function reccurentLoreTick(node)
{
	var change = false;
	if (node.list.length > 0)
	{
		for (var i = 0; i < node.list.length; i++)
		{
			change = reccurentLoreTick(node.list[i]) || change;
		}
	}
	else if (node.lock)
	{
		if (machineData[node.lock[0]])
		{
			change = machineData[node.lock[0]].recipes[node.lock[1]].unlocked;
		}
		else if (data.oElements[node.lock[0]])
		{
			change = data.oElements[node.lock[0]].amount >= node.lock[1];
		}

		if (change)
		{
			node.lock = null;
		}
	}

	if (node.button && change)
	{
		node.button.locked = false;
		node.button.markedToSuperGlow = true;
	}
	return change;
}

function reccurentLoreUnTick(node)
{
	if (node.list.length > 0)
	{
		for (var i = 0; i < node.list.length; i++)
		{
			reccurentLoreUnTick(node.list[i]);
		}
	}
	if (node.button && node.button.markedToSuperGlow)
	{
		node.button.markedToSuperGlow = false;
	}
}

function tickLore()
{
	if (reccurentLoreTick(lore.dataTree))
	{
		lorePane.region.markedToSuperGlow = true;
	}
}

function processLore(loreNode, top)
{
	var node = {};
	node.top = top;
	node.index = top.list.length;
	top.list.push(node);

	node.list = [];

	var buttonPane = new cPane(top.pane, 100 * node.index, 0);
	buttonPane.node = node;
	buttonPane.boundaryPath = new Path2D();
	buttonPane.boundaryPath.rect(0, 0, 120, 20);
	buttonPane.mouseHandler = lore.buttonMouseHandler;
	buttonPane.customDraw = lore.buttonCustomDraw;
	var showPane = new cPane(top.pane, 0, 21);
	showPane.node = node;
	showPane.boundaryPath = new Path2D();
	showPane.independent = true;
	showPane.scrollMax = 10;
	showPane.columnCount = 1;
	showPane.customDraw = lore.paneCustomDraw;
	regionData.hideRegion.action(showPane);

	node.button = buttonPane;
	node.pane = showPane;

	var leaf = true;
	var father = false;
	for (var branch in loreNode)
	{
		switch (branch)
		{
			case "lock":
				buttonPane.locked = true;
				node.lock = loreNode[branch];
				break;
			case "text":
				showPane.text = loreNode.text;
				break;
			default:
				father = true;
				var temp = processLore(loreNode[branch], node);
				temp.name = branch;
				if (!temp.button.locked)
				{
					leaf = false;
				}
		}
	}
	if (father)
	{
		buttonPane.locked = leaf;
	}
	if (node.list.length > 0)
	{
		for (var i = node.list.length - 1; i > 0; i--)
		{
			regionData.showRegion.action(node.list[i].button);
			node.list[i].button.focus = "right";
		}
		regionData.showRegion.action(node.list[0].button);
		node.list[0].button.focus = "center";
		regionData.hideRegion.action(node.list[0].pane);
	}
	return node;
};

function preprocessLore()
{
	lorePane.boundaryPath = new Path2D();

	lore.dataTree = {};
	lore.dataTree.list = [];
	lore.dataTree.pane = lorePane;
	for (var branch in lore.loreTree)
	{
		var node = processLore(lore.loreTree[branch], lore.dataTree);
		node.name = branch;
		node.button.y += optionData.iconSize;
		node.button.defaultY += optionData.iconSize;
		node.pane.y += optionData.iconSize;
		node.pane.defaultY += optionData.iconSize;
	}
	lorePane.boundaryPath.rect(0, 0, 20 + 100 * lore.dataTree.list.length, optionData.iconSize + 20);
	if (lore.dataTree.list.length > 0)
	{
		for (var i = lore.dataTree.list.length - 1; i > 0; i--)
		{
			regionData.showRegion.action(lore.dataTree.list[i].button);
			lore.dataTree.list[i].button.focus = "right";
		}
		regionData.showRegion.action(lore.dataTree.list[0].button);
		lore.dataTree.list[0].button.focus = "center";
		regionData.hideRegion.action(lore.dataTree.list[0].pane);
	}
	regionData.hideRegion.action(lorePane);
}
