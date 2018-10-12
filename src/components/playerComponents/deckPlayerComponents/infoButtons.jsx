import React from 'react';

import { Link } from 'react-router-dom';

const InfoButtons = (props) => {
  return (
    <div><button id="select-deck-button" onClick={props.select}>Select</button><button id="close-deck-select-button" onClick={props.close}>Close</button></div>
  )
};

export default InfoButtons;