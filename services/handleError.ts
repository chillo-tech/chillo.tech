import axios, { AxiosError } from "axios";

function handleError(error: any) {
  const axiosError = error as Error | AxiosError;
  if(axios.isAxiosError(axiosError)){
    const {status, response} = error;

    if(status === 401 || (response && response.status && response.status === 401)) {
      window.location.href= '/auth/signin';
    }
  }
}


export {handleError}