import React from 'react';
import Paginator from "../_UI/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {

    return (
        <div>
            <Paginator
                onPageChanged={onPageChanged}
                currentPage={currentPage}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
            />
            <div>
                {users.map(user =>
                    <User
                        key={user.id}
                        user={user}
                        followUser={props.followUser}
                        unfollowUser={props.unfollowUser}
                        followingInProgress={props.followingInProgress}
                    />
                )}
            </div>

        </div>
    );
};

export default Users;