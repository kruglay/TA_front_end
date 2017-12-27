import React, { Component } from 'react'
import { CreatePost } from 'components/posts'
import { connect } from 'react-redux'
import { createPost } from "../../actions/posts"

class CreatePostsContainer extends  Component {
  submit(value) {
    console.log(value)
    this.props.createPost({
      ...value,
    })
  }

  render() {
    return <CreatePost onSubmit={this.submit.bind(this)} {...this.props}/>
  }
}

const mapStateToProps = ({posts}) => {
  const {result, info} = posts
  return {
    result,
    info
  }
}

export default connect(mapStateToProps, {createPost})(CreatePostsContainer)