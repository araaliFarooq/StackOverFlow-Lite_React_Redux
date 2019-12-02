import actionTypes from '../action-types';
import { toast } from 'react-toastify';
import configurations from '../../../config/index';

const { API_URL } = configurations;

export const loginFail = (data) => ({
  type: actionTypes.LOGINFAIL,
  payload: data
});

export const loginSuccess = (response) => ({
  type: actionTypes.LOGINSUCESS,
  payload: response
});

export const LoginUser = (data) => {
  // const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  return function(dispatch) {
    fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      CORS: 'no-cors',
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('--->>', response);

        if (response.success) {
          const { token, data } = response;
          const auth_object = { token: token, user: data };
          console.log('auth--->>', auth_object);
          localStorage.setItem('auth_details', JSON.stringify(auth_object));

          dispatch(loginSuccess(data));

          // window.location.href = '/';

          toast.success(response.message, {
            position: 'top-center',
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        } else {
          dispatch(loginFail(response.errors));
          toast.error(response.message, {
            position: 'top-center',
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      })
      .catch((response) => dispatch(loginFail(response.errors)));
  };
};
