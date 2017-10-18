import React, { Component } from 'react'
import { connect } from 'redux'
import Login from '../components/Login'
import login from '../actions/login'

class LoginContainer extends Component {
  handleSubmit(values) {
    login()
    console.log(values)
  }
  render() {
    return <Login onSubmit={this.handleSubmit}/>
  }
}

const mapStateToProps =(state)=> {
  return {
    isFetching: state.auth.isFetching
  }
}

export default connect(mapStateToProps, { login })(LoginContainer)

