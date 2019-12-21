const initialState = {
    isAuthenticated: false,
    profile: {
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                isAuthenticated: true,
                profile: action.payload
            }
        default: break;
    }
    return state;
}

export default authReducer