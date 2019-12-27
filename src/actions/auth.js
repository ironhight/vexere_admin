import axios from 'axios'
import jwtDecode from 'jwt-decode'
import setAuthToken from "../utils/setAuthToken";
import { createBrowserHistory } from 'history';
import api from '../api/index'

const history = createBrowserHistory();

export const login = (credentials) => (dispatch) => {
    return api.post("/users/login", credentials)
        .then(res => {
            const { token } = res.data
            const decode = jwtDecode(token)
            dispatch(setCurrentUser(decode))

            localStorage.setItem("token", res.data.token)

            setAuthToken(token)
            return Promise.resolve({ message: "Đăng nhập thành công" })
        })
        .catch(() => Promise.reject({
            message: "Đăng nhập thất bại"
        }))
}


export const logout = () => (dispatch) => {
    localStorage.removeItem("token")

    setAuthToken()

    // history.push('/')
    dispatch(setCurrentUser({}))
}

export const setCurrentUser = (data) => {
    return {
        type: "SET_CURRENT_USER",
        payload: data
    }
}

