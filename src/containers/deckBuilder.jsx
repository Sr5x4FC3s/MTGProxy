import React, { Component }      from "react";
import { postCards, queryCards } from '../../helperFunctions/clientHelperFunctions/helper.js';

import InputField from '../components/builderComponents/deckInputField.jsx';
import List       from '../components/builderComponents/list.jsx';


export default class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckList : '', 
      foundCards : null
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    let retrieveData = new Promise ((resolve, reject) => {
      let post = postCards(this.state);
      resolve(post);
    }).then((result) => {
      return new Promise ((resolve, reject) => {
        let query = queryCards(this.state);
        resolve(query);
      })
    }).then((result) => {
      let data = result;
      this.setState({
        foundCards: result.data
      })
      console.log('the new state', this.state)
    });
  }
  
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      deckList : e.target.value
    });
  }

  onSubmit(e) {
    this.componentDidMount();

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