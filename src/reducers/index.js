import { combineReducers } from "redux"
import auth from "./auth"
import trip from "./trips"
const rootReducer = combineReducers({
    auth, trip
})

export default rootReducer