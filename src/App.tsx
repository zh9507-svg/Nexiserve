import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BleedSection from './components/BleedSection';
import ROICalculator from './components/ROICalculator';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BookingPopup from './components/BookingPopup';
import AgentTestPopup from './components/AgentTestPopup';
import TestimonialsSection from './components/TestimonialsSection';

export default function App() {
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);
  const [isAgentTestPopupOpen, setIsAgentTestPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetStarted={() => setIsBookingPopupOpen(true)} />
      <main>
        <Hero 
          onPrimaryAction={() => setIsBookingPopupOpen(true)}
          onTestAction={() => setIsAgentTestPopupOpen(true)}
        />
        <BleedSection onAction={() => setIsBookingPopupOpen(true)} />
        <TestimonialsSection />
        <ROICalculator onAction={() => setIsBookingPopupOpen(true)} />
        <CTASection 
          onAction={() => setIsBookingPopupOpen(true)} 
          onTestAction={() => setIsAgentTestPopupOpen(true)}
        />
      </main>
      <Footer />

      <BookingPopup 
        isOpen={isBookingPopupOpen} 
        onClose={() => setIsBookingPopupOpen(false)} 
      />

      <AgentTestPopup 
        isOpen={isAgentTestPopupOpen} 
        onClose={() => setIsAgentTestPopupOpen(false)} 
      />
    </div>
  );
}
