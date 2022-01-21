import React from 'react';
import stl from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = ({updateNewPostText, addPost, posts, newPostText}) => {

    const addNewPost = () => {
        addPost();
    }

    const postChanging = (event) => {
        let text = event.target.value;
        updateNewPostText(text);
    }

    return (
        <div className={stl.myPostsContainer}>
            <h2>My Posts</h2>
            <div className={stl.newPostContainer}>
                <div>
                    <textarea
                        className={stl.inputPostText}
                        placeholder={'Enter your post...'}
                        onChange={postChanging}
                        value={newPostText}
                    />
                </div>
                <button className={stl.addPostBtn} onClick={addNewPost}>Add Post</button>
            </div>
            <div className={stl.posts}>
                {posts.map(el => <Post
                    key={el.id}
                    id={el.id}
                    message={el.post}
                    likesAmount={el.likesAmount}
                />)}
            </div>
        </div>

    );
};

export default MyPosts;