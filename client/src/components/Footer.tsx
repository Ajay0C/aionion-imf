import { Link } from "wouter";
import aionionLogo from "@assets/ 01 Logo_1751215870950.jpg";

export function Footer() {
  return (
    <footer className="bg-n5 dark:bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={aionionLogo} 
                alt="Aionion Logo" 
                className="w-10 h-6 object-contain"
              />
              <span className="text-white font-bold text-xl">Aionion IMF</span>
            </div>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Making insurance simple, accessible and effective for everyone. Your trusted IRDAI-registered Insurance Marketing Firm.
            </p>
            <p className="text-gray-400">
              Assisting + Comparison + Commitment = <span className="text-red-brand font-semibold">Us</span>
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/renewals" className="text-gray-400 hover:text-white transition-colors">
                  Renewals
                </Link>
              </li>
              <li>
                <Link href="/claims" className="text-gray-400 hover:text-white transition-colors">
                  Claims
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="text-gray-400 hover:text-white transition-colors">
                  Knowledge Centre
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <i className="fas fa-map-marker-alt mr-2"></i>
                No 5/2 Hanumantha Road, Royapettah
              </li>
              <li className="text-gray-400">
                <i className="fas fa-envelope mr-2"></i>
                imf@aioniongroup.com
              </li>
              <li className="text-gray-400">
                <i className="fas fa-clock mr-2"></i>
                Mon-Sat: 9AM-6PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Aionion Insurance Marketing Pvt. Ltd. All rights reserved. | IRDAI License No: IMF 187292360120220503
          </p>
        </div>
      </div>
    </footer>
  );
}
