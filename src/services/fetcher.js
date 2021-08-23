import axios from "axios";

const fetcher = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("user")
      ? `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
      : "",
  },
});

export default fetcher;
