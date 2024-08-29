import React from "react";
import "./css/Card.css"; // Importing the CSS for the card

const cardData = [
  {
    title: "Responsive Design",
    content:
      "Our platform is designed to be fully responsive, ensuring a seamless experience on any device. Travelers can access our recommendations on-the-go, whether on a smartphone, tablet, or desktop.",
  },
  {
    title: "Comprehensive Recommendations",
    content:
      "Our platform offers a variety of carefully curated travel recommendations for Japan. These recommendations help travelers make informed decisions about destinations, activities, and cultural experiences.",
  },
  {
    title: "User-Friendly Interface",
    content:
      "Our intuitive interface allows travelers to easily navigate the platform and find the perfect places to visit. The platform is designed to be accessible for users with any level of technical knowledge.",
  },
  {
    title: "Customizable Itineraries",
    content:
      "We provide customizable itineraries tailored to each traveler's unique preferences. Travelers can adjust parameters to receive the most relevant and personalized recommendations for their specific interests.",
  },
];

function Card() {
  return (
    <div className="layout">
      <h1>🫴 What We Offer to Travelers 🗾</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
