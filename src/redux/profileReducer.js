const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, post: 'Hello!', likesAmount: 2},
        {id: 2, post: 'How are you?', likesAmount: 23},
        {id: 3, post: 'How is it going?', likesAmount: 27},
    ],
    newPostText: '',
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                post: state.postText,
                likesAmount: 0,
            }
            state.posts.push(newPost);
            state.postText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.postText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});