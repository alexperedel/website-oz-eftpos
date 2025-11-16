'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            One solution for all your business payments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From in-person to online payments, connect everything on one platform
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-32">
          {/* Solution 1: EFTPOS Terminals */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/paxa920_payment-approved.png"
                  alt="EFTPOS Terminal"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="inline-block px-4 py-2 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-semibold mb-4">
                  EFTPOS SOLUTIONS
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Modern payment terminals built for your business
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Accept all payment types with fast, secure terminals that integrate seamlessly with your POS system. Get set up in minutes and start accepting payments today.
                </p>
              </div>
              <div className="space-y-6">
                <Feature
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  }
                  title="All payment methods accepted"
                  description="Contactless, chip, swipe, and digital wallets - accept every payment type your customers prefer"
                />
                <Feature
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z" />
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                    </svg>
                  }
                  title="Seamless POS integration"
                  description="Integrate with 450+ Point of Sale systems for automatic transaction processing"
                />
                <Feature
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  }
                  title="Fast transaction times"
                  description="Lightning-fast payment processing keeps your queues moving and customers happy"
                />
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center text-[#0066FF] font-semibold hover:gap-3 gap-2 transition-all"
              >
                Learn more about terminals
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Solution 2: Online Payments */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-2 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-semibold mb-4">
                  ONLINE PAYMENTS
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Accept payments anywhere, anytime
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Expand beyond the counter with secure online payment solutions. Perfect for e-commerce, invoicing, and remote transactions.
                </p>
              </div>
              <div className="space-y-6">
                <Feature
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  }
                  title="Virtual terminal"
                  description="Take phone and mail orders securely from anywhere with our virtual terminal"
                />
                <Feature
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  }
                  title="Smart invoicing"
                  description="Send professional invoices with secure payment links - get paid faster"
                />
                <Feature
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  }
                  title="E-commerce integration"
                  description="Integrate payment processing directly into your online store or website"
                />
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center text-[#0066FF] font-semibold hover:gap-3 gap-2 transition-all"
              >
                Explore online solutions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-white p-8">
                <Image
                  src="/images/online-payments.png"
                  alt="Online Payments"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Solution 3: Business Dashboard */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/homepage-dashboard-mockup-desktop-new.webp"
                  alt="Business Dashboard"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="inline-block px-4 py-2 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-semibold mb-4">
                  MANAGEMENT TOOLS
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Stay on top of every transaction
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Monitor your sales in real-time with powerful reporting and analytics. Make data-driven decisions to grow your business.
                </p>
              </div>
              <div className="space-y-6">
                <Feature
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  }
                  title="Real-time reporting"
                  description="Track every transaction instantly with detailed reporting and insights"
                />
                <Feature
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  }
                  title="Automated reconciliation"
                  description="Save hours with automatic settlement and reconciliation reports"
                />
                <Feature
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  }
                  title="Business insights"
                  description="Understand your sales trends and customer behavior with detailed analytics"
                />
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center text-[#0066FF] font-semibold hover:gap-3 gap-2 transition-all"
              >
                Discover management tools
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
