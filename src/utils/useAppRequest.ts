import axios, {type AxiosRequestConfig } from "axios";

type RequestConfig = AxiosRequestConfig; // 包含 params, responseType, headers 

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    timeout: (Number(import.meta.env.VITE_TIMEOUT) || 30) * 60 * 1000,
});

// 请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
    response => { 
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

const useAppRequest = {
    onGet: (url: string, config?: RequestConfig) => {
        return axiosInstance.get(url, config);
    },
    onPost: (url: string, data: any, config?: RequestConfig) => {
        return axiosInstance.post(url, data, config); 
    },
    onPut: (url: string, data: any, config?: RequestConfig) => {
        return axiosInstance.put(url, data, config);
    },
    onDelete: (url: string, config?: RequestConfig) => {
        return axiosInstance.delete(url, config);
    },
};

export default useAppRequest;