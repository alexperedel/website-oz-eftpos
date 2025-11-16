'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#0066FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1.5 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-xs font-semibold mb-3">
            ABOUT OZ EFTPOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perth&apos;s trusted payment solutions partner
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            In our rapidly changing world, how your customers pay you can have a significant impact on profitability, efficiency, and customer satisfaction.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Specialist payment processing solutions for Australian businesses
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                OZ eftpos specializes in the latest customer payment processing solutions for businesses. We are based in Perth, Western Australia, and work across all industries, payment methods and channels.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We work in partnership with <strong className="text-gray-900">Till Payments</strong>, the leading Australian Payments Service Provider (PSP), and the <strong className="text-gray-900">Nuvei Group</strong>, a global market-leading PSP. This partnership gives you access to the latest technologies and integrations, while we provide the advice and support that ensures you get the best solution for your business—now and into the future.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gradient-to-br from-[#0066FF]/5 to-[#0066FF]/10 rounded-xl p-5 border border-[#0066FF]/10">
                <div className="text-3xl font-bold text-[#0066FF] mb-1">150+</div>
                <div className="text-sm text-gray-700 font-medium">Perth businesses trust us</div>
              </div>
              <div className="bg-gradient-to-br from-[#0066FF]/5 to-[#0066FF]/10 rounded-xl p-5 border border-[#0066FF]/10">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-3xl font-bold text-[#0066FF]">5.0</span>
                  <svg className="w-6 h-6 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-700 font-medium">Google rating</div>
              </div>
              <div className="bg-gradient-to-br from-[#0066FF]/5 to-[#0066FF]/10 rounded-xl p-5 border border-[#0066FF]/10">
                <div className="text-3xl font-bold text-[#0066FF] mb-1">95%</div>
                <div className="text-sm text-gray-700 font-medium">Pay zero processing fees</div>
              </div>
              <div className="bg-gradient-to-br from-[#0066FF]/5 to-[#0066FF]/10 rounded-xl p-5 border border-[#0066FF]/10">
                <div className="text-3xl font-bold text-[#0066FF] mb-1">$0</div>
                <div className="text-sm text-gray-700 font-medium">Setup & integration cost</div>
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Our expertise</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                We specialize in payment solutions across all industries, payment methods, and channels. Our deep knowledge ensures you get the right solution for your specific business needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Our commitment</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our promise is simple: the best advice, solutions, and ongoing support. Our long-term success depends on you being happy with us. We&apos;re Perth-based and only a phone call away.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Our technology partners</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Partnered with Till Payments and Nuvei Group, we deliver cutting-edge payment technology with the personal service and local support that sets us apart.
              </p>
            </div>
          </div>
        </div>

        {/* Key Benefits Banner */}
        <div className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] rounded-2xl p-8 md:p-10 text-white mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Why businesses choose OZ eftpos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-semibold mb-1">Upgrade at no cost</p>
                <p className="text-sm text-white/90">No disruption to your business operations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-semibold mb-1">Fast & secure payments</p>
                <p className="text-sm text-white/90">Reliable across all channels</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-semibold mb-1">Real-time reporting</p>
                <p className="text-sm text-white/90">View all payment information instantly</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-semibold mb-1">Self-manage surcharging</p>
                <p className="text-sm text-white/90">Save thousands on processing fees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
