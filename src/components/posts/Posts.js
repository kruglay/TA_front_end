import React from 'react'
import { Link } from 'react-router-dom'

const Posts = (props) => {
  const {posts, filtered, result, info, own, handleClick} = props
  if (!posts || !posts.length) { return null }
  let showPosts = posts
  if(own) {
    showPosts = filtered
  }
  return <div className="posts">
      <ul>
        {
          showPosts.map((post, i) => {
              return <li key={i}>
                <p>title: {post.title}</p>
                <p>text: {post.text}</p>
              </li>
            }
          )
        }
      </ul>
    { window.localStorage.getItem('token') && <div className="footer">
      <button className='own' onClick={handleClick}>show {own ? 'all' : 'own'}</button>
      <br/>
      <Link to='/posts/new'>Add new post</Link>
    </div> }

    </div>
}

export default Posts