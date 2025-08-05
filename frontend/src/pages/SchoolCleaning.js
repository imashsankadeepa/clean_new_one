import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';  // Import Helmet for SEO
import './SchoolCleaning.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import background4 from '../assets/background4.webp';
import pic1 from '../assets/pic1.webp';
import pic2 from '../assets/pic2.webp';
import pic3 from '../assets/pic3.webp';

const SchoolCleaning = () => {
  const navigate = useNavigate();
  const bookingFormPath = '/booking';

  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleBookNow = (service, price) => {
    navigate(bookingFormPath, {
      state: { service, price },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      title: 'Basic Package',
      monthly: '$30.00',
      yearly: '$300.00',
      features: ['✔ Dusting', '✔ Mopping'],
    },
    {
      title: 'Standard Package',
      monthly: '$50.00',
      yearly: '$500.00',
      features: ['✔ Dusting', '✔ Mopping', '✔ Vacuuming'],
    },
    {
      title: 'Premium Package',
      monthly: '$80.00',
      yearly: '$800.00',
      features: ['✔ Dusting', '✔ Mopping', '✔ Deep Clean'],
    },
  ];

  return (
    <div className="school-cleaning">

      {/* SEO Metadata */}
      <Helmet>
  <title>School Cleaning And Clearance Services | Oak Roots Cleaning And Clearance</title>
  <meta
    name="description"
    content="Complete home cleaning and clearance services in London, including deep cleaning, kitchen and bathroom sanitation, end of tenancy cleaning, and more."
  />
  <meta
    name="keywords"
    content="home cleaning, house cleaning, deep cleaning, kitchen sanitation, bathroom cleaning, clearance services, London cleaning services"
  />
  <meta name="author" content="Oak Roots Cleaning" />
  <meta property="og:title" content="Professional Home Cleaning Services in London | Oak Roots Cleaning" />
  <meta
    property="og:description"
    content="Complete home cleaning and clearance services in London, tailored to your needs."
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://oakrootscleaning.uk/assets/background4.webp" />
  <link rel="canonical" href="https://oakrootscleaning.uk/home-cleaning" />
</Helmet>

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${background4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            {"School Cleaning And Clearance".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <p>
            Professional Cleaning And Clearance services tailored for educational facilities,
            ensuring a clean, safe, and healthy learning environment for students and staff.
          </p>
          <button
            className="btn primary-btn"
            onClick={() => handleBookNow("School Cleaning", "Custom")}
            aria-label="Book School Cleaning Service"
          >
            Book Now
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-header">
          <h5 className="section-tag">Professional Solutions</h5>
          <h2>Our Services</h2>
          <p>Comprehensive cleaning solutions designed specifically for educational environments</p>
        </div>

        <div className="service-cards">
          {[{
            img: pic1,
            title: "Cleaner, Hall, Toilet Cleaning",
            desc: "Comprehensive cleaning of all school facilities including hallways and restrooms"
          },
          {
            img: pic2,
            title: "Playground & Classroom Supports",
            desc: "Specialized cleaning for playground equipment and classroom furniture"
          },
          {
            img: pic3,
            title: "Morning School Cleaning",
            desc: "Early morning services to ensure facilities are ready before students arrive"
          }].map((item, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="card-image">
                <img src={item.img} alt={`${item.title} service image`} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <button
                className="card-link"
                onClick={() => handleBookNow(item.title, "Custom")}
                aria-label={`Book ${item.title} service`}
              >
                Book Now →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      

      {/* Free Services */}
      <section className="free-services">
        <h5 className="section-tag green">Added Value</h5>
        <h2>Free Services</h2>
        <p>Additional complimentary services included with every school cleaning package.</p>
        <div className="free-cards">
          {[
            {
              title: 'Deep Cleaning Service',
              desc: 'Thorough cleaning of all surfaces and hard-to-reach places.',
            },
            {
              title: 'Playground Cleaning',
              desc: 'Sanitization of outdoor equipment for student safety.',
            },
            {
              title: 'Classroom Cleaning',
              desc: 'Detailed cleaning of desks, walls, and educational materials.',
            },
          ].map((free, i) => (
            <motion.div
              key={i}
              className="free-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <h4>{free.title}</h4>
              <p>{free.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
        <footer className="footer" role="contentinfo">
          <div className="footer-content">
            <section className="footer-section" aria-label="About Clean and Clear">
              <h3>Clean and clearance </h3>
              <p>Professional cleaning and clearance services for schools and educational facilities.</p>
            </section>
            <section className="footer-section" aria-label="Services offered">
              <h4>Services</h4>
              <ul>
                <li>School Cleaning and Clearance </li>
                <li>Office Cleaning and Clearance </li>
                <li>Commercial Cleaning and Clearance </li>
                <li>Special Services and Clearance </li>
              </ul>
            </section>
            <section className="footer-section" aria-label="Contact information">
              <h4>Contact</h4>
              <address>
               <a href="mailto:info@cleanandcleaning.uk">info@cleanandcleaning.uk</a><br />
<a href="tel:+447721259573">+44 7721 259573</a><br />
<a href="tel:+447557765488">+44 7557 765488</a><br />
<a href="tel:+447741076669">+44 7741 076669</a>

              </address>
            </section>
            <section className="footer-section" aria-label="Opening hours">
              <h4>Hours</h4>
              <p>
                Monday - Friday: 8am - 8pm<br />
                Saturday: 9am - 5pm<br />
                Sunday: 9am - 5pm
              </p>
            </section>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Clean and Clearance. All rights reserved.</p>
          </div>
        </footer>

    </div>
  );
};

export default SchoolCleaning;
