import React, { useState } from 'react';
import DashboardSidebar from '../DashboradSidebar';
import './create.css'
import { Link } from "react-router-dom";
function Create() {

    return (
        <div>

            <div className='sidebars'>
                <DashboardSidebar />
            </div>
            <div className="createpage">
                <div className="createOrderHeader">
                    <div className="order">Order | 0</div>
                    <div className="search">
                        <input type="text" className="input"/>
                    </div>
                </div>
                <div className="createButton">
                    <div className="text">
                        <span > No Orders Available</span>
                    </div>
                    <Link to="/createOrder">
                    <button className='orderButton'>Create</button>
                    </Link>
                </div>
            </div>

        </div>


    )
}

export default Create