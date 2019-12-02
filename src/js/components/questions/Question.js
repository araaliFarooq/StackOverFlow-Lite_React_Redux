import React from 'react';
import Moment from 'react-moment';
import tagIcon from '../../../assets/images/tag.png';

const Question = ({ questionObject, index, display }) => (
  <div href="location.href='answers.html';" className="quest_card" key={index}>
    <div className="quest-data">
      Asked at
      <a href="#">
        <small>
          <Moment format="DD-MM-YYYY">{questionObject.createdAt}</Moment>
        </small>
      </a>
      by {questionObject.author.username}
    </div>
    <h3 className="quest-title">
      <a href="#">{questionObject.title}</a>
    </h3>
    <p className="quest-content">{questionObject.qstnbody}</p>
    <div className={`quest-foot ${display}`}>
      <button className="button">
        {questionObject.answers.length} Answers
      </button>
      {questionObject.tags.map((tag, index) => (
        <button className="tag" key={index}>
          <img src={tagIcon} alt="" />
          {tag}
        </button>
      ))}
    </div>
  </div>
);

export default Question;
