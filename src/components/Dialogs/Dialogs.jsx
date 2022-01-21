import React from 'react';
import stl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = ({users, messages, newMessageText, updateNewMessageText, sendMessage}) => {
    const sendNewMessage = () => {
        sendMessage();
    }

    const changeMessageText = (event) => {
        let text = event.target.value;
        updateNewMessageText(text);
    }

    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsUsers}>
                {users.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)}
            </div>
            <div className={stl.messages}>
                <div className={stl.messagesContainer}>
                    {messages.map(el => <Message key={el.id} id={el.id} text={el.message}/>)}
                </div>
                <div className={stl.newMessageContainer}>
                    <div>
                        <textarea
                            className={stl.inputMessageText}
                            placeholder={'Enter your message...'}
                            onChange={changeMessageText}
                            value={newMessageText}
                        />
                    </div>
                    <button className={stl.sendMessageBtn} onClick={sendNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;