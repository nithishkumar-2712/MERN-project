
import Axios from "axios";
const axios = Axios.create({
  baseURL:"https://mern-project-t-shirt.onrender.com", // ✅ Backend server URL
  withCredentials: true,            // ✅ Allow sending cookies (like JWT)
});

export default axios;
