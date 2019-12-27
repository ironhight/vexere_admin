import api from '../api/index'

export const getTrips = () => (dispatch) => {
    api.get("/trips")
        .then(res => {
            // console.log(res.data)
            dispatch({
                type: "GET_TRIPS",
                payload: res.data
            })
        })
        .catch(console.log())
}

export const createTrip = (data) => (dispatch) => {
    api.post("trips", data)
        .then(res => {
            dispatch({
                type: "CREATE_TRIP",
                payload: res.data
            })
        })
}

// export const createTrip = (data) => (dispatch) => {
//     api.
// }