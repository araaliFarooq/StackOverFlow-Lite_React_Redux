import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Register from './js/components/auth/Register/Register';
import Login from './js/components/auth/Login/Login';
import PostQuestion from './js/components/questions/PostQuestion';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Route exact path="/" component={} /> */}
          <Route path="/users/login" component={Login} />
          <Route path="/users/register" component={Register} />
          <Route path="/questions" component={PostQuestion} />
        </div>
      </Router>
    );
  }
}
export default App;
