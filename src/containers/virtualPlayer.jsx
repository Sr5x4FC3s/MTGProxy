import React       from 'react';

import BattleField from '../components/playerComponents/virtualPlayerComponents/battleField.jsx';
import CommandZone from '../components/playerComponents/virtualPlayerComponents/commandZone.jsx';
import Deck        from '../components/playerComponents/virtualPlayerComponents/deck.jsx';
import Exiled      from '../components/playerComponents/virtualPlayerComponents/exiled.jsx';
import Graveyard   from '../components/playerComponents/virtualPlayerComponents/graveyard.jsx';
import LandArea    from '../components/playerComponents/virtualPlayerComponents/landsArea.jsx';
import Hand        from '../components/playerComponents/virtualPlayerComponents/hand.jsx';

export default class VirtualPlayer extends React.Component {
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
    console.log('virtual ', this.state);
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