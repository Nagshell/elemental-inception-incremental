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
	"outro0" : {
		"flush" : true,
		"loreText" : "Legend tells that knowledge possessed by Alchemist came from combining four Elements together.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro1",
		"chainedMessageDelay": 50
	},
	"outro1" : {
		"flush" : true,
		"loreText" : "So my plan at first was to touch every Orb at the same time. Technically Glove can only hold one element, but this way I connect to all elements at the same time. I tried it before. Complete failure, the interactions between elements caused all Orbs to empty themselves.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro2",
		"chainedMessageDelay": 50
	},
	"outro2" : {
		"flush" : true,
		"loreText" : "But now they aren't really Orbs anymore. I removed all four Golems from their pedestals and put them in small circle.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro3",
		"chainedMessageDelay": 50
	},
	"outro3" : {
		"flush" : true,
		"loreText" : "Alright, I'm ready. I will take my Elemental Glove and touch each Golem with one of my fingers. Hopefully, the combined elements will be able to heal my father.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Reach out to Golems",
			"duration": 2000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "outro4",
		"chainedMessageDelay": 50
	},
	"outro4" : {
		"flush" : true,
		"loreText" : "Blinding light. Vision. Old person running towards me. Loud shout, piercing every cell of my existence.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro5",
		"chainedMessageDelay": 50
	},
	"outro5" : {
		"flush" : true,
		"loreText" : "\"Thou shalt not meddle with Elements! What have you done?! Go back where you came from, and never do this again!\"",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro6",
		"chainedMessageDelay": 50
	},
	"outro6" : {
		"flush" : true,
		"loreText" : "Darkness. Quiet and comforting.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "progressBar",
		"progressBar" : {
			"barText": "",
			"duration": 4000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "outro7",
		"chainedMessageDelay": 50
	},
	"outro7" : {
		"flush" : true,
		"loreText" : "I woke up slowly. I was still in attic of my old family house. At least the walls look similar. Every single movable piece in room disappeared. What happened? What happened?!",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro8",
		"chainedMessageDelay": 50
	},
	"outro8" : {
		"flush" : true,
		"loreText" : "Nothing.<br>I don't remember what happened after hearing that shout.<br>I might not remember, but I know one thing certainly did change.<br>The Elemental Glove I used is now fused with my whole arm. I cannot take it off. I don't need to take it off. I think I can use it to go back there. To find out what lies on the other side.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro9",
		"chainedMessageDelay": 50
	},
	"outro9" : {
		"flush" : true,
		"loreText" : "Wait, no. I try to stop my galloping thoughts and focus. I have to go see my father. He's the whole reason I was able to get so far in my life. I can't leave him now while he's at his weakest. I need to go. I need to move. Why can't I move?!",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "You are trying to move. It's not looking good.",
			"duration": 20000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "outro10",
		"chainedMessageDelay": 50
	},
	"outro10" : {
		"flush" : true,
		"loreText" : "After what felt like eternity I saw small twitch in my left thumb. I think I'll be alright. I just need few minutes to recover, and I'll go out.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro11",
		"chainedMessageDelay": 50
	},
	"outro11" : {
		"flush" : true,
		"loreText" : "Thank you for playing intro stage of my game. \\('_' ) <br><br> You can always refresh page to reset.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "theEnd"
	},
	"intro0" : {
		"flush" : true,
		"loreText" : "Welcome to prototype of \"I didn't decide on the name yet Elements\".<br><br>Currently only stage 1 is available, which is just and something bigger than just tutorial and something smaller than what in incremental would be called \"road to first reset\".<br><br>I'd love to hear any feedback from you, either as a comment in game's post, direct message or email.<br><br>If you leave game in inactive window it'll accumulate time, which will then be used up to 3x the speed of gameplay.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Press Proceed to continue",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro1",
		"chainedMessageDelay": 50
	},
	"intro1" : {
		"flush" : true,
		"loreText" : "A few words about this message box: when something appears here it'll usually freeze gameplay.<br><br>This box usually contains lore, while the small box below will contain a gameplay tip or action that is activated with the button.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Sometimes after pressing the button you'll have to wait for action to complete.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "",
			"duration": 2000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "intro2",
		"chainedMessageDelay": 50
	},
	"intro2" : {
		"flush" : true,
		"loreText" : "Every message is copied into your personal Log. You can re-read everything at your leisure there.<br><br>Alright, it's time to begin with the real story.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Other times you'll have to first wait, and then press button to continue story.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "progressBar",
		"progressBar" : {
			"barText": "Loading Intro cutscene...",
			"duration": 2000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "intro3",
		"chainedMessageDelay": 50
	},
	"intro3" : {
		"flush" : true,
		"loreText" : "My mentor told me a story about Elements.<br><br>Legend tells that there was a wise Alchemist that mastered all the fundamentals of the world as we know it.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Text can also dissapear in almost animated way.",
		"gameplayFreezeDuration": 500,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro4",
		"chainedMessageDelay": 2550
	},
	"intro4" : {
		"flush" : true,
		"loreText" : "He was able to control all elements and produce mountains of gold, change properties of matter and much more. <br><br>\"Eh, fairy tales...\" - that's what I would usually say.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro5",
		"chainedMessageDelay": 50
	},
	"intro5" : {
		"flush" : true,
		"loreText" : "But now that my father has fallen deathly ill, that story has become my last hope.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro6",
		"chainedMessageDelay": 50
	},
	"intro6" : {
		"flush" : true,
		"loreText" : "I don't want to become god. Well, I would like to if possible.<br><br> But I just want to try researching the mystic art of the Elements. Maybe they will lead me to the discovery of an unknown medicine that could help my father.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro7",
		"chainedMessageDelay": 50
	},
	"intro7" : {
		"flush" : true,
		"loreText" : "Scholars give him no more than a month.<br><br>So I don't have too much time. Armed with a lot of motivation I made my way towards the * Library.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro8",
		"chainedMessageDelay": 50
	},
	"intro8" : {
		"flush" : true,
		"loreText" : "Legend tells that knowledge possessed by Alchemist came from combining four Elements together.<br><br>So I'm going to learn Elemental manipulation. For most it's just like a hobby. Most \"Elementalists\", as they like to call themselves, just sit in their little playgrounds and create floating lamps, or other decorative baubles",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro9",
		"chainedMessageDelay": 50
	},
	"intro9" : {
		"flush" : true,
		"loreText" : "After few days of reading about it in library, I began to understand the basics. All you need to do begin experimenting is an Elemental Glove.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Begin your search",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Searching nearby shops. It shouldn't be too hard to find.",
			"duration": 5000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "intro10",
		"chainedMessageDelay": 50
	},
	"intro10" : {
		"flush" : true,
		"loreText" : "I found Glove at affordable price in toy store. People don't think highly of them. I hope that I'll be able to use it better than most.<br><br>By itself the Glove is quite limited though.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro11",
		"chainedMessageDelay": 50
	},
	"intro11" : {
		"flush" : true,
		"loreText" : "So I'll need other components. They are called Elemental Orbs. Elements can't hold their form without dedicated containers. An additional benefit of Orbs are their safety. Thanks to small crystal inside Orb it can compress Element into much denser form and redirect any potential overflow into the void.<br><br>Luckily my grandmother used to play with one set of those. And so I found them in attic of our old house.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Place Orbs on pedestals and make some space around.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "",
			"duration": 2000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "intro12",
		"chainedMessageDelay": 50
	},
	"intro12" : {
		"flush" : true,
		"loreText" : "How can I describe it? Rusted pedestals, broken pipes, it's a mess on top of a bigger mess. At least the compression crystals seem to be in working condition. This should suffice for learning experience. <br><br>And so my study began within this littered room. Quickly I met my biggest obstacle. Elemental Glove can only handle 1 Element at the time.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro13",
		"chainedMessageDelay": 50
	},
	"intro13" : {
		"flush" : true,
		"loreText" : "How am I supposed to combine 4 of them?<br>Also it seems that Orbs will be disabled until I infuse them with a bit of Element. This will create a base for that Element, enabling full functionality of the Orb. Once an Orb is active it can be manipulated with pipes and valves. It seems that grandmother had some simple machinery around the room, but everything has crumbled to pieces.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro14",
		"chainedMessageDelay": 50
	},
	"intro14" : {
		"flush" : true,
		"loreText" : "Usually when two Elements happen to be in one container, they will interfere and dissapear in small flash of light. Well, I should start to investigate different possibilities first. Maybe if I'll try this at bigger concentration it'll behave differently?<br>Well, it's time to start experimenting. Book theory is one thing, real world is the other. I need to activate those Orbs.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Begin your experiment.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro15",
		"chainedMessageDelay": 50
	},
	"intro15" : {
		"flush" : true,
		"loreText" : "Well, using random debris littering the floor I should be able to fill one Orb with Earth. Lets go.<br><br>Right, one more thing before actually doing anything.<br><br>I decided to make all my interactions with Orbs slow and steady. I don't want to destroy them by clicking too fast.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Below all Orbs is indicator. You can only click on Orb while it's fully green.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro16",
		"chainedMessageDelay": 50
	},
	"intro16" : {
		"flush" : true,
		"loreText" : "",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "theBeginning"
	},
	"reset0" : {
		"flush" : true,
		"loreText" : "I-I... I think I messed up. Nothing said that there was a capacity limit of Elemental Orb. It was supposed to condense Element and transfer excess to another plane of existence in case of overflow.<br><br>But something else happened. There was a big implosion inside Elemental Orb and soon after huge wave of unleashed Elements sent me flying across the room.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "progressBar",
		"progressBar" : {
			"barText": "Getting out of the human shaped hole in the wall.",
			"duration": 25000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset1",
		"chainedMessageDelay": 50
	},
	"reset1" : {
		"flush" : true,
		"loreText" : "Aftermath of the situation: My body has all it's pieces. At least I think so.<br>Every Element inside the Orbs disappeared. That's bad, I worked hard to collect so much of them.<br>Machines seem to be fine, but my crystals inside exploded, slightly damaging tanks. I guess I'll need to upgrade machine tanks again.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Repair damaged components and get everything back in place.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "reset1.1",
		"chainedMessageDelay": 50
	},
	"reset1.1" : {
		"flush" : true,
		"loreText" : "Now, for the Crystals inside Orbs themselves. Hm... Strange. Crystal bases are left intact, but the compression crystals inside orb that caused implosion is vibrating at high rate. I need to repair my machinery and test this crystal out.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Repair damaged components and get everything back in place.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "",
			"duration": 36000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset2",
		"chainedMessageDelay": 50
	},
	"reset2" : {
		"flush" : true,
		"loreText" : "Alright, whole setup is back in working order. Lets start filling Orbs again. Certainly there is more to them than I thought.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Start filling Orbs again.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent1"
	},
	"reset3" : {
		"flush" : true,
		"loreText" : "Another implosion. Surprised I walk back into the room and check on the Orbs again.<br><br>Vibrating crystal transformed. I never saw anything like that in books about Elemental manipulation. Orb still holds Element like before, but compression crystal expanded ten-fold. I wonder what will happen when I fill it again. I need to do few adjustments and I'll let machines run again.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Put transformed Orb back on pedestal and fill it with a bit of its Element.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "",
			"duration": 2000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset4",
		"chainedMessageDelay": 50
	},
	"reset4" : {
		"flush" : true,
		"loreText" : "Expanded Crystal lighted up for a second, then started generating it's Element by itself. Did I just reverse overflow process!? Well, I still wonder what will happen if I fill it to the point of the implosion again...",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Try to fill Orb with expanded crystal.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent2"
	},
	"reset5" : {
		"flush" : true,
		"loreText" : "Another Orb imploded, but it took noticeably longer this time. I have no idea what that means for the future, but for now I just have to keep going. I don't have any other ideas.",
		"loreFreezeDuration": -1,
		"gameplayText" : "I made some preparations so I was safe this time.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Reinstalling machines back in their docks.",
			"duration": 6000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset6",
		"chainedMessageDelay": 50
	},
	"reset6" : {
		"flush" : true,
		"loreText" : "Few small adjustments and few big impact walls around Orbs made out of debris let me dissipate most of the implosion aftershock. Thanks to that repairs took me way less time.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Fill Orb with expanded crystal.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent1"
	},
	"reset7" : {
		"flush" : true,
		"loreText" : "I thought I only began to scratch capacity of new Orb, but it seems expanding crystal had reverse effect on Orb's capacity threshold. This time overflow did not cause implosion, but compression crystal fully merged with Orb itself.<br>I need to test my newest accidental creation",
		"loreFreezeDuration": -1,
		"gameplayText" : "Test transformed Orb in safe environment.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Testing phase 1/2.",
			"duration": 4000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset8",
		"chainedMessageDelay": 50
	},
	"reset8" : {
		"flush" : true,
		"loreText" : "Are those... eyes? Orb started to have gradual changes in its shape. Now it looks more like a tear, and Element inside swirls in two small orbs.<br>I feel like they looking at me. I feel... strange about it. Anyway it seems that insides of Orb are fully connected to another plane and is able to channel insane amounts of Element both ways. Input pipes coming out of it instantly fill and containers I provide to it. Well, that's certainly helpful.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Testing phase 2/2.",
			"duration": 4000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset9",
		"chainedMessageDelay": 50
	},
	"reset9" : {
		"flush" : true,
		"loreText" : "Tests complete. I guess I should try to turn rest of the Orbs into this new entity. I decided to name it \"Golem\". Time to enable machines once again.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Overflow one of the remaining Orbs",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"reset10" : {
		"flush" : true,
		"loreText" : "Another Orb transformed into Golem. I need to continue doing the same with remaining Orbs.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Overflow one of the remaining Orbs",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"reset11" : {
		"flush" : true,
		"loreText" : "I've transformed each Orb into their Golem state. It's time.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "reset12",
		"chainedMessageDelay": 50
	},
	"reset12" : {
		"flush" : true,
		"loreText" : "",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "theOutro"
	},
	"pun1" : {
		"loreText" : "<br><br><br>Suddenly, nothing of particular interest happened.",
		"loreFreezeDuration": 35000,
		"gameplayText" : "",
		"gameplayFreezeDuration": 0,
		
		"firstActiveElement" : "none"
	},
	"pun2" : {
		"loreText" : "<br><br><br>Before all this I tried fishing. Didn't go swimmingly well.<br>Who would've thought that you can't find undiscovered medicine on the bottom of the river.",
		"loreFreezeDuration": 35000,
		"gameplayText" : "",
		"gameplayFreezeDuration": 0,
		
		"firstActiveElement" : "none"
	},
	"base0" : {
		"flush" : true,
		"loreText" : "Base of Earth Orb has been filled. Now I can truly start filling it with Earth.",
		"loreFreezeDuration": 1000,
		"gameplayText" : "Also first upgrade appeared at the bottom of the page.",
		"gameplayFreezeDuration": 1000,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"base1" : {
		"flush" : true,
		"loreText" : "Water Orb's base is complete. Finally I should be able to use full potential of Liquefier.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "Fully fill Liquefier reagent tank",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"base2" : {
		"flush" : true,
		"loreText" : "Air Orb's online.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"base3" : {
		"flush" : true,
		"loreText" : "Fire Orb activated. With power of Fire all machines should be able to work automatically at long last.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"elementGathered0" : {
		"flush" : true,
		"loreText" : "With increasing supply of Earth I should start thinking about activating another Orb. <br><br>Under rusted sheets near Orbs I found Liquefier. It's slightly damaged, but should work nonetheless.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "Setup machine on docking station.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "",
			"duration": 4000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "elementGathered0.2",
		"chainedMessageDelay": 50
	},
	"elementGathered0.2" : {
		"flush" : true,
		"loreText" : "Machine's ready.<br>I should open input valve and hopefully Earth should start flowing into it.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine0"
	},
	"elementGathered2" : {
		"flush" : true,
		"loreText" : "With slow, but steady way of getting of Air few other upgrades became available.<br><br>I also found parts of another machine. While over half of it is missing, I think I should be able to find replacements for them.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Searching for another set of machine parts.",
			"duration": 6000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "elementGathered2.2",
		"chainedMessageDelay": 50
	},
	"elementGathered2.2" : {
		"flush" : true,
		"loreText" : "And another machine's ready. I found replacement parts that are good enough in workshop of my father.<br><br> With Combustor I should be able to produce Fire. Soon I'll have missing reagent for my machines.",
		"loreFreezeDuration": 8000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine2"
	},
	"elementGathered3" : {
		"flush" : true,
		"loreText" : "In the center of the room new piece activated - Reaction Catalyst. It seems that fire inside it increases efficiency of reactions in machines.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"upgradeBought0" : {
		"loreText" : "<br>Now I don't need to fill Earth manually. What a relief.",
		"loreFreezeDuration": 5000,
		"gameplayText" : " | Autoclicker will get slightly better as the game progresses",
		"gameplayFreezeDuration": 5000,
		
		"firstActiveElement" : "none"
	},
	"upgradeBought2" : {
		"flush" : true,
		"loreText" : "While I was tinkering with reaction regulators I noticed two halves of another machine laying in the corner.I think with a bit of spare parts lying around I could assemble it myself.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Searching for machine parts.",
			"duration": 4000
		},
		"buttonAvailable": true
	},
	"upgradeBought2.2" : {
		"flush" : true,
		"loreText" : "Boiler is ready. It will help me with creating Air. Sadly to automate reaction I'll need Fire, so for the time being only manual method will be available.",
		"loreFreezeDuration": 9000,
		"gameplayText" : "Fill Boiler with some Water.",
		"gameplayFreezeDuration": 16000,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine2"
	},
	"upgradeBought13" : {
		"flush" : true,
		"loreText" : "For the longest time I thought it was a decoration. Small volcano made with brass alloys. Apparently it's machine.<br>If I upgrade Reaction Catalyst once more I should be able to make positive feedback loop to multiply my Earth supply.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "I suggest pushing for next reaction catalyst upgrade before using volcano.",
		"gameplayFreezeDuration": 15000,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"upgradeBought24" : {
		"flush" : true,
		"loreText" : "After sub-space breakthrough my supply of elements will increase drastically. With sheer amount of Elements I can use I might try creating my own compression crystals. <br><br>It gave me interesting new idea...",
		"loreFreezeDuration": 25000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"machineThresholdAmount-0" : {
		"flush" : true,
		"loreText" : "I realized few things about Liquefier. Once Earth flowed into its internal tank, whole machine started rotating on track that goes around whole room.<br><br> While it's moving it can gather required Element from the pipes. Of course its valve need to be open too. And when it reached dock it stops there for a while. It seems that it reaction can only occur when docked.<br><br>Sadly it seems that without reagent it not going to do anything anyway.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Proceed only after reading lore above. Machines are quite complicated.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Pondering about ways of obtaining Water.",
			"duration": 7000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "machineThresholdAmount-0.2",
		"chainedMessageDelay": 50
	},
	"machineThresholdAmount-0.2" : {
		"flush" : true,
		"loreText" : "I think I came up with a way of manually forcing reaction using my glove without the use of reagent.<br><br>It's going to be inefficient, but I can turn 4 Earth inside Liquefier into some Water by clicking Water Orb.",
		"loreFreezeDuration": 16000,
		"gameplayText" : "Try to fill Water Orb after Liquefier fills up.",
		"gameplayFreezeDuration": 16000,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockElement1"
	},
	"machineThresholdAmount-1" : {
		"loreText" : "<br>Boiler requires Fire to run, but my manual method should still be viable. 4 Water in Boiler will turn into some Air.",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"machineThresholdAmount-2" : {
		"loreText" : "<br>It seems that the end of manual grind is near. 4 Air in Combustor will turn into some Fire.",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"machineActivated0" : {
		"loreText" : "<br>Yes! It works! Now I can accumulate Water with 100% machine's efficiency. 4 Earth and 1 Water => 4 Water means that overall I lose some quantity.<br>But with increased supply of Water I can start thinking about upgrading Liquefier and working towards next Orb",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": 1,
		
		"firstActiveElement" : "none"
	}
};
/*
sendMessage(6,"For the whole time I thought it was a decoration. Volcano made with brass alloys. It's machine.<br>
If I upgrade Reaction Catalyst once more I should be able to make positive feedback loop to multiply my Earth supply.");


	sendMessage(12,);
*/
