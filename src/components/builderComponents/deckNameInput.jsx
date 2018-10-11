import React from 'react';

const DeckNameInput = (props) => {
  return (
    <div>
      <form id="deck-name-form">
        <label>Please enter a name of this deck</label>
        <br></br><br></br>
        <input
          id="deck-name-field"
          form="deck-name-form"
          placeholder="Enter Deck Name"
          onChange={props.form}>
        </input >
        <input
          id="deck-type-field"
          form="deck-name-form"
          placeholder="Enter Deck Type ie:Commander, Standard, ..."
          onChange={props.type}>
        </input >
        <input type="submit" value="Save" onClick={props.decksubmission}></input>
      </form>
    </div>
  )
}

export default DeckNameInput;