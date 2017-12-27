import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Main from 'containers/Main'
import Test from './components/Test'
import Login from './containers/Login'
import { Posts } from 'containers/posts'
import { CreatePost } from "./containers/posts"
import CreateUser from 'containers/users/Create'

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={Main}/>
        <Route exact path={'/users/new'} component={CreateUser}/>
        <Route exact path={'/sessions/new'} component={Login}/>
        <Route exact path={'/posts'} component={Posts}/>
        <Route exact path={'/posts/new'} component={CreatePost}/>
        <Route exact path={'/test'} component={Test}/>
      </Switch>
    </div>
  );
}

export default App;
