import React from 'react';

const CommandZoneImage = (props) => {
  //conditonal render based on whether image value is filled or not
  return (
    <div id="command-zone-image">
      {props.props.state.commanderImageUrl !== null ? (
        <img id="commander-image" src={props.props.state.commanderImageUrl}></img>
      ) : (
        null
      )}
    </div>
  )
};

export default CommandZoneImage;