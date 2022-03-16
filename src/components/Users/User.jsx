import React from 'react';
import stl from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";

const User = ({user, followingInProgress, unfollowUser, followUser}) => {
    return (
        <div className={stl.container}>
            <div className={stl.leftBlock}>
                <div className={stl.avatar}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            alt="avatar"
                        />
                    </NavLink>
                </div>
                {user.followed
                    ? <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => unfollowUser(user.id)}>Unfollow</button>
                    : <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => followUser(user.id)}>Follow</button>
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
    );
};

export default User;