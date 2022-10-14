import axios from "axios";
import { getCookie } from "./cookie_helper";

export const api = ()=>{
    return axios.create({
        baseURL: 'https://fastapi-code.herokuapp.com',
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${getCookie('access_token')}`
        }
    })
}