import React from 'react'
import './Header.style.scss'
import {Link } from "react-router-dom";
import Logo from '../assests/crown.svg'
const Header =()=>{
    return(
        <div className="header">
        <Link to='/' className="logo-container" >
        <img src={Logo} alt="logo" />
        </Link>
        <div className="options">
        <Link className='option' to='/shop'>
            Shop 
        </Link>

        <Link className='option' to='/contact'>
            About Us 
        </Link>
        <Link className='option' to='/singup'>
            SingUp 
        </Link>
        <Link className='option' to='/login'>
            Login  
        </Link>
       
        </div>
       
        </div>
       
    )
}
export default Header;