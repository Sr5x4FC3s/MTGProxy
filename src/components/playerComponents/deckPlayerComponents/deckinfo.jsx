import React from 'react';

import InfoButtons from './infoButtons.jsx';

const DeckInfo = (props) => {
  let deckInfo = props.state.selectedDeckInfo;
  return (
    <div>
      <div>Deck Name: {deckInfo.name}</div>
      <div>Deck List: {deckInfo.list}</div>
      <div>Play Type: {deckInfo.type}</div>
      <InfoButtons select={props.select} close={props.close}/>
    </div>
  )
}

export default DeckInfo;