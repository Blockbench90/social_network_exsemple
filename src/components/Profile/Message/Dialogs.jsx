import React from "react";
import style from "./Dialogs.module.css"
import {NavLink, Redirect} from "react-router-dom";

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
    let dialog = props.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let message = props.messages.map( m => <Message message={m.message}/> )
    let newMessageBody = props.newMessageBody; // первоначальное значение value, пустая строка из state

    let onNewMessageChange = (e) => {       // забрать значение при введении текста и присвоить его в state, через dispatch
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    let onSendMessageClick = () => {                    //при клике на кнопку, запустить диспатчь, и перезаписать значение, а после занулить
        props.sendMessage()
    }
    if(!props.isAuth) return <Redirect to='/login'/>
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.dialog}>
                    {dialog}
                </div>
                <div className={style.messages}>
                    {message}
                    <textarea cols="30" placeholder='Enter your message' rows="4" onChange={onNewMessageChange} value={newMessageBody}/>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;