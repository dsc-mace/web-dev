import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SupLogin from "./pages/SignIn/supLogin";
import Dashboard from "./pages/Dashboard/DashBoard";
import Logout from "./pages/Logout/Logout";
import Signup from "./pages/SignUp/signup";
import SupplierDashboard from "./pages/SupDashboard/SupplierDashboard";
import Users from "./pages/Dashboard/Users/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SupLogin />}></Route>
        <Route  path="/Dashboard" element={<Dashboard />}></Route>
        <Route  path="/Logout" element={<Logout />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>
        <Route exact path="/SupplierDashboard" element={<SupplierDashboard />}></Route>
        <Route exact path="/Users" element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
