import React from 'react';

const CardImageModal = (props) => {
  //need to add condition if props is an empty string

  //if image doesn't exist - ping the scryfall API for image
  return (
    <div>
      <img src={props.state.targetCardImageUrl}></img>
    </div>
  )
};

export default CardImageModal;