import React from 'react';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from "./pages/AboutMe";
import Setup from "./pages/Setup";
import Anime from "./pages/Anime";
function Connections() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="about" element={<AboutMe/>} />
                <Route path="setup" element={<Setup/>} />
                <Route path="anime" element={<Anime/>} />
            </Routes>
        </Router>
    );
}

export default Connections;
