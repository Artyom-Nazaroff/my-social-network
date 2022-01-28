import React from 'react';
import stl from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={stl.pageNumbersContainer}>
                {pages.map(page => {
                    return <span
                        className={props.currentPage === page ? stl.selectedPageNumber : stl.pageNumber}
                        onClick={() => {
                            props.onPageChanged(page)
                        }}
                    >{page}</span>
                })}
            </div>
            {props.users.map(user =>
                <div className={stl.container} key={user.id}>
                    <div className={stl.leftBlock}>
                        <div className={stl.avatar}>
                            <img
                                src={user.photos.small != null ? user.photos.small : userPhoto}
                                alt="avatar"/>
                        </div>
                        {user.followed
                            ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(user.id)}>Follow</button>
                        }
                    </div>
                    <div className={stl.rightBlock}>
                        <div className={stl.nameContainer}>
                            <div className={stl.userName}>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={stl.locationContainer}>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;