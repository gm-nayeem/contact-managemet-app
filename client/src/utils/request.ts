import axios from 'axios';

const serverUrl = 'https://contact-managemet-app-api.onrender.com/api';

export const serverRequest = axios.create({
    baseURL: serverUrl
});