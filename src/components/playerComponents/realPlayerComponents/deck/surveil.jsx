import React from 'react';

const Surveil = (props) => {
  return (
    <div id="surveil-container">
      <button id="surveil-deck" onClick={() => {alert('surveil')}}>Surveil</button>
    </div>
  )
}

export default Surveil;