import React from 'react'
import { Link } from 'react-router-dom'
import CreateUser from "containers/users/Create"
import { Route, Switch } from 'react-router-dom'
import Login from 'containers/Login'
import { CreatePost, Posts } from "../containers/posts";
import { Menu, Icon } from 'antd'

const Main = ({info, handleClickLogout, handleClick, current}) => {
  let user = window.localStorage.getItem('user')
  return  <div className="main">
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal">
        {!user && <Menu.Item key='login'>
          <Link to={'/login'}>
            <Icon type="login" />Login
          </Link>
        </Menu.Item>}
        {!user && <Menu.Item key='signup'>
          <Link to={'/signup'}>
            <Icon type="user" />Signup
          </Link>
        </Menu.Item>}
        {user && <Menu.Item key='logout'>
          <a href="" onClick={handleClickLogout}>
            <Icon type="logout" />Logout
          </a>
        </Menu.Item>}
        <Menu.Item key='posts'>
          <Link to={'/posts'}>
            <Icon type="message"/>Posts
          </Link>
        </Menu.Item>
      </Menu>
      {info && <span className={`${info.type}`}> {info.message} </span>}
      <Switch>
        <Route exact path={'/signup'} component={CreateUser}/>
        <Route exact path={'/login'} component={Login}/>
        <Route exact path={'/posts'} component={Posts}/>
        <Route exact path={'/posts/new'} component={CreatePost}/>
      </Switch>
    </div>

}

export default Main

