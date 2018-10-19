import React from 'react';

const sort = require('../../../../../helperFunctions/clientHelperFunctions/realPlayerHelperFunctions/helper').sorter;

const RenderExile = (props) => {
  let exiledCards = props.props.state.exiled;
  let allCardInfo = props.props.state.cardInfo;
  let sortedInfo = sort(exiledCards, allCardInfo);
  return (
    <div>
      {props.props.state.exiled !== null ? (
        sortedInfo.map(cards => {
          return <img id={cards.name} name={cards.name} src={cards.data[0].image_uris.small}></img>
        }) 
      ): (
        null
      )}
    </div>
  )
};

export default RenderExile;