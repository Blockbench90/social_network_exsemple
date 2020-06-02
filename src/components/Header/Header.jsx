import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/images/logo.svg"


const Header = (props) => {
    return <div className={style.HeaderWrapper}>
        <div className={style.HeaderContainer}>
            <div className={style.Logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <h2>sing in</h2>
            </div>
        </div>
    </div>

}
export default Header;