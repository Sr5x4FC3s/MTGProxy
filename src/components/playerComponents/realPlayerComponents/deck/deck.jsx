import React from 'react';
import Scry from './scry.jsx';
import Surveil from './surveil.jsx';

const Deck = (props) => {
  console.log('deck', props);
  let deckList = props.state.passedState.list;
  return (
    <div>
      <Scry />
      <Surveil />
    </div>
  )
};

export default Deck;