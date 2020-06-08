import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/state";

let Dialog = (props) => {
    let path = "/dialogs/" + props.id
    return <div className={style.DialogUser}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
let Message = (props) => {
    return <div className={style.DialogUser}>
        <b>{props.message}</b>
    </div>
}

const Dialogs = (props) => {
    debugger;
    let dialog = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let message = props.dialogsPage.messages.map( m => <Message message={m.message}/> )
    let newMessageBody = props.dialogsPage.newMessageBody; // первоначальное значение value, пустая строка из state
    let onNewMessageChange = (e) => {       // забрать значение при введении текста и присвоить его в state, через dispatch
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }
    let onSendMessageClick = () => {                    //при клике на кнопку, запустить диспатчь, и перезаписать значение, а после занулить
        props.dispatch(sendMessageActionCreator())
    }
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.dialog}>
                    {dialog}
                </div>
                <div className={style.messages}>
                    {message}
                    <textarea cols="30" placeholder='Enter your message' rows="4" onChange={onNewMessageChange} value={newMessageBody}></textarea>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;