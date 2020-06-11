import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
    let newPostText = props.store.getState().profilePage.newPostText
    let posts = props.store.getState().profilePage.posts

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
       <MyPost newPostText={newPostText}
               addPost={addPost}
               posts={posts}
               onPostChange={onPostChange}/>
    );
};


export default MyPostContainer;