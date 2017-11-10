import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import login from '../actions/login'

class LoginContainer extends Component {
  handleSubmit(values) {
    console.log(values)
    this.props.login({
      ...values,
      query: this.props.location.pathname
    })
  }
  render() {
    return <Login onSubmit={this.handleSubmit.bind(this)}/>
  }
}

const mapStateToProps =(state)=> {
  return {
    isFetching: state.auth.isFetching
  }
}

export default connect(mapStateToProps, { login })(LoginContainer)

