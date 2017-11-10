import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from "actions/posts"
import Posts from 'components/Posts'

class PostsContainer extends Component {
  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    return <Posts {...this.props}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  const { posts } = state
  return {
    posts: posts.posts,
    isFetching: posts.isFetching
  }
}

export default connect(mapStateToProps, { getPosts })(PostsContainer)