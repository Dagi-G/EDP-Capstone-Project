import React, { useState, useEffect } from "react";
import SocksPage from './components/SocksPage'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import './App.css'
import Footer from './components/Footer'
import Search from './components/Search'
import Featured from './components/Featured'


function App() {

  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TheQuacks</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="/">
                Tops
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/">
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
            Grab the offers now!
            <Featured />
            <hr />
            <Routes>
              <Route path="/socks" element={< SocksPage/>}/>
            </Routes>
            <Footer />
          </div>
        </div>
      </main>
      </Router>
    </>
  )
}

export default App