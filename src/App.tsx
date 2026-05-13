import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BleedSection from './components/BleedSection';
import ROICalculator from './components/ROICalculator';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import VideoPopup from './components/VideoPopup';
import BookingPopup from './components/BookingPopup';
import TestimonialsSection from './components/TestimonialsSection';

export default function App() {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);
  const VIDEO_URL = "https://assets.cdn.filesafe.space/SNDu8PnbHK5mXYgWnUV0/media/68b824a49bcba95afdbb78b0.mov";

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check session storage to only auto-open once per session
      const hasAutoOpened = sessionStorage.getItem('hasAutoOpenedVideo');
      if (!hasAutoOpened) {
        setIsVideoPopupOpen(true);
        sessionStorage.setItem('hasAutoOpenedVideo', 'true');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetStarted={() => setIsBookingPopupOpen(true)} />
      <main>
        <Hero 
          onWatchDemo={() => setIsVideoPopupOpen(true)} 
          onPrimaryAction={() => setIsBookingPopupOpen(true)}
        />
        <BleedSection onAction={() => setIsBookingPopupOpen(true)} />
        <TestimonialsSection />
        <ROICalculator onAction={() => setIsBookingPopupOpen(true)} />
        <CTASection onAction={() => setIsBookingPopupOpen(true)} />
      </main>
      <Footer />

      <VideoPopup 
        isOpen={isVideoPopupOpen} 
        onClose={() => setIsVideoPopupOpen(false)} 
        videoUrl={VIDEO_URL}
      />

      <BookingPopup 
        isOpen={isBookingPopupOpen} 
        onClose={() => setIsBookingPopupOpen(false)} 
      />
    </div>
  );
}
