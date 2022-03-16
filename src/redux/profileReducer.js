import {profileAPI, usersAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
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
export const deletePost = postId => ({type: DELETE_POST, postId});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});

export const getUserProfile = userId => async dispatch => {
    const response = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getStatus = userId => async dispatch => {
    const response = await profileAPI.getUserStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = status => async dispatch => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) dispatch(setStatus(status));
};