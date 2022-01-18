import React from 'react';
import stl from './Dialogs.module.css';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText(text) {
            dispatch(updateNewMessageTextCreator(text));
        },
        sendMessage() {
            dispatch(sendMessageCreator());
        }
    }
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;