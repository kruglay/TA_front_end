import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'

let Login = (props) => {
  const { handleSubmit, user } = props
  return <div className="login">
    {user && <Redirect to={'/'}/>}
    <form onSubmit={ handleSubmit }>
      <div className="group">
        <Field type="text" name='username' component='input' placeholder="Username"/>
      </div>
      <div className="group">
        <Field type="password" name='password' component='input' placeholder="Password"/>
      </div>
      <div className="group">
        <button className="button button-primary">Log in</button>
      </div>
    </form>
    </div>
}

Login = reduxForm({form: 'login'})(Login)

export default Login
