import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import PostQuestionReducer from './PostQuestionReducer';
import loginReducer from './loginReducer';
import FetchAllQuestionsReducer from './FetchAllQuestionsReducer';

export default combineReducers({
  signUpReducer,
  PostQuestionReducer,
  loginReducer,
  FetchAllQuestionsReducer
});
