import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import { Link } from "react-router-dom";
import Dashboard from '../DashBoard';

function Users() {
  return (
    <div className='align'>
       <Sidebar/>
       <div className="dashboard-child" >
        this is users page 
       </div>
    </div>
  )
}

export default Users