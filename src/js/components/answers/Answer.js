import React from 'react';
import Moment from 'react-moment';

const Answer = ({ props }) => (
  <div className="ansd">
    <p className="answer-content">
      it seems easy because money is there, time is there, babe is there, but
      the main point is whre is this going? Are we serious.
    </p>
    <div className="answer-foot">
      <div className="vote">
        <input
          type="image"
          src="static/images/up.png"
          name="up"
          className="btTxt submit"
          id="up"
          alt=""
        />
        <input
          type="image"
          src="static/images/down.png"
          name="down"
          className="btTxt submit"
          id="down"
          alt=""
        />
        <votes id="votes">2</votes>
      </div>
      <div id="comment">
        Posted by:{' '}
        <em>
          Farooq A, <small>August 11th 2018</small>
        </em>
      </div>
    </div>
  </div>
);

export default Answer;
