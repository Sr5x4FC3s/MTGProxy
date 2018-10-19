import React from 'react';
import RenderExile from './renderExile.jsx';

const Exiled = (props) => {
  return (
    <div>
      <h5>Exiled</h5>
      <RenderExile props={props}/>
    </div>
  )
};

export default Exiled;