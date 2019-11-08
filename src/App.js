import React from 'react';
import '../src/assets/css/answer.css';
import '../src/assets/css/stack.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './js/components/auth/Register/Register';
import Login from './js/components/auth/Login/Login';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <ToastContainer />
      {/* <Register /> */}
      <Login />
    </div>
  );
}

export default App;
