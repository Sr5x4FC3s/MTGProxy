import React from 'react';

const DrawCards = (props) => {
  return (
    <div id="draw-cards-container">
    {props.props.state.initialHand ?
      (
        <button id="draw-initial-hand-button" onClick={props.draw}>Draw Hand</button>
      )
      :
      (
        <button id="draw-cards-button" onClick={props.draw}>Draw Cards</button>
      )
    }
    </div>
  )
}

export default DrawCards;