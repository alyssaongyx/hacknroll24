import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import "./LogIn.css";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
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
    <div className="success-message">Log in successful!</div>
  );

  return (
    <div className="login-page">
      <div className="login-content">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
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
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
          {isSuccess && <SuccessMessage />} {}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
