import React from 'react';
import DrawCards from './drawCards.jsx'; 
import Mulligan from './mulligan.jsx';

const Hand = (props) => {
  console.log('hand', props);
  let deckList = props.state.passedState.list;
  return (
    <div id="hand-container">
      <DrawCards />
      <Mulligan />
    </div>
  )
};

export default Hand;