import React from 'react';
import TextInputField from '../../common/TextInputField';
// import Alert from '../../Alert/Alert';

const LoginForm = ({ onSubmit, onChange, isLoginPending, errors }) => (
  <form name="LoginForm" onSubmit={onSubmit} id="login-form">
    <TextInputField
      name="username"
      placeholder="Username"
      type="text"
      classname="form-control form-control-lg"
      required="Email can't be empty"
      onChange={onChange}
      error={errors.email && errors.email[0]}
    />
    <TextInputField
      name="password"
      placeholder="Password"
      type="password"
      classname="form-control form-control-lg"
      required="Password can't be empty"
      onChange={onChange}
      error={errors.password && errors.password[0]}
    />
    <div class="input-box">
      <input
        type="submit"
        className="btn btn-block mt-4 btn-login"
        value="Sign in"
      />
    </div>
    {isLoginPending && (
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )}
    {/* {loginError && <Alert className="alert alert-danger">{loginError}</Alert>} */}
  </form>
);

export default LoginForm;
