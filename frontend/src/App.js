// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';  // import Helmet here
import Nav from './components/nav';
import BookingForm from './components/ClientBookingForm';

import Home from './pages/Home';
import Services from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/Aboutus';
import OfficeCleaning from './pages/OfficeCleaning';
import HomeCleaning from './pages/HomeCleaning';
import SchoolCleaning from './pages/SchoolCleaning';

import './App.css';

function App() {
  return (
    <Router>
      {/* Default/global SEO for entire app */}
      <Helmet>
        <title>Clean and Clear | Professional Cleaning Services UK</title>
        <meta
          name="description"
          content="Clean and Clear provides reliable, professional cleaning services for offices, schools, and homes across the UK."
        />
        <meta name="keywords" content="cleaning, office cleaning, school cleaning, home cleaning, UK cleaning services" />
        <meta name="author" content="Clean and Clear" />
        <meta property="og:title" content="Clean and Clear | Professional Cleaning Services UK" />
        <meta property="og:description" content="Reliable, eco-friendly cleaning for offices, schools, and homes across the UK." />
        <meta property="og:type" content="website" />
        {/* Add your og:image url or leave for page-level tags */}
      </Helmet>

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/office-cleaning" element={<OfficeCleaning />} />
        <Route path="/services/home-cleaning" element={<HomeCleaning />} />
        <Route path="/services/school-cleaning" element={<SchoolCleaning />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
