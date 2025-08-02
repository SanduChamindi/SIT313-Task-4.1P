import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder for real subscription logic
    if (email.trim()) {
      alert(`Subscribed: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="custom-footer">
      {/* signup bar */}
      <div className="signup-bar">
        <div className="signup-inner">
          <div className="signup-label">SIGN UP FOR OUR DAILY INSIDER</div>
          <form className="signup-form" onSubmit={handleSubmit} aria-label="Daily insider signup">
            <input
              type="email"
              aria-label="Enter your email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* main columns */}
      <div className="footer-main">
        <div className="columns">
          <div className="col">
            <h3 className="col-title">Explore</h3>
            <ul className="col-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Questions</a></li>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Tutorials</a></li>
            </ul>
          </div>
          <div className="col">
            <h3 className="col-title">Support</h3>
            <ul className="col-list">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col">
            <h3 className="col-title">Stay connected</h3>
            <div className="social-icons">
              <a aria-label="Facebook" href="#" className="social-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill="#ffffff10" />
                  <path
                    d="M13.5 2H10a6 6 0 00-6 6v3H2v4h2v8h4v-8h3l1-4H8V8a2 2 0 012-2h3.5V2z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a aria-label="Twitter" href="#" className="social-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill="#ffffff10" />
                  <path
                    d="M8 19c7.732 0 11.955-6.406 11.955-11.955 0-.182 0-.364-.012-.545A8.55 8.55 0 0022 5.92a8.37 8.37 0 01-2.356.646 4.117 4.117 0 001.804-2.27 8.233 8.233 0 01-2.605.994A4.107 4.107 0 0015.448 4c-2.27 0-4.107 1.837-4.107 4.107 0 .323.036.637.106.937A11.65 11.65 0 013 5.15a4.107 4.107 0 001.27 5.483 4.073 4.073 0 01-1.86-.514v.052c0 2.037 1.449 3.737 3.374 4.123a4.1 4.1 0 01-1.853.07c.523 1.633 2.038 2.824 3.833 2.857A8.233 8.233 0 012 17.57a11.616 11.616 0 006.29 1.84"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a aria-label="Instagram" href="#" className="social-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill="#ffffff10" />
                  <path
                    d="M12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 7.92a3.12 3.12 0 110-6.24 3.12 3.12 0 010 6.24zm6.84-8.64a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0zm1.92 1.28c-.044-1-.25-1.68-.53-2.28a4.6 4.6 0 00-1.02-1.66 4.6 4.6 0 00-1.66-1.02c-.6-.28-1.28-.486-2.28-.53C14.66 5 14.1 5 12 5s-2.66 0-3.7.044c-1 .044-1.68.25-2.28.53a4.6 4.6 0 00-1.66 1.02 4.6 4.6 0 00-1.02 1.66c-.28.6-.486 1.28-.53 2.28C5 9.34 5 9.9 5 12s0 2.66.044 3.7c.044 1 .25 1.68.53 2.28.24.52.56.98 1.02 1.66.68.68 1.14.8 1.66 1.02.6.28 1.28.486 2.28.53C9.34 19 9.9 19 12 19s2.66 0 3.7-.044c1-.044 1.68-.25 2.28-.53a4.6 4.6 0 001.66-1.02 4.6 4.6 0 001.02-1.66c.28-.6.486-1.28.53-2.28.044-1.04.044-1.6.044-3.7s0-2.66-.044-3.7z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom row */}
      <div className="footer-bottom">
        <div className="bottom-top">DEV@Deakin 2025</div>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
