import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/logoo.png';
import '../../../assets/js/nav_bar';

const Header = ({ userId }) => (
  <header className="head" id="nav_header">
    <div className="navigation" id="navbar">
      <a href="homepage.html">
        <img className="logo" src={logo} alt="" />
      </a>
      <p class="profile">
        {userId}
        <br />
        <a href="loginpage.html">Sign out</a>
      </p>
      <ul>
        <li>
          <a href="homepage.html">Questions</a>
        </li>
        <li>
          <a href="myquests.html">My Questions</a>
        </li>
        <li>
          <a href="ask.html">Ask?</a>
        </li>
        <li>
          <a href="profile.html">Profile</a>
        </li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  userId: PropTypes.string
};
Header.defaultProps = {
  userId: ''
};

export default Header;
