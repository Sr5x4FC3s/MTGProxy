import React from 'react';
import { Route, BroswerRouter, HashRouter } from 'react-router-dom';
import Routes from '../components/router.jsx';

export default class MainContainer extends React.Component {
  
  render() {
    return(
      <HashRouter>
        <Routes />
      </HashRouter>
    )
  }
}