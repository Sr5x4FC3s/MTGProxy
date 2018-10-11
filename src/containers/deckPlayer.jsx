import React, { Component } from "react";
import { queryDeck, query4AllDecks }        from '../../helperFunctions/clientHelperFunctions/helper.js';

import Dialog            from '@material-ui/core/Dialog';
import DeckSelector      from '../components/playerComponents/deckPlayerComponents/deckselector.jsx';
import ListofDecks       from '../components/playerComponents/deckPlayerComponents/listOfDecks.jsx';
import DeckPlayerButtons from '../components/playerComponents/deckPlayerComponents/dpButtons.jsx';

export default class DeckPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSelectDeck : false,
      toggleDeckList : false,
      deckSelected : null
    };
    this.handleToggleSelectDeck = this.handleToggleSelectDeck.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleToggleDeckList = this.handleToggleDeckList.bind(this);
    this.findDeck = this.findDeck.bind(this);
    this.displayAllDecks = this.displayAllDecks.bind(this);
  }

  findDeck(e) {
    let deckValue = this.state.deckSelected;
    //query for card and render the list as a response 
    let promise = queryDeck(this.state.deckSelected);
    e.preventDefault(); // remove this line if we want the screen to refresh and rerender
  }

  displayAllDecks(e) {
    let promise = new Promise((resolve, reject) => {
      let query = query4AllDecks();
      resolve(query);
    }).then (result => {
      console.log('chuckycheeses brofro', result);
      return result;
    })
  }

  handleToggleDeckList() {
    this.setState({
      toggleDeckList : !this.state.toggleDeckList
    });
    this.displayAllDecks();
  }

  handleToggleSelectDeck() {
    this.setState({
      toggleSelectDeck : !this.state.toggleSelectDeck
    });
  }

  onChange(e) {
    this.setState({
      deckSelected : e.target.value
    });

    e.preventDefault();
  }

  render() {
    console.log('this is state', this.state)
    return (
      <div id="deckPlayer">
        <Dialog open={this.state.toggleSelectDeck} onClose={this.handleToggleSelectDeck}>
          <DeckSelector toggleSelect={this.handleToggleSelectDeck} state={this.state} input={this.onChange} findDeck={this.findDeck}/>
        </Dialog>
        <Dialog open={this.state.toggleDeckList} onClose={this.handleToggleDeckList}>  
          <ListofDecks toggleDeckList={this.handleToggleDeckList} state={this.state}/>
        </Dialog>
        <DeckPlayerButtons handleToggleDeckList={this.handleToggleDeckList} handleToggleSelectDeck={this.handleToggleSelectDeck}/>
      </div>
    );
  }
}