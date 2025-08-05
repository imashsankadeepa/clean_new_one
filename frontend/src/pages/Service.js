import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  FaRegFileAlt,
  FaBroom,
  FaCouch,
  FaCalendarAlt,
  FaLeaf,
  FaSmile,
} from 'react-icons/fa';

import './Service.css';
import ss1 from '../assets/ss1.webp';
import ss2 from '../assets/ss2.webp';
import ss3 from '../assets/ss3.webp';
import backgroundImg from '../assets/background4.webp';

const Service = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      title: 'Free Quote',
      description: 'Instant pricing and transparent process.',
      icon: <FaRegFileAlt size={40} color="#22c55e" aria-hidden="true" />,
    },
    {
      title: 'Clean',
      description: 'Our expert team performs high-quality cleaning.',
      icon: <FaBroom size={40} color="#22c55e" aria-hidden="true" />,
    },
    {
      title: 'Relax',
      description: 'Enjoy your spotless space with peace of mind.',
      icon: <FaCouch size={40} color="#22c55e" aria-hidden="true" />,
    },
    {
      title: 'Schedule Flexibly',
      description: 'Choose the time that suits your schedule.',
      icon: <FaCalendarAlt size={40} color="#22c55e" aria-hidden="true" />,
    },
    {
      title: 'Eco-friendly Products',
      description: 'We use safe and sustainable cleaning supplies.',
      icon: <FaLeaf size={40} color="#22c55e" aria-hidden="true" />,
    },
    {
      title: 'Satisfaction Guaranteed',
      description: 'Your happiness is our priority.',
      icon: <FaSmile size={40} color="#22c55e" aria-hidden="true" />,
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Trained Staff', value: '500+' },
    { label: 'Client Satisfaction', value: '95%' },
    { label: 'Repeat Clients', value: '85%' },
  ];

  const services = [
    { id: 1, title: 'Office Cleaning And Clearance', image: ss1 },
    { id: 2, title: 'School Cleaning And Clearance', image: ss2 },
    { id: 3, title: 'Home Cleaning And Clearance', image: ss3 },
  ];

  const pathMap = {
    'Office Cleaning And Clearance': '/services/office-cleaning',
    'School Cleaning And Clearance': '/services/school-cleaning',
    'Home Cleaning And Clearance': '/services/home-cleaning',
  };

  return (
    <div className="service-container">

      {/* SEO Metadata */}
      <Helmet>
        <title>Expert Cleaning Services | Clean And Clearance UK</title>
        <meta
          name="description"
          content="Reliable, professional, and eco-friendly cleaning services across the UK. Office, school, and home cleaning tailored to your needs."
        />
        <meta
          name="keywords"
          content="cleaning services, office cleaning, school cleaning, home cleaning, eco-friendly cleaning, UK cleaning services"
        />
        <meta name="author" content="Clean and Clear" />
        <meta property="og:title" content="Expert Cleaning Services | Clean and Clear UK" />
        <meta
          property="og:description"
          content="Reliable, professional, and eco-friendly cleaning services for offices, schools, and homes across the UK."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={backgroundImg} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      {/* Hero Section */}
      <section className="service-hero" aria-label="Hero section with overview of cleaning services">
        <div
          className="hero-bg-image"
          style={{ backgroundImage: `url(${backgroundImg})` }}
          aria-hidden="true"
        />
        <div className="hero-overlay">
         <motion.h1
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="hero-title3"
>
  Expert Cleaning And Clearance Services 
</motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="hero-subtitle"
          >
            Delivering reliable, professional and eco-friendly cleaning  And Clearance across the UK.
          </motion.p>
          <div className="hero-buttons">
            <Link to="/booking" className="primary-btn" aria-label="Get a quote for cleaning services">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="why-stats" aria-label="Statistics showing company expertise and experience">
        <h2>We Are Experienced & Have Expert Teams</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-box"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              role="region"
              aria-label={`${stat.label}: ${stat.value}`}
            >
              <p>{stat.value}</p>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="service-categories" aria-label="List of cleaning services offered">
        <h2>Here's What We Can Do for You</h2>
        <div className="service-cards-grid">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
              }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(pathMap[service.title])}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(pathMap[service.title]);
                }
              }}
              aria-label={`Navigate to ${service.title} page`}
            >
              <img src={service.image} alt={`${service.title} service image`} />
              <h3>{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="quote-section" aria-label="Call to action to book cleaning services">
        <h2>Book a Cleaning And Clearance Today</h2>
        <p>
          We’re ready to help you maintain a clean and healthy space. Schedule a cleaning in just a few clicks.
        </p>
        <Link to="/booking" className="primary-btn" aria-label="Request a cleaning quote">
          Request a Quote
        </Link>
      </section>

      {/* Process Steps */}
      <section className="process-steps" aria-label="Step-by-step process of getting cleaning service">
        <h2>Quick and Easy</h2>
        <p className="process-intro">
          Our streamlined process ensures your cleaning needs are met smoothly and efficiently.
        </p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              role="region"
              aria-label={`Step ${index + 1}: ${step.title} - ${step.description}`}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
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

export default Service;
