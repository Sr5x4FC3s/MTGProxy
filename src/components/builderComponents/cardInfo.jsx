import React from 'react';
import FormatLegality from './formatLegality.jsx';

const CardInfo = (props) => {
  console.log(props.state.targetCardInfo.legalities)
  return(
    <div>
      <div>Name: {props.state.targetCardInfo.name}</div>
      <div>Color: {props.state.targetCardInfo.colors}</div>
      <div>Type: {props.state.targetCardInfo.type}</div>
      <div>Mana Cost: {props.state.targetCardInfo.manaCost}</div>
      <div>Text: {props.state.targetCardInfo.text}</div>
      <div>
        <h5>Legality</h5>
        <FormatLegality props={props.state.targetCardInfo.legalities}/>
      </div>
    </div>
  )
};

export default CardInfo;