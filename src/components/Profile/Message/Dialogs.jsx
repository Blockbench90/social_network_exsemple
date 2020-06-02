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
    let dialogData = [
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
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.dialog}>
                    <Dialog name={dialogData[0].name} id={dialogData[0].id}/>
                    <Dialog name={dialogData[2].name} id={dialogData[2].id}/>
                    <Dialog name={dialogData[3].name} id={dialogData[3].id}/>
                    <Dialog name={dialogData[4].name} id={dialogData[4].id}/>
                    <Dialog name={dialogData[1].name} id={dialogData[1].id}/>
                </div>
                <div className={style.messages}>
                    <Message message={messageData[0].message}/>
                    <Message message={messageData[1].message}/>
                    <Message message={messageData[2].message}/>
                    <Message message={messageData[3].message}/>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;