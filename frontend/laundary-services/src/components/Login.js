import React,{useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import '../assets/css/login.css'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Footer from './Footer';

const Login = () =>{
  const navigate = useNavigate()
    const [user,setUser] = useState({
        Email:"",Password:""
    });
    
    const handleInputs = (e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }
    const login = ()=>{
        axios.post("http://localhost:9002/login",user)
        .then((res)=>{
            alert(res.data.message)
           navigate("./CreateOrder.js")
        })
            
        .catch(e=>console.log("Not able to connect backend"))
    }

    return(
        <>            
            <section id="login">
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
                            <form className='mb-5'>
                                <div className="form-group">
                                    <input type="text" name='Email' className="form-control pl-0" id="email" placeholder="Mobile / Email*" value={user.Email} onChange = {handleInputs} required/>                                    
                                </div>
                                <div className="form-group">
                                    <input type="password" name='Password' className="form-control pl-0" id="password" placeholder="Password*" value={user.Password} onChange = {handleInputs} required/>
                                </div>
                                <small>Forget Password?</small>
                                <div className='submit-btn'>
                                    <input type="submit" name='SignIn' className='btn btn-filled' value="Sign In" onClick={login}/>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Login