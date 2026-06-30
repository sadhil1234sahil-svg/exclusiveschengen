import { Phone, MessageSquare } from 'lucide-react';
import './FloatingActions.css';

export default function FloatingActions() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=+971558443362&text=Hello+The+Schengen%2C+I+need+Schengen+appointment+help.&type=phone_number&app_absent=0";
  const phoneUrl = "tel:+971558443362";

  return (
    <div className="floating-actions-container">
      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn float-whatsapp"
        title="Need Appointment Help? Chat with an Expert"
      >
        <MessageSquare size={20} fill="currentColor" />
        <span className="float-btn-text">Need Appointment Help? Chat with an Expert</span>
      </a>

      {/* Phone Button */}
      <a 
        href={phoneUrl} 
        className="floating-btn float-call"
        title="Call Support Now"
      >
        <Phone size={20} fill="currentColor" />
        <span className="float-btn-text-short">Call Now</span>
      </a>
    </div>
  );
}
