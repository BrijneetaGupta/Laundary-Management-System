import React from 'react'
import '../assets/css/footer.css'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () =>{
    return(
        <>
            <div className='top-footer py-2'>
                <h2>Now Refer & Earn ₹500 for every referral*</h2>
                <p className='mb-0'>* Terms and conditions will be applied</p>
            </div>
            <footer id="footer">
                <div className='container'>                    
                    <div className='row'>
                        <div className='col-md-4'>
                            <h3>About us</h3>
                            <p className='mb-0'>Doorstep Wash & Dryclean Service</p>
                        </div>
                        <div className='col-md-5'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <h4>Home</h4>
                                    <ul>
                                        <li><a href="#">Sign In</a></li>
                                        <li><a href="#">Register</a></li>
                                    </ul>
                                </div>
                                <div className='col-md-3'>
                                    <h4>Pricing</h4>
                                </div>
                                <div className='col-md-3'>
                                    <h4>Career</h4>
                                    <ul>
                                        <li><a href="#">Blogs</a></li>
                                        <li><a href="#">Create</a></li>
                                    </ul>
                                </div>
                                <div className='col-md-3'>
                                    <h4>Contact</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <h3>Social Media</h3>
                            <div class="social-div">
                                <ul class="social-links">
                                    <li>
                                        <a class="facebook" href="">
                                        {/* <img src="../assets/uploads/Footer.svg" width="30" height="30" /> */}
                                        </a>
                                    </li>
                                    <li>
                                        <a class="instagram" href="">
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer