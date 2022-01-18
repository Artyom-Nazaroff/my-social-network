import React from 'react';
import stl from './Message.module.css';


const Message = ({text}) => {
    return (
        <div className={stl.message}>{text}</div>
    )
}

export default Message;