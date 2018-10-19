//will create a new array of card info based on cards in state
const cardInformationSorter = (cards, info) => {
  if (cards !== null && info !== null) {
    let currentHand = cards.slice();
    let currentInfo = info.slice();
    let arrayHandInfo = [];

    for (let j = 0; j < currentHand.length; j++) {
      for (let i = 0; i < currentInfo.length; i++) {
        if (currentHand[j].toLowerCase() === currentInfo[i].name.toLowerCase()) {
          arrayHandInfo.push(currentInfo[i]);
          break;
        }
      }
    }
    return arrayHandInfo;
  }
}

//draw cards 
const drawCards = (deckHand, count) => {
  //object shape {hand: [], deck: []}
  let initialHand = deckHand.hand.slice();
  let initialDeck = deckHand.deck.slice();

  let currentObject = {
    hand: initialHand,
    deck: initialDeck
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
  let copyOriginal = deckArray.slice();
  let shuffledDeck = [];

  while (copyOriginal.length > 1) {
    let generatedIndex = generateRandom(copyOriginal);
    shuffledDeck.push(copyOriginal[generatedIndex]);
    copyOriginal.splice(generatedIndex, 1); //remove one element starting from index generatedIndex
  }

  if (copyOriginal.length === 1) {
    shuffledDeck.push(copyOriginal[0]);
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

//move card top card to the bottom of the library 
const toBottom = (deck) => {
  let indexZero = deck.shift();
  deck.push(indexZero);
  return deck;
};

//remove choose card (example: surveil 2, remove a card from the surveil returned array, remove that card from the deck)
const removeCard = (deck, index) => {
  //surveil cards returned array share the same index has the deck since 
  //cards are drawn from the top. if a card is to be removed,
  //splice card from index and return the deck ::: removed card needs to be inserted into the graveyard
  let removeCard = deck.splice(index, 1);
  return deck;
};

//play a card
const cardAction = (hand, cardName) => {
  let currentHand = hand.slice();

  for (let i = 0; i < hand.length; i++) {
    if (currentHand[i].toLowerCase() === cardName.toLowerCase()) {
      currentHand.splice(i, 1);
      break;
    }
  }
  return currentHand;
};

//add card to a field
const card2Destination = (fieldarray, card) => {
  let field = [];
  if (fieldarray === null) {
    field.push(card);
    return field;
  } else {
    fieldarray.push(card);
    return fieldarray;
  }
};

//shuffle card into deck 
const shuffleCard2Deck = (deck, targetCard) => {
  let currentDeck = deck.slice();
  currentDeck.push(targetCard);
  let shuffledDeck = shuffleDeck(currentDeck);
  return shuffledDeck;
}

module.exports = {
  sorter: cardInformationSorter,
  draw: drawCards,
  shuffle: shuffleDeck,
  mill: mill,
  search: searchLibrary,
  scrySurveil: scrySurveil,
  toBottom: toBottom,
  removeCard: removeCard, 
  cardAction: cardAction,
  card2Destination: card2Destination,
  shuffleCard2Deck: shuffleCard2Deck
};