
import Axios from "axios";
const axios = Axios.create({
  baseURL:import.meta.env.VITE_API_URL, // ✅ Backend server URL
  withCredentials: true,            // ✅ Allow sending cookies (like JWT)
});

export default axios;
