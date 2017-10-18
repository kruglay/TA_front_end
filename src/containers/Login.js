import React, { Component } from 'react'
import Login from '../components/Login'
import login from '../actions/login'

class LoginContainer extends Component {
  handleSubmit(values) {

    console.log(values)
  }
  render() {
    return <Login onSubmit={this.handleSubmit}/>
  }
}

export default LoginContainer

