import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './Pages/home.js'
import Schedule from './Pages/schedule.js'
import Speakers from './Pages/speakers.js'
import CCWiCNavbar from './Components/CCWiCNavbar.jsx'



function App() {
    return (
        <BrowserRouter>
            <CCWiCNavbar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/Schedule" element={<Schedule/>}/>
                <Route path="/Speakers" element={<Speakers/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App