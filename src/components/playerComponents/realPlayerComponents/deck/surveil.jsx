import React from 'react';

const Surveil = (props) => {
  return (
    <div id="surveil-container">
      <button id="surveil-deck" onClick={() => {alert('surveil')}}>Mulligan</button>
    </div>
  )
}

export default Surveil;