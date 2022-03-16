import React from 'react';
import stl from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../_UI/FormsControls/FormsControl";

const maxLength10 = maxLengthCreator(10);

const MyPosts = ({addPost, posts}) => {
    const addNewPost = (values) => {
        addPost(values.newPostText);
    }

    return (
        <div className={stl.myPostsContainer}>
            <h2>My Posts</h2>
            <PostFormRedux onSubmit={addNewPost}/>
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

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={stl.newPostContainer}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPostText'}
                    validate={[required, maxLength10]}
                    className={stl.inputPostText}
                    placeholder={'Enter your post...'}
                />
            </div>
            <button className={stl.addPostBtn}>Add Post</button>
        </form>
    )
}

const PostFormRedux = reduxForm({form: 'postTextForm'})(NewPostForm);

export default MyPosts;