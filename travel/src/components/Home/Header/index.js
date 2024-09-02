import React from 'react';
import './styles.css';

const Header = () => (
  <header className='home-header'>
    <div className="header-content">
      <div className="title-section">
        <h2>The Travel Blog</h2>
        <h1>
          <span>“</span>The Way To Travel<span>”</span>
        </h1>
        <p>
          You only live once <br /> Let the World Be your Oyster!
        </p>
      </div>
      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  </header>
);

export default Header;
