import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from 'actions/posts'
import { logout, addUserData } from 'actions/auth'
import Main from 'components/Main'

class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {current:''}
  }

  componentWillMount() {
    this.props.addUserData()
  }

  handleClickLogout(e) {
    e.preventDefault()
    this.props.logout()
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return <Main
      {...this.props}
      handleClickLogout={this.handleClickLogout.bind(this)}
      handleClick={this.handleClick.bind(this)}
      current={this.state.current}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth
  }
}

export default connect(mapStateToProps, { getPosts, logout, addUserData })(MainContainer)
