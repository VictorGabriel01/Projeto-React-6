import axios from 'axios';

//https://viacep.com.br/ws/  

//01310930/json
//22050-900

const api = axios.create({
   baseURL: "https://viacep.com.br/ws/"
});

export default api;