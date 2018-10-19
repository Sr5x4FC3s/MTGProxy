import React from 'react';

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
          <img id={cards.name} name={cards.name} props={cards} onClick={props.toggle} src={cards.data[0].image_uris.small}></img>
        )
      }) : (
        null
      )}
    </div>
  )
};

export default RenderHand;