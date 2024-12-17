import React from 'react'

import './Navbar.css'

import { IoBook } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="kk">
                    <b> <IoBook/> todo</b>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="kk">
                                Home
                            </a>
                        </li>    
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="kk">
                                About Us
                            </a>
                        </li>     
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="kk">
                                todo
                            </a>
                        </li>     
                          
                        <li className="nav-item mx-2 mb-2 ">
                            <a className="nav-link active btn-nav d-flex justify-content-center" aria-current="page" href="kk">
                                Sign Up
                            </a>
                        </li>     
                        <li className="nav-item mx-2 mb-2">
                            <a className="nav-link d-flex justify-content-center active btn-nav" aria-current="page" href="kk">
                                Sign In
                            </a>
                        </li>     
                        <li className="nav-item mx-2 mb-2">
                            <a className="nav-link d-flex justify-content-center active btn-nav" aria-current="page" href="kk">
                                Log Out
                            </a>
                        </li>       
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar