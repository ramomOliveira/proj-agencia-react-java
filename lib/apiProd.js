import axios from 'axios';

const apiProd = axios.create({
  baseURL: 'https://appagencia.herokuapp.com',
});

export default apiProd;
