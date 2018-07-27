var jsonMessages = {
	"tutorialMessage" : {
		"flush" : "if flush is set to true message will clear chatbox before adding it's content and reset chatTrimmer delays",
		
		"loreText" : "what will be added to current content of respective chatbox (after flushing)",
		"loreFreezeDuration": "period of time in ms during which chatTrimmer won't touch respective chatbox. negative values are permament disable (until next message)",
		"gameplayText" : "same as above",
		"gameplayFreezeDuration": "same as above",
		
		"activeElements" : "gameplay and chatTrimmer are frozen until all active elements are completed",
		"firstActiveElement" : "button/progressBar/none - which element is activated first",
		"progressBar" : {
			"barText": "text appearing on bar",
			"duration": "duration in ms of progress bar",
		},
		"buttonAvailable": "if set to true will make button visible and clickable once",
		
		"chainedMessage": "if this exists then after this msg is complete next message will fire instead of resuming gameplay",
		"chainedMessageDelay": "delay between finish of this msg and firing of the next - gameplay is still frozen, but chatTrimmer is not",
		
		"eventId": "id of an event that will fire as soon as this message appears"
	},
	"intro0" : {
		"flush" : "true",
		
		"loreText" : "",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "",
			"duration": 1000,
		},
		"buttonAvailable": true,
		
		"chainedMessage": "intro1",
		"chainedMessageDelay": 1000,
		
		"eventId": "eventId"
	}
};