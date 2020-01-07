import * as types from "../constants/actionTypes"

const initialState = []

const stationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_STATION:
            return [...state, action.payload]

        case types.GET_STATIONS:
            return action.payload

        case types.UPDATE_STATION:
            const station = action.payload
            const index = state.findIndex(st => st.id === station.id)
            state[index] = station
            return [...state]

        case types.DELETE_STATION:
            return [...state, action.payload]

        default: return state
    }
}

export default stationsReducer