import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/users/lucasga1'
})

export default api;