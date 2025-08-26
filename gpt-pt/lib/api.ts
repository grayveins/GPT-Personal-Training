import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE || 'http://127.0.0.1:3000',
  timeout: 15000,
});
