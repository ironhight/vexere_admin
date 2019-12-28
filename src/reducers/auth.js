import _ from "lodash"

const initialState = {
    isAuthenticated: false,
    profile: {
    }
}

const authReducer = (state = initialState, action) => { //function parameters
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                isAuthenticated: !_.isEmpty(action.payload),
                profile: action.payload
            }
        default: return state;
    }
}

export default authReducer