import axios from 'axios';

const api = axios.create({
  baseURL: 'https://medicos-progweb.herokuapp.com/',
});

export default api;