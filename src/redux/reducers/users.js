import * as types from "../constants/actionTypes";
import _ from "lodash";

const initialState = {
  isLoading: true,
  user: {
    _id: "",
    email: "",
    dayOfBirth: null,
    phoneNumber: "",
    fullName: ""
  }
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILE_ADMIN:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };

    case types.UPDATE_PROFILE_ADMIN:
      let dataPersonal = { ...state };

      const keyArr = Object.keys(action.payload);

      _.forEach(keyArr, function(value) {
        dataPersonal.user[value] = action.payload[value];
      });
      return dataPersonal;

    case types.UPDATE_AVATAR:
      let avatar = { ...state };
      avatar.user.avatar = action.payload.avatar;
      return avatar;

    default:
      return state;
  }
};

export default usersReducer;
