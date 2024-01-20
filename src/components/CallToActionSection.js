import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function CallToActionSection() {
  return (
    <main className="call-to-action-main-content">
      <section className="hero-section">
        <h1 className="call-to-action-text-heading">
          Get Started with LocalLinker Today
        </h1>
        <p className="call-to-action-text-subheading">
          Explore a world of local treasures with our interactive chatbot,
          comprehensive business listings, and vibrant community engagement.
        </p>
        <div className="button-group">
          <Link to="/chatbot" className="button-primary">
            Get Started
          </Link>
          <Link to="/about" className="call-to-action-button-secondary">
            Learn More
          </Link>
        </div>
      </section>

      <section className="image-block">
        <img src="screenshot.png" alt="Screenshot of LocalLinker" />
      </section>
    </main>
  );
}
