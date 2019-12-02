import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postQuestion } from '../../actions/questions/PostQuestion';
import QuestionForm from '../questions/QuestionForm';
import Header from '../common/Header';
import Footer from '../common/Footer';

class PostQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      question: '',
      tags: [],
      isLoginPending: false,
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
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      title: this.state.title,
      qstnbody: this.state.question,
      tags: this.state.tags.split(',')
    };
    console.log('obj->', userData);
    this.props.postQuestion(userData);
  };

  render() {
    const { errors } = this.state;
    const none = 'none';
    const block = 'block';

    // console.log('state-->>', this.state);
    return (
      <div id="container_main">
        <Header userId={'farooq'} />
        <section className="contain">
          <div className="quest_box">
            <div id="reminder" className="reminder">
              <p>Ask anything you want to know!.</p>
            </div>
            <div className="former">
              <QuestionForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                isLoginPending={this.state.isLoginPending}
                errors={errors}
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

PostQuestion.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  errors: PropTypes.object,
  isLoginPending: PropTypes.bool,
  isAuthenticated: PropTypes.bool
};

PostQuestion.defaultProps = {
  isAuthenticated: false,
  isLoginPending: false
};

const mapStateToProps = (state) => ({
  errors: state.signUpReducer.errors,
  isAuthenticated: state.isAuthenticated
});

// const mapDispatchToprops = (dispatch) => ({
//   loginUser: (username, password) => dispatch(LoginUser(username, password))
// });

export default connect(mapStateToProps, { postQuestion })(PostQuestion);
