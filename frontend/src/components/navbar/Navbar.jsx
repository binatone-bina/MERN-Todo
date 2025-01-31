import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

import { IoBook } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { authActions } from '../../store'

const Navbar = () => {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    
    const logout = () => {
        sessionStorage.clear('id');
        dispatch(authActions.logout());
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <b> <IoBook/> todo</b>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>    
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">
                                    About Us
                                </Link>
                            </li>     
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/todo">
                                    todo
                                </Link>
                            </li>     

                            {!isLoggedIn && 
                            <>
                                <li className="nav-item mx-2 mb-2 ">
                                    <Link className="nav-link active btn-nav d-flex justify-content-center" aria-current="page" to="/signUp">
                                        Sign Up
                                    </Link>
                                </li>     
                                <li className="nav-item mx-2 mb-2">
                                    <Link className="nav-link d-flex justify-content-center active btn-nav" aria-current="page" to="/signIn">
                                        Sign In
                                    </Link>
                                </li>   
                            </>  
                            }
                            
                            {isLoggedIn && 
                            <>
                                <li className="nav-item mx-2 mb-2">
                                    <Link className="nav-link d-flex justify-content-center active btn-nav" aria-current="page" to="#" onClick={logout}>
                                        Log Out
                                    </Link>
                                </li>      
                            </>
                            }
                            {console.log(isLoggedIn)}
                             
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar