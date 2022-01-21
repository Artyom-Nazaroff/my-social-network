const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    users: [
        {id: 1, name: 'Ira'},
        {id: 2, name: 'Lera'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Vitya'},
    ],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'What is your name?'},
        {id: 3, message: 'I live in the beautiful place. KNKMLlmgs rlmrelber erlbmerblerbm erblmerlbmer'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.body,
            }
        case SEND_MESSAGE:
            const body = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
                newMessageText: '',
            }
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = text => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text});
