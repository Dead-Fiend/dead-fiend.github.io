import axios from "axios";

const base_url = `http://localhost:${process.env.PORT}/`
const $host = axios.create({
    //baseURL: process.env.REACT_APP_API_URL
    baseURL: base_url
})

const $authHost = axios.create({
    baseURL: base_url
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}