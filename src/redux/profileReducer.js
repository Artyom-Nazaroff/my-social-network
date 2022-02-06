import {profileAPI, usersAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    posts: [
        {id: 1, post: 'Hello!', likesAmount: 2},
        {id: 2, post: 'How are you?', likesAmount: 23},
        {id: 3, post: 'How is it going?', likesAmount: 27},
    ],
    newPostText: '',
    profile: null,
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                post: state.newPostText,
                likesAmount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

export default profileReducer;

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = userId => dispatch => {
    usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};