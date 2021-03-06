import React from 'react';
import DropDownSearch from './dropDownSearch.jsx';

const InputField = (props) => {
  return (
    <div>
      <form id="deck-builder-form">
        <label>
          Input Card Names (Separate them by colons if you wish to enter more than one card at a time)
        </label>
        <br></br><br></br>
        <textarea 
          id="deck-entry"
          form="deck-builder-form"
          placeholder="Enter Deck Information"
          style={{position: 'relative', width : '50%', height : '400px'}}
          onChange={props.handleChange}>
        </textarea>
        <br></br><br></br>
        <input type="submit" value="Add Cards" onClick={props.onSubmit}/>
        <input type="button" value="Clear" onClick={() => { document.getElementById('deck-builder-form').reset() }}></input>
        {/* <a id="toggle-search" onClick={() => {alert('hello')}}>Have a card you couldn't find?</a> */}
      </form>
      <br></br>
      <DropDownSearch save={props.saveSelectedCard}/>
    </div>
  )
};

export default InputField;