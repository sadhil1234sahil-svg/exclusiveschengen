import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadForm from './components/LeadForm';
import ContactCTA from './components/ContactCTA';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import { 
  Trust, Services, Countries, Process, 
  TrustDescription, FAQ, Reviews, Contact 
} from './components/LPSections';
import './App.css';

export default function App() {
  return (
    <Router>
      {/* Decorative Global Background Shaders */}
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      
      {/* Sticky Header */}
      <Navbar />
      
      <main className="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* Repeat CTA after Hero */}
        <ContactCTA />

        {/* 2. Lead Form Section */}
        <LeadForm />

        {/* 3. Trust Grid Section */}
        <Trust />

        {/* 4. Services Grid Section */}
        <Services />

        {/* Repeat CTA after Services */}
        <ContactCTA />

        {/* 5. Countries Grid Section */}
        <Countries />

        {/* Repeat CTA after Countries */}
        <ContactCTA />

        {/* 6. Process Step Timeline */}
        <Process />

        {/* Repeat CTA after Process */}
        <ContactCTA />

        {/* 7. Why People Trust Us Detailed Block */}
        <TrustDescription />

        {/* 8. Customer Testimonials */}
        <Reviews />

        {/* 9. FAQ Accordions */}
        <FAQ />

        {/* Repeat CTA after FAQ */}
        <ContactCTA />

        {/* 10. Contact Information Cards */}
        <Contact />

        {/* Repeat CTA before Footer */}
        <ContactCTA />
      </main>

      {/* Footer Links and Copy */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp & Call) */}
      <FloatingActions />
    </Router>
  );
}
