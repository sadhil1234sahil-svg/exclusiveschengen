import { useState } from 'react';
import { ShieldCheck, Check, Sparkles, X, Send, CalendarRange } from 'lucide-react';
import './Packages.css';

export default function Packages() {
  const [currency, setCurrency] = useState('EUR'); // EUR or USD
  const [selectedPlan, setSelectedPlan] = useState(null); // Selected plan for modal
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', phone: '', note: '' });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const rates = { EUR: 1, USD: 1.08 }; // Conversion rate
  const symbol = { EUR: '€', USD: '$' };

  const plans = [
    {
      name: 'Essential Silver',
      price: 490,
      description: 'Full document pre-check and professional visa application package assembly.',
      features: [
        'Document review by senior officers',
        'Custom visa Cover Letter draft',
        'Appointment booking routing support',
        'Flight & hotel itinerary reservations',
        '24/7 Email assistance'
      ],
      popular: false
    },
    {
      name: 'Priority Gold',
      price: 950,
      description: 'Complete hands-free Schengen visa booking with priority fast-track appointment slot securing.',
      features: [
        'Everything in Silver included',
        'Priority appointment slot booked (within 7 days)',
        'VFS/TLS Premium Lounge access voucher',
        'Premium Travel Insurance documentation',
        'Flawless financial file formatting',
        'Dedicated WhatsApp concierge manager'
      ],
      popular: true
    },
    {
      name: 'Elite VVIP Platinum',
      price: 1850,
      description: 'Exclusive white-glove service including desktop biometric setup and personal dispatch managers.',
      features: [
        'Everything in Gold included',
        'Personal document agent dispatched to home/office',
        'Mobile biometric appointment option (where available)',
        'VVIP VIP Terminal assistance at departure',
        'Priority processing escalations & visa appeals cover',
        'Unlimited cancellations/re-schedulings'
      ],
      popular: false
    }
  ];

  const convertPrice = (price) => {
    return Math.round(price * rates[currency]);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setBookingSubmitted(true);
    }, 1500);
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setBookingSubmitted(false);
    setBookingForm({ name: '', email: '', phone: '', note: '' });
  };

  return (
    <section id="packages-section" className="packages-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge">VVIP Pricing Packages</span>
          <h2 className="section-title">Invest in a Flawless Journey</h2>
          <p className="section-subtitle">
            Secure priority appointments, document checklists, and professional visa representation.
          </p>

          {/* Currency Toggle Interaction */}
          <div className="currency-toggle-wrapper">
            <span className="toggle-label">Select Currency:</span>
            <div className="toggle-buttons">
              <button 
                className={`toggle-btn ${currency === 'EUR' ? 'active' : ''}`}
                onClick={() => setCurrency('EUR')}
              >
                EUR (€)
              </button>
              <button 
                className={`toggle-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="packages-grid">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`glass-card plan-card ${plan.popular ? 'plan-card-popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Sparkles size={12} />
                  <span>RECOMMENDED CHOICE</span>
                </div>
              )}

              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price-wrapper">
                  <span className="plan-currency">{symbol[currency]}</span>
                  <span className="plan-price">{convertPrice(plan.price)}</span>
                  <span className="plan-period">/ visa application</span>
                </div>
                <p className="plan-desc">{plan.description}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <Check size={16} className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`btn plan-cta-btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedPlan(plan)}
              >
                Secure {plan.name} Plan
              </button>
            </div>
          ))}
        </div>

        {/* Booking Overlay Modal */}
        {selectedPlan && (
          <div className="modal-overlay">
            <div className="glass-panel modal-card animate-fade-in-up">
              
              <button className="modal-close" onClick={closeModal}>
                <X size={20} />
              </button>

              {!bookingSubmitted ? (
                <form onSubmit={handleBookingSubmit} className="modal-form">
                  <h3 className="modal-title">
                    <CalendarRange className="modal-title-icon" /> Secure Priority Slot
                  </h3>
                  <p className="modal-subtitle">
                    Requesting booking for <strong>{selectedPlan.name}</strong> package ({symbol[currency]}{convertPrice(selectedPlan.price)}).
                  </p>

                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Alexander Mercer"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. alex@corporate.com"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number (with WhatsApp)</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. +91 98765 43210"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>

                  <div className="form-group">
                    <label>Additional Notes (Preferred Travel Dates / Destination)</label>
                    <textarea 
                      placeholder="e.g. Traveling to Switzerland on Oct 15th, need urgent slot."
                      rows="3"
                      value={bookingForm.note}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, note: e.target.value }))}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary modal-submit-btn" disabled={submitting}>
                    {submitting ? (
                      <div className="spinner-small"></div>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Booking Request</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="modal-success text-center">
                  <div className="success-checkmark">
                    <ShieldCheck size={48} />
                  </div>
                  <h3 className="success-title">VVIP Concierge Requested</h3>
                  <p className="success-text">
                    Thank you, <strong>{bookingForm.name}</strong>. Your request for the <strong>{selectedPlan.name}</strong> plan is logged.
                  </p>
                  <p className="success-subtext">
                    A dedicated Schengen account manager will contact you within 2 hours on <strong>{bookingForm.phone}</strong> or via email.
                  </p>
                  <button className="btn btn-primary" onClick={closeModal}>
                    Return to Portal
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
