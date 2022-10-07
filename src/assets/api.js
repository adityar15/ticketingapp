import axios from "axios";
import { getCookie } from "./cookie_helper";

export const api = ()=>{
    return axios.create({
        baseURL: 'http://127.0.0.1:8000',
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${getCookie('access_token')}`
        }
    })
}