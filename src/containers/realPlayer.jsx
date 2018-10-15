import React       from 'react';

import BattleField from '../components/playerComponents/realPlayerComponents/battleField.jsx';
import CommandZone from '../components/playerComponents/realPlayerComponents/commandZone.jsx';
import Deck        from '../components/playerComponents/realPlayerComponents/deck.jsx';
import Exiled      from '../components/playerComponents/realPlayerComponents/exiled.jsx';
import Graveyard   from '../components/playerComponents/realPlayerComponents/graveyard.jsx';
import LandArea    from '../components/playerComponents/realPlayerComponents/landsArea.jsx';
import Hand        from '../components/playerComponents/realPlayerComponents/hand.jsx';

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
        <Hand />
        <BattleField />
        <CommandZone />
        <Deck />
        <Exiled />
        <Graveyard />
        <LandArea />
      </div>
    )
  }
};