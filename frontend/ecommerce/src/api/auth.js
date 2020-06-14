import axios from 'axios';
import jwt from 'jwt-decode';

const URL = `http://127.0.0.1:3050`;
const AUTH_TOKEN_KEY = 'authToken';

// Login function
export function login(email, password) {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios({
				url: URL + '/login',
				method: 'POST',
				data: {
					email: email,
					password: password,
					grant_type: 'password'
				}
			});
			console.log(res);
			saveAuthToken(res.data.token);
			resolve();
		} catch (error) {
			reject(error);
		}
	});
}

// Registrate function
export async function registrate(email, password) {
	try {
		await axios.post(URL + '/register', {
			email: email,
			password: password
		});
	} catch (error) {
		console.log(error);
	}
}

// Save token
export function saveAuthToken(token) {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	localStorage.setItem(AUTH_TOKEN_KEY, token);
}

// Logout function
export function logout() {
	axios.defaults.headers.common.Authorization = '';
	localStorage.removeItem(AUTH_TOKEN_KEY);
}

// Get expiration date
export function getTokenExpDate(encodedToken) {
	const decodedToken = jwt(encodedToken);
	if (!decodedToken.exp) {
		return null;
	}
	const date = new Date(0);
	date.setUTCSeconds(decodedToken.exp);
	return date;
}

// Check expiration date
export function isTokenExpired(token) {
	const expDate = getTokenExpDate(token);
	return expDate < new Date();
}

// Check if user is login
export function isLoggedIn() {
	const authToken = localStorage.getItem(AUTH_TOKEN_KEY);

	return !!authToken && !isTokenExpired(authToken);
}

// Get rol
export function checkIsAdmin() {
	const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
	const decodedToken = jwt(authToken);

	return !!decodedToken.isAdmin;
}
