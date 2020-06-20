import style from "./ProfilePage.module.css";
import avatarProfile from "../../../assets/images/logo.svg";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";

let ProfileInfo = (props) => {
    debugger;
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.ProfileWrapper}>
            <div className={style.Profile}>
                <img className={avatarProfile} src={avatarProfile} alt="logo"/>
            </div>
            <div className={style.Description}>
                <img src={props.profile.photos.large}/>
                <h1>{props.profile.aboutMe}</h1>
                <h2>{props.profile.fullName}</h2>
            </div>
        </div>
    )
}
export default ProfileInfo;