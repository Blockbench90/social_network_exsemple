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
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.dialog}>
                    <Dialog name="Alex" id="1"/>
                    <Dialog name="Mitya" id="2"/>
                    <Dialog name="Kewin" id="3"/>
                    <Dialog name="Luck" id="4"/>
                    <Dialog name="Sim" id="5"/>
                </div>
                <div className={style.messages}>
                    <Message message="Hallo, am glad to see yuo"/>
                    <Message message="Hallo"/>
                    <Message message="am glad"/>
                    <Message message=" to see yuo"/>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;