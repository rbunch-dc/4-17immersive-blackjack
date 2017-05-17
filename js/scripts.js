$(document).ready(function(){
	// console.log("Sanity Check")

	/////////////////////////
	//////MAIN VARIABLES/////
	/////////////////////////
	// A fresh, perfect ordered deck of cards
	const freshDeck = createDeck();
	// We will keep all player/dealer cards in this array
	var playersHand = [];
	var dealersHand = [];
	var theDeck = freshDeck.slice();

	/////////////////////////
	//////EVENT HANDLERS/////
	/////////////////////////
	$('.deal-button').click(function(){
		// The deal stuff happens here...
		// Here, theDeck is still a copy of freshDeck
		shuffleDeck();
		// Here, theDeck is shuffled, no longer in order of freshDeck
		// console.log(theDeck);
		// console.log(freshDeck);

		// We have a shuffled deck, add the 1 and 3rd card to the playersHand and the DOM
		// Do the same for the dealer
		playersHand.push(theDeck.shift()); //Remove top card from theDeck and give to player
		dealersHand.push(theDeck.shift()); //Remove (next) top card and give to dealer
		playersHand.push(theDeck.shift()); //Remove (next) top card and give to player
		dealersHand.push(theDeck.shift()); //Remove (next) top card and give to dealer

		// Chnage the DOM to add teh images
		// placeCard(DoM name of who, card-X for slot, card value to send)
		placeCard('player',1,playersHand[0]);
		placeCard('player',2,playersHand[1]);

		placeCard('dealer',1,dealersHand[0]);
		placeCard('dealer',2,dealersHand[1]);

	});

	$('.hit-button').click(function(){
		// Hit functionallity...
	});

	$('.stand-button').click(function(){
		// On click stand...
	});

	/////////////////////////////////////////////////
	//////////////UTILITY FUNCTIONS//////////////////
	/////////////////////////////////////////////////
	function placeCard(who, where, what){
		// Find the DOM element, based on the args, that we want to change
		// i.e., find the element that we want to put the image in
		var slotForCard = '.' + who + '-cards .card-' + where; 
		// console.log(slotForCard);
		imageTag = '<img src="images/cards/'+what+'.png">';
		$(slotForCard).html(imageTag)
	}


	function createDeck(){
		var newDeck = [];
		// Two loops, one for suit, one for card value
		var suits = ['h','s','d','c'];
		// Outter loop which iterates the suit/letter...
		for(let s = 0; s < suits.length; s++){
			// Inner Loop which iterates the values/Number
			for(let c = 1; c <= 13; c++){
				// Push onto newDeck array, the value[c] + suit[s]
				newDeck.push(c+suits[s]);
				// s = 0, c = 1
				// s = 0, c = 2
				// s = 0, c = 3...
				// s = 0, c = 13

				// s = 1, c = 1
				// s = 1, c = 2
				// s = 1, c = 3 ...
				// s = 1, c = 13

				// s = 2, c = 1
			}
		}
		return newDeck;
	}

	function shuffleDeck(){
		// Swap 2 elements in the array many, many times to shuffle.
		for(let i = 0; i < 14000; i++){
			var random1 = Math.floor(Math.random() * 52);
			var random2 = Math.floor(Math.random() * 52);
			// Store in temp, the value at index random1, in array theDeck (for later)
			var temp = theDeck[random1];
			// Overwrite what's at index random1 with what's at index random2
			theDeck[random1] = theDeck[random2];
			// Overwrite what's at index random2 with what's in temp
			theDeck[random2] = temp;
		}
	}
});


