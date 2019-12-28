import jwtDecode from 'jwt-decode'
import setAuthToken from "../utils/setAuthToken";
import api from '../api/index'

export const login = (credentials) => (dispatch) => {
    return api.post("/users/login", credentials)
        .then(res => {
            const { token } = res.data
            const decode = jwtDecode(token)
            if (decode.userType === "client")
                return Promise.reject({ message: "Đăng nhập thất bại" })

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

    dispatch(setCurrentUser({}))
}

export const setCurrentUser = (data) => {
    return {
        type: "SET_CURRENT_USER",
        payload: data
    }
}

