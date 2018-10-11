import React from 'react';
import { Link } from 'react-router-dom';

const DeckPlayerButtons = (props) => {
  return (
    <div>
      <div>
        <button id="deck-list-button" onClick={props.handleToggleDeckList}>Show Decks</button>
      </div>
      <div>
        <button id="deck-selector-button" onClick={props.handleToggleSelectDeck}>Select Deck</button>
      </div> 
      <div>
        <button id="virtual-player-button"><Link to="/dp/virtualplayer">Virtual PLayer</Link></button>
      </div>
      <div>
        <button id="real-player-button"><Link to="/dp/realplayer">Real Player</Link></button>
      </div>
    </div>
  )
}

export default DeckPlayerButtons;