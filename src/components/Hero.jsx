import { Link } from 'react-router-dom';
import { ShieldCheck, CalendarRange, Star, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Heading and CTAs */}
        <div className="hero-content">
          <div className="badge animate-fade-in-up">
            <ShieldCheck size={14} />
            <span>VVIP Schengen Visa Concierge</span>
          </div>
          
          <h1 className="hero-title animate-fade-in-up">
            Unlock Seamless Entry To <span className="text-gold-gradient">Europe</span>
          </h1>
          
          <p className="hero-description animate-fade-in-up">
            Avoid wait times, scheduling hurdles, and application rejections. We handle bookings, 
            document pre-check, and personal visa assistance for a flawless approval.
          </p>
          
          <div className="hero-actions animate-fade-in-up">
            <Link to="/eligibility" className="btn btn-primary btn-lg">
              <span>Check Eligibility</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="btn btn-secondary btn-lg">
              <CalendarRange size={18} />
              <span>Explore VIP Packages</span>
            </Link>
          </div>

          {/* Value Stats */}
          <div className="hero-stats animate-fade-in-up">
            <div className="stat-item">
              <span className="stat-number">99.8%</span>
              <span className="stat-label">Approval Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">7-Days</span>
              <span className="stat-label">Avg. Fast-Track</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Appointment Guarantee</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="hero-visual animate-fade-in-up">
          <div className="image-wrapper">
            <div className="glow-backdrop"></div>
            <img 
              src="/luxury_schengen_hero.png" 
              alt="Exclusive Schengen Visa Concierge Service" 
              className="hero-image"
            />
            {/* Visual Glass Tag */}
            <div className="glass-tag">
              <div className="star-rating">
                <Star size={16} fill="var(--primary)" color="var(--primary)" />
                <Star size={16} fill="var(--primary)" color="var(--primary)" />
                <Star size={16} fill="var(--primary)" color="var(--primary)" />
                <Star size={16} fill="var(--primary)" color="var(--primary)" />
                <Star size={16} fill="var(--primary)" color="var(--primary)" />
              </div>
              <p className="tag-text">Elite Level Service Trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
