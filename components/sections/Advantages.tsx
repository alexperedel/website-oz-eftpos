'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

function AdvantageCard({ icon, title, description, highlight = false }: AdvantageCardProps) {
  return (
    <div
      className={`relative p-5 rounded-xl transition-all duration-300 hover:scale-105 ${
        highlight
          ? 'bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white shadow-xl'
          : 'bg-white border border-gray-200 hover:shadow-xl hover:border-[#0066FF]/30'
      }`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
          highlight ? 'bg-white/20' : 'bg-[#0066FF]/10'
        }`}
      >
        <div className={highlight ? 'text-white' : 'text-[#0066FF]'}>{icon}</div>
      </div>
      <h3
        className={`text-lg font-bold mb-2 ${
          highlight ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          highlight ? 'text-white/90' : 'text-gray-600'
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default function Advantages() {
  return (
    <section id="advantages" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1.5 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-xs font-semibold mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Payment solutions designed for your success
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We deliver more than just payment processing. Get the technology, support, and cost savings that help your business thrive.
          </p>
        </div>

        {/* Main Feature with Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src={getImagePath('/images/nuvei_till-terminals_nu01.webp')}
                alt="Modern EFTPOS Terminal"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Zero-cost upgrades with cutting-edge technology
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Access the latest payment technology without upfront costs. We provide premium EFTPOS terminals and integrate them with your existing systems at no charge.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Latest PAX touchscreen terminals</p>
                  <p className="text-gray-600 text-sm">Standalone or integrated with your POS system</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Free POS integration</p>
                  <p className="text-gray-600 text-sm">We handle the complete integration at zero cost</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">All payment methods supported</p>
                  <p className="text-gray-600 text-sm">Contactless, chip, swipe, and digital wallets</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          <AdvantageCard
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            }
            title="Pay zero processing fees"
            description="Over 95% of our clients pay nothing in processing fees. Self-manage surcharging through your merchant portal and save thousands annually."
            highlight={true}
          />
          <AdvantageCard
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            }
            title="Unified merchant portal"
            description="View all payments in real-time across every channel and location. Consolidated reporting makes reconciliation effortless."
          />
          <AdvantageCard
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            }
            title="Perth-based support"
            description="Local expertise you can count on. Over 300 Perth businesses trust us, reflected in our 5-star Google rating."
            highlight={true}
          />
          <AdvantageCard
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            }
            title="Pay by link made simple"
            description="Send secure payment links directly from your portal. Quick for your business, easy for customers. A win-win solution."
          />
          <AdvantageCard
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            }
            title="Fast, reliable & secure"
            description="Bank-grade security across all payment channels. Fast processing keeps your business moving without interruption."
            highlight={true}
          />
          <AdvantageCard
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            }
            title="Seamless setup"
            description="Start accepting payments quickly with our streamlined onboarding. No disruption to your business operations."
          />
        </div>

        {/* Solution Types Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              One ecosystem, every payment channel
            </h3>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Whether you need in-store terminals, online payments, or portable solutions, we&apos;ve got you covered with best-in-class technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Standalone Solutions */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Standalone terminals</h4>
              <p className="text-sm text-gray-600 mb-3">
                Perfect for businesses without a POS system. Accept all payment types with our modern touchscreen terminals. Fast setup, easy to use.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No POS system required</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Portable options available</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ideal for retail & hospitality</span>
                </li>
              </ul>
            </div>

            {/* Integrated Solutions */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 7H7v6h6V7z" />
                  <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Integrated solutions</h4>
              <p className="text-sm text-gray-600 mb-3">
                Seamlessly connect with your existing POS system. We integrate with 450+ systems and handle the entire process at no cost to you.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free integration with your POS</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automatic transaction processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Streamlined operations</span>
                </li>
              </ul>
            </div>

            {/* Payment Gateway */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Payment gateway</h4>
              <p className="text-sm text-gray-600 mb-3">
                Accept online payments securely through your website or e-commerce platform. Perfect for growing your digital presence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure online transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>E-commerce integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Shopping cart compatibility</span>
                </li>
              </ul>
            </div>

            {/* Pay by Link */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Pay by link</h4>
              <p className="text-sm text-gray-600 mb-3">
                Send secure payment links via email or SMS directly from your merchant portal. Get paid faster with minimal effort.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Create links in seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Perfect for invoicing</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No physical terminal needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Ready to transform your payment experience?
          </h3>
          <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Join over 300 Perth businesses saving thousands on processing fees while delivering exceptional payment experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-[#0066FF] text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-[#0052CC] transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Get started today
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="tel:1800000000"
              className="inline-flex items-center justify-center bg-white text-[#0066FF] border-2 border-[#0066FF] px-6 py-3 rounded-lg font-semibold text-base hover:bg-[#0066FF] hover:text-white transition-all duration-200"
            >
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call us now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
