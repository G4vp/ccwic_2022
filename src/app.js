import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './Pages/home'
import Schedule from './Pages/schedule'
import Speakers from './Pages/speakers'
import CCWiCNavbar from './Components/CCWiCNavbar'



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