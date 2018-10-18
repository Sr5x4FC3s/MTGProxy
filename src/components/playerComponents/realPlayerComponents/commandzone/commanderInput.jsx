import React from 'react';

const CommanderInput = (props) => {
  //conditional renders based on whether is a img value or not
  return (
    <div id="commander-input-container">
      {props.props.state.commanderImageUrl === null ? (
        <form id="commander-input-form">
          <input id="commander-input-field"
            form="commander-input-form"
            placeholder="Enter Commander Name"
            onChange={props.props.input}></input>
          <input type="submit" value="Add" onClick={props.props.submit}></input>
        </form>
        ) : (
          null
        )
      }
    </div>
  )
};

export default CommanderInput;