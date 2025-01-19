import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api-portfolio.dynodhan.xyz", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer token", // Optional, if you need authentication
  },
});

export default apiClient;
