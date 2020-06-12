import style from "./ProfilePage.module.css";
import avatarProfile from "../../../assets/images/logo.svg";
import React from "react";

let ProfileInfo = (props) => {
    return (
        <div className={style.ProfileWrapper}>
            <div className={style.Profile}>
                <img className={avatarProfile} src={avatarProfile} alt="logo"/>
            </div>
            <div className={style.Description}>
                <h1>Name of User</h1>
                <h2>Status</h2>
                <h3>Som description</h3>
            </div>
        </div>
    )
}
export default ProfileInfo;