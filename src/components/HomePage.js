import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import FeaturesSection from "./FeaturesSection";
import CallToActionSection from "./CallToActionSection";
import TeamSection from "./TeamSection";
import "./HomePage.css";

export default function HomePage(props) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <main className="main-content">
        <section className="hero-section">
          <h1 className="text-heading">
            Discover Local, <br></br>Support Community
          </h1>
          <p className="text-subheading">
            Embark on a personalized journey to discover the best of your
            neighborhood with our innovative platform.
          </p>
          <div className="button-group">
            <Link to="/login" className="button-primary">
              Get Started
            </Link>
            <Link to="/about" className="button-secondary">
              Learn More
            </Link>
          </div>
        </section>

        <section className="image-block">
          <img src="screenshot.png" alt="Screenshot of LocalLinker" />
        </section>
      </main>
      <FeaturesSection />
      <CallToActionSection />
      <TeamSection />
    </>
  );
}
