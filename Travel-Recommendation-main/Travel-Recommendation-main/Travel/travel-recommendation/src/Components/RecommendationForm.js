import React, { useState } from 'react';

const RecommendationForm = () => {
  const [preferences, setPreferences] = useState({
    type: '',
    location: '',
    rating: '',
  });

  const handleChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(preferences);
  };

  const formStyle = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    marginTop:'30px',
    marginBottom:'50px'

    
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };


  return (
    <div>
      <h2 style={{
    textAlign: 'center', 
    color: '#111e49', 
    fontSize: '2em', 
    fontWeight: 'bold', 
    margin: '20px 0', 
    padding: '10px', 
    // borderBottom: '2px solid #111e49', 
    backgroundColor: '#f4f4f4', 
    borderRadius: '8px', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
}}>
    Find your destinations by your interests
</h2>

    <div style={formStyle}>
      <h2 style={titleStyle}>Explore Japan </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle} htmlFor="type">Type of Location:</label>
          <input
            style={inputStyle}
            type="text"
            id="type"
            name="type"
            value={preferences.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="location">Current Location:</label>
          <input
            style={inputStyle}
            type="text"
            id="location"
            name="location"
            value={preferences.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="rating">Minimum Rating:</label>
          <input
            style={inputStyle}
            type="number"
            id="rating"
            name="rating"
            value={preferences.rating}
            onChange={handleChange}
            min="1"
            max="5"
          />
        </div>
        <button
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
          type="submit"
        >
          Get Recommendations
        </button>
      </form>
    </div>
    </div>
  );
};

export default RecommendationForm;
