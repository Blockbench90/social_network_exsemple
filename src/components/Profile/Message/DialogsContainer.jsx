import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//     let dialogsPage = props.store.getState().dialogPage
//
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyActionCreator(body))
//     }
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageActionCreator())
//     }
//     return (
//         <Dialogs dialogsPage={dialogsPage}
//                  updateNewMessageBody={onNewMessageChange}
//                  sendMessage={onSendMessageClick}/>
//     )
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}


const DialogsContainer = connect(mapDispatchToProps, mapStateToProps)(Dialogs)
export default DialogsContainer;