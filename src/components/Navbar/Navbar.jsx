import React from 'react';
import stl from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const setClass = ({isActive}) => {
        if (isActive) {
            return `${stl.item} ${stl.active}`
        } else {
            return `${stl.item}`
        }
    }

    return (
        <nav className={stl.nav}>
            <ul>
                <li><NavLink to="/profile" className={setClass}>Profile</NavLink></li>
                <li><NavLink to="/messages" className={setClass}>Messages</NavLink></li>
                <li><NavLink to="/news" className={setClass}>News</NavLink></li>
                <li><NavLink to="/music" className={setClass}>Music</NavLink></li>
                <li><NavLink to="/settings" className={setClass}>Settings</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;