class Card { // class for the cards 
    constructor(suit, face, value){
        this.suit = suit;
        this.face = face;
        this.value = value;
    }
 
    }

class Player { // class for the players 
    constructor() {
        this.hand = []; 
        this.points = 0; 
    }
  
}
let player1 = new Player();
let player2 = new Player();


const deckOfCards = []; // empty array for the deck of cards to push the new cards to 
const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']; // array for the suits 
const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']; // array for the face of the cards 

//create a deck... make a new card, push into deckOfCards
for (let i = 0; i < suits.length; i++){
    for (let j = 0; j < faces.length; j++){
        deckOfCards.push(new Card(suits[i], faces[j], j +2));   

        
    }
    
}
 
console.log(deckOfCards); 


 function shuffleDeck(deckOfCards){ // shuffle the deck w/ Fisher-Yates method 
      for (let i = deckOfCards.length - 1; i > 0; i--){ // loops through the array in reverse order 
        const j = Math.floor(Math.random() * (i + 1)); // generates a random index between
        [deckOfCards[i], deckOfCards[j]] = [deckOfCards[j], deckOfCards[i]]; // swaps the arrays 
      }
      
 }
 shuffleDeck(deckOfCards) // calling the shuffle deck fuction 



 
// pass shuffled cards from the beginning of the deck to the players until there are no cards left 
while (deckOfCards.length > 0){  
    player1.hand.push(deckOfCards.shift());
    player2.hand.push(deckOfCards.shift());
    }

// playing the game  
while (player1.hand.length > 0 && player2.hand.length > 0){ // playing the cards until they run out 
    const card1 = player1.hand.shift(); // creating variables for the cards in player1's hand
    const card2 = player2.hand.shift(); // creating the cards for player2's hand 
    console.log(`Player 1 has ${card1.face} of ${card1.suit}`) 
    console.log(`Player 2 has ${card2.face} of ${card2.suit}`)
    // logging both players cards to the console 
    if (card1.value > card2.value){ // if player 1's card value is greater than player 2's, the point value increases and prints to the console 
        player1.points++;
        console.log(`Player 1 wins this round with a score of ${player1.points}!`);
    } else if (card1.value < card2.value){ //  if player 2's card value is greater than player 1's, the point value increases and prints to the console
        player2.points++;
        console.log(`Player 2 wins this round with a score of ${player2.points}!`);
    } else { // if there is a tie the it will print to the console 
        console.log(`Tie!`); 
    }
}
if (player1.points > player2.points){ // if player 1 has more points than player 2, player 1 wins the game 
    console.log(`
        Player 1 wins the game with a score of ${player1.points}!`)
} else if (player1.points < player2.points){ // if player 2 has  more points than player 1, player 2 wins the game 
        console.log(`
            Player 2 wins the game with a score of ${player2.points}!`)
    } else {     // If the game is tied it will print both player's points to the console 
        console.log(`
            It's a tie! Both players scored ${player1.points && player2.points}!`) 
        
    }
