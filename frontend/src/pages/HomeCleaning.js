import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';    // Import Helmet for SEO
import './SchoolCleaning.css'; // Reusing styles
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import background4 from '../assets/background4.webp';
import pic1 from '../assets/pic1.webp';
import pic2 from '../assets/pic2.webp';
import pic3 from '../assets/pic3.webp';

const HomeCleaning = () => {
  const navigate = useNavigate();
  const [billingType, setBillingType] = useState('monthly');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookNow = (service, price) => {
    navigate('/booking', {
      state: { service, price },
    });
  };

  const pricing = {
    monthly: {
      title: 'Home Cleaning Package',
      price: '£79.00',
      duration: '/month',
      features: [
        '✔ Weekly Home Cleaning Visits',
        '✔ Kitchen & Bathroom Disinfection',
        '✔ Living Space & Bedroom Cleaning'
      ]
    },
    yearly: {
      title: 'Home Cleaning Package',
      price: '£849.00',
      duration: '/year',
      features: [
        '✔ Weekly Home Cleaning Visits',
        '✔ Kitchen & Bathroom Disinfection',
        '✔ Living Space & Bedroom Cleaning',
        '✔ 3 Bonus Deep Clean Services'
      ]
    }
  };

  const currentPlan = pricing[billingType];

  return (
    <div className="school-cleaning">
      {/* SEO Metadata */}
      <Helmet>
  <title>Home Cleaning Services And Clearance | Oak Roots Cleaning And Clearance</title>
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
            {'Home Cleaning And Clearance'.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
          <p>
            Complete home cleaning and clearance services tailored to suit your needs. From deep cleaning to post-party cleanup, we’ve got your space covered.
          </p>
          <button
            className="btn primary-btn"
            onClick={() => handleBookNow("Home Cleaning", currentPlan.price + currentPlan.duration)}
            aria-label="Book Home Cleaning Service"
          >
            Book Now
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-header">
          <h5 className="section-tag">Residential Cleanups</h5>
          <h2>Our Services</h2>
          <p>From everyday cleaning And Clearance to special event aftermaths, we do it all.</p>
        </div>

        <div className="service-cards">
          {[
            {
              img: pic1,
              title: "Deep House Cleaning",
              desc: "Top-to-bottom house cleaning with special care for every detail.",
            },
            {
              img: pic2,
              title: "Kitchen & Bathroom Sanitation",
              desc: "Disinfection of surfaces, sinks, toilets, and appliances.",
            },
            {
              img: pic3,
              title: "End of Tenancy & Clearance",
              desc: "Move-out deep cleaning and junk removal from all rooms.",
            },
            {
              img: pic1,
              title: "Full House Clearance",
              desc: "Includes loft, garage, garden, and storage areas.",
            },
            {
              img: pic2,
              title: "Post-Party/Event Cleaning",
              desc: "Fast recovery cleaning services for indoor or outdoor gatherings.",
            },
          ].map((item, i) => (
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
                onClick={() => handleBookNow(item.title, currentPlan.price + currentPlan.duration)}
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
        <h5 className="section-tag green">Free Services</h5>
        <h2>Bonus Inclusions</h2>
        <p>Every home cleaning And Clearance service includes these extras at no extra charge.</p>
        <div className="free-cards">
          {[
            {
              title: 'Aromatic Fragrance Customization',
              desc: 'Your favorite scents diffused across your living space.',
            },
            {
              title: 'Fridge & Appliance Detox',
              desc: 'Interior cleaning and deodorizing of household appliances.',
            },
            {
              title: 'Home Organization Support',
              desc: 'Decluttering assistance and space optimization help.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="free-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
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

export default HomeCleaning;
