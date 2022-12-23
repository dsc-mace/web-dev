import React  from "react";
import { Link, Navigate } from "react-router-dom";

function Logout() {

  function logout(){
    localStorage.clear();
    Navigate("/");
  }
  return (
    <div>
    <h1>Logged Out</h1>
    <Link to='/' onClick={logout}> Login Again</Link>
  </div>
  )
}

export default Logout
