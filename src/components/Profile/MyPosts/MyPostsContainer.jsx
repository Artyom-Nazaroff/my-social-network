import React from 'react';
import stl from './MyPosts.module.css';
import {addPost, updateNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText(text) {
//             dispatch(updateNewPostTextCreator(text));
//         },
//         addPost() {
//             dispatch(addPostCreator());
//         },
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts);

export default MyPostsContainer;