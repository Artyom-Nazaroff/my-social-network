import {profileAPI, usersAPI} from "../API/API";
import {stopSubmit} from "redux-form";
import {PostType, ProfileType, PhotosType} from "../types/types";

const ADD_POST = 'profilePage/ADD_POST';
const DELETE_POST = 'profilePage/DELETE_POST';
const SET_USER_PROFILE = 'profilePage/SET-USER_PROFILE';
const SET_STATUS = 'profilePage/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profilePage/SAVE_PHOTO_SUCCESS';

const initialState = {
    posts: [
        {id: 1, post: 'Hello!', likesAmount: 2},
        {id: 2, post: 'How are you?', likesAmount: 23},
        {id: 3, post: 'How is it going?', likesAmount: 27},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
};

export type InitialStateType = typeof initialState;


const profileReducer = (state = initialState, action: any): InitialStateType => {
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            }
        default:
            return state;
    }
}

export default profileReducer;

type AddPostActionCreator = {
    type: typeof ADD_POST,
    newPostText: string,
};
export const addPost = (newPostText: string): AddPostActionCreator => ({type: ADD_POST, newPostText});

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType,
};
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});

type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string,
};
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});

type DeletePostActionType = {
    type: typeof DELETE_POST,
    postId: number,
};
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId});

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType,
};
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getUserStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) dispatch(setStatus(status));
};
export const savePhoto = (photo: PhotosType) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(photo);
    if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos));
};
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};