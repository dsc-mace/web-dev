import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./smanagement.css";
import Sidebar from "../../Dashboard/Sidebar/sidebar";

const Smanagement = () => {

  return (
    <div className="align">
      {/* <Sidebar/> */}
    
    <div className='dashboard-child'>
      {/* <img className="asset-24x-1" alt="" src={require('../../images/logo.png')} /> */}
      <br/>
    <div className='title'>
        <h1> Supplier Management </h1>
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
            <p className="head1">Approved</p>
            <h2 className="pp">2.890</h2>
            </div>
          </div>

          <div className="columnn">
            <div className="card4">
            <p className="head1">Public</p>
             <h2 className="pp">$1.870</h2>
            </div>
          </div>

          <div className="columnn">
            <div className="card5">
            <p >Add a New</p>
            <p className="pp">Supplier</p>
            </div>
          </div>
     </div>

</div>
</div>
  );
};

export default Smanagement;
