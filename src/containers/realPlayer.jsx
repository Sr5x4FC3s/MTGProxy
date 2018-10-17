import React       from 'react';

import BattleField from '../components/playerComponents/realPlayerComponents/battlefield/battleField.jsx';
import CommandZone from '../components/playerComponents/realPlayerComponents/commandzone/commandZone.jsx';
import Deck        from '../components/playerComponents/realPlayerComponents/deck/deck.jsx';
import Exiled      from '../components/playerComponents/realPlayerComponents/exiled/exiled.jsx';
import Graveyard   from '../components/playerComponents/realPlayerComponents/graveyard/graveyard.jsx';
import LandArea    from '../components/playerComponents/realPlayerComponents/lands/landsArea.jsx';
import Hand        from '../components/playerComponents/realPlayerComponents/hand/hand.jsx';

export default class RealPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passedState : null,
      hasPassed : false,
      hand : null,
      battlefield : null,
      commandzone : null,
      deck : null,
      exiled : null,
      graveyard : null,
      land : null
    };
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

  render() {
    console.log('real player',this.state);
    return (
      <div>
        <Hand state={this.state}/>
        <BattleField state={this.state}/>
        <CommandZone state={this.state}/>
        <Deck state={this.state}/>
        <Exiled state={this.state}/>
        <Graveyard state={this.state}/>
        <LandArea state={this.state}/>
      </div>
    )
  }
};