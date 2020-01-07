import { combineReducers } from "redux"
import auth from "./auth"
import trips from "./trips"
import stations from "./stations"

const rootReducer = combineReducers({
    auth, trips, stations
})

export default rootReducer