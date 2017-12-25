import React from 'react'

const Main = ({info}) => {
  return  <div className="main">
    {Object.keys(info).length > 0 && <span className={`${info.type}`}> {info.message} </span>}
      <ul className="links">
        <li></li>
      </ul>
    </div>

}

export default Main

