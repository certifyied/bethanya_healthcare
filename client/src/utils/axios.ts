import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL?.trim() || "";

if (!baseURL) {
  console.warn(
    "VITE_API_BASE_URL is not defined. API requests will use the current origin instead."
  );
}

const API = axios.create({
  baseURL,
  withCredentials: true,
});

export default API;