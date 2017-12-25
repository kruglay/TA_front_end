import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CreatePost = (props) => {
  const {handleSubmit} = props
  return <form onSubmit={ handleSubmit }>
    <div className="group">
      <label htmlFor="title">title:</label>
      <Field type="text" name='title' component='input'/>
    </div>
    <div className="group">
      <label htmlFor="text">text:</label>
      <Field name="text" component='textarea'/>
    </div>
    <input type="submit" value='Add'/>
  </form>
}

CreatePost = reduxForm({form: 'createPost'})(CreatePost)

export default CreatePost