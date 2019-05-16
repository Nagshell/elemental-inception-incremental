function versionMigrator(dataToLoad)
{
	while (dataToLoad[0] != gameVersion)
	{
		switch (dataToLoad[0])
		{
			case 12:
				dataToLoad[0] = 13;
				if (dataToLoad[117] != null && !Array.isArray(dataToLoad[117]))
				{
					for (var i = 125; i < dataToLoad.length; i++)
					{
						dataToLoad[i - 8] = dataToLoad[i];
					}
					dataToLoad.length -= 8;
				}
				break;
			default:
				return 1e7 * Math.pow(25, dataToLoad.length / 150);
		}
	}
	return dataToLoad;
}
