import React, { Component }      from "react";
import { postCards, queryCards, convertString, removeWhiteSpaces, removeCardFromList } from '../../helperFunctions/clientHelperFunctions/helper.js';

import InputField     from '../components/builderComponents/deckInputField.jsx';
import ListContainer  from '../components/builderComponents/listComponent.jsx';
import DeckCounter    from '../components/builderComponents/deckCounter.jsx';


export default class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckList : '', 
      foundCards : [], 
      currentDeck : [],
      deckName : '',
      deckType: '',
      deleteCard: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.onDeckSubmission = this.onDeckSubmission.bind(this);
    this.removeCardFromList = this.removeCardFromList.bind(this);
    this.captureDeletionValue = this.captureDeletionValue.bind(this);
    this.handleFormType = this.handleFormType.bind(this);
  }

  componentDidMount() {
    let retrieveData = new Promise ((resolve, reject) => {
      let post = postCards(this.state, `/cardsubmission`);
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
      });
      console.log('the new state', this.state)
      document.getElementById('deck-builder-form').reset();
    });
  }

  captureDeletionValue(value) {
    let card = value;
    this.setState({
      deleteCard: card
    });
  }

  removeCardFromList(e) {
    let cardName = this.state.deleteCard;
    let deckList = this.state.currentDeck;
    let modifiedList = removeCardFromList(deckList, cardName);

    this.setState({
      currentDeck : modifiedList
    });
    e.preventDefault();
  }

  handleFormChange(e) {
    this.setState({
      deckName: e.target.value
    });
  }

  handleFormType(e) {
    this.setState({
      deckType: e.target.value
    });
  }
  
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      deckList : e.target.value,
      foundCards : []
    });
  }

  onDeckSubmission(e) {
    // e.preventDefault();
    let post = postCards(this.state, '/decksubmission');
    //will reset fields on submission
  }

  onSubmit(e) {
    e.preventDefault();
    this.componentDidMount();

    let deckValue = this.state.currentDeck;
    let addedCards = convertString(this.state.deckList);
    let cardArray = removeWhiteSpaces(addedCards);

    if (deckValue.length === 0) {
      this.setState({
        currentDeck : cardArray
      })
    } else if (deckValue.length > 0) {
      let combinedCardList = deckValue.concat(cardArray);
      this.setState({
        currentDeck: combinedCardList
      })
    }
  }

  render() {
    return (
      <div id="deckBuilder">
        This is the deck builder page.
        <InputField deckList={this.state} handleChange={this.handleChange} onSubmit={this.onSubmit}/>
        <br></br><br></br><br></br>
        <div>
          <div>Number of cards in deck :</div>
          <DeckCounter deckList={this.state} />
        </div>
        <br></br><br></br>
        <div>
          <ListContainer deckList={this.state} form={this.handleFormChange} decksub={this.onDeckSubmission} delete={this.removeCardFromList} captureCard={this.captureDeletionValue} type ={this.handleFormType}/>
        </div>
      </div>
    );
  }
}