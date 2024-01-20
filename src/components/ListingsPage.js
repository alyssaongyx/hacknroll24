import React, { useState } from "react";
import ListingCard from "./ListingCard";
import "./ListingsPage.css";

// Dummy data for the listings
// TODO: Remove and Fetch data from database
const listingsData = [
  {
    id: 1,
    name: "Ocean's Bounty Seafood",
    description: "Fresh seafood and delightful dishes.",
    address: "123 Seaside Blvd, Oceanview",
    operatingHours: "Mon-Fri: 9am - 8pm, Sat-Sun: 10am - 9pm",
    website: "http://www.oceansbountyseafood.com",
  },
];

export default function ListingsPage() {
  const [listings, setListings] = useState(listingsData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterListings(e.target.value);
  };

  const filterListings = (searchTerm) => {
    const filteredListings = listingsData.filter((listing) =>
      listing.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setListings(filteredListings);
  };

  return (
    <div className="listings-page">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for businesses..."
        />
      </div>
      <div className="listings-container">
        {listings.map((business, index) => (
          <ListingCard key={index} business={business} />
        ))}
      </div>
    </div>
  );
}
