import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <img className="asset-24x-1" alt="" src={require("../images/logo.png")} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className="sizes">Welcome to Metics Portal</h2>
      <br />
      <br />
      <div className="row">
        <div className="column">
          <div className="card1">
            <h3>Supplier Login</h3>
          </div>
        </div>

        <div className="column">
          <div className="card2">
            <h3>Buyer Login</h3>
          </div>
        </div>

        <div className="column">
          <div className="card3">
            <h3>Metics Explore</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
