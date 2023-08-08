import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Intelligent Tutoring System</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/student">Student Module</Link></li>
          <li><Link to="/tutor">Tutor Module</Link></li>
          <li><Link to="/domain">Domain Model</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
