import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SupLogin from "./pages/supLogin";
import Dashboard from "./pages/DashBoard";
import Logout from "./pages/Logout";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SupLogin />}></Route>
        <Route  path="/Dashboard" element={<Dashboard />}></Route>
        <Route  path="/Logout" element={<Logout />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
