import {setAuthUser} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export default appReducer;

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => dispatch => {
    const promise = dispatch(setAuthUser());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
};
