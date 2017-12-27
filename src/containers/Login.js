import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import {login} from '../actions/auth'

class LoginContainer extends Component {
  handleSubmit(values) {
    console.log(values)
    this.props.login({
      ...values,
    })
  }
  render() {
    return <Login onSubmit={this.handleSubmit.bind(this)} {...this.props}/>
  }
}

const mapStateToProps =(state)=> {
  return {
    ...state.auth
  }
}

export default connect(mapStateToProps, { login })(LoginContainer)

