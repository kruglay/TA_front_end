import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from 'actions/posts'
import Main from 'components/Main'

export default class MainContainer extends Component {
  render() {
    return <Main {...this.props}/>
  }
}

// export default connect(null, { getPosts })(MainContainer)
