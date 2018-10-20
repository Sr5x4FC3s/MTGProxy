import React from 'react';

const Image = (props) => {
  return (
    <div id="enlarged-image-container" style={{ position: 'absolute' }}>
      <img id="dialog-image" src={props.props.props.state.hoveredUrl}></img>
    </div>
  )
};

export default Image;