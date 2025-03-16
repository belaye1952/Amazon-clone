import axios from "axios";

const axiosInstance = axios.create({
    // local version
    // baseURL: "http://127.0.0.1:5001/clone-8c419/us-central1/api",
    // deployed version
    baseURL:"http://amazon-backend-jqet.onrender.com/"
});

export { axiosInstance };