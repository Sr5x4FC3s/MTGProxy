import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainContainer from './containers/mainContainer.jsx';
import Home from './containers/home.jsx';
import DeckPlayer from './containers/deckPlayer.jsx';
import DeckBuilder from './containers/deckBuilder.jsx';

export default (
  <Route path='/' component={MainContainer}>
    <IndexRoute component={Home} />
    <Route path='dp' component={DeckPlayer} />
    <Route path='*' component={Home} />
    <Route path='db' component={DeckBuilder} />
  </Route>
);