import axios from "axios"

const api = axios.create({
    baseURL: "https:localhost:8080/autenticar"
})

export default api
