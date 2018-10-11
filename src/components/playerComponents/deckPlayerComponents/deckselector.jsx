import React from 'react'

const DeckSelector = (props) => {
  return (
    <div>
      <form id="deck-selection-form">
        <input 
          id="select-deck-name"
          form="deck-selection-form"
          placeholder="Input Deck Name"
          onChange={props.input}>
        </input>
        <input type="submit" value="Find" onClick={props.findDeck}>
        </input>
      </form>
    </div>
  )
}

export default DeckSelector;