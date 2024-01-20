import React from 'react';
import './FeaturesSection.css';
import FeatureItem from "./FeatureItem";

export default function FeaturesSection(props) {

  const features = [
    {
      imageUrl: "/chatboticon.svg",
      title: "Interactive Chatbot",
      description: "Our interactive chatbot is your virtual guide to discovering local treasures. Powered by artificial intelligence, it's like having a friendly local expert at your fingertips."
    },
    {
      imageUrl: "/businesslistingsicon.svg",
      title: "Local Business Listings",
      description: "Dive into our extensive directory of local businesses that form the vibrant tapestry of your community. From cozy cafes and family-run boutiques to trusted service providers, our listings cover it all. Each business profile includes essential information such as addresses, contact details and operating hours."
    },
    {
      imageUrl: "communityicon.svg",
      title: "Community Engagement",
      description: "At the core of our platform lies the spirit of community engagement. We believe in the power of connection and collaboration. Through our platform you can support local businesses and connect with like-minded individuals, playing a vital role in nurturing the sense of belonging that defines your community."
    }
  ];

  return (
    <header className="features-header">
      <section className="features-container">
        <span className="features-title-badge">
          Features
        </span>
        <h2 className="features-main-title">
          Why use LocalLinker?
        </h2>
        <p className="features-description">
          Join us in celebrating and sustaining local businesses, one recommendation at a time.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              imageUrl={feature.imageUrl}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </header>
  );
}
