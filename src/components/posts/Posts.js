import React from 'react'
import { Link } from 'react-router-dom'

const Posts = (props) => {
  const {posts} = props
  if (!posts || !posts.length) { return null }
  return <div className="posts">
      <ul>

        {
          props.posts.map((post, i) => {
              return <li key={i}>
                <p>title: {post.title}</p>
                <p>text: {post.text}</p>
              </li>
            }
          )
        }
      </ul>
    <Link to='/posts/new'>Add</Link>
    </div>
}

export default Posts