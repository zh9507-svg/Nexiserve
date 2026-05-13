import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BleedSection from './components/BleedSection';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import ROICalculator from './components/ROICalculator';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BleedSection />
        <Features />
        <Testimonial />
        <ROICalculator />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
