import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'

let CreatePost = (props) => {
  const {handleSubmit, result, info} = props
  return <div className="createPost">
    {result && <div className={info.type}>{info.message}</div>}
    <form onSubmit={ handleSubmit }>
      <div className="group" >
        <Field type="text" name='title' component='input' placeholder="Title" className="post-text" required/>
      </div>
      <div className="group">
        <Field name="text" component='textarea' placeholder="Text" className="post-title" required/>
      </div>
      <div className="group">
        <button className="button button-primary">
          Add
        </button>
      </div>
    </form>
    </div>

}

CreatePost = reduxForm({
  form: 'createPost',
  onSubmitSuccess: (result, dispatch) => dispatch(reset('createPost')),
})(CreatePost)

export default CreatePost