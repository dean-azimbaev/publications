import Axios from 'axios';

export const http = Axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://95.216.159.188:7003/api'
});

