import axios from 'axios'
import {User} from '../model/User'

const API = 'http://localhost:5432/api'

export const createUser = async (user:User) => {
    return await axios.post(`${API}/users/register`,user)
}
export {}

export const getAllUser = async () => {
    return await axios.get(`${API}/users`);
}
export {}

export const getOneUser = async (name: string) => {
    return await axios.get(`${API}/users/${name}`);
}
export {}

export const getUserById = async (id:string) => {
    return await axios.get(`${API}/users/${id}`);
}
export {}

export const delUser = async (name: string) => {
    return await axios.delete(`${API}/users/delete/${name}`);
}
export {}


