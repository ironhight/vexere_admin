import _ from "lodash"

const initialState = {
    isAuthenticated: false,
    profile: {
    }
}
/**
 * return: isAuthenticated: false if no have data from decode token
 * profile: data after decode token
 */
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