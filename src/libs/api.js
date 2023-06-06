import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://sobee.p-e.kr',
    headers:{
        'content-Type': 'application/json',
    }
})