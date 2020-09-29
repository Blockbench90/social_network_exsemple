import {usersApi} from "../api";
import {UserType} from "./type/type";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 4,
    currentPage: 2,
    totalUsersCount: 53,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of users id
}
type InitialStateType = typeof initialState
let usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return  {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case SET_USERS:{
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING:{
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !=action.userId)
            }
        }
        default:
            return state;

    }
}
type FollowType = {
    type: typeof FOLLOW
    userId: number
}
export const follow = (userId: number): FollowType => ({type: FOLLOW, userId})

type UnFollowType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollow = (userId: number): UnFollowType => ({type: UNFOLLOW, userId})

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})

type SetCurrentPage = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPage => ({type: SET_CURRENT_PAGE, currentPage})

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})

type ToggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSize).then((response: any) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
            }
        )
    }
}
export const followTC = (usersId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, usersId))
        usersApi.follow(usersId).then((response: any) => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(usersId))
                }
                dispatch(toggleFollowingProgress(false, usersId))
            }
        )
    }
}
export const unfollowTC = (usersId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, usersId))
        usersApi.unfollow(usersId).then((response: any) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(usersId))
                }
                dispatch(toggleFollowingProgress(false, usersId))
            }
        )
    }
}

export default usersReducer