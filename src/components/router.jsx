import React from 'react';

import { Route, BroswerRouter, HashRouter } from 'react-router-dom';
import { Switch } from 'react-router';

import Home        from '../containers/home.jsx';
import DeckBuilder from '../containers/deckBuilder.jsx';
import DeckPlayer  from '../containers/deckPlayer.jsx';

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/dp" component={DeckPlayer} />
      <Route path="/db" component={DeckBuilder} />
    </Switch>
  )
};

export default Routes;
