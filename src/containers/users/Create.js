import React, { Component } from 'react'
import CreateUser from 'components/users/Create'
import { connect } from 'react-redux'
import { createUser } from 'actions/auth'

class CreateUserContainer extends Component {
  handleClick(value) {
    this.props.createUser({
      ...value
    })
  }

  render() {
    return <CreateUser onSubmit={this.handleClick.bind(this)} {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, {createUser})(CreateUserContainer)