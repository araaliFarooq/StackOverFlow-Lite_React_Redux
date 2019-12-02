import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import PostQuestionReducer from './PostQuestionReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  signUpReducer,
  PostQuestionReducer,
  loginReducer
});
