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
import Cart from "./components/Cart";
import Featured from './components/Featured'
import TopsPage from "./components/TopsPage";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'


function App() {

  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="brand-logo" src="/logo.jpg" /><span className="brand-name">TheQuacks</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
            <Link to="/cart">
              <img className="cart-icon ml-2" src="/cart.png" />
            </Link>  
          </div>
        </div>
      </nav>
      <main role="main">

        <div className="container-fluid">
<<<<<<< HEAD
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
=======
          <div className="row products-page">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/tops" element={<Tops />} />
              <Route exact path="/bottoms" element={<Bottoms />} />
              <Route exact path="/socks" element={<Socks />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
>>>>>>> dev
          </div>
          <Footer />
        </div>
      </main>
      </Router>
    </>
  )
}

export default App