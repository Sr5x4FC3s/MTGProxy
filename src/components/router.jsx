import React from 'react';

import { Route, BroswerRouter, HashRouter } from 'react-router-dom';
import { Switch } from 'react-router';

import Home          from '../containers/home.jsx';
import DeckBuilder   from '../containers/deckBuilder.jsx';
import DeckPlayer    from '../containers/deckPlayer.jsx';
import VirtualPlayer from '../containers/virtualPlayer.jsx';
import RealPlayer    from '../containers/realPlayer.jsx';

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/dp" component={DeckPlayer} />
      <Route exact path="/db" component={DeckBuilder} />
      <Route exact path="/dp/virtualplayer" component={VirtualPlayer} />
      <Route exact path="/dp/realplayer" component={RealPlayer} />
    </Switch>
  )
};

export default Routes;
