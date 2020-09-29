const SEND_MESSAGE = 'SEND-MESSAGE'


type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState =  {
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Mitya"},
        {id: 3, name: "Kewin"},
        {id: 4, name: "Luck"},
        {id: 5, name: "Sim"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hallo, am glad to see yuo"},
        {id: 2, message: "Hallo"},
        {id: 3, message: "am glad"},
        {id: 4, message: " to see yuo"}
    ] as Array<MessageType>
}
export type InitialStateType = typeof initialState

const dialogReducer = (state = initialState, action: any): InitialStateType => {
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
type SendMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessageActionCreator = (newMessageBody: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageBody})
export default dialogReducer;