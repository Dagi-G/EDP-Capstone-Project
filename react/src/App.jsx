import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import './App.css'
import Footer from './components/Footer'
import Search from './components/Search'
import Home from './components/Home'
import Socks from "./components/Socks";
import Tops from "./components/Tops";
import Bottoms from "./components/Bottoms";


function App() {

  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src= "./resorce/logo.jpg"/>
          <Link className="navbar-brand" to="/">TheQuacks</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="/tops">
                Tops
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/bottoms">
                Bottoms
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/socks">
                Socks
              </Link>
              </li>
            </ul>
            <Search />  
          </div>
        </div>
      </nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">

        <div className="container-fluid">
          <div className="row">
<<<<<<< HEAD
            Grab the offers now!
            <Featured />
            <hr />
            <Routes>
              <Route path="/socks" element={< SocksPage/>}/>
            </Routes>
=======
        <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/tops" element={<Tops />} />
    <Route exact path="/bottoms" element={<Bottoms />} />
    <Route exact path="/socks" element={<Socks />} />
</Routes>
>>>>>>> dev
            <Footer />
          </div>
        </div>
      </main>
      </Router>
    </>
  )
}

export default App