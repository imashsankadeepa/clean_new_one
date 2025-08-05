import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/Logo3.webp';
import './nav.css';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close on route change
  }, [location]);

  return (
    <header>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="nav-container">
          {/* Logo link to homepage */}
          <Link to="/" className="logo1" aria-label="Oak Roots Cleaning Home">
            <img
              src={logo}
              alt="Oak Roots Cleaning & Clearance Logo"
              className="logo-img"
              loading="lazy"
              width="120"
              height="auto"
            />
          </Link>

          {/* Main navigation links */}
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/services" className="nav-link">Our Services</Link></li>
            <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
            <li><Link to="/about" className="nav-link">About Oak Roots</Link></li>
          </ul>

          {/* Mobile menu toggle */}
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
