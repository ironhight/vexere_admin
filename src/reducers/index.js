import { combineReducers } from "redux"
import auth from "./auth"
import trip from "./trips"
import station from "./stations"

const rootReducer = combineReducers({
    auth, trip, station
})

export default rootReducer