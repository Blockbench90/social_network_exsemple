import React from "react";
import style from "./Dialogs.module.css"
import {NavLink, Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

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
const AddNewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.messages}>
           <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            <button>Send</button>
        </form>
    )
}
let AddNewMessageFormRedux = reduxForm({form: "dialogAddNewMessageForm"})(AddNewMessageForm)

const Dialogs = (props) => {
    let dialog = props.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let message = props.messages.map( m => <Message message={m.message}/> )

    let onSendMessageClick = (values) => {                    //при клике на кнопку, запустить диспатчь, и перезаписать значение onSubmit и с помощью редаксформ отправить в редьюсер
        props.sendMessage(values.newMessageBody)
    }
    if(!props.isAuth) return <Redirect to='/login'/>
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.dialog}>
                    {dialog}
                </div>
                {message}
            </div>
            <AddNewMessageFormRedux onSubmit={onSendMessageClick}/>
        </div>
    )
};

export default Dialogs;