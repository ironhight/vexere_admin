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

//get all User
// export const getUsers = () => dispatch => {
//   api
//     .get("/users")
//     .then(res => {
//       dispatch({
//         type: "GET_USERS",
//         payload: res.data
//       });
//     })
//     .catch(console.log());
// };

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
