import api from "../api"

// export const createUser = (data) => (dispatch) => {
//     api.post("/users", data)
//     .then(res => {
//         dispatch({
//             action: "CREATE_USER",
//             payload: res.data
//         })
//     })
//     .catch(console.log())
// }

export const getUsers = () => (dispatch) => {
    api.get("/users")
        .then(res => {
            dispatch({
                action: "GET_USERS",
                payload: res.data
            })
        })
        .catch(console.log())
}

export const deleteUser = (data) => (dispatch) => {
    api.get("/users", data)
        .then(res => {
            dispatch({
                action: "DELETE_USER",
                payload: res.data
            })
        })
        .catch(console.log())
}