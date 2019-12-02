import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Register from './js/components/auth/Register/Register';
import Login from './js/components/auth/Login/Login';
import PostQuestion from './js/components/questions/PostQuestion';
import FetchQuestions from './js/components/questions/AllQuestions';

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
          <Route path="/question" component={PostQuestion} />
          <Route path="/questions" component={FetchQuestions} />
        </div>
      </Router>
    );
  }
}
export default App;
