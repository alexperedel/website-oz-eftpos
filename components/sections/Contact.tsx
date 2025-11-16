'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', business: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div>
            <span className="inline-block px-3 py-1.5 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-xs font-semibold mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to transform your payment experience?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Get in touch today to discuss how we can help your business save on processing fees and deliver exceptional payment experiences.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+61892289133" className="text-[#0066FF] hover:underline text-base">
                    (08) 9228 9133
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:info@ozeftpos.com.au" className="text-[#0066FF] hover:underline text-base">
                    info@ozeftpos.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600 text-base">
                    Perth, Western Australia
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h4 className="font-bold text-gray-900">Trusted by 150+ Perth businesses</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Join the growing number of businesses saving thousands on processing fees with our expert payment solutions and local support.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-green-900">Message sent successfully!</p>
                  <p className="text-sm text-green-700">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all text-gray-900"
                  placeholder="John Smith"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="0400 000 000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-gray-900 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all text-gray-900"
                  placeholder="Your Business Pty Ltd"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all resize-none text-gray-900"
                  placeholder="Tell us about your payment processing needs..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#0066FF] text-white px-6 py-4 rounded-lg font-semibold text-base hover:bg-[#0052CC] transition-all duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We&apos;ll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
