import React, { useState, useRef } from "react";
import "./ChatbotPage.css";

export default function ChatbotPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsScrolled(false);
  };

  const handleScroll = (e) => {
    const isAtBottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight;
    setIsScrolled(!isAtBottom);
  };

  // Get response from bot
  const getBotResponse = async (userInput) => {
    try {
      // TODO: Replace with our API
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        text: data.reply,
        sender: "bot",
      };
    } catch (error) {
      console.error("Could not get a response from the chatbot:", error);
      return {
        // TODO: Replace with the response
        text: "Sorry, I'm having trouble understanding you.",
        sender: "bot",
      };
    }
  };

  // Function to handle the click event of the send button
  const handleSendClick = async () => {
    if (input.trim()) {
      const newMessage = {
        text: input,
        sender: "user",
      };
      setMessages((messages) => [...messages, newMessage]);
      setInput("");

      const botResponse = await getBotResponse(input);
      setMessages((messages) => [...messages, botResponse]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot">
        <div className="chatbot-messages" onScroll={handleScroll}>
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} /> {}
        </div>
        <div className="chatbot-input">
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === "Enter" && handleSendClick()}
              placeholder="Type your message here!"
            />
            <button onClick={handleSendClick} className="send-button">
              <img src="/arrowicon.svg" alt="Send" />
            </button>
          </div>
        </div>
        {isScrolled && (
          <button className="scroll-to-bottom" onClick={scrollToBottom}>
            <img src="/arrowdown.svg" alt="Scroll to bottom" />
          </button>
        )}
      </div>
    </div>
  );
}
