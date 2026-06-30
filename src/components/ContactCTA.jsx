import { Phone, MessageSquare } from 'lucide-react';
import './ContactCTA.css';

export default function ContactCTA() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=+971558443362&text=Hello+The+Schengen%2C+I+need+Schengen+appointment+help.&type=phone_number&app_absent=0";
  const phoneUrl = "tel:+971558443362";

  return (
    <div className="contact-cta-wrapper container">
      <div className="glass-panel contact-cta-card">
        <div className="contact-cta-text">
          <h3>Planning Your Europe Trip?</h3>
          <p>Speak with our consultants today. Receive professional guidance before you begin your application process.</p>
        </div>
        <div className="contact-cta-buttons">
          <a href={phoneUrl} className="btn btn-primary cta-call-btn">
            <Phone size={16} fill="currentColor" />
            <span>Call +971 55 844 3362</span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary cta-wa-btn">
            <MessageSquare size={16} fill="currentColor" className="wa-icon-color" />
            <span>WhatsApp Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
