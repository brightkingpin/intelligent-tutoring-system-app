import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header>
      <h1>Intelligent Tutoring System</h1>
      <nav>
        <ul>
          {/* wHERE TO Use Link component for navigation */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/student/math">Student Module</Link></li>
          <li><Link to="/tutor/math">Tutor Module</Link></li>
          <li><Link to="/domain">Domain Model</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
