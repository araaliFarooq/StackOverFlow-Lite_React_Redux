import actionTypes from '../action-types';
import { toast } from 'react-toastify';

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
    fetch('http://127.0.0.1:8000/api/v1/users/login', {
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

        if (response.user) {
          dispatch(loginSuccess(response.user));
          toast.success(response.message, {
            position: 'top-center',
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });

          document.getElementById('reg-form').reset();
          // document.getElementById('alert').style.display = 'block';
          // document.getElementById('alert').innerHTML =
          //   'An activation link has been sent to your email.Follow the link to activate your account';
          // document.getElementById('reg_div').style.display = 'none';
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
