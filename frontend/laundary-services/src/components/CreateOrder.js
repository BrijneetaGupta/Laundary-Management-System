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
    const washTypePrice={"Wash":20,"Iron": 15,"Fold": 10,"Pack": 25}
    const [amount, setamount] = useState(0)
    const [totalitems, setItem] = useState(0)

    const [eachProductWashTypes,seteachProductWashTypes]=useState({
        "shirts":[false, false, false, false],
        "tshirts":[false, false, false, false],
        "trousers":[false, false, false, false],
        "jeans":[false, false, false, false],
        "joggers":[false, false, false, false],
        "boxers":[false, false, false, false],
        "others":[false, false, false, false]
    }) 
    const [price, setPrice] = useState({
        "shirts": 0,
        "tshirts": 0,
        "trousers": 0,
        "jeans": 0,
        "joggers": 0,
        "boxers": 0,
        "others": 0
    });
    const WashShirtService = (ind) => {
        const washType=eachProductWashTypes.shirts
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        // setShirt(washTypevalue)
        seteachProductWashTypes.shirts=washType
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "shirts": val
        })

    }


    const TshirtWashService = (ind) => {
        const washType=eachProductWashTypes.tshirts
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes.shirts=washType
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "tshirts": val
        })
    }
    const TrouserWashService = (ind) => {
        const washType=eachProductWashTypes.trousers
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes.shirts=washType
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "trousers": val
        })
    }
    const JeanWashService = (ind) => {
        const washType = eachProductWashTypes.jeans
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes.jeans=washType
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "jeans": val
        })
    }
    const JoggerWashService = (ind) => {
        const washType =eachProductWashTypes.joggers
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes.joggers=washType
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "joggers": val
        })
    }
    const BoxerWashService = (ind) => {
        const washType = eachProductWashTypes.boxers
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes.boxers=washType
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "boxers": val
        })
    }
    const OtherWashService = (ind) => {
        const washType = eachProductWashTypes.others
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes.others=washType
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "others": val
        })
    }
    const cost = (arr) => {

        var cost = 0
        for (let i = 0; i < 4; i++) {
            if (i === 0) {
                if (arr[i] == true) {
                    cost += washTypePrice['Wash']
                }
            } else if (i === 1) {
                if (arr[i] === true) {
                    cost += washTypePrice['Iron']
                }
            } else if (i === 2) {
                if (arr[i] === true) {
                    cost +=washTypePrice['Fold']
                }
            } else {
                if (arr[i] === true) {
                    cost +=washTypePrice['Pack']
                }

            }
        }


        return cost
    }


        
    const [quantity, setquantity] = useState({
        "shirts": 0,
        "tshirts": 0,
        "trousers": 0,
        "jeans": 0,
        "joggers": 0,
        "boxers": 0,
        "others": 0
    })

    const handler = (e) => {

        const { name, value } = e.target

        setquantity({
            ...quantity,
            [name]: value
        })
    }
    const proceedHandler = () => {
        setItem(parseFloat(quantity.shirts) + parseFloat(quantity.tshirts) + parseFloat(quantity.trousers) + parseFloat(quantity.jeans) + parseFloat(quantity.joggers) + parseFloat(quantity.boxers) + parseFloat(quantity.others));
        console.log("final item", totalitems)
        var eachProductAmount = 0
        console.log(price)
        for (const [key, value] of Object.entries(price)) {
            eachProductAmount += parseFloat(value * quantity[key])
            setamount(eachProductAmount)
            console.log("final", amount)
        }
        console.log(price)
        var today = new Date()
        console.log("date", today)
        for (const [key, value] of Object.entries(quantity)) {
            const product_details=[]
            var productName=key
            var person = {}
            if (quantity[productName] !== 0) {
                person.producType = productName;
                person.quantity = quantity[productName];
                person.price = price[productName];
                if ( productName=== "shirts") {
                    person.Wash= eachProductWashTypes.shirts[0]
                    person.Iron= eachProductWashTypes.shirts[1]
                    person.Fold= eachProductWashTypes.shirts[2]
                    person.Pack= eachProductWashTypes.shirts[3]

                } else if (productName=== "tshirts") {
                    person.Wash= eachProductWashTypes.tshirts[0]
                    person.Iron= eachProductWashTypes.tshirts[1]
                    person.Fold= eachProductWashTypes.tshirts[2]
                    person.Pack= eachProductWashTypes.tshirts[3]

                } else if (productName === "jeans") {
                    person.Wash= eachProductWashTypes.jeans[0]
                    person.Iron= eachProductWashTypes.jeans[1]
                    person.Fold= eachProductWashTypes.jeans[2]
                    person.Pack= eachProductWashTypes.jeans[3]

                } else if (productName=== "trousers") {
                    person.Wash= eachProductWashTypes.trousers[0]
                    person.Iron= eachProductWashTypes.trousers[1]
                    person.Fold= eachProductWashTypes.trousers[2]
                    person.Pack= eachProductWashTypes.trousers[3]

                } else if (productName === "boxers") {
                    person.Wash= eachProductWashTypes.boxers[0]
                    person.Iron= eachProductWashTypes.boxers[1]
                    person.Fold= eachProductWashTypes.boxers[2]
                    person.Pack= eachProductWashTypes.boxers[3]

                } else if (productName === "joggers") {
                    person.Wash= eachProductWashTypes.joggers[0]
                    person.Iron= eachProductWashTypes.joggers[1]
                    person.Fold= eachProductWashTypes.joggers[2]
                    person.Pack= eachProductWashTypes.joggers[3]

                } else {
                    person.Wash= eachProductWashTypes.others[0]
                    person.Iron= eachProductWashTypes.others[1]
                    person.Fold= eachProductWashTypes.others[2]
                    person.Pack= eachProductWashTypes.others[3]
                }


                console.log("array", person)
                product_details.push(person)
                console.log(product_details)
                console.log("amountt", amount)
                console.log("items", totalitems)
            }

        }
        // const order_details={
        //     product_details,
        //     totalitems,
        //     totalprice

        // }
        

        // setOrder(finalOrder)

        // axios({
        //     url: "http://localhost:9002/orders",
        //     method: "POST",
        //     headers: {
        //         authorization: token,
        //     },
        //     data: {
        //    
        //         "totalitems": totalitems,"totalprice":totalprice, "dateAndTime": today, "status": "done ordered successfully", "product_details": product_details
        //     }




        // })

        //     .then(res => {
        //         alert(res.data.status)
        //     })
    }
    const resetProduct = (item) => {
        if (item === "shirts") {
            seteachProductWashTypes({...eachProductWashTypes,[item]:[false,false,false,false]})
            quantity.shirts = 0;
            price.shirts = 0;
        } else if (item === "tshirts") {
            seteachProductWashTypes({...eachProductWashTypes,[item]:[false,false,false,false]})
            quantity.tshirts = 0;
            price.tshirts = 0;
        } else if (item === "trousers") {
            seteachProductWashTypes({...eachProductWashTypes,[item]:[false,false,false,false]})
            quantity.trousers = 0;
            price.trousers = 0;
        } else if (item === "jeans") {
            seteachProductWashTypes({...eachProductWashTypes,[item]:[false,false,false,false]})
            quantity.jeans = 0;
            price.jeans = 0;

        } else if (item === "joggers") {
            seteachProductWashTypes({...eachProductWashTypes,[item]:[false,false,false,false]})
            quantity.joggers = 0;
            price.joggers = 0;

        } else if (item === "boxers") {
            seteachProductWashTypes({...eachProductWashTypes,[item]:[false,false,false,false]})
            quantity.boxers = 0;
            price.boxers = 0;

        } else {
            seteachProductWashTypes({...eachProductWashTypes,[item]:[false,false,false,false]})
            quantity.others = 0;
            price.others = 0;

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
                                <input className="quan" name="shirts" type={Number} value={quantity.shirts} onChange={handler} ></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li>
                                    <button className="cont" style={eachProductWashTypes.shirts[0]=== true ? { backgroundColor: "#5861AE" } : null} onClick={() => WashShirtService(0)}>
                                        <img src={wash} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.shirts[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => WashShirtService(1)}>
                                        <img src={iron} /> </button>
                                    </li>
                                    <li>
                                    <button className="cont" style={eachProductWashTypes.shirts[2]=== true ? { backgroundColor: "#5861AE" } : null} onClick={() => WashShirtService(2)} >
                                        <img src={towel} /> </button>
                                    </li>
                                    <li> <button className="cont" style={eachProductWashTypes.shirts[3]=== true ? { backgroundColor: "#5861AE" } : null} onClick={() => WashShirtService(3)} >
                                        <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                       
                                {quantity.shirts && price.shirts ?
                                    <td>{quantity.shirts}*{price.shirts}=<span className="total">{price.shirts * quantity.shirts}</span></td> :
                                    <td>--</td>}
                                {/* <button className='btn btn-regular'>Reset</button> */}
                                <td><button className="reset btn btn-regular" onClick={() => resetProduct("shirts")}>Reset</button></td>
                        
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
                                <input className="quan" name="tshirts" type={Number} value={quantity.tshirts} onChange={handler} ></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li><button className="cont" style={eachProductWashTypes.tshirts[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TshirtWashService(0)}>
                                            <img src={wash} /> </button>
                                    </li>
                                    <li>    <button className="cont" style={eachProductWashTypes.tshirts[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TshirtWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.tshirts[2]=== true ? { backgroundColor: "#5861AE" } : null} onClick={() => TshirtWashService(2)} >
                                    <img src={towel} /> </button>
                                    </li>
                                    <li> <button className="cont" style={eachProductWashTypes.tshirts[3]=== true ? { backgroundColor: "#5861AE" } : null} onClick={() => TshirtWashService(3)} >
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            
                                {quantity.tshirts && price.tshirts ?
                                    <td>{quantity.tshirts}*{price.tshirts}=<span className="total">{price.tshirts * quantity.tshirts}</span></td> :
                                    <td>--</td>}
                                <td><button className="reset btn btn-regular" onClick={() => resetProduct("tshirts")}  >Reset</button></td>
                            
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
                                <input className="quan" name="trousers" type={Number} value={quantity.trousers} onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li><button className="cont" style={eachProductWashTypes.trousers[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TrouserWashService(0)}>
                                    <img src={wash} /> </button>
                                    </li>
                                    <li>   <button className="cont" style={eachProductWashTypes.trousers[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TrouserWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.trousers[2]=== true ? { backgroundColor: "#5861AE" } : null} onClick={() => TrouserWashService(2)} >
                                    <img src={towel} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.trousers[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => TrouserWashService(3)} >
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            {quantity.trousers && price.trousers ?
                                <td>{quantity.trousers}*{price.trousers}=<span className="total">{price.trousers * quantity.trousers}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("trousers")}  >Reset</button></td>

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
                                <input className="quan" name="jeans" type={Number} value={quantity.jeans} onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li> <button className="cont" style={eachProductWashTypes.jeans[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JeanWashService(0)}>
                                    <img src={wash} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.jeans[1]=== true ? { backgroundColor: "#5861AE" } : null} onClick={() => JeanWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.jeans[2] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JeanWashService(2)}>
                                    <img src={towel} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.jeans[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JeanWashService(3)}>
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            {quantity.jeans && price.jeans ?
                                <td>{quantity.jeans}*{price.jeans}=<span className="total">{price.jeans * quantity.jeans}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("jeans")}  >Reset</button></td>

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
                                <input className="quan" name="joggers" type={Number} value={quantity.joggers} onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li> <button className="cont" style={eachProductWashTypes.jeans[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JoggerWashService(0)}>
                                    <img src={wash} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.jeans[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JoggerWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.jeans[2] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JoggerWashService(2)}>
                                    <img src={towel} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.jeans[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => JoggerWashService(3)}>
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            {quantity.joggers && price.joggers ?
                                <td>{price.joggers}*{quantity.jogger}=<span className="total">{price.joggers * quantity.joggers}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("joggers")}  >Reset</button></td>

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
                                <input className="quan" name="boxers" type={Number} value={quantity.boxers} onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li>
                                    <button className="cont" style={eachProductWashTypes.boxers[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => BoxerWashService(0)}>
                                    <img src={wash} /> </button>

                                        {/* <button className="cont" ><img className="pic" src={wash} alt="home"></img></button> */}
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.boxers[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => BoxerWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.boxers[2] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => BoxerWashService(2)}>
                                    <img src={towel} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.boxers[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => BoxerWashService(3)}>
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            {quantity.boxers && price.boxers ?
                                <td>{quantity.boxers}*{price.boxers}=<span className="total">{price.boxers * quantity.boxers}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("boxers")}  >Reset</button></td>

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
                                <input className="quan" name="others" type={Number} value={quantity.others} onChange={handler} ></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li><button className="cont" style={eachProductWashTypes.others[0] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => OtherWashService(0)}>
                                    <img src={wash} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.others[1] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => OtherWashService(1)}>
                                    <img src={iron} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.others[2] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => OtherWashService(2)}>
                                    <img src={towel} /> </button>
                                    </li>
                                    <li><button className="cont" style={eachProductWashTypes.others[3] === true ? { backgroundColor: "#5861AE" } : null} onClick={() => OtherWashService(3)}>
                                    <img src={bleach} /> </button>
                                    </li>
                                </ul>
                            </td>
                            
                            {quantity.others && price.others ?
                                <td>{quantity.others}*{price.others}=<span className="total">{price.others * quantity.others}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("others")}  >Reset</button></td>

                        </tr>
                    </tbody>
                </table>
                <div className='proceedCancelBtn '>
                    <button className='btn btn-regular btn-cancel'>Cancel</button>
                    <button className='btn btn-filled btn-proceed navbar-btn pull-left' type="button" data-toggle="modal" data-target="#sidebar-right" onClick={proceedHandler}>Proceed</button>
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
                            <div className="store mb-3" Style="    background-color: #F4F9FF;">
                                <div className="storeloc">
                                    <form className='store__form'>
                                        <select className='form-select' defaultValue="Store Location">
                                        <option selected> </option>
                                            <option disabled>Store Location</option>
                                            <option className='store__option'>Jp Nagar</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="storeadd">
                                    <a>Store Address</a>
                                    <br />
                                    Near phone booth, 10th road
                                </div>
                                <div className="storephone">
                                    <a>Phone</a>
                                    <br />
                                    91 9999999999
                                </div>
                            </div>
                            
                             
                            <h6>Order Details</h6>
                            <table className="table mt-2">
                                <tbody>
                                {/* {product_details.map((product, index) => {
                                    return( */}
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
                                         <td>100</td>                                     </tr>
                                     <tr>
                                         <td>Shirts</td>
                                         <td><i>Washing, Ironing</i></td>
                                         <td>5 X 20 =</td>
                                         <td>100</td>
                                     </tr>
                                    <tr>
                                        <td></td>                                         <td></td>
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


































































































