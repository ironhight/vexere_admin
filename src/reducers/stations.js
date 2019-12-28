const initialState = []
const stationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_STATION":
            return [...state, action.payload]

        case "GET_STATIONS":
            return action.payload

        case "UPDATE_STATION":
            return [...state, action.payload]

        case "DELETE_STATION":
            return [...state, action.payload]

        default: return state
    }
}

export default stationsReducer