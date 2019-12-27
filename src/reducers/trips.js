const initialState = []
const tripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TRIPS": return action.payload
        default: return state;
    }
}

export default tripsReducer