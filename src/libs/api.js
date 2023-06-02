import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://34.22.68.138:8081',
    headers:{
        'content-Type': 'application/json',
    }
})