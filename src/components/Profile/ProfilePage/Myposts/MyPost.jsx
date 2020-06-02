import React from "react";
import style from "./MyPost.module.css";
import avatar from "../../../../assets/images/logo.svg"
import Post from "./Post/Post";

const MyPost = (props) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.InputWrapper}>
                    <div>
                        <img className={style.Avatar} src={avatar} alt='logo'/>
                    </div>
                    <div className={style.Input}>
                        <textarea rows="1" cols="50"/>
                        <button>Add Post</button>
                    </div>
                </div>
                <div className={style.Post}>
                    <Post message='It is props from first message'/>
                    <Post message='It is props from second message'/>
                </div>
            </div>
        </div>
    );
};


export default MyPost;