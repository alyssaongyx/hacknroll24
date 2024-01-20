import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import "./NavBar.css";

export default function NavBar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setSuccessMessage("You have been signed out successfully.");
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Sign out error", error);
    }
  };

  return (
    <header className="header">
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <div className="top-bar">
        <Link to="/">
          <img src="logo.svg" alt="LocalLinker Logo" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/chatbot" className="nav-link">
            Chatbot
          </Link>
          <Link to="/listings" className="nav-link">
            Listings
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
        {user ? (
          <div className="side">
            <a onClick={handleSignOut} className="sign-out-button side-item">
              Sign Out
            </a>
          </div>
        ) : (
          <div className="side">
            <a href="/login" className="side-item">
              Log in
            </a>
            <Link to="/signup" className="sign-up-button side-item">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
