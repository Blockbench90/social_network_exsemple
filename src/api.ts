import axios from "axios";


export const usersApi = {
    getUsers(currentPage = 1, pageSize = 4) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
    },
    follow(userId: number) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
            {
                withCredentials: true,
                headers: {
                    'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
                }
            })
    },
    unfollow(userId: number) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {
                withCredentials: true,
                headers: {
                    'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
                }
            })
    }
}
export enum ResultCodeEnum {
    Success = 0,
    Error= 1
}
type MeResponseType = {
    data: {
        id: number
        email: string
        password: string
    }
    resultCode: number
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: number
    messages: Array<string>
}
export const authApi = {
    me() {
        return axios.get<MeResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
            }
        })
    },
    login(email: string, password: string, rememberMe: boolean) {
        return axios.post<LoginResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email, password, rememberMe}, {
            withCredentials: true,
            headers: {
                'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
            }
        })
    },
    logout() {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
            }
        })
    }

}
export const profileApi = {
    getProfile (userId: number) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    },
    getStatus (userId: number) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/` + userId)
    },
    updateStatus (status: string) {
        return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: status} )
    }
}