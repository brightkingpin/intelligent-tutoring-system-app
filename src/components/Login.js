import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // my authentication logic here
    if (username === 'lecturer@gmail.com' && password === '123456') {
      onLogin(); // I Called the onLogin function passed as a prop
      setError('');
      localStorage.setItem('isLoggedIn', 'true'); // I Stored login status
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // I ClearED stored login status
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
