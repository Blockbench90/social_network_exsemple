import React from "react";
import * as axios from "axios";


export const usersApi = {
    getUsers(currentPage = 1, pageSize = 4) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
    },
    follow(userId) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
            {
                withCredentials: true,
                headers: {
                    'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
                }
            })
    },
    unfollow(userId) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {
                withCredentials: true,
                headers: {
                    'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
                }
            })
    }
}
export const authApi = {
    me() {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
            }
        })
    }
}
export const profileApi = {
    getProfile (userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    }
}