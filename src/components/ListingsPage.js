import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import "./ListingsPage.css";

export default function ListingsPage() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/listings")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("Data format is not correct");
        }
        setListings(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterListings(e.target.value);
  };

  const filterListings = (searchTerm) => {
    const filteredListings = listings.filter((listing) =>
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
        {Array.isArray(listings) &&
          listings.map((business, index) => (
            <ListingCard key={index} business={business} />
          ))}
      </div>
    </div>
  );
}
