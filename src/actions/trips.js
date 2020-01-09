import api from '../api'
import * as types from "../constants/actionTypes"

export const createTrip = (data) => (dispatch) => {
    api.post("trips", data)
        .then(res => {
            dispatch({
                type: types.CREATE_TRIP,
                payload: res.data
            })
            Promise.resolve(res.data)
        })
        .catch(console.log())
}

export const getTrips = () => (dispatch) => {
    api.get("/trips")
        .then(res => {
            dispatch({
                type: types.GET_TRIPS,
                payload: res.data
            })
        })
        .catch(console.log())
}


export const updateTrip = (data) => (dispatch) => {
    return api.put(`/trips/${data._id}`, data)
        .then(res => {
            dispatch({
                type: types.UPDATE_TRIP,
                payload: res.data
            })
            Promise.resolve(res.data)
        })
        .catch(console.log())
}

export const deleteTrip = (_id) => (dispatch) => {
    api.delete(`/trips/${_id}`)
        .then(res => {
            dispatch({
                type: types.DELETE_TRIP,
                payload: res.data
            })
        })
}