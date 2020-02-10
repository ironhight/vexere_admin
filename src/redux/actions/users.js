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

// export const deleteUser = id => dispatch => {
//   api
//     .get("/users", id)
//     .then(res => {
//       dispatch({
//         type: "DELETE_USER",
//         payload: res.data
//       });
//     })
//     .catch(console.log());
// };

// export const editUser = ()
