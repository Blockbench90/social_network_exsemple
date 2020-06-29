import React from "react";
import style from "./MyPost.module.css";
import avatar from "../../../../assets/images/logo.svg"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.Input}>
            <Field component='textarea' placeholder='input your text' name={'NewPostText'}/>
            <button>Add Post</button>
        </form>
    )
}
let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPost = (props) => {
    let post = props.posts.map(p => <Post message={p.post} key={p.id}/>)


    let onAddPost = (values) => {
        props.addPost(values.NewPostText);
    }

    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.InputWrapper}>
                    <div>
                        <img className={style.Avatar} src={avatar} alt='logo'/>
                    </div>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                </div>
                <div className={style.Post}>
                    {post}
                </div>
            </div>
        </div>
    );
};

export default MyPost;