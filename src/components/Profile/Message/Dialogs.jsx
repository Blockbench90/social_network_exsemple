import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

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
    let message = props.messageData.map( m => <Message message={m.message}/> )
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.dialog}>
                    {dialog}
                </div>
                <div className={style.messages}>
                    {message}
                </div>
            </div>
        </div>
    )
};

export default Dialogs;