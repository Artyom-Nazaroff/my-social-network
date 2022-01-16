import React from 'react';
import stl from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={stl.newPostContainer}>
                <textarea className={stl.inputPostText}></textarea>
                <button className={stl.addPostBtn}>Add Post</button>
            </div>
            <div className={stl.posts}>
                <Post message={'Hello!'} likesAmount={2}/>
                <Post message={'How are you?'} likesAmount={23}/>
            </div>
        </div>

    );
};

export default MyPosts;