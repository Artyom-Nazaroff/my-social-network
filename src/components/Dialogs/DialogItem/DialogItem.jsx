import React from 'react';
import stl from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    return (
        <div className={stl.dialogUser}>
            <NavLink to={`/messages/${id}`}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;