import React from "react";
import {connect} from "react-redux";
import MyPost from "./MyPost";
import {addPostActionCreator} from "../../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (NewPostText) => {
            dispatch(addPostActionCreator(NewPostText))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer;
