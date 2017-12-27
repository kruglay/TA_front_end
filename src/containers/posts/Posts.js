import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { getPosts } from "actions/posts"
import { Posts, CreatePost } from 'components/posts'

class PostsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { own: false }
  }

  componentWillMount() {
    this.props.getPosts()
  }

  handleClick() {
    this.setState({own: !this.state.own})
  }

  render() {
    const {match} = this.props
    return  <div className="posts">

      <Posts {...this.props} handleClick={this.handleClick.bind(this)} own={this.state.own}/>
    </div>

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.posts
  }
}

export default connect(mapStateToProps, { getPosts })(PostsContainer)