import axios from 'axios';
import jwt from 'jwt-decode';

const ENDPOINT = `http://127.0.0.1:3050/auth`;
const AUTH_TOKEN_KEY = 'authToken';

// Login function
export function login(user, password) {
	return new Promise(async (resolve, reject) => {
		try {
			let res = await axios({
				url: ENDPOINT,
				method: 'POST',
				data: {
					user: user,
					password: password,
					grant_type: 'password'
				}
			});
			console.log(res);
			setAuthToken(res.data.token);
			resolve();
		} catch (error) {
			reject(error);
		}
	});
}

// Save token function
export function setAuthToken(token) {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	localStorage.setItem(AUTH_TOKEN_KEY, token);
}

// Logout function
export function clearLogin() {
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
