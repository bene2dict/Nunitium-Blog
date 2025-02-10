import axios from "axios";
import { isTokenExpired } from "./isTokenExpired";


const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api", 
});


// Request Interceptor to Attach Token
axiosInstance.interceptors.request.use((config) => {

  if (config.skipAuth) {
    return config; 
  }

  const token = localStorage.getItem("token");
  const expired = isTokenExpired(token);

  if(!token || expired) {
    console.log("Invalid token");
    return;
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
