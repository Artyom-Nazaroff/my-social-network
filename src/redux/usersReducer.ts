import {usersAPI} from "../API/API";
import {UserType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, // array of user ids
};
type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) return {...user, followed: true};
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) return {...user, followed: false};
                    return user;
                })
            };
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isButtonDisable
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

export default usersReducer;

type FollowActionType = {
    type: typeof FOLLOW,
    userId: number,
};
export const follow = (userId: number): FollowActionType => ({type: FOLLOW, userId});

type UnfollowActionType = {
    type: typeof UNFOLLOW,
    userId: number,
};
export const unfollow = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId});

type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>,
};
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    page: number,
};
export const setCurrentPage = (page: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, page});

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number,
};
export const setTotalUsersCount = (count: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, count});

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean,
};
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isButtonDisable: boolean,
    userId: number,
};
export const toggleFollowingProgress = (isButtonDisable: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isButtonDisable, userId
});

export const requestUsers = (pageNumber: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};
export const followUser = (userId) => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) dispatch(follow(userId));
    dispatch(toggleFollowingProgress(false, userId));
};
export const unfollowUser = userId => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) dispatch(unfollow(userId));
    dispatch(toggleFollowingProgress(false, userId));
};