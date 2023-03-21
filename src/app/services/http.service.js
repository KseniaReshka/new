import axios from "axios";
import logger from "./log.service";
import {toast} from "react-toastify"
import config from "../config.json"

axios.defaults.baseURL= config.apiEndpoint

axios.interceptors.response.use(
  (res)=>res,
  function (error){
    const exectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!exectedErrors) {
   logger.log(error)
   toast.info("XZ")
  }
  return Promise.reject(error)
}
)
const httpService={
  get:axios.get,
  post:axios.post,
  put:axios.put,
  drlete:axios.delete,
}
export default httpService