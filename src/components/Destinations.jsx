import { useState } from 'react';
import { PlaneTakeoff, Clock, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import './Destinations.css';

export default function Destinations() {
  const [activeTab, setActiveTab] = useState(0);

  const countries = [
    {
      name: 'France',
      capital: 'Paris',
      tag: 'Most Popular',
      wait: '5 - 10 Days',
      processing: '7 - 12 Days',
      acceptance: '98.5%',
      alert: 'Requires detailed daily itinerary details and standard flight reservations.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
      tips: [
        'Easiest appointment queues to secure during tourist seasons.',
        'Accepts biometric appointments through standard VFS Global centers.',
        'High multi-entry visa approval likelihood for business owners.'
      ]
    },
    {
      name: 'Switzerland',
      capital: 'Bern',
      tag: 'Premium Travel',
      wait: '15 - 20 Days',
      processing: '5 - 8 Days',
      acceptance: '99.1%',
      alert: 'Demands direct financial backing and strict insurance guidelines (min €30,000).',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80',
      tips: [
        'Shortest processing wait time once application is submitted.',
        'Flawless tracking via digital dashboard.',
        'Highly recommended for high-net-worth individuals and corporate managers.'
      ]
    },
    {
      name: 'Italy',
      capital: 'Rome',
      tag: 'Rich Culture',
      wait: '12 - 18 Days',
      processing: '10 - 15 Days',
      acceptance: '96.8%',
      alert: 'Must show precise internal travel confirmations between Italian cities.',
      image: 'https://images.unsplash.com/photo-1529260830199-445821ec2402?auto=format&fit=crop&w=600&q=80',
      tips: [
        'Highly popular destination, requiring booking 30 days in advance.',
        'Accepts strong sponsor relationships for family visits.',
        'Strict on verifying return flights matching hotel bookings.'
      ]
    },
    {
      name: 'Germany',
      capital: 'Berlin',
      tag: 'Strict Audit',
      wait: '25 - 35 Days',
      processing: '10 - 14 Days',
      acceptance: '97.2%',
      alert: 'No hand-written corrections allowed on forms. Requires exact salary bank deposits.',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
      tips: [
        'Requires exact NOC (No Objection Certificate) from employers.',
        'Strong requirement for detailed employment history check.',
        'Exceptional record-keeping recommended before biometrics.'
      ]
    },
    {
      name: 'Spain',
      capital: 'Madrid',
      tag: 'Warm Climates',
      wait: '8 - 14 Days',
      processing: '8 - 12 Days',
      acceptance: '97.6%',
      alert: 'Proof of clean legal background and asset verification is recommended for long stays.',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80',
      tips: [
        'Offers flexible appointment queues through multiple consulates.',
        'High rate of multiple entry grants for frequent flyers.',
        'Allows combined itinerary with Portugal without extra bookings.'
      ]
    }
  ];

  return (
    <section className="destinations-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge">Schengen Destinations</span>
          <h2 className="section-title">Popular Schengen States</h2>
          <p className="section-subtitle">
            Explore typical appointment wait queues, approval rates, and specific local requirements.
          </p>
        </div>

        {/* Tabbed Interactive Controller */}
        <div className="destinations-layout">
          
          {/* Left Column: Navigation Tabs */}
          <div className="destinations-nav">
            {countries.map((country, idx) => (
              <button
                key={country.name}
                className={`dest-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <div className="tab-btn-content">
                  <span className="country-title">{country.name}</span>
                  <span className="country-sub">{country.capital}</span>
                </div>
                {country.tag && <span className="tab-pill">{country.tag}</span>}
              </button>
            ))}
          </div>

          {/* Right Column: Country Focus Showcase */}
          <div className="destinations-display">
            <div className="glass-card dest-showcase-card animate-fade-in-up">
              
              <div className="showcase-header">
                <div className="showcase-title-area">
                  <h3 className="showcase-name">{countries[activeTab].name}</h3>
                  <span className="showcase-capital">Official Capital: {countries[activeTab].capital}</span>
                </div>
                <div className="badge">
                  <PlaneTakeoff size={14} />
                  <span>Schengen Zone</span>
                </div>
              </div>

              {/* Data Grid */}
              <div className="showcase-stats-grid">
                <div className="showcase-stat-box">
                  <Clock className="box-icon" />
                  <div className="box-text">
                    <span className="box-val">{countries[activeTab].wait}</span>
                    <span className="box-lbl">Appointment Wait Time</span>
                  </div>
                </div>

                <div className="showcase-stat-box">
                  <Clock className="box-icon" />
                  <div className="box-text">
                    <span className="box-val">{countries[activeTab].processing}</span>
                    <span className="box-lbl">Visa Processing Time</span>
                  </div>
                </div>

                <div className="showcase-stat-box">
                  <CheckCircle2 className="box-icon success-color" />
                  <div className="box-text">
                    <span className="box-val">{countries[activeTab].acceptance}</span>
                    <span className="box-lbl">Schengen Approval Rate</span>
                  </div>
                </div>
              </div>

              {/* Critical Alert Warning */}
              <div className="showcase-alert">
                <ShieldAlert className="alert-icon" />
                <p className="alert-text">
                  <strong>Critical Requirement:</strong> {countries[activeTab].alert}
                </p>
              </div>

              {/* Actionable Profile Tips */}
              <div className="showcase-tips">
                <h4>VVIP Strategic Recommendations:</h4>
                <ul className="tips-list">
                  {countries[activeTab].tips.map((tip, index) => (
                    <li key={index} className="tip-item">
                      <ArrowRight size={14} className="tip-arrow" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
