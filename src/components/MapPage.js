// MapComponent.js
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const mapStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

const center = {
  lat: 1.3521,
  lng: 103.8198,
};

export default function MapPage() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch("/api/locations");
      const data = await response.json();
      setLocations(data);
    };
    fetchLocations();
  }, []);

  const handleMarkerClick = (location) => {
    console.log("Marker clicked:", location);
    setSelectedLocation(location);
  };

  const handleSubmitCode = (code) => {
    console.log("Code submitted:", code);
    if (validateCode(code)) {
      setUserPoints((prevPoints) => prevPoints + 10);
      alert("Correct code! Points awarded.");
    } else {
      alert("Incorrect code. Try again.");
    }
    setSelectedLocation(null);
  };

  const validateCode = (code) => {
    // Check if the code is "1234"
    return code === "1234";
  };

  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      center={center}
      options={{
        styles: mapStyles,
      }}
    >
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={{ lat: loc.latitude, lng: loc.longitude }}
          onClick={() => handleMarkerClick(loc)}
        />
      ))}

      {selectedLocation && (
        <InfoWindow
          position={{
            lat: selectedLocation.latitude,
            lng: selectedLocation.longitude,
          }}
          onCloseClick={() => setSelectedLocation(null)}
        >
          <div>
            <h2>{selectedLocation.name}</h2>
            {/* Other content */}
            <button onClick={() => console.log("Special code entered")}>
              Submit Code
            </button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
