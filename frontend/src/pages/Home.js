import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import cleaning2 from '../assets/cleaning2.webp';
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';
import ss1 from '../assets/ss1.webp';
import ss2 from '../assets/ss2.webp';
import ss3 from '../assets/ss3.webp';
import rr1 from '../assets/rr1.webp';
import rr2 from '../assets/rr2.webp';
import rr3 from '../assets/rr3.webp';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setNewsletterEmail('');
  };

  const handleBookNow = (service) => {
    alert(`Booking request for ${service} has been submitted!`);
  };

  const handleGetQuote = () => {
    alert('Quote request submitted! We will contact you shortly.');
  };

  useEffect(() => {
    gsap.fromTo(
      '.why-choose-text',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.why-choose-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.why-choose-images img',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.why-choose-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const services = [
    { id: 1, title: 'Office Cleaning and clearance', description: 'Professional office cleaning tailored to your schedule.', image: ss1, buttonStyle: 'outline', link: '/services/office-cleaning' },
    { id: 2, title: 'School Cleaning and clearance', description: 'Deep cleaning for a fresh start every season.', image: ss3, buttonStyle: 'filled', link: '/services/school-cleaning' },
    { id: 3, title: 'House Cleaning and clearance', description: 'Comprehensive home cleaning services.', image: ss2, buttonStyle: 'outline', link: '/services/home-cleaning' },
  ];

  const teamMembers = [
    { id: 1, name: 'Amashi', image: p1, description: 'Expert in residential cleaning.', socialLinks: [{ icon: '/images/img_instagram.svg', url: '#' }] },
    { id: 2, name: 'Sanka', image: p2, description: 'Specialist in office hygiene.', socialLinks: [{ icon: '/images/img_linkedin.svg', url: '#' }] },
    { id: 3, name: 'Sathisma', image: p3, description: 'Pro in deep cleaning.', socialLinks: [{ icon: '/images/img_behance.svg', url: '#' }] },
  ];

  const getPricingPlans = (planType) => {
    if (planType === 'monthly') {
      return [
        { id: 1, name: 'Basic Package', price: '$30.00', period: '/month', features: ['Dusting', 'Mopping'], buttonStyle: 'outline' },
        { id: 2, name: 'Standard Package', price: '$50.00', period: '/month', features: ['Dusting', 'Mopping', 'Vacuuming'], buttonStyle: 'filled', popular: true },
        { id: 3, name: 'Premium Package', price: '$80.00', period: '/month', features: ['Dusting', 'Mopping', 'Deep Clean'], buttonStyle: 'outline' },
      ];
    } else {
      return [
        { id: 1, name: 'Basic Package', price: '$300.00', period: '/year', features: ['Dusting', 'Mopping'], buttonStyle: 'outline', popular: true },
        { id: 2, name: 'Standard Package', price: '$500.00', period: '/year', features: ['Dusting', 'Mopping', 'Vacuuming'], buttonStyle: 'filled', popular: true },
        { id: 3, name: 'Premium Package', price: '$800.00', period: '/year', features: ['Dusting', 'Mopping', 'Deep Clean'], buttonStyle: 'outline' },
      ];
    }
  };

  const blogPosts = [
  {
  id: 1,
  image: rr3,
  title: 'Essential Kitchen Cleaning and clearance Tips',
  excerpt: [
    'Quick and efficient ways to clean your kitchen daily and weekly.',
    'Remove grease, grime, and stains from common surfaces.',
    'Keep your fridge and sink smelling fresh.',
    'Organize cleaning supplies for easier use.',
    'Save time with simple, effective cleaning routines.',
  ],
  author: 'Sarah M.',
  date: 'July 2025',
},
{
  id: 2,
  image: rr1,
  title: 'End-of-Tenancy Cleaning and clearance Guide',
  excerpt: [
    'Identify the key areas landlords inspect the most.',
    'Use a checklist to deep clean every room efficiently.',
    'Tips to remove tough stains from walls, floors, and appliances.',
    'Recommended cleaning products for rental properties.',
    'Maximize your chances of getting your full deposit back.',
  ],
  author: 'John B.',
  date: 'June 2025',
},
{
  id: 3,
  image: rr2,
  title: 'Eco-Friendly Cleaning and clearance Products',
  excerpt: [
    'Top eco-friendly cleaners that are safe and effective.',
    'Affordable, non-toxic products for everyday use.',
    'DIY natural solutions using vinegar, lemon, and baking soda.',
    'Benefits of switching to sustainable cleaning habits.',
    'Keep your home clean while reducing environmental impact.',
  ],
  author: 'Claire D.',
  date: 'May 2025',
}


  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      <Helmet>
        <title>  Home | Oak roots cleaning and clearance </title>
        <meta
          name="description"
          content="Oak Roots provides expert cleaning and clearance services across the UK. Affordable packages, trusted team, and guaranteed satisfaction."
        />
        <meta
          name="keywords"
          content="cleaning services UK, office cleaning, school cleaning, house cleaning, clearance services, cleaning packages"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oakrootscleaning.uk/" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Oak Roots Cleaning & Clearance UK",
            "image": "https://oakrootscleaning.uk/path-to-cleaning2.webp",
            "telephone": "+44 123 456 7890",
            "email": "info@cleanandclear.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Cleaning Street",
              "addressLocality": "London",
              "addressCountry": "UK"
            },
            "url": "https://oakrootscleaning.uk",
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://twitter.com/yourhandle",
              "https://www.instagram.com/yourhandle"
            ]
          }
          `}
        </script>
      </Helmet>

      <main className="home-container">
        {/* Hero Section */}
        <section aria-labelledby="hero-title" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <p className="hero-subtitle">Welcome to Cleaner World</p>
              <h1 id="hero-title" className="hero-title2">
                Britain's Most Trusted Cleaning & Clearance Experts
              </h1>
              <p className="hero-description">Over 20 years of excellence in cleaning and clearance solutions</p>
              <div className="hero-buttons">
                <Link to="/services" className="hero-button primary" aria-label="Book our cleaning services">
                  Book Our Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section aria-labelledby="services-title11" className="services-section">
          <div className="container">
            <h2 id="services-title11" className="section-title21">
              OUR SERVICES
            </h2>
            <div className="services-grid">
              {services.map((service) => (
                <article key={service.id} className="service-card">
                  <Link to={service.link} className="service-link" aria-label={`Learn more about ${service.title}`}>
                    <img
                      src={service.image}
                      alt={`${service.title} Service by Oak Roots UK`}
                      className="service-image"
                      loading="lazy"
                    />
                    <div className="service-details">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section aria-labelledby="why-choose-title" className="why-choose-section">
          <div className="container">
            <div className="why-choose-content">
              <div className="why-choose-text">
                <p className="why-subtitle">Why Choose Us</p>
                <h2 id="why-choose-title" className="section-title2">
                  Let Us Be the Secret Behind Your Spotless Space
                </h2>
                <p className="section-description">We're not just a service - we're your partners in peace of mind.</p>
                <ul className="benefits-list">
                  <li className="benefit-item">
                    <span className="benefit-icon" aria-hidden="true">
                      ✔
                    </span>{' '}
                    Affordable packages for all budgets
                  </li>
                  <li className="benefit-item">
                    <span className="benefit-icon" aria-hidden="true">
                      ✔
                    </span>{' '}
                    Free site surveys
                  </li>
                  <li className="benefit-item">
                    <span className="benefit-icon" aria-hidden="true">
                      ✔
                    </span>{' '}
                    After-clean performing options
                  </li>
                  <li className="benefit-item">
                    <span className="benefit-icon" aria-hidden="true">
                      ✔
                    </span>{' '}
                    100% satisfaction guaranteed
                  </li>
                  <li className="benefit-item">
                    <span className="benefit-icon" aria-hidden="true">
                      ✔
                    </span>{' '}
                    Loyalty program with discounts for regular customers & schools
                  </li>
                </ul>
                <p className="company-name">Oak Roots Cleaning & Clearance UK</p>
                <button onClick={handleGetQuote} className="cta-button" aria-label="Get a quote for cleaning services">
                
                </button>
              </div>
              <div className="why-choose-images">
                <img src={cleaning2} alt="Professional cleaning service in action" className="main-image" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section aria-labelledby="team-heading" className="team-section">
          <div className="container">
            <header className="team-header">
              <h2 id="team-heading" className="section-title1">
                Our Expert Team
              </h2>
              <p className="section-description">
                Professionals delivering exceptional cleaning and clearance services across the UK
              </p>
            </header>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.id}
                  className="team-card"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  aria-labelledby={`team-member-${member.id}`}
                  tabIndex={0}
                >
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="team-image"
                    loading="lazy"
                  />
                  <div className="team-details">
                    <h3 id={`team-member-${member.id}`} className="team-name">
                      {member.name}
                    </h3>
                    <p className="team-description">{member.description}</p>
                    <nav className="social-links" aria-label={`Social media links for ${member.name}`}>
                      {member.socialLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${member.name}'s ${
                            link.icon.includes('linkedin')
                              ? 'LinkedIn'
                              : link.icon.includes('instagram')
                              ? 'Instagram'
                              : link.icon.includes('behance')
                              ? 'Behance'
                              : 'social'
                          } profile`}
                        >
                          <img src={link.icon} alt="" className="social-icon" />
                        </a>
                      ))}
                    </nav>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section aria-labelledby="pricing-title" className="pricing-section">
          <div className="pricing-overlay"></div>
          <div className="container">
            <header className="pricing-header">
              <p className="pricing-subtitle">Our Plans</p>
              <h2 id="pricing-title" className="section-title4">
                Choose Your Plan
              </h2>
              <div className="plan-toggle" role="tablist" aria-label="Pricing plan toggle">
                <button
                  role="tab"
                  aria-selected={selectedPlan === 'monthly'}
                  aria-controls="monthly-plan-panel"
                  id="monthly-plan-tab"
                  onClick={() => setSelectedPlan('monthly')}
                  className={`toggle-button ${selectedPlan === 'monthly' ? 'active' : ''}`}
                >
                  Monthly
                </button>
                <button
                  role="tab"
                  aria-selected={selectedPlan === 'yearly'}
                  aria-controls="yearly-plan-panel"
                  id="yearly-plan-tab"
                  onClick={() => setSelectedPlan('yearly')}
                  className={`toggle-button ${selectedPlan === 'yearly' ? 'active' : ''}`}
                >
                  Yearly
                </button>
              </div>
            </header>
            <div
              className="pricing-grid"
              role="tabpanel"
              id={`${selectedPlan}-plan-panel`}
              aria-labelledby={`${selectedPlan}-plan-tab`}
            >
              {getPricingPlans(selectedPlan).map((plan) => (
                <article key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="price-container">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <ul className="features-list">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/booking"
                    className="service-button"
                    aria-label={`Book now for ${plan.name} cleaning plan`}
                    onClick={() => handleBookNow(plan.name)}
                  >
                    Book Now
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
<section aria-labelledby="blog-title" className="blog-section">
  <div className="container">
    <motion.header
      className="blog-header"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 id="blog-title" className="section-title">
        Latest Cleaning and clearance Tips
      </h2>
      <p className="section-description">Stay updated with expert advice</p>
    </motion.header>

    <div className="blog-grid">
      {blogPosts.map((post, index) => (
        <motion.article
          key={post.id}
          className="blog-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
          tabIndex={0}
          aria-labelledby={`blog-post-title-${post.id}`}
        >
          <img
            src={post.image}
            alt={post.title}
            className="blog-image"
            loading="lazy"
          />
          <div className="blog-details">
            <p className="blog-meta">
              {post.author} | {post.date}
            </p>
            <h3 id={`blog-post-title-${post.id}`} className="blog-title">
              {post.title}
            </h3>

            {/* Render excerpt as list or paragraph */}
            {Array.isArray(post.excerpt) ? (
              <ul className="blog-excerpt">
                {post.excerpt.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="blog-excerpt">{post.excerpt}</p>
            )}
          </div>
        </motion.article>
      ))}
    </div>
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
      </main>
    </>
  );
};

export default Home;
