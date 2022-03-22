import React from 'react'
import '../assets/css/login.css'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';

const Login = () =>{
    return(
        <>            
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6  bg-white register-section'>
                            <h1 className='mb-3'>Laundry Service</h1>
                            <h4 className='mb-5'>Doorstep Wash & Dryclean Service</h4>
                            <h6 className='mb-3'>Don’t Have An Account?</h6>
                            <button className='btn btn-regular'><NavLink to="/Register">Register</NavLink></button>
                        </div>
                        <div className='col-md-6 login-section'>
                            <h3>Sign in</h3>
                            <form className='mb-5' method="Post">
                                <div className="form-group">
                                    <input type="email" className="form-control pl-0" id="email" placeholder="Mobile / Email" />                                    
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control pl-0" id="password" placeholder="Password" />
                                </div>
                                <small>Forget Password?</small>
                            </form>
                            <button className='btn btn-filled'>Sign In</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login