import {usersApi} from "../api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    pageSize: 4,
    currentPage: 2,
    totalUsersCount: 53,
    isFetching: false,
    followingInProgress: []
}

let usersReducer = (state = initialState, action) => {
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

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
            }
        )
    }
}
export const followTC = (usersId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, usersId))
        usersApi.follow(usersId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(usersId))
                }
                dispatch(toggleFollowingProgress(false, usersId))
            }
        )
    }
}
export const unfollowTC = (usersId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, usersId))
        usersApi.unfollow(usersId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(usersId))
                }
                dispatch(toggleFollowingProgress(false, usersId))
            }
        )
    }
}

export default usersReducer;