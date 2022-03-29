import React from 'react'
import '../assets/css/header.css'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';

const Header = () =>{
    return(
        <nav className='navbar navbar-expand-lg navbar-light'>
            <NavLink className='navbar-brand' to='/'>Laundry</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Pricing</NavLink>
                    </li>      
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Career</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Sign In</NavLink>
                    </li>            
                </ul>
            </div>
        </nav>
    )
}

export default Header;