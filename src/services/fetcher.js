import axios from "axios";

const headers = localStorage.getItem("user")
  ? {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("user"))["token"]
      }`,
    }
  : {
      "Content-Type": "application/json",
    };

const fetcher = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: headers,
});

export default fetcher;
