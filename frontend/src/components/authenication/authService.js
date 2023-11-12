// authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your server API URL

const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      return token;
    } catch (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem('token');
  },
  isAuthenticated: () => {
    return localStorage.getItem('token') !== null;
  },
};

export default authService;
