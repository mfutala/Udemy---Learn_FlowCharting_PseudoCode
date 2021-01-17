

const prompt = require('prompt-sync')();

class Deck{
  constructor(){
    //this.deck = [];
    this.reset();
    this.shuffle();
    this.length = 52;
    
  }
  

  reset(){
    this.deck = [];
    this.length = 52;
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);

      }
    }
  
  }

  shuffle(){
    const { deck } = this;
    let m = deck.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal(){
    this.length = this.length - 1;
    return this.deck.pop();
  }
  

  
} // end of class

// =================================================================

//(Math.random() * 52 | 0) + 1

let regex = /\d+|king|Ace|Queen|Jack/gi;
const deck = new Deck();
let totalScore = 0;
let cardArray = [];
let playerHand = '';
let dealerHand = '';
let currentScore = 0;
let play = 'n';
let anotherCard = 'n';
let playerScore = 0;
let dealerScore = 0;

function handScore(thePlayer,value) {
  
  //console.log(thePlayer);
  //cardArray = [];
  return value.match(regex).reduce((accum, num) => {
    
  switch(num) {
    case 'Ace': totalScore <= 10 ? num = 11 : num = 1;
        break;
    case 'King': 
    case 'Queen': 
    case 'Jack': num = 10;
        break;
    default: num = parseInt(num);
  }

  return accum += num;
  
  },0);
};

  play = prompt("\nDo you want to play new game? ");

  //console.log(`\nThere are ${deck.length} cards in the deck`);

while (play === 'y') {
  if(deck.length <=26) {
    deck.reset();
    deck.shuffle();
  }
  cardArray.length = 0;
 

 [1,2].forEach(i => playerHand += deck.deal() + ' ');
 [1,2].forEach(i => dealerHand += deck.deal() + ' ');
    console.log(`Dealer has ${dealerHand}`);
    console.log(`Player has ${playerHand}`);
    console.log(`Your score is ${handScore('player', playerHand)}`)
    anotherCard = prompt('Do you want antother card ? ')
 
  while(anotherCard === 'y') {
    
    playerHand += deck.deal() + ' ';
    console.log(playerHand);
    console.log(`Your score is ${playerScore}`)
     if(playerScore > 21) {
      // console.log(cardArray);
    console.log("You Bust!!");
    anotherCard = 'n';
    playerHand = '';
    } else {
      anotherCard = prompt('\nDo you want antother card ? ')
    }
  } 

  console.log(`\nYour final score is ${playerScore}`);

  



  playerHand = '';
  play = prompt("\nDo you want to play new game? "); 
  
}
