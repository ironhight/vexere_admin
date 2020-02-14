import api from "../../api";
import swal from "sweetalert";
import * as types from "../constants/actionTypes";

export const getProfileAdmin = userID => dispatch => {
  return api
    .get(`/users/${userID}`)
    .then(res => {
      dispatch({
        type: types.GET_PROFILE_ADMIN,
        payload: res.data
      });
    })
    .catch(console.log());
};

export const updateAdmin = (
  userID,
  value,
  callbackThen,
  callbackCatch
) => dispatch => {
  return api
    .put(`users/${userID}`, value)
    .then(res => {
      dispatch({
        type: types.UPDATE_PROFILE_ADMIN,
        payload: res.data
      });
      Promise.resolve(res.data);
      swal({
        text: "Update successfully",
        icon: "success",
        buttons: false,
        timer: 1500
      });
      callbackThen();
    })
    .catch(err => callbackCatch(err));
};

export const updatePassword = (
  userID,
  value,
  callbackThen,
  callbackReset,
  callbackCatch
) => dispatch => {
  return api
    .put(`users/change-password/${userID}`, value)
    .then(res => {
      dispatch({ type: types.UPDATE_PASSWORD_ADMIN, payload: res.data });
      Promise.resolve(res.data);
      swal({
        text: "Update successfully",
        icon: "success",
        buttons: false,
        timer: 1500
      });
      callbackThen();
      callbackReset();
    })
    .catch(err => callbackCatch(err));
};
