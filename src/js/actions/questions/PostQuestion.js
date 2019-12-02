import actionTypes from '../action-types';
import { toast } from 'react-toastify';
import configurations from '../../../config/index';

const { API_URL } = configurations;

export const postQuestionFail = (data) => ({
  type: actionTypes.POSTQUESTIONFAILURE,
  payload: data
});

export const postQuestionSucess = (response) => ({
  type: actionTypes.POSTQUESTIONSUCCESS,
  payload: response
});

const auth_object = localStorage.getItem('auth_details');
const { token } = JSON.parse(auth_object);

export const postQuestion = (data) => {
  return function(dispatch) {
    fetch(`${API_URL}/question`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json'
      },
      CORS: 'no-cors',
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('response', response);

        if (response.success) {
          dispatch(postQuestionSucess(response.user));
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
          dispatch(postQuestionFail(response.message));
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
      .catch((response) => dispatch(postQuestionFail(response.errors)));
  };
};
