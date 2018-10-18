import React from 'react';

const Mulligan = (props) => {
  //conditional render based on whether removeMulligan in state is true or false

  //add feature - if card is played, mulligan button is also removed
  return (
    <div id="mulligan-container">
      {!props.props.state.removeMulligan ? (
          <button id="mulligan-hand" onClick={props.draw}>Mulligan</button>
        ) : (
          null
        )
      }
    </div>
  )
}

export default Mulligan;