import React from 'react'
import "../styles/global.css"
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="nav-bar">
          <div className="left">
            <h2>LOGO</h2>
          </div>
          <div className="right">
             <Link to={"/"}><h2>HOME</h2></Link>
             <Link to={"/addstudent"}><h2>ADD</h2></Link>
             <Link to={"/viewstudent"}><h2>VIEW</h2></Link>
          </div>

      </div>
    
    </>
  )
}

export default Nav