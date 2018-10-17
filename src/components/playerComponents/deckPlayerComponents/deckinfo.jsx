import React from 'react';

import InfoButtons from './infoButtons.jsx';
import CardList from './cardList.jsx';

const DeckInfo = (props) => {
  let deckInfo = props.state.selectedDeckInfo;
  let cardsContained = props.state.selectedDeckInfo.list;
  return (
    <div>
      <div>Deck Name: {deckInfo.name}</div>
      <CardList deckInfo={cardsContained}/> 
      <div>Play Type: {deckInfo.type}</div>
      <InfoButtons select={props.select} close={props.close}/>
    </div>
  )
}

export default DeckInfo;