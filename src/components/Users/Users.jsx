import React from 'react';
import User from "./User";

const Users = ({users, followUser, unfollowUser, followingInProgress}) => {

    return (
        <div>
            {users.map(user =>
                <User
                    key={user.id}
                    user={user}
                    followUser={followUser}
                    unfollowUser={unfollowUser}
                    followingInProgress={followingInProgress}
                />
            )}
        </div>
    );
};

export default Users;