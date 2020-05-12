import axios from 'axios';

const api = axios.create({
    baseURL: 'https://script.google.com/macros/s/AKfycbwDKkta1uLH_0utqm_dBiHV5trzt-CxlbhTuygHqgH_9vJZqcB7/exec'
});

export default api;