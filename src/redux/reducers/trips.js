const initialState = [];
const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRIPS":
      return action.payload;

    case "CREATE_TRIP":
      return [...state, action.payload];

    case "UPDATE_TRIP":
      const index = state.findIndex((st) => st._id === action.payload._id);
      state[index] = action.payload;
      return [...state];

    case "DELETE_TRIP":
      return state.filter((tr) => tr._id !== action.payload);
    default:
      return state;
  }
};

export default tripsReducer;
