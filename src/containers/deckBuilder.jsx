import React, { Component }      from "react";
import { postCards, queryCards } from '../../helperFunctions/helper.js';

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

  // componentDidMount() {
  //   let data = this.state;
  //   let retrieveData = postCards(data)
  //   retrieveData.then(queryCards(data));

  //   console.log('omg, i\'m retarded', retrieveData)
  // }
  
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      deckList : e.target.value
    });
  }

  onSubmit(e) {
    // postCards(this.state);
    // queryCards(this.state);

    //*** consider using npm i --save react-promise  for all promise use in react components

    //create a get function which will retrieve data after the initial post request

    let retrieveData = new Promise (resolve => {
      postCards(this.state)})
      .then(queryCards(this.state))
      .then((results) => {
      console.log('hellohello', retrieveData);
    });

    // this.componentDidMount();

    // setTimeout(() => {  console.log(retrieveData)}, 5000); // this is for testing purposes only
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