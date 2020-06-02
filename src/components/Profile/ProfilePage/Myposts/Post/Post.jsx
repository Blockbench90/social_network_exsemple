import React from "react";
import style from "./Post.module.css";
import like from "../../../../../assets/images/like.svg"
import post from "../../../../../assets/images/imgPost.jpg"

const Post = (props) => {
    return (
        <div className={style.Wrapper}>
            <div>
                <img className={style.Avatar}
                     src={post} alt="logo"/>
            </div>
            <div className={style.Title}>
                <span>{props.message}</span>
                <div className={style.Like}>
                    <b>like</b>
                    <img src={like} alt="like"/>
                </div>
            </div>
        </div>
    );
};


export default Post;