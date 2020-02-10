import { combineReducers } from "redux";
import auth from "./auth";
import trips from "./trips";
import stations from "./stations";
import users from "./users";

const rootReducer = combineReducers({
  auth,
  trips,
  stations,
  users
});

export default rootReducer;
