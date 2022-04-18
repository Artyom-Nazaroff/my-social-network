const SEND_MESSAGE = 'dialogsPage/SEND-MESSAGE';

type UserType = {
    id: number,
    name: string,
};
type MessageType = {
    id: number,
    message: string,
};

const initialState = {
    users: [
        {id: 1, name: 'Ira'},
        {id: 2, name: 'Lera'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Vitya'},
    ] as Array<UserType>,
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'What is your name?'},
        {id: 3, message: 'I live in the beautiful place. KNKMLlmgs rlmrelber erlbmerblerbm erblmerlbmer'},
    ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const body = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            }
        default:
            return state;
    }
}

export default dialogsReducer;

type SendMessageActionType = {
    type: typeof SEND_MESSAGE,
    newMessageText: string,
}
export const sendMessage = (newMessageText: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageText});
