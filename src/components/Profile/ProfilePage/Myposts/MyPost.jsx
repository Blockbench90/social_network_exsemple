import React from "react";
import style from "./MyPost.module.css";
import avatar from "../../../../assets/images/logo.svg"
import Post from "./Post/Post";

const MyPost = (props) => {
    let postData = [
        {id: 1, post:'It is props from first message'},
        {id: 2, post:'It is props from second message'}
    ]
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
                    <Post message={postData[0].post}/>
                    <Post message={postData[1].post}/>
                </div>
            </div>
        </div>
    );
};


export default MyPost;