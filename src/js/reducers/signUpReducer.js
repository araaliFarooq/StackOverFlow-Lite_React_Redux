import actionTypes from '../actions/action-types';

const initialState = {
  user: {},
  errors: {}
};
// function rootReducer(state = initialState, action) {
//   if (action.type === actionTypes.ADD_ARTICLE) {
//     return Object.assign({}, state, {
//       articles: state.articles.concat(action.payload)
//     });
//   }
//   if (action.type === actionTypes.DATA_LOADED) {
//     return Object.assign({}, state, {
//       remoteArticles: state.remoteArticles.concat(action.payload)
//     });
//   }
//   return state;
// }
// export default rootReducer;

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUPSUCCESS:
      return { ...state, user: action.payload };
    case actionTypes.SIGNUPFAIL:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
