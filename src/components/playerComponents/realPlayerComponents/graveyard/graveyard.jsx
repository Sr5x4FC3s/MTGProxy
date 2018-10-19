import React from 'react';
import RenderGraveyard from './renderGraveyard.jsx';

const Graveyard = (props) => {
  return (
    <div>
      <h5>Graveyard</h5>
      <RenderGraveyard props={props}/>
    </div>
  )
};

export default Graveyard;