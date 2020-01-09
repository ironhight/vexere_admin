import api from '../api'
import * as types from "../constants/actionTypes"

export const createStation = (data) => (dispatch) => {
    return api.post("/stations", data)
        .then(res => {
            dispatch({
                type: types.CREATE_STATION,
                payload: res.data
            })
            Promise.resolve(res.data)
        })
        .catch(err => Promise.reject(err))
}

export const getStations = () => (dispatch) => {
    api.get("/stations")
        .then(res => {
            dispatch({
                type: types.GET_STATIONS,
                payload: res.data
            })
        })
        .catch(console.log())
}

export const updateStation = (data) => (dispatch) => {
    return api.put(`/stations/${data._id}`, data)
        .then(res => {
            dispatch({
                type: types.UPDATE_STATION,
                payload: res.data
            })
            Promise.resolve(res.data)
        })
        .catch(err => Promise.reject(err))
}

export const deleteStation = (_id) => (dispatch) => {
    api.delete(`/stations/${_id}`)
        .then(res => {
            dispatch({
                type: types.DELETE_STATION,
                payload: res.data
            })
        })
        .catch(console.log())
}