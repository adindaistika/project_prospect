import axios from "axios";
import { deleteCookie, getCookie } from 'cookies-next';

const apiClient = () => {
	const token = getCookie('access_token');
	const axiosInstance = axios.create({
		baseURL: process.env.BASE_URL,
		responseType: "json",
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		}
	});
	axiosInstance.interceptors.response.use((response) => {
		return response;
	}, function (error) {
		if (error.response.status == 401) {
			deleteCookie('access_token');
			window.location.href = '/';
		}
		return Promise.reject(error);
	})

	return axiosInstance;
};

export default apiClient;