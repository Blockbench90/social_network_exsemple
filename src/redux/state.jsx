let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log('State is changed')
    },
    addPost() {
        let newPost = {
            id: 3,
            post: this._state.profilePage.newPostText
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscribe(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribe(this._state)
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    }
}
window.store = store;
export default store;