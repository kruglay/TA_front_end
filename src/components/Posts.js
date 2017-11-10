import React from 'react'

const Posts = (props) => {
  const {posts} = props
  if (!posts || !posts.length) { return null }
  return <ul>
    {
      props.posts.map((post, i) => {
          return <li key={i}>
            <p>{post.title}</p>
            <p>{post.text}</p>
          </li>
        }
      )
    }
  </ul>
}

export default Posts