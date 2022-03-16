import profileReducer, {addPost, deletePost} from "./profileReducer";

const state = {
    posts: [
        {id: 1, post: 'Hello!', likesAmount: 2},
        {id: 2, post: 'How are you?', likesAmount: 23},
        {id: 3, post: 'How is it going?', likesAmount: 27},
    ]
}

it('new post should be added', () => {
    const action = addPost('well good');
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
    const action = addPost('well good');
    const newState = profileReducer(state, action);
    expect(newState.posts[3].post).toBe('well good');
});

it('message length should decrease after deletion', () => {
    const action = deletePost(1);
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});


