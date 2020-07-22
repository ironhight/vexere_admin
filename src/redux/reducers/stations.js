import * as types from '../constants/actionTypes';

const initialState = {
  results: [],
};

const stationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_STATION:
      state.results.push(action.payload);
      return { ...state };

    case types.GET_STATIONS:
      return action.payload;

    case types.UPDATE_STATION:
      const station = action.payload;
      const index = state.results.findIndex((st) => st._id === station._id);
      state.results[index] = station;
      return { ...state };

    case types.DELETE_STATION:
      const newState = state.results.filter((st) => st._id !== action.payload);

      return { results: newState };

    case types.GET_PAGINATION_STATIONS:
      return action.payload;

    default:
      return state;
  }
};

export default stationsReducer;
