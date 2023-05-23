import React from "react";
import "../node_modules/bootstrap5/src/css/bootstrap.min.css";
import "../node_modules/bootstrap5/src/js/bootstrap.bundle.min.js";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
// import Footer from "./Footer";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/about" Component={About}/>
            <Route exact path="/service" Component={Service}/>
            <Route exact path="/contact" Component={Contact}/>
        </Routes>

        {/* <Footer/> */}
        </>
    )
}

export default App;