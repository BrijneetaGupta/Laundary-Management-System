import React from 'react'
import '../assets/css/createOrder.css'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DashboardSidebar from './DashboradSidebar';
import Search from './Search';
import Eye from '../assets/uploads/icons/eye.png';

const PastOrder = () =>{
    return(
        <>    
            <DashboardSidebar />        
            <section id="pastOrder">
            <h5 className='mt-4'>Orders | <label className='orderCount'>1</label></h5>
            <Search />
            <table className="table product_list mt-2">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="row">Order Date & Time</th>
                        <th scope="row">Store Location</th>
                        <th scope="row">City</th>
                        <th scope="row">Store Phone</th>
                        <th scope="row">Total Items</th>
                        <th scope="row">Price</th>
                        <th scope="row">Status</th>
                        <th scope="row">View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>                        
                        <td>OR0001</td>
                        <td>10 Oct 2021, 10:15</td>
                        <td>Jp Nagar</td>
                        <td>Banglore</td>
                        <td>9988776655</td>
                        <td>10</td>
                        <td>430 Rs</td>
                        <td>Ready to Pickup</td>
                        <td><button className='navbar-btn pull-left' type="button" data-toggle="modal" data-target="#sidebar-right"><img src={Eye} /></button></td>
                    </tr>                    
                </tbody>
                </table>                
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

      

        </>
    )
}

export default PastOrder