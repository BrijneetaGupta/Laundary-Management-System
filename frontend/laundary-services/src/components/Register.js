import React from 'react'
import '../assets/css/register.css'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Register = () =>{
    return(
        <>            
            <section id="register">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-3 login-div bg-white'>
                            <h2 className='mb-3'>Laundry Service</h2>
                            <h4 className='mb-5'>Doorstep Wash & Dryclean Service</h4>
                            <h6 className='mb-3'>Already Have An Account?</h6>
                            <button className='btn btn-regular'><NavLink to="/">Sign In</NavLink></button>
                        </div>
                        <div className='col-md-9 register-div'>
                            <h3>Register</h3>
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div class="col">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="number" className="form-control" placeholder="Phone" />
                                    </div>
                                    <div class="col">
                                        <select id="inputState" class="form-select">
                                            <option selected>--Select State--</option>
                                            <option>Andhra Pradesh</option>
                                            <option>Chhatisgarh</option>
                                            <option>Haryana</option>
                                            <option>Meghalaya</option>
                                            <option>Rajasthan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <select id="inputState" class="form-select">
                                            <option selected>--Select District--</option>
                                            <option>Andhra Pradesh</option>
                                            <option>Chhatisgarh</option>
                                            <option>Haryana</option>
                                            <option>Meghalaya</option>
                                            <option>Rajasthan</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <input type="text" className="form-control" placeholder="Address" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="number" className="form-control" placeholder="Pincode" />
                                    </div>
                                    <div class="col">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-group my-5">
                                    <div className="form-check d-flex">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        I agree to Terms & Condition receiving marketing and promotional materials
                                    </label>
                                    </div>
                                </div>
                            </form>
                            <button className='btn btn-filled'>Register</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Register