import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./SupplierDashboard.css";

const SupplierDashboard = () => {
  return (
    <div className="supplier-dashboard">
      <img className="side-bar-icon" alt="" src="../side-bar.svg" />
      <div className="navigation-menu">
        <img
          className="e-commercesort-asc-icon"
          alt=""
          src="../ecommercesort-asc.svg"
        />
        <img
          className="generalbriefcase-icon"
          alt=""
          src="../generalbriefcase.svg"
        />
        <img
          className="e-commercedelivery-icon"
          alt=""
          src="../ecommercedelivery.svg"
        />
        <img className="generalfile-icon" alt="" src="../generalfile.svg" />
        <Button className="navigation-menu-child" variant="primary">
          Dashboard
        </Button>
        <b className="rfq">RFQ</b>
        <b className="bids">Bids</b>
        <b className="clients">Clients</b>
        <b className="users">Users</b>
        <b className="documents">Documents</b>
        <b className="reports">Reports</b>
        <img
          className="e-commercetrolley-icon"
          alt=""
          src="../ecommercetrolley.svg"
        />
        <img
          className="communicationcontacts-icon"
          alt=""
          src="../communicationcontacts.svg"
        />
      </div>
      <Button className="po-main-button" variant="primary">
        Create a Purchase Order
      </Button>
      <div className="hello-anwar">
        <span className="hello">Hello</span>
        <b> Anwar</b>
      </div>
      <div className="supplier-dashboard-child" />
      <img className="asset-24x-icon" alt="" src="../images/logo.png" />
    </div>
  );
};

export default SupplierDashboard;
