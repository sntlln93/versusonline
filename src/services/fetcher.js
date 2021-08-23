import axios from "axios";

const fetcher = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default fetcher;
