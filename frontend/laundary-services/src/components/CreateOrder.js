import React from 'react'
import '../assets/css/createOrder.css'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const CreateOrder = () =>{
    return(
        <>            
            <section>
            <table className="table product_list mt-5">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Product Types</th>
                        <th scope="row">Quantity</th>
                        <th scope="row">Wash Type</th>
                        <th scope="row">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>                        
                        <td>
                            <div class="wrapper">
                                <div class="image">
                                    <img src="https://i.pinimg.com/originals/26/ea/fc/26eafc0b14488fea03fa8fa9751203ff.jpg" />
                                </div>
                                <div class="text">
                                    <h6 className='mb-0'>Shirts</h6>
                                    <p className='mb-0'>Paris is the most beautiful city.</p>
                                </div>
                            </div>

                        </td>
                        <td><input className="quantity" type="number"/></td>
                        <td>
                            <ul className='mb-0'>
                                <li>
                                    <svg id="washing-machine" xmlns="http://www.w3.org/2000/svg" width="25.258" height="29.368" viewBox="0 0 25.258 29.368">
                                    <path id="Path_1770" data-name="Path 1770" d="M.5,185.707a1.765,1.765,0,0,0,1.763,1.763H24a1.765,1.765,0,0,0,1.763-1.763V167.723H.5ZM13.13,169.59a6.885,6.885,0,1,1-6.886,6.885A6.893,6.893,0,0,1,13.13,169.59Zm0,0" transform="translate(-0.5 -158.102)" fill="#9b9b9b"/>
                                    <path id="Path_1771" data-name="Path 1771" d="M142.377,319.744a3.452,3.452,0,0,1-2.619-1.262c-.508-.51-.78-.755-1.4-.755s-.891.245-1.4.755a4.124,4.124,0,0,1-1.48,1.063,5.164,5.164,0,0,0,10.049-1.551,4.742,4.742,0,0,0-.536.488A3.449,3.449,0,0,1,142.377,319.744Zm0,0" transform="translate(-127.738 -299.502)" fill="#9b9b9b"/>
                                    <path id="Path_1772" data-name="Path 1772" d="M133.827,233.58a3.453,3.453,0,0,1,2.618,1.262c.508.51.78.755,1.4.755s.889-.245,1.4-.755a4.125,4.125,0,0,1,1.48-1.064,5.164,5.164,0,0,0-10.049,1.551,4.743,4.743,0,0,0,.537-.488A3.453,3.453,0,0,1,133.827,233.58Zm0,0" transform="translate(-123.205 -217.076)" fill="#9b9b9b"/>
                                    <path id="Path_1773" data-name="Path 1773" d="M25.758,1.763A1.765,1.765,0,0,0,24,0H2.263A1.765,1.765,0,0,0,.5,1.763V7.9H25.758ZM10.581,5.382a.86.86,0,0,1-.86.86H4.11a.86.86,0,0,1-.86-.86V2.62a.86.86,0,0,1,.86-.86h5.61a.86.86,0,0,1,.86.86Zm6.945-.009A1.372,1.372,0,1,1,18.9,4,1.373,1.373,0,0,1,17.526,5.373Zm4.015,0A1.372,1.372,0,1,1,22.913,4,1.373,1.373,0,0,1,21.541,5.373Zm0,0" transform="translate(-0.5)" fill="#9b9b9b"/>
                                    <path id="Path_1774" data-name="Path 1774" d="M78.441,60.68h3.89v1.041h-3.89Zm0,0" transform="translate(-73.971 -57.199)" fill="#9b9b9b"/>
                                    </svg>
                                </li>
                                <li>
                                   <svg id="ironing" xmlns="http://www.w3.org/2000/svg" width="26.105" height="26.105" viewBox="0 0 26.105 26.105">
                                    <path id="Path_1759" data-name="Path 1759" d="M364.977,6.118h.766a.765.765,0,0,0,.765-.765h1.531a.765.765,0,0,0,0-1.53h-1.531V2.294h1.531a.765.765,0,0,0,0-1.53h-1.531A.765.765,0,0,0,365.743,0h-.766a3.059,3.059,0,0,0,0,6.118Z" transform="translate(-343.465)" fill="#9b9b9b"/>
                                    <path id="Path_1760" data-name="Path 1760" d="M51.078,55.131a2.294,2.294,0,0,0-.258-4.574H32.176a2.014,2.014,0,1,1,0-4.028H44A4.595,4.595,0,0,1,44,45H32.176a3.543,3.543,0,1,0,0,7.087H50.82a.765.765,0,1,1,0,1.53H43.382A15.78,15.78,0,0,0,28.463,64.273H53.115a13.971,13.971,0,0,0-.032-2.445Zm-2.7,7.663h-9.8a.765.765,0,0,1-.669-.395l-1.53-2.769a.765.765,0,0,1,.264-1.019,12.712,12.712,0,0,1,6.739-1.936h4.133a.765.765,0,0,1,.752.624l.861,4.589A.765.765,0,0,1,48.376,62.794Z" transform="translate(-27.012 -42.706)" fill="#9b9b9b"/>
                                    <path id="Path_1761" data-name="Path 1761" d="M222.363,304a11.174,11.174,0,0,0-5.3,1.34l.95,1.719h8.425L225.862,304Z" transform="translate(-205.993 -288.5)" fill="#9b9b9b"/>
                                    <path id="Path_1762" data-name="Path 1762" d="M.739,454.48a.764.764,0,0,0,.026,1.528H25.338a.765.765,0,0,0,.765-.765V453H1.011q-.17.727-.273,1.48Z" transform="translate(0 -429.904)" fill="#9b9b9b"/>
                                    </svg>
                                </li>
                                <li><svg id="towel" xmlns="http://www.w3.org/2000/svg" width="27.775" height="27.775" viewBox="0 0 27.775 27.775">
                                    <path id="Path_1763" data-name="Path 1763" d="M56,283.473H70.879v-3.388a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.022,2.022,0,0,0-.528-.313Zm0,0" transform="translate(-52.528 -262.642)" fill="#9b9b9b"/>
                                    <path id="Path_1764" data-name="Path 1764" d="M56,249.04a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549v-.955a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.023,2.023,0,0,0-.528-.313Zm0,0" transform="translate(-52.528 -232.626)" fill="#9b9b9b"/>
                                    <path id="Path_1765" data-name="Path 1765" d="M56,14.43a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549V2.48a4.776,4.776,0,0,1,.086-.758c.006-.027.015-.054.021-.08s.017-.066.026-.1c.017-.062.036-.124.056-.184s.042-.115.064-.172c.014-.036.028-.071.044-.107A3.437,3.437,0,0,1,71.918,0H58.48A2.483,2.483,0,0,0,56,2.48Zm0,0" transform="translate(-52.528 0)" fill="#9b9b9b"/>
                                    <path id="Path_1766" data-name="Path 1766" d="M166.879,72h-4.96V88.863a.5.5,0,0,1-.5.5H152v3.968h10.415a.5.5,0,1,1,0,.992H152v.992h14.879Zm-1.488,22.319H164.4a.5.5,0,0,1,0-.992h.992a.5.5,0,1,1,0,.992Zm0,0" transform="translate(-142.576 -67.536)" fill="#9b9b9b"/>
                                    <path id="Path_1767" data-name="Path 1767" d="M.5,40.992H2.48V40H.5a.5.5,0,0,0-.5.5.475.475,0,0,0,.143.344A.483.483,0,0,0,.5,40.992Zm0,0" transform="translate(0 -37.52)" fill="#9b9b9b"/>
                                    <path id="Path_1768" data-name="Path 1768" d="M317.66,0a2.446,2.446,0,0,0-.454.046c-.037.006-.073.016-.109.024a2.518,2.518,0,0,0-.355.111l-.067.026a2.5,2.5,0,0,0-.753.509l-.029.03a2.5,2.5,0,0,0-.267.324c-.009.013-.019.025-.028.039a2.479,2.479,0,0,0-.206.379h4.545a2.418,2.418,0,0,0-.521-.758A2.448,2.448,0,0,0,317.66,0Zm0,0" transform="translate(-295.837 0)" fill="#9b9b9b"/>
                                    <path id="Path_1769" data-name="Path 1769" d="M320.432,40.5a.475.475,0,0,0-.143-.344.482.482,0,0,0-.353-.152H312v.992h7.936A.5.5,0,0,0,320.432,40.5Zm0,0" transform="translate(-292.657 -37.52)" fill="#9b9b9b"/>
                                    </svg>
                                </li>
                                <li><svg id="bleach" xmlns="http://www.w3.org/2000/svg" width="15.771" height="26.048" viewBox="0 0 15.771 26.048">
                                    <path id="Path_1757" data-name="Path 1757" d="M100,0h5.6V2.035H100Zm0,0" transform="translate(-94.912)" fill="#9b9b9b"/>
                                    <path id="Path_1758" data-name="Path 1758" d="M14.2,73.742C13.028,71.329,11.507,70,9.921,70H5.851c-1.586,0-3.107,1.329-4.284,3.742A15.72,15.72,0,0,0,0,80.175V92.487H15.772V80.175A15.72,15.72,0,0,0,14.2,73.742ZM6.359,89.435H3.053V87.908H6.359Zm1.526-3.053H3.053V84.856H7.886Zm4.579-6.359a1.526,1.526,0,1,1-3.053,0V76.97a1.526,1.526,0,1,1,3.053,0Zm0,0" transform="translate(0 -66.439)" fill="#9b9b9b"/>
                                    </svg>
                                </li>
                            </ul>
                        </td>
                        <td>
                            <span>5 x 20 = 100</span>
                            <button className='btn btn-regular'>Reset</button>
                        </td>
                    </tr>
                    <tr>                        
                        <td>
                            <div class="wrapper">
                                <div class="image">
                                    <img src="https://i.pinimg.com/originals/26/ea/fc/26eafc0b14488fea03fa8fa9751203ff.jpg" />
                                </div>
                                <div class="text">
                                    <h6 className='mb-0'>T Shirts</h6>
                                    <p className='mb-0'>Paris is the most beautiful city.</p>
                                </div>
                            </div>

                        </td>
                        <td><input className="quantity" type="number"/></td>
                        <td>
                            <ul className='mb-0'>
                                <li>
                                    <svg id="washing-machine" xmlns="http://www.w3.org/2000/svg" width="25.258" height="29.368" viewBox="0 0 25.258 29.368">
                                    <path id="Path_1770" data-name="Path 1770" d="M.5,185.707a1.765,1.765,0,0,0,1.763,1.763H24a1.765,1.765,0,0,0,1.763-1.763V167.723H.5ZM13.13,169.59a6.885,6.885,0,1,1-6.886,6.885A6.893,6.893,0,0,1,13.13,169.59Zm0,0" transform="translate(-0.5 -158.102)" fill="#9b9b9b"/>
                                    <path id="Path_1771" data-name="Path 1771" d="M142.377,319.744a3.452,3.452,0,0,1-2.619-1.262c-.508-.51-.78-.755-1.4-.755s-.891.245-1.4.755a4.124,4.124,0,0,1-1.48,1.063,5.164,5.164,0,0,0,10.049-1.551,4.742,4.742,0,0,0-.536.488A3.449,3.449,0,0,1,142.377,319.744Zm0,0" transform="translate(-127.738 -299.502)" fill="#9b9b9b"/>
                                    <path id="Path_1772" data-name="Path 1772" d="M133.827,233.58a3.453,3.453,0,0,1,2.618,1.262c.508.51.78.755,1.4.755s.889-.245,1.4-.755a4.125,4.125,0,0,1,1.48-1.064,5.164,5.164,0,0,0-10.049,1.551,4.743,4.743,0,0,0,.537-.488A3.453,3.453,0,0,1,133.827,233.58Zm0,0" transform="translate(-123.205 -217.076)" fill="#9b9b9b"/>
                                    <path id="Path_1773" data-name="Path 1773" d="M25.758,1.763A1.765,1.765,0,0,0,24,0H2.263A1.765,1.765,0,0,0,.5,1.763V7.9H25.758ZM10.581,5.382a.86.86,0,0,1-.86.86H4.11a.86.86,0,0,1-.86-.86V2.62a.86.86,0,0,1,.86-.86h5.61a.86.86,0,0,1,.86.86Zm6.945-.009A1.372,1.372,0,1,1,18.9,4,1.373,1.373,0,0,1,17.526,5.373Zm4.015,0A1.372,1.372,0,1,1,22.913,4,1.373,1.373,0,0,1,21.541,5.373Zm0,0" transform="translate(-0.5)" fill="#9b9b9b"/>
                                    <path id="Path_1774" data-name="Path 1774" d="M78.441,60.68h3.89v1.041h-3.89Zm0,0" transform="translate(-73.971 -57.199)" fill="#9b9b9b"/>
                                    </svg>
                                </li>
                                <li>
                                   <svg id="ironing" xmlns="http://www.w3.org/2000/svg" width="26.105" height="26.105" viewBox="0 0 26.105 26.105">
                                    <path id="Path_1759" data-name="Path 1759" d="M364.977,6.118h.766a.765.765,0,0,0,.765-.765h1.531a.765.765,0,0,0,0-1.53h-1.531V2.294h1.531a.765.765,0,0,0,0-1.53h-1.531A.765.765,0,0,0,365.743,0h-.766a3.059,3.059,0,0,0,0,6.118Z" transform="translate(-343.465)" fill="#9b9b9b"/>
                                    <path id="Path_1760" data-name="Path 1760" d="M51.078,55.131a2.294,2.294,0,0,0-.258-4.574H32.176a2.014,2.014,0,1,1,0-4.028H44A4.595,4.595,0,0,1,44,45H32.176a3.543,3.543,0,1,0,0,7.087H50.82a.765.765,0,1,1,0,1.53H43.382A15.78,15.78,0,0,0,28.463,64.273H53.115a13.971,13.971,0,0,0-.032-2.445Zm-2.7,7.663h-9.8a.765.765,0,0,1-.669-.395l-1.53-2.769a.765.765,0,0,1,.264-1.019,12.712,12.712,0,0,1,6.739-1.936h4.133a.765.765,0,0,1,.752.624l.861,4.589A.765.765,0,0,1,48.376,62.794Z" transform="translate(-27.012 -42.706)" fill="#9b9b9b"/>
                                    <path id="Path_1761" data-name="Path 1761" d="M222.363,304a11.174,11.174,0,0,0-5.3,1.34l.95,1.719h8.425L225.862,304Z" transform="translate(-205.993 -288.5)" fill="#9b9b9b"/>
                                    <path id="Path_1762" data-name="Path 1762" d="M.739,454.48a.764.764,0,0,0,.026,1.528H25.338a.765.765,0,0,0,.765-.765V453H1.011q-.17.727-.273,1.48Z" transform="translate(0 -429.904)" fill="#9b9b9b"/>
                                    </svg>
                                </li>
                                <li><svg id="towel" xmlns="http://www.w3.org/2000/svg" width="27.775" height="27.775" viewBox="0 0 27.775 27.775">
                                    <path id="Path_1763" data-name="Path 1763" d="M56,283.473H70.879v-3.388a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.022,2.022,0,0,0-.528-.313Zm0,0" transform="translate(-52.528 -262.642)" fill="#9b9b9b"/>
                                    <path id="Path_1764" data-name="Path 1764" d="M56,249.04a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549v-.955a2.037,2.037,0,0,0-.53.313,2.505,2.505,0,0,1-3.242,0,1.525,1.525,0,0,0-2.052,0,2.5,2.5,0,0,1-3.239,0,1.52,1.52,0,0,0-2.048,0,2.5,2.5,0,0,1-3.24,0,2.023,2.023,0,0,0-.528-.313Zm0,0" transform="translate(-52.528 -232.626)" fill="#9b9b9b"/>
                                    <path id="Path_1765" data-name="Path 1765" d="M56,14.43a2.573,2.573,0,0,1,1.124.549,1.52,1.52,0,0,0,2.048,0,2.5,2.5,0,0,1,3.239,0,1.521,1.521,0,0,0,2.049,0,2.5,2.5,0,0,1,3.242,0,1.525,1.525,0,0,0,2.052,0,2.572,2.572,0,0,1,1.125-.549V2.48a4.776,4.776,0,0,1,.086-.758c.006-.027.015-.054.021-.08s.017-.066.026-.1c.017-.062.036-.124.056-.184s.042-.115.064-.172c.014-.036.028-.071.044-.107A3.437,3.437,0,0,1,71.918,0H58.48A2.483,2.483,0,0,0,56,2.48Zm0,0" transform="translate(-52.528 0)" fill="#9b9b9b"/>
                                    <path id="Path_1766" data-name="Path 1766" d="M166.879,72h-4.96V88.863a.5.5,0,0,1-.5.5H152v3.968h10.415a.5.5,0,1,1,0,.992H152v.992h14.879Zm-1.488,22.319H164.4a.5.5,0,0,1,0-.992h.992a.5.5,0,1,1,0,.992Zm0,0" transform="translate(-142.576 -67.536)" fill="#9b9b9b"/>
                                    <path id="Path_1767" data-name="Path 1767" d="M.5,40.992H2.48V40H.5a.5.5,0,0,0-.5.5.475.475,0,0,0,.143.344A.483.483,0,0,0,.5,40.992Zm0,0" transform="translate(0 -37.52)" fill="#9b9b9b"/>
                                    <path id="Path_1768" data-name="Path 1768" d="M317.66,0a2.446,2.446,0,0,0-.454.046c-.037.006-.073.016-.109.024a2.518,2.518,0,0,0-.355.111l-.067.026a2.5,2.5,0,0,0-.753.509l-.029.03a2.5,2.5,0,0,0-.267.324c-.009.013-.019.025-.028.039a2.479,2.479,0,0,0-.206.379h4.545a2.418,2.418,0,0,0-.521-.758A2.448,2.448,0,0,0,317.66,0Zm0,0" transform="translate(-295.837 0)" fill="#9b9b9b"/>
                                    <path id="Path_1769" data-name="Path 1769" d="M320.432,40.5a.475.475,0,0,0-.143-.344.482.482,0,0,0-.353-.152H312v.992h7.936A.5.5,0,0,0,320.432,40.5Zm0,0" transform="translate(-292.657 -37.52)" fill="#9b9b9b"/>
                                    </svg>
                                </li>
                                <li><svg id="bleach" xmlns="http://www.w3.org/2000/svg" width="15.771" height="26.048" viewBox="0 0 15.771 26.048">
                                    <path id="Path_1757" data-name="Path 1757" d="M100,0h5.6V2.035H100Zm0,0" transform="translate(-94.912)" fill="#9b9b9b"/>
                                    <path id="Path_1758" data-name="Path 1758" d="M14.2,73.742C13.028,71.329,11.507,70,9.921,70H5.851c-1.586,0-3.107,1.329-4.284,3.742A15.72,15.72,0,0,0,0,80.175V92.487H15.772V80.175A15.72,15.72,0,0,0,14.2,73.742ZM6.359,89.435H3.053V87.908H6.359Zm1.526-3.053H3.053V84.856H7.886Zm4.579-6.359a1.526,1.526,0,1,1-3.053,0V76.97a1.526,1.526,0,1,1,3.053,0Zm0,0" transform="translate(0 -66.439)" fill="#9b9b9b"/>
                                    </svg>
                                </li>
                            </ul>
                        </td>
                        <td>
                            <span>5 x 20 = 100</span>
                            <button className='btn btn-regular'>Reset</button>
                        </td>
                    </tr>
                </tbody>
                </table>
                <button className='btn btn-regular btn-cancel'>Cancel</button>
                <button className='btn btn-filled btn-proceed navbar-btn pull-left' type="button" data-toggle="modal" data-target="#sidebar-right">Proceed</button>
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