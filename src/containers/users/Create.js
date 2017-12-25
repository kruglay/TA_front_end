import React, { Component } from 'react'
import CreateUser from 'components/users/Create'
import { connect } from 'react-redux'
import { createUser } from 'actions/users'
import { Redirect } from 'react-router-dom'

class CreateUserContainer extends Component {
  handleClick(value) {
    this.props.createUser({
      ...value
    })
  }

  render() {
    return (this.props.result === 'success' ? <Redirect to='/'/> : <CreateUser onSubmit={this.handleClick.bind(this)}/>)
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.newUser.result
  }
}

export default connect(mapStateToProps, {createUser})(CreateUserContainer)