import React from 'react';
import { convertString } from '../../../helperFunctions/clientHelperFunctions/helper.js';


const DeckCounter = (props) => {
  let deckCount = convertString(props.deckList.deckList).length;

  return (
    <div className="deck-counter">{deckCount}</div>
  )
}

export default DeckCounter;