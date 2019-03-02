var regionData = {};

function preprocessRegionData()
{
	regionData.resetRegion = new cRegion(750, 0);
	var path = new Path2D();
	path.rect(0, 0, 50, 50);
	regionData.resetRegion.boundaryPath = path;
	regionData.resetRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			panes.resetPositions();
		}
	}
	regionData.resetRegion.text = "Reset";
	regionData.resetRegion.textX = 25;
	regionData.resetRegion.textY = 25;

	regionData.dragRegion = new cRegion(0, 0);
	regionData.dragRegion.addImage("iconDrag");
	path = new Path2D();
	path.rect(0, 0, 16, 16);
	regionData.dragRegion.boundaryPath = path;
	regionData.dragRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mousedown")
		{
			panes.dragndrop = pane;
		}
	}

	regionData.hideRegion = new cRegion(17, 0);
	regionData.hideRegion.addImage("iconHide");
	regionData.hideRegion.boundaryPath = path;
	regionData.hideRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (pane.boundaryPath)
			{
				pane.hiddenPath = pane.boundaryPath;
				pane.boundaryPath = null;
			}
		}
	}

	regionData.showRegion = new cRegion(17, 0);
	regionData.showRegion.addImage("iconShow");
	regionData.showRegion.boundaryPath = path;
	regionData.showRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			if (pane.hiddenPath)
			{
				pane.boundaryPath = pane.hiddenPath;
				pane.hiddenPath = null;
			}
		}
	}

	regionData.minRegion = new cRegion(34, 0);
	regionData.minRegion.addImage("iconMin");
	regionData.minRegion.boundaryPath = path;
	regionData.minRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			pane.subPanesMax = pane.subPanes;
			pane.subPanes = pane.subPanesMin;

			pane.subRegionsMax = pane.subRegions;
			pane.subRegions = pane.subRegionsMin;

			pane.boundaryPathMax = pane.boundaryPath;
			pane.boundaryPath = pane.boundaryPathMin;
		}
	}

	regionData.maxRegion = new cRegion(34, 0);
	regionData.maxRegion.addImage("iconMax");
	regionData.maxRegion.boundaryPath = path;
	regionData.maxRegion.mouseHandler = function (pane, x, y, type)
	{
		if (type == "mouseup")
		{
			pane.subPanesMin = pane.subPanes;
			pane.subPanes = pane.subPanesMax;

			pane.subRegionsMin = pane.subRegions;
			pane.subRegions = pane.subRegionsMax;

			pane.boundaryPathMin = pane.boundaryPath;
			pane.boundaryPath = pane.boundaryPathMax;
			pane.boundaryPathMax = null;
		}
	}
}
preprocessRegionData();

var trackerPane = new cPane(null, 0, 0);
var path = new Path2D();
path.rect(0, 0, 800, 99);
trackerPane.boundaryPath = path;

var mainPane = new cPane(null, 0, 100);
mainPane.subRegions.push(regionData.resetRegion);
var path = new Path2D();
path.rect(0, 0, 800, 700);
mainPane.boundaryPath = path;

trackerPane.customDraw = function (ctx)
{
	for (var i = 0; i < data.aElements.length; i++)
	{
		if (images["icon" + data.aElements[i].type])
		{
			ctx.drawImage(images["icon" + data.aElements[i].type], 1 + 62 * i, 10);
		}
	}
}
