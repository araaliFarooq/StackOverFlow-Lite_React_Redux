import actionTypes from '../actions/action-types';

const initialState = {
  questions: [],
  isLoginPending: false,
  errors: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHQUESTIONSUCCESS:
      console.log('-->>', action.payload);

      return { ...state, questions: action.payload };
    case actionTypes.FETCHQUESTIONFAILURE:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
