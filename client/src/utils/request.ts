import axios from 'axios';

const serverUrl = 'http://localhost:3000/api';

export const serverRequest = axios.create({
    baseURL: serverUrl
});