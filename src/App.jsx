// Steven Gonell
// 10/8/2026
// React sign up page
import { useState } from 'react';
import './App.css';

import abstractionImg from './assets/Abstraction.png';
import cornerImg from './assets/Corner-img.png';
import Facebook from './assets/Facebook.png';
import Google from './assets/Google.png';
import lock from './assets/lock.png';
import { supabase } from './supabaseClient.js';



export default function App() {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email').trim();
    const password = formData.get('password');

    try {
      const result = isLoginMode
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: {
              data: { full_name: formData.get('fullName').trim() },
            },
          });

      if (result.error) {
        setErrorMessage(result.error.message);
        return;
      }

      if (isLoginMode) {
        setSuccessMessage('You are signed in.');
      } else {
        form.reset();
        setSuccessMessage(
          result.data.session
            ? 'Account created and signed in.'
            : 'Account created. Check your email to confirm your account.',
        );
      }
    } catch (error) {
      setErrorMessage(
        error instanceof TypeError && error.message === 'Failed to fetch'
          ? 'Could not connect to Supabase. Check that the configured Supabase URL is reachable.'
          : error instanceof Error
            ? error.message
            : 'Could not connect to Supabase.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="signup-container">
      {/* Left Sidebar */}
      <div className="sidebar">
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
          <img src={abstractionImg} alt="Decorative Edge" className="abstract-artwork" />
        </div>
      </div>

      {/* Right Form Area */}
      <div className="form-section">
        <header className="language-selector">
          <button className="lang-btn">English (UK) <span className="arrow">▾</span></button>
        </header>

        <div className="form-card">
          <h2 className="form-title">{isLoginMode ? 'Welcome Back' : 'Create Account'}</h2>

          {/* Social Sign Up Options */}
          {!isLoginMode && <div className="social-row">
            <button className="social-btn">
              <img src={Google} alt="Google" className="provider-icon" /> Signup with Google
            </button>
            <button className="social-btn">
              <img src={Facebook} alt="Facebook" className="provider-icon" /> Signup with Facebook
            </button>
          </div>}

          {!isLoginMode && <div className="divider">
            <span>- OR -</span>
          </div>}

          {/* Registration Input Form */}
          <form onSubmit={handleSubmit}>
            {!isLoginMode && <div className="input-group">
              <input type="text" id="fullName" name="fullName" placeholder="Full Name" autoComplete="name" maxLength={100} required />
            </div>}

            <div className="input-group">
              <input type="email" id="email" name="email" placeholder="Email" autoComplete="email" required />
            </div>

            <div className="input-group password-group">
              <input type="password" id="password" name="password" placeholder="Password" autoComplete={isLoginMode ? 'current-password' : 'new-password'} minLength={6} required />
              <img src={lock} alt="Lock" className="input-icon" />
            </div>

            {errorMessage && <p className="form-message form-error" role="alert">{errorMessage}</p>}
            {successMessage && <p className="form-message form-success" role="status">{successMessage}</p>}

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting
                ? isLoginMode ? 'Signing In...' : 'Creating Account...'
                : isLoginMode ? 'Log In' : 'Create Account'}
            </button>
          </form>

          <p className="footer-text">
            {isLoginMode ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              className="login-link"
              onClick={() => {
                setIsLoginMode(!isLoginMode);
                setErrorMessage('');
                setSuccessMessage('');
              }}
            >
              {isLoginMode ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}