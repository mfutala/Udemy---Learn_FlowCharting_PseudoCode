/*
Standard deck of 52 cards that have been shuffled and mixed. 

- Sort the cards by suit Ace - King

Method - first get all the cards grouped by suit and then sort them by value

create variables(array) to hold suits
	- Clubs
  - Spades
  - Hearts
  - Diamonds
 
 Create Variables to examin cards
 	- currentCard = ""
  - cardCount = 0
 
 Enter while loop {
   if card_count <= 52 else exit
   read card  
   currentCard === Clubs - add to clubs array
   currentCard === Spades - add to spades array
   currentCard === Hearts - add to hearts array
   currentCard === diamonds - add to diamonds array
   cardCount +=1
   next card 
   
  } // cards are now in each suit array
 
sort arrays 
temp = '';
index = 0;
index <= array.length 
  if clubs[index] > clubs[index + 1] 
    temp = clubs[index]
    clubs[index] = clubs[index +1]
    clubs[index +1] = temp
    index +=1

*/

let deck = {
  cards: {
    11: 'Ace',
    1: 'One'

  },
  suits: {
    'Spades': 'spades',
    'Hearts': 'Hearts',
    'Diamonds': 'Diamonds',
    'Clubs': 'Clubs'

  }
}

let card = deck.cards; 
let suit = deck.suits;
let hand = Object.assign(card, suit)

console.log(hand)