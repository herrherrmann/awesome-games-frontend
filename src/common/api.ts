import Axios from 'axios';

const API = 'https://awesome-games-api.herokuapp.com';

const api = Axios.create({
	baseURL: API,
});

api.interceptors.response.use(
	response => response.data,
	error => Promise.reject(error),
);

export default api;
