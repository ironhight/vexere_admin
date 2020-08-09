import * as types from "../constants/actionTypes";

const initialState = {
  list: [],
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_TICKET:
      state.list = action.payload.list;
      return { ...state };

    default:
      return state;
  }
};
export default ticketReducer;
