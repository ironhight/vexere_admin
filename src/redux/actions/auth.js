import jwtDecode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import api from "../../api";

export const login = (credentials) => (dispatch) => {
  return api
    .post("/users/login", credentials)
    .then((res) => {
      const { token } = res.data;
      if (res.data.status === 400) {
        return Promise.reject({ message: res.data.message });
      }
      const decode = jwtDecode(token);
      if (decode.userType === "client")
        return Promise.reject({ message: "Bạn không đủ quyền để đăng nhập vào trang này" });

      dispatch(setCurrentUser(decode));

      localStorage.setItem("Authorization", `Bearer ${res.data.token}`);

      setAuthToken(token);
      return Promise.resolve({ message: "Đăng nhập thành công" });
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject({ message: error.message });
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("Authorization");

  setAuthToken();

  dispatch(setCurrentUser({}));
};

export const setCurrentUser = (data) => {
  return {
    type: "SET_CURRENT_USER",
    payload: data,
  };
};
