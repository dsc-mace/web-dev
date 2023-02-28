import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Verification from './pages/Verification/Verification'
import OrganizationDashboardHome from './pages/OrganizationDashboardHome/OrganizationDashboardHome'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import { AuthProvider } from './context/AuthContext'

const App = () => {
    return (
        <>
        <ToastContainer />
        <AuthProvider>
            <Router>
                <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/verification' element={<Verification/>}/>
                        <Route path='/organization/dashboard' element={<OrganizationDashboardHome/>}/>
                </Routes>
            </Router>
        </AuthProvider>
        </>
    )
}

export default App