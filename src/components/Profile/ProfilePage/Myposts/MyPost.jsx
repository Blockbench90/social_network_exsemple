import React from "react";
import style from "./MyPost.module.css";
import avatar from "../../../../assets/images/logo.svg"
import Post from "./Post/Post";

const MyPost = (props) => {
    let post = props.posts.map(p => <Post message={p.post}/>)
    let newPostText = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostText.current.value;
        props.updateNewPostText(text)
    }
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.InputWrapper}>
                    <div>
                        <img className={style.Avatar} src={avatar} alt='logo'/>
                    </div>
                    <div className={style.Input}>
                        <textarea rows="1" cols="50" ref={newPostText} onChange={onPostChange} value={props.newPostText}/>
                        <button onClick={addPost}>Add Post</button>
                    </div>
                </div>
                <div className={style.Post}>
                    {post}
                </div>
            </div>
        </div>
    );
};


export default MyPost;