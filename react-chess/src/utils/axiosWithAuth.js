import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		headers: {
			Authorization: token,
			contentType: "application/json",
		},
		baseURL: "http://localhost:4000/",
	});
};

export const client = () => {
	return axios.create({
		headers: {
			contentType: "application/json",
		},
		baseURL: "http://localhost:4000/",
	});
};
