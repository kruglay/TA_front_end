import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import Header from './components/Header'
import Main from 'containers/Main'
import Test from './components/Test'
import Login from './containers/Login'
import Posts from 'containers/Posts'

const App = (props) => {

  return (
    <div>
      <Header/>
      <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={'/'} component={Main}/>
          <Route path={'/sessions/new'} component={Login}/>
          <Route path={'/posts'} component={Posts}/>
          <Route path={'/test'} component={Test}/>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
