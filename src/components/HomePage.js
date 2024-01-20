import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage(props) {
  return (
    <>
      <main className="main-content">
        <section className="hero-section">
          <h1 className="text-heading">Discover Local, <br></br>Support Community</h1>
          <p className="text-subheading">
            Embark on a personalized journey to discover the best of your neighborhood with our innovative platform.
          </p>
          <div className="button-group">
            <Link to="/chatbot" className="button-primary">Get Started</Link>
            <Link to="/about" className="button-secondary">Learn More</Link>
          </div>
        </section>

        <section className="image-block">
          <img src="screenshot.png" alt="Screenshot of LocalLinker"/>
        </section>  
      </main>
    </>
  );
}
