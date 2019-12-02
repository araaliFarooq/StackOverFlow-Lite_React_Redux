import actionTypes from '../action-types';
import { toast } from 'react-toastify';
import configurations from '../../../config/index';

const { API_URL } = configurations;

export const fetchQuestionFail = (data) => ({
  type: actionTypes.FETCHQUESTIONFAILURE,
  payload: data
});

export const fetchQuestionSucess = (response) => ({
  type: actionTypes.FETCHQUESTIONSUCCESS,
  payload: response
});

export const fetchAllQuestions = () => {
  return function(dispatch) {
    fetch(`${API_URL}/questions`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
      CORS: 'no-cors'
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('response', response);
        dispatch(fetchQuestionSucess(response));
        if (response) {
          //   toast.success(response.message, {
          //     position: 'top-center',
          //     autoClose: 9000,
          //     hideProgressBar: false,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true
          //   });
          //   document.getElementById('reg-form').reset();
          // document.getElementById('alert').style.display = 'block';
          // document.getElementById('alert').innerHTML =
          //   'An activation link has been sent to your email.Follow the link to activate your account';
          // document.getElementById('reg_div').style.display = 'none';
        } else {
          dispatch(fetchQuestionFail(response.message));
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
      .catch((response) => dispatch(fetchQuestionFail(response.errors)));
  };
};
