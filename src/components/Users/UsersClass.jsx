import React from 'react';
import stl from './UsersClass.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={stl.pageNumbersContainer}>
                    {pages.map(page => {
                        return <span
                            className={this.props.currentPage === page ? stl.selectedPageNumber : stl.pageNumber}
                            onClick={() => {this.onPageChanged(page)}}
                        >{page}</span>
                    })}
                </div>
                {this.props.users.map(u =>
                    <div className={stl.container} key={u.id}>
                        <div className={stl.leftBlock}>
                            <div className={stl.avatar}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : userPhoto}
                                    alt="avatar"/>
                            </div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                            }
                        </div>
                        <div className={stl.rightBlock}>
                            <div className={stl.nameContainer}>
                                <div className={stl.userName}>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={stl.locationContainer}>
                                <div>{'u.location.city'}</div>
                                <div>{'u.location.country'}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Users;