import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Verification from './pages/Verification/Verification'
import OrganizationDashboardHome from './pages/OrganizationDashboardHome/OrganizationDashboardHome'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

const App = () => {
    return (
        <>
        <ToastContainer />
        <Router>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/verification' element={<Verification/>}/>
                <Route path='/organization/dashboard' element={<OrganizationDashboardHome/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default App