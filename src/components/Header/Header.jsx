import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/images/logo.svg"
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <div className={style.HeaderWrapper}>
        <div className={style.HeaderContainer}>
            <div className={style.Logo}>
                <NavLink to={'/'}>
                <img src={logo} alt="logo"/>
                </NavLink>
            </div>
            <div className={style.Login}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                    <NavLink to={'/login'}>
                        <h2>Login</h2>
                    </NavLink>}
            </div>
        </div>
    </div>

}
export default Header;