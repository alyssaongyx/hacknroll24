import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsSuccess(true);
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setIsSuccess(false);
        setError("");
      }, 1500);
    }
  };

  // Success message
  const SuccessMessage = () => (
    <div className="success-message">Account created successfully!</div>
  );

  return (
    <div className="signup-page">
      <div className="signup-content">
        <form onSubmit={handleSignUp} className="signup-form">
          <h1>Create an account</h1>
          <p>Let's get started!</p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Create Account</button>
          {error && <p className="error-message">{error}</p>}
          {isSuccess && <SuccessMessage />} {}
          <div className="signin-redirect">
            Already have an account? <a href="/login">Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
