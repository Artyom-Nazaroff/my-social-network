import React from 'react';
import stl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    return (
        <div className={stl.dialogUser}>
            <NavLink to={`/messages/${id}`}>{name}</NavLink>
        </div>
    )
}

const Message = ({text}) => {
    return (
        <div className={stl.message}>{text}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Ira'},
        {id: 2, name: 'Lera'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Vitya'},
    ]
    let messagesData = [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'What is your name?'},
        {id: 3, message: 'I live in the beautiful place.'},
    ]

    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsUsers}>
                {dialogsData.map(element => <DialogItem name={element.name} id={element.id}/>)}
            </div>
            <div className={stl.messages}>
                {messagesData.map(element => <Message text={element.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;