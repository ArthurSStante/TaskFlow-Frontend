import axios from 'axios';

let api = axios.create({
  //baseURL: 'http://localhost:8080/api'
  baseURL: 'https://backend-node-task.onrender.com/api', // Certifique-se de que o baseURL está correto
  timeout: 10000,
});

export { api };
