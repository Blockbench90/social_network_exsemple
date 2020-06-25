import * as axios from "axios";


export const usersApi = {
    getUsers (currentPage =1, pageSize= 4) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
    },
    follow(userId) {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{},
            {
                withCredentials: true,
                headers: {
                    'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
                }
            })
    },
    unfollow(userId) {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {
                withCredentials: true,
                headers: {
                    'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
                }
            })
    }
}