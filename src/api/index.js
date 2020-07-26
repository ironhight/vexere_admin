import axios from "axios";
let baseURL;

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

switch (process.env.NODE_ENV) {
  case "development":
    baseURL = "http://localhost:6789/api";
    break;

  case "production":
    baseURL = "https://fs07-vexere-nam.herokuapp.com/api";
    break;

  default:
    break;
}

const api = axios.create({ baseURL });

export default api;
