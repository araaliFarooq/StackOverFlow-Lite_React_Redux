import actionTypes from '../actions/action-types';

const initialState = {
  question: {},
  isLoginPending: false,
  errors: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POSTQUESTIONSUCCESS:
      return { ...state, question: action.payload };
    case actionTypes.POSTQUESTIONFAILURE:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
