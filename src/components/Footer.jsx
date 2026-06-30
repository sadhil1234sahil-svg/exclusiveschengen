import { ShieldCheck, Mail, Phone, Clock, Award, CheckSquare, Heart, MessageSquare } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=+971558443362&text=Hello+The+Schengen%2C+I+need+Schengen+appointment+help.&type=phone_number&app_absent=0";
  const phoneUrl = "tel:+971558443362";

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const offset = 80;
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

  return (
    <footer className="app-footer">
      <div className="container footer-container">
        
        {/* Brand Information */}
        <div className="footer-brand">
          <a href="#hero-section" className="footer-logo" onClick={(e) => handleLinkClick(e, '#hero-section')}>
            <ShieldCheck className="logo-icon" />
            <span className="logo-text">
              EXCLUSIVE<span className="logo-sub">SCHENGEN</span>
            </span>
          </a>
          <p className="brand-description">
            Professional Schengen consultancy services for UAE residents. We handle slot bookings, 
            documentation reviews, and application setups for a stress-free travel path.
          </p>
          <div className="trust-badges">
            <div className="trust-badge-item">
              <Award size={14} className="trust-icon" />
              <span>Expert Guidance</span>
            </div>
            <div className="trust-badge-item">
              <CheckSquare size={14} className="trust-icon" />
              <span>High Acceptance</span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#hero-section" onClick={(e) => handleLinkClick(e, '#hero-section')}>Home</a></li>
            <li><a href="#services-section" onClick={(e) => handleLinkClick(e, '#services-section')}>Services</a></li>
            <li><a href="#countries-section" onClick={(e) => handleLinkClick(e, '#countries-section')}>Countries</a></li>
            <li><a href="#faq-section" onClick={(e) => handleLinkClick(e, '#faq-section')}>FAQ</a></li>
            <li><a href="#contact-section" onClick={(e) => handleLinkClick(e, '#contact-section')}>Contact</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="footer-links-col">
          <h4>Legal Pages</h4>
          <ul className="footer-links">
            <li><a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
            <li><a href="#terms" onClick={(e) => e.preventDefault()}>Terms & Conditions</a></li>
            <li><a href="#disclaimer" onClick={(e) => e.preventDefault()}>Service Disclaimer</a></li>
          </ul>
        </div>

        {/* Contact and Business Hours Column */}
        <div className="footer-contact-info">
          <h4>Contact Information</h4>
          <ul className="footer-contact-list">
            <li>
              <Phone size={14} className="contact-icon" />
              <a href={phoneUrl} className="contact-link">Call: +971 55 844 3362</a>
            </li>
            <li>
              <MessageSquare size={14} className="contact-icon wa-icon-style" />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-link wa-icon-style">WhatsApp: +971 55 844 3362</a>
            </li>
            <li>
              <Mail size={14} className="contact-icon" />
              <a href="mailto:info@exclusiveschengen.com" className="contact-link">info@exclusiveschengen.com</a>
            </li>
            <li className="hours-item">
              <Clock size={14} className="contact-icon" />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Base */}
      <div className="footer-base">
        <div className="container base-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} Exclusive Schengen. All rights reserved.
          </p>
          <p className="credits-text">
            Designed for seamless travel consultancies.
          </p>
        </div>
      </div>
    </footer>
  );
}
