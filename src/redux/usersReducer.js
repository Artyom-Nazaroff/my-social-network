import {usersAPI} from "../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}


const usersReducer = (state = initialState, action) => {

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

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isButtonDisable, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isButtonDisable, userId
});

export const getUsers = (pageNumber, pageSize) => dispatch => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(pageNumber, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
};
export const followUser = (userId) => dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(follow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};
export const unfollowUser = userId => dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(unfollow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};