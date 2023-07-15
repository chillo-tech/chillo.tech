import axios from "axios"
import {axiosInstance} from "./axios-instance"

const deleteItem = (endpoint: string) => {
	return axios.delete(endpoint)
}

const add = (endpoint: string, data: any) => {
    const result = axios.post(
      `${endpoint}`,
      data,
      {
        headers: {"Content-Type": "application/json"}
      }
    )
    return result;
}

const patch = (endpoint: string, data: any) => {
	return axios.patch(
		endpoint,
		data,
		{
			headers: {"Content-Type": "application/json"}
		}
	)
}

const search = (endpoint: string) => {
  console.log('====================================');
  console.log(endpoint);
  console.log('====================================');
	return axios.get(endpoint)
}

export {add, search, patch, deleteItem}
