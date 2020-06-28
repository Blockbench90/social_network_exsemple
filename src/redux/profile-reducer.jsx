import {profileApi} from "../api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'
// редбюсер -- это чистая функция, которая принимает стайт и экшен, если надо меняет стаей и возвращает новый
let initialState = {
    posts: [
        {id: 1, post: 'It is props from first message'},
        {id: 2, post: 'It is props from second message'}
    ],
    newPostText: 'Input your text...',
    profile: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 3, post: state.newPostText};
            return {
            ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
            newPostText: action.newText}
        case SET_USER_PROFILE:
            return {
                ...state,
            profile: action.profile}
        case SET_STATUS:
            return {
                ...state,
            status: action.status}
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProfileStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
            }
        )
    }
}
export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(response => {
            dispatch(setProfileStatus(response.data))
            }
        )
    }
}
export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileApi.updataStatus(status).then(response => {
            if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(response.data))
            }}
        )
    }
}

export default profileReducer;
