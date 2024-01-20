import React from 'react';
import ChatbotPage from './components/ChatbotPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import ListingsPage from './components/ListingsPage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LogIn';
import SignUpPage from './components/SignUp';

export default function App() {
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
        </Routes>
      </div>
    </Router>
  );
}
