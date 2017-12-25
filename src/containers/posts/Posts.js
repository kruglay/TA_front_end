import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { getPosts } from "actions/posts"
import { Posts, CreatePost } from 'components/posts'

class PostsContainer extends Component {
  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    const {match} = this.props
    return  <div className="posts">

      <Posts {...this.props}/>
    </div>

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