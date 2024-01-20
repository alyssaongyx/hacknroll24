import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/logo.svg" alt="LocalLinker Logo" className="footer-logo" />
        </div>
        <div className="footer-container">
          <div className="footer-links">
            <a href="/" className="footer-brand-name">
              LocalLinker
            </a>
            <a href="/chatbot" className="footer-link">
              Chatbot
            </a>
            <a href="/listings" className="footer-link">
              Listings
            </a>
            <a href="/contact" className="footer-link">
              Contact
            </a>
          </div>
          <div className="footer-cta">
            <a href="/chatbot" className="footer-cta-link">
              Try Now
            </a>
            <p className="footer-cta-text">
              Embark on a personalized journey to discover the best of your
              neighborhood with our innovative platform.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
    </footer>
  );
}
