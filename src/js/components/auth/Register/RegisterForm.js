import React from 'react';
import TextInputField from '../../common/TextInputField';

const registerForm = ({ onSubmit, onChange, errors, disabled }) => (
  <form onSubmit={onSubmit} id="reg-form">
    <TextInputField
      name="username"
      placeholder="Username"
      type="text"
      classname="form-control form-control-lg"
      required="Username can't be empty"
      onChange={onChange}
      error={errors.username && errors.username[0]}
    />
    <TextInputField
      name="email"
      placeholder="Email"
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
    <TextInputField
      name="confirmpassword"
      placeholder="Confirm Password"
      type="password"
      classname="form-control form-control-lg"
      required="Password can't be empty"
      onChange={onChange}
      error={errors.password && errors.password[0]}
    />
    <div className="alert alert-danger" id="alert-2" role="alert">
      passwords don't match
    </div>
    <div class="input-box">
      <input
        type="submit"
        className=""
        value="Register"
        id="submit_btn"
        disabled={disabled}
      />
    </div>
  </form>
);
export default registerForm;
