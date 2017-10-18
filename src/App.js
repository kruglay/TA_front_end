import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import Header from './components/Header'
import Main from './components/Main'
import Test from './components/Test'
import Login from './containers/Login'

const App = (props) => {

  return (
    <div>
      <Header/>
      <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={'/'} component={Main}/>
          <Route path={'/sessions/new'} component={Login}/>
          <Route path={'/test'} component={Test}/>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
