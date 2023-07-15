import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";


const onRequest = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => { 
  let {headers = {}}= config;
  let authorization: any = {'Authorization': headers['Authorization']}
  
  const {url = ''} = config;
  const urlToCall = url.startsWith('/api/backoffice') ? url.replaceAll('/api/backoffice', '/items') : url.replaceAll('/api/backend', '/backend');
  authorization = url.startsWith('/api/backoffice') ?  { 'Authorization':`Bearer ${process.env.BACKOFFICE_API_TOKEN}`} : authorization;

  const credentials = url.startsWith('/api/backoffice') ?  {} : { 'service-id': `${process.env.SERVICE_ID}`, 'service-key': `${process.env.SERVICE_KEY}`};
  const baseURL = url.startsWith('/api/backoffice') ? process.env.BACKOFFICE_API : process.env.API_URL;

  return {
      ...config,
      baseURL,
      url: urlToCall,
      headers: {
        ...config.headers,
        ...(authorization),
        ...(credentials)
      }
     
    };
}
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}
const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
}

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest as any, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}