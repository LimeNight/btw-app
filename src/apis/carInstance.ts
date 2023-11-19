import axios from "axios"
import { REACT_APP_CAR_API_BASE_URL } from "../constants/enviroment"

const carInstance = axios.create({
    baseURL: REACT_APP_CAR_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

export default carInstance