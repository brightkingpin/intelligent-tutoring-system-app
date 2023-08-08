import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Intelligent Tutoring System</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/student">Student Module</a></li>
          <li><a href="/tutor">Tutor Module</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
