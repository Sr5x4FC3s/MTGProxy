import React from 'react';
import RenderBattlefield from './renderBattlefield.jsx';

const BattleField = (props) => {
  return (
    <div>
      <h5>Battlefield</h5>
      <RenderBattlefield props={props}/>
    </div>
  )
};

export default BattleField;