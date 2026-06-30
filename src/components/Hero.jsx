import { Phone, MessageSquare, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=+971558443362&text=Hello+The+Schengen%2C+I+need+Schengen+appointment+help.&type=phone_number&app_absent=0";
  const phoneUrl = "tel:+971558443362";

  const handleConsultationClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#lead-form-section');
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
    <section id="hero-section" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Heading and CTAs */}
        <div className="hero-content">
          <div className="badge animate-fade-in-up">
            <ShieldCheck size={14} />
            <span>Schengen Appointment Consultancy</span>
          </div>
          
          <h1 className="hero-title animate-fade-in-up">
            Get Your Schengen Appointment with <span className="text-gold-gradient">Expert Guidance</span>
          </h1>

          <h2 className="hero-subtitle-lp animate-fade-in-up">
            Professional Schengen Consultancy for UAE Residents
          </h2>
          
          <div className="hero-description animate-fade-in-up">
            <p>
              We simplify your journey with complete guidance for appointments, travel documentation, 
              application preparation, and submission support. Our experienced consultants help reduce delays, 
              avoid common mistakes, and make your travel planning smooth and stress-free.
            </p>
            <p>
              Whether you're travelling for tourism, business, family visits, or special occasions, 
              our team is here to assist every step of the way.
            </p>
          </div>
          
          <div className="hero-actions animate-fade-in-up">
            <a href="#lead-form-section" className="btn btn-primary btn-lg" onClick={handleConsultationClick}>
              <span>✅ Book Free Consultation</span>
              <ArrowRight size={16} />
            </a>
            <a href={phoneUrl} className="btn btn-secondary btn-lg">
              <Phone size={16} fill="currentColor" />
              <span>📞 Call +971 55 844 3362</span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg cta-wa-hero">
              <MessageSquare size={16} fill="currentColor" />
              <span>💬 Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="hero-visual animate-fade-in-up">
          <div className="image-wrapper">
            <div className="glow-backdrop"></div>
            <img 
              src="/luxury_schengen_hero.png" 
              alt="Professional Schengen Visa Consultancy UAE" 
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
              <p className="tag-text">UAE Resident Rated 4.9/5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
