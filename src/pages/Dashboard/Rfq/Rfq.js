import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./Rfq.css";
import Sidebar from "../Sidebar/sidebar";

const PurchaseOrderDashboard = () => {

  return (
<div className='align'>
    <Sidebar/>
    <div className="dashboard-child" >
              <div className='title'>
                    <h1>Purchase orders </h1>
                </div>
                <br/>

                <div className="row">
              
                      <div className="column">
                        <div className="card1">
                          <p>All</p>
                          <h2>1.345</h2>
                        </div>
                      </div>

                      <div className="column">
                        <div className="card1">
                        <p>Accepted</p>
                        <h2>2.890</h2>
                        </div>
                      </div>

                      <div className="column">
                        <div className="card1">
                        <p>Pending</p>
                        <h2>$1.870</h2>
                        </div>
                      </div>

                      <div className="column">
                        <div className="card2">
                        <p>Create New</p>
                        <p>Purchase Order</p>
                        </div>
                      </div>
                </div> 
       </div>
  </div>
  );
};

export default PurchaseOrderDashboard;
