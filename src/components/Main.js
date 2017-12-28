import React from 'react'
import { Link } from 'react-router-dom'
import CreateUser from "containers/users/Create"
import { Route, Switch } from 'react-router-dom'
import Login from 'containers/Login'
import { CreatePost, Posts } from "../containers/posts";
import { Button } from 'antd'


const Main = ({info, handleClick}) => {
  let user = window.localStorage.getItem('user')
  return  <div className="main">
    {Object.keys(info).length > 0 && <span className={`${info.type}`}> {info.message} </span>}
      <Button type="primary">Button</Button>
      <ul className="links">
        {!user && <li>
          <Link to={'/login'}>Login</Link>
        </li>}
        {!user && <li>
          <Link to={'/signup'}>Sign up</Link>
        </li>}
        {user && <li>
          <a href="" onClick={handleClick}>Logout</a>
        </li>}
        <li>
          <Link to={'/posts'}>Posts</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={'/signup'} component={CreateUser}/>
        <Route exact path={'/login'} component={Login}/>
        <Route exact path={'/posts'} component={Posts}/>
        <Route exact path={'/posts/new'} component={CreatePost}/>
      </Switch>
    </div>

}

export default Main

