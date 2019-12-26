import axios from 'axios'
import jwtDecode from 'jwt-decode'
import setAuthToken from "../utils/setAuthToken";

export const login = (credentials) => (dispatch) => {
    return axios
        .post("http://localhost:6789/api/users/login", credentials)
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
    dispatch(setCurrentUser({}))

    setAuthToken()
}

export const setCurrentUser = (data) => {
    return {
        type: "SET_CURRENT_USER",
        payload: data
    }
}