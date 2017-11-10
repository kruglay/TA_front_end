import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from 'actions/posts'
import Main from 'components/Main'

class MainContainer extends Component {
  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    return <Main {...this.props}/>
  }
}

export default connect(null, { getPosts })(MainContainer)
