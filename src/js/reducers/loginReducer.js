import actionTypes from '../actions/action-types';

const initialState = {
  user: {},
  isLoginPending: false,
  loginError: null,
  isAuthenticated: false
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGINSUCESS:
      return {
        ...state,
        user: action.payload,
        isLoginPending: true,
        isAuthenticated: true
      };
    case actionTypes.LOGINFAIL:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
};
export default loginReducer;
