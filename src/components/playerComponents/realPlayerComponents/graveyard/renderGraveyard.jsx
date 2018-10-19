import React from 'react';

const sort = require('../../../../../helperFunctions/clientHelperFunctions/realPlayerHelperFunctions/helper').sorter;

const RenderGraveyard = (props) => {
  let cardsInGraveyard = props.props.state.graveyard;//[String];
  let allCardInfo = props.props.state.cardInfo;
  let sortedInfo = sort(cardsInGraveyard, allCardInfo);
  return (
    <div>
      {props.props.state.graveyard !== null ? (
        sortedInfo.map(cards => {
          return <img id={cards.name} name={cards.name} src={cards.data[0].image_uris.small}></img>
        }) 
      ): (
        null
      )}
    </div>
  )
};

export default RenderGraveyard;