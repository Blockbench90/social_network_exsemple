import React from "react";
import style from "./ProfilePage.module.css";
import MyPost from "./Myposts/MyPost";
import ProfileInfo from "./ProfileInfo";
import MyPostContainer from "./Myposts/MyPostContainer";


const ProfilePage = (props) => {
    return (
        <div className={style.ProfilePageWrapper}>
            <div className={style.Container}>
                <ProfileInfo/>
                <div className={style.MyPostsWrapper}>
                   <MyPostContainer/>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage;