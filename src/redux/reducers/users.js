import * as types from "../constants/actionTypes";

const initialState = {
  user: {}
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILE_ADMIN:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;
