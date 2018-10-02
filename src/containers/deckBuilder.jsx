import React, { Component } from "react";
import { postDeck }         from '../../helperFunctions/helper.js';

import InputField from '../components/builderComponents/deckInputField.jsx';
import List       from '../components/builderComponents/list.jsx';


export default class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckList : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      deckList : e.target.value
    });
  }

  onSubmit(e) {
    postDeck(this.state);
    //need to add a function that clears the text area after submission************

    e.preventDefault();
  }

  render() {
    return (
      <div id="deckBuilder">
        This is the deck builder page.
        <InputField deckList={this.state} handleChange={this.handleChange} onSubmit={this.onSubmit}/>
        <br></br><br></br><br></br>
        <List />
      </div>
    );
  }
}