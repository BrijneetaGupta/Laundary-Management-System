import React from 'react'
import '../assets/css/dashboardsidebar.css'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';

const DashboardSidebar = () =>{
    return(
        <>            
            <section>
            <div class="sidebar">
                <NavLink to="#" className='sidebar-link'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22.002" viewBox="0 0 22 22.002">
                    <path id="home-run_1_" data-name="home-run (1)" d="M21.409,9.57l0,0L12.432.594a2.025,2.025,0,0,0-2.865,0L.6,9.564l-.009.009a2.025,2.025,0,0,0,1.348,3.451q.031,0,.062,0h.358v6.6A2.373,2.373,0,0,0,4.727,22H8.238a.645.645,0,0,0,.645-.645V16.179A1.083,1.083,0,0,1,9.964,15.1h2.071a1.083,1.083,0,0,1,1.082,1.082v5.178a.645.645,0,0,0,.645.645h3.511a2.373,2.373,0,0,0,2.371-2.37v-6.6h.332A2.026,2.026,0,0,0,21.409,9.57Zm0,0" transform="translate(0.001)" fill="#fff"/>
                    </svg>
                </NavLink>
                <NavLink  className="sidebar-link" to="/CreateOrder"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                    <path id="more" d="M11,0A11,11,0,1,0,22,11,11.012,11.012,0,0,0,11,0Zm4.813,11.917h-3.9v3.9a.917.917,0,1,1-1.833,0v-3.9h-3.9a.917.917,0,1,1,0-1.833h3.9v-3.9a.917.917,0,1,1,1.833,0v3.9h3.9a.917.917,0,1,1,0,1.833Zm0,0" fill="#5861ae"/>
                    </svg>
                </NavLink>
                <NavLink to="/PastOrder" className='sidebar-link'><svg xmlns="http://www.w3.org/2000/svg" width="25.283" height="18.143" viewBox="0 0 25.283 18.143">
                    <g id="list" transform="translate(-1.093 -78.931)">
                        <g id="Group_5192" data-name="Group 5192" transform="translate(6.377 86.574)">
                        <g id="Group_5191" data-name="Group 5191" transform="translate(0 0)">
                            <path id="Path_2413" data-name="Path 2413" d="M143.23,236H125.294a1.26,1.26,0,0,0,0,2.478H143.23a1.26,1.26,0,0,0,0-2.478Z" transform="translate(-124.262 -236)" fill="#fff"/>
                        </g>
                        </g>
                        <g id="Group_5194" data-name="Group 5194" transform="translate(6.377 78.931)">
                        <g id="Group_5193" data-name="Group 5193">
                            <path id="Path_2414" data-name="Path 2414" d="M143.23,86H125.294a1.248,1.248,0,0,0,0,2.458H143.23a1.248,1.248,0,0,0,0-2.458Z" transform="translate(-124.262 -86)" fill="#fff"/>
                        </g>
                        </g>
                        <g id="Group_5196" data-name="Group 5196" transform="translate(6.377 94.237)">
                        <g id="Group_5195" data-name="Group 5195" transform="translate(0 0)">
                            <path id="Path_2415" data-name="Path 2415" d="M143.23,386H125.294a1.261,1.261,0,0,0,0,2.479H143.23a1.261,1.261,0,0,0,0-2.479Z" transform="translate(-124.262 -386)" fill="#fff"/>
                        </g>
                        </g>
                        <g id="Group_5198" data-name="Group 5198" transform="translate(1.093 79.074)">
                        <g id="Group_5197" data-name="Group 5197">
                            <circle id="Ellipse_635" data-name="Ellipse 635" cx="1.5" cy="1.5" r="1.5" transform="translate(0 0)" fill="#fff"/>
                        </g>
                        </g>
                        <g id="Group_5200" data-name="Group 5200" transform="translate(1.093 86.074)">
                        <g id="Group_5199" data-name="Group 5199">
                            <circle id="Ellipse_636" data-name="Ellipse 636" cx="1.5" cy="1.5" r="1.5" transform="translate(0 0)" fill="#fff"/>
                        </g>
                        </g>
                        <g id="Group_5202" data-name="Group 5202" transform="translate(1.093 94.074)">
                        <g id="Group_5201" data-name="Group 5201">
                            <circle id="Ellipse_637" data-name="Ellipse 637" cx="1.5" cy="1.5" r="1.5" transform="translate(0 0)" fill="#fff"/>
                        </g>
                        </g>
                    </g>
                    </svg>
                </NavLink>
            </div>
            </section>
        </>
    )
}

export default DashboardSidebar