import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from 'actions/posts'
import Main from 'components/Main'

class MainContainer extends Component {
  render() {
    return <Main {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  let info = {}
  if(state.newUser.result === 'success') {
    info.type = 'info'
    info.message = 'My congratulations, you are registered'
  }
  return {
    info
  }
}

export default connect(mapStateToProps, { getPosts })(MainContainer)
