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
    let dialogs = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Mitya"},
        {id: 3, name: "Kewin"},
        {id: 4, name: "Luck"},
        {id: 5, name: "Sim"}
    ]
    let messageData = [
        {id: 1, message: "Hallo, am glad to see yuo"},
        {id: 2, message: "Hallo"},
        {id: 3, message: "am glad"},
        {id: 4, message: " to see yuo"}
    ]
    let dialog = dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let message = messageData.map( m => <Message message={m.message}/> )
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