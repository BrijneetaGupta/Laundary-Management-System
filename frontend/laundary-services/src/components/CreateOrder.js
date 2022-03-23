import React from 'react'
import '../assets/css/createOrder.css'
import '../App.css'
import DashboardSidebar from './DashboradSidebar';
import Search from './Search';
import jeans from '../assets/productImages/jeans.jpg';
import joggers from '../assets/productImages/joggers.jpg';
import others from '../assets/productImages/others.jpg';
import trousers from '../assets/productImages/trousers.jpg';
import tshirts from '../assets/productImages/tshirts.jpg';
import shirts from '../assets/productImages/shirts.jpg';
import boxers from '../assets/productImages/boxers.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import wash from '../assets/uploads/icons/washing-machine-grey.svg';
import iron from '../assets/uploads/icons/ironing-grey.svg';
import towel from '../assets/uploads/icons/towel-grey.svg';
import bleach from '../assets/uploads/icons/bleach-grey.svg';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
    const navigate = useNavigate();
    const [amount, setamount] = useState(0)
    const [totalitems, setItem] = useState(0)
    const [price, setPrice] = useState({
        "shirt": 0,
        "tshirt": 0,
        "trouser": 0,
        "jean": 0,
        "jogger": 0,
        "boxer": 0,
        "other": 0
    });

    const [shirt, setShirt] = useState([false, false, false, false]);
    const [tshirt, setTshirt] = useState([false, false, false, false]);
    const [trouser, setTrouser] = useState([false, false, false, false]);
    const [jean, setJean] = useState([false, false, false, false]);
    const [jogger, setJogger] = useState([false, false, false, false]);
    const [boxer, setBoxer] = useState([false, false, false, false]);
    const [other, setOther] = useState([false, false, false, false]);

    const WashShirtService = (ind) => {
        const washlist = shirt
        if (washlist[ind] === true) {
            washlist[ind] = false
        } else {
            washlist[ind] = true
        }
        setShirt(washlist)
        console.log(washlist)
        const val = cost(washlist)
        setPrice({
            ...price,
            "shirt": val
        })

    }


    const TshirtWashService = (ind) => {
        const washlist = tshirt
        if (washlist[ind] === true) {
            washlist[ind] = false
        } else {
            washlist[ind] = true
        }
        setTshirt(washlist)
        console.log(washlist)
        const val = cost(washlist)
        setPrice({
            ...price,
            "tshirt": val
        })
    }
    const TrouserWashService = (ind) => {
        const washlist = trouser
        if (washlist[ind] === true) {
            washlist[ind] = false
        } else {
            washlist[ind] = true
        }
        setTrouser(washlist)
        console.log(washlist)
        const val = cost(washlist)
        setPrice({
            ...price,
            "trouser": val
        })
    }
    const JeanWashService = (ind) => {
        const washlist = jean
        if (washlist[ind] === true) {
            washlist[ind] = false
        } else {
            washlist[ind] = true
        }
        setJean(washlist)
        console.log(washlist)
        const val = cost(washlist)
        setPrice({
            ...price,
            "jean": val
        })
    }
    const JoggerWashService = (ind) => {
        const washlist = jogger
        if (washlist[ind] === true) {
            washlist[ind] = false
        } else {
            washlist[ind] = true
        }
        setJogger(washlist)
        console.log(washlist)
        const val = cost(washlist)
        setPrice({
            ...price,
            "jogger": val
        })
    }
    const BoxerWashService = (ind) => {
        const washlist = boxer
        if (washlist[ind] === true) {
            washlist[ind] = false
        } else {
            washlist[ind] = true
        }
        setBoxer(washlist)
        console.log(washlist)
        const val = cost(washlist)
        setPrice({
            ...price,
            "boxer": val
        })
    }
    const OtherWashService = (ind) => {
        const washlist = other
        if (washlist[ind] === true) {
            washlist[ind] = false
        } else {
            washlist[ind] = true
        }
        setOther(washlist)
        console.log(washlist)
        const val = cost(washlist)
        setPrice({
            ...price,
            "other": val
        })
    }
    const cost = (arr) => {

        var cost = 0
        for (let i = 0; i < 4; i++) {
            if (i === 0) {
                if (arr[i] === true) {
                    cost += 20
                }
            } else if (i === 1) {
                if (arr[i] === true) {
                    cost += 15
                }
            } else if (i === 2) {
                if (arr[i] === true) {
                    cost += 10
                }
            } else {
                if (arr[i] === true) {
                    cost += 25
                }

            }
        }


        return cost
    }











    const [User, setUser] = useState({
        "shirt": 0,
        "tshirt": 0,
        "trouser": 0,
        "jean": 0,
        "jogger": 0,
        "boxer": 0,
        "other": 0
    })

    const handler = (e) => {

        const { name, value } = e.target

        setUser({
            ...User,
            [name]: value
        })
    }
    const Counthandler = () => {
        setItem(parseFloat(User.shirt) + parseFloat(User.tshirt) + parseFloat(User.trouser) + parseFloat(User.jean) + parseFloat(User.jogger) + parseFloat(User.boxer) + parseFloat(User.other));
        console.log("final item", totalitems)
        var amountt = 0
        console.log(price)
        for (const [key, value] of Object.entries(price)) {
            amountt += parseFloat(value * User[key])
            setamount(amountt)
            console.log("final", amount)
        }
        console.log(price)
        var today = new Date()
        console.log("date", today)
        const services = [];
        for (const [key, value] of Object.entries(User)) {
            var KEY = key
            var person = {}
            if (User[KEY] !== 0) {
                person.producttype = KEY;
                person.quantity = User[KEY];
                person.price = price[KEY];
                if (KEY === "shirt") {
                    person.services = shirt

                } else if (KEY === "tshirt") {
                    person.services = tshirt

                } else if (KEY === "jean") {
                    person.services = jean

                } else if (KEY === "trouser") {
                    person.services = trouser

                } else if (KEY === "boxer") {
                    person.services = boxer

                } else if (KEY === "jogger") {
                    person.services = jogger

                } else {
                    person.services = other
                }


                console.log("array", person)
                services.push(person)
                console.log(services)
                console.log("amountt", amount)
                console.log("items", totalitems)
            }
        }
        // axios({
        //     url: "http://localhost:3004/orders",
        //     method: "POST",
        //     headers: {
        //         authorization: mytoken,
        //     },
        //     data: {
        //         "amount": amount, "totalitems": totalitems, "date": today, "status": "done ordered successfully", "services": services
        //     }




        // })

        //     .then(res => {
        //         alert(res.data.status)
        //     })
    }
    const clearItem = (item) => {
        if (item === "shirt") {
            const newSelection = [false, false, false, false];
            setShirt(newSelection)
            User.shirt = 0;
            price.shirt = 0;
        } else if (item === "tshirt") {
            const newSelection = [false, false, false, false];
            setTshirt(newSelection)
            User.tshirt = 0;
            price.tshirt = 0;
        } else if (item === "trouser") {
            const newSelection = [false, false, false, false];
            setTrouser(newSelection)
            User.trouser = 0;
            price.trouser = 0;
        } else if (item === "jean") {
            const newSelection = [false, false, false, false];
            setJean(newSelection)
            User.jean = 0;
            price.jean = 0;

        } else if (item === "jogger") {
            const newSelection = [false, false, false, false];
            setJogger(newSelection)
            User.jogger = 0;
            price.jogger = 0;

        } else if (item === "boxer") {
            const newSelection = [false, false, false, false];
            setBoxer(newSelection)
            User.boxer = 0;
            price.boxer = 0;

        } else {
            const newSelection = [false, false, false, false];
            setOther(newSelection)
            User.other = 0;
            price.other = 0;

        }
    }


    return (
        <>
            <DashboardSidebar />
            <section id="createOrder">
                <h5 className='mt-4'>Create Order</h5>
                <Search />
                <table className="table product_list mt-2">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Product Types</th>
                            <th scope="row">Quantity</th>
                            <th scope="row">Wash Type</th>
                            <th scope="row">Price</th>
                            <th scope="row"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={shirts} />
                                    </div>
                                    <div class="text">
                                        <h6 className='mb-0'>Shirts</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            <td>
                                <input className="quan" name="shirt" type={Number} value={User.shirt} onChange={handler} ></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li>
                                    <button className="cont" style={shirt[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => WashShirtService(0)}>
                                        <img src={wash} /> </button>
                                    </li>
                                    <li><button className="cont" style={shirt[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => WashShirtService(1)}>
                                        <img src={iron} /> </button>
                                    </li>
                                    <li>
                                    <button className="cont" style={shirt[2] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => WashShirtService(2)} >
                                        <img src={towel} /> </button>
                                    </li>
                                    <li> <button className="cont" style={shirt[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => WashShirtService(3)} >
                                        <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                       
                                {User.shirt && price.shirt ?
                                    <td>{price.shirt}*{User.shirt}=<span className="total">{price.shirt * User.shirt}</span></td> :
                                    <td>--</td>}
                                {/* <button className='btn btn-regular'>Reset</button> */}
                                <td><button className="reset btn btn-regular" onClick={() => clearItem("shirt")}>Reset</button></td>
                        
                        </tr>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={tshirts} />
                                    </div>
                                    <div class="text">
                                        <h6 className='mb-0'>T Shirts</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="tshirt" type={Number} value={User.tshirt} onChange={handler} ></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li><button className="cont" style={tshirt[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TshirtWashService(0)}>
                                            <img src={wash} /> </button>
                                    </li>
                                    <li>    <button className="cont" style={tshirt[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TshirtWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={tshirt[2] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TshirtWashService(2)} >
                                    <img src={towel} /> </button>
                                    </li>
                                    <li> <button className="cont" style={tshirt[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TshirtWashService(3)} >
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            
                                {User.tshirt && price.tshirt ?
                                    <td>{price.tshirt}*{User.tshirt}=<span className="total">{price.tshirt * User.tshirt}</span></td> :
                                    <td>--</td>}
                                <td><button className="reset btn btn-regular" onClick={() => clearItem("tshirt")}  >Reset</button></td>
                            
                        </tr>

                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={trousers} />
                                    </div>
                                    <div class="text">
                                        <h6 className='mb-0'>Trousers</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="trouser" type={Number} value={User.trouser} onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li><button className="cont" style={trouser[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TrouserWashService(0)}>
                                    <img src={wash} /> </button>
                                    </li>
                                    <li>   <button className="cont" style={trouser[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TrouserWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={trouser[2] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TrouserWashService(2)} >
                                    <img src={towel} /> </button>
                                    </li>
                                    <li><button className="cont" style={trouser[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TrouserWashService(3)} >
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            {User.trouser && price.trouser ?
                                <td>{price.trouser}*{User.trouser}=<span className="total">{price.trouser * User.trouser}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => clearItem("trouser")}  >Reset</button></td>

                        </tr>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={jeans} />
                                    </div>
                                    <div class="text">
                                        <h6 className='mb-0'>Jeans</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="jean" type={Number} value={User.jean} onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li> <button className="cont" style={jean[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JeanWashService(0)}>
                                    <img src={wash} /> </button>
                                    </li>
                                    <li><button className="cont" style={jean[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JeanWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={jean[2] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JeanWashService(2)}>
                                    <img src={towel} /> </button>
                                    </li>
                                    <li><button className="cont" style={jean[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JeanWashService(3)}>
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            {User.jean && price.jean ?
                                <td>{price.jean}*{User.jean}=<span className="total">{price.jean * User.jean}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => clearItem("jean")}  >Reset</button></td>

                        </tr>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={joggers} />
                                    </div>
                                    <div class="text">
                                        <h6 className='mb-0'>Jogger</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="jogger" type={Number} value={User.jogger} onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li> <button className="cont" style={jogger[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JoggerWashService(0)}>
                                    <img src={wash} /> </button>
                                    </li>
                                    <li><button className="cont" style={jogger[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JoggerWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={jogger[2] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JoggerWashService(2)}>
                                    <img src={towel} /> </button>
                                    </li>
                                    <li><button className="cont" style={jogger[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JoggerWashService(3)}>
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            {User.jogger && price.jogger ?
                                <td>{price.jogger}*{User.jogger}=<span className="total">{price.jogger * User.jogger}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => clearItem("jogger")}  >Reset</button></td>

                        </tr>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={boxers} />
                                    </div>
                                    <div class="text">
                                        <h6 className='mb-0'>Boxers</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="boxer" type={Number} value={User.boxer} onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li>
                                    <button className="cont" style={boxer[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => BoxerWashService(0)}>
                                    <img src={wash} /> </button>

                                        {/* <button className="cont" ><img className="pic" src={wash} alt="home"></img></button> */}
                                    </li>
                                    <li><button className="cont" style={boxer[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => BoxerWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={boxer[2] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => BoxerWashService(2)}>
                                    <img src={towel} /> </button>
                                    </li>
                                    <li><button className="cont" style={boxer[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => BoxerWashService(3)}>
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            {User.boxer && price.boxer ?
                                <td>{price.boxer}*{User.boxer}=<span className="total">{price.boxer * User.boxer}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => clearItem("boxer")}  >Reset</button></td>

                        </tr>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={others} />
                                    </div>
                                    <div class="text">
                                        <h6 className='mb-0'>Others</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="other" type={Number} value={User.other} onChange={handler} ></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li><button className="cont" style={other[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => OtherWashService(0)}>
                                    <img src={wash} /> </button>
                                    </li>
                                    <li><button className="cont" style={other[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => OtherWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={other[2] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => OtherWashService(2)}>
                                    <img src={towel} /> </button>
                                    </li>
                                    <li><button className="cont" style={other[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => OtherWashService(3)}>
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            
                            {User.other && price.other ?
                                <td>{price.other}*{User.other}=<span className="total">{price.other * User.other}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => clearItem("other")}  >Reset</button></td>

                        </tr>
                    </tbody>
                </table>
                <div className='proceedCancelBtn '>
                    <button className='btn btn-regular btn-cancel'>Cancel</button>
                    <button className='btn btn-filled btn-proceed navbar-btn pull-left' type="button" data-toggle="modal" data-target="#sidebar-right">Proceed</button>
                </div>
            </section>

            {/* MOdal */}
            <div class="modal summary-modal fade right" id="sidebar-right" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">Summary</h4>
                        </div>
                        <div class="modal-body">
                            <h6>Order Details</h6>
                            <table className="table mt-2">
                                <tbody>
                                    <tr>
                                        <td>Shirts</td>
                                        <td><i>Washing, Ironing</i></td>
                                        <td>5 X 20 =</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>Shirts</td>
                                        <td><i>Washing, Ironing</i></td>
                                        <td>5 X 20 =</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>Shirts</td>
                                        <td><i>Washing, Ironing</i></td>
                                        <td>5 X 20 =</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Sub Total:</td>
                                        <td>400</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Pickup Charges</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>Total:</th>
                                        <th>Rs<span>560</span></th>
                                    </tr>
                                </tbody>
                            </table>
                            <h6 className='mt-3'>Address</h6>
                            <section>
                                <div className='d-flex'>
                                    <div className='card'>
                                        <h6>Home</h6>
                                        <p className='mb-0'>#223, 10th road, Jp Nagar, Bangalore</p>
                                    </div>
                                    <div className='card'>
                                        <h6>Other</h6>
                                        <p className='mb-0'>#223, 10th road, Jp Nagar, Bangalore</p>
                                    </div>
                                    <div className='add-more'>
                                        <a href="#">Add New</a>
                                    </div>
                                </div>
                            </section>
                            <div className=' row bottom-btn'>
                                <button className='btn btn-filled btn-proceed mt-2' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Proceed</button>
                            </div>
                        </div>  {/* modal body ends */}
                    </div>
                </div>
            </div>
            {/* modal ends */}

            {/* confirm order modal */}
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Hide this modal and show the first with the button below.
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateOrder