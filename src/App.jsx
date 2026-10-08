import React from 'react';
import './App.css';

// Import images directly from your src/assets directory
import abstractionImg from './assets/Abstraction.png';
import cornerImg from './assets/Corner-img.png';
import Facebook from './assets/Facebook.png';
import Google from './assets/Google.png';
import lock from './assets/lock.png';

export default function App() {
  return (
    <div className="signup-container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div className="logo-area">
          <div className="logo-icon">
            <img src={cornerImg} alt="Logo Element" className="logo-graphic" />
          </div>
        </div>
        <h1 className="sidebar-heading">
          Getting Started With <br/>
          VR Creation
        </h1>
        <div className="artwork-container">
          <img src={abstractionImg} alt="Decorative Edge" className="corner-artwork" />
        </div>
      </aside>

      {/* Right Form Area */}
      <div className="form-section">
        <header className="language-selector">
          <button className="lang-btn">English (UK) <span className="arrow">▾</span></button>
        </header>

        <div className="form-card">
          <h2 className="form-title">Create Account</h2>

          {/* Social Sign Up Options */}
          <div className="social-row">
            <button className="social-btn">
              <img src={Google} alt="Google" className="provider-icon" /> Signup with Google
            </button>
            <button className="social-btn">
              <img src={Facebook} alt="Facebook" className="provider-icon" /> Signup with Facebook
            </button>
          </div>

          <div className="divider">
            <span>- OR -</span>
          </div>

          {/* Registration Input Form */}
          <form onSubmit={(e) => e.preventDefault()}> {/* prevents website from reloading */}
            <div className="input-group">
              <input type="text" id="fullName" placeholder="Full Name" required />
            </div>

            <div className="input-group">
              <input type="email" id="email" placeholder="Email" required />
            </div>

            <div className="input-group password-group">
              <input type="password" id="password" placeholder="Password" required />
              <img src={lock} alt="Lock" className="input-icon" />
            </div>

            <button type="submit" className="submit-btn">
              Create Account
            </button>
          </form>

          <p className="footer-text">
            Already have an account? <a href="#" className="login-link">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}