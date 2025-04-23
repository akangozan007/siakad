// contoh src/api/auth.js
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL;

export const login = (credentials) => axios.post(`${BASE_URL}/login`, credentials);
export const register = (data) => axios.post(`${BASE_URL}/register`, data);
