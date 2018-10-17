//draw cards 
const drawCards = (deckHand, count) => {
  //object shape {hand: [], deck: []}
  let currentObject = {
    hand: deckHand.hand,
    deck: deckHand.deck
  };

  for (let i = 0; i < count; i++) {
    currentObject.hand.push(currentObject.deck[i]);
  };
  currentObject.deck.splice(0, count);
  return currentObject;
};

//random function 
const generateRandom = (array) => {
  let inputMin = 0;
  let inputMax = array.length - 1;
  let min = Math.ceil(inputMin);
  let max = Math.floor(inputMax);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

//shuffle deck
const shuffleDeck = (deckArray) => {
  let shuffledDeck = [];

  while (deckArray.length > 1) {
    let generatedIndex = generateRandom(deckArray);
    shuffledDeck.push(deckArray[generatedIndex]);
    deckArray.splice(generatedIndex, 1); //remove one element starting from index generatedIndex
  }

  if (deckArray.length === 1) {
    shuffledDeck.push(deckArray[0]);
  }
  return shuffledDeck;
};

//discard/ mill cards 
const mill = (deck, count) => {
  //count is number of cards that is discarded or milled
  let currentDeck = deck.splice(0, count);
  return deck.splice(0, count);
}

//search Library
const searchLibrary = (deck, card) => {
  //card will be a string val to be removed from the deck
  for (let i = 0; i < deck.length; i++) {
    if (deck[i] === card) {
      let removedCard = deck.splice(i, 1);
    }
  }
  return deck;
}

//scry - surveil
const scrySurveil = (deck, count) => {
  //count params is the count of the scry 
  let scryCards = [];
  for (let i = 0; i < count; i++) {
    scryCards.push(deck[i]);
  }
  return scryCards;
}

//remove choose card (example: surveil 2, remove a card from the surveil returned array, remove that card from the deck)
const removeCard = (deck, index) => {
  //surveil cards returned array share the same index has the deck since 
  //cards are drawn from the top. if a card is to be removed,
  //splice card from index and return the deck ::: removed card needs to be inserted into the graveyard
  let removeCard = deck.splice(index, 1);
  return deck;
};

module.exports = {
  draw: drawCards,
  shuffle: shuffleDeck,
  mill: mill,
  search: searchLibrary
};