const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

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
            ],
            newMessageBody: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log('State is changed')
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch(action) {
      if (action.type === ADD_POST) {
          let newPost = {
              id: 3,
              post: this._state.profilePage.newPostText
          };
          this._state.profilePage.posts.push(newPost);
          this._state.profilePage.newPostText = '';
          this._callSubscribe(this._state);
      }  else if (action.type === UPDATE_NEW_POST_TEXT) {
          this._state.profilePage.newPostText = action.newText;
          this._callSubscribe(this._state)
      } else if (action.type === SEND_MESSAGE) {
          let body = this._state.dialogPage.newMessageBody;
          this._state.dialogPage.messages.push({id: 6, message: body});
          this._state.dialogPage.newMessageBody = '';
          this._callSubscribe(this._state)
      } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
          this._state.dialogPage.newMessageBody = action.body;
          this._callSubscribe(this._state)
      }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export default store;
window.store = store;