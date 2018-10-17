import React from 'react';

const Scry = (props) => {
  return (
    <div id="scry-container">
      <button id="scry-deck" onClick={() => {alert('scry cards')}}>Scry</button>
    </div>
  )
}

export default Scry;