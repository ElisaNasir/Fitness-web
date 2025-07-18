import React from 'react'
import { MdDashboard } from "react-icons/md";
import { LuSquareMenu } from "react-icons/lu";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { PiBarbellLight } from "react-icons/pi";
import { BiNotepad } from "react-icons/bi";
import { PiSquareSplitHorizontalFill } from "react-icons/pi";
import logo from './assets/logo1.png';
import { NavLink } from 'react-router-dom';

function Sidebar(){
    return(
        <div className='sidebar'>
        <div className='sidebar-content'>
        <div className='logo-design'>
        <img src={logo} alt='brand logo' className='logo'/>     
        </div>    
         <ul>
         <li>
           <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <MdDashboard />
          <span>Dashboard</span>
          </NavLink>
          </li>   
         <li>
          <NavLink to="/users" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <LuSquareMenu />
          <span>Users</span>
          </NavLink>
          </li>   
         <li>
          <NavLink to="/subscriptions" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <PiSquareSplitHorizontalFill />
          <span>Subscriptions</span>
          </NavLink>
          </li>   
         <li>
          <NavLink to="/workouts" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <PiBarbellLight />
          <span>Workouts</span>
          </NavLink>
          </li>   
         <li>
          <NavLink to="/community" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <BsFillChatSquareTextFill />
          <span>Community</span>
          </NavLink>
          </li>  
         <li>
          <NavLink to="/dietplan" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <BiNotepad />
          <span>Diet Plans</span>
          </NavLink>
          </li>    
        </ul> 
        </div>
        <div className='license'>
        © 2025 King Adri | All Rights Reserved
    </div> 
    </div>

    )
}
export default Sidebar