import * as types from "../constants/actionTypes";

const initialState = {
  list: [],
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_TICKET:
      state.list = action.payload.list;
      return { ...state };

    case types.DELETE_TICKET:
      const ticket = action.payload.ticket;
      const newList = state.list.filter((list) => list._id !== ticket._id);
      state.list = newList;
      console.log("ticketReducer -> state", state);

      return { ...state };

    default:
      return state;
  }
};
export default ticketReducer;
