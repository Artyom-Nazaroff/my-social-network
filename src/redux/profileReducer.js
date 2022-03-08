import {profileAPI, usersAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
    posts: [
        {id: 1, post: 'Hello!', likesAmount: 2},
        {id: 2, post: 'How are you?', likesAmount: 23},
        {id: 3, post: 'How is it going?', likesAmount: 27},
    ],
    profile: null,
    status: '',
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                post: action.newPostText,
                likesAmount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}

export default profileReducer;

export const addPost = newPostText => ({type: ADD_POST, newPostText});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});

export const getUserProfile = userId => dispatch => {
    usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};
export const getStatus = userId => dispatch => {
    profileAPI.getUserStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};
export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) dispatch(setStatus(status));
    });
};