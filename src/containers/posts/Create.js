import React, { Component } from 'react'
import { CreatePost } from 'components/posts'
import { connect } from 'react-redux'
import { createPost } from "../../actions/posts"

class CreatePostsContainer extends  Component {
  submit(value) {
    console.log(value)
    this.props.createPost({
      value,
    })
  }

  render() {
    return <CreatePost onSubmit={this.submit.bind(this)}/>
  }
}

export default connect(null, {createPost})(CreatePostsContainer)