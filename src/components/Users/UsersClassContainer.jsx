import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../_UI/Preloader/Preloader";

// Внешняя контейнерная компонента
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            }
        </>
    }
}


// Внутренняя контейнерная компонента
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow(userId) {
//             dispatch(followAC(userId));
//         },
//         unfollow(userId) {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers(users) {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage(page) {
//             dispatch(setCurrentPageAC(page));
//         },
//         setTotalUsersCount(totalCount) {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching(isFetching) {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }

const UsersClassContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching,
})(UsersContainer);

export default UsersClassContainer;