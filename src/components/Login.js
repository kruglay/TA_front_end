import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Login = (props) => {
  const { handleSubmit, result, username } = props
  let comp
  if (result === 'success') {
    comp = <span>Welcome back {username}</span>
  } else {
    comp = <form onSubmit={ handleSubmit }>
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
  }
  return <div className="login">
      {comp}
    </div>
}

Login = reduxForm({form: 'login'})(Login)

export default Login
