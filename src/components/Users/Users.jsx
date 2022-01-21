import React from 'react';
import stl from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';

const Users = ({users, follow, unfollow, setUsers}) => {

    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
            setUsers(response.data.items);
        })
    }

    return (
        <div>
            {users.map(u =>
                <div className={stl.container} key={u.id}>
                    <div className={stl.leftBlock}>
                        <div className={stl.avatar}>
                            <img
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                alt="avatar"/>
                        </div>
                        {u.followed
                            ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => follow(u.id)}>Follow</button>
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
};

export default Users;