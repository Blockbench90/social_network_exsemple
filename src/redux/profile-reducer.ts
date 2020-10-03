import {profileApi} from "../api";
import {ProfileType} from "./type/type";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'

type PostType = {
    id: number
    post: string
}


let initialState = {
    posts: [
        {id: 1, post: 'It is props from first message'},
        {id: 2, post: 'It is props from second message'}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 3,
                post: action.NewPostText};
            return {
            ...state,
                posts: [...state.posts, newPost]
            }
        }
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
type AddPostActionCreatorType = {
    type: typeof ADD_POST
    NewPostText: string
}
export const addPostActionCreator = (NewPostText: string): AddPostActionCreatorType => ({type: ADD_POST, NewPostText})
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})
type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setProfileStatus = (status: string): SetStatusType => ({type: SET_STATUS, status})

export const getUserProfile = (userId: number) => {
    return (dispatch: any) => {
        profileApi.getProfile(userId).then((response: any) => {
            dispatch(setUserProfile(response.data))
            }
        )
    }
}
export const getProfileStatus = (userId: number) => {
    return (dispatch: any) => {
        profileApi.getStatus(userId).then((response: any) => {
            dispatch(setProfileStatus(response.data))
            }
        )
    }
}
export const updateProfileStatus = (status: string) => {
    return (dispatch:any) => {
        profileApi.updateStatus(status).then((response: any) => {
            if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(response.data))
            }}
        )
    }
}

export default profileReducer;
