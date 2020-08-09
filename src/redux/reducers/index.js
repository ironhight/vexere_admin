import { combineReducers } from "redux";
import auth from "./auth";
import trips from "./trips";
import stations from "./stations";
import users from "./users";
import tickets from "./ticket";

const rootReducer = combineReducers({
  auth,
  trips,
  stations,
  users,
  tickets,
});

export default rootReducer;
