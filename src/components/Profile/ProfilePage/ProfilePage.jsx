import React from "react";
import style from "./ProfilePage.module.css";
import ProfileInfo from "./ProfileInfo";
import MyPostContainer from "./Myposts/MyPostContainer";
import ProfileStatus from "./Myposts/ProfileStatus";


const ProfilePage = (props) => {
    return (
        <div className={style.ProfilePageWrapper}>
            <div className={style.Container}>
                <ProfileInfo profile={props.profile}/>

                <div className={style.MyPostsWrapper}>
                   <MyPostContainer/>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage;