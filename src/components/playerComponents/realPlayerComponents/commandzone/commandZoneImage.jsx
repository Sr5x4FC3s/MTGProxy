import React from 'react';

const CommandZoneImage = (props) => {
  //conditonal render based on whether image value is filled or not

  //render if commmander is in command zone
  if (props.props.state.CZinCommandZone) {
    return (
      <div id="command-zone-image">
        {props.props.state.commanderImageUrl !== null ? (
          <img id="commander-image" src={props.props.state.commanderImageUrl}></img>
        ) : (
          null
        )}
      </div>
    )
  }
  //render if in play
  if (props.props.state.CZinPlay) {
    return (
      <div id="commander-in-play">Commander Is Currently In Play</div>
    )
  }
  //render if in hand
  if (props.props.state.CZinHand) {
    return (
      <div id="commander-in-hand">Commander Is Currently In Hand</div>
    )
  }
};

export default CommandZoneImage;