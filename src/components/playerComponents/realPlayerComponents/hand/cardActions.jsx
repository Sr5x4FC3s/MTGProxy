import React from 'react';

const CardActions = (props) => {
  return (
    <div id="card-actions-container">
      <button id="play-card-button" onClick={props.play}>Play</button>
      <button id="discard-button" onClick={props.discard}>Discard</button>
      <button id="back-into-deck-button" onClick={props.shuffle}>Back to Deck</button>
      <button id="exile-card" onClick={props.exile}>Exile</button>
    </div>
  )
};

export default CardActions;