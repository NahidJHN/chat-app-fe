"use client";
import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://localhost:5050/api/v1",
  headers: {
    "Content-type": "application/json",
    ...(typeof window !== undefined &&
      window?.localStorage.getItem("chat-app-token") && {
        Authorization: `Bearer ${localStorage.getItem("chat-app-token")}`,
      }),
  },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    window.alert(error.response.data.message);
    return error;
  }
);

export default baseUrl;
