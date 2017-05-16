$(document).ready(function(){
	// console.log("Sanity Check");
	//-----------------------------
	//----Main function vars-------
	//-----------------------------
	const freshDeck = createDeck();
	var theDeck = freshDeck;
	// console.log(freshDeck);
	var playersHand = []; //same as player1Square in tic tac toe
	var dealersHand = [];	

	function createDeck(){
		// local var, newDeck. No one knows abotu this, but me (createDeck)
		var newDeck = [];
		// local var that WILL NOT be changed, no one can see it but me!
		const suits = ['h','s','d','c'];
		// loop for suits (outter loop)	
		for(let s = 0; s < suits.length; s++){
			// loop for card values (inner loop)
			for(let c = 1; c <= 13; c++){
				newDeck.push(c + suits[s]);
			}
		}
		return newDeck;
	}

	$('.deal-button').click(function(){
		console.log("User clicked Deal!!");
		theDeck = shuffleDeck();
		// the deck is now shuffled big time!
		// Update the player and dealers hand
		// The player ALWAYS gets the first card in teh deck.
		playersHand.push(theDeck.shift());
		dealersHand.push(theDeck.shift());
		playersHand.push(theDeck.shift());
		dealersHand.push(theDeck.shift());

		console.log(theDeck.length);
		placeCard('player',1,playersHand[0]);
		placeCard('dealer',1,dealersHand[0]);
		placeCard('player',2,playersHand[1]);
		placeCard('dealer',2,dealersHand[1]);

	});

	function placeCard(who,where,cardToPlace){
		var classSelector = '.' + who + '-cards .card-' + where;
		// console.log(classSelector)
		$(classSelector).html('<img src="cards/'+cardToPlace+'.png">');
	}

	var shuffleDeck = function(){
		// Loop a big number of times. 
		// Each time through, switch two elements in the array.
		// When loop is done, array will be shuffled
		for (let i = 0; i < 50000; i++){
			var randomCard1 = Math.floor(Math.random() * theDeck.length);
			var randomCard2 = Math.floor(Math.random() * theDeck.length);
			// switch theDeck[randomCard1] with theDeck[randomCard2]
			// Stash the value of theDeck[randomCard1] in temp
			// so we can get it back

			// console.log(theDeck[randomCard1])
			// console.log(theDeck[randomCard2])

			var temp = theDeck[randomCard1];
			// Now it's safe to overwrite theDeck[randomCard1]
			// because we stashed it's value in temp
			theDeck[randomCard1] = theDeck[randomCard2];
			// Now we are ready ot overwrite theDeck[randomCard2]
			// We will use theDeck[randomCard1], which we stashed in temp
			theDeck[randomCard2] = temp;

 		}
 		return theDeck;
	}

});

// This will error!!
// console.log(createDeck);