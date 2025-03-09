import axios from "axios";
import store from "./store/index";

// Log API URL to confirm it's loaded correctly
console.log("API URL:", import.meta.env.VITE_APP_API_URL);

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

// Add Authorization token if available
instance.interceptors.request.use((config) => {
    if (store.state.token) {
        config.headers['Authorization'] = `Bearer ${store.state.token}`

    }
    return config;
});

// Request and Response Interceptors
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;