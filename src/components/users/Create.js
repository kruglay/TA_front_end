import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = value => {
  console.log('validate', value)
  const errors = {}
  if(value.password !== value.confirmPassword) {
    errors.confirmPassword = 'wrong password'
  }
  return errors
}

let CreateUser = ({handleSubmit, submitting}) => {
  return <form onSubmit={handleSubmit}>
    <div className="group">
      <label htmlFor="username">Login:</label>
      <Field type='text' name='username' component='input' required></Field>
    </div>
    <div className="group">
      <label htmlFor="email">Email:</label>
      <Field type='email' name='email' component='input' required></Field>
    </div>
    <div className="group">
      <label htmlFor="password">Password:</label>
      <Field type='password' name='password' component='input' required></Field>
    </div>
    <div className="group">
      <label htmlFor="confirmPassword" required>Confirm password:</label>
      <Field
        name='confirmPassword'
        component={confirmPassword => {
          return <div style={{display:'inline'}} className="confirmPassword">
            <input type="password" {...confirmPassword.input}/>
            {confirmPassword.meta.touched && confirmPassword.meta.error && <span>{confirmPassword.meta.error}</span>}
          </div>
        }}
      />
    </div>
    <button type="submit" disabled={submitting}>Register</button>
  </form>
}

CreateUser = reduxForm({
  form: 'registerUser',
  validate
})(CreateUser)

export default CreateUser