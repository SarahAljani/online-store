import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const auth = token ? `Bearer ${token}` : "";

  config.headers["Authorization"] = auth;
  return Promise.resolve(config);
});
