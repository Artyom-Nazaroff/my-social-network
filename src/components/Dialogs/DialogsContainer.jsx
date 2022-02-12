import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const mapStateToProps = state => ({
    dialogsPage: state.dialogsPage,
});

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage})(AuthRedirectComponent);

export default DialogsContainer;