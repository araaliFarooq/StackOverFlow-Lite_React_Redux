import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoginUser } from '../../../actions/auth/Login';
import LoginForm from '../Login/LoginForm';
import '../../../../assets/css/answer.css';
import '../../../../assets/css/stack.css';
import logo from '../../../../assets/images/logo.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  onChange = (e) => {
    if (e.target.name === 'confirmpassword') {
      const { password } = this.state;
      if (password !== e.target.value) {
        this.setState({ disabled: true });
        document.getElementById('alert-2').style.display = 'block';
      } else {
        this.setState({ disabled: false });
        document.getElementById('alert-2').style.display = 'none';
      }
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.LoginUser(userData);
    console.log('obj->', userData);
  };

  render() {
    const { errors } = this.state;
    const none = 'none';
    const block = 'block';

    console.log('state-->>', this.state);
    return (
      <div className="container_main">
        <div className="centercont">
          <div className="signup_box">
            <img src={logo} alt="" />
            <div className="introduction">
              <p>
                Create an account and access all types of answers. <br />
                If you have an account then <br />
                <a href="loginpage.html">Login here</a>.
              </p>
            </div>
            <div className="form" action="homepage.html">
              <LoginForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                disabled={this.state.disabled}
                errors={errors}
              />
              <p></p>
              <p>
                <small>
                  By signing up, you agree to the
                  <a href="#">Terms and Conditions</a> here.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  errors: PropTypes.object,
  signUp: PropTypes.func,
  isAuthenticated: PropTypes.bool
};

Login.defaultProps = {
  isAuthenticated: false
};

const mapStateToProps = (state) => ({
  errors: state.signUpReducer.errors,
  isAuthenticated: state.isAuthenticated
});

// const mapDispatchToprops = (dispatch) => ({
//   loginUser: (username, password) => dispatch(LoginUser(username, password))
// });

export default connect(
  mapStateToProps,
  { LoginUser }
)(Login);
