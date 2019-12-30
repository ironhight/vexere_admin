import api from '../api'

export const createTrip = (data) => (dispatch) => {
    api.post("trips", data)
        .then(res => {
            dispatch({
                type: "CREATE_TRIP",
                payload: res.data
            })
        })
        .catch(console.log())
}

export const getTrips = () => (dispatch) => {
    api.get("/trips")
        .then(res => {
            dispatch({
                type: "GET_TRIPS",
                payload: res.data
            })
        })
        .catch(console.log())
}


export const updateTrip = (data) => (dispatch) => {
    api.put("/trips", data)
        .then(res => {
            dispatch({
                type: "UPDATE_TRIP",
                payload: res.data
            })
        })
        .catch(console.log())
}

export const deleteTrip = (data) => (dispatch) => {
    api.delete("/trips", data)
        .then(res => {
            dispatch({
                type: "DELETE_TRIP",
                payload: res.data
            })
        })
}