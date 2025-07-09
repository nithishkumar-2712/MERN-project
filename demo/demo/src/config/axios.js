
import Axios from "axios";
const axios = Axios.create({
  baseURL: "http://localhost:3000", // ✅ Backend server URL
  withCredentials: true,            // ✅ Allow sending cookies (like JWT)
});

export default axios;
