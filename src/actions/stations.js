import api from '../api'

export const createStation = (data) => (dispatch) => {
    api.post("/stations", data)
        .then(res => {
            dispatch({
                type: "CREATE_STATION",
                payload: res.data
            })
        })
        .catch(console.log())
}

export const getStations = () => (dispatch) => {
    api.get("/stations")
        .then(res => {
            dispatch({
                type: "GET_STATIONS",
                payload: res.data
            })
        })
        .catch(console.log())
}

export const updateStation = (data) => (dispatch) => {
    api.put("/stations", data)
        .then(res => {
            dispatch({
                type: "UPDATE_STATION",
                payload: res.data
            })
        })
        .catch(console.log())
}

export const deleteStation = (data) => (dispatch) => {
    api.delete("stations", data)
        .then(res => {
            dispatch({
                type: "DELETE_STATION",
                payload: res.data
            })
        })
        .catch(console.log())
}