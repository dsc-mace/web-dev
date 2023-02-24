import React from 'react'
import styles from "./sidebar.css"
import { Link } from "react-router-dom";
import Rfq from '../Rfq/Rfq';
import MainDash from '../MainDash/MainDash';

// import styles from "../../Dashboard/Dashboard.css"

function Sidebar() {
    function logout() {
        localStorage.clear();
      }
    
  return (
    <div>
      
      <div className="dashboard">
      <img className="asset24x1" alt="" src={require("../../images/logo.png")} />
      <div className="side-bar-icon"></div>
      <div className='alignment'>
        <div className="navigation-menu">
        {/* <img
            className="e-commercesort-asc-icon"
            alt=""
            src="../ecommercesort-asc.svg"
          />
          <img
            className="generalbriefcase-icon"
            alt=""
            src="../generalbriefcase.svg"
          /> */}
        {/* <img
          className="e-commercedelivery-icon"
          alt=""
          src="../ecommercedelivery.svg"
        /> */}
        {/* <img className="generalfile-icon" alt="" src="../generalfile.svg" /> */}
        <div className="locationhome-parent">
          {/* <img className="locationhome-icon" alt="" src="../locationhome.svg" /> */}
          {/* <button className="dashboard1">Dashboard</button> */}
          <Link to="/Maindash" className="dashboard1" style={{ textDecoration: 'none' }} >
          <span className="las la-home"></span>
        DashBoard</Link>
        </div>
        
        <Link to='/Rfq'  className="rfq" style={{ textDecoration: 'none' }}>
        <span className ="las la-file-alt"></span>
        RFQ</Link>
       
        <Link to='/Purchase-orders'  className="purchase-orders" style={{ textDecoration: 'none' }}>
        <span className ="las la-shopping-cart"></span>
        Purchase Orders</Link>
        <Link to='/Suppliers'  className="suppliers" style={{ textDecoration: 'none' }}>
        <span className ="las la-truck"></span>
        Suppliers</Link>
        <Link to='/Users' className="users" style={{ textDecoration: 'none' }}>
        <span className ="las la-user-circle"></span>
        Users</Link>
        <Link to='/Documents'  className="documents" style={{ textDecoration: 'none' }}>
        <span className ="las la-suitcase"></span>
        Documents</Link>
        <Link to='/Reports'  className="reports" style={{ textDecoration: 'none' }}>
        <span className ="las la-signal"></span>
        Reports</Link>
        {/* <img
          className="e-commercetrolley-icon"
          alt=""
          // src="../ecommercetrolley.svg"
        /> */}
        {/* <img
          className="communicationcontacts-icon"
          alt=""
          // src="../communicationcontacts.svg"
        /> */}
                <Link to="/Logout" className='logout' style={{ textDecoration: 'none' }} onClick={logout}>Logout</Link>
      </div>
      <div className="dashboard-child" >
        
        {/* <Rfq/>  */}
         {/* <MainDash/>  */}
         {/* <Users/>  */}
        </div>
    </div>
    </div>
      <div className="po-main-button">
        <div className="po-button" />
        <b className="create-a-purchase-order">Create a Purchase Order</b>
      </div>
      {/* <div className="hello-anwar">
        <span className="hello">Hello</span>
        <b> Anwar</b>
      </div> */}
      
     
      {/* <h1>
             This is the DashBoard
         </h1>
         <Link to="/" onClick={logout}>Logout</Link> */}
    </div>
  )
}

export default Sidebar