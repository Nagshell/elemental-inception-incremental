var jsonMessages = {
	"tutorialMessage" : {
		"flush" : "if flush is set to true, message will clear chatbox before adding it's content and reset chatTrimmer delays",
		
		"loreText" : "what will be added to current content of respective chatbox (after flushing)",
		"loreFreezeDuration": "period of time in ms during which chatTrimmer won't touch the respective chatbox. Negative values permamently disable chatTrimmer (until the next message)",
		"gameplayText" : "same as above",
		"gameplayFreezeDuration": "same as above",
		
		"activeElements" : "gameplay and chatTrimmer are frozen until all active elements are completed",
		"firstActiveElement" : "button/progressBar/none - which element is activated first",
		"progressBar" : {
			"barText": "text appearing on bar",
			"duration": "duration in ms of progress bar",
		},
		"buttonAvailable": "if this is set to true, it will make the button visible and clickable a single time",
		
		"chainedMessage": "if this exists, then after this message is complete, the next message will fire instead of resuming gameplay",
		"chainedMessageDelay": "delay between the finish of this message and the firing of the next - gameplay is still paused, but chatTrimmer is not",
		
		"eventId": "id of an event that will fire as soon as this message appears"
	},
	"outro0" : {
		"flush" : true,
		"loreText" : "Legends say that the knowledge possessed by the Alchemists came from combining four Elements together.",
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
		"loreText" : "So my plan at first was to touch every Orb at the same time. Technically the Glove can only hold a single element, but this way I will connect to all the elements at the same time. I tried it before, but it was a complete failure, the interactions between the elements caused all the Orbs to empty themselves.",
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
		"loreText" : "But now they aren't really Orbs anymore. I removed all four Golems from their pedestals and put them in a small circle.",
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
		"loreText" : "Blinding light. Vision. Old person running towards me. Loud shout, piercing every iota of my being.",
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
		"loreText" : "\"Thou shalt not meddle with the Elements! What have you done?! Go back to where you came from, and never do this again!\"",
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
		"loreText" : "Darkness. Quiet and comforting darkness.",
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
		"loreText" : "I slowly awoke. By the look of the walls around me, I was still in attic of my old family house. Everything in the room that wasn't bolted down is gone! What happened? What happened?!",
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
		"loreText" : "Nothing.<br>I don't remember what happened after hearing that shout.<br>I might not remember, but I'm certain at least one thing changed.<br>The Elemental Glove I used is now fused with my whole arm. It seems that I cannot take it off...I...I don't need to take it off. I think I can use it to go back there. To find out what lies on the other side.",
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
		"loreText" : "Wait, no... I try to stop my racing thoughts and focus on my goal. I have to go see my father! He's the whole reason I was able to get as far as I have in life. I can't leave him now while he's at his weakest. I need to go. I need to move. Why can't I move?!",
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
		"loreText" : "After what felt like an eternity, I saw a small twitch in my left thumb. I think I'll be alright. I just need few minutes to recover, and then I'll head out.",
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
		"loreText" : "Thank you for playing the intro stage of my game. \\('_' ) <br><br> You can always refresh this page to reset.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "theEnd"
	},
	"intro0" : {
		"flush" : true,
		"loreText" : "Welcome to the prototype of \"I didn't decide on the name yet Elements\".<br><br>Currently only the first stage is available, which is slightly more than just a tutorial and slightly less than when an incremental would be called \"road to first reset\".<br><br>I'd love to hear any feedback from you, either as a forum comment, direct message or email.<br><br>If you leave the game running in an inactive window it'll accumulate time, which can then be used later to speed up the speed of gameplay by 3x.",
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
		"loreText" : "A few words about this message box: when something appears here it'll most often freeze gameplay.<br><br>This box mostly contains lore, while the small box below mostly contains gameplay tips or the action that will be activated with the button click.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Sometimes after pressing the button, you'll have to wait for the associated action to complete.",
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
		"gameplayText" : "Other times you'll have to first wait, and then press the button to continue the story.",
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
		"loreText" : "My teacher told me a story about the Elements.<br><br>Legend says that long ago, there was a wise Alchemist that had mastered all the powers of the world as we know it.",
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
		"loreText" : "He was able to control all the elements and change the properties of matter at will, creating mountains of gold, and much more. <br><br>\"Eh, fairy tales...\" - you think to yourself.",
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
		"loreText" : "But now that my father has fallen deathly ill, that story has transformed into my only hope.",
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
		"loreText" : "I don't want to become a god. Well...I wouldn't say no if the possibility came up.<br><br> But right now I just want to help my father. Maybe researching the mystic art of the Elements will lead me to the discovery of an unknown medicine that could cure him. ",
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
		"loreText" : "Doctors give him no more than a month.<br><br>So I don't have too much time. Armed with all the motivation I could muster, I made my way towards the * Library.",
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
		"loreText" : "Legend says that the Alchemist's knowledge came from combining the four Elements together.<br><br>So I figure that's where I should start. For many, manipulating the elements is just like a hobby. Most \"Elementalists\", as they like to call themselves, just sit in their little studies and create floating lights, and other decorative (and useless) baubles.",
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
		"loreText" : "After few days of intense study in the library, I begin to understand the basics. It seems that before you can start experimenting you need to have an Elemental Glove.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Begin your search",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Searching the nearby shops. It shouldn't be too hard to find...",
			"duration": 5000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "intro10",
		"chainedMessageDelay": 50
	},
	"intro10" : {
		"flush" : true,
		"loreText" : "I found a Glove at affordable price in a toy store of all places. People don't seem to think very highly of them. I hope that I'll be able to put it to better use than most.<br><br>By itself the Glove is relatively useless though.",
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
		"loreText" : "Now that I have the Glove, I turned my attention to the other components I'll need. They're called Elemental Orbs. An Orb is required so that the Elements can hold their form correctly. An additional benefit of Orbs is their safety. Thanks to a small crystal inside each Orb, the orb can compress the Element into a much denser form, and safely redirect any potential overflow into the void.<br><br>Luckily, I remember that my grandmother used to play with a an old set of orbs.  After digging around in the attic of my house for a hour or two, I find grandma's old set of orbs.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Place the Orbs on their pedestals and make some space for experiments.",
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
		"loreText" : "How can I describe it? Rusted pedestals...broken pipes...it's a mess on top of an even bigger mess. At least the compression crystals seem to be in working condition. This should be enough to start studying. <br><br>And so my work began within this tiny, littered room. I quickly I ran into my first large obstacle - the Elemental Glove can only handle a single Element at a time.",
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
		"loreText" : "How am I supposed to combine four Orbs together then?<br>It also seems that the Orbs are disabled until they've been infused with a bit of their Element. This create a base for that Element, enabling full functionality of the Orb. Once an Orb is activated, it can be manipulated with pipes and valves. It seems that grandma also had some simple machinery set up around the room, but everything has since crumbled to pieces with age.",
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
		"loreText" : "Usually when two Elements are combined in one container, they combine and dissapear in a small flash of light. This seems like a good place to start experimenting. Maybe if I try mixing two elements in larger doses, they'll behave differently?<br>Well, it's time to get my hands dirty. Book theory is one thing, the real world is another. I need to activate these Orbs.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Begin the experiment.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro15",
		"chainedMessageDelay": 50
	},
	"intro15" : {
		"flush" : true,
		"loreText" : "I think I can fill the Earth Orb, using random debris littering the floor.<br><br>I decided to only interact with the Orbs slowly. I don't want to destroy them by putting elements into them too quickly.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Below each Orbs is an indicator. You can only click on an Orb when it's fully green.",
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
		"loreText" : "I...I...I think I messed up. Nothing I've ever read said that there was a limit to how much of an element you could compress into an Elemental Orb. The Orb was supposed to condense the Element and transfer any excess to another plane of existence.<br><br>But that's not what happened. There was a big implosion inside the Elemental Orb and the huge wave of unleashed Elements sent me flying across the room.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "progressBar",
		"progressBar" : {
			"barText": "Pulling myself out of the human shaped hole in the wall.",
			"duration": 25000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset1",
		"chainedMessageDelay": 50
	},
	"reset1" : {
		"flush" : true,
		"loreText" : "After pulling myself out of the new hole in my wall, I take a quick inventory of myself and confirm that my body isn't missing any pieces.<br>Every bit of Element inside the Orbs has disappeared. I'm crushed - I worked hard to collect all those elements, and now they're gone.<br>The machines seem to be fine, but the crystals exploding damaged the storage tanks. I guess I'll need to rebuild the tanks again.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Clean up, and put everything back in place.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "reset1.1",
		"chainedMessageDelay": 50
	},
	"reset1.1" : {
		"flush" : true,
		"loreText" : "Now, as for the Crystals inside Orbs themselves. Hm... Strange. The crystal bases remained intact, but the compression crystals inside the orb are vibrating at a very high rate. I need to hurry and repair my machinery so I can test this crystal out.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Repair the damaged components and put everything back in its place.",
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
		"loreText" : "Alright, the whole setup seems to be back in working order. I'll start filling Orbs again. It seems there's more to these orbs than first appeared.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Begin filling the Orbs again.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent1"
	},
	"reset3" : {
		"flush" : true,
		"loreText" : "Another implosion, luckily this time I was out of the room when it happened. I ran back into the room, expecting to find everything destroyed.<br><br>Instead, I found that the Vibrating crystal had transformed. I've never read anything like this in any book. The Orb still holds Elements like before, but the compression crystal has grown ten-fold. I wonder what will happen when if I fill the orb again. I need to do few adjustments and then I'll let the machines run again.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Put the transformed Orb back on the pedestal and start filling it with its Element.",
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
		"loreText" : "The expanded Crystal lit up for a split-second, then started generating its Element by itself. Did I just reverse the overflow process!? I still wonder what will happen if I fill the orb to the point of implosion again...",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Try to fill the expanded crystal Orb.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent2"
	},
	"reset5" : {
		"flush" : true,
		"loreText" : "Another Orb just imploded, but it took noticeably longer this time. I have no idea what that means, so I just have to keep going. I don't have any other ideas.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Thankfully I had made some preparations so I was unharmed this time.",
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
		"loreText" : "Thankfully, I had piled debris around the Orbs to form a makeshift blast shield, so the implosion didn't cause as much damage as before. Thanks to that, repairs took me far less time than before.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Fill the expanded crystal Orb.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent1"
	},
	"reset7" : {
		"flush" : true,
		"loreText" : "I thought I had only begun to scratch the capacity of the new Orb, but it seems the expanding crystal had a reverse effect on the Orb's capacity. This time the overflow did not cause an implosion, but caused the compression crystal to fully merge with the Orb itself.<br>I need to test my newest accidental creation.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Test the transformed Orb in a safe environment.",
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
		"loreText" : "Are those...eyes? The Orb has begun to gradually change its shape. It now looks more like a tear, and the Element inside swirls about in two small orbs.<br>I feel like the eyes are looking at me. I feel...strange about it. Anyway, it seems that the insides of the Orb are fully connected to another plane of existance, and as a result, they're able to channel insane amounts of Elements each way. The Orb's output pipes instantly fill any container I connect up to it. Well, that's certainly helpful!",
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
		"loreText" : "The tests are complete. I feel I should try to turn rest of the Orbs into this new entity. I've decided to call it \"Golem\". Time to start up the machines once again.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Overflow one of the remaining Orbs",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"reset10" : {
		"flush" : true,
		"loreText" : "Another Orb has transformed into a Golem. I need to keep doing this with the remaining Orbs.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Overflow yet another one of the remaining Orbs",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"reset11" : {
		"flush" : true,
		"loreText" : "I've transformed each Orb into a Golem. It's time.",
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
		"loreText" : "<br><br><br>You know, before this, I had tried fishing. Didn't go swimmingly well.<br>Who would've known that you can't find undiscovered medicine on at the bottom of a river.",
		"loreFreezeDuration": 35000,
		"gameplayText" : "",
		"gameplayFreezeDuration": 0,
		
		"firstActiveElement" : "none"
	},
	"base0" : {
		"flush" : true,
		"loreText" : "The base of the Earth Orb has been loaded. Now I can truly start filling the orb with Earth.",
		"loreFreezeDuration": 1000,
		"gameplayText" : "The first upgrade has appeared at the bottom of this page.",
		"gameplayFreezeDuration": 1000,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"base1" : {
		"flush" : true,
		"loreText" : "The base of the Water Orb's base is loaded. I should be able to use the full potential of the Liquefier now.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "Fully fill the Liquefier's reagent tank",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"base2" : {
		"flush" : true,
		"loreText" : "The air Orb is online.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"base3" : {
		"flush" : true,
		"loreText" : "Now the Fire Orb is activated. With power of Fire available, all the machines should be able to work automatically at long last.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"elementGathered0" : {
		"flush" : true,
		"loreText" : "Now that I have an increasing supply of Earth, I should start thinking about activating another Orb. <br><br>Under some rotten sheets near the Orbs I found something labelled \"Liquefier\". It's slightly damaged, but I think I can get it working.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "Setup Liquefier on docking station.",
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
		"loreText" : "The Liquefier's ready.<br>I should open the input valve and hopefully Earth element should start flowing into it.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine0"
	},
	"elementGathered2" : {
		"flush" : true,
		"loreText" : "With the slow, but steady stream of Air now available, a few other machine upgrades have become available.<br><br>I've also found parts of another machine, but over half of it seems to be missing. I think I should be able to find parts to repair it.",
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
		"loreText" : "And another machine is ready! After digging through my father's workshop, I found replacement parts that seem to be good enough.<br><br> With the  combustor, I'll be able to produce Fire. Soon I'll have all the missing reagents that my machines need.",
		"loreFreezeDuration": 8000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine2"
	},
	"elementGathered3" : {
		"flush" : true,
		"loreText" : "Finally finished, I put the new Reaction Catalyst in the center of the room - It seems that the fire inside it increases the efficiency of reactions in the machines.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"upgradeBought0" : {
		"loreText" : "<br>Now I don't need to fill Earth manually. That's a relief.",
		"loreFreezeDuration": 5000,
		"gameplayText" : " | The autoclicker will get slightly better as the game progresses",
		"gameplayFreezeDuration": 5000,
		
		"firstActiveElement" : "none"
	},
	"upgradeBought2" : {
		"flush" : true,
		"loreText" : "While I was tinkering with the reaction regulators, I noticed two halves of another broken machine in a pile in the corner.  I'm pretty sure that with some of the spare parts lying around I can fix it.",
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
		"loreText" : "The boiler is ready! I'll help me to create Air. Sadly to automate the reaction I need Fire, so until I get some Fire, I'll only be able to run the machine manually.",
		"loreFreezeDuration": 9000,
		"gameplayText" : "Fill Boiler with Water.",
		"gameplayFreezeDuration": 16000,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine2"
	},
	"upgradeBought13" : {
		"flush" : true,
		"loreText" : "For the longest time I thought that this small brass volcano was a decoration, not a machine.<br>If I upgrade the Reaction Catalyst once more I should be able to create a positive feedback loop to increase my supply of Earth.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "I suggest getting the next reaction catalyst upgrade before installing the volcano.",
		"gameplayFreezeDuration": 15000,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"upgradeBought24" : {
		"flush" : true,
		"loreText" : "After the sub-space breakthrough, my supply of elements has increase drastically. With the sheer amount of Elements I have available, I've had the interesting idea of trying to create my own compression crystals.",
		"loreFreezeDuration": 25000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"machineThresholdAmount-0" : {
		"flush" : true,
		"loreText" : "I realized few things about the Liquefier. Once Earth started flowing into its internal tank, the machine started moving the orbs around the room on a circular track.<br><br> While an Orb is moving, it it's filled with the required Element from the pipes above. Of course valves need to be opened as well. when an orb reaches the dock, it pauses there for a short while before continuing on. It seems that a reaction can only occur when the orb is docked.<br><br>Sadly it seems that without reagents it's not going to do anything anyway.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Proceed only after reading the lore above. These machines are quite complicated.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Thinking about ways to obtain Water.",
			"duration": 7000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "machineThresholdAmount-0.2",
		"chainedMessageDelay": 50
	},
	"machineThresholdAmount-0.2" : {
		"flush" : true,
		"loreText" : "I think I've come up with a way of manually forcing the reaction to occur without reagent using my glove.<br><br>It's not going to be efficient, but I can use the Liquefier to turn Earth into some Water by clicking the Water Orb.",
		"loreFreezeDuration": 16000,
		"gameplayText" : "Try to fill the Water Orb after the Liquefier fills up.",
		"gameplayFreezeDuration": 16000,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockElement1"
	},
	"machineThresholdAmount-1" : {
		"loreText" : "<br>The Boiler requires Fire to run, but I should still be able to run it manually.  The Boiler will turn Water into Air.",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"machineThresholdAmount-2" : {
		"loreText" : "<br>It seems that the end of my manual labor is nearing. The Combustor will turn Air into Fire.",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"machineActivated0" : {
		"loreText" : "<br>Yes! It works! Now I can accumulate Water with 100% efficiency. Being able to transmutie Earth -> Water means that I can start thinking about upgrading the Liquefier and working towards the next Orb",
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
