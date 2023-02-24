import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./Rfq.css";

const PurchaseOrderDashboard = () => {

  return (
    
    <div className='container'>
      <img className="asset-24x-1" alt="" src={require('../../images/logo.png')} />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <div className='title'>
        <h1>RFQ </h1>
    </div>
    <br/>

    <div className="roww">
  
          <div className="columnn">
            <div className="card4">
              <p className="head1">All</p>
              <h2 className="pp">1.345</h2>
            </div>
          </div>

          <div className="columnn">
            <div className="card4">
            <p className="head1">Accepted</p>
            <h2 className="pp">2.890</h2>
            </div>
          </div>

          <div className="columnn">
            <div className="card4">
            <p className="head1">Pending</p>
             <h2 className="pp">$1.870</h2>
            </div>
          </div>

          <div className="columnn">
            <div className="card5">
            <p >Create New</p>
            <p className="pp">RFQ</p>
            </div>
          </div>
     </div>

</div>
  );
};

export default PurchaseOrderDashboard;
