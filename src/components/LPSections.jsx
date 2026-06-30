import { useState } from 'react';
import { 
  ShieldCheck, HelpCircle, Check, MapPin, ClipboardList, 
  BookOpen, Star, Calendar, FileText, Briefcase, Phone, MessageSquare, ChevronDown, ChevronUp 
} from 'lucide-react';
import './LPSections.css';

// 1. Trust Section
export function Trust() {
  const checkmarks = [
    "Experienced Schengen Consultants",
    "Appointment Booking Assistance",
    "Complete Documentation Review",
    "Travel Insurance Guidance",
    "Application Form Assistance",
    "Cover Letter Support",
    "Flight & Hotel Reservation Guidance",
    "Fast Response",
    "UAE Based Support",
    "Dedicated Customer Assistance"
  ];

  return (
    <section id="trust-section" className="trust-features-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Why Choose Us</span>
          <h2 className="section-title">Why Choose Exclusive Schengen?</h2>
          <p className="section-subtitle">We deliver unmatched quality and support for your Schengen application prep.</p>
        </div>

        <div className="trust-grid">
          {checkmarks.map((item, idx) => (
            <div key={idx} className="trust-list-item animate-fade-in-up">
              <div className="checkmark-circle">
                <Check size={16} />
              </div>
              <span className="checkmark-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. Services Section
export function Services() {
  const servicesList = [
    {
      title: "Appointment Assistance",
      desc: "Helping you secure appointment slots efficiently.",
      icon: <Calendar size={22} className="srv-icon" />
    },
    {
      title: "Documentation Support",
      desc: "Ensuring every required document is properly prepared before submission.",
      icon: <ClipboardList size={22} className="srv-icon" />
    },
    {
      title: "Application Preparation",
      desc: "Complete guidance for forms, supporting documents, and requirements.",
      icon: <FileText size={22} className="srv-icon" />
    },
    {
      title: "Travel Itinerary Guidance",
      desc: "Support for hotel bookings, flight reservations, and travel planning.",
      icon: <MapPin size={22} className="srv-icon" />
    },
    {
      title: "Travel Insurance",
      desc: "Guidance in choosing suitable travel insurance for Schengen requirements.",
      icon: <ShieldCheck size={22} className="srv-icon" />
    },
    {
      title: "Business Travel Assistance",
      desc: "Professional support for business travellers attending meetings, exhibitions, conferences, and events.",
      icon: <Briefcase size={22} className="srv-icon" />
    },
    {
      title: "Family Visit Assistance",
      desc: "Helping applicants travelling to visit family or relatives.",
      icon: <BookOpen size={22} className="srv-icon" />
    },
    {
      title: "Tourist Travel Support",
      desc: "Making holiday planning simple with professional consultancy.",
      icon: <Star size={22} className="srv-icon" />
    }
  ];

  return (
    <section id="services-section" className="services-section-lp section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Consultancy Services</span>
          <h2 className="section-title">Complete Schengen Travel Consultancy</h2>
          <p className="section-subtitle">Comprehensive guidance tailored to your specific travel profile.</p>
        </div>

        <div className="services-grid-lp">
          {servicesList.map((srv, idx) => (
            <div key={idx} className="glass-card srv-card animate-fade-in-up">
              <div className="srv-icon-container">{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. Countries Section
export function Countries() {
  const list = [
    "Austria", "Belgium", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", 
    "France", "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Liechtenstein", 
    "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", 
    "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland"
  ];

  return (
    <section id="countries-section" className="countries-section-lp section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Countries Supported</span>
          <h2 className="section-title">Schengen Countries We Assist For</h2>
          <p className="section-subtitle">
            We provide consultancy and appointment assistance for travel to all Schengen member countries.
          </p>
        </div>

        <div className="countries-badges-grid">
          {list.map((country) => (
            <div key={country} className="country-badge-card">
              <span className="gold-dot">•</span>
              <span className="country-name-txt">{country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. Process Section
export function Process() {
  const steps = [
    { num: "01", title: "Contact Our Consultant", desc: "Reach out to us via call, form, or WhatsApp." },
    { num: "02", title: "Eligibility Discussion", desc: "Verify travel eligibility and visa parameters." },
    { num: "03", title: "Document Preparation", desc: "Format, pre-check, and review travel files." },
    { num: "04", title: "Appointment Booking", desc: "Secure slot queues with target consulates." },
    { num: "05", title: "Application Submission", desc: "Submit finalized dossiers on scheduled dates." }
  ];

  const phoneUrl = "tel:+971558443362";

  return (
    <section id="process-section" className="process-section-lp section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Redefined Workflow</span>
          <h2 className="section-title">Simple 5-Step Process</h2>
          <p className="section-subtitle">How we guide your travel setup from start to finish.</p>
        </div>

        <div className="process-timeline">
          {steps.map((st, idx) => (
            <div key={idx} className="timeline-step">
              <div className="step-number-wrap">
                <span className="step-num-txt">{st.num}</span>
              </div>
              <div className="step-info-card glass-card">
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-sub-cta text-center">
          <a href={phoneUrl} className="process-phone-banner">
            📞 Need Help? Call +971 55 844 3362
          </a>
        </div>
      </div>
    </section>
  );
}

// 5. Why People Trust Us (Trust Description)
export function TrustDescription() {
  return (
    <section className="why-trust-description section-padding">
      <div className="container trust-desc-container glass-card">
        <div className="trust-desc-content">
          <span className="badge">Tailored Support</span>
          <h2>Personalized Assistance from Start to Finish</h2>
          <h3>Every traveller has different requirements.</h3>
          <p>
            Our consultants provide personalized guidance based on your travel plans, ensuring that your 
            documentation is complete and your application is properly prepared before submission.
          </p>
          <p>
            We focus on accuracy, transparency, and timely communication throughout the entire process.
          </p>
        </div>
      </div>
    </section>
  );
}

// 6. FAQ Section
export function FAQ() {
  const faqs = [
    {
      q: "How long does the process take?",
      a: "Timelines depend on appointment availability and destination country."
    },
    {
      q: "Can you help with documentation?",
      a: "Yes. We review and guide you through all required documentation."
    },
    {
      q: "Do you assist with appointment booking?",
      a: "Yes, appointment booking is one of our primary consultancy services."
    },
    {
      q: "Can you help with travel insurance?",
      a: "Yes. We guide you in obtaining suitable travel insurance."
    },
    {
      q: "Which countries do you support?",
      a: "We provide consultancy for all Schengen member countries."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="faq-section-lp section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Common Inquiries</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Answers to standard questions regarding Schengen consultancy.</p>
        </div>

        <div className="faq-accordion-wrapper">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item-card glass-panel ${isOpen ? 'active' : ''}`}>
                <button className="faq-question-btn" onClick={() => toggleFAQ(idx)}>
                  <div className="faq-q-text">
                    <HelpCircle size={18} className="faq-q-icon" />
                    <span>{faq.q}</span>
                  </div>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {isOpen && (
                  <div className="faq-answer-panel animate-fade-in-up">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 7. Customer Reviews Section
export function Reviews() {
  const reviewsList = [
    {
      stars: 5,
      comment: "Professional service from beginning to end.",
      author: "A. K."
    },
    {
      stars: 5,
      comment: "Appointment booking was smooth and documentation guidance was excellent.",
      author: "M. R."
    },
    {
      stars: 5,
      comment: "Very responsive team. Highly recommended.",
      author: "S. H."
    }
  ];

  return (
    <section id="reviews-section" className="reviews-section-lp section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Reviews & Feedback</span>
          <h2 className="section-title">Customer Reviews</h2>
          <p className="section-subtitle">Hear from travelers who completed their Schengen consultancies with us.</p>
        </div>

        <div className="reviews-grid-lp">
          {reviewsList.map((rev, idx) => (
            <div key={idx} className="glass-card review-card-item text-center">
              <div className="review-stars">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>
              <p className="review-txt">"{rev.comment}"</p>
              <span className="review-author">- {rev.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8. Contact Section
export function Contact() {
  const phoneUrl = "tel:+971558443362";
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=+971558443362&text=Hello+The+Schengen%2C+I+need+Schengen+appointment+help.&type=phone_number&app_absent=0";

  return (
    <section id="contact-section" className="contact-details-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Get in Touch</span>
          <h2 className="section-title">Contact Exclusive Schengen</h2>
          <p className="section-subtitle">Reach our support desks directly for fast consultancies.</p>
        </div>

        <div className="contact-details-grid">
          {/* Phone Card */}
          <div className="glass-card contact-detail-card text-center">
            <Phone size={24} className="detail-icon" />
            <h3>Phone</h3>
            <a href={phoneUrl} className="detail-value-link">+971 55 844 3362</a>
          </div>

          {/* WhatsApp Card */}
          <div className="glass-card contact-detail-card text-center">
            <MessageSquare size={24} className="detail-icon wa-icon-style" />
            <h3>WhatsApp</h3>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="detail-value-link wa-icon-style">+971 55 844 3362</a>
          </div>

          {/* Email Card */}
          <div className="glass-card contact-detail-card text-center">
            <Mail size={24} className="detail-icon" />
            <h3>Email</h3>
            <a href="mailto:info@exclusiveschengen.com" className="detail-value-link">info@exclusiveschengen.com</a>
          </div>

          {/* Hours Card */}
          <div className="glass-card contact-detail-card text-center">
            <Clock size={24} className="detail-icon" />
            <h3>Business Hours</h3>
            <p className="detail-value-txt">Monday – Saturday</p>
            <p className="detail-value-txt-sub">9:00 AM – 7:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
