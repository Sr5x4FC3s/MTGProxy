import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="home">
        <div>
          <button id="builder-button"><Link to='/db'>Deck Builder</Link></button>
        </div>
        <div>
          <button id="player-button"><Link to='/dp'>Deck Player</Link></button> 
        </div>
      </div>
    );
  }
}