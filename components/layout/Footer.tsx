'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF] flex items-center justify-center">
                <span className="text-white font-bold text-xl">OZ</span>
              </div>
              <span className="text-xl font-bold text-white">OZ eftpos</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Perth&apos;s trusted payment solutions partner. Specialist payment processing for Australian businesses.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-400">5.0 on Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#solutions" className="text-sm hover:text-[#0066FF] transition-colors">
                  EFTPOS Terminals
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-sm hover:text-[#0066FF] transition-colors">
                  Online Payments
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-sm hover:text-[#0066FF] transition-colors">
                  Payment Gateway
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-sm hover:text-[#0066FF] transition-colors">
                  Pay by Link
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-sm hover:text-[#0066FF] transition-colors">
                  Merchant Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-sm hover:text-[#0066FF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm hover:text-[#0066FF] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#0066FF] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#0066FF] transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+61892289133" className="text-sm hover:text-[#0066FF] transition-colors">
                  (08) 9228 9133
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@ozeftpos.com.au" className="text-sm hover:text-[#0066FF] transition-colors">
                  info@ozeftpos.com.au
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">
                  Perth, Western Australia
                </span>
              </li>
            </ul>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-400 mb-3">Partnered with:</p>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-white">Till Payments</p>
                <p className="text-sm font-semibold text-white">Nuvei Group</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Bar */}
        <div className="border-t border-b border-gray-800 py-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0066FF] mb-1">$0</p>
              <p className="text-xs text-gray-400">Setup Cost</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0066FF] mb-1">95%</p>
              <p className="text-xs text-gray-400">Pay Zero Fees</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0066FF] mb-1">300+</p>
              <p className="text-xs text-gray-400">Perth Businesses</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0066FF] mb-1">5.0</p>
              <p className="text-xs text-gray-400">Google Rating</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © {currentYear} OZ eftpos. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
