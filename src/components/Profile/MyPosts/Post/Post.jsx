import React from 'react';
import stl from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea name=""></textarea>
                <button>Add</button>
            </div>
            <div className={stl.posts}>
                Posts
                <div className={stl.postItem}>
                    Post 1
                </div>
                <div className={stl.postItem}>
                    Post 2
                </div>
            </div>
        </div>

    );
};

export default MyPosts;