"use client";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../../assests/logo.png"; // replace with your logo path
import { Link as ScrollLink } from "react-scroll"; // npm install react-scroll

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#070b07] via-[#1d2116] to-[#0d161b] text-white py-8 px-6">
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
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li>
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="affiliations"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                Specialists
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                Contact
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Testimonial"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                Testimonial
              </ScrollLink>
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
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-gray-200 text-sm">
        Developed and Managed by Binarylogix Technologies LLP© 2025
      </div>
    </footer>
  );
}
