'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState({ businesses: 0, rating: 0, savings: 0 });

  useEffect(() => {
    setMounted(true);
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setStats({
        businesses: Math.floor(300 * progress),
        rating: +(5.0 * progress).toFixed(1),
        savings: 0
      });
      
      if (currentStep === steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Nuvei_POS.jpg"
          alt="Payment Solution"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Gradient Overlay - from solid blue on left to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] via-[#0066FF]/80 to-transparent"></div>
        {/* Additional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
            PAYMENTS THAT SCALE WITH YOUR BUSINESS
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-10 font-light leading-relaxed">
            Secure, reliable payment solutions built for Australian businesses of all sizes
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className="inline-flex items-center justify-center bg-white text-[#0066FF] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => handleNavClick('#solutions')}
              className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-[#0066FF] transition-all duration-200 active:scale-95"
            >
              Explore Solutions
            </button>
          </div>

          {/* Animated Statistics */}
          <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stats.businesses}+</div>
              <div className="text-xs sm:text-sm text-white/80">Perth Businesses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stats.rating} ★</div>
              <div className="text-xs sm:text-sm text-white/80">Google Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">$0</div>
              <div className="text-xs sm:text-sm text-white/80">Fees</div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 items-center">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sm sm:text-base">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span className="font-semibold text-sm sm:text-base">Australian Support</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sm sm:text-base">Fast Setup</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/80 animate-bounce">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
