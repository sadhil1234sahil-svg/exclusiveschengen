import { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, PhoneCall, MessageSquare } from 'lucide-react';
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
    { label: 'Home', target: '#hero-section' },
    { label: 'Services', target: '#services-section' },
    { label: 'Countries', target: '#countries-section' },
    { label: 'Process', target: '#process-section' },
    { label: 'Reviews', target: '#reviews-section' },
    { label: 'Contact', target: '#contact-section' }
  ];

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(target);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=+971558443362&text=Hello+The+Schengen%2C+I+need+Schengen+appointment+help.&type=phone_number&app_absent=0";
  const phoneUrl = "tel:+971558443362";

  return (
    <nav className={`navbar glass-panel ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero-section" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#hero-section')}>
          <ShieldCheck className="logo-icon" />
          <span className="logo-text">
            EXCLUSIVE<span className="logo-sub">SCHENGEN</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="navbar-menu-desktop">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={item.target}
              className="nav-link"
              onClick={(e) => handleLinkClick(e, item.target)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side CTAs */}
        <div className="navbar-ctas-desktop">
          <a href={phoneUrl} className="navbar-phone-link">
            <span>📞 Call Now: +971 55 844 3362</span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar-wa-btn">
            <MessageSquare size={14} fill="currentColor" />
            <span>WhatsApp</span>
          </a>
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
              <a
                key={item.target}
                href={item.target}
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, item.target)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="mobile-ctas-wrapper">
              <a href={phoneUrl} className="mobile-phone-cta">
                📞 Call Now: +971 55 844 3362
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mobile-cta-btn"
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare size={16} fill="currentColor" />
                <span>💬 WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
