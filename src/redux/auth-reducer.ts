import {authApi, ResultCodeEnum} from "../api";

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}
export type InitialStateType = typeof initialState
const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                userId: 1234234,
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
type SetAuthUserDataActionPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

export const getAuthUserData = () => (dispatch: any) => {
    authApi.me().then((response: any) => {
        if (response.data.resultCode === ResultCodeEnum.Success) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean, isAuth:boolean = false) => (dispatch: any) => {
    authApi.login(email, password, rememberMe).then((response: any) => {
        if (response.data.resultCode === ResultCodeEnum.Success) {
            dispatch(getAuthUserData())
        }
    })
}
export const logout = () => (dispatch: any) => {
    authApi.logout().then((response: any) => {
        if (response.data.resultCode === ResultCodeEnum.Success) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default authReducer;
