import React, { Component }      from "react";
import { postCards, queryCards, convertString, removeWhiteSpaces, removeCardFromList, pingScryfall } from '../../helperFunctions/clientHelperFunctions/helper.js';

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
      deleteCard: null, 
      deckCount: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.onDeckSubmission = this.onDeckSubmission.bind(this);
    this.removeCardFromList = this.removeCardFromList.bind(this);
    this.captureDeletionValue = this.captureDeletionValue.bind(this);
    this.handleFormType = this.handleFormType.bind(this);
    this.incrementDeckCount = this.incrementDeckCount.bind(this);
    this.saveSelectedCard = this.saveSelectedCard.bind(this);
  }

  //<-------function is being passed to dropDownSearch component
  saveSelectedCard(target) {
    let targetValue = target.id;
    let promise = new Promise(resolve => {
      let query = pingScryfall(targetValue);
      resolve(query);
    }).then(result => {
      let deckList = this.state.currentDeck;
      let originalCount = this.state.deckCount;
      let addCopies = [];
      let total = originalCount + 1;
      let currentInfo = this.state.foundCards;
      let newInfo = [];

      addCopies.push(targetValue);
      newInfo.push(result);

      let newObject = {
        name: targetValue,
        data: newInfo
      };

      this.setState({
        currentDeck: deckList.concat(addCopies),
        deckCount: total,
        foundCards: currentInfo.concat(newObject)
      });
    })
  }

  incrementDeckCount(target, e) {
    let originalCount = this.state.deckCount;
    let addCopies = [];
    let originalDeck = this.state.currentDeck;

    if (e === 'add-one-button') {
      addCopies.push(target);
      let total = originalCount + addCopies.length;
      this.setState({
        currentDeck: originalDeck.concat(addCopies),
        deckCount: total
      });
    } else if (e === 'add-two-button') {
      addCopies.push(target);
      addCopies.push(target);
      let total = originalCount + addCopies.length;
      this.setState({
        currentDeck: originalDeck.concat(addCopies),
        deckCount: total
      });
    } else if (e === 'add-three-button') {
      addCopies.push(target);
      addCopies.push(target);
      addCopies.push(target);
      let total = originalCount + addCopies.length;
      this.setState({
        currentDeck: originalDeck.concat(addCopies),
        deckCount: total
      });
    }
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
    let count = this.state.deckCount - 1;

    this.setState({
      currentDeck : modifiedList,
      deckCount : count
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
      deckList : e.target.value
    });
  }

  onDeckSubmission(e) {
    // e.preventDefault();
    let post = postCards(this.state, '/decksubmission');
    //will reset fields on submission
  }

  onSubmit(e) {
    e.preventDefault();

    const checkDeckCount = () => {
      let cardCount = this.state.deckCount;
      let totalCount = cardCount + cardArray.length
    
      this.setState({
        deckCount : totalCount
      });
    }

    let retrieveData = new Promise(resolve => {
      let query = queryCards(this.state);
      resolve(query);
    }).then(result => {
      let previouslyFoundCards = this.state.foundCards;

      if (previouslyFoundCards.length === 0) {
        this.setState({
          foundCards: result.data
        });
      } else if(previouslyFoundCards.length > 0) {
        let combineFoundCards = previouslyFoundCards.concat(result.data);
        this.setState({
          foundCards: combineFoundCards
        });
      }
      document.getElementById('deck-builder-form').reset();
    });

    let deckValue = this.state.currentDeck;
    let addedCards = convertString(this.state.deckList);
    let cardArray = removeWhiteSpaces(addedCards);

    if (deckValue.length === 0) {
      this.setState({
        currentDeck : cardArray,
      }, checkDeckCount())
    } else if (deckValue.length > 0) {
      let combinedCardList = deckValue.concat(cardArray);
      this.setState({
        currentDeck: combinedCardList
      }, checkDeckCount())
    }
  }

  render() {
    console.log('this ', this.state)
    return (
      <div id="deckBuilder">
        This is the deck builder page.
        <InputField deckList={this.state} handleChange={this.handleChange} onSubmit={this.onSubmit} saveSelectedCard={this.saveSelectedCard}/>
        <br></br><br></br><br></br>
        <div>
          <div>Number of cards in deck :</div>
          <DeckCounter deckList={this.state} />
        </div>
        <br></br><br></br>
        <div>
          <ListContainer deckList={this.state} form={this.handleFormChange} decksub={this.onDeckSubmission} delete={this.removeCardFromList} captureCard={this.captureDeletionValue} type ={this.handleFormType} increment={this.incrementDeckCount}/>
        </div>
      </div>
    );
  }
}