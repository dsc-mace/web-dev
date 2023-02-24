import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar/sidebar";

// function DashBoard() {

//   function logout(){
//     localStorage.clear();
//   }
//   return (
// <div>
//         <h1>
//             This is the DashBoard
//         </h1>
//         <Link to="/" onClick={logout}>Logout</Link>
//       </div>  )
// }

// export default DashBoard

import "./Dashboard.css";
import MainDash from "./MainDash/MainDash";
import Users from "./Users/Users";

const Dashboard = () => {
  function logout() {
    localStorage.clear();
  }
  return (
    
    // <div className="dashboard">
    //   <div className="side-bar-icon"></div>
    //   <div>
    //     <Sidebar/>
    //   </div>
    //   <div className="po-main-button">
    //     <div className="po-button" />
    //     <b className="create-a-purchase-order">Create a Purchase Order</b>
    //   </div>
    //   {/* <div className="hello-anwar">
    //     <span className="hello">Hello</span>
    //     <b> Anwar</b>
    //   </div> */}
    //   <div className="dashboard-child" >
    //     {/* <MainDash/> */}
    //     {/* <Users/> */}
    //     </div>
    //   <img className="asset24x1" alt="" src={require("../images/logo.png")} />
    //   {/* <h1>
    //          This is the DashBoard
    //      </h1>
    //      <Link to="/" onClick={logout}>Logout</Link> */}
    // </div>
    <div>


     
    </div>
    
  );
};

export default Dashboard;
