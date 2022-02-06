import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "36f1d688-5002-41af-b997-2af3697c9c74",
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
};

export const authAPI = {
    authQuery() {
        return instance.get(`auth/me`);
    }
};

