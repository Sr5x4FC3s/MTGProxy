import React from 'react';
import { Route, BrowserRouter, HashRouter } from 'react-router-dom';
import Routes from '../components/router.jsx';

export default class MainContainer extends React.Component {
  
  render() {
    return(
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    )
  }
}