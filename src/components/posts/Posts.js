import React from 'react'
import { Link } from 'react-router-dom'
import { List } from 'antd';



const Posts = (props) => {
  const {posts, filtered, result, info, own, handleClick} = props
  if (!posts || !posts.length) { return null }
  let showPosts = posts
  if(own) {
    showPosts = filtered
  }

  return <div className="posts">
    { window.localStorage.getItem('token') && <div className="posts-buttons">
      <div className="group">
        <button className='own button button-primary' onClick={handleClick}>
          show {own ? 'all' : 'own'}
        </button>
        <Link to='/posts/new' className="button button-primary new-post">Add new post</Link>
      </div>

    </div> }

    <List
      itemLayout="vertical"
      size="large"
      dataSource={showPosts}
      renderItem={item => (
        <List.Item
          key={item.title}
        >
          <List.Item.Meta
            title={item.title}
          />
          {item.text}
        </List.Item>
      )}
    />
      {/*<ul>*/}
        {/*{*/}
          {/*showPosts.map((post, i) => {*/}
              {/*return <li key={i}>*/}
                {/*<p>title: {post.title}</p>*/}
                {/*<p>text: {post.text}</p>*/}
              {/*</li>*/}
            {/*}*/}
          {/*)*/}
        {/*}*/}
      {/*</ul>*/}
    </div>
}

export default Posts