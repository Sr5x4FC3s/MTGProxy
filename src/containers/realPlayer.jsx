import React       from 'react';

import BattleField from '../components/playerComponents/realPlayerComponents/battlefield/battleField.jsx';
import CommandZone from '../components/playerComponents/realPlayerComponents/commandzone/commandZone.jsx';
import Deck        from '../components/playerComponents/realPlayerComponents/deck/deck.jsx';
import Exiled      from '../components/playerComponents/realPlayerComponents/exiled/exiled.jsx';
import Graveyard   from '../components/playerComponents/realPlayerComponents/graveyard/graveyard.jsx';
import LandArea    from '../components/playerComponents/realPlayerComponents/lands/landsArea.jsx';
import Hand        from '../components/playerComponents/realPlayerComponents/hand/hand.jsx';

import { queryCommander } from '../../helperFunctions/clientHelperFunctions/helper.js';

const play = require('../../helperFunctions/clientHelperFunctions/realPlayerHelperFunctions/helper.js');

export default class RealPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passedState : null,
      hasPassed : false,
      commander : false,
      gameStarted : false,
      //<----hand state -----
      hand : null,
      initialHand : true,
      mulligan : false,
      mulliganCount : 0,
      removeMulligan : false,
      //<----battlefield state ----
      battlefield : null,
      BFcreatures : null,
      BFartifacts : null,
      BFenchantments : null,
      //<----command zone state ----
      commandZone : null,
      commanderImageUrl: null,
      CZinCommandZone: true,
      CZinPlay : false,
      CZinHand : false,
      //<---- deck state
      deck : null,
      deckCardValue : null,
      deckScry : false,
      deckSurveil : false,
      //<----exile state ----
      exiled : null,
      //<----graveyard state ----
      graveyard : null,
      //<----land area state ---- 
      basicLands : null,
      nonbasic : null
    };
    this.drawCards = this.drawCards.bind(this);
    this.handleCommanderInput = this.handleCommanderInput.bind(this);
    this.handleCommanderSubmit = this.handleCommanderSubmit.bind(this);
  }

  componentWillMount() {
    let receivedState = this.props.location.state;
    if (this.state.hasPassed === false) {
      this.setState({
        passedState : receivedState,
        hasPassed : true
      });
    }
  }

  drawCards(e) {
    //get deck list and set to appropriate stuff
    console.log('got it', e.target.id);
    if (e.target.id === 'draw-initial-hand-button' && this.state.gameStarted === false && this.state.initialHand === true) {
      let initialShuffle = play.shuffle(this.state.passedState.list);
      let initialObject = {
        hand: [],
        deck: initialShuffle
      };
      let initialCards = play.draw(initialObject, 7);

      this.setState({
        gameStarted: true,
        hand: initialCards.hand,
        deck: initialCards.deck,
        initialHand: false
      });
    }

    if (e.target.id === 'mulligan-hand' && this.state.gameStarted === true) {
      let count = this.state.mulliganCount;
      let newMulliganCount = count + 1;
      let reshuffle = play.shuffle(this.state.passedState.list);
      let initialObject = {
        hand: [],
        deck: reshuffle
      };
      let mulliganDrawCount = 7 - newMulliganCount;
      let initialCards = play.draw(initialObject, mulliganDrawCount);
      //scry cards based on newMulliganCount if hand is kept

      this.setState({
        hand: initialCards.hand,
        deck: initialCards.deck,
        mulligan: true,
        mulliganCount: newMulliganCount
      })
    }

    if (e.target.id === 'draw-cards-button') {
      let cardObject = {
        hand: this.state.hand,
        deck: this.state.deck
      };

      //new hand is hand concat drawn cards
      let drawCards = play.draw(cardObject, 1);

      this.setState({
        hand: drawCards.hand,
        deck: drawCards.deck,
        removeMulligan: true
      });
    }
    e.preventDefault();
  }

  handleCommanderInput(e) {
    this.setState({
      commandZone: e.target.value
    });
    
    e.preventDefault();
  }

  handleCommanderSubmit(e) {
    //do query to db to get commander data => render image in command zone
    let promise = new Promise(resolve => {
      let query = queryCommander(this.state.commandZone);
      resolve(query);
    }).then(result => {
      this.setState({
        commanderImageUrl: result.data[0].data[0].image_uris.normal
      });
    })

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Hand state={this.state} draw={this.drawCards}/>
        <BattleField state={this.state}/>
        <CommandZone state={this.state} input={this.handleCommanderInput} submit={this.handleCommanderSubmit}/>
        <Deck state={this.state}/>
        <Exiled state={this.state}/>
        <Graveyard state={this.state}/>
        <LandArea state={this.state}/>
      </div>
    )
  }
};