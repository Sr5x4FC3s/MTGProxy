import React from 'react';

const Mulligan = (props) => {
  return (
    <div id="mulligan-container">
      <button id="mulligan-hand" onClick={() => {alert('just kidding')}}>Mulligan</button>
    </div>
  )
}

export default Mulligan;