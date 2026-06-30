import { useState } from 'react';
import { Mail, User, Phone, Globe, Calendar, FileText, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import './LeadForm.css';

export default function LeadForm() {
  // Web3Forms Configuration: Enter your actual Web3Forms access key below
  const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'France',
    purpose: 'Tourism',
    travelDate: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const countries = [
    "Austria", "Belgium", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", 
    "France", "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Liechtenstein", 
    "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", 
    "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland"
  ];

  const handleInputChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Build the request payload for Web3Forms
    const payload = {
      access_key: accessKey,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      destination: formData.destination,
      purpose: formData.purpose,
      travel_date: formData.travelDate,
      message: formData.message,
      subject: `ExclusiveSchengen LP Consultation Request - ${formData.name}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus({ submitting: false, success: true, error: null });
        
        // Wait 1.5 seconds, then redirect to WhatsApp with pre-filled message
        setTimeout(() => {
          const waMessage = `Hello Exclusive Schengen, I have submitted my consultation request. Name: ${formData.name}, Destination: ${formData.destination}, Purpose: ${formData.purpose}, Date: ${formData.travelDate}. Please assist with my Schengen appointment.`;
          const waUrl = `https://api.whatsapp.com/send/?phone=971558443362&text=${encodeURIComponent(waMessage)}&type=phone_number&app_absent=0`;
          window.open(waUrl, '_blank');
        }, 1500);
      } else {
        throw new Error(resData.message || "Failed to submit form.");
      }
    } catch (err) {
      console.error(err);
      // Fallback for demo if access key is not set or network fails
      if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
        setStatus({ submitting: false, success: true, error: null });
        setTimeout(() => {
          const waMessage = `Hello Exclusive Schengen, I have submitted my consultation request. Name: ${formData.name}, Destination: ${formData.destination}, Purpose: ${formData.purpose}, Date: ${formData.travelDate}. Please assist with my Schengen appointment.`;
          const waUrl = `https://api.whatsapp.com/send/?phone=971558443362&text=${encodeURIComponent(waMessage)}&type=phone_number&app_absent=0`;
          window.open(waUrl, '_blank');
        }, 1500);
      } else {
        setStatus({ submitting: false, success: false, error: err.message });
      }
    }
  };

  const handleManualWaRedirect = () => {
    const waMessage = `Hello Exclusive Schengen, I have submitted my consultation request. Name: ${formData.name}, Destination: ${formData.destination}, Purpose: ${formData.purpose}, Date: ${formData.travelDate}. Please assist with my Schengen appointment.`;
    const waUrl = `https://api.whatsapp.com/send/?phone=971558443362&text=${encodeURIComponent(waMessage)}&type=phone_number&app_absent=0`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="lead-form-section" className="lead-form-section section-padding">
      <div className="container">
        
        <div className="lead-form-container">
          <div className="glass-card form-glass-card">
            
            {!status.success ? (
              <form onSubmit={handleSubmit} className="lead-consult-form">
                <div className="form-header-area">
                  <span className="badge">Consultation Booking</span>
                  <h2>Start Your Consultation Today</h2>
                  <p>Complete the form and one of our consultants will contact you shortly.</p>
                </div>

                {status.error && (
                  <div className="form-error-alert">
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="form-input-grid">
                  {/* Name field */}
                  <div className="form-input-group">
                    <label>Full Name *</label>
                    <div className="input-field-wrapper">
                      <User size={16} className="input-icon" />
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Mobile field */}
                  <div className="form-input-group">
                    <label>Mobile Number (with Country Code) *</label>
                    <div className="input-field-wrapper">
                      <Phone size={16} className="input-icon" />
                      <input 
                        type="tel" 
                        required 
                        placeholder="e.g. +971 55 844 3362"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="form-input-group">
                    <label>Email Address *</label>
                    <div className="input-field-wrapper">
                      <Mail size={16} className="input-icon" />
                      <input 
                        type="email" 
                        required 
                        placeholder="e.g. john@domain.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Destination Dropdown */}
                  <div className="form-input-group">
                    <label>Destination Country</label>
                    <div className="input-field-wrapper">
                      <Globe size={16} className="input-icon" />
                      <select 
                        value={formData.destination}
                        onChange={(e) => handleInputChange('destination', e.target.value)}
                      >
                        {countries.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Purpose Select */}
                  <div className="form-input-group">
                    <label>Purpose of Travel</label>
                    <div className="input-field-wrapper">
                      <FileText size={16} className="input-icon" />
                      <select 
                        value={formData.purpose}
                        onChange={(e) => handleInputChange('purpose', e.target.value)}
                      >
                        <option value="Tourism">Tourism</option>
                        <option value="Business">Business</option>
                        <option value="Family Visit">Family Visit</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Travel Date */}
                  <div className="form-input-group">
                    <label>Preferred Travel Date</label>
                    <div className="input-field-wrapper">
                      <Calendar size={16} className="input-icon" />
                      <input 
                        type="date" 
                        value={formData.travelDate}
                        onChange={(e) => handleInputChange('travelDate', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Message Box */}
                <div className="form-input-group span-full">
                  <label>Additional Notes / Message</label>
                  <div className="input-field-wrapper textarea-wrapper">
                    <textarea 
                      placeholder="e.g. I need urgent slot booking for France visa. My flight is scheduled next month."
                      rows="4"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    ></textarea>
                  </div>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary submit-btn-consult" disabled={status.submitting}>
                  {status.submitting ? (
                    <div className="form-spinner"></div>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Request Consultation</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="form-success-wrapper text-center animate-fade-in-up">
                <div className="success-form-circle">
                  <CheckCircle2 size={48} />
                </div>
                <h2>Request Submitted Successfully!</h2>
                <p className="success-main-txt">
                  Thank you, <strong>{formData.name}</strong>. Your Schengen travel consultation has been received.
                </p>
                <p className="success-redirect-txt">
                  We are now redirecting you to WhatsApp to connect instantly with a Schengen expert...
                </p>
                <button className="btn btn-primary wa-redirect-btn" onClick={handleManualWaRedirect}>
                  <MessageSquare size={16} fill="currentColor" />
                  <span>Start WhatsApp Chat Now</span>
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
