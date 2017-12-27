import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from 'actions/posts'
import { logout, addUserData } from 'actions/auth'
import Main from 'components/Main'

class MainContainer extends Component {
  componentWillMount() {
    this.props.addUserData()
  }

  handleClick(e) {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    return <Main {...this.props} handleClick={this.handleClick.bind(this)}/>
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth
  }
}

export default connect(mapStateToProps, { getPosts, logout, addUserData })(MainContainer)
