"use client";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../../assests/logo.png"; // replace with your logo path

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#070b07] via-[#1d2116] to-[#0d161b] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Logo & About */}
        <div className="flex flex-col items-start space-y-4">
          <img src={logo} alt="Clinic Logo" className="w-18" />
          <p className="text-gray-100">
            Providing expert healthcare consultation and services for all ages.
            Your health is our priority.
          </p>
        </div>

        {/* Quick Links */}
       <div>
  <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
  <ul className="space-y-2">
    <li>
      <a
        id="home"
        href="#hero"
        className="hover:text-yellow-300 transition-colors"
      >
        Home
      </a>
    </li>
    <li>
      <a
        id="about"
        href="#"
        className="hover:text-yellow-300 transition-colors"
      >
        About
      </a>
    </li>
    <li>
      <a
        id="specialists"
        href=""
        className="hover:text-yellow-300 transition-colors"
      >
        Specialists
      </a>
    </li>
    <li>
      <a
        id="services"
        href=""
        className="hover:text-yellow-300 transition-colors"
      >
        Services
      </a>
    </li>
    <li>
      <a
        id="link-contact"
        href="#contact"
        className="hover:text-yellow-300 transition-colors"
      >
        Contact
      </a>
    </li>
    <li>
      <a
        id="link-privacy"
        href="/"
        className="hover:text-yellow-300 transition-colors"
      >
        Privacy Policy
      </a>
    </li>
  </ul>
</div>


        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <p className="mb-4">
            Have questions? Reach out via WhatsApp or social media!
          </p>
          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <FaWhatsapp size={28} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={28} />
            </a>
          </div>
          <p className="text-gray-200 text-sm">
            © 2025 Dr. Jignesh Sharma & Dr. Vaishali Sharma. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-gray-200 text-sm">
        Developed and Managed by Binarylogix Technologies LLP© 2025
      </div>
    </footer>
  );
}
