
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.fordcareai.com"
});

export default api;
