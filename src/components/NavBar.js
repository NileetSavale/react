import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'
import './NavBar.css'
import { FaBeer } from 'react-icons/fa';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


function NavBar() {
const [click, setClick] = useState(false);
const [dropdown, setDropdown] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(true);
const onMouseEnter = () => {
    if(window.innerWidth<960) {
        setDropdown(false);
    } else {
        setDropdown(true);
    }
};

const onMouseLeave = () => {
    if(window.innerWidth<960) {
        setDropdown(false);
    } else {
        setDropdown(false);
    }
};


    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src='./logo-dark.png' className='logo'></img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? (<FaTimes/>) : (<FaBars/>)} 
                </div>
                <ul className={click ? 'nav-menu Active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        India Manufacturing
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/IndiaSupplyChain' className='nav-links' onClick={closeMobileMenu}>
                        India Supply Chain
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/QualityAudits' className='nav-links' onClick={closeMobileMenu}>
                        Quality Audits
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/EngineeringServices' className='nav-links' onClick={closeMobileMenu}>
                        Engineering Services
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/ResourceCenter' className='nav-links' onClick={closeMobileMenu}>
                        Resource Center
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/Investors' className='nav-links' onClick={closeMobileMenu}>
                        Investors
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/SupplierDevelopment' className='nav-links' onClick={closeMobileMenu}>
                        Supplier Development
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/ConatactUs' className='nav-links' onClick={closeMobileMenu}>
                        Contact Us
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default NavBar;
