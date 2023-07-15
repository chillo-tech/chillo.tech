import axios from 'axios';
import {setupInterceptorsTo} from "./axios-interceptors";
const instance = axios.create();
//instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.BACKOFFICE_API_TOKEN}`;
instance.defaults.headers.common['Accept'] = 'application/json';
const axiosInstance = setupInterceptorsTo(instance);

export {axiosInstance};
