import axios from "axios";
const instanse = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    }
})
export default instanse;