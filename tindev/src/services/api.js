import axios from 'axios';

const  api = axios.create({
    baseUrl: 'http://hocalhost:3333'
})

export default api;