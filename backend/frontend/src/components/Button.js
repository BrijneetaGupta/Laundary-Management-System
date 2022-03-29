import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';

const Button = () =>{
    return(
        <>
            <button className='btn btn-regular'><NavLink to="/">Register</NavLink></button>
            {/* <button className='btn btn-filled'>Sign In</button> */}
        </>
    )
}

export default Button