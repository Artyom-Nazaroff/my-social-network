import React from 'react';
import stl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../_UI/FormsControls/FormsControl";
import {required, maxLengthCreator} from "../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20);

const Dialogs = (props) => {

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsUsers}>
                {props.dialogsPage.users.map(el =>
                    <DialogItem
                        key={el.id}
                        name={el.name}
                        id={el.id}
                    />
                )}
            </div>
            <div className={stl.messages}>
                <div className={stl.messagesContainer}>
                    {props.dialogsPage.messages.map(el =>
                        <Message
                            key={el.id}
                            id={el.id}
                            text={el.message}
                        />
                    )}
                </div>
                <MessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={stl.newMessageContainer}>
            <div>
                <Field
                    component={Textarea}
                    name={'newMessageText'}
                    validate={[required, maxLength20]}
                    className={stl.inputMessageText}
                    placeholder={'Enter your message...'}
                />
            </div>
            <button className={stl.sendMessageBtn}>Send message</button>
        </form>
    )
}

const MessageFormRedux = reduxForm({form: 'dialogMessageForm'})(MessageForm);

export default Dialogs;