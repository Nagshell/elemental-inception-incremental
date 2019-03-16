function versionMigrator(dataToLoad)
{
	switch (dataToLoad[0])
	{
		case 1:
			var z = 0;
			while (++z < dataToLoad.length)
			{
				if (!Array.isArray(dataToLoad[z]))
				{}
				else
				{
					var mach = dataToLoad[z];
					for (var i = 0; i < mach.length; i++)
					{
						var rec = mach[i];
						for (var j = 1; j < rec.length; j++)
						{
							rec[j] *= 3;
						}
					}
				}
			}
			break;
	}
	return dataToLoad;
}
