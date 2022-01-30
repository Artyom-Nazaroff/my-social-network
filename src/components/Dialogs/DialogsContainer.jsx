import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessage, updateNewMessageText} from "../../redux/dialogsReducer";


const mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewMessageText(text) {
//             dispatch(updateNewMessageTextCreator(text));
//         },
//         sendMessage() {
//             dispatch(sendMessageCreator());
//         }
//     }
// };


const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage})(Dialogs);

export default DialogsContainer;