const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
// редбюсер -- это чистая функция, которая принимает стайт и экшен, если надо меняет стаей и возвращает новый
let initialState =  {
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
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({id:6, message: body});
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export default dialogReducer;