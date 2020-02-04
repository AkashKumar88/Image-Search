// ------------------Unsplash.js-------------------------
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 6448f405d8b96d29e75bc7c24155d07b4c220e003f7fc336b14efa8fbf32a40a'
    } 
});