import axios, { AxiosError, AxiosRequestConfig } from "axios";
const axiosInstance = axios.create();
//instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.BACKOFFICE_API_TOKEN}`;
axiosInstance.defaults.headers.common["Accept"] = "application/json";

const onRequest = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const { url = "" } = config;
  const urlToCall = url.replaceAll("/api/backend", "/api/v1");

  const authorization = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_TOKEN}`,
  };

  return {
    ...config,
    url: urlToCall,
    headers: {
      ...config.headers,
      ...authorization,
    },
  };
};
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};
axiosInstance.interceptors.request.use(onRequest as any, onRequestError);
export { axiosInstance };
