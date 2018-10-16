import React from 'react';

const DeckCounter = (props) => {
  let deckCount = props.deckList.currentDeck.length;
  
  return (
    <div className="deck-counter">{props.deckList.deckCount}</div>
  )
}

export default DeckCounter;