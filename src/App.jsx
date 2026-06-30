import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EligibilityWizard from './components/EligibilityWizard';
import Packages from './components/Packages';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import { Shield, Sparkles, CheckCircle2, ChevronRight, UserCheck } from 'lucide-react';
import './App.css';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Home page layout
function Home() {
  return (
    <>
      <Hero />

      {/* Trust badging section */}
      <section className="trust-section">
        <div className="container trust-container glass-card">
          <div className="trust-item">
            <span className="trust-stat">99.8%</span>
            <span className="trust-text">Application Approval Rate</span>
          </div>
          <div className="divider-line"></div>
          <div className="trust-item">
            <span className="trust-stat">12k+</span>
            <span className="trust-text">Visas Secured Since 2018</span>
          </div>
          <div className="divider-line"></div>
          <div className="trust-item">
            <span className="trust-stat">7 Days</span>
            <span className="trust-text">Average Priority Slot Secured</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us features */}
      <section className="features-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Why Choose ExclusiveSchengen</span>
            <h2 className="section-title">The Standard of VVIP Service</h2>
            <p className="section-subtitle">
              We replace standard visa processing confusion with a refined, hands-off experience.
            </p>
          </div>

          <div className="features-grid">
            <div className="glass-card feature-card">
              <div className="feature-icon-wrapper">
                <Sparkles className="feature-card-icon" />
              </div>
              <h3>Guaranteed Priority Booking</h3>
              <p>
                We maintain real-time connections to consulate slots and TLS/VFS networks, securing urgent booking appointments within 7 days.
              </p>
            </div>

            <div className="glass-card feature-card">
              <div className="feature-icon-wrapper">
                <Shield className="feature-card-icon" />
              </div>
              <h3>Senior Legal Pre-Check</h3>
              <p>
                Every application dossier is analyzed by our senior documentation officers before submission to prevent spelling errors, financial mismatches, or missing details.
              </p>
            </div>

            <div className="glass-card feature-card">
              <div className="feature-icon-wrapper">
                <UserCheck className="feature-card-icon" />
              </div>
              <h3>Doorstep Biometrics Dispatch</h3>
              <p>
                For our Platinum clients, we coordinate personal biometric collection agents dispatched directly to your office or private residence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTAs */}
      <section className="cta-banner-section section-padding">
        <div className="container">
          <div className="glass-card cta-banner">
            <div className="cta-banner-bg-grid"></div>
            <div className="cta-content">
              <h2>Ready to Fast-Track Your European Travel?</h2>
              <p>
                Get your custom document checklist and check slot availability in less than 3 minutes with our AI Assessment Engine.
              </p>
              <div className="cta-buttons">
                <a href="/eligibility" className="btn btn-primary btn-lg">
                  Check Eligibility Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Background Decorative Layout Elements */}
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eligibility" element={<EligibilityWizard />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
