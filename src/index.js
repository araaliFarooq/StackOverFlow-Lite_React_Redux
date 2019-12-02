import React from 'react';
import { render } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/stack.css';
import './assets/css/answer.css';
import { Provider } from 'react-redux';
import store from '../src/js/store';
import App from './App';
// if you're in create-react-app import the files as:
// import store from "./js/store/index";
// import App from "./js/components/App.jsx";
render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>,
  // The target element might be either root or app,
  // depending on your development environment
  // document.getElementById("app")
  document.getElementById('root')
);
