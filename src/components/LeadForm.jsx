import { useState } from 'react';
import { Phone, Mail, User, Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import './LeadForm.css';

export default function LeadForm() {
  const accessKey = "3882dd81-49e0-4cc8-9387-342f969403b9";

  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleInputChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    const payload = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: `ExclusiveSchengen Consultation Request – ${formData.name}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });
      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus({ submitting: false, success: true, error: null });
        setTimeout(() => {
          const msg = `Hello Exclusive Schengen, I submitted a consultation request. Name: ${formData.name}, Phone: ${formData.phone}. Please assist.`;
          window.open(`https://api.whatsapp.com/send/?phone=971558443362&text=${encodeURIComponent(msg)}&type=phone_number&app_absent=0`, '_blank');
        }, 1500);
      } else {
        throw new Error(resData.message || "Submission failed.");
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message });
    }
  };

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=+971558443362&text=Hello+The+Schengen%2C+I+need+Schengen+appointment+help.&type=phone_number&app_absent=0";
  const phoneUrl = "tel:+971558443362";

  return (
    <section id="lead-form-section" className="lead-form-section section-padding">
      <div className="container">
        <div className="lead-form-two-col glass-card">

          {/* LEFT COLUMN – Info Panel */}
          <div className="lead-info-col">
            <span className="badge">Free Consultation</span>
            <h2 className="lead-info-title">Start Your Schengen Journey Today</h2>
            <p className="lead-info-para">
              Our experienced consultants are ready to guide you through the entire process — 
              from appointment booking to documentation review. Get in touch and we'll respond within hours.
            </p>

            <div className="lead-contact-list">
              <a href={phoneUrl} className="lead-contact-item">
                <div className="lead-contact-icon-wrap">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="lead-contact-label">Call or WhatsApp</span>
                  <span className="lead-contact-value">+971 55 844 3362</span>
                </div>
              </a>

              <a href="mailto:info@exclusiveschengen.com" className="lead-contact-item">
                <div className="lead-contact-icon-wrap">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="lead-contact-label">Email Us</span>
                  <span className="lead-contact-value">info@exclusiveschengen.com</span>
                </div>
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="lead-contact-item">
                <div className="lead-contact-icon-wrap wa-wrap">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <span className="lead-contact-label">WhatsApp Chat</span>
                  <span className="lead-contact-value">Chat Instantly with an Expert</span>
                </div>
              </a>
            </div>

            <div className="lead-trust-strip">
              <ShieldCheck size={14} className="lead-trust-icon" />
              <span>UAE Based · Trusted by 12,000+ Applicants · Fast Response</span>
            </div>
          </div>

          {/* RIGHT COLUMN – Form */}
          <div className="lead-form-col">
            {!status.success ? (
              <form onSubmit={handleSubmit} className="lead-simple-form">
                <h3 className="form-col-title">Request a Free Callback</h3>
                <p className="form-col-sub">Complete the form and one of our consultants will contact you shortly.</p>

                {status.error && (
                  <div className="form-error-alert">{status.error}</div>
                )}

                <div className="form-input-group">
                  <label htmlFor="lead-name">Full Name *</label>
                  <div className="input-field-wrapper">
                    <User size={16} className="input-icon" />
                    <input
                      id="lead-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-input-group">
                  <label htmlFor="lead-email">Email Address *</label>
                  <div className="input-field-wrapper">
                    <Mail size={16} className="input-icon" />
                    <input
                      id="lead-email"
                      type="email"
                      required
                      placeholder="e.g. john@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-input-group">
                  <label htmlFor="lead-phone">Mobile Number (with Country Code) *</label>
                  <div className="input-field-wrapper">
                    <Phone size={16} className="input-icon" />
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      placeholder="e.g. +971 55 844 3362"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

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

                <p className="form-privacy-note">
                  Your details are secure and will only be used to contact you regarding your enquiry.
                </p>
              </form>
            ) : (
              <div className="form-success-wrapper text-center animate-fade-in-up">
                <div className="success-form-circle">
                  <CheckCircle2 size={44} />
                </div>
                <h3>Request Submitted!</h3>
                <p className="success-main-txt">
                  Thank you, <strong>{formData.name}</strong>. We'll be in touch shortly.
                </p>
                <p className="success-redirect-txt">Redirecting you to WhatsApp for instant assistance…</p>
                <a
                  href={`https://api.whatsapp.com/send/?phone=971558443362&text=${encodeURIComponent(`Hello Exclusive Schengen, I submitted a consultation request. Name: ${formData.name}, Phone: ${formData.phone}. Please assist.`)}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn wa-redirect-btn"
                >
                  <MessageSquare size={16} fill="currentColor" />
                  <span>Open WhatsApp Chat</span>
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
