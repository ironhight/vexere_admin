const initialState = []
const tripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TRIPS":
            return action.payload

        case "CREATE_TRIP":
            return [...state, action.payload]

        case "UPDATE_TRIP":
            return [...state, action.payload]

        case "DELETE_TRIP":
            return [...state, action.payload]

        default: return state;
    }
}

export default tripsReducer