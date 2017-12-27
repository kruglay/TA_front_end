import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Main from 'containers/Main'

const App = (props) => {
  return <Route path={'/'} component={Main}/>;
}

export default App;
