import React from 'react';

const sort = require('../../../../../helperFunctions/clientHelperFunctions/realPlayerHelperFunctions/helper').sorter;

const RenderBattlefield = (props) => {
  let cardsOnBattlefield = props.props.state.battlefield;//[String];
  let allCardInfo = props.props.state.cardInfo;
  let sortedInfo = sort(cardsOnBattlefield, allCardInfo);

  return (
    <div>
      {props.props.state.battlefield !== null ? (
        sortedInfo.map(cards => {
          return <img id={cards.name} name={cards.name} src={cards.data[0].image_uris.small}></img>
        }) 
      ): (
        null
      )}
    </div>
  )
};

export default RenderBattlefield;