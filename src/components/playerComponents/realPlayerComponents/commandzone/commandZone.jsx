import React from 'react';
import CommanderInput from './commanderInput.jsx';
import CommandZoneImage from './commandZoneImage.jsx';

const CommandZone = (props) => {
  console.log('command', props);
  return (
    <div id="command-zone-container">
      <CommanderInput props={props}/>
      <CommandZoneImage props={props}/>
    </div>
  )
};

export default CommandZone;