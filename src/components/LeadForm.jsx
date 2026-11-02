import { useState, useRef } from 'react';
import { Phone, Mail, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import './LeadForm.css';

export default function LeadForm() {
  const accessKey = "3882dd81-49e0-4cc8-9387-342f969403b9";

  // Web3Forms hCaptcha sitekey:
  // Default Web3Forms key: 50b2fe65-b00b-4b9e-ad62-3ba471098be2
  // (If you configured your own custom sitekey in Web3Forms / hCaptcha dashboard, replace it here)
  const hcaptchaSiteKey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelTimeline: '',
    travelPurpose: '',
    consent: false
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleInputChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=+971543656794&text=Hello+The+ExclusiveSchengen%2C+I+need+Schengen+appointment+help.&type=phone_number&app_absent=0";
  const phoneUrl = "tel:+971543656794";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setStatus({ submitting: false, success: false, error: "Please consent to contact via WhatsApp and phone to proceed." });
      return;
    }

    if (!captchaToken) {
      setStatus({ submitting: false, success: false, error: "Please complete the hCaptcha verification before submitting." });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    const payload = {
      access_key: accessKey,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      travel_timeline: formData.travelTimeline,
      travel_purpose: formData.travelPurpose,
      whatsapp_consent: formData.consent ? "Yes" : "No",
      "h-captcha-response": captchaToken,
      subject: `ExclusiveSchengen Consultation Request – ${formData.name} (${formData.travelPurpose || 'General'})`
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
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
        setTimeout(() => {
          const msg = `Hello The ExclusiveSchengen, I need Schengen appointment help.`;
          window.open(`https://api.whatsapp.com/send/?phone=+971543656794&text=${encodeURIComponent(msg)}&type=phone_number&app_absent=0`, '_blank');
        }, 1500);
      } else {
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
        throw new Error(resData.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
      setStatus({ submitting: false, success: false, error: err.message });
    }
  };

  return (
    <section id="lead-form-section" className="lead-form-section section-padding">
      <div className="container">
        <div className="lead-form-two-col">

          {/* LEFT COLUMN – Info Panel */}
          <div className="lead-info-col glass-card">
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
                  <span className="lead-contact-value">+971 543656794</span>
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

          {/* RIGHT COLUMN – Form Card */}
          <div className="lead-form-col">
            {!status.success ? (
              <form onSubmit={handleSubmit} className="lead-simple-form">
                {status.error && (
                  <div className="form-error-alert">{status.error}</div>
                )}

                {/* Row 1: Full name */}
                <div className="form-field-group">
                  <label htmlFor="lead-name">Full name</label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>

                {/* Row 2: Mobile (WhatsApp) & Email */}
                <div className="form-grid-row">
                  <div className="form-field-group">
                    <label htmlFor="lead-phone">Mobile (WhatsApp)</label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      placeholder="05x xxx xxxx"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="lead-email">Email</label>
                    <input
                      id="lead-email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>

                {/* Row 3: When do you plan to travel? & Purpose of travel */}
                <div className="form-grid-row">
                  <div className="form-field-group">
                    <label htmlFor="lead-timeline">When do you plan to travel?</label>
                    <select
                      id="lead-timeline"
                      required
                      value={formData.travelTimeline}
                      onChange={(e) => handleInputChange('travelTimeline', e.target.value)}
                    >
                      <option value="" disabled>Select</option>
                      <option value="Within 30 days">Within 30 days</option>
                      <option value="1–3 months">1–3 months</option>
                      <option value="3–6 months">3–6 months</option>
                      <option value="Flexible / Not decided yet">Flexible / Not decided yet</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="lead-purpose">Purpose of travel</label>
                    <select
                      id="lead-purpose"
                      required
                      value={formData.travelPurpose}
                      onChange={(e) => handleInputChange('travelPurpose', e.target.value)}
                    >
                      <option value="" disabled>Select</option>
                      <option value="Tourism & Leisure">Tourism & Leisure</option>
                      <option value="Visiting Family or Friends">Visiting Family or Friends</option>
                      <option value="Business & Meetings">Business & Meetings</option>
                      <option value="Other Travel Purposes">Other Travel Purposes</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: WhatsApp & Phone Consent Checkbox */}
                <div className="form-checkbox-row">
                  <input
                    type="checkbox"
                    id="lead-consent"
                    checked={formData.consent}
                    onChange={(e) => handleInputChange('consent', e.target.checked)}
                    required
                  />
                  <label htmlFor="lead-consent" className="form-checkbox-label">
                    I agree to be contacted on WhatsApp and by phone about my enquiry.
                  </label>
                </div>

                {/* hCaptcha Verification */}
                <div className="form-hcaptcha-row">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey={hcaptchaSiteKey}
                    reCaptchaCompat={false}
                    onVerify={(token) => {
                      setCaptchaToken(token);
                      setStatus(prev => ({ ...prev, error: null }));
                    }}
                    onExpire={() => setCaptchaToken(null)}
                    onError={() => setCaptchaToken(null)}
                  />
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary submit-btn-consult" disabled={status.submitting}>
                  {status.submitting ? (
                    <div className="form-spinner"></div>
                  ) : (
                    <span>Request My Free Consultation</span>
                  )}
                </button>

                {/* Disclaimer note */}
                <p className="form-disclaimer-note">
                  We are a private visa consultancy, not a government body. Approval rests solely with the relevant authority.
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
                  href={`https://api.whatsapp.com/send/?phone=+971543656794&text=Hello+The+ExclusiveSchengen%2C+I+need+Schengen+appointment+help.&type=phone_number&app_absent=0`}
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
