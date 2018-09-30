import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db : false,
      dp : false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert('this button has been clicked');
    alert(e.target.id);
    alert(typeof e.target.id)

    if (e.target.id === 'builder-button') {
      this.setState(state => ({
        db : true,
        dp : false
      }));
    }

    if (e.target.id === 'player-button') {
      this.setState(state => ({
        db : false,
        dp : true
      }));
    }

    e.preventDefault();
  }

  render() {
    console.log(this.state);
    return (
      <div id="home">
        <h1>Home Page</h1>
        <div>
          <button id="builder-button" onClick={this.handleClick}>Deck Builder</button>
        </div>
        <div>
          <button id="player-button" onClick={this.handleClick}>Deck Player</button>
        </div>
      </div>
    );
  }
}