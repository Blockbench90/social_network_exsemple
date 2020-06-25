import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f0f287db-1451-40d2-ae8a-1a302f1200c2'
    }
})
const usersUrl = {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
}
export const usersApi = {
    getUsers (currentPage =1, pageSize= 4) {
        return instance.get(usersUrl.baseURL + `users?page=${currentPage}&count=${pageSize}`, usersUrl.withCredentials)
    }
}