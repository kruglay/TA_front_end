import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import Header from './components/Header'
import Main from 'containers/Main'
import Test from './components/Test'
import Login from './containers/Login'
import { Posts } from 'containers/posts'
import { CreatePost } from "./containers/posts"
import CreateUser from 'containers/users/Create'

const App = (props) => {

  return (
    <div>
      <Header/>
      <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={'/'} component={Main}/>
          <Route exact path={'/users/new'} component={CreateUser}/>
          <Route exact path={'/sessions/new'} component={Login}/>
          <Route exact path={'/posts'} component={Posts}/>
          <Route exact path={'/posts/new'} component={CreatePost}/>
          <Route exact path={'/test'} component={Test}/>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
