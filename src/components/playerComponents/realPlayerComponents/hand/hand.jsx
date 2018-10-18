import React from 'react';
import DrawCards from './drawCards.jsx'; 
import Mulligan from './mulligan.jsx';
import RenderHand from './renderHand.jsx';

const Hand = (props) => {
  console.log('hand', props);
  let deckList = props.state.passedState.list;
  return (
    <div id="hand-container">
      <DrawCards draw={props.draw} props={props}/>
      <Mulligan draw={props.draw} props={props}/>
      <RenderHand props={props}/>
    </div>
  )
};

export default Hand;