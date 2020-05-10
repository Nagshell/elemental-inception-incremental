function versionMigrator(dataToLoad)
{
	if (dataToLoad[0] < 42)
	{
		return -100;
	}
	while (dataToLoad[0] != gameVersion)
	{
		switch (dataToLoad[0])
		{
			case 42:
				savingSystem.migrationMessage += "Save system was expanded to include cyan glows. It is fully compatible with old saves, but all unlocked recipes will glow cyan until they do a tick of active work.";
				dataToLoad[0] = 43;
				break;
			case 43:
				savingSystem.migrationMessage += "A ton of small changes. Shoutout to: nononick, Dimava and Rubikium for creating some awesome artwork that was added to the game!";
				dataToLoad[0] = 44;
				break;
			default:
				return 1e7 * Math.pow(25, dataToLoad.length / 150);
		}
	}
	return dataToLoad;
}
