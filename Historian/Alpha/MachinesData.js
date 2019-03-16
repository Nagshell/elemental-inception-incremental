var chartColors = {
	null: "#080808",
	working: "#686868",
	full: "#A8A8A8",
	empty: "#282828",
};
var machineData;
var machineDisplayElements = {};

function preprocessMachinesData(simplifiedDataToBeProcessed)
{
	machines.list = [];
	machines.dataTranslator = [];

	machines.glowCheckCD = 0;

	machineData = prepareTemplatedMachineData(simplifiedDataToBeProcessed);
	var infuser = machineData.golemInfuser;
	if (infuser)
	{
		infuser.displayRegionSwapCD = 128;
		infuser.displayRegionCurrentGolem = -1;
		infuser.displayRegionNextGolem = -1;
		infuser.displayRegionCustomDraw = function (ctx)
		{
			ctx.save();
			ctx.translate(-32, -32);
			if (infuser.displayRegionCurrentGolem >= 0)
			{
				ctx.drawImage(images["icon" + infuser.displayRegionGolemList[infuser.displayRegionCurrentGolem]], 0, 0);
				ctx.fillStyle = ctx.strokeStyle;
				drawNumber(ctx, data.oElements[infuser.displayRegionGolemList[infuser.displayRegionCurrentGolem]].amount, 50, 24, "", "center");
			}
			if (infuser.displayRegionNextGolem >= 0 && infuser.displayRegionNextGolem !== infuser.displayRegionCurrentGolem)
			{
				ctx.beginPath();
				ctx.moveTo(0, 0);
				ctx.lineTo(128 - infuser.displayRegionSwapCD, 0);
				ctx.lineTo(0, 128 - infuser.displayRegionSwapCD);
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
				ctx.clip();
				ctx.drawImage(images["icon" + infuser.displayRegionGolemList[infuser.displayRegionNextGolem]], 0, 0);
				ctx.fillStyle = ctx.strokeStyle;
				drawNumber(ctx, data.oElements[infuser.displayRegionGolemList[infuser.displayRegionNextGolem]].amount, 50, 24, "", "center");
			}
			ctx.restore();
			if (infuser.displayRegionSwapCD-- == 0)
			{
				infuser.displayRegionSwapCD = 128;
				if (infuser.displayRegionNextGolem >= 0)
				{
					infuser.displayRegionCurrentGolem = infuser.displayRegionNextGolem;
					infuser.displayRegionNextGolem = -1;
					for (var i = 1; i <= 4; i++)
					{
						if (data.oElements[infuser.displayRegionGolemList[(infuser.displayRegionCurrentGolem + i) % 4]].amount > 0)
						{
							infuser.displayRegionNextGolem = (infuser.displayRegionCurrentGolem + i) % 4;
							break;
						}
					}
				}
				else
				{
					infuser.displayRegionCurrentGolem = -1;
					for (var i = 0; i < 4; i++)
					{
						if (data.oElements[infuser.displayRegionGolemList[i]].amount > 0)
						{
							infuser.displayRegionNextGolem = i;
							break;
						}
					}
				}
			}
			else if (infuser.displayRegionNextGolem === null)
			{
				for (var i = 0; i < 4; i++)
				{
					if (data.oElements[infuser.displayRegionGolemList[i]].amount > 0)
					{
						infuser.displayRegionNextGolem = i;
						infuser.displayRegionSwapCD = 128;
						break;
					}
				}
			}
		}
	}
	var merger = machineData.golemMerger;
	if (merger)
	{
		merger.displayRegionCustomDraw = function (ctx)
		{
			ctx.save();
			ctx.translate(-32, -32);
			ctx.drawImage(images.iconMergerDisplay, 0, 0);
			ctx.restore();
		}
	}

	var count = 0;
	for (var title in machineData)
	{
		machineData[title].translatedID = count++;
		machines.dataTranslator.push(title);

		if (machineData[title].displayArray)
		{
			for (var i = 0; i < machineData[title].displayArray.length; i++)
			{
				machineDisplayElements[machineData[title].displayArray[i]] = title;
			}
		}
		else if (machineData[title].displayElement)
		{
			machineDisplayElements[machineData[title].displayElement] = title;
		}

		initMachine(title);

	}
	if (infuser)
	{

		infuser.pane.regularDraw = infuser.pane.customDraw;
		infuser.pane.customDraw = function (ctx)
		{
			if (this.boundaryPathMax)
			{
				ctx.save();
				ctx.translate(optionData.iconSize * 2 + 1, optionData.iconSize * 2 + 25);
				ctx.beginPath();
				ctx.arc(0, 0, 30, 0, Math.PI * 2);
				ctx.stroke();
				ctx.fill();
				ctx.clip();

				this.machine.region.customDraw(ctx);
				ctx.restore();
				this.regularDraw(ctx);
				ctx.save();
				ctx.fillStyle = ctx.strokeStyle;
				ctx.fillText(locale.oElementsShorthand.GolemEarth, optionData.iconSize * 4 + 15, optionData.iconSize * 1.5 + 2);
				drawNumber(ctx, data.oElements.GolemEarth.amount, optionData.iconSize * 4 + 25, optionData.iconSize * 1.5 + 2);
				ctx.fillText(locale.oElementsShorthand.GolemWater, optionData.iconSize * 4 + 15, optionData.iconSize * 2.5 + 2);
				drawNumber(ctx, data.oElements.GolemWater.amount, optionData.iconSize * 4 + 25, optionData.iconSize * 2.5 + 2);
				ctx.fillText(locale.oElementsShorthand.GolemAir, optionData.iconSize * 4 + 15, optionData.iconSize * 3.5 + 2);
				drawNumber(ctx, data.oElements.GolemAir.amount, optionData.iconSize * 4 + 25, optionData.iconSize * 3.5 + 2);
				ctx.fillText(locale.oElementsShorthand.GolemFire, optionData.iconSize * 4 + 15, optionData.iconSize * 4.5 + 2);
				drawNumber(ctx, data.oElements.GolemFire.amount, optionData.iconSize * 4 + 25, optionData.iconSize * 4.5 + 2);

				ctx.restore();

			}
			else
			{
				ctx.save();
				ctx.translate(optionData.iconSize * 2 + 1, optionData.iconSize * 2 + 25);
				ctx.beginPath();
				ctx.arc(0, 0, 30, 0, Math.PI * 2);
				ctx.stroke();
				ctx.fill();
				ctx.clip();

				this.machine.region.customDraw(ctx);
				ctx.restore();
				this.regularDraw(ctx);
			}
		}
	}
}
