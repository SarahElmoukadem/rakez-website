import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        <div>
          <Image
            src="/images/white-logo.svg"
            alt="RAKEZ Logo"
            width={200}
            height={40}
            className="h-auto w-auto max-h-10 object-contain mb-5"
            priority
            data-aos="fade-up"
            data-aos-duration="800"
          />
          <p
            className="text-sm text-gray-400"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            RAKEZ is your gateway to business in the UAE — offering
            cost-effective, tailored setup solutions with full support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-white font-semibold mb-3"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li data-aos="fade-up" data-aos-duration="800">
              <a href="#">Start Your Journey</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="800">
              <a href="#">Services</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="800">
              <a href="#">Offers</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="800">
              <a href="#">Why RAKEZ</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="800">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            className="text-white font-semibold mb-3"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Business Setup
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li data-aos="fade-up" data-aos-duration="800">
              Company Registration
            </li>
            <li data-aos="fade-up" data-aos-duration="800">
              Licensing
            </li>
            <li data-aos="fade-up" data-aos-duration="800">
              Flexi Desks & Offices
            </li>
            <li data-aos="fade-up" data-aos-duration="800">
              Warehouses
            </li>
            <li data-aos="fade-up" data-aos-duration="800">
              Visa Services
            </li>
          </ul>
        </div>

        <div>
          <h4
            className="text-white font-semibold mb-3"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Contact Us
          </h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li data-aos="fade-up" data-aos-duration="800">
              {" "}
              Ras Al Khaimah, UAE
            </li>
            <li data-aos="fade-up" data-aos-duration="800">
              {" "}
              +971 7 204 1111
            </li>
            <li data-aos="fade-up" data-aos-duration="800">
              {" "}
              info@rakez.com
            </li>
          </ul>
        </div>
      </div>

      {/* sub-footer */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p data-aos="fade-up" data-aos-duration="800">
          © {new Date().getFullYear()} RAKEZ. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" data-aos="fade-up" data-aos-duration="800">
            Facebook
          </a>
          <a href="#" data-aos="fade-up" data-aos-duration="800">
            X
          </a>
          <a href="#" data-aos="fade-up" data-aos-duration="800">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
