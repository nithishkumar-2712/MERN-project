
import Axios from "axios";
const axios = Axios.create({
  baseURL: "https://nithishkumar-2712.github.io/:3000", // ✅ Backend server URL
  withCredentials: true,            // ✅ Allow sending cookies (like JWT)
});

export default axios;
