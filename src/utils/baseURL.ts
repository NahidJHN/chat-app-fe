import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://localhost:5050/api/v1",
  headers: {
    "Content-type": "application/json",
    ...(localStorage.getItem("chat-app-token") && {
      Authorization: `Bearer ${localStorage.getItem("chat-app-token")}`,
    }),
  },
});

export default baseUrl;
