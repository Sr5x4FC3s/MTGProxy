import React from 'react';

const CardImageModal = (props) => {
  return (
    <div>
      <img src={props.state.targetCardImageUrl}></img>
    </div>
  )
};

export default CardImageModal;