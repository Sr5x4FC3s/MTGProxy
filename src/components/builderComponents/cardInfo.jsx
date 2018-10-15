import React from 'react';
import FormatLegality from './formatLegality.jsx';

const CardInfo = (props) => {
  let colorCheck = () => {
    if (props.state.targetCardInfo.data[0].colors.length === 0) {
      return 'Colorless';
    }
  }

  return(
    <div>
      <div>Name: {props.state.targetCardInfo.data[0].name}</div>
      <div>Color: {colorCheck()}</div>
      <div>Type: {props.state.targetCardInfo.data[0].type_line}</div>
      <div>Mana Cost: {props.state.targetCardInfo.data[0].mana_cost}</div>
      <div>Text: {props.state.targetCardInfo.data[0].oracle_text}</div>
      <div>
        <h5>Legality</h5>
        <FormatLegality props={props.state.targetCardInfo.data[0].legalities}/>
      </div>
    </div>
  )
};

export default CardInfo;