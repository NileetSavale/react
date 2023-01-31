import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { MenuItems} from './MenuItems'
import './Dropdown.css'
import { FaBeer } from 'react-icons/fa';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Dropdown() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return(
    <>
    <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item,index) => {
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}></Link>
                    </li>
                )
            })}
        </ul>
    </>
    )
 }

export default Dropdown;
