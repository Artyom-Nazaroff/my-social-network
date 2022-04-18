// @ts-ignore
import {setAuthUser} from "./authReducer.ts";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean,
};
const initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS,
};

export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => dispatch => {
    const promise = dispatch(setAuthUser());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
};
