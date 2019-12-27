import { combineReducers } from "redux"
import auth from "./auth"
import authReducer from "./trips"
const rootReducer = combineReducers({
    auth, authReducer
})

export default rootReducer