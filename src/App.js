import React from "react";
import ChatbotPage from "./components/ChatbotPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ListingsPage from "./components/ListingsPage";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LogIn";
import SignUpPage from "./components/SignUp";
import Footer from "./components/Footer";
import MapPage from "./components/MapPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

export default function App() {
  function ConditionalFooter() {
    const location = useLocation();

    if (location.pathname === "/chatbot") {
      return null;
    }

    return <Footer />;
  }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
      <ConditionalFooter />
    </Router>
  );
}
