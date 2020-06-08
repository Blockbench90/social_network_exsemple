const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
// редбюсер -- это чистая функция, которая принимает стайт и экшен, если надо меняет стаей и возвращает новый

const dialogReducer = (state, action) => {
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