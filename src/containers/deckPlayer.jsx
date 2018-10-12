import React, { Component } from "react";
import { queryDeck, query4AllDecks, grabObject }        from '../../helperFunctions/clientHelperFunctions/helper.js';

import Dialog            from '@material-ui/core/Dialog';
import DeckSelector      from '../components/playerComponents/deckPlayerComponents/deckselector.jsx';
import ListofDecks       from '../components/playerComponents/deckPlayerComponents/listOfDecks.jsx';
import DeckPlayerButtons from '../components/playerComponents/deckPlayerComponents/dpButtons.jsx';
import DeckInfo          from '../components/playerComponents/deckPlayerComponents/deckinfo.jsx';
import SelectPlayMode    from '../components/playerComponents/deckPlayerComponents/selectPlayMode.jsx';

export default class DeckPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSelectDeck : false,
      toggleDeckList : false,
      toggleSelectedDeckInfo : false,
      toggleSelectModes : false,
      deckSelected : null,
      allDecks : null,
      selectedDeckInfo : null
    };
    this.handleToggleSelectDeck = this.handleToggleSelectDeck.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleToggleDeckList = this.handleToggleDeckList.bind(this);
    this.findDeck = this.findDeck.bind(this);
    this.handleSelectedDeck = this.handleSelectedDeck.bind(this);
    this.selectDeck = this.selectDeck.bind(this);
    this.closeDeckSelectWindow = this.closeDeckSelectWindow.bind(this);
  }

  handleSelectedDeck(e) {
    this.setState({
      deckSelected : e.target.id,
      toggleSelectedDeckInfo : !this.state.toggleSelectedDeckInfo
    }, () => {
      let object = grabObject(this.state.allDecks, this.state.deckSelected);
      this.setState({
        selectedDeckInfo : object
      });
    });
    e.preventDefault();
  }

  selectDeck(e) {
    this.setState({
      toggleSelectModes : !this.state.toggleSelectModes,
      toggleSelectedDeckInfo : !this.state.toggleSelectedDeckInfo
    });
  }

  closeDeckSelectWindow() {
    this.setState({
      toggleSelectedDeckInfo : !this.state.toggleSelectedDeckInfo
    });
  }

  findDeck(e) {
    let deckValue = this.state.deckSelected;
    let promise = new Promise((resolve, reject) => {
      let query = queryDeck(deckValue);
      resolve(query);
    }).then(result => {
      this.setState({
        selectedDeckInfo : result[0],
        toggleSelectedDeckInfo : !this.state.toggleSelectedDeckInfo 
      })
    })
    e.preventDefault(); // remove this line if we want the screen to refresh and rerender
  }

  handleToggleDeckList() {
    return new Promise((resolve, reject) => {
      let query = query4AllDecks();
      resolve(query);
    }).then((result) => {
      this.setState({
        toggleDeckList : !this.state.toggleDeckList,
        allDecks : result
      });
    });
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
        <Dialog open={this.state.toggleSelectModes} onClose={this.toggleSelectModes}>
          <SelectPlayMode state={this.state}/>
        </Dialog>
        <Dialog open={this.state.toggleSelectedDeckInfo} onClose={this.toggleSelectedDeckInfo}>
          <DeckInfo state={this.state} select={this.selectDeck} close={this.closeDeckSelectWindow}/>
        </Dialog>
        <Dialog open={this.state.toggleSelectDeck} onClose={this.handleToggleSelectDeck}>
          <DeckSelector toggleSelect={this.handleToggleSelectDeck} state={this.state} input={this.onChange} findDeck={this.findDeck}/>
        </Dialog>
        <Dialog open={this.state.toggleDeckList} onClose={this.handleToggleDeckList}>  
          <ListofDecks toggleDeckList={this.handleToggleDeckList} state={this.state} selectdeck={this.handleSelectedDeck}/>
        </Dialog>
        <DeckPlayerButtons handleToggleDeckList={this.handleToggleDeckList} handleToggleSelectDeck={this.handleToggleSelectDeck}/>
      </div>
    );
  }
}