import React from "react";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    return (
        <div className={style.NavbarWrapper}>
            <div className={style.Container}>
                <div>
                    <span>Users</span>
                </div>
            </div>
        </div>
    )
}
export default Users;