import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import "./App.css"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App