import React from 'react';

const DrawCards = (props) => {
  return (
    <div id="draw-cards-container">
      <button id="draw-cards-hand" onClick={() => {alert('its time to duel')}}>Draw Cards</button>
    </div>
  )
}

export default DrawCards;