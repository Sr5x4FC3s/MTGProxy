import React from 'react';

const Mulligan = (props) => {
  return (
    <div id="mulligan-container">
      <button id="mulligan-hand" onClick={props.draw}>Mulligan</button>
    </div>
  )
}

export default Mulligan;