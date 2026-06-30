import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Send, Award, CheckSquare, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="app-footer">
      <div className="container footer-container">
        
        {/* Brand Information */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <ShieldCheck className="logo-icon" />
            <span className="logo-text">
              EXCLUSIVE<span className="logo-sub">SCHENGEN</span>
            </span>
          </Link>
          <p className="brand-description">
            The world's premier Schengen visa agency. We provide white-glove application processing, 
            exclusive appointment securing, and legal coverage for elite global citizens.
          </p>
          <div className="trust-badges">
            <div className="trust-badge-item">
              <Award size={14} className="trust-icon" />
              <span>Registered Agency</span>
            </div>
            <div className="trust-badge-item">
              <CheckSquare size={14} className="trust-icon" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links-col">
          <h4>VVIP Services</h4>
          <ul className="footer-links">
            <li><Link to="/">Home Portal</Link></li>
            <li><Link to="/eligibility">Eligibility Check</Link></li>
            <li><Link to="/packages">Concierge Plans</Link></li>
            <li><Link to="/destinations">Schengen Destinations</Link></li>
          </ul>
        </div>

        {/* Legal Links Column */}
        <div className="footer-links-col">
          <h4>Legal Information</h4>
          <ul className="footer-links">
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/privacy">Privacy Guarantee</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>
            <li><Link to="/disclaimer">Legal Disclaimer</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup Column */}
        <div className="footer-newsletter">
          <h4>VVIP Travel Briefing</h4>
          <p className="newsletter-description">
            Receive exclusive notifications when urgent slot appointments open or visa rule changes occur.
          </p>
          
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="newsletter-input-wrapper">
                <Mail size={16} className="mail-icon" />
                <input 
                  type="email" 
                  required 
                  placeholder="VVIP Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-icon-only" aria-label="Subscribe">
                <Send size={14} />
              </button>
            </form>
          ) : (
            <div className="newsletter-success animate-fade-in-up">
              <ShieldCheck size={16} className="success-icon" />
              <span>Subscription Activated</span>
            </div>
          )}
        </div>

      </div>

      {/* Footer Base Copy */}
      <div className="footer-base">
        <div className="container base-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} Exclusive Schengen. All rights reserved.
          </p>
          <p className="credits-text">
            Made with <Heart size={10} className="heart-icon" /> for elite travelers.
          </p>
        </div>
      </div>
    </footer>
  );
}
