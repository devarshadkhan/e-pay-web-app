import axios from "axios"


const Axiosintance = axios.create({
  baseURL:"https://5790-180-151-243-128.ngrok-free.app"
})
Axiosintance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
Axiosintance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default Axiosintance