import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Verification from './pages/Verification/Verification'
import "./App.css"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/verification' element={<Verification/>}/>
            </Routes>
        </Router>
    )
}

export default App