import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Question from './Question';
import { fetchAllQuestions } from '../../actions/questions/FetchAllQuestions';

class FetchQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      isLoading: true,
      errors: {}
    };
  }

  componentDidMount() {
    this.props.fetchAllQuestions();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    if (Object.keys(nextProps.errors).length) {
      this.setState({ errors: nextProps.errors });
    } else {
      this.setState({
        questions: nextProps.questions,
        isLoading: false
      });
    }
  }

  render() {
    console.log('qstn-->>', this.state.questions);
    console.log('qstnPROPS-->>', this.props);
    return (
      <main id="container">
        <Header userId={'farooq'} />
        <section className="containa">
          <div className="question">
            {this.state.isLoading ? (
              <Loader
                type="CradleLoader"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
              />
            ) : (
              this.state.questions.map((question) => (
                <Question
                  questionObject={question}
                  key={question.id}
                  display={'block'}
                />
              ))
            )}
          </div>
        </section>
        <Footer />
      </main>
    );
  }
}

FetchQuestions.propTypes = {
  errors: PropTypes.object,
  questions: PropTypes.array,
  isLoading: PropTypes.bool
};

FetchQuestions.defaultProps = {
  isLoading: true
};

const mapStateToProps = (state) => ({
  errors: state.FetchAllQuestionsReducer.errors,
  questions: state.FetchAllQuestionsReducer.questions
});

const mapDispatchToprops = (dispatch) => ({
  fetchAllQuestions: () => dispatch(fetchAllQuestions())
});

export default connect(mapStateToProps, mapDispatchToprops)(FetchQuestions);
