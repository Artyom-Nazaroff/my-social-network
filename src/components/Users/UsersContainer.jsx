import React from 'react';
import {connect} from "react-redux";
import {
    follow, setCurrentPage, unfollow, toggleFollowingProgress, requestUsers, followUser, unfollowUser
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../_UI/Preloader/Preloader";
import {compose} from "redux";
import {
    getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress
} from "../../redux/usersSelectors";
import Paginator from "../_UI/Paginator/Paginator";


class UsersClassContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            <Paginator
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalItemsCount={this.props.totalUsersCount}
            />
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers, followUser, unfollowUser})
)(UsersClassContainer);