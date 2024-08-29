import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Ensure this is a default export or adjust accordingly
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';

import RecommendationForm from './Components/RecommendationForm';

function App() {
  return (
    <Router>
       <Navbar /> 
      <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/Recommend" element={<RecommendationForm />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
