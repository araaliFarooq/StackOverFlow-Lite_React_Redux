import React from 'react';
import TextInputField from '../common/TextInputField';
import TextAreaField from '../common/TextAreaField';
// import Alert from '../../Alert/Alert';

const QuestionForm = ({ onSubmit, onChange, isLoginPending, errors }) => (
  <form onSubmit={onSubmit}>
    <TextInputField
      name="title"
      placeholder="Title"
      type="text"
      classname="form-control form-control-lg"
      required="Title can't be empty"
      onChange={onChange}
      error={errors.email && errors.email[0]}
    />
    <TextAreaField
      name="question"
      placeholder="What's on your mind?"
      type="text"
      classname="form-control form-control-lg"
      required="Question can't be empty"
      onChange={onChange}
      error={errors.email && errors.email[0]}
    />
    <TextInputField
      name="tags"
      placeholder="Use , to seperate multiple tags"
      type="text"
      classname="form-control form-control-lg"
      required=""
      onChange={onChange}
      error={errors.password && errors.password[0]}
    />
    <div class="input-box">
      <input
        type="submit"
        className="btn btn-block mt-4 btn-login"
        value="Post"
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

export default QuestionForm;
