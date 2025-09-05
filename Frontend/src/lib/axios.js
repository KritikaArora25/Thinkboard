import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:5001/api"
    // baseURL: import.meta.env.VITE_API_URL, // ✅ comes from .env
    // withCredentials: true, // optional if you need cookies

    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5001/api",
});

export default api;