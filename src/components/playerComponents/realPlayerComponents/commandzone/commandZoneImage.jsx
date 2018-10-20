import React from 'react';

const CommandZoneImage = (props) => {
  //conditonal render based on whether image value is filled or not

  //render if commmander is in command zone
  if (props.props.state.CZinCommandZone) {
    return (
      <div id="command-zone-image">
        {props.props.state.commanderImageUrl !== null ? (
          <img id="commander-image" src={props.props.state.commanderImageUrl.small}></img>
        ) : (
          null
        )}
      </div>
    )
  }
  //render if in play
  if (props.props.state.CZinPlay) {
    return (
      <div id="commander-in-play">
        <h5>Commander Is Currently In Play</h5>
      </div>
    )
  }
  //render if in hand
  if (props.props.state.CZinHand) {
    return (
      <div id="commander-in-hand">
        <h5>Commander Is Currently In Hand</h5>
      </div>
    )
  }
};

export default CommandZoneImage;