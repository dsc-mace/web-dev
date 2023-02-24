import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SupLogin from "./pages/SignIn/supLogin";
import Dashboard from "./pages/Dashboard/DashBoard";
import Logout from "./pages/Logout/Logout";
import Signup from "./pages/SignUp/signup";
import SupplierDashboard from "./pages/SupDashboard/SupplierDashboard";
import Users from "./pages/Dashboard/Users/Users";
import Menu from "./pages/Menu/Menu";
import Emailverify from "./pages/EmailVerify/Emailverify";
import Rfq from "./pages/Dashboard/Rfq/Rfq"
import Sidebar from "./pages/Dashboard/Sidebar/sidebar";
import MainDash from "./pages/Dashboard/MainDash/MainDash";

function App() {
  return (
    <Router>
      <Routes>
       
      <Route exact path="/" element={<Menu />}></Route>
      <Route exact path="/Signin" element={<SupLogin />}></Route>
        <Route path="/Dashboard"element={<Sidebar/>}></Route>
        <Route  path="/Logout" element={<Logout />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>
        <Route exact path="/SupplierDashboard" element={<SupplierDashboard />}></Route>
        <Route exact path="/Emailverify" element={<Emailverify />}></Route>

        <Route exact path="/maindash" element={<MainDash />}></Route>
        <Route exact path="/Rfq" element={<Rfq />}></Route>
        {/* <Route exact path="/Purchase-orders" element={<Orders />}></Route>
        <Route exact path="/Suppliers" element={<Suppliers />}></Route> */}
        <Route exact path="/Users" element={<Users />}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
