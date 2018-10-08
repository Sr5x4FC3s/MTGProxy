import React, { Component }      from "react";
import { postCards, queryCards } from '../../helperFunctions/clientHelperFunctions/helper.js';

import InputField     from '../components/builderComponents/deckInputField.jsx';
import ListContainer  from '../components/builderComponents/listComponent.jsx';
import DeckCounter    from '../components/builderComponents/deckCounter.jsx';


export default class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckList : '', 
      foundCards : []
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
      deckList : e.target.value,
      foundCards : []
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
        <div>
          <h3>Number of cards in deck :</h3>
          <DeckCounter deckList={this.state} />
        </div>
        <br></br><br></br>
        <div>
          <ListContainer deckList={this.state}/>
        </div>
      </div>
    );
  }
}