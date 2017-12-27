import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'

let CreatePost = (props) => {
  const {handleSubmit, result, info} = props
  return <div className="createPost">
    {result === 'fail' && <div className={info.type}>{info.message}</div>}
    {result === 'success' && <div className={info.type}>{info.message}</div>}
    <form onSubmit={ handleSubmit }>
      <div className="group">
        <label htmlFor="title">title:</label>
        <Field type="text" name='title' component='input' required/>
      </div>
      <div className="group">
        <label htmlFor="text">text:</label>
        <Field name="text" component='textarea' required/>
      </div>
      <input type="submit" value='Add'/>
    </form>
    </div>

}

CreatePost = reduxForm({
  form: 'createPost',
  onSubmitSuccess: (result, dispatch) => dispatch(reset('createPost')),
})(CreatePost)

export default CreatePost