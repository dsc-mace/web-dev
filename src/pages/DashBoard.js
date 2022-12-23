import React from 'react'
import { Link } from 'react-router-dom'


function DashBoard() {

  function logout(){
    localStorage.clear();
  }
  return (
<div>
        <h1>
            This is the DashBoard
        </h1>
        <Link to="/" onClick={logout}>Logout</Link>
      </div>  )
}

export default DashBoard