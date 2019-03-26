function versionMigrator(dataToLoad)
{
	while (dataToLoad[0])
	{
		switch (dataToLoad[0])
		{
			default:
				return 1e7 * Math.pow(25, dataToLoad.length / 150);
		}
	}
	return dataToLoad;
}
