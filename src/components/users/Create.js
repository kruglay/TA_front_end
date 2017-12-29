import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { Button } from 'antd'

const validate = value => {
  console.log('validate', value)
  const errors = {}
  if(value.password !== value.confirmPassword) {
    errors.confirmPassword = 'wrong password'
  }
  return errors
}

let CreateUser = ({handleSubmit, submitting, user}) => {
  return  <div className="createUser">
    {user && <Redirect to={'/'}/>}
    <form onSubmit={handleSubmit}>
      <div className="group">
        <Field type='text' name='username' component='input' placeholder="Login" required></Field>
      </div>
      <div className="group">
        <Field type='email' name='email' component='input' placeholder="Email" required></Field>
      </div>
      <div className="group">
        <Field type='password' name='password' component='input' placeholder="Password"  required></Field>
      </div>
      <div className="group">
        <Field
          name='confirmPassword'
          component={confirmPassword => {
            return <div style={{display:'inline'}} className="confirmPassword">
              <input type="password" {...confirmPassword.input} placeholder="Confirm password" />
              {confirmPassword.meta.touched && confirmPassword.meta.error && <span className="error">{confirmPassword.meta.error}</span>}
            </div>
          }}
        />
      </div>
      <div className="group">
        <button className="button button-primary" disabled={submitting}>Register</button>
      </div>
    </form>
    </div>

}

CreateUser = reduxForm({
  form: 'registerUser',
  validate
})(CreateUser)

export default CreateUser