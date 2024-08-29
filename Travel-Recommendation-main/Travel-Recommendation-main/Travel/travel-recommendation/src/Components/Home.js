import React from "react";
import Card from "./Card"; 
// Import the Card component
import TravelSection from "./TravelSection";
 // Import the TravelSection component

import "./css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1>Welcome To Japan Travel Advisor</h1>
        <h2>Your Personal Travel Recommendation System</h2>
        <p>
          ✅ <strong>Discover:</strong> Explore hidden gems and popular spots in Japan tailored to your preferences. From serene temples to vibrant gardens, find destinations that resonate with you.
        </p>
        <p>
          ✅ <strong>Plan:</strong> Customize your travel itinerary with AI-powered suggestions based on your current location and interests.
        </p>
        {/* <p>
          ✅ <strong>Experience:</strong> Immerse yourself in Japanese culture, food, and traditions through our curated travel recommendations.
        </p> */}
        <button className="explore-button">Explore Now</button>
      </div>
      <div className="image-section">
        <img src="p1.png" alt="Japan Travel" />
      </div>
      <Card />
      <TravelSection />


    </div>
  );
};

export default Home;
