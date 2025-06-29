import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        <div>
          <img
            src="/images/logo.svg"
            alt="RAKEZ Logo"
            className="h-10 mb-4"
          />
          <p className="text-sm text-gray-400">
            RAKEZ is your gateway to business in the UAE — offering
            cost-effective, tailored setup solutions with full support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Start Your Journey</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
            <li>
              <a href="#">Why RAKEZ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3">Business Setup</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Company Registration</li>
            <li>Licensing</li>
            <li>Flexi Desks & Offices</li>
            <li>Warehouses</li>
            <li>Visa Services</li>
          </ul>
        </div>

    
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li> Ras Al Khaimah, UAE</li>
            <li> +971 7 204 1111</li>
            <li> info@rakez.com</li>
          </ul>
        </div>
      </div>

      {/* sub-footer */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} RAKEZ. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">
            Facebook
          </a>
          <a href="#">
            X
          </a>
          <a href="#">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
