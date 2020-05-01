import Axios from 'axios';

/**
 * Backend API, use 'http://localhost:3000' for local development.
 */
const API = 'https://awesome-games-api.herokuapp.com';

const api = Axios.create({
	baseURL: API,
});

api.interceptors.response.use(
	response => response.data,
	error => Promise.reject(error),
);

export default api;
