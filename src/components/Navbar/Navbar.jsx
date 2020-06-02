import React from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";



const Navbar = (props) => {
    return (
        <div className={style.NavbarWrapper}>
            <div className={style.Container}>
                <div>
                    <NavLink to="/profile" activeClassName={style.ActiveLink}>Profile</NavLink>

                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={style.ActiveLink}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/users" activeClassName={style.ActiveLink}>Users</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar;