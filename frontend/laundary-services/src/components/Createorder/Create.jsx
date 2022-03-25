import React, { useState } from 'react';
import DashboardSidebar from '../DashboardSidebar';
import Search from '../Createorder/../Search'
import search from './search.svg'
import './create.css'
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
                    <button className='orderButton'>Create</button>
                </div>
            </div>

        </div>


    )
}

export default Create