import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
      <header className="header">
        <div className="top-bar">
          <Link to="/">
            <img
              src="logo.svg"
              alt="LocalLinker Logo"
              className="logo"
            />
          </Link>
          <nav className="nav">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/listings" className="nav-link">Listings</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          <Link to="/chatbot" className="get-started-button">Get Started</Link>
        </div>
      </header>
    );
}
