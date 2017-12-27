import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'

let Login = (props) => {
  const { handleSubmit, user } = props
  return <div className="login">
    {user && <Redirect to={'/'}/>}
    <form onSubmit={ handleSubmit }>
      <div className="group">
        <label htmlFor="username">username:</label>
        <Field type="text" name='username' component='input'/>
      </div>
      <div className="group">
        <label htmlFor="password">password:</label>
        <Field type="password" name='password' component='input'/>
      </div>
      <input type="submit" value='Log in'/>
    </form>
    </div>
}

Login = reduxForm({form: 'login'})(Login)

export default Login
