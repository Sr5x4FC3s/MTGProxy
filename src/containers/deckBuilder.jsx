import React, { Component } from "react";

export default class DeckBuilder extends Component {
  
  handleChange() {
    console.log('hello');
  }

  render() {
    return (
      <div id="deckBuilder">
        This is the deck builder page.
        <div>
          <form id="deck-builder-form">
            <label>
              Input Card Names (Separate them by commas if you wish to enter more than one card at a time)
            </label>
            <br></br><br></br>
            <input type="submit" value="Submit Cards"/>
          </form>
          <textarea 
            id="deck-entry"
            form="deck-builder-form">
            Enter Deck Information
          </textarea>
        </div>
        <br></br><br></br><br></br>
        <div>
          <ul>
            <li>card1</li>
            <li>card2</li>
            <li>card3</li>
            <li>card4</li>
          </ul>
        </div>
      </div>
    );
  }
}