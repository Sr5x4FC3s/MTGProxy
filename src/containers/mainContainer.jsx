import React from 'react';

import { Route, BroswerRouter, HashRouter } from 'react-router-dom';
import { Switch } from 'react-router';

import Home        from './home.jsx';
import DeckBuilder from './deckBuilder.jsx';
import DeckPlayer  from './deckPlayer.jsx';


export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/dp" component={DeckPlayer} />
          <Route path="/db" component={DeckBuilder} />
        </Switch>
      </HashRouter>
    )
  }
}