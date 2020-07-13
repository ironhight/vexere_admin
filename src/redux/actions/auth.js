import jwtDecode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import api from '../../api';
/**
 * return :
 * dispatch: trigger state thay doi
 * luu token vao localStorage
 * bo token vao header
 */
export const login = (credentials) => (dispatch) => {
  return api
    .post('/users/login', credentials)
    .then((res) => {
      const { token } = res.data;

      const decode = jwtDecode(token);
      if (decode.userType === 'client')
        return Promise.reject({ message: 'Đăng nhập thất bại' });

      dispatch(setCurrentUser(decode));

      localStorage.setItem('Authorization', `Bearer ${res.data.token}`);

      setAuthToken(token);
      return Promise.resolve({ message: 'Đăng nhập thành công' });
    })
    .catch(() =>
      Promise.reject({
        message: 'Đăng nhập thất bại',
      })
    );
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('Authorization');

  setAuthToken();

  dispatch(setCurrentUser({}));
};

export const setCurrentUser = (data) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: data,
  };
};
