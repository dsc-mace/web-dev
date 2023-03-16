import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Verification from './pages/Verification/Verification'
import OrganizationDashboardHome from './pages/OrganizationDashboardHome/OrganizationDashboardHome'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import { AuthProvider } from './context/AuthContext'
import ForgotPassword from './pages/Login/ForgotPassword'
import OrganizationDashboardRFQ from './pages/OrganizationDashboardRFQ/OrganizationDashboardRFQ'

const App = () => {
    return (
        <>
        <ToastContainer />
        <AuthProvider>
            <Router>
                <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/forgot-password' element={<ForgotPassword/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/verification' element={<Verification/>}/>
                        <Route path='/organization/dashboard' element={<OrganizationDashboardHome/>}/>
                        <Route path='/organization/rfq' element={<OrganizationDashboardRFQ/>}/>
                </Routes>
            </Router>
        </AuthProvider>
        </>
    )
}

export default App