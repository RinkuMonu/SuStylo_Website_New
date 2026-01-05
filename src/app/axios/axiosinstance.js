import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api",

  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "https://api.sustylo.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token if present
axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (_) {
      // localStorage not available (SSR) - ignore
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Unified error logging
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const serverMsg = error?.response?.data?.message;

    if (status === 401) {
      console.warn("Unauthorized - Token expired or invalid");
    } else if (status === 500) {
      console.error("Server Error:", serverMsg || "Internal Server Error");
    } else if (error?.request) {
      console.error("No response from server:", error.request);
    } else {
      console.error("Request setup error:", error?.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;