import { useState } from 'react';
import { 
  Compass, CheckCircle2, User, Landmark, ShieldCheck, 
  ChevronRight, ChevronLeft, Calendar, FileText, Check 
} from 'lucide-react';
import './EligibilityWizard.css';

export default function EligibilityWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    passportCountry: 'India',
    destinationCountry: 'France',
    purpose: 'Tourism',
    duration: '14-30 days',
    employment: 'Employed',
    travelHistory: 'First Time',
    bankStatement: 'Yes',
    appointmentUrgency: 'Urgent'
  });
  
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const calculateResult = () => {
    setIsCalculating(true);
    setTimeout(() => {
      // Logic for calculating score based on selections
      let baseScore = 60;
      
      if (formData.employment === 'Employed' || formData.employment === 'Self-Employed') baseScore += 15;
      if (formData.employment === 'Retired') baseScore += 8;
      
      if (formData.travelHistory === 'Frequent Traveler') baseScore += 15;
      if (formData.travelHistory === 'Visited Schengen Before') baseScore += 10;
      
      if (formData.bankStatement === 'Yes') baseScore += 10;
      
      // Caps score at 99%
      const finalScore = Math.min(baseScore, 99);
      
      let badge = 'Excellent';
      let message = 'Your profile shows strong criteria. We recommend the Premium Gold Plan for complete appointment booking and custom visa presentation letters.';
      
      if (finalScore >= 90) {
        badge = 'Elite/Very High';
        message = 'Exceptional profile. We guarantee appointment booking within 7 days. Your documentation looks robust, and our Elite Platinum package will fast-track your flight/hotel reservations.';
      } else if (finalScore < 75) {
        badge = 'Needs Attention';
        message = 'Standard profile. Due to travel history constraints, you will need a highly detailed Cover Letter and flawless financial representation. Our Silver Plan is the minimum recommended choice.';
      }

      setResult({
        score: finalScore,
        badge,
        message
      });
      setIsCalculating(false);
    }, 1500);
  };

  const resetWizard = () => {
    setStep(1);
    setResult(null);
  };

  return (
    <div className="wizard-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">AI Assessment Engine</span>
          <h2 className="section-title">Check Your Schengen Eligibility</h2>
          <p className="section-subtitle">
            Get an instant evaluation of your profile and discover the exact documents required for your destination.
          </p>
        </div>

        <div className="wizard-card-wrapper">
          <div className="glass-card wizard-card">
            
            {/* Step Progress Bar */}
            {!result && (
              <div className="wizard-progress">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className={`progress-step-item ${step >= num ? 'active' : ''} ${step > num ? 'completed' : ''}`}>
                    <div className="step-circle">
                      {step > num ? <Check size={14} /> : num}
                    </div>
                    <span className="step-label">
                      {num === 1 && 'Destination'}
                      {num === 2 && 'Trip Details'}
                      {num === 3 && 'Background'}
                      {num === 4 && 'Financials'}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Step 1: Destination Selection */}
            {!result && !isCalculating && step === 1 && (
              <div className="wizard-step-content animate-fade-in-up">
                <h3 className="step-title"><Compass className="step-icon" /> Select Destination & Passport</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="passportCountry">Passport Country</label>
                    <select 
                      id="passportCountry"
                      value={formData.passportCountry}
                      onChange={(e) => handleInputChange('passportCountry', e.target.value)}
                    >
                      <option value="India">India</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="United Kingdom">United Kingdom (Non-citizen resident)</option>
                      <option value="Other">Other Visa-Required Passport</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="destinationCountry">Target Schengen Destination</label>
                    <select 
                      id="destinationCountry"
                      value={formData.destinationCountry}
                      onChange={(e) => handleInputChange('destinationCountry', e.target.value)}
                    >
                      <option value="France">France (Fast appointments)</option>
                      <option value="Switzerland">Switzerland (Highly popular)</option>
                      <option value="Italy">Italy (Detailed audits)</option>
                      <option value="Germany">Germany (Strict checklist)</option>
                      <option value="Spain">Spain (Warm approvals)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Trip Details */}
            {!result && !isCalculating && step === 2 && (
              <div className="wizard-step-content animate-fade-in-up">
                <h3 className="step-title"><Calendar className="step-icon" /> Trip Specifications</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Purpose of Visit</label>
                    <div className="options-grid">
                      {['Tourism', 'Business', 'Study/Work', 'Family visit'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className={`option-btn ${formData.purpose === opt ? 'active' : ''}`}
                          onClick={() => handleInputChange('purpose', opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Planned Travel Duration</label>
                    <div className="options-grid">
                      {['Under 14 days', '14 to 30 days', '30 to 90 days', 'More than 90 days'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className={`option-btn ${formData.duration === opt ? 'active' : ''}`}
                          onClick={() => handleInputChange('duration', opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Background Status */}
            {!result && !isCalculating && step === 3 && (
              <div className="wizard-step-content animate-fade-in-up">
                <h3 className="step-title"><User className="step-icon" /> Professional & Travel Status</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Employment Category</label>
                    <select
                      value={formData.employment}
                      onChange={(e) => handleInputChange('employment', e.target.value)}
                    >
                      <option value="Employed">Salaried / Employed (Letter of Reference ready)</option>
                      <option value="Self-Employed">Self-Employed / Business owner (Trade License ready)</option>
                      <option value="Student">Student (Enrollment letter & sponsor)</option>
                      <option value="Retired">Retired (Pension slips / proof of assets)</option>
                      <option value="Unemployed">Not Currently Employed</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Schengen Travel History</label>
                    <div className="options-grid-vertical">
                      {[
                        { val: 'First Time', label: 'First time traveling to Schengen Area' },
                        { val: 'Visited Schengen Before', label: 'Visited Schengen area in the last 3-5 years' },
                        { val: 'Frequent Traveler', label: 'Frequent Traveler (Hold multiple expired/valid visas)' }
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          className={`option-btn option-btn-wide ${formData.travelHistory === item.val ? 'active' : ''}`}
                          onClick={() => handleInputChange('travelHistory', item.val)}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Financial Proofs & Timeline */}
            {!result && !isCalculating && step === 4 && (
              <div className="wizard-step-content animate-fade-in-up">
                <h3 className="step-title"><Landmark className="step-icon" /> Financial & Processing Choice</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>3-6 Month Bank Statement (Showing positive balance & salary/income)?</label>
                    <div className="options-grid">
                      {['Yes', 'No'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className={`option-btn ${formData.bankStatement === opt ? 'active' : ''}`}
                          onClick={() => handleInputChange('bankStatement', opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Appointment Timeline Urgency</label>
                    <div className="options-grid">
                      {[
                        { val: 'Urgent', label: 'Next 15 days' },
                        { val: 'Standard', label: '1 to 2 months' },
                        { val: 'Flexible', label: 'More than 2 months' }
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          className={`option-btn ${formData.appointmentUrgency === item.val ? 'active' : ''}`}
                          onClick={() => handleInputChange('appointmentUrgency', item.val)}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Processing State */}
            {isCalculating && (
              <div className="wizard-loading text-center animate-fade-in-up">
                <div className="spinner"></div>
                <h3 className="loading-title">Analyzing Visa Profiles</h3>
                <p className="loading-text">
                  Checking destination appointment availability slots and document checks...
                </p>
              </div>
            )}

            {/* Assessment Result */}
            {result && !isCalculating && (
              <div className="wizard-result animate-fade-in-up">
                <div className="result-header">
                  <CheckCircle2 className="success-icon" />
                  <h3>Your Visa Assessment Report</h3>
                </div>

                <div className="score-display">
                  <div className="score-ring">
                    <span className="score-percentage">{result.score}%</span>
                    <span className="score-label">Approval Likelihood</span>
                  </div>
                  <div className="score-badge-desc">
                    <span className={`badge-pill result-badge-${result.badge.toLowerCase().replace('/', '-')}`}>
                      {result.badge} Profile Strength
                    </span>
                    <p className="result-text">{result.message}</p>
                  </div>
                </div>

                <div className="result-summary-table">
                  <div className="table-header">Profile Details Captured:</div>
                  <div className="table-row">
                    <span className="table-label">Destination</span>
                    <span className="table-val">{formData.destinationCountry}</span>
                  </div>
                  <div className="table-row">
                    <span className="table-label">Employment Type</span>
                    <span className="table-val">{formData.employment}</span>
                  </div>
                  <div className="table-row">
                    <span className="table-label">Financial Proofs</span>
                    <span className="table-val">{formData.bankStatement === 'Yes' ? 'Bank Statements Confirmed' : 'Needs Asset Structuring'}</span>
                  </div>
                  <div className="table-row">
                    <span className="table-label">Travel History</span>
                    <span className="table-val">{formData.travelHistory}</span>
                  </div>
                </div>

                <div className="wizard-result-actions">
                  <button className="btn btn-secondary" onClick={resetWizard}>
                    Start New Assessment
                  </button>
                  <a href="#packages-section" className="btn btn-primary" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Select Concierge Plan <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            {!result && !isCalculating && (
              <div className="wizard-navigation">
                {step > 1 ? (
                  <button className="btn btn-secondary" onClick={prevStep}>
                    <ChevronLeft size={16} /> Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                <button className="btn btn-primary" onClick={nextStep}>
                  {step === 4 ? 'Compute Approval Score' : 'Next Step'} <ChevronRight size={16} />
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
