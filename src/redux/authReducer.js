import {authAPI} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const setAuthUser = () => dispatch => {
    authAPI.authQuery().then(response => {
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};
export const login = (email, password, rememberMe) => dispatch => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUser());
        }
    });
};
export const logout = () => dispatch => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};