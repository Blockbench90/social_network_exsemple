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
    ]
}
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SEND_MESSAGE:{
            let body = action.newMessageBody;
            return {...state,
                messages: [...state.messages, {id:6, message: body}]
            }
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export default dialogReducer;