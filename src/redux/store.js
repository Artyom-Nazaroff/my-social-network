import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hello!', likesAmount: 2},
                {id: 2, post: 'How are you?', likesAmount: 23},
                {id: 3, post: 'How is it going?', likesAmount: 27},
            ],
            postText: '',
        },

        dialogsPage: {
            dialogs: [
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
        },

    },
    _callSubscriber() {
        // Функция, которая ссылается на одноименную функцию из index.js
    },
// -----------------------------------------------------------------------------------------------------------
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
// -----------------------------------------------------------------------------------------------------------
    dispatch(action) { // Что бы я ни хотел изменить внутри state, используй dispatch
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
}



export default store;
window.store = store;