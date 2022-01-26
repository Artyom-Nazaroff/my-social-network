import React from 'react';
import preloader from "../../../assets/images/preloader.gif";
import stl from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={stl.preloaderContainer}>
            <img className={stl.preloader} src={preloader} alt=""/>
        </div>
    );
};

export default Preloader;