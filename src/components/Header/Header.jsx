import React from 'react';
import stl from './Header.module.css';
import logoPicture from '../../assets/images/web-site-logo.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={stl.header}>
            <img src={logoPicture} alt=""/>
            <div className={stl.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;