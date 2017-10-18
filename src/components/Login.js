import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Login = (props) => {
  const { handleSubmit } = props
  return <form onSubmit={ handleSubmit }>
    <div className="group">
      <label htmlFor="email">email:</label>
      <Field type="email" name='email' component='input'/>
    </div>
    <div className="group">
      <label htmlFor="password">password:</label>
      <Field type="password" name='password' component='input'/>
    </div>
    <input type="submit" value='Log in'/>
  </form>
}

Login = reduxForm({form: 'login'})(Login)

export default Login
