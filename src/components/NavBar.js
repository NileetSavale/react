import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'
import { FaBeer } from 'react-icons/fa';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


function NavBar() {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(true);


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
                    <li className='nav-item active-link'>
                        <Link to='/' className='nav-links ' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item active-link'>
                        <Link to='/' className='nav-links ' onClick={closeMobileMenu}>
                        India Manufacturing
                        </Link>
                        <div className="hidden">
                            <Link to="/" className="nav-links" id='nav-links' onClick={closeMobileMenu}>
                                Die Casting
                            </Link>{" "}
                            <Link to="/" className="nav-links" id='nav-links' onClick={closeMobileMenu}>
                                Investment Casting
                            </Link>{" "}
                            <Link to="/" className="nav-links" id='nav-links' onClick={closeMobileMenu}>
                                Extrusion
                            </Link>{" "}
                            <Link to="/" className="nav-links" id='nav-links' onClick={closeMobileMenu}>
                                Assemblies
                            </Link>{" "}
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                                CNC Machining
                            </Link>
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                                Forging
                            </Link>{" "}
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                                Stampings
                            </Link>{" "}
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                                Rubber Molding
                            </Link>{" "}
                            <Link to="/" className="nav-links" id='nav-links'  onClick={closeMobileMenu}>
                                Industries
                            </Link>{" "}
                            <Link to="/" className="nav-links" id='nav-links'  onClick={closeMobileMenu}>
                                Sourcing
                            </Link>
                        </div>
                    </li>
                    <li className='nav-item active-link'>
                        <Link to='/IndiaSupplyChain' className='nav-links' onClick={closeMobileMenu}>
                        India Supply Chain
                        </Link>
                        <div className="hidden">
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                                Global Logistics
                            </Link>{" "}
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                            Domestic Supply Chain
                            </Link>{" "}
                        </div>
                    </li>
                    <li className='nav-item active-link' >
                        <Link to='/QualityAudits' className='nav-links' onClick={closeMobileMenu}>
                        Quality Audits
                        </Link>
                        <div className="hidden">
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                            Inspections & Process Audits
                            </Link>{" "}
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                            Supplier Assessments
                            </Link>{" "}
                        </div>
                    </li>
                    <li className='nav-item active-link'>
                        <Link to='/EngineeringServices' className='nav-links' onClick={closeMobileMenu}>
                        Engineering Services
                        </Link>
                        
                    </li>
                    <li className='nav-item active-link'>
                        <Link to='/ResourceCenter' className='nav-links' onClick={closeMobileMenu}>
                        Resource Center
                        </Link>
                        <div className="hidden">
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                            Industry Sales Sheets
                            </Link>{" "}

                        </div>
                    </li>
                    <li className='nav-item active-link' >
                        <Link to='/Investors' className='nav-links' onClick={closeMobileMenu}>
                        Investors
                        </Link>
                        <div className="hidden">
                            <Link to="/" className="nav-links" id='nav-links'  onClick={closeMobileMenu}>
                            DRHP
                            </Link>{" "}
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                            Prospectus
                            </Link>{" "}
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                            Financials
                            </Link>{" "}
                            <Link to="/" className="nav-links" id='nav-links'  onClick={closeMobileMenu}>
                            Shareholding Pattern
                            </Link>{" "}
                            <Link to="/" className="nav-links" id='nav-links'  onClick={closeMobileMenu}>
                            Corporate Announcement
                            </Link>
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                            Press Release
                            </Link>{" "}
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                            Shareholder Enquires
                            </Link>{" "}
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                            Non Applicability Of SEBI Circular
                            </Link>{" "}
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                            Investor Corner
                            </Link>{" "}
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                            Updates
                            </Link>
                            <Link to="/" className="nav-links"  id='nav-links' onClick={closeMobileMenu}>
                                Policies
                            </Link>
                        </div>
                    </li>
                    <li className='nav-item active-link' >
                        <Link to='/SupplierDevelopment' className='nav-links' onClick={closeMobileMenu}>
                        Supplier Development
                        </Link>
                      
                    </li>
                    <li className='nav-item active-link'>
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
