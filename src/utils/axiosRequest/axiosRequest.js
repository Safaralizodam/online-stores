import axios from 'axios';

export const axiosList = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

export const apiUrl =  import.meta.env.VITE_APP_API_URL_IMAGES

export const axiosLogin = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

axiosList.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('token');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

