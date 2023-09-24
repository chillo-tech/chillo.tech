import axios from "axios";
const sendData = (endpoint: string, data: any) => {
  return axios.post(
    endpoint, 
    data, 
    {
      headers: {"Content-Type": "application/json"}
    }
  )
}
const patchData = (endpoint: string, data: any) => {
  return axios.patch(
    endpoint, 
    data, 
    {
      headers: {"Content-Type": "application/json"}
    }
  )
}
export {sendData, patchData};