import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Compass, Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Eligibility', path: '/eligibility' },
    { label: 'VIP Packages', path: '/packages' },
    { label: 'Destinations', path: '/destinations' }
  ];

  return (
    <nav className={`navbar glass-panel ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <ShieldCheck className="logo-icon" />
          <span className="logo-text">
            EXCLUSIVE<span className="logo-sub">SCHENGEN</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu-desktop">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/packages" className="btn btn-primary btn-sm-cta">
            <PhoneCall size={16} />
            <span>Book Priority Call</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="navbar-menu-mobile glass-panel">
          <div className="container mobile-container">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/packages"
              className="btn btn-primary mobile-cta-btn"
              onClick={() => setIsOpen(false)}
            >
              <PhoneCall size={18} />
              <span>Book Priority Call</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
