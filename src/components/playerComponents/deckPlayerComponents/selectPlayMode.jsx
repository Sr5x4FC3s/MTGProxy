import React from 'react';
import { Link } from 'react-router-dom';

const SelectPlayMode = (props) => {
  return (
    <div>
      <button><Link to={{pathname: "/dp/realplayer", state: props.state.selectedDeckInfo}}>Real Player</Link></button>
      <button><Link to={{pathname: "/dp/virtualplayer", state: props.state.selectedDeckInfo}}>Virtual Player</Link></button>
    </div>
  )
};

export default SelectPlayMode;