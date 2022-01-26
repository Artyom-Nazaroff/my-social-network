import React from 'react';
import {connect} from "react-redux";
import Users from "./UsersClass";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/usersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow(userId) {
            dispatch(followAC(userId));
        },
        unfollow(userId) {
            dispatch(unfollowAC(userId));
        },
        setUsers(users) {
            dispatch(setUsersAC(users));
        },
        setCurrentPage(page) {
            dispatch(setCurrentPageAC(page));
        },
        setTotalUsersCount(totalCount) {
            dispatch(setUsersTotalCountAC(totalCount));
        },
    }
}

const UsersClassContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersClassContainer;