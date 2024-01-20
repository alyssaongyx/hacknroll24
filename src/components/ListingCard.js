import React from "react";
import "./ListingCard.css";

export default function ListingCard({ business }) {
  return (
    <div
      className="listing-card"
      onClick={() => window.open(business.website, "_blank")}
    >
      <div>
        <div className="listing-info">
          <h3 className="business-name">{business.name}</h3>
          <p className="business-description">{business.description}</p>
          <address className="business-address">{business.address}</address>
          <p className="business-hours">{business.operatingHours}</p>
        </div>
      </div>
    </div>
  );
}
