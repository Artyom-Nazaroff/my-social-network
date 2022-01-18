import React from 'react';
import stl from './Post.module.css';

const Post = ({message, likesAmount}) => {
    return (
        <div className={stl.postItem}>
            <div className={stl.container}>
                <img src="https://image.freepik.com/free-vector/person-avatar-design_24877-38137.jpg" alt="user-avatar"/>
                <div>{message}</div>
            </div>
            <div className={stl.likeContainer}>
                <span>Like</span>
                {likesAmount}
            </div>
        </div>
    );
};

export default Post;