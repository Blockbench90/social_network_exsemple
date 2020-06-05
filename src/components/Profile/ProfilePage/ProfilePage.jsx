import React from "react";
import style from "./ProfilePage.module.css";
import MyPost from "./Myposts/MyPost";
import avatarProfile from "../../../assets/images/logo.svg"
import {updateNewPostText} from "../../../redux/state";

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

const ProfilePage = (props) => {
    return (
        <div className={style.ProfilePageWrapper}>
            <div className={style.Container}>
                <ProfileInfo/>
                <div className={style.MyPostsWrapper}>
                    <MyPost newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} posts={props.state.profilePage.posts} addPost={props.addPost}/>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage;