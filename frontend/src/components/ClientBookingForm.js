import React, { useState } from 'react';
import axios from 'axios';
import './ClientBookingForm.css';

const ClientBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Use environment variable for API URL
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

    await axios.post(`${apiBaseUrl}/api/booking/create`, formData);

    // ✅ Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });

    // ✅ Show success message
    setFeedback('✅ Booking submitted successfully!');

    // ✅ Optional: Hide message after 5 seconds
    setTimeout(() => setFeedback(''), 5000);

  } catch (err) {
    console.error('Booking submission error:', err);
    setFeedback('❌ Error submitting booking. Please try again later.');
  }
};


  return (

    <main className="booking-main">
    <div className="booking-container">
      <h2>Book a Cleaning And Clearance Service</h2>
      <p>Fill out the form below to schedule your cleaning appointment.</p>

      <form onSubmit={handleSubmit} className="booking-form">
        <label>Name</label>
        <input
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Preferred Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Choose a Plan</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Plan --</option>
          <option value="Basic Clean">Basic Clean</option>
          <option value="Deep Clean">Deep Clean</option>
          <option value="Move In/Out Clean">Move In/Out Clean</option>
        </select>

        <label>Additional Notes</label>
        <textarea
          name="message"
          placeholder="Any specific requests?"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit Booking</button>

        {/* ✅ Feedback message */}
        {feedback && <p className="feedback-message">{feedback}</p>}
      </form>
    </div>
    </main>
  );
};

export default ClientBookingForm;
