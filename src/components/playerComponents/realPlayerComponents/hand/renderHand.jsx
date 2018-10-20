import React from 'react';
import Image from '../enlargedImages/image.jsx';

const sort = require('../../../../../helperFunctions/clientHelperFunctions/realPlayerHelperFunctions/helper').sorter;

const RenderHand = (props) => {
  let cardsInHand = props.props.state.hand;
  let allCardInfo = props.props.state.cardInfo;
  let sortedInfo = sort(cardsInHand, allCardInfo);
  return (
    <div id="render-hand-container">
      { props.props.state.hand !== null ?
        sortedInfo.map(cards => {
        return (
            <img id={cards.name} name={cards.name} props={cards} onClick={props.toggle} src={cards.data[0].image_uris.small} onMouseEnter={props.props.mouseOver} onMouseLeave={props.props.mouseOver}></img>        )
      }) : (
        null
      )}
      {props.props.state.mousedOver && <Image props={props}/>}
    </div>
  )
};

export default RenderHand;