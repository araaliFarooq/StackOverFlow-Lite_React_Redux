import actionTypes from '../action-types';
import { toast } from 'react-toastify';

export const signupFail = (data) => ({
  type: actionTypes.SIGNUPFAIL,
  payload: data
});

export const signupSuccess = (response) => ({
  type: actionTypes.SIGNUPSUCCESS,
  payload: response
});

export const registerUser = (data) => {
  // const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  return function(dispatch) {
    fetch('http://127.0.0.1:8000/api/v1/users/register', {
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
          dispatch(signupSuccess(response.user));
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
          dispatch(signupFail(response.errors));
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
      .catch((response) => dispatch(signupFail(response.errors)));
  };
};
