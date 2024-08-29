import React from "react";
import "./css/TravelSection.css"; // Importing the CSS for this section

const TravelSection = () => {
  return (
    <div className="travel-section">
      <div className="image-container">
        <img src="travel-2.png" alt="Travel" />
      </div>
      <div className="content-container">
        <h1>🌟 About Japan Travel Advisor</h1>
        <h2>Enhancing Your Travel Experience with AI</h2>
        <p>
          🗺️ <strong>Our mission:</strong> To offer tailored travel recommendations that help you explore Japan’s finest destinations and experiences.
        </p>
        <p>
          🤔 <strong>How it Works:</strong>
        </p>
       
          <p>☑️ Discover hidden gems and popular spots based on your preferences.</p>
          <p>☑️ Customize your itinerary with AI-driven suggestions.</p>
          <p>☑️ Receive personalized recommendations for a memorable travel experience.</p>
       
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  );
};

export default TravelSection;
