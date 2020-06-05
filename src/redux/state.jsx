import {rerenderEntireTree} from "../rerender";

let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'It is props from first message'},
            {id: 2, post: 'It is props from second message'}
        ],
        newPostText: 'Input your text...'
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: "Alex"},
            {id: 2, name: "Mitya"},
            {id: 3, name: "Kewin"},
            {id: 4, name: "Luck"},
            {id: 5, name: "Sim"}
        ],
        messages: [
            {id: 1, message: "Hallo, am glad to see yuo"},
            {id: 2, message: "Hallo"},
            {id: 3, message: "am glad"},
            {id: 4, message: " to see yuo"}
        ]
    }
}
export let addPost = () => {
    let newPost = {
        id: 3,
        post: state.profilePage.newPostText
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;